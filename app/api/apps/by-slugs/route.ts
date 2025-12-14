import type { NextRequest } from "next/server"
import { apps } from "@/lib/data/apps"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const list = (searchParams.get("apps") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
  const found = apps.filter((a) => list.includes(a.slug))
  return Response.json({ items: found })
}
