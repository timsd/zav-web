import { format } from 'date-fns'
import { toZonedTime } from 'date-fns-tz'

interface BookingSummaryProps {
  formData: {
    service: string
    date?: Date | null
    time: string
    name: string
    email: string
    message: string
  }
  userTimezone: string
}

export const BookingSummary = ({ formData, userTimezone }: BookingSummaryProps) => {
  const localDateTime = formData?.date ? toZonedTime(formData.date, userTimezone) : null

  return (
    <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
      <h3 className="font-bold mb-4">Booking Summary</h3>
      <dl className="space-y-2">
        <dt>Service:</dt>
        <dd className="ml-4 font-medium">{formData?.service || 'Not selected'}</dd>
        
        <dt>Date & Time:</dt>
        <dd className="ml-4 font-medium">
          {localDateTime ? `${format(localDateTime, 'PPP')} at ${formData.time}` : 'Not selected'} 
          ({userTimezone})
        </dd>
        
        <dt>Name:</dt>
        <dd className="ml-4 font-medium">{formData?.name || 'Not provided'}</dd>
        
        <dt>Email:</dt>
        <dd className="ml-4 font-medium">{formData?.email || 'Not provided'}</dd>
      </dl>
    </div>
  )
}