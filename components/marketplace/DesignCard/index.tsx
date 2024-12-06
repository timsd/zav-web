import { Star } from 'lucide-react'
import { Card, CardHeader, CardContent, CardFooter, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Design } from "@/types/marketplace"

interface DesignCardProps {
  design: Design
  viewMode: 'grid' | 'list'
  isDarkMode: boolean
  onSelect: (design: Design) => void
}

export function DesignCard({ design, viewMode, isDarkMode, onSelect }: DesignCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price)
  }

  return (
    <Card className={`${viewMode === "list" ? "flex" : ""} ${isDarkMode ? "bg-gray-800 text-white" : ""}`}>
      <CardHeader>
        <div className="relative">
          <img src={design.images[0]} alt={design.name} className={`w-full ${viewMode === "list" ? "h-40 object-cover" : "h-48 object-cover"}`} />
          {design.images[1] && (
            <img 
              src={design.images[1]} 
              alt={`${design.name} - View 2`} 
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{design.name}</CardTitle>
        <p className="text-sm text-gray-500">by {design.seller}</p>
        <p className="text-lg font-bold mt-2">{formatPrice(design.price)}</p>
        <RatingStars rating={design.rating} reviews={design.reviews} />
        <p className="mt-2 text-sm">{design.description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onSelect(design)} className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)]">
          Select Design
        </Button>
      </CardFooter>
    </Card>
  )
}