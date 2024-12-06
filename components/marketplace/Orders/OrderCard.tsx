export function OrderCard({ order }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Order #{order.id}</p>
            <p className="font-medium">{format(order.createdAt, 'PPP')}</p>
          </div>
          <Badge variant={getOrderStatusVariant(order.status)}>
            {order.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {order.items.map(item => (
            <div key={item.id} className="flex items-center gap-4">
              <Image
                src={item.images[0]}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-md"
              />
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">
                  ₦{item.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
