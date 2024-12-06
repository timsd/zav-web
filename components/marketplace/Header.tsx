'use client'
import Link from 'next/link'
import { Menu, Search, User, MessageSquare, Bell, Sun, Moon, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MarketplaceHeader({ isDarkMode, toggleDarkMode, searchQuery, setSearchQuery }) {
  return (
    <header className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-4`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6" />
            <Link href="/" className="text-3xl zavolah-font zavolah-animation hover:text-[var(--color-orange)]">
              Zavolah
            </Link>
          </div>
          <div className="flex-grow mx-4">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search designs, sellers, or styles"
                className={`w-full pl-10 pr-4 py-2 ${isDarkMode ? 'bg-gray-800 text-white placeholder-gray-400' : ''}`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className={`flex items-center space-x-1 ${isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}`}>
                  <User className="h-5 w-5" />
                  <span>Account</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className={isDarkMode ? 'bg-gray-800 text-white' : ''}>
                <DropdownMenuItem className={isDarkMode ? 'hover:bg-gray-700' : ''}>Buyer Dashboard</DropdownMenuItem>
                <DropdownMenuItem className={isDarkMode ? 'hover:bg-gray-700' : ''}>Seller Dashboard</DropdownMenuItem>
                <DropdownMenuItem className={isDarkMode ? 'hover:bg-gray-700' : ''}>Profile</DropdownMenuItem>
                <DropdownMenuItem className={isDarkMode ? 'hover:bg-gray-700' : ''}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" className="relative">
              <MessageSquare className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">3</span>
            </Button>
            <Button variant="ghost" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">5</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
