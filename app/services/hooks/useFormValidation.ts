import { useState } from 'react'

export const useFormValidation = () => {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = (data: {
    name: string
    email: string
    service: string
    date?: Date
    time: string
    message: string
  }) => {
    const newErrors: Record<string, string> = {}

    if (!data.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!data.service) {
      newErrors.service = 'Please select a service'
    }

    if (!data.date) {
      newErrors.date = 'Please select a date'
    }

    if (!data.time) {
      newErrors.time = 'Please select a time slot'
    }

    if (!data.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return { errors, validateForm }
}
