import { motion } from 'framer-motion'

export const LoadingSpinner = () => (
  <motion.div
    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
    animate={{ rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  />
)
