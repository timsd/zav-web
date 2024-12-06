import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function PriceRangeSelector({ value, onChange }) {
  return (
    <div className="space-y-4">
      <Label>Price Range</Label>
      <div className="space-y-2">
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
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>₦0</span>
          <span>₦{value.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}