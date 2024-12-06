import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { services } from '../data/services'
import { Label } from "@/components/ui/label"

interface FormFieldsProps {
  formData: {
    service: string
    name: string
    email: string
    message: string
    time: string
  }
  setFormData: (data: any) => void
  timeSlots: string[]
}

export const FormFields = ({ isDarkMode, formData, setFormData }: FormFieldsProps) => {
  const inputClasses = `w-full p-3 rounded-lg border transition-colors ${
    isDarkMode 
      ? 'bg-gray-700 border-gray-600 text-white focus:border-[var(--color-orange)]' 
      : 'bg-white border-gray-300 text-gray-900 focus:border-[var(--color-orange)]'
  }`

  return (
    <div className="space-y-4">
      <div>
        <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Service Type
        </label>
        <select 
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
          className={inputClasses}
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Full Name
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className={inputClasses}
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Email Address
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className={inputClasses}
          placeholder="Enter your email address"
        />
      </div>

      <div>
        <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Message
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          className={`${inputClasses} min-h-[100px]`}
          placeholder="Tell us about your project needs..."
        />
      </div>
    </div>
  )
}