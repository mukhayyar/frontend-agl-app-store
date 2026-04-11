import { type NextRequest, NextResponse } from "next/server"
import { apps as staticApps } from "@/lib/data/apps"

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8002"

function mapBackendApp(a: Record<string, any>) {
  const slug = (a.id as string).replace(/\./g, "-").toLowerCase()
  return {
    slug,
    id: a.id,
    name: a.name || a.id,
    summary: a.summary || "",
    description: a.description || "",
    developer: a.developer_name || "",
    category: Array.isArray(a.categories) && a.categories.length > 0 ? a.categories[0] : "",
    license: a.project_license || "",
    iconUrl: a.icon || null,
    tags: Array.isArray(a.categories) ? a.categories : [],
    updatedAt: a.updated_at || null,
    brands: [],
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get("search") || ""
  const category = searchParams.get("category") || ""
  const brand = (() => {
    const b = searchParams.get("brand") || ""
    return b === "all" ? "" : b
  })()

  try {
    const params = new URLSearchParams()
    if (q) params.set("search", q)
    if (category) params.set("category", category)
    params.set("limit", "100")

    const res = await fetch(`${BACKEND_URL}/apps?${params}`, {
      next: { revalidate: 30 },
    })
    if (res.ok) {
      const backendApps: Record<string, any>[] = await res.json()
      const mapped = backendApps.map(mapBackendApp)
      const filtered = brand ? mapped.filter((a) => (a.brands as string[]).includes(brand)) : mapped
      return NextResponse.json({ apps: filtered })
    }
  } catch (_) {
    // fall through to static data
  }

  // Fallback: static data
  const filtered = staticApps.filter((a) => {
    const matchesCategory = category ? a.category === category : true
    const matchesBrand = brand ? (a.brands || []).includes(brand) : true
    const matchesSearch = q
      ? [a.name, a.summary, a.description, a.developer, ...(a.tags || [])]
          .filter(Boolean)
          .some((v) => v!.toLowerCase().includes(q.toLowerCase()))
      : true
    return matchesCategory && matchesBrand && matchesSearch
  })
  return NextResponse.json({ apps: filtered })
}
