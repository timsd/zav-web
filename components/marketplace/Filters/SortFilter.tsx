import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SortFilter({ value, onChange }) {
  return (
    <div className="space-y-4">
      <Label>Sort By</Label>
      <Select
        value={value}
        onValueChange={(newValue) => 
          onChange(prev => ({ ...prev, sortBy: newValue }))
        }
      >
        <SelectTrigger>
          <SelectValue placeholder="Select sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}