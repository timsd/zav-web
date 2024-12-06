'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Grid, List, Filter } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MarketplaceGrid({ 
  viewMode, 
  setViewMode, 
  designs, 
  onDesignSelect, 
  isDarkMode,
  isLoading 
}) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price)
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-96">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-orange)]"></div>
    </div>
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Design Marketplace</h1>
        <div className="flex items-center space-x-4">
          {/* View controls and filters */}
          <ViewControls viewMode={viewMode} setViewMode={setViewMode} isDarkMode={isDarkMode} />
        </div>
      </div>

      <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} gap-6`}>
        {designs.map((design) => (
          <DesignCard 
            key={design.id} 
            design={design} 
            viewMode={viewMode} 
            isDarkMode={isDarkMode}
            onSelect={onDesignSelect}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </main>
  )
}
