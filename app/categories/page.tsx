import Link from "next/link"
import { getCategoryMeta } from "@/lib/categories"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

async function getCategories(): Promise<{ name: string; description: string }[]> {
  try {
    const res = await fetch(`${BACKEND}/categories`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

async function getAppCountByCategory(): Promise<Record<string, number>> {
  try {
    const res = await fetch(`${BACKEND}/apps`, { next: { revalidate: 300 } })
    if (!res.ok) return {}
    const apps: { categories?: string[] }[] = await res.json()
    const counts: Record<string, number> = {}
    for (const app of apps) {
      for (const cat of (app.categories || [])) {
        counts[cat] = (counts[cat] || 0) + 1
      }
    }
    return counts
  } catch {
    return {}
  }
}

export default async function CategoriesPage() {
  const [categories, counts] = await Promise.all([getCategories(), getAppCountByCategory()])

  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Browse by Category</h1>
        <p className="text-muted-foreground mt-1">Find apps organized by what they do.</p>
      </header>

      {categories.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">📂</p>
          <p className="text-xl font-semibold text-foreground">No categories yet</p>
          <p className="text-muted-foreground mt-2">Categories will appear once apps are submitted.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => {
            const meta = getCategoryMeta(cat.name)
            const count = counts[cat.name] || 0
            return (
              <Link
                key={cat.name}
                href={`/categories/${cat.name}`}
                className="group flex flex-col gap-2 rounded-xl border bg-card p-5 hover:bg-accent/50 transition-colors"
              >
                <span className="text-3xl">{meta.icon}</span>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {meta.displayName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{cat.description}</p>
                </div>
                <p className="text-xs text-muted-foreground mt-auto pt-2 border-t border-border">
                  {count === 0 ? "No apps yet" : `${count} app${count !== 1 ? "s" : ""}`}
                </p>
              </Link>
            )
          })}
        </div>
      )}
    </main>
  )
}
