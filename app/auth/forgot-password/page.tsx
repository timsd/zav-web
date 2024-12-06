'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function ForgotPassword() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })

    if (response.ok) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Reset Password</h1>
          <p className="text-gray-700 mt-2">
            {!isSubmitted 
              ? "Enter your email to receive password reset instructions" 
              : "Check your email for reset instructions"}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-gray-800 font-medium">Email Address</Label>
              <Input
                type="email"
                className="text-gray-900 bg-white border-gray-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[var(--color-orange)] text-white font-medium"
            >
              Send Reset Link
            </Button>
          </form>
        ) : (
          <div className="text-center space-y-6">
            <p className="text-gray-700">
              We've sent a password reset link to <span className="font-medium">{email}</span>
            </p>
            <Button 
              onClick={() => router.push('/auth/login')}
              className="bg-[var(--color-green)] text-white font-medium"
            >
              Return to Sign In
            </Button>
          </div>
        )}

        <div className="mt-6 text-center">
          <Link 
            href="/auth/login" 
            className="text-[var(--color-orange)] font-medium hover:underline"
          >
            Back to Sign In
          </Link>
        </div>
      </Card>
    </div>
  )
}
