import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RatingStars } from "./RatingStars"

interface DesignCardProps {
  design: {
    id: number
    name: string
    seller: string
    price: number
    images: string[]
    rating: number
    reviews: number
    description: string
  }
  onBuyClick: (designId: number) => void
}

export function DesignCard({ design, onBuyClick }: DesignCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={design.images[0]}
            alt={design.name}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{design.name}</h3>
        <p className="text-sm text-gray-500">by {design.seller}</p>
        <div className="mt-2 flex items-center gap-2">
          <RatingStars rating={design.rating} />
          <span className="text-sm text-gray-500">({design.reviews})</span>
        </div>
        <p className="mt-2 text-sm line-clamp-2">{design.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="text-lg font-bold">₦{design.price.toLocaleString()}</span>
        <Button onClick={() => onBuyClick(design.id)}>Buy Now</Button>
      </CardFooter>
    </Card>
  )
}