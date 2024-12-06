import { Grid, List, Filter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ViewControlsProps {
  viewMode: string
  setViewMode: (mode: string) => void
  isDarkMode: boolean
}

export function ViewControls({ viewMode, setViewMode, isDarkMode }: ViewControlsProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">Design Marketplace</h1>
      <div className="flex items-center space-x-4">
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
            <Button 
              variant="outline" 
              className={`flex items-center space-x-1 ${isDarkMode ? "text-white border-white" : ""}`}
            >
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
      </div>
    </div>
  )
}
