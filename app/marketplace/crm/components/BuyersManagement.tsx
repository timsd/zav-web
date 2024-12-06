interface BuyersManagementProps {
  buyers: any[]
  onEdit: (id: number, field: string, value: any) => void
}

export function BuyersManagement({ buyers, onEdit }: BuyersManagementProps) {
  return (
    <div className="space-y-4">
      {buyers.map(buyer => (
        <Card key={buyer.id}>
          <CardHeader>
            <CardTitle>{buyer.name}</CardTitle>
            <CardDescription>{buyer.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label>Total Purchases</Label>
                <p className="text-2xl font-bold">{buyer.purchases}</p>
              </div>
              <div>
                <Label>Last Purchase Date</Label>
                <p>{new Date(buyer.lastPurchase).toLocaleDateString()}</p>
              </div>
              <div>
                <Label htmlFor={`buyer-notes-${buyer.id}`}>Notes</Label>
                <Textarea 
                  id={`buyer-notes-${buyer.id}`}
                  value={buyer.notes || ''}
                  onChange={(e) => onEdit(buyer.id, 'notes', e.target.value)}
                  placeholder="Add notes about this buyer..."
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
