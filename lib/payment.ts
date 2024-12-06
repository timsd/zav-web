import { headers } from 'next/headers'

export async function initiatePayment(orderData) {
  const response = await fetch(`${process.env.ONEAPP_API_URL}/payments/initiate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ONEAPP_API_KEY}`,
      'x-client-id': process.env.ONEAPP_CLIENT_ID
    },
    body: JSON.stringify({
      amount: orderData.amount,
      currency: 'NGN',
      reference: `ZVLH-${Date.now()}`,
      customer: {
        email: orderData.email,
        name: orderData.name
      },
      metadata: {
        designId: orderData.designId,
        paymentType: orderData.paymentOption
      }
    })
  })

  return response.json()
}
