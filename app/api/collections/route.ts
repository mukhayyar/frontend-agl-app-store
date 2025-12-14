import { NextResponse } from "next/server"
import { collections } from "@/lib/data/collections"

export async function GET() {
  return NextResponse.json({
    collections: collections.map((c) => ({
      slug: c.slug,
      id: c.id,
      name: c.name,
      description: c.description,
      iconUrl: c.iconUrl,
      count: c.appSlugs.length,
    })),
  })
}
