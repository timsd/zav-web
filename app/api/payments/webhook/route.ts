import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  const headersList = headers()
  const signature = headersList.get('x-1app-signature')
  
  // Verify webhook signature
  if (!verifySignature(signature)) {
    return new NextResponse('Invalid signature', { status: 401 })
  }

  const event = await req.json()

  switch (event.event) {
    case 'payment.success':
      await handleSuccessfulPayment(event.data)
      break
    case 'payment.failed':
      await handleFailedPayment(event.data)
      break
  }

  return NextResponse.json({ received: true })
}