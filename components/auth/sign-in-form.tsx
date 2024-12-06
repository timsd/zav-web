'use client'

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin"
    })
  }

  return (
    <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[var(--color-orange)]">Admin Portal</h2>
        <p className="text-gray-400 mt-2">Sign in to manage your store</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Email</label>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-200 mb-2">Password</label>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:ring-[var(--color-orange)] focus:border-[var(--color-orange)]"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Sign In
        </Button>
      </form>

      <div className="mt-6 text-center">
        <Link 
          href="/auth/register" 
          className="text-[var(--color-orange)] hover:text-[var(--color-green)] transition-colors"
        >
          Need an account? Register here
        </Link>
      </div>
    </div>
  )
}
