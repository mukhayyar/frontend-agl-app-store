export type AppItem = {
  id: string           // reverse domain ID, used as URL slug too
  name: string
  summary?: string
  description?: string
  developer?: string   // maps from developer_name
  category?: string    // first category if any
  license?: string     // maps from project_license
  homepageUrl?: string
  iconUrl?: string     // maps from icon
  screenshots?: string[]
  categories?: string[]
  updated_at?: string
  added_at?: string
  is_verified?: boolean
}

export type CategoryItem = {
  name: string        // slug e.g. "AudioVideo"
  description?: string
  displayName?: string
}

export type PlatformStats = {
  total_apps: number
  total_users: number
  total_categories: number
}

// Static curated collections (editorial, not from backend)
export type CollectionItem = {
  slug: string
  id: string
  name: string
  description?: string
  iconUrl?: string | null
  appIds: string[]
}
