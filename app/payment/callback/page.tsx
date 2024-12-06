'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function PaymentCallback() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const status = searchParams.get('status')
  const reference = searchParams.get('reference')

  useEffect(() => {
    const verifyPayment = async () => {
      const response = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference })
      })

      if (response.ok) {
        router.push('/marketplace/success')
      } else {
        router.push('/marketplace/failed')
      }
    }

    if (status && reference) {
      verifyPayment()
    }
  }, [status, reference, router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Processing Payment</h1>
        <p>Please wait while we verify your payment...</p>
      </div>
    </div>
  )
}
