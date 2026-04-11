import { NextResponse } from "next/server"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

export async function GET() {
  try {
    const res = await fetch(`${BACKEND}/categories`, { next: { revalidate: 3600 } })
    if (!res.ok) throw new Error()
    const cats = await res.json()
    const collections = cats.slice(0, 6).map((c: any) => ({
      slug: c.name.toLowerCase().replace(/\s+/g, "-"),
      id: `collection.${c.name.toLowerCase()}`,
      name: c.name,
      description: c.description || `Apps in the ${c.name} category.`,
      iconUrl: null,
      count: 0,
    }))
    return NextResponse.json({ collections })
  } catch {
    return NextResponse.json({ collections: [] })
  }
}
