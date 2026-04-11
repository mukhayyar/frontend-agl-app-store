import { NextResponse } from "next/server"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/stats`, { next: { revalidate: 300 } })
    if (!res.ok) throw new Error()
    return NextResponse.json(await res.json())
  } catch {
    return NextResponse.json({ total_apps: 0, total_users: 0, total_categories: 0 })
  }
}
