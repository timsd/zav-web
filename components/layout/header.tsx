'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigationItems = [
  { href: '/', label: 'Home' },
  { href: '/store', label: 'Store' },
  { href: '/academy', label: 'Academy' },
  { href: '/services', label: 'Services' },
]

export function Header({ isDarkMode }) {
  const pathname = usePathname()
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-4`}>
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 sm:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/placeholder.svg?text=Logo&width=40&height=40"
                alt="Zavolah Logo"
                className="w-10 h-10 cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
              <span className={`text-3xl zavolah-font zavolah-animation cursor-pointer ${!isDarkMode && 'text-black'}`}>
                Zavolah
              </span>
            </Link>
          </div>
          <ul className="flex justify-center space-x-8">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`hover:text-[var(--color-orange)] transition-colors ${
                    pathname === item.href ? 'text-[var(--color-orange)]' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
