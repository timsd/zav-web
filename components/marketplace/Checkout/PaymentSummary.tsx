export function PaymentSummary() {
  const { cart } = useCart()
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.075
  const total = subtotal + tax

  return (
    <div className="border rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₦{subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax (7.5%)</span>
          <span>₦{tax.toLocaleString()}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₦{total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}
