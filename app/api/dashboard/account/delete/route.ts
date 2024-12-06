import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { compare } from 'bcrypt'

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { password } = await req.json()
  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  })

  const isValid = await compare(password, user.password)
  if (!isValid) {
    return new NextResponse('Invalid password', { status: 400 })
  }

  // Delete all related data
  await prisma.$transaction([
    prisma.review.deleteMany({ where: { userId: session.user.id } }),
    prisma.paymentMethod.deleteMany({ where: { userId: session.user.id } }),
    prisma.notificationPreferences.delete({ where: { userId: session.user.id } }),
    prisma.order.deleteMany({ where: { userId: session.user.id } }),
    prisma.user.delete({ where: { id: session.user.id } })
  ])

  return NextResponse.json({ success: true })
}
