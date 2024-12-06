function ViewControls({ viewMode, setViewMode, isDarkMode }) {
  return (
    <>
      <Button 
        variant="outline" 
        onClick={() => setViewMode("grid")} 
        className={isDarkMode ? "text-white border-white" : ""}
      >
        <Grid className="h-5 w-5" />
      </Button>
      <Button 
        variant="outline" 
        onClick={() => setViewMode("list")} 
        className={isDarkMode ? "text-white border-white" : ""}
      >
        <List className="h-5 w-5" />
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className={`flex items-center space-x-1 ${isDarkMode ? "text-white border-white" : ""}`}>
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
          <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
          <DropdownMenuItem>Most Popular</DropdownMenuItem>
          <DropdownMenuItem>Newest Arrivals</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

```typescript:components/marketplace/Grid/DesignCard.tsx
function DesignCard({ design, viewMode, isDarkMode, onSelect, formatPrice }) {
  return (
    <Card className={`${viewMode === "list" ? "flex" : ""} ${isDarkMode ? "bg-gray-800 text-white" : ""}`}>
      <CardHeader>
        <div className="relative">
          <img 
            src={design.images[0]} 
            alt={design.name} 
            className={`w-full ${viewMode === "list" ? "h-40 object-cover" : "h-48 object-cover"}`} 
          />
          {design.images[1] && (
            <img
              src={design.images[1]}
              alt={`${design.name} - View 2`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle>{design.name}</CardTitle>
        <p className="text-sm text-gray-500">by {design.seller}</p>
        <p className="text-lg font-bold mt-2">{formatPrice(design.price)}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < Math.floor(design.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">({design.reviews} reviews)</span>
        </div>
        <p className="mt-2 text-sm">{design.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={() => onSelect(design)} 
          className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)]"
        >
          Select Design
        </Button>
      </CardFooter>
    </Card>
  )
}
