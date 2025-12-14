"use client"

import Link from "next/link"
import { useUserProfile } from "@/hooks/use-user-profile"

export function FollowingCollections() {
  const { state } = useUserProfile()
  if (!state.followedCollectionSlugs.length) {
    return <p className="text-muted-foreground">No followed collections yet.</p>
  }
  return (
    <ul className="flex flex-wrap gap-2">
      {state.followedCollectionSlugs.map((slug) => (
        <li key={slug} className="flex items-center gap-2 border rounded-md px-2 py-1">
          <Link href={`/collections/${slug}`} className="underline">
            {slug}
          </Link>
        </li>
      ))}
    </ul>
  )
}
