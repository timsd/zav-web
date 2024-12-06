export function PriceRangeFilter({ value, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Price Range</h3>
      <Input
        type="range"
        min={0}
        max={10000000}
        step={100000}
        value={value}
        onChange={(e) => onChange(prev => ({ 
          ...prev, 
          priceRange: parseInt(e.target.value) 
        }))}
        className="w-full"
      />
      <div className="flex justify-between text-sm">
        <span>₦0</span>
        <span>₦{value.toLocaleString()}</span>
      </div>
    </div>
  )
}
