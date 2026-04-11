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
      <TabsList className="flex w-full overflow-x-auto h-auto flex-nowrap justify-start gap-1 rounded-lg p-1">
        <TabsTrigger value="" className="shrink-0">All</TabsTrigger>
        {categories.map((c) => (
          <TabsTrigger key={c} value={c} className="shrink-0">
            {c}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
}
