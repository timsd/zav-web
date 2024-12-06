import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(products)
}

export async function POST(req: Request) {
  const data = await req.json()
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      category: data.category,
      image: data.image,
      rating: data.rating || 0,
      inStock: data.inStock || true
    }
  })
  return NextResponse.json(product)
}
