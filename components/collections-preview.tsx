import { collections } from "@/lib/data/collections"
import { CollectionCard } from "@/components/collection-card"

export function CollectionsPreview() {
  const top = collections.slice(0, 3)
  if (top.length === 0) return null

  return (
    <section className="mb-8">
      <header className="mb-3">
        <h2 className="text-xl font-semibold text-foreground">Collections</h2>
        <p className="text-sm text-muted-foreground">Curated groups to help you discover great apps.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {top.map((c) => (
          <CollectionCard
            key={c.slug}
            href={`/collections/${c.slug}`}
            name={c.name}
            description={c.description}
            iconUrl={c.iconUrl ?? undefined}
            count={c.appIds.length}
          />
        ))}
      </div>
    </section>
  )
}
