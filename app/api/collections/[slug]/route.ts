import { NextResponse } from "next/server"
import { getCollectionBySlug } from "@/lib/data/collections"

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) {
    return NextResponse.json({ error: "Collection not found" }, { status: 404 })
  }
  return NextResponse.json({ collection, apps: [] })
}
