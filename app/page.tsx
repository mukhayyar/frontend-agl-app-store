import Link from "next/link"
import { AppsBrowser } from "@/components/apps-browser"
import { getCategoryMeta } from "@/lib/categories"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

async function getStats() {
  try {
    const res = await fetch(`${BACKEND}/stats`, { next: { revalidate: 300 } })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

async function getCategories(): Promise<{ name: string; description: string }[]> {
  try {
    const res = await fetch(`${BACKEND}/categories`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function HomePage() {
  const [stats, categories] = await Promise.all([getStats(), getCategories()])

  return (
    <main className="container mx-auto px-4 py-8 space-y-10">
      <header>
        <h1 className="text-4xl font-bold text-foreground">PensHub App Store</h1>
        <p className="text-muted-foreground mt-2 text-lg">
          Discover and install Linux desktop applications.
        </p>
        {stats && (
          <div className="flex gap-6 mt-4">
            <div>
              <span className="text-2xl font-bold text-foreground">{stats.total_apps}</span>
              <span className="text-sm text-muted-foreground ml-1.5">apps</span>
            </div>
            {stats.total_categories > 0 && (
              <div>
                <span className="text-2xl font-bold text-foreground">{stats.total_categories}</span>
                <span className="text-sm text-muted-foreground ml-1.5">categories</span>
              </div>
            )}
          </div>
        )}
      </header>

      {categories.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">Browse by Category</h2>
            <Link href="/categories" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {categories.slice(0, 12).map((cat) => {
              const meta = getCategoryMeta(cat.name)
              return (
                <Link
                  key={cat.name}
                  href={`/categories/${cat.name}`}
                  className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-4 hover:bg-accent/50 transition-colors text-center"
                >
                  <span className="text-2xl">{meta.icon}</span>
                  <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-tight">
                    {meta.displayName}
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold text-foreground mb-4">All Apps</h2>
        <AppsBrowser />
      </section>
    </main>
  )
}
