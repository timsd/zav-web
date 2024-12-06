import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { SearchIcon } from "@/components/icons"

export function MarketplaceSearch() {
  const [query, setQuery] = useState('')
  
  return (
    <div className="relative w-full">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search designs..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-10"
        />
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  )
}