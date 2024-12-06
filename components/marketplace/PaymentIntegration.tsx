'use client'

import { useState } from 'react'
import { PaystackButton } from 'react-paystack'

interface PaymentIntegrationProps {
  amount: number
  email: string
  onSuccess: () => void
  onClose: () => void
}

export function PaymentIntegration({ amount, email, onSuccess, onClose }) {
  const config = {
    reference: `order_${Date.now()}`,
    email: email,
    amount: amount * 100, // Convert to kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
    currency: 'NGN',
  }

  return (
    <div className="mt-4">
      <PaystackButton 
        {...config}
        text="Pay with Paystack"
        onSuccess={onSuccess}
        onClose={onClose}
        className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white py-2 px-4 rounded"
      />
    </div>
  )
}
