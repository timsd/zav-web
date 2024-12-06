import { motion } from 'framer-motion'
import { MonthNavigation } from './MonthNavigation'
import { WeekdayHeaders } from './calendar/WeekdayHeaders'
import { CalendarDays } from './calendar/CalendarDays'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarPickerProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
  selectedDate: Date | undefined
  setSelectedDate: (date: Date) => void
  isDarkMode: boolean
}

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export const CalendarPicker = ({ isDarkMode }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  return (
    <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center mb-4">
        <Button 
          variant="outline" 
          onClick={prevMonth}
          className={isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <h3 className="text-lg font-medium">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <Button 
          variant="outline" 
          onClick={nextMonth}
          className={isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {WEEKDAYS.map((day) => (
          <div key={day} className={`text-center text-sm font-medium ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {day}
          </div>
        ))}
        {generateCalendarDays(currentMonth).map((date) => (
          <button
            key={date.toISOString()}
            onClick={() => setSelectedDate(date)}
            className={`
              p-2 rounded-lg transition-colors
              ${selectedDate?.toDateString() === date.toDateString()
                ? 'bg-[var(--color-orange)] text-white'
                : isDarkMode 
                  ? 'hover:bg-gray-700 text-gray-300'
                  : 'hover:bg-gray-100 text-gray-700'
              }
            `}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  )
}  