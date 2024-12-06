'use client'

import { DashboardProvider } from '@/contexts/DashboardContext'
import { Toaster } from 'sonner'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardProvider>
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        {children}
      </div>
    </DashboardProvider>
  )
}
