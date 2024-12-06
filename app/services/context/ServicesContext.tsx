import { createContext } from 'react'

export const ServicesContext = createContext({
  isDarkMode: true,
  formData: {},
  formState: {},
  userTimezone: '',
  expandedFAQs: {} as { [key: string]: number | null },
  toggleFAQ: (serviceTitle: string, faqIndex: number) => {},
  handleSubmitForm: async () => {},
  resetForm: () => {},
  isDialogOpen: false,
  setIsDialogOpen: (value: boolean) => {},
  timeSlots: [] as string[],
  setFormData: (data: any) => {},
  renderBookingStep: () => null as React.ReactNode
})