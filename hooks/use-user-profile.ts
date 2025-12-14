"use client"

import { useCallback, useMemo } from "react"
import { useLocalStorage } from "./use-local-storage"

type Preferences = {
  installer: "flatpak" | "gui"
  includeRemoteAdd: boolean
}

type ProfileState = {
  favoriteAppSlugs: string[]
  followedBrandSlugs: string[]
  followedCollectionSlugs: string[]
  preferences: Preferences
}

const DEFAULT_STATE: ProfileState = {
  favoriteAppSlugs: [],
  followedBrandSlugs: [],
  followedCollectionSlugs: [],
  preferences: { installer: "flatpak", includeRemoteAdd: true },
}

export function useUserProfile() {
  const [state, setState] = useLocalStorage<ProfileState>("v0.profile", DEFAULT_STATE)

  const isFavorite = useCallback((slug: string) => state.favoriteAppSlugs.includes(slug), [state.favoriteAppSlugs])

  const toggleFavorite = useCallback(
    (slug: string) => {
      setState((prev) => {
        const exists = prev.favoriteAppSlugs.includes(slug)
        return {
          ...prev,
          favoriteAppSlugs: exists ? prev.favoriteAppSlugs.filter((s) => s !== slug) : [...prev.favoriteAppSlugs, slug],
        }
      })
    },
    [setState],
  )

  const followBrand = useCallback(
    (slug: string) => {
      setState((prev) => ({
        ...prev,
        followedBrandSlugs: prev.followedBrandSlugs.includes(slug)
          ? prev.followedBrandSlugs
          : [...prev.followedBrandSlugs, slug],
      }))
    },
    [setState],
  )

  const unfollowBrand = useCallback(
    (slug: string) => {
      setState((prev) => ({
        ...prev,
        followedBrandSlugs: prev.followedBrandSlugs.filter((s) => s !== slug),
      }))
    },
    [setState],
  )

  const setPreferences = useCallback(
    (p: Partial<Preferences>) => {
      setState((prev) => ({ ...prev, preferences: { ...prev.preferences, ...p } }))
    },
    [setState],
  )

  return useMemo(
    () => ({
      state,
      isFavorite,
      toggleFavorite,
      followBrand,
      unfollowBrand,
      setPreferences,
    }),
    [state, isFavorite, toggleFavorite, followBrand, unfollowBrand, setPreferences],
  )
}
