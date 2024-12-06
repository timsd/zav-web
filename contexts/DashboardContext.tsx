'use client'

import { createContext, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

interface DashboardContextValue {
  userProfile: any
  orders: any[]
  paymentMethods: any[]
  notifications: any
  pendingReviews: any[]
  sessions: any[]
  updateProfile: (data: any) => Promise<void>
  updatePassword: (current: string, newPassword: string) => Promise<void>
  deleteAccount: (password: string) => Promise<void>
  submitReview: (data: any) => Promise<void>
  updateNotifications: (preferences: any) => Promise<void>
  endSession: (sessionId: string) => Promise<void>
}

export const DashboardContext = createContext<DashboardContextValue | undefined>(undefined)

export function DashboardProvider({ children }) {
  const router = useRouter()
  const [state, setState] = useState({
    userProfile: null,
    orders: [],
    paymentMethods: [],
    notifications: {},
    pendingReviews: [],
    sessions: []
  })

  const fetchDashboardData = useCallback(async () => {
    try {
      const [
        profileRes,
        ordersRes,
        paymentsRes,
        notificationsRes,
        reviewsRes,
        sessionsRes
      ] = await Promise.all([
        fetch('/api/dashboard/profile'),
        fetch('/api/dashboard/orders'),
        fetch('/api/dashboard/payments'),
        fetch('/api/dashboard/notifications'),
        fetch('/api/dashboard/reviews'),
        fetch('/api/dashboard/sessions')
      ])

      const [
        profile,
        orders,
        payments,
        notifications,
        reviews,
        sessions
      ] = await Promise.all([
        profileRes.json(),
        ordersRes.json(),
        paymentsRes.json(),
        notificationsRes.json(),
        reviewsRes.json(),
        sessionsRes.json()
      ])

      setState({
        userProfile: profile,
        orders,
        paymentMethods: payments,
        notifications,
        pendingReviews: reviews,
        sessions
      })
    } catch (error) {
      toast.error('Failed to load dashboard data')
    }
  }, [])

  useEffect(() => {
    fetchDashboardData()
  }, [fetchDashboardData])

  const value = {
    ...state,
    updateProfile,
    updatePassword,
    deleteAccount: async (password: string) => {
      // Implementation
    },
    submitReview,
    updateNotifications,
    endSession
  }

  const updateProfile = async (data) => {
    try {
      const response = await fetch('/api/dashboard/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error()
      
      const updatedProfile = await response.json()
      setState(prev => ({ ...prev, userProfile: updatedProfile }))
      toast.success('Profile updated successfully')
    } catch (error) {
      toast.error('Failed to update profile')
      throw error
    }
  }

  const updatePassword = async (current: string, newPassword: string) => {
    try {
      const response = await fetch('/api/dashboard/security', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword: current, newPassword })
      })
      
      if (!response.ok) throw new Error()
      toast.success('Password updated successfully')
    } catch (error) {
      toast.error('Failed to update password')
      throw error
    }
  }

  const submitReview = async (data) => {
    try {
      const response = await fetch('/api/dashboard/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      if (!response.ok) throw new Error()
      
      setState(prev => ({
        ...prev,
        pendingReviews: prev.pendingReviews.filter(r => r.id !== data.productId)
      }))
      toast.success('Review submitted successfully')
    } catch (error) {
      toast.error('Failed to submit review')
      throw error
    }
  }

  const updateNotifications = async (preferences) => {
    try {
      const response = await fetch('/api/dashboard/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preferences)
      })
      
      if (!response.ok) throw new Error()
      
      setState(prev => ({
        ...prev,
        notifications: { ...prev.notifications, ...preferences }
      }))
      toast.success('Notification preferences updated')
    } catch (error) {
      toast.error('Failed to update notification preferences')
      throw error
    }
  }

  const endSession = async (sessionId: string) => {
    try {
      const response = await fetch('/api/dashboard/sessions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId })
      })
      
      if (!response.ok) throw new Error()
      
      setState(prev => ({
        ...prev,
        sessions: prev.sessions.filter(s => s.id !== sessionId)
      }))
      toast.success('Session ended successfully')
    } catch (error) {
      toast.error('Failed to end session')
      throw error
    }
  }
  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  )
}
