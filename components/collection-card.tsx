import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CollectionCard({
  href,
  name,
  description,
  iconUrl,
  count,
}: {
  href: string
  name: string
  description?: string
  iconUrl?: string
  count?: number
}) {
  return (
    <Link to={href} className="block no-underline">
      <Card className="transition-colors hover:bg-accent">
        <CardHeader className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
            <img
              src={iconUrl || "/placeholder.svg?height=48&width=48&query=collection%20icon"}
              alt={`${name} icon`}
              width={48}
              height={48}
            />
          </div>
          <div className="min-w-0">
            <CardTitle className="truncate">{name}</CardTitle>
            {typeof count === "number" ? <p className="text-xs text-muted-foreground">{count} apps</p> : null}
          </div>
        </CardHeader>
        {description ? (
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
