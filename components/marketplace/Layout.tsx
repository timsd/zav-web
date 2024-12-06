'use client'

import { useState } from 'react'
import MarketplaceHeader from './Header'
import MarketplaceFooter from './Footer'

interface MarketplaceLayoutProps {
  children: React.ReactNode
}

export function MarketplaceLayout({ children }: MarketplaceLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activePopup, setActivePopup] = useState(null)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <MarketplaceHeader 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main className="flex-grow">{children}</main>
      <MarketplaceFooter 
        isDarkMode={isDarkMode} 
        setActivePopup={setActivePopup}
      />
    </div>
  )
}
