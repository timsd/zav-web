import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { hash } from 'bcrypt'

export async function PUT(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { currentPassword, newPassword } = await req.json()
  const hashedPassword = await hash(newPassword, 10)

  const updatedUser = await prisma.user.update({
    where: { id: session.user.id },
    data: { password: hashedPassword }
  })

  return NextResponse.json({ success: true })
}
