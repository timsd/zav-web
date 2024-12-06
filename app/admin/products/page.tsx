import { ProductTable } from "@/components/admin/product-table"
import { AdminHeader } from "@/components/admin/header"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <AdminHeader title="Product Management" />
        <Button className="bg-[var(--color-orange)]">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>
      <ProductTable />
    </div>
  )
}
