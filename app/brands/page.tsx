import { Link } from "react-router-dom"
import { brands } from "@/lib/data/brands"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BrandsDirectoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4" aria-label="Breadcrumb">
        <Link to="/" className="text-primary underline underline-offset-4" aria-label="Go to Home">
          {"← Home"}
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground text-balance">Brands</h1>
        <p className="text-muted-foreground mt-1">Browse publishers and discover their applications.</p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brands.map((b) => (
          <Link key={b.slug} to={`/brands/${b.slug}`} className="no-underline">
            <Card className="bg-card hover:bg-accent transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
                  <img src={b.logoUrl || "/placeholder-logo.svg"} alt={`${b.name} logo`} width={48} height={48} />
                </div>
                <div className="min-w-0">
                  <CardTitle className="text-foreground truncate">{b.name}</CardTitle>
                </div>
              </CardHeader>
              {b.description ? (
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{b.description}</p>
                </CardContent>
              ) : null}
            </Card>
          </Link>
        ))}
      </section>
    </main>
  )
}
