
'use client'

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export default function ResetPassword() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      return
    }

    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        token,
        password: formData.password
      })
    })

    if (response.ok) {
      router.push('/auth/login?reset=success')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Set New Password</h1>
          <p className="text-gray-700 mt-2">Enter your new password below</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-gray-800 font-medium">New Password</Label>
            <Input
              type="password"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div>
            <Label className="text-gray-800 font-medium">Confirm New Password</Label>
            <Input
              type="password"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-[var(--color-orange)] text-white font-medium"
          >
            Reset Password
          </Button>
        </form>
      </Card>
    </div>
  )
}
