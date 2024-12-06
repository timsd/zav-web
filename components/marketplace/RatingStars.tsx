import { Star, StarHalf } from "lucide-react"

interface RatingStarsProps {
  rating: number
  maxRating?: number
}

export function RatingStars({ rating, maxRating = 5 }: RatingStarsProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
      {hasHalfStar && (
        <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  )
}
