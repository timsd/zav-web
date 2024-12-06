const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']

export const WeekdayHeaders = () => {
  return (
    <>
      {WEEKDAYS.map((day) => (
        <div
          key={day}
          className="text-center font-medium text-sm text-gray-500"
        >
          {day}
        </div>
      ))}
    </>
  )
}
