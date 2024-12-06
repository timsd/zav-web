interface CalendarDaysProps {
  currentMonth: Date
  selectedDate: Date | undefined
  setSelectedDate: (date: Date) => void
  isDarkMode: boolean
  generateCalendarDays: (month: Date) => Date[]
  isWeekend: (date: Date) => boolean
}

export const CalendarDays = ({
  currentMonth,
  selectedDate,
  setSelectedDate,
  isDarkMode,
  generateCalendarDays,
  isWeekend
}: CalendarDaysProps) => {
  const days = generateCalendarDays(currentMonth)

  return (
    <>
      {days.map((date) => (
        <button
          key={date.toISOString()}
          onClick={() => setSelectedDate(date)}
          disabled={isWeekend(date)}
          className={`
            p-2 rounded-md
            ${isDarkMode ? 'text-white' : 'text-gray-900'}
            ${selectedDate?.toDateString() === date.toDateString() 
              ? 'bg-[var(--color-orange)] text-white' 
              : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
            ${isWeekend(date) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          `}
        >
          {date.getDate()}
        </button>
      ))}
    </>
  )
}