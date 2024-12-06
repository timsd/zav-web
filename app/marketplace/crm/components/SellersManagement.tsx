interface SellersManagementProps {
  sellers: any[]
  onEdit: (id: number, field: string, value: any) => void
}

export function SellersManagement({ sellers, onEdit }: SellersManagementProps) {
  return (
    <div className="space-y-4">
      {sellers.map(seller => (
        <Card key={seller.id}>
          <CardHeader>
            <CardTitle>{seller.name}</CardTitle>
            <CardDescription>{seller.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`seller-name-${seller.id}`}>Name</Label>
                <Input 
                  id={`seller-name-${seller.id}`} 
                  value={seller.name} 
                  onChange={(e) => onEdit(seller.id, 'name', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor={`seller-email-${seller.id}`}>Email</Label>
                <Input 
                  id={`seller-email-${seller.id}`} 
                  type="email" 
                  value={seller.email} 
                  onChange={(e) => onEdit(seller.id, 'email', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor={`seller-status-${seller.id}`}>Status</Label>
                <select 
                  id={`seller-status-${seller.id}`}
                  value={seller.status}
                  onChange={(e) => onEdit(seller.id, 'status', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="suspended">Suspended</option>
                </select>
              </div>
              <div>
                <Label>Total Sales</Label>
                <p className="text-2xl font-bold">{seller.sales}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
