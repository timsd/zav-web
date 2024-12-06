import { useContext } from 'react'
import { ServicesContext } from '../context/ServicesContext'
import { MessageCircle } from 'lucide-react'

export const LiveChatSection = () => {
  const { isDarkMode } = useContext(ServicesContext)
  
  return (
    <section className={`mb-16 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <h2 className="text-3xl font-bold mb-8 text-center">Live Chat Support</h2>
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg p-6 shadow-lg text-center`}>
        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-[var(--color-orange)]" />
        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Our live chat support is available 24/7. Connect with our team for immediate assistance.
        </p>
      </div>
    </section>
  )
}
