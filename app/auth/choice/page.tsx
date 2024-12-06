"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function AuthChoice() {
  const router = useRouter()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Welcome to Zavolah Store</h2>
          <p className="mt-2 text-gray-600">Choose how you'd like to continue</p>
        </div>
        
        <div className="space-y-4">
          <Button 
            onClick={() => router.push('/auth/login')}
            className="w-full bg-[var(--color-orange)]"
          >
            Sign In
          </Button>
          
          <Button 
            onClick={() => router.push('/auth/buyer/register')}
            className="w-full bg-[var(--color-green)]"
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  )
}
