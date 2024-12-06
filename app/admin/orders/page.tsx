import { OrderTable } from "@/components/admin/order-table"

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Order Management</h1>
      <OrderTable />
    </div>
  )
}
