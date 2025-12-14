"use client"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { AppCategory } from "@/lib/types"

export function CategoryTabs({
  categories,
  value,
  onValueChange,
}: {
  categories: AppCategory[]
  value: string
  onValueChange: (v: string) => void
}) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="w-full">
      <TabsList className="grid w-full grid-cols-7">
        <TabsTrigger value="">All</TabsTrigger>
        {categories.map((c) => (
          <TabsTrigger key={c} value={c}>
            {c}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
