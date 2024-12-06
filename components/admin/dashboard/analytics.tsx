import { LineChart, BarChart } from "@/components/ui/charts"

export function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
        <LineChart data={salesData} />
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Product Performance</h3>
        <BarChart data={productData} />
      </div>
    </div>
  )
}
