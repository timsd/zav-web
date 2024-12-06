'use client'

import { Button } from "@/components/ui/button"

interface CalendarProps {
  isDarkMode: boolean
  selectedDate: Date | undefined
  setSelectedDate: (date: Date) => void
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

export const Calendar = ({ isDarkMode, selectedDate, setSelectedDate, currentMonth, setCurrentMonth }: CalendarProps) => {
  const isWeekend = (date: Date) => {
    const day = date.getDay()
    return day === 0 || day === 6
  }

  const generateCalendarDays = (month: Date) => {
    const start = new Date(month.getFullYear(), month.getMonth(), 1)
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0)
    const days = []

    for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
      days.push(new Date(d))
    }

    return days
  }

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <Button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
          disabled={currentMonth <= new Date()}
        >
          Previous
        </Button>
        <span className="font-bold">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
        <Button
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
          disabled={currentMonth >= new Date(new Date().setMonth(new Date().getMonth() + 2))}
        >
          Next
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-semibold">
            {day}
          </div>
        ))}
        {generateCalendarDays(currentMonth).map((date, index) => (
          <Button
            key={index}
            variant={selectedDate?.toDateString() === date.toDateString() ? "default" : "outline"}
            className={`${
              selectedDate?.toDateString() === date.toDateString()
                ? 'bg-[var(--color-orange)] hover:bg-[var(--color-green)]'
                : isDarkMode
                  ? 'bg-gray-700 text-white'
                  : 'bg-white'
            }`}
            disabled={date < new Date() || isWeekend(date)}
            onClick={() => setSelectedDate(date)}
          >
            {date.getDate()}
          </Button>
        ))}
      </div>
    </div>
  )
}
