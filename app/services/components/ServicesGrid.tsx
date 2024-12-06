import { ServiceCard } from './ServiceCard'
import { services } from '../data/services'
import { useContext } from 'react'
import { ServicesContext } from '../context/ServicesContext'

export const ServicesGrid = () => {
  const { isDarkMode, expandedFAQs, toggleFAQ } = useContext(ServicesContext)

  return (
    <section className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          service={service}
          isDarkMode={isDarkMode}
          expandedFAQs={expandedFAQs}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </section>
  )
}
