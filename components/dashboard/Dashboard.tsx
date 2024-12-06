'use client'

import { useState } from 'react'
import { DashboardHeader } from './layout/DashboardHeader'
import { DashboardSidebar } from './layout/DashboardSidebar'
import { DashboardStats } from './layout/DashboardStats'
import { ProfileSection } from './sections/ProfileSection'
// Import other sections

export function Dashboard() {
  const [activeSection, setActiveSection] = useState('profile')

  const renderSection = () => {
    switch(activeSection) {
      case 'profile':
        return <ProfileSection />
      case 'orders':
        return <OrdersSection />
      // Add other cases
      default:
        return <ProfileSection />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <DashboardHeader />
      <DashboardStats />
      
      <div className="flex gap-6">
        <DashboardSidebar 
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />
        <div className="flex-grow bg-white rounded-lg p-6">
          {renderSection()}
        </div>
      </div>
    </div>
  )
}
