import { useParams, Link } from "react-router-dom"
import { getCollectionBySlug } from "@/lib/data/collections"
import { getAppBySlug } from "@/lib/data/apps"
import { AppCard } from "@/components/app-card"
import { Button } from "@/components/ui/button"

export default function CollectionDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const collection = getCollectionBySlug(slug!)
  if (!collection) return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Collection not found</h1>
      <div className="mt-6">
        <Link to="/collections" className="text-primary underline underline-offset-4">{"← Back to collections"}</Link>
      </div>
    </main>
  )

  const apps = collection.appSlugs.map((s) => getAppBySlug(s)).filter(Boolean)

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4">
        <Link to="/collections" className="text-primary underline underline-offset-4">
          {"← Back to collections"}
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-pretty">{collection.name}</h1>
        {collection.description ? <p className="text-muted-foreground mt-2">{collection.description}</p> : null}
        <div className="mt-3">
          <Button asChild variant="outline">
            <Link to="/brands/pens-agl-store">Explore PENS AGL STORE</Link>
          </Button>
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-3">Apps</h2>
        {apps.length === 0 ? (
          <p className="text-sm text-muted-foreground">No apps in this collection yet.</p>
        ) : (
          <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((a) => (
              <div role="listitem" key={a!.slug}>
                <AppCard app={a!} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
