import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FilterPanel({ filters, setFilters }) {
  const handlePriceRangeChange = (value: string) => {
    setFilters(prev => ({ ...prev, priceRange: parseInt(value) }))
  }

  const handleBedroomToggle = (value: number) => {
    setFilters(prev => ({
      ...prev,
      bedrooms: prev.bedrooms.includes(value)
        ? prev.bedrooms.filter(b => b !== value)
        : [...prev.bedrooms, value]
    }))
  }

  return (
    <div className="space-y-6 p-4">
      <div>
        <Label htmlFor="price-range">Price Range</Label>
        <Input
          id="price-range"
          type="range"
          min={0}
          max={10000000}
          step={100000}
          value={filters.priceRange}
          onChange={(e) => handlePriceRangeChange(e.target.value)}
          className="w-full"
        />
        <div className="flex justify-between mt-2">
          <span>₦0</span>
          <span>₦{filters.priceRange.toLocaleString()}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Bedrooms</h3>
        <div className="space-y-2">
          {[2, 3, 4, 5].map(num => (
            <div key={num} className="flex items-center">
              <Checkbox
                id={`bed-${num}`}
                checked={filters.bedrooms.includes(num)}
                onCheckedChange={() => handleBedroomToggle(num)}
              />
              <Label htmlFor={`bed-${num}`} className="ml-2">{num} Bedrooms</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Sort By</h3>
        <RadioGroup value={filters.sortBy} onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}>
          <div className="space-y-2">
            <div className="flex items-center">
              <RadioGroupItem value="price-asc" id="sort-price-asc" />
              <Label htmlFor="sort-price-asc" className="ml-2">Price: Low to High</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="price-desc" id="sort-price-desc" />
              <Label htmlFor="sort-price-desc" className="ml-2">Price: High to Low</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="rating" id="sort-rating" />
              <Label htmlFor="sort-rating" className="ml-2">Highest Rated</Label>
            </div>
            <div className="flex items-center">
              <RadioGroupItem value="newest" id="sort-newest" />
              <Label htmlFor="sort-newest" className="ml-2">Newest First</Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}