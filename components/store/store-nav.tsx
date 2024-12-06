
"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  User, Settings, LogOut, HelpCircle, ShoppingBag, 
  FileText, MessageSquare, Search, ShoppingCart, 
  Package, Heart 
} from 'lucide-react'

export function StoreNav({ isDarkMode, toggleDarkMode, cartItems, searchQuery, setSearchQuery }) {
  return (
    <header className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-4 sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/placeholder.svg?text=Logo&width=40&height=40"
                alt="Zavolah Logo"
                className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
              <span className="text-3xl zavolah-font zavolah-animation">Zavolah</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search products, brands and categories"
                className="w-full pl-10 pr-4 py-2"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Account and Navigation */}
          <div className="flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => window.location.href = '/account'}>
                <User className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
                  </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account/orders'}>
                  <Package className="mr-2 h-4 w-4" />
                  <span>Orders</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account/wishlist'}>
                  <Heart className="mr-2 h-4 w-4" />
                  <span>Wishlist</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.location.href = '/account/settings'}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Help Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5" />
                  <span>Help</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <FileText className="mr-2 h-4 w-4" />
                  <span>FAQs</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  <span>Contact Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  <span>Shipping Info</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Cart */}
            <Link href="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[var(--color-orange)] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItems.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
