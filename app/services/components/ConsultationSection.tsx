import { useContext } from 'react'
import { Button } from "@/components/ui/button"
import { ServicesContext } from '../context/ServicesContext'
import { ConsultationDialog } from './ConsultationDialog'

export const ConsultationSection = () => {
  const { 
    isDarkMode,
    formData,
    formState,
    userTimezone,
    timeSlots,
    handleSubmitForm,
    setFormData,
    isDialogOpen,
    setIsDialogOpen,
    bookingStep,
    setBookingStep,
    renderBookingStep 
  } = useContext(ServicesContext)
  
  return (
    <section className={`mb-16 p-8 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'}`}>    
      <h2 className="text-3xl font-bold mb-8 text-center">Book a Consultation</h2>
      
      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="w-full bg-[var(--color-orange)] text-white hover:bg-[var(--color-green)] py-6 text-lg"
        >
          Schedule a Virtual Consultation
        </Button>
      </div>

      <ConsultationDialog
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        currentStep={bookingStep}
        onStepChange={setBookingStep}
        renderStep={renderBookingStep}
        handlers={{
          setFormData,
          handleSubmit: handleSubmitForm
        }}
      />
    </section>
  )
}