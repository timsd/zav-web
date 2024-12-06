export { FilterPanel } from './FilterPanel'
export { MobileFilters } from './MobileFilters'
export { ActiveFilters } from './ActiveFilters'

import { Separator } from "@/components/ui/separator"
import { PriceRangeSelector } from './PriceRangeSelector'
import { BedroomFilterSelect } from './BedroomFilterSelect'
import { SortFilter } from './SortFilter'

export function Filters({ filters, setFilters }) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="font-semibold">Filters</h2>
        <PriceRangeSelector 
          value={filters.priceRange} 
          onChange={setFilters} 
        />
        <Separator />
        <BedroomFilterSelect 
          selected={filters.bedrooms} 
          onChange={setFilters} 
        />
        <Separator />
        <SortFilter 
          value={filters.sortBy} 
          onChange={setFilters} 
        />
      </div>
    </div>
  )
}