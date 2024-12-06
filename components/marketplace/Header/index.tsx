'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, User, MessageSquare, Bell, Sun, Moon, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <span className="text-3xl zavolah-font zavolah-animation">Zavolah Marketplace</span>
          </div>
          
          <div className="flex-grow mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search designs, sellers, or styles"
                className="w-full pl-10 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <AccountDropdown />
            <NotificationButtons />
            <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </div>
        </div>
      </div>
    </header>
  )
}