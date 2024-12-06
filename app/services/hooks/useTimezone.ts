import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'

export const useTimezone = () => {
  const [userTimezone, setUserTimezone] = useState('')
  const [timeSlots, setTimeSlots] = useState<string[]>([])

  useEffect(() => {
    setUserTimezone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  const convertToLocalTime = (date: Date, time: string) => {
    const dateTimeString = `${date.toISOString().split('T')[0]}T${time}`
    return formatInTimeZone(new Date(dateTimeString), userTimezone, 'HH:mm')
  }

  const generateTimeSlots = (selectedDate: Date) => {
    const slots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00']
    const localSlots = slots.map(time => ({
      original: time,
      local: convertToLocalTime(selectedDate, time)
    }))
    setTimeSlots(localSlots.map(slot => `${slot.original} (${slot.local} your time)`))
  }

  return { userTimezone, timeSlots, generateTimeSlots }
}
