
'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'
import { Star } from 'lucide-react'

export function ReviewsSection() {
  const { pendingReviews, submitReview } = useDashboard()

  const handleSubmitReview = async (reviewData) => {
    try {
      await submitReview(reviewData)
      toast.success('Review submitted successfully')
    } catch (error) {
      toast.error('Failed to submit review')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Pending Reviews</h2>

      {pendingReviews.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No pending reviews</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {pendingReviews.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.productName}</h3>
                  <p className="text-sm text-gray-500">
                    Purchased on {new Date(item.purchaseDate).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleRatingChange(item.id, rating)}
                      className={`text-2xl transition-colors ${
                        item.rating >= rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      <Star className="w-6 h-6 fill-current" />
                    </button>
                  ))}
                </div>

                <Textarea
                  placeholder="Share your experience with this product..."
                  className="min-h-[100px]"
                  onChange={(e) => handleReviewChange(item.id, e.target.value)}
                />

                <Button
                  onClick={() => handleSubmitReview({
                    productId: item.id,
                    rating: item.rating,
                    review: item.review
                  })}
                  className="w-full bg-[var(--color-orange)]"
                >
                  Submit Review
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
