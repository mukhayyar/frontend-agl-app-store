"use client"

import { useEffect, useState } from "react"

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(initialValue)

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(key) : null
      if (raw != null) {
        setState(JSON.parse(raw))
      }
    } catch {
      // ignore
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(state))
      }
    } catch {
      // ignore
    }
  }, [key, state])

  return [state, setState] as const
}
