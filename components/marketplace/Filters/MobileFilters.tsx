import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Filter, X } from "lucide-react"
import { FilterPanel } from "./FilterPanel"

export function MobileFilters({ filters, setFilters }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="lg:hidden flex items-center">
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px]">
        <SheetHeader>
          <SheetTitle>Filter Designs</SheetTitle>
        </SheetHeader>
        <FilterPanel filters={filters} setFilters={setFilters} />
      </SheetContent>
    </Sheet>
  )
}
