import { Link } from "react-router-dom"
import { useUserProfile } from "@/hooks/use-user-profile"

export function ProfileHeader() {
  const { state } = useUserProfile()
  const fav = state.favoriteAppSlugs.length
  const brands = state.followedBrandSlugs.length
  const cols = state.followedCollectionSlugs.length

  return (
    <header className="mb-6">
      <nav aria-label="Breadcrumb" className="mb-2 text-sm">
        <Link to="/" className="underline">
          Home
        </Link>
        <span className="mx-2 text-muted-foreground">/</span>
        <span aria-current="page">Profile</span>
      </nav>
      <h1 className="text-2xl font-semibold text-balance">Your Profile (local)</h1>
      <p className="text-muted-foreground mt-1">
        Favorites: {fav} · Following brands: {brands} · Collections: {cols}
      </p>
    </header>
  )
}
