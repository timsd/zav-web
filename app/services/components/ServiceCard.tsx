import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { ServiceDetails } from './ServiceDetails'
import { ServiceTestimonial } from './ServiceTestimonial'
import { ServiceFAQs } from './ServiceFAQs'

interface ServiceCardProps {
  service: {
    icon: React.ReactNode
    title: string
    description: string
    image: string
    details: string[]
    testimonial: {
      text: string
      author: string
    }
    faqs: Array<{
      question: string
      answer: string
    }>
  }
  isDarkMode: boolean
  expandedFAQs: { [key: string]: number | null }
  toggleFAQ: (serviceTitle: string, faqIndex: number) => void
}

export const ServiceCard = ({ service, isDarkMode, expandedFAQs, toggleFAQ }: ServiceCardProps) => {
  const baseCardClass = `${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-6 shadow-lg`
  const textClass = isDarkMode ? 'text-gray-300' : 'text-gray-600'

  return (
    <motion.div
      className={baseCardClass}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-center mb-4">{service.icon}</div>
      <h2 className="text-2xl font-semibold mb-2 text-center">{service.title}</h2>
      <p className={`${textClass} mb-4`}>{service.description}</p>
      
      <Image
        src={service.image}
        alt={service.title}
        width={400}
        height={300}
        className="rounded-lg mb-4"
      />
      
      <ServiceDetails details={service.details} textClass={textClass} />
      <ServiceTestimonial testimonial={service.testimonial} textClass={textClass} />
      <ServiceFAQs
        faqs={service.faqs}
        serviceTitle={service.title}
        expandedFAQs={expandedFAQs}
        toggleFAQ={toggleFAQ}
      />
    </motion.div>
  )
}
