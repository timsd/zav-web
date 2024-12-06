
'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { toast } from 'sonner'
import { CreditCard, Plus } from 'lucide-react'

export function PaymentsSection() {
  const { paymentMethods, addPaymentMethod, removePaymentMethod, setDefaultPaymentMethod } = useDashboard()

  const handleAddCard = () => {
    // Implement payment gateway integration (e.g., Paystack, Flutterwave)
    toast.info('Payment method addition coming soon')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Payment Methods</h2>
        <Button onClick={handleAddCard} className="bg-[var(--color-green)]">
          <Plus className="w-4 h-4 mr-2" />
          Add New Card
        </Button>
      </div>

      <div className="grid gap-4">
        {paymentMethods.map((method) => (
          <Card key={method.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <CreditCard className={`w-8 h-8 ${
                  method.brand === 'Visa' ? 'text-blue-600' : 'text-red-600'
                }`} />
                <div>
                  <p className="font-medium">**** **** **** {method.last4}</p>
                  <p className="text-sm text-gray-500">
                    Expires {method.expiryMonth}/{method.expiryYear}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {method.isDefault && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Default
                  </span>
                )}
                {!method.isDefault && (
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setDefaultPaymentMethod(method.id)}
                  >
                    Set as Default
                  </Button>
                )}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500"
                  onClick={() => removePaymentMethod(method.id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Recent Transactions</h3>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <Card key={transaction.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">₦{transaction.amount.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">{transaction.method}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${
                    transaction.status === 'Successful' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.status}
                  </p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
