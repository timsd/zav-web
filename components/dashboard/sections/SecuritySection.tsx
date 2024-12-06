
'use client'

import { useState } from 'react'
import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { toast } from 'sonner'
import { Shield, Smartphone, History } from 'lucide-react'

export function SecuritySection() {
  const { updatePassword, toggle2FA, sessions, endSession } = useDashboard()
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  })

  const handlePasswordUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (passwords.new !== passwords.confirm) {
      toast.error('New passwords do not match')
      return
    }

    try {
      await updatePassword(passwords.current, passwords.new)
      toast.success('Password updated successfully')
      setPasswords({ current: '', new: '', confirm: '' })
    } catch (error) {
      toast.error('Failed to update password')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Security Settings</h2>

      <Card className="p-6">
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <h3 className="font-semibold mb-4">Change Password</h3>
          
          <div>
            <Label>Current Password</Label>
            <Input
              type="password"
              value={passwords.current}
              onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
              className="bg-white"
            />
          </div>

          <div>
            <Label>New Password</Label>
            <Input
              type="password"
              value={passwords.new}
              onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
              className="bg-white"
            />
          </div>

          <div>
            <Label>Confirm New Password</Label>
            <Input
              type="password"
              value={passwords.confirm}
              onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
              className="bg-white"
            />
          </div>

          <Button type="submit" className="w-full bg-[var(--color-orange)]">
            Update Password
          </Button>
        </form>

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              <Shield className="w-5 h-5 text-[var(--color-green)]" />
              <div>
                <h3 className="font-semibold">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security</p>
              </div>
            </div>
            <Switch onCheckedChange={toggle2FA} />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-5 h-5" />
            <h3 className="font-semibold">Active Sessions</h3>
          </div>
          
          <div className="space-y-3">
            {sessions.map((session) => (
              <div key={session.id} className="flex justify-between items-center">
                <div className="flex gap-3">
                  <Smartphone className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">{session.device}</p>
                    <p className="text-sm text-gray-500">{session.location}</p>
                  </div>
                </div>
                {session.current ? (
                  <span className="text-sm text-green-600">Current Session</span>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => endSession(session.id)}
                  >
                    End Session
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}
