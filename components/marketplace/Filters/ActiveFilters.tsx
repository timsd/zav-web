import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function ActiveFilters({ filters, setFilters }) {
  const clearAllFilters = () => {
    setFilters({
      priceRange: [0, 10000000],
      bedrooms: [],
      sortBy: 'newest'
    })
  }

  const removeBedroomFilter = (bedroom: number) => {
    setFilters(prev => ({
      ...prev,
      bedrooms: prev.bedrooms.filter(b => b !== bedroom)
    }))
  }

  return (
    <div className="flex flex-wrap gap-2 items-center mb-4">
      {filters.bedrooms.map(bedroom => (
        <Button
          key={bedroom}
          variant="secondary"
          size="sm"
          onClick={() => removeBedroomFilter(bedroom)}
          className="flex items-center"
        >
          {bedroom} Bedrooms
          <X className="h-4 w-4 ml-2" />
        </Button>
      ))}
      
      {(filters.priceRange[0] > 0 || filters.priceRange[1] < 10000000) && (
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setFilters(prev => ({ ...prev, priceRange: [0, 10000000] }))}
          className="flex items-center"
        >
          ₦{filters.priceRange[0].toLocaleString()} - ₦{filters.priceRange[1].toLocaleString()}
          <X className="h-4 w-4 ml-2" />
        </Button>
      )}

      {(filters.bedrooms.length > 0 || filters.priceRange[0] > 0 || filters.priceRange[1] < 10000000) && (
        <Button
          variant="destructive"
          size="sm"
          onClick={clearAllFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  )
}
