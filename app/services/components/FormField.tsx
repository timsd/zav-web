import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

interface FormFieldProps {
  label: string
  error?: string
  children: React.ReactNode
}

export const FormField = ({ label, error, children }: FormFieldProps) => (
  <div className="space-y-2">
    <Label>{label}</Label>
    {children}
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1"
      >
        {error}
      </motion.p>
    )}
  </div>
)
