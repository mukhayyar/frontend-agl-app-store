import type { AppItem } from "@/lib/types"

export function normalizeApp(raw: any): AppItem {
  return {
    id: raw.id,
    name: raw.name || raw.id,
    summary: raw.summary,
    description: raw.description,
    developer: raw.developer_name,
    category: raw.categories?.[0],
    license: raw.project_license,
    homepageUrl: raw.homepage,
    iconUrl: raw.icon,
    screenshots: raw.screenshots?.flatMap((s: any) =>
      s.sizes?.map((sz: any) => sz.src) || []
    ) || [],
    categories: raw.categories || [],
    updated_at: raw.updated_at,
    added_at: raw.added_at,
    is_verified: raw.is_verified,
    expires_at: raw.expires_at,
  }
}
