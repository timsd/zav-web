import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

interface ConfirmationStepProps {
  onConfirm: () => void
  onBack: () => void
  isLoading: boolean
}

export const ConfirmationStep = ({ onConfirm, onBack, isLoading }: ConfirmationStepProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col gap-4"
  >
    <h3 className="text-lg font-semibold">Ready to Book?</h3>
    <p>Please review your booking details above before confirming.</p>
    <div className="flex gap-4">
      <Button onClick={onBack} variant="outline" disabled={isLoading}>
        Back
      </Button>
      <Button 
        onClick={onConfirm} 
        className="bg-[var(--color-orange)] hover:bg-[var(--color-green)]"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Confirm Booking'}
      </Button>
    </div>
  </motion.div>
)
