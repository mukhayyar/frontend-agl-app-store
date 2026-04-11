import Link from "next/link"
import { notFound } from "next/navigation"
import { AppCard } from "@/components/app-card"
import { getCategoryMeta } from "@/lib/categories"
import type { AppItem } from "@/lib/types"
import { normalizeApp } from "@/lib/data/apps"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

async function getCategoryApps(slug: string): Promise<AppItem[]> {
  try {
    const res = await fetch(
      `${BACKEND}/apps?category=${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    )
    if (!res.ok) return []
    const raw: any[] = await res.json()
    return raw.map(normalizeApp)
  } catch {
    return []
  }
}

async function categoryExists(slug: string): Promise<boolean> {
  try {
    const res = await fetch(`${BACKEND}/categories`, { next: { revalidate: 3600 } })
    if (!res.ok) return false
    const cats: { name: string }[] = await res.json()
    return cats.some((c) => c.name === slug)
  } catch {
    return false
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const [exists, apps] = await Promise.all([categoryExists(slug), getCategoryApps(slug)])

  if (!exists) notFound()

  const meta = getCategoryMeta(slug)

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-2">
        <Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← All Categories
        </Link>
      </div>

      <header className="flex items-center gap-4 mb-8">
        <span className="text-5xl">{meta.icon}</span>
        <div>
          <h1 className="text-3xl font-bold text-foreground">{meta.displayName}</h1>
          <p className="text-muted-foreground mt-1">
            {apps.length === 0
              ? "No apps in this category yet"
              : `${apps.length} app${apps.length !== 1 ? "s" : ""}`}
          </p>
        </div>
      </header>

      {apps.length === 0 ? (
        <div className="text-center py-24 border border-dashed rounded-xl">
          <p className="text-5xl mb-4">{meta.icon}</p>
          <p className="text-xl font-semibold text-foreground">No apps here yet</p>
          <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
            Be the first to submit a <span className="font-medium">{meta.displayName}</span> app to the store.
          </p>
          <Link
            href="https://admin.agl-store.cyou/developer/portal"
            className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Submit an App
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </main>
  )
}
