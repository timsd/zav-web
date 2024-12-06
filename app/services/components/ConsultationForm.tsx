interface ConsultationFormProps {
    isDarkMode: boolean
    formData: {
      service: string
      name: string
      email: string
      message: string
    }
    errors: {
      service?: string
      name?: string
      email?: string
      message?: string
    }
    setFormData: (data: any) => void
  }
  
  export const ConsultationForm = () => {
    return (
      <motion.div 
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div 
          className="space-y-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
        >
          <FormField
            label="Service Type"
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
          />
          <FormField
            label="Full Name"
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
          />
          <FormField
            label="Email"
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4"
          />
          <FormField
            label="Message"
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 min-h-[120px]"
          />
        </motion.div>
      </motion.div>
    )
  }  