import type { NextRequest } from "next/server"
import { apps } from "@/lib/data/apps"

function sh(script: string) {
  return script.replace(/\n{2,}/g, "\n").trim() + "\n"
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const appSlugs = (searchParams.get("apps") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const includeRemote = searchParams.get("includeRemote") !== "false"

  const selected = apps.filter((a) => appSlugs.includes(a.slug))
  const ids = selected.map((a) => a.flathubId || a.id || a.slug).filter(Boolean)

  const script = sh(`#!/usr/bin/env bash
set -euo pipefail

${
  includeRemote
    ? `# Ensure Flathub remote exists
if ! flatpak remotes | grep -q '^flathub\\b'; then
  flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
fi
`
    : ""
}# Install selected apps
${ids.map((id) => `flatpak install -y flathub ${id}`).join("\n")}
echo "Done."
`)

  return new Response(script, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="install.sh"',
    },
  })
}
