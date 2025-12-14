import Link from "next/link"

export default function DiscoverPage() {
  return (
    <main className="container mx-auto max-w-6xl p-4">
      <nav className="mb-4" aria-label="Breadcrumb">
        <Link href="/" className="underline underline-offset-4 text-primary" aria-label="Go to Home">
          {"← Home"}
        </Link>
      </nav>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground text-balance">Discover</h1>
        <p className="text-sm text-muted-foreground">
          Explore trending, new & updated apps, curated collections, and featured brands.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="rounded-lg border p-4 bg-background">
          <h2 className="font-medium text-foreground mb-2">Trending</h2>
          <p className="text-sm text-muted-foreground mb-3">See what’s popular this week.</p>
          <Link href="/trending" className="underline underline-offset-4 text-foreground">
            View trending
          </Link>
        </article>

        <article className="rounded-lg border p-4 bg-background">
          <h2 className="font-medium text-foreground mb-2">New & Updated</h2>
          <p className="text-sm text-muted-foreground mb-3">Fresh releases and recently updated apps.</p>
          <Link href="/new" className="underline underline-offset-4 text-foreground">
            Browse new & updated
          </Link>
        </article>

        {/* Collections */}
        <article className="rounded-lg border p-4 bg-background">
          <h2 className="font-medium text-foreground mb-2">Collections</h2>
          <p className="text-sm text-muted-foreground mb-3">Curated picks by theme and use case.</p>
          <Link href="/collections" className="underline underline-offset-4 text-foreground">
            Browse collections
          </Link>
        </article>

        <article className="rounded-lg border p-4 bg-background">
          <h2 className="font-medium text-foreground mb-2">Featured brand</h2>
          <p className="text-sm text-muted-foreground mb-3">PENS AGL STORE highlights and curated picks.</p>
          <Link href="/brands/pens-agl-store" className="underline underline-offset-4 text-foreground">
            Visit PENS AGL STORE
          </Link>
        </article>

        <article className="rounded-lg border p-4 bg-background">
          <h2 className="font-medium text-foreground mb-2">Compare apps</h2>
          <p className="text-sm text-muted-foreground mb-3">Side-by-side comparisons to choose the right tool.</p>
          <Link href="/compare" className="underline underline-offset-4 text-foreground">
            Go to compare
          </Link>
        </article>
      </section>
    </main>
  )
}
