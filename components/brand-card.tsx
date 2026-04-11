import Link from "next/link"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

type Props = {
  href: string
  name: string
  description?: string
  logoUrl?: string
}

export function BrandCard({ href, name, description, logoUrl }: Props) {
  return (
    <Link href={href} className="block">
      <Card className="transition-colors hover:border-foreground/20">
        <CardHeader className="flex flex-row items-center gap-4">
          <img
            src={logoUrl || "/placeholder.svg?height=64&width=64&query=brand%20logo"}
            alt={`${name} logo`}
            width={48}
            height={48}
            className="rounded-md border border-border"
          />
          <CardTitle className="text-pretty">{name}</CardTitle>
        </CardHeader>
        {description ? (
          <CardContent>
            <p className="text-sm text-muted-foreground">{description}</p>
          </CardContent>
        ) : null}
      </Card>
    </Link>
  )
}
