import { useState } from 'react'
import { designs } from '@/lib/marketplace/data'

export function useDesigns() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDesigns = designs.filter(design =>
    design.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    design.seller.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return {
    designs,
    searchQuery,
    setSearchQuery,
    filteredDesigns
  }
}
