export class PaymentService {
  static async createPaymentIntent(orderData) {
    const response = await fetch(`${process.env.ONEAPP_API_URL}/v1/payments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.ONEAPP_SECRET_KEY}`,
        'Content-Type': 'application/json'
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
          paymentType: orderData.paymentOption,
          orderId: orderData.orderId
        },
        callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/callback`
      })
    })

    return response.json()
  }
}
