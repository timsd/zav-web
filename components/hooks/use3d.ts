'use client'

import { useState, useEffect } from 'react'

export function use3D() {
  const [ready, setReady] = useState(false)
  
  useEffect(() => {
    setReady(true)
    return () => setReady(false)
  }, [])

  return ready
}
