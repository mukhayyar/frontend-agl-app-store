import { AppsBrowser } from "@/components/apps-browser"
import { BrandHero } from "@/components/brand-hero"
import { CollectionsPreview } from "@/components/collections-preview"

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-foreground text-balance">App Catalog</h1>
        <p className="text-muted-foreground mt-1">
          Discover apps by category, search by name or tags, and view details with install instructions.
        </p>
      </header>

      {/* Featured brand section */}
      <BrandHero />
      <CollectionsPreview />

      <AppsBrowser />
    </main>
  )
}
