export async function processPayment(paymentDetails: PaymentDetails) {
  try {
    const response = await fetch('/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentDetails)
    })
    
    if (!response.ok) throw new Error('Payment failed')
    
    return await response.json()
  } catch (error) {
    console.error('Payment processing error:', error)
    throw error
  }
}
