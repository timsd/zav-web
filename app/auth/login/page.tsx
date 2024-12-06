"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function SignIn() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your authentication logic here
    router.push('/account')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
          <p className="text-gray-700">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-gray-800 font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <Label className="text-gray-800 font-medium">Password</Label>
            <Input
              id="password"
              type="password"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[var(--color-orange)] text-white font-medium">
            Sign In
          </Button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/auth/forgot-password" className="text-[var(--color-orange)] font-medium hover:underline">
            Forgot password?
          </Link>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Don't have an account?{" "}
            <Link href="/auth/buyer/register" className="text-[var(--color-green)] font-medium hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
