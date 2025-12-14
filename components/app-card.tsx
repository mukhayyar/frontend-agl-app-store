"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AppItem } from "@/lib/types"
import { brands } from "@/lib/data/brands"
import { BrandBadge } from "@/components/brand-badge"

export function AppCard({ app }: { app: AppItem }) {
  return (
    <Card className="bg-card hover:bg-accent transition-colors">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex items-center justify-center">
          {app.iconUrl ? (
            <Image src={app.iconUrl || "/placeholder.svg"} alt={`${app.name} icon`} width={48} height={48} />
          ) : (
            <span className="text-sm text-muted-foreground">{app.name[0]}</span>
          )}
        </div>
        <div className="min-w-0">
          <CardTitle className="text-foreground text-pretty truncate">
            <Link href={`/apps/${app.slug}`} aria-label={`View details for ${app.name}`} className="no-underline">
              {app.name}
            </Link>
          </CardTitle>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <Badge variant="outline" className="text-xs">
              {app.category}
            </Badge>
            {app.license ? (
              <Badge variant="secondary" className="text-xs">
                {app.license}
              </Badge>
            ) : null}
            {app.brands?.slice(0, 2).map((slug) => {
              const b = brands.find((br) => br.slug === slug)
              if (!b) return null
              return <BrandBadge key={slug} slug={slug} name={b.name} />
            })}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">{app.summary}</p>
      </CardContent>
    </Card>
  )
}
