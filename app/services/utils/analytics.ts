import { Analytics } from '@vercel/analytics/react'

export interface BookingAnalytics {
  eventName: string
  service: string
  timestamp: number
  userTimezone: string
  status: 'started' | 'completed' | 'failed'
}

export const trackBookingEvent = (data: BookingAnalytics) => {
  Analytics.track(data.eventName, {
    ...data,
    environment: process.env.NODE_ENV
  })
}
