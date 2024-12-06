export const useServicesForm = () => {
  const [formData, setFormData] = useState({
    service: "",
    date: undefined,
    time: "",
    name: "",
    email: "",
    message: ""
  })
  
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isValid: false,
    isDirty: false
  })

  return {
    formData,
    setFormData,
    formState,
    setFormState
  }
}
