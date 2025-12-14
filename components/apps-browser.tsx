"use client"

import useSWR from "swr"
import * as React from "react"
import { allCategories } from "@/lib/data/apps"
import type { AppItem } from "@/lib/types"
import { AppCard } from "@/components/app-card"
import { SearchInput } from "@/components/search-input"
import { CategoryTabs } from "@/components/category-tabs"
import { BrandFilter } from "@/components/brand-filter"

type AppsResponse = { apps: AppItem[] }

const fetcher = (url: string) => fetch(url).then((r) => r.json())

export function AppsBrowser() {
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState<string>("")
  const [brand, setBrand] = React.useState<string>("")

  const query = React.useMemo(() => {
    const params = new URLSearchParams()
    if (search) params.set("search", search)
    if (category) params.set("category", category)
    if (brand) params.set("brand", brand)
    return `/api/apps${params.toString() ? `?${params.toString()}` : ""}`
  }, [search, category, brand])

  const { data, isLoading, error } = useSWR<AppsResponse>(query, fetcher)

  const apps = data?.apps || []

  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <SearchInput value={search} onChange={setSearch} />
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <CategoryTabs categories={allCategories} value={category} onValueChange={setCategory} />
          <BrandFilter value={brand} onChange={setBrand} />
        </div>
      </div>

      {error ? <p className="text-sm text-destructive">Failed to load apps.</p> : null}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-28 rounded-lg bg-muted animate-pulse" aria-hidden="true" />
          ))}
        </div>
      ) : (
        <div role="list" aria-label="App results" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {apps.length === 0 ? (
            <p className="text-sm text-muted-foreground">No apps found. Try a different search or category.</p>
          ) : (
            apps.map((app) => (
              <div role="listitem" key={app.slug}>
                <AppCard app={app} />
              </div>
            ))
          )}
        </div>
      )}
    </section>
  )
}
