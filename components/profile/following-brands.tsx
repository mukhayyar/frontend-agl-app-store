"use client"

import Link from "next/link"
import { useUserProfile } from "@/hooks/use-user-profile"

export function FollowingBrands() {
  const { state, unfollowBrand } = useUserProfile()
  if (!state.followedBrandSlugs.length) {
    return <p className="text-muted-foreground">Not following any brands yet.</p>
  }
  return (
    <ul className="flex flex-wrap gap-2">
      {state.followedBrandSlugs.map((slug) => (
        <li key={slug} className="flex items-center gap-2 border rounded-md px-2 py-1">
          <Link href={`/brands/${slug}`} className="underline">
            {slug}
          </Link>
          <button
            className="text-muted-foreground hover:text-foreground"
            aria-label={`Unfollow ${slug}`}
            onClick={() => unfollowBrand(slug)}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}
