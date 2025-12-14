"use client"

import useSWR from "swr"
import { useUserProfile } from "@/hooks/use-user-profile"
import type { AppItem } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { AppCard } from "@/components/app-card"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function FavoritesList() {
  const { state } = useUserProfile()
  const slugs = state.favoriteAppSlugs
  const query = slugs.length ? `/api/apps/by-slugs?apps=${encodeURIComponent(slugs.join(","))}` : null
  const { data } = useSWR<{ items: AppItem[] }>(query, fetcher)

  if (!slugs.length) {
    return <p className="text-muted-foreground">No favorites yet. Open any app and press “Favorite”.</p>
  }

  const items = data?.items || []

  const exportScript = () => {
    const url = `/api/scripts/install?apps=${encodeURIComponent(slugs.join(","))}&includeRemote=true`
    window.open(url, "_blank")
  }

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Favorite apps</h2>
        <Button variant="outline" size="sm" onClick={exportScript}>
          Download install.sh
        </Button>
      </div>
      <div role="list" aria-label="Favorite apps" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((app) => (
          <div role="listitem" key={app.slug}>
            <AppCard app={app} />
          </div>
        ))}
      </div>
    </section>
  )
}
