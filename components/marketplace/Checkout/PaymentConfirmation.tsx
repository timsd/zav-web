export function PaymentConfirmation({ cartItems }) {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="max-w-2xl mx-auto text-center">
      <div className="mb-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
        <h2 className="text-2xl font-bold mt-4">Payment Successful!</h2>
        <p className="text-gray-600 mt-2">
          Your payment of {formatPrice(totalAmount)} has been processed
        </p>
      </div>

      <div className="space-y-4">
        <Button onClick={() => router.push('/dashboard/designs')}>
          View My Designs
        </Button>
        <Button variant="outline" onClick={() => router.push('/marketplace')}>
          Continue Shopping
        </Button>
      </div>
    </div>
  )
}
