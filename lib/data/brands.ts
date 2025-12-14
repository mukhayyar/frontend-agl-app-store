import type { BrandItem } from "@/lib/types"
import { apps } from "@/lib/data/apps"

export const brands: BrandItem[] = [
  {
    slug: "pens-agl-store",
    id: "brand.pens-agl-store",
    name: "PENS AGL STORE",
    description:
      "A curated collection of quality desktop apps. Discover tools across audio, graphics, and productivity categories.",
    logoUrl: "/pens-agl-store-logo.jpg",
    websiteUrl: "https://example.com/pens-agl-store",
    featured: true,
  },
]

export function getBrandBySlug(slug: string): BrandItem | undefined {
  return brands.find((b) => b.slug === slug)
}

export function getAppsForBrand(slug: string) {
  return apps.filter((a) => (a.brands || []).includes(slug))
}
