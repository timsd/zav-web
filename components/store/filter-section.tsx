
"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

const sortOptions = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Best Rating", value: "rating" }
]

export function FilterSection({ sortBy, setSortBy, filters, setFilters }) {
  return (
    <div className="grid gap-4 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md md:flex md:items-center md:justify-between border border-gray-200 dark:border-gray-700 sticky top-0 z-10 backdrop-blur-sm">
      <div className="flex flex-wrap gap-4 items-center">
      <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button 
      variant="outline" 
      className="w-[200px] justify-between bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 hover:border-[var(--color-orange)] transition-all duration-200 shadow-sm"
    >
      <span className="font-medium text-black dark:text-white">
        {sortBy ? sortOptions.find(option => option.value === sortBy)?.label : "Sort by"}
      </span>
      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 text-[var(--color-orange)]" />
    </Button>
  </DropdownMenuTrigger>

  <DropdownMenuContent 
    align="start" 
    className="w-[200px] bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-0 shadow-xl rounded-xl overflow-hidden animate-in fade-in-80 slide-in-from-top-1"
  >
    <div className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-green)] p-3">
      <DropdownMenuLabel className="text-white font-bold">
        Sort Options
      </DropdownMenuLabel>
    </div>
    
    <div className="p-2">
      {sortOptions.map(option => (
        <DropdownMenuItem
          key={option.value}
          onClick={() => setSortBy(option.value)}
          className="px-3 py-2.5 my-1 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-[var(--color-orange)]/10 hover:text-[var(--color-orange)] dark:hover:bg-[var(--color-orange)]/20 cursor-pointer font-medium transition-all duration-150 focus:bg-[var(--color-orange)]/15 data-[highlighted]:bg-[var(--color-orange)]/10"
        >
          {option.label}
        </DropdownMenuItem>
      ))}
    </div>
  </DropdownMenuContent>
</DropdownMenu>

        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="Min Price"
            value={filters.price.min}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              price: { ...prev.price, min: e.target.value }
            }))}
            className="w-24 md:w-28 text-black dark:text-white border-2 focus:border-[var(--color-orange)]"
          />
          <span className="text-black dark:text-white">to</span>
          <Input
            type="number"
            placeholder="Max Price"
            value={filters.price.max}
            onChange={(e) => setFilters(prev => ({
              ...prev,
              price: { ...prev.price, max: e.target.value }
            }))}
            className="w-24 md:w-28 text-black dark:text-white border-2 focus:border-[var(--color-orange)]"
          />
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:border-[var(--color-orange)] transition-all duration-200">
          <Checkbox
            checked={filters.inStock}
            onCheckedChange={checked => setFilters(prev => ({ ...prev, inStock: checked }))}
            id="inStock"
            className="border-gray-400 data-[state=checked]:bg-[var(--color-orange)] data-[state=checked]:border-[var(--color-orange)]"
          />
          <label htmlFor="inStock" className="text-black dark:text-white font-medium cursor-pointer">
            In Stock Only
          </label>
        </div>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={() => setFilters({ price: { min: '', max: '' }, inStock: false })}
          className="hover:bg-[var(--color-orange)] hover:text-white transition-colors border-2 hover:border-[var(--color-orange)]"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
