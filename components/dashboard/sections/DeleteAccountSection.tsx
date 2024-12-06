
'use client'

import { useState } from 'react'
import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import { AlertTriangle, Trash2 } from 'lucide-react'

export function DeleteAccountSection() {
  const { deleteAccount } = useDashboard()
  const [confirmPassword, setConfirmPassword] = useState('')
  const [deleteText, setDeleteText] = useState('')

  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault()

    if (deleteText !== 'DELETE') {
      toast.error('Please type DELETE to confirm')
      return
    }

    try {
      await deleteAccount(confirmPassword)
      toast.success('Account deleted successfully')
      router.push('/auth/register?deleted=true')
    } catch (error) {
      toast.error('Failed to delete account')
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-red-600">Delete Account</h2>

      <Card className="p-6 border-red-200">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-semibold">Warning: This action cannot be undone</h3>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <ul className="list-disc list-inside text-red-700 space-y-2 text-sm">
              <li>All your personal information will be permanently deleted</li>
              <li>Your order history will be removed</li>
              <li>Your wishlist items will be cleared</li>
              <li>You'll lose access to your purchase history and warranties</li>
              <li>Any active orders will need to be handled via customer support</li>
            </ul>
          </div>

          <form onSubmit={handleDeleteAccount} className="space-y-4">
            <div>
              <Label className="text-red-600">Enter your password</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border-red-200"
                required
              />
            </div>

            <div>
              <Label className="text-red-600">Type "DELETE" to confirm</Label>
              <Input
                value={deleteText}
                onChange={(e) => setDeleteText(e.target.value)}
                className="border-red-200"
                placeholder="Type DELETE in capitals"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Permanently Delete Account
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
