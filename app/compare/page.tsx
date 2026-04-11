import { Link } from "react-router-dom"

export default function ComparePage() {
  return (
    <main className="container mx-auto max-w-4xl p-4">
      <header className="mb-6">
        <nav className="mb-3" aria-label="Breadcrumb">
          <Link to="/" className="text-primary underline underline-offset-4">
            {"← Go to Home"}
          </Link>
        </nav>
        <h1 className="text-2xl font-semibold text-foreground text-balance">Compare Apps</h1>
        <p className="text-sm text-muted-foreground">
          Pick two apps to compare their features, licenses, architectures, and recent updates.
        </p>
      </header>

      <section className="rounded-lg border bg-card p-4">
        <p className="text-sm text-muted-foreground">
          Coming soon: choose two apps and see a side-by-side feature matrix. If you want this now, say "Yes to Compare"
          and I'll implement the selector and matrix next.
        </p>
      </section>
    </main>
  )
}
