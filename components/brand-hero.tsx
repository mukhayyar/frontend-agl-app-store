import Link from "next/link"
import Image from "next/image"
import { brands } from "@/lib/data/brands"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function BrandHero() {
  const featured = brands.find((b) => b.featured)
  if (!featured) return null

  return (
    <Card className="mb-8">
      <CardContent className="p-6 flex items-center gap-4">
        <div className="h-14 w-14 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          <Image
            src={featured.logoUrl || "/placeholder-logo.svg"}
            alt={`${featured.name} logo`}
            width={56}
            height={56}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-semibold text-pretty">{featured.name}</h2>
          {featured.description ? (
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{featured.description}</p>
          ) : null}
        </div>
        <div className="flex gap-2">
          <Button asChild>
            <Link href={`/brands/${featured.slug}`}>View brand</Link>
          </Button>
          {featured.websiteUrl ? (
            <Button asChild variant="outline">
              <a href={featured.websiteUrl} target="_blank" rel="noreferrer">
                Website
              </a>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  )
}
