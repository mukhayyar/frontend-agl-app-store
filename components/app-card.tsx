"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { AppItem } from "@/lib/types"
import { useWishlistStore } from "@/lib/store"

export function AppCard({ app }: { app: AppItem }) {
  const { has, toggle } = useWishlistStore()
  const wishlisted = has(app.id)

  return (
    <Card className="bg-card hover:bg-accent/50 transition-colors group relative">
      <button
        onClick={(e) => { e.preventDefault(); toggle(app.id) }}
        className={`absolute top-3 right-3 p-1.5 rounded-full transition-colors z-10 ${
          wishlisted ? "text-red-500 bg-red-50" : "text-muted-foreground hover:text-red-400 hover:bg-red-50"
        }`}
        aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <Heart size={14} fill={wishlisted ? "currentColor" : "none"} />
      </button>
      <CardHeader className="flex flex-row items-start gap-4 pb-2">
        <div className="h-12 w-12 rounded-xl overflow-hidden bg-muted flex-shrink-0 flex items-center justify-center border">
          {app.iconUrl ? (
            <Image src={app.iconUrl} alt={`${app.name} icon`} width={48} height={48} className="object-cover" unoptimized />
          ) : (
            <span className="text-lg font-semibold text-muted-foreground">{app.name[0]}</span>
          )}
        </div>
        <div className="min-w-0 flex-1 pr-6">
          <Link
            href={`/apps/${encodeURIComponent(app.id)}`}
            className="font-semibold text-foreground hover:text-primary transition-colors line-clamp-1 block"
          >
            {app.name}
          </Link>
          <div className="flex flex-wrap items-center gap-1.5 mt-1.5">
            {app.category && (
              <Badge variant="outline" className="text-xs py-0">
                {app.category}
              </Badge>
            )}
            {app.license && (
              <Badge variant="secondary" className="text-xs py-0">
                {app.license}
              </Badge>
            )}
            {app.is_verified && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">&#10003; Verified</span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{app.summary || "No description available."}</p>
      </CardContent>
    </Card>
  )
}
