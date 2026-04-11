"use client"

import useSWR from "swr"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const fetcher = (url: string) => fetch(url).then((r) => r.json())

type Brand = { slug: string; name: string }

export function BrandFilter({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const { data } = useSWR<{ brands: Brand[] }>("/api/brands", fetcher)
  const brands = data?.brands || []

  return (
    <div className="w-full md:w-64">
      <label className="sr-only" htmlFor="brand">
        Brand
      </label>
      <Select value={value || "all"} onValueChange={(v) => onChange(v === "all" ? "" : v)}>
        <SelectTrigger id="brand" className="bg-background">
          <SelectValue placeholder="All brands" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All brands</SelectItem>
          {brands.map((b) => (
            <SelectItem key={b.slug} value={b.slug}>
              {b.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
