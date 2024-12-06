import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MonthNavigationProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

export const MonthNavigation = ({ currentMonth, setCurrentMonth }: MonthNavigationProps) => {
  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  return (
    <div className="flex items-center gap-4">
      <Button variant="outline" size="icon" onClick={prevMonth}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="font-medium">
        {currentMonth.toLocaleDateString('default', { month: 'long', year: 'numeric' })}
      </span>
      <Button variant="outline" size="icon" onClick={nextMonth}>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
