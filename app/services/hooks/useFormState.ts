import { useState, useEffect } from 'react'

export const useFormState = () => {
  const [formState, setFormState] = useState({
    isDirty: false,
    isValid: false,
    isSubmitting: false
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: undefined as Date | undefined,
    time: '',
    message: ''
  })

  useEffect(() => {
    const validateInRealTime = () => {
      const isValid = Object.values(formData).every(value => {
        if (typeof value === 'string') return value.trim().length > 0
        if (value instanceof Date) return true
        return value !== undefined
      })

      setFormState(prev => ({
        ...prev,
        isValid,
        isDirty: true
      }))
    }

    if (formState.isDirty) {
      validateInRealTime()
    }
  }, [formData, formState.isDirty])

  return { formState, setFormState, formData, setFormData }
}
