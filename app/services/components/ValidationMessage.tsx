import { motion } from 'framer-motion'

interface ValidationMessageProps {
  message: string
  type: 'error' | 'success'
}

export const ValidationMessage = ({ message, type }: ValidationMessageProps) => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    className={`p-2 rounded ${
      type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
    }`}
  >
    {message}
  </motion.div>
)
