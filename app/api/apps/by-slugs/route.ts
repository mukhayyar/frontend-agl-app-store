import type { NextRequest } from "next/server"
import { normalizeApp } from "@/lib/data/apps"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const list = (searchParams.get("apps") || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  if (list.length === 0) return Response.json({ items: [] })

  try {
    const results = await Promise.all(
      list.map(async (id) => {
        const res = await fetch(`${BACKEND}/apps/${encodeURIComponent(id)}`, {
          next: { revalidate: 300 },
        })
        if (!res.ok) return null
        return normalizeApp(await res.json())
      })
    )
    return Response.json({ items: results.filter(Boolean) })
  } catch {
    return Response.json({ items: [] })
  }
}
