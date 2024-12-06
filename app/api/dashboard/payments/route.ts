import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const paymentMethods = await prisma.paymentMethod.findMany({
    where: { userId: session.user.id }
  })

  return NextResponse.json(paymentMethods)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await req.json()
  const newPaymentMethod = await prisma.paymentMethod.create({
    data: {
      ...data,
      userId: session.user.id
    }
  })

  return NextResponse.json(newPaymentMethod)
}
