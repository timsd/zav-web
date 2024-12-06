import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export function BedroomFilterSelect({ selected, onChange }) {
  const bedrooms = [1, 2, 3, 4, 5]

  return (
    <div className="space-y-4">
      <Label>Bedrooms</Label>
      <div className="flex flex-wrap gap-2">
        {bedrooms.map((num) => (
          <Button
            key={num}
            variant={selected.includes(num) ? "default" : "outline"}
            size="sm"
            onClick={() => {
              onChange(prev => ({
                ...prev,
                bedrooms: selected.includes(num)
                  ? selected.filter(n => n !== num)
                  : [...selected, num]
              }))
            }}
          >
            {num} {num === 1 ? 'Bedroom' : 'Bedrooms'}
          </Button>
        ))}
      </div>
    </div>
  )
}