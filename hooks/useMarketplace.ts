import { useState, useMemo } from 'react'

// Mock data for development
const mockDesigns = [
  {
    id: '1',
    name: 'Modern Villa Design',
    price: 5000000,
    images: ['/designs/design1.jpg'],
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: '2',
    name: 'Contemporary Bungalow',
    price: 3500000,
    images: ['/designs/design2.jpg'],
    bedrooms: 3,
    bathrooms: 2,
  }
]

export function useMarketplace() {
  const [filters, setFilters] = useState({
    priceRange: 10000000,
    bedrooms: [],
    sortBy: 'newest'
  })

  // Using mock data directly instead of fetching
  const designs = mockDesigns

  const filteredDesigns = useMemo(() => {
    return designs.filter(design => {
      const priceMatch = design.price <= filters.priceRange
      const bedroomMatch = filters.bedrooms.length === 0 || 
        filters.bedrooms.includes(design.bedrooms)
      return priceMatch && bedroomMatch
    })
  }, [designs, filters])

  return { designs: filteredDesigns, filters, setFilters }
}