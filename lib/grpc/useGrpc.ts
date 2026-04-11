'use client'

import { useCallback, useState } from 'react'
import { getGrpcClient, grpcUnary } from './client'
import * as pb from './generated/pens-agl-store_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

export type GrpcState<T> = {
  data: T | null
  loading: boolean
  error: string | null
}

/** Search apps via gRPC-Web. */
export function useSearchApps() {
  const [state, setState] = useState<GrpcState<pb.SearchAppsResponse.AsObject>>({
    data: null, loading: false, error: null,
  })

  const search = useCallback(async (query: string, category?: string) => {
    setState({ data: null, loading: true, error: null })
    try {
      const req = new pb.SearchAppsRequest()
      const sq = new pb.SearchQuery()
      sq.setQuery(query)
      sq.setHitsPerPage(100)
      sq.setPage(0)
      if (category) {
        const f = new pb.Filter()
        f.setFilterType('main_categories')
        f.setValue(category)
        sq.setFiltersList([f])
      }
      req.setLocale('en')
      req.setQuery(sq)
      const client = getGrpcClient()
      const res = await grpcUnary(
        client.searchApps.bind(client),
        req,
      )
      setState({ data: res.toObject(), loading: false, error: null })
    } catch (err: any) {
      setState({ data: null, loading: false, error: err.message ?? 'gRPC error' })
    }
  }, [])

  return { ...state, search }
}

/** Get store-wide stats via gRPC-Web. */
export function useStoreStats() {
  const [state, setState] = useState<GrpcState<pb.StatsResultResponse.AsObject>>({
    data: null, loading: false, error: null,
  })

  const fetch = useCallback(async () => {
    setState(s => ({ ...s, loading: true, error: null }))
    try {
      const client = getGrpcClient()
      const res = await grpcUnary(
        client.getStats.bind(client),
        new Empty(),
      )
      setState({ data: res.toObject(), loading: false, error: null })
    } catch (err: any) {
      setState({ data: null, loading: false, error: err.message ?? 'gRPC error' })
    }
  }, [])

  return { ...state, fetch }
}

/** Get categories via gRPC-Web. */
export function useCategories() {
  const [state, setState] = useState<GrpcState<pb.CategoriesResponse.AsObject>>({
    data: null, loading: false, error: null,
  })

  const fetch = useCallback(async () => {
    setState(s => ({ ...s, loading: true, error: null }))
    try {
      const client = getGrpcClient()
      const res = await grpcUnary(
        client.getCategories.bind(client),
        new Empty(),
      )
      setState({ data: res.toObject(), loading: false, error: null })
    } catch (err: any) {
      setState({ data: null, loading: false, error: err.message ?? 'gRPC error' })
    }
  }, [])

  return { ...state, fetch }
}
