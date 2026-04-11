import { NextResponse } from "next/server"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/categories`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error()
    const cats = await res.json()
    return NextResponse.json({ categories: cats })
  } catch {
    return NextResponse.json({ categories: [] })
  }
}
