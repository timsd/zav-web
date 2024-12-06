import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const sessions = await prisma.session.findMany({
    where: { userId: session.user.id },
    orderBy: { lastActive: 'desc' }
  })

  return NextResponse.json(sessions)
}

export async function DELETE(req: Request) {
  const session = await auth()
  if (!session) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const { sessionId } = await req.json()
  await prisma.session.delete({
    where: { 
      id: sessionId,
      userId: session.user.id
    }
  })

  return NextResponse.json({ success: true })
}
