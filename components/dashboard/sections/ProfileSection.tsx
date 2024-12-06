
'use client'

import { useState } from 'react'
import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { SectionProps } from '../types/dashboard.types'


export function ProfileSection() {
  const { userProfile, updateProfile } = useDashboard()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      await updateProfile(userProfile)
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Profile Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4">
          <div>
            <Label>Full Name</Label>
            <Input
              value={userProfile.name}
              onChange={(e) => updateProfile({ name: e.target.value })}
              className="bg-white"
            />
          </div>
          
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={userProfile.email}
              onChange={(e) => updateProfile({ email: e.target.value })}
              className="bg-white"
            />
          </div>
          
          <div>
            <Label>Phone</Label>
            <Input
              type="tel"
              value={userProfile.phone}
              onChange={(e) => updateProfile({ phone: e.target.value })}
              className="bg-white"
            />
          </div>
          
          <div>
            <Label>Address</Label>
            <Input
              value={userProfile.address}
              onChange={(e) => updateProfile({ address: e.target.value })}
              className="bg-white"
            />
          </div>
        </div>

        <Button 
          type="submit" 
          className="bg-[var(--color-orange)]"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </form>
    </div>
  )
}
