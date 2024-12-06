"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function RegisterBuyer() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      return
    }

    const response = await fetch('/api/auth/buyer/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: 'BUYER'
      })
    })

    if (response.ok) {
      router.push('/auth/login')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <Card className="w-full max-w-md p-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-700">Start shopping on Zavolah</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-gray-800 font-medium">Full Name</Label>
            <Input
              id="fullName"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

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
            <Label className="text-gray-800 font-medium">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

          <div>
            <Label className="text-gray-800 font-medium">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              className="text-gray-900 bg-white border-gray-300"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              required
            />
          </div>

          <Button type="submit" className="w-full bg-[var(--color-green)] text-white font-medium">
            Create Account
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-700">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-[var(--color-orange)] font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )}
