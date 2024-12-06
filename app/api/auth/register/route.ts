import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

const ADMIN_CODE = process.env.ADMIN_REGISTRATION_CODE

export async function POST(req: Request) {
  const data = await req.json()
  
  if (data.adminCode !== ADMIN_CODE) {
    return NextResponse.json({ error: 'Invalid admin code' }, { status: 401 })
  }

  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      role: 'ADMIN'
    }
  })

  return NextResponse.json({ user })
}
