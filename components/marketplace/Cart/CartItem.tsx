interface CartItemProps {
  design: Design
  onRemove: () => void
}

export function CartItem({ design, onRemove }) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <div className="relative w-24 h-24">
        <Image
          src={design.images[0]}
          alt={design.name}
          fill
          className="object-cover rounded"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium">{design.name}</h3>
        <p className="text-sm text-muted-foreground">by {design.seller}</p>
        <p className="font-bold mt-1">₦{design.price.toLocaleString()}</p>
      </div>

      <Button variant="ghost" size="icon" onClick={onRemove}>
        <TrashIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}