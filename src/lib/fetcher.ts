const API_URL = import.meta.env.VITE_API_URL || 'https://api.agl-store.cyou'

/** Maps old Next.js /api/* paths to the real backend URL */
function resolveUrl(path: string): string {
  if (path.startsWith('/api/apps/by-slugs')) return path.replace('/api/apps/by-slugs', `${API_URL}/apps/by-slugs`)
  if (path.startsWith('/api/apps')) return path.replace('/api/apps', `${API_URL}/apps`)
  if (path.startsWith('/api/brands')) return path.replace('/api/brands', `${API_URL}/brands`)
  if (path.startsWith('/api/collections')) return path.replace('/api/collections', `${API_URL}/collections`)
  if (path.startsWith('/api/scripts/install')) return path.replace('/api/scripts/install', `${API_URL}/scripts/install`)
  return path
}

export const fetcher = (url: string) => fetch(resolveUrl(url)).then((r) => r.json())
