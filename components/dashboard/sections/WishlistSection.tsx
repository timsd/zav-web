
'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { ShoppingCart, Trash2 } from 'lucide-react'

export function WishlistSection() {
  const { wishlist, removeFromWishlist, addToCart } = useDashboard()

  const handleAddToCart = async (item) => {
    try {
      await addToCart(item)
      toast.success('Added to cart')
    } catch (error) {
      toast.error('Failed to add to cart')
    }
  }

  const handleRemoveFromWishlist = async (itemId) => {
    try {
      await removeFromWishlist(itemId)
      toast.success('Removed from wishlist')
    } catch (error) {
      toast.error('Failed to remove from wishlist')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Wishlist</h2>
      
      {wishlist.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">Your wishlist is empty</p>
          <Button 
            onClick={() => router.push('/store')}
            className="mt-4 bg-[var(--color-orange)]"
          >
            Explore Products
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {wishlist.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-[var(--color-orange)] font-bold">
                    ₦{item.price.toLocaleString()}
                  </p>
                  <div className="flex gap-2 mt-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-[var(--color-orange)]"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
