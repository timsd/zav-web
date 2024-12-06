import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sun, Moon, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'

interface FooterProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export function Footer({ isDarkMode, toggleDarkMode }: FooterProps) {
    return (
    <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
       <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl zavolah-font mb-4">
                <Link
                  href="/"
                  className={`cursor-pointer hover:text-[var(--color-orange)] transition-colors duration-200 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}
                >
                  Zavolah
                </Link>
              </h3>
              <p className="zavolah-font">...making a place called HOME</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Market Road, OtaEfun, Osogbo; Alaba International, Ojo Lagos</p>
              <p>Phone: (234) 816-6404-608</p>
              <p>Email: contact@zavolah.com</p>
            </div>
            <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                 <Link
                    href="/marketplace"
                    className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'} transition-colors duration-200`}
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                   href="/staff"
                    className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'} transition-colors duration-200`}
                  >
                    Staff Access
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center">
                  <div className="flex space-x-4"> 
                <a 
                  href="https://www.facebook.com/zavolah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'}`}
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/zavolah" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'}`}
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/zavolah" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'}`}
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.youtube.com/@zavolah" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'}`}
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a 
                  href="https://wa.me/2348066404608"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDarkMode ? 'text-gray-300 hover:text-[var(--color-orange)]' : 'text-gray-700 hover:text-[var(--color-green)]'}`}
                > <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </Button>
          </div>
          <div className="text-center mt-4">
            <p className={`text-sm ${isDarkMode ? 'text-gray-300' :   'text-gray-700'}`}>
              &copy; 2024 Zavolah. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  )
}

