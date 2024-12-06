export function OrderHistory() {
  const { data: orders, isLoading } = useOrders()

  return (
    <div className="space-y-4">
      {orders?.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  )
}
