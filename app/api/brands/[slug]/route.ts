import { NextResponse } from "next/server"
import { getBrandBySlug, getAppsForBrand } from "@/lib/data/brands"

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const brand = getBrandBySlug(params.slug)
  if (!brand) {
    return NextResponse.json({ error: "Brand not found" }, { status: 404 })
  }
  const apps = getAppsForBrand(brand.slug)
  return NextResponse.json({ brand, apps })
}
