interface DesignsManagementProps {
  designs: any[]
  onEdit: (id: number, field: string, value: any) => void
}

export function DesignsManagement({ designs, onEdit }: DesignsManagementProps) {
  return (
    <div className="space-y-4">
      {designs.map(design => (
        <Card key={design.id}>
          <CardHeader>
            <CardTitle>{design.name}</CardTitle>
            <CardDescription>by {design.seller}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor={`design-name-${design.id}`}>Name</Label>
                <Input 
                  id={`design-name-${design.id}`} 
                  value={design.name} 
                  onChange={(e) => onEdit(design.id, 'name', e.target.value)} 
                />
              </div>
              <div>
                <Label htmlFor={`design-price-${design.id}`}>Price</Label>
                <Input 
                  id={`design-price-${design.id}`} 
                  type="number" 
                  value={design.price} 
                  onChange={(e) => onEdit(design.id, 'price', parseFloat(e.target.value))} 
                />
              </div>
              <div>
                <Label htmlFor={`design-status-${design.id}`}>Status</Label>
                <select 
                  id={`design-status-${design.id}`}
                  value={design.status}
                  onChange={(e) => onEdit(design.id, 'status', e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
