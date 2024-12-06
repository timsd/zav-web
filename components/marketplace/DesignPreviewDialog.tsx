'use client'

export function DesignPreviewDialog({ design, isOpen, onOpenChange, onProceed }) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{design?.name}</DialogTitle>
          <DialogDescription>Design Details & Specifications</DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Tabs defaultValue="exterior">
              <TabsList>
                <TabsTrigger value="exterior">Exterior</TabsTrigger>
                <TabsTrigger value="interior">Interior</TabsTrigger>
                <TabsTrigger value="floorplan">Floor Plan</TabsTrigger>
              </TabsList>
              {/* Image galleries for each tab */}
            </Tabs>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Specifications</h3>
              <ul className="mt-2 space-y-2">
                {Object.entries(design?.specifications || {}).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold">Price Breakdown</h3>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span>Design Cost</span>
                  <span>{formatPrice(design?.price)}</span>
                </li>
                <li className="flex justify-between">
                  <span>Customization Options</span>
                  <span>From {formatPrice(design?.price * 0.1)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onProceed} className="bg-[var(--color-orange)] hover:bg-[var(--color-green)]">
            Proceed to Purchase
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
