export function BulkActions() {
  return (
    <div className="flex gap-4 mb-6">
      <Button onClick={handleBulkPriceUpdate}>Update Prices</Button>
      <Button onClick={handleBulkCategoryUpdate}>Update Categories</Button>
      <Button onClick={handleBulkInventoryUpdate}>Update Inventory</Button>
      <Button variant="destructive" onClick={handleBulkDelete}>Delete Selected</Button>
    </div>
  )
}
