import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const preferences = await prisma.notificationPreferences.findUnique({
    where: { userId: session.user.id }
  })

  return NextResponse.json(preferences)
}

export async function PUT(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const data = await req.json()
  const updatedPreferences = await prisma.notificationPreferences.update({
    where: { userId: session.user.id },
    data
  })

  return NextResponse.json(updatedPreferences)
}
