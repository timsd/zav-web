interface RatingStarsProps {
  rating: number
  reviews: number
}

export function RatingStars({ rating, reviews }: RatingStarsProps) {
  return (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      ))}
      <span className="ml-2 text-sm text-gray-600">({reviews} reviews)</span>
    </div>
  )
}
