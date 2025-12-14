"use client"

import { useUserProfile } from "@/hooks/use-user-profile"
import { Button } from "@/components/ui/button"

export function FavoriteToggle({ appSlug }: { appSlug: string }) {
  const { isFavorite, toggleFavorite } = useUserProfile()
  const active = isFavorite(appSlug)

  return (
    <Button
      variant={active ? "secondary" : "outline"}
      size="sm"
      aria-pressed={active}
      aria-label={active ? "Remove from favorites" : "Add to favorites"}
      onClick={() => toggleFavorite(appSlug)}
    >
      {active ? "★ Favorited" : "☆ Favorite"}
    </Button>
  )
}
