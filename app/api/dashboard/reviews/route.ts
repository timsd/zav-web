import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const pendingReviews = await prisma.order.findMany({
    where: {
      userId: session.user.id,
      status: 'DELIVERED',
      review: null
    },
    include: {
      items: {
        include: { product: true }
      }
    }
  })

  return NextResponse.json(pendingReviews)
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { productId, rating, comment } = await req.json()
  const review = await prisma.review.create({
    data: {
      productId,
      userId: session.user.id,
      rating,
      comment
    }
  })

  return NextResponse.json(review)
}
