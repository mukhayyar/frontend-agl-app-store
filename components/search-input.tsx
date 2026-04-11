import { Input } from "@/components/ui/input"

export function SearchInput({
  value,
  onChange,
  placeholder = "Search apps, tags, developers...",
}: {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="search">
        Search apps
      </label>
      <Input
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-background"
      />
    </div>
  )
}
