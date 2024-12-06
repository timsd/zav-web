'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterAdmin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    adminCode: 'ZOV20LAH93'
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (formData.password !== formData.confirmPassword) {
      return
    }

    const response = await fetch('/api/auth/admin/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        adminCode: formData.adminCode,
        role: 'ADMIN'
      })
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700/50 shadow-xl">
        <h2 className="text-3xl font-bold text-[var(--color-orange)] text-center mb-8">Create Admin Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label className="text-white">Admin Email</Label>
            <Input
              type="email"
              placeholder="Admin Email"
              className="bg-gray-700/50 text-white"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          
          <div>
            <Label className="text-white">Password</Label>
            <Input
              type="password"
              placeholder="Password"
              className="bg-gray-700/50 text-white"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          
          <div>
            <Label className="text-white">Confirm Password</Label>
            <Input
              type="password"
              placeholder="Confirm Password"
              className="bg-gray-700/50 text-white"
              onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            />
          </div>
          
          <div>
            <Label className="text-white">Admin Code</Label>
            <Input
              type="text"
              placeholder="Admin Registration Code"
              className="bg-gray-700/50 text-white"
              onChange={(e) => setFormData({...formData, adminCode: e.target.value})}
            />
          </div>
          
          <Button 
            type="submit"
            className="w-full bg-[var(--color-orange)] hover:bg-[var--color-green]"
          >
            Create Admin Account
          </Button>
        </form>
      </div>
    </div>
  )
}
