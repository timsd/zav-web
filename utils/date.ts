export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const isValidDate = (date: Date): boolean => {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date >= today
}

export const getAvailableTimeSlots = (date: Date): string[] => {
  const slots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']
  const today = new Date()
  
  if (date.toDateString() === today.toDateString()) {
    return slots.filter(slot => {
      const [hours, minutes] = slot.split(':')
      const slotTime = new Date()
      slotTime.setHours(parseInt(hours), parseInt(minutes))
      return slotTime > today
    })
  }
  
  return slots
}
