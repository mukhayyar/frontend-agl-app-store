import Link from "next/link"
import { notFound } from "next/navigation"
import { getCollectionBySlug } from "@/lib/data/collections"
import { AppCard } from "@/components/app-card"
import { normalizeApp } from "@/lib/data/apps"
import type { AppItem } from "@/lib/types"

const BACKEND = process.env.BACKEND_URL || "https://api.agl-store.cyou"

async function getAppsForCollection(appIds: string[]): Promise<AppItem[]> {
  if (appIds.length === 0) return []
  try {
    const results = await Promise.all(
      appIds.map(async (id) => {
        const res = await fetch(`${BACKEND}/apps/${encodeURIComponent(id)}`, {
          next: { revalidate: 300 },
        })
        if (!res.ok) return null
        return normalizeApp(await res.json())
      })
    )
    return results.filter((a): a is AppItem => a !== null)
  } catch {
    return []
  }
}

export default async function CollectionDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const collection = getCollectionBySlug(slug)
  if (!collection) return notFound()

  const apps = await getAppsForCollection(collection.appIds)

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4">
        <Link href="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Back to collections
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-pretty">{collection.name}</h1>
        {collection.description ? <p className="text-muted-foreground mt-2">{collection.description}</p> : null}
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-3">Apps</h2>
        {apps.length === 0 ? (
          <p className="text-sm text-muted-foreground">No apps in this collection yet.</p>
        ) : (
          <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((a) => (
              <div role="listitem" key={a.id}>
                <AppCard app={a} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
