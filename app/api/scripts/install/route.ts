import type { NextRequest } from "next/server"
import { normalizeApp } from "@/lib/data/apps"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

function sh(script: string) {
  return script.replace(/\n{2,}/g, "\n").trim() + "\n"
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const appIds = (searchParams.get("apps") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const includeRemote = searchParams.get("includeRemote") !== "false"

  let ids: string[] = []
  if (appIds.length > 0) {
    try {
      const results = await Promise.all(
        appIds.map(async (id) => {
          const res = await fetch(`${BACKEND}/apps/${encodeURIComponent(id)}`, {
            next: { revalidate: 300 },
          })
          if (!res.ok) return null
          return normalizeApp(await res.json())
        })
      )
      ids = results.filter(Boolean).map((a) => a!.id)
    } catch {
      ids = appIds
    }
  }

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
