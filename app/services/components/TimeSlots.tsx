import { Label } from "@/components/ui/label"
import { motion } from 'framer-motion'

interface TimeSlotsProps {
  selectedTime: string
  setSelectedTime: (time: string) => void
  isDarkMode: boolean
  timeSlots?: string[]
}

export const TimeSlots = ({ isDarkMode, selectedTime, setSelectedTime }) => {
  const timeSlots = [
    '09:00', '10:00', '11:00', 
    '13:00', '14:00', '15:00'
  ]

  return (
    <div className="grid grid-cols-3 gap-2">
      {timeSlots.map((time) => (
        <Button
          key={time}
          onClick={() => setSelectedTime(time)}
          className={`
            ${selectedTime === time 
              ? 'bg-[var(--color-orange)] text-white' 
              : isDarkMode 
                ? 'bg-gray-700 hover:bg-gray-600' 
                : 'bg-gray-100 hover:bg-gray-200'
            }
          `}
        >
          {time}
        </Button>
      ))}
    </div>
  )
}