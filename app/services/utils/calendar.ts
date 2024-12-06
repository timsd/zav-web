export const generateDays = (month: Date) => {
  const start = new Date(month.getFullYear(), month.getMonth(), 1)
  const end = new Date(month.getFullYear(), month.getMonth() + 1, 0)
  const days = []
  
  for (let d = start; d <= end; d.setDate(d.getDate() + 1)) {
    if (![0, 6].includes(d.getDay())) { // Exclude weekends
      days.push(new Date(d))
    }
  }
  
  return days
}

export const isSelectedDate = (date: Date, selectedDate?: Date) => {
  return selectedDate?.toDateString() === date.toDateString()
}

export const getDateButtonClass = (date: Date, selectedDate?: Date, isDarkMode?: boolean) => {
  return `
    ${isSelectedDate(date, selectedDate)
      ? 'bg-[var(--color-orange)] hover:bg-[var(--color-green)]'
      : isDarkMode
        ? 'bg-gray-700 text-white'
        : 'bg-white'
    }
  `
}
