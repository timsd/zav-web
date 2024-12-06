'use client'

import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/components/marketplace/Cart/CartItem'
import { CartSummary } from '@/components/marketplace/Cart/CartSummary'

export default function CartPage() {
  const { cart, removeFromCart } = useCart()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
      
      {cart.length > 0 ? (
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            {cart.map(item => (
              <CartItem 
                key={item.id} 
                design={item} 
                onRemove={() => removeFromCart(item.id)} 
              />
            ))}
          </div>
          <CartSummary />
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <Button onClick={() => router.push('/marketplace')}>
            Continue Shopping
          </Button>
        </div>
      )}
    </div>
  )
}
