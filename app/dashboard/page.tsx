'use client'

import { useState } from 'react'
import { ProfileSection } from '@/components/dashboard/sections/ProfileSection'
import { OrdersSection } from '@/components/dashboard/sections/OrdersSection'
import { WishlistSection } from '@/components/dashboard/sections/WishlistSection'
import { PaymentsSection } from '@/components/dashboard/sections/PaymentsSection'
import { NotificationsSection } from '@/components/dashboard/sections/NotificationsSection'
import { ReviewsSection } from '@/components/dashboard/sections/ReviewsSection'
import { SecuritySection } from '@/components/dashboard/sections/SecuritySection'
import { DeleteAccountSection } from '@/components/dashboard/sections/DeleteAccountSection'

const sections = {
  profile: ProfileSection,
  orders: OrdersSection,
  wishlist: WishlistSection,
  payments: PaymentsSection,
  notifications: NotificationsSection,
  reviews: ReviewsSection,
  security: SecuritySection,
  'delete-account': DeleteAccountSection
}

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('profile')
  const ActiveSection = sections[activeSection as keyof typeof sections]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-6">
        <nav className="w-64 space-y-2">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-full text-left p-3 rounded-lg ${
                activeSection === section
                  ? 'bg-[var(--color-orange)] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
            </button>
          ))}
        </nav>
        
        <main className="flex-1">
          <ActiveSection />
        </main>
      </div>
    </div>
  )
}
