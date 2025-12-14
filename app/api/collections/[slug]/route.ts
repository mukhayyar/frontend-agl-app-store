import { NextResponse } from "next/server"
import { getCollectionBySlug } from "@/lib/data/collections"
import { getAppBySlug } from "@/lib/data/apps"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const collection = getCollectionBySlug(params.slug)
  if (!collection) {
    return NextResponse.json({ error: "Collection not found" }, { status: 404 })
  }
  const apps = collection.appSlugs.map((s) => getAppBySlug(s)).filter(Boolean)

  return NextResponse.json({ collection, apps })
}
