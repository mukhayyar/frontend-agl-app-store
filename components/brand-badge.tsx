import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"

export function BrandBadge({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      to={`/brands/${slug}`}
      aria-label={`View ${name} brand`}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <Badge variant="outline" className="text-xs hover:bg-accent">
        {name}
      </Badge>
    </Link>
  )
}
