import type { CollectionItem } from "@/lib/types"

export const collections: CollectionItem[] = [
  {
    slug: "editors-choice",
    id: "collection.editors-choice",
    name: "Editors' Choice",
    description: "Hand-picked apps that deliver great UX and reliability.",
    iconUrl: "/star-badge.png",
    appSlugs: ["soundwave", "pixelcraft", "taskwise"],
  },
  {
    slug: "lightweight",
    id: "collection.lightweight",
    name: "Lightweight & Fast",
    description: "Snappy tools that start fast and stay out of your way.",
    iconUrl: "/feather-light.jpg",
    appSlugs: ["devpad", "soundwave"],
  },
  {
    slug: "open-source-stars",
    id: "collection.open-source-stars",
    name: "Open Source Stars",
    description: "Community favorites with permissive licenses.",
    iconUrl: "/oss-trophy.jpg",
    appSlugs: ["pixelcraft", "taskwise"],
  },
]

export function getCollectionBySlug(slug: string): CollectionItem | undefined {
  return collections.find((c) => c.slug === slug)
}
