import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AppItem, PlatformStats } from './types'

// ── App Filter Store ──────────────────────────────────────────────────────────
// Keeps search + category filter state across navigation

interface FilterState {
  search: string
  category: string
  setSearch: (search: string) => void
  setCategory: (category: string) => void
  reset: () => void
}

export const useFilterStore = create<FilterState>()((set) => ({
  search: '',
  category: '',
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  reset: () => set({ search: '', category: '' }),
}))

// ── Stats Store ───────────────────────────────────────────────────────────────
// Cache platform stats so the home page doesn't refetch on every visit

interface StatsState {
  stats: PlatformStats | null
  fetchedAt: number | null
  setStats: (stats: PlatformStats) => void
}

const STATS_TTL_MS = 60_000 // 1 minute

export const useStatsStore = create<StatsState>()(
  persist(
    (set) => ({
      stats: null,
      fetchedAt: null,
      setStats: (stats) => set({ stats, fetchedAt: Date.now() }),
    }),
    { name: 'agl-stats' }
  )
)

export function isStatsStale(fetchedAt: number | null): boolean {
  if (!fetchedAt) return true
  return Date.now() - fetchedAt > STATS_TTL_MS
}

// ── App Cache Store ───────────────────────────────────────────────────────────
// Lightweight client-side cache for individual app detail pages

interface AppCacheState {
  cache: Record<string, AppItem>
  setApp: (id: string, app: AppItem) => void
  getApp: (id: string) => AppItem | null
}

export const useAppCacheStore = create<AppCacheState>()((set, get) => ({
  cache: {},
  setApp: (id, app) => set((s) => ({ cache: { ...s.cache, [id]: app } })),
  getApp: (id) => get().cache[id] ?? null,
}))

// ── Wishlist Store ────────────────────────────────────────────────────────────

interface WishlistState {
  ids: string[]
  add: (id: string) => void
  remove: (id: string) => void
  toggle: (id: string) => void
  has: (id: string) => boolean
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      ids: [],
      add: (id) => set((s) => ({ ids: [...new Set([...s.ids, id])] })),
      remove: (id) => set((s) => ({ ids: s.ids.filter((i) => i !== id) })),
      toggle: (id) => {
        const { ids, add, remove } = get()
        ids.includes(id) ? remove(id) : add(id)
      },
      has: (id) => get().ids.includes(id),
    }),
    { name: 'agl-wishlist' }
  )
)
