export type AppCategory = "Audio" | "Graphics" | "Productivity" | "Development" | "Utilities" | "Games"

export type AppItem = {
  slug: string
  id: string
  name: string
  summary: string
  description: string
  developer: string
  category: AppCategory
  license?: string
  homepageUrl?: string
  repoUrl?: string
  flathubId?: string
  iconUrl?: string
  screenshots?: string[]
  tags?: string[]
  // New: many-to-many brands by slug
  brands?: string[]
  installs?: number
}

export type BrandItem = {
  slug: string
  id: string
  name: string
  description?: string
  logoUrl?: string
  websiteUrl?: string
  featured?: boolean
}

// New: CollectionItem type
export type CollectionItem = {
  slug: string
  id: string
  name: string
  description?: string
  iconUrl?: string
  appSlugs: string[]
}
