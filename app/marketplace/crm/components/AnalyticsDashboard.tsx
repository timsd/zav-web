interface AnalyticsDashboardProps {
  designs: any[]
  sellers: any[]
  buyers: any[]
}

export function AnalyticsDashboard({ designs, sellers, buyers }: AnalyticsDashboardProps) {
  const totalRevenue = designs.reduce((sum, design) => sum + design.price, 0)
  const activeSellers = sellers.filter(seller => seller.status === 'active').length
  const totalBuyers = buyers.length
  const totalSales = sellers.reduce((sum, seller) => sum + seller.sales, 0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">
            ₦{totalRevenue.toLocaleString()}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Active Sellers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{activeSellers}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Buyers</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalBuyers}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Sales</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{totalSales}</p>
        </CardContent>
      </Card>
    </div>
  )
}
