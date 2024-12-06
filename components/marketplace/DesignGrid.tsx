'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'

interface DesignGridProps {
  designs: any[]
  viewMode: string
  isDarkMode: boolean
  handleDesignSelect: (design: any) => void
  formatPrice: (price: number) => string
}

export function DesignGrid({ designs, viewMode, isDarkMode, handleDesignSelect, formatPrice }) {
  return (
    <div className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"} gap-6`}>
      {designs.map((design) => (
        <Card key={design.id} className={`
          ${viewMode === "list" ? "flex" : ""} 
          ${isDarkMode ? "bg-gray-800 text-white border-gray-700" : ""}
        `}>
          <CardHeader>
            <div className="relative">
              <img src={design.images[0]} alt={design.name} className={`w-full ${viewMode === "list" ? "h-40 object-cover" : "h-48 object-cover"}`} />
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
            <CardTitle className={isDarkMode ? 'text-white' : ''}>{design.name}</CardTitle>
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>by {design.seller}</p>
            <p className="text-lg font-bold mt-2">{formatPrice(design.price)}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(design.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
              ))}
              <span className={`ml-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                ({design.reviews} reviews)
              </span>
            </div>
            <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {design.description}
            </p>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={() => handleDesignSelect(design)} 
              className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white"
            >
              Select Design
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
