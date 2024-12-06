export type SortOption = 'price-asc' | 'price-desc' | 'rating' | 'newest'
export type FilterOptions = {
  priceRange: [number, number]
  bedrooms: number[]
  sortBy: SortOption
}
  export function applyFilters(designs, filters) {
    return designs
      .filter(design => {
        const priceMatch = design.price <= filters.priceRange
        const bedroomMatch = filters.bedrooms.length === 0 || 
          filters.bedrooms.includes(design.bedrooms)
        return priceMatch && bedroomMatch
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-asc':
            return a.price - b.price
          case 'price-desc':
            return b.price - a.price
          case 'popular':
            return b.reviews - a.reviews
          default:
            return b.createdAt - a.createdAt
        }
      })
  }
