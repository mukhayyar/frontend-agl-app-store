import { type NextRequest, NextResponse } from "next/server"
import { normalizeApp } from "@/lib/data/apps"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const params = new URLSearchParams()

  const search = searchParams.get("search")
  const category = searchParams.get("category")
  if (search) params.set("search", search)
  if (category && category !== "all") params.set("category", category)
  params.set("limit", "100")

  try {
    const res = await fetch(`${BACKEND}/apps?${params}`, {
      next: { revalidate: 60 },
      headers: { "Accept": "application/json" },
    })
    if (!res.ok) throw new Error(`Backend ${res.status}`)
    const raw: any[] = await res.json()
    return NextResponse.json({ apps: raw.map(normalizeApp) })
  } catch {
    return NextResponse.json({ apps: [] })
  }
}
