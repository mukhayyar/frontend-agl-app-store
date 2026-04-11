/**
 * gRPC-Web client for the AGL App Store.
 *
 * Browser clients connect through the Envoy gRPC-Web proxy.
 * The proxy URL is configured via NEXT_PUBLIC_GRPC_WEB_URL.
 *
 * Usage:
 *   import { getGrpcClient } from '@/lib/grpc/client'
 *   const client = getGrpcClient()
 *   const response = await client.searchApps(req, {})
 */

import { FlathubServiceClient } from './generated/FlathubServiceClientPb'

const GRPC_WEB_URL =
  import.meta.env.VITE_GRPC_WEB_URL || 'https://grpc.agl-store.cyou'

let _client: FlathubServiceClient | null = null

export function getGrpcClient(): FlathubServiceClient {
  if (!_client) {
    _client = new FlathubServiceClient(GRPC_WEB_URL, null, null)
  }
  return _client
}

/** Wraps a unary gRPC-Web call in a Promise. */
export function grpcUnary<Req, Res>(
  fn: (req: Req, meta: {}, cb: (err: Error | null, res: Res) => void) => void,
  req: Req,
  meta: Record<string, string> = {}
): Promise<Res> {
  return new Promise((resolve, reject) => {
    fn(req, meta, (err, res) => {
      if (err) reject(err)
      else resolve(res!)
    })
  })
}
