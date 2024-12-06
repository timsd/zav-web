import { NextResponse } from 'next/server'
import { initiatePayment } from '@/lib/payment'

export async function POST(request: Request) {
  const orderData = await request.json()
  
  try {
    const paymentResponse = await initiatePayment(orderData)
    return NextResponse.json(paymentResponse)
  } catch (error) {
    return NextResponse.json(
      { error: 'Payment initiation failed' },
      { status: 500 }
    )
  }
}
