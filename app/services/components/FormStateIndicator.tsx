import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

interface FormStateIndicatorProps {
  isValid: boolean
  isDirty: boolean
}

export const FormStateIndicator = ({ isValid, isDirty }: FormStateIndicatorProps) => {
  if (!isDirty) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center ${isValid ? 'text-green-500' : 'text-red-500'}`}
    >
      {isValid ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
    </motion.div>
  )
}
