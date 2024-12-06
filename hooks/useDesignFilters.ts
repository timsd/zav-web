export function useDesignFilters() {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    bedrooms: [],
    sortBy: 'newest'
  })

  const filterDesigns = useCallback((designs) => {
    return designs.filter(design => {
      const priceMatch = design.price >= filters.priceRange[0] && design.price <= filters.priceRange[1]
      const bedroomMatch = filters.bedrooms.length === 0 || filters.bedrooms.includes(design.bedrooms)
      return priceMatch && bedroomMatch
    })
  }, [filters])

  return { filters, setFilters, filterDesigns }
}
