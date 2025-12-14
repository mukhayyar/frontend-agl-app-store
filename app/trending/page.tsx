export default function TrendingPage() {
  return (
    <main className="container mx-auto max-w-6xl p-4">
      <nav className="mb-4" aria-label="Breadcrumb">
        <a href="/" className="underline underline-offset-4 text-primary" aria-label="Go to Home">
          {"← Home"}
        </a>
        <a href="/discover" className="underline underline-offset-4 text-primary ml-3" aria-label="Back to Discover">
          {"Back to Discover"}
        </a>
      </nav>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground text-balance">Trending</h1>
        <p className="text-sm text-muted-foreground">
          Popular apps this week. This is a scaffold — we can add real ranking next.
        </p>
      </header>

      <section className="rounded-lg border p-6 bg-background">
        <p className="text-sm text-muted-foreground">
          Trending algorithms and ranking will appear here. We can surface categories and brand filters, too.
        </p>
      </section>
    </main>
  )
}
