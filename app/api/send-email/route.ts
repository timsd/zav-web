import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const { to, cc, subject, content } = await request.json()

    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      cc,
      subject,
      text: content,
      html: content.replace(/\n/g, '<br>')
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}