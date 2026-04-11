import { useParams, Link } from "react-router-dom"
import { getBrandBySlug, getAppsForBrand } from "@/lib/data/brands"
import { Button } from "@/components/ui/button"
import { AppCard } from "@/components/app-card"

export default function BrandDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const brand = getBrandBySlug(slug!)
  if (!brand) return (
    <main className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-semibold text-foreground">Brand not found</h1>
      <div className="mt-6">
        <Link to="/brands" className="text-primary underline underline-offset-4">{"← Back to brands"}</Link>
      </div>
    </main>
  )

  const apps = getAppsForBrand(brand.slug)

  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4" aria-label="Breadcrumb">
        <Link to="/" className="text-primary underline underline-offset-4 mr-3" aria-label="Go to Home">
          {"← Home"}
        </Link>
        <Link to="/brands" className="text-primary underline underline-offset-4" aria-label="Back to Brands directory">
          {"Back to brands"}
        </Link>
      </nav>

      <header className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          <img src={brand.logoUrl || "/placeholder-logo.svg"} alt={`${brand.name} logo`} width={64} height={64} />
        </div>
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold text-foreground text-pretty">{brand.name}</h1>
          {brand.description ? <p className="text-muted-foreground mt-2">{brand.description}</p> : null}
          <div className="flex gap-2 mt-3">
            {brand.websiteUrl ? (
              <Button asChild variant="outline">
                <a href={brand.websiteUrl} target="_blank" rel="noreferrer">
                  Website
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </header>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-3 text-foreground">Apps by {brand.name}</h2>
        {apps.length === 0 ? (
          <p className="text-sm text-muted-foreground">No apps found for this brand.</p>
        ) : (
          <div role="list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {apps.map((app) => (
              <div role="listitem" key={app.slug}>
                <AppCard app={app} />
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
