import Link from "next/link"

export default function BrandsDirectoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="mb-4" aria-label="Breadcrumb">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Home
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground text-balance">Brands</h1>
        <p className="text-muted-foreground mt-1">Browse publishers and discover their applications.</p>
      </header>

      <section>
        <p className="text-sm text-muted-foreground">No brands available yet.</p>
      </section>
    </main>
  )
}
