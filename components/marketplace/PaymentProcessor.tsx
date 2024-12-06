'use client'

export function PaymentProcessor({ orderData, onSuccess, onError }) {
  const processPayment = async () => {
    try {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData)
      })

      const result = await response.json()

      if (result.paymentUrl) {
        window.location.href = result.paymentUrl
      } else {
        onError('Payment initialization failed')
      }
    } catch (error) {
      onError('Payment processing error')
    }
  }

  return (
    <Button 
      onClick={processPayment}
      className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white"
    >
      Proceed to Payment
    </Button>
  )
}
