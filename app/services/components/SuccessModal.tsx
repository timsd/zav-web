import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface SuccessModalProps {
  onClose: () => void
}

export const SuccessModal = ({ onClose }: SuccessModalProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  >
    <div className="bg-white rounded-lg p-8 text-center">
      <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
      <p className="mb-6">Check your email for consultation details.</p>
      <button
        onClick={onClose}
        className="bg-[var(--color-orange)] text-white px-6 py-2 rounded hover:bg-[var(--color-green)]"
      >
        Close
      </button>
    </div>
  </motion.div>
)
