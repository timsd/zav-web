import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServiceFAQsProps {
  faqs: Array<{
    question: string
    answer: string
  }>
  serviceTitle: string
  expandedFAQs: { [key: string]: number | null }
  toggleFAQ: (serviceTitle: string, faqIndex: number) => void
}

export const ServiceFAQs = ({ faqs, serviceTitle, expandedFAQs, toggleFAQ }: ServiceFAQsProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              onClick={() => toggleFAQ(serviceTitle, index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium">{faq.question}</span>
              {expandedFAQs[serviceTitle] === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <AnimatePresence>
              {expandedFAQs[serviceTitle] === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-2"
                >
                  <p className="text-[var(--color-orange)]">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  )
}
