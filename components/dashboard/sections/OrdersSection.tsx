
'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

export function OrdersSection() {
  const { orders } = useDashboard()
  const router = useRouter()

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Your Orders</h2>
      
      {orders.length === 0 ? (
        <Card className="p-6 text-center">
          <p className="text-gray-500">No orders yet</p>
          <Button 
            onClick={() => router.push('/store')}
            className="mt-4 bg-[var(--color-orange)]"
          >
            Start Shopping
          </Button>
        </Card>
      ) : (
        <div className="grid gap-4">
          {orders.map((order) => (
            <Card key={order.id} className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{order.orderNumber}</h3>
                  <p className="text-sm text-gray-500">Placed on: {order.date}</p>
                  <p className="text-[var(--color-orange)] font-bold">
                    ₦{order.total.toLocaleString()}
                  </p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    order.status === 'Delivered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    onClick={() => router.push(`/store/orders/${order.id}`)}
                  >
                    View Details
                  </Button>
                  {order.status === 'Delivered' && (
                    <Button
                      className="w-full bg-[var(--color-green)]"
                      onClick={() => router.push(`/store/orders/${order.id}/review`)}
                    >
                      Write Review
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
