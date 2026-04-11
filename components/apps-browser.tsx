"use client"

import useSWR from "swr"
import * as React from "react"
import type { AppItem } from "@/lib/types"
import { AppCard } from "@/components/app-card"
import { SearchInput } from "@/components/search-input"
import { useFilterStore } from "@/lib/store"

type AppsResponse = { apps: AppItem[] }
type CatsResponse = { categories: string[] }

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AppsBrowser() {
  const { search, category, setSearch, setCategory, reset } = useFilterStore()

  const { data: catsData } = useSWR<CatsResponse>("/api/categories", fetcher)
  const categories = catsData?.categories || []

  const query = React.useMemo(() => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (category) params.set("category", category)
    return `/api/apps${params.toString() ? `?${params}` : ""}`
  }, [search, category])

  const { data, isLoading, error } = useSWR<AppsResponse>(query, fetcher)
  const apps = data?.apps || []

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <SearchInput value={search} onChange={setSearch} />
        {categories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setCategory("")}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                !category ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(category === cat ? "" : cat)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  category === cat ? "bg-foreground text-background" : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className="text-sm text-destructive">Failed to load apps.</p>}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-32 rounded-xl bg-muted animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.length === 0 ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-4xl mb-3">📦</p>
              <p className="text-muted-foreground">No apps found.</p>
              {(search || category) && (
                <button
                  onClick={reset}
                  className="mt-2 text-sm text-primary underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            apps.map((app) => <AppCard key={app.id} app={app} />)
          )}
        </div>
      )}
    </section>
  )
}
