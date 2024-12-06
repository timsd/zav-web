  import { useState } from 'react'
  import { motion } from 'framer-motion'
  import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
  import { Button } from "@/components/ui/button"
  import { FormFields } from './FormFields'
  import { FormStateIndicator } from './FormStateIndicator'
  import { BookingSummary } from './BookingSummary'
  import { ConfirmationStep } from './ConfirmationStep'
  import { CalendarPicker } from './CalendarPicker'
  import { TimeSlots } from './TimeSlots'

  export function ConsultationDialog({
    isOpen,
    onOpenChange,
    isDarkMode
  }: ConsultationDialogProps) {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedTime, setSelectedTime] = useState('')
    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | null>(null)
    const [formData, setFormData] = useState({
      service: '',
      name: '',
      email: '',
      message: '',
      date: null,
      time: ''
    })

    const steps = [
      { number: 1, title: 'Select Date & Time' },
      { number: 2, title: 'Your Details' },
      { number: 3, title: 'Confirm Booking' }
    ]

    return (
      <Dialog open={isOpen} onOpenChange={onOpenChange}>
        <DialogContent className={`sm:max-w-[1200px] p-0 overflow-hidden ${
          isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
        }`}>
          <DialogHeader className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              {steps.map((step) => (
                <div 
                  key={step.number}
                  className={`flex items-center ${
                    currentStep === step.number 
                      ? 'text-[var(--color-orange)]' 
                      : isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                    currentStep === step.number 
                      ? 'bg-[var(--color-orange)] text-white' 
                      : isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {step.number}
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              ))}
            </div>
          </DialogHeader>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            {currentStep === 1 && (
              <div className="grid grid-cols-2 gap-6">
                <CalendarPicker isDarkMode={isDarkMode} />
                <TimeSlots isDarkMode={isDarkMode} />
              </div>
            )}

            {currentStep === 2 && (
              <FormFields 
                formData={formData}
                setFormData={setFormData}
                isDarkMode={isDarkMode}
              />
            )}

            {currentStep === 3 && (
              <BookingSummary 
                formData={formData}
                isDarkMode={isDarkMode}
              />
            )}

            <div className={`flex justify-between mt-6 pt-6 border-t ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              {currentStep > 1 && (
                <Button
                  variant="outline"
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className={isDarkMode ? 'bg-gray-700 text-white' : ''}
                >
                  Back
                </Button>
              )}
              {currentStep < 3 ? (
                <Button
                  className="bg-gradient-to-r from-[var(--color-orange)] to-[var(--color-green)] text-white"
                  onClick={() => setCurrentStep(currentStep + 1)}
                >
                  Continue
                </Button>
              ) : (
                <Button
                  className="bg-[var(--color-orange)] text-white"
                  onClick={handlers.handleSubmit}
                >
                  Confirm Booking
                </Button>
              )}
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    )
  }