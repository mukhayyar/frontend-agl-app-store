import type { CollectionItem } from "@/lib/types"

export const collections: CollectionItem[] = [
  {
    slug: "featured",
    id: "collection.featured",
    name: "Featured Apps",
    description: "Hand-picked apps from PensHub.",
    iconUrl: null,
    appIds: [] as string[], // populated from API
  },
]

export function getCollectionBySlug(slug: string): CollectionItem | undefined {
  return collections.find((c) => c.slug === slug)
}
