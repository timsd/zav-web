import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const profile = await prisma.user.findUnique({
    where: { id: session.user.id }
  })

  return NextResponse.json(profile)
}

export async function PUT(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await req.json()
  const updatedProfile = await prisma.user.update({
    where: { id: session.user.id },
    data
  })

  return NextResponse.json(updatedProfile)
}
