'use client'

import React from 'react'
import { Button } from '@/components/ui/button'

interface BookingConfirmationProps {
  onConfirm: () => void
  isSubmitting: boolean
}

export function BookingConfirmation({ onConfirm, isSubmitting }: BookingConfirmationProps) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h3 className="text-lg font-semibold">Confirm Your Booking</h3>
      <p className="text-sm text-gray-600">
        Please review your booking details above before confirming.
      </p>
      <Button 
        onClick={onConfirm}
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
      </Button>
    </div>
  )
}
