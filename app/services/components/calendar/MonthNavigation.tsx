interface MonthNavigationProps {
  currentMonth: Date
  setCurrentMonth: (date: Date) => void
}

export const MonthNavigation = ({ currentMonth, setCurrentMonth }: MonthNavigationProps) => {
  return (
    <>
      <Button
        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
        disabled={currentMonth <= new Date()}
        className="text-sm"
      >
        Previous Month
      </Button>
      <span className="font-bold">
        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </span>
      <Button
        onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
        disabled={currentMonth >= new Date(new Date().setMonth(new Date().getMonth() + 2))}
        className="text-sm"
      >
        Next Month
      </Button>
    </>
  )
}
