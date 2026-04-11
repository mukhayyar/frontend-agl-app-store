import { collections } from "@/lib/data/collections"
import { CollectionCard } from "@/components/collection-card"

export default function CollectionsDirectoryPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground text-balance">Collections</h1>
        <p className="text-muted-foreground mt-1">Curated sets that highlight themes, performance, or licenses.</p>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {collections.map((c) => (
          <CollectionCard
            key={c.slug}
            href={`/collections/${c.slug}`}
            name={c.name}
            description={c.description}
            iconUrl={c.iconUrl ?? undefined}
            count={c.appIds.length}
          />
        ))}
      </section>
    </main>
  )
}
