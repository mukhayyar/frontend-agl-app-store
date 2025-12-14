export default function NewAndUpdatedPage() {
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
        <h1 className="text-2xl font-semibold text-foreground text-balance">New & Updated</h1>
        <p className="text-sm text-muted-foreground">
          Fresh releases and recent updates. We’ll add real release data next.
        </p>
      </header>

      <section className="rounded-lg border p-6 bg-background">
        <p className="text-sm text-muted-foreground">
          A feed of new releases and updated apps will go here, with filters for brand and category.
        </p>
      </section>
    </main>
  )
}
