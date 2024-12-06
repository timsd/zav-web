import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/useCart"

export function CartSummary() {
  const { cartItems } = useCart()
  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="rounded-lg border p-6">
      <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
        <Button className="w-full">Checkout</Button>
      </div>
    </div>
  )
}
