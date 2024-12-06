import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')
  
  const wishlist = await prisma.wishlist.findFirst({
    where: { userId },
    include: {
      items: {
        include: { product: true }
      }
    }
  })
  return NextResponse.json(wishlist)
}

export async function POST(req: Request) {
  const data = await req.json()
  const wishlist = await prisma.wishlist.create({
    data: {
      userId: data.userId,
      items: {
        create: data.items
      }
    },
    include: {
      items: {
        include: { product: true }
      }
    }
  })
  return NextResponse.json(wishlist)
}
