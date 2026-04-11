import { type NextRequest, NextResponse } from "next/server"
import { normalizeApp } from "@/lib/data/apps"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const res = await fetch(`${BACKEND}/apps/${encodeURIComponent(params.id)}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return NextResponse.json(null, { status: 404 })
    const raw = await res.json()
    return NextResponse.json(normalizeApp(raw))
  } catch {
    return NextResponse.json(null, { status: 500 })
  }
}
