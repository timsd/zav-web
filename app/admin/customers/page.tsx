import { CustomerTable } from "@/components/admin/customer-table"

export default function CustomersPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Customer Management</h1>
      <CustomerTable />
    </div>
  )
}
