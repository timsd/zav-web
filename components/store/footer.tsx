
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sun, Moon, Facebook, Instagram, Linkedin, Youtube, MessageCircle, CreditCard } from 'lucide-react'

interface StoreFooterProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

export const StoreFooter: React.FC<StoreFooterProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <footer className={`border-t py-6 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'} transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <h3 className="text-2xl zavolah-font mb-4">
              <Link href="/" className={`cursor-pointer hover:text-[var(--color-orange)] transition-colors duration-200`}>
                Zavolah
              </Link>
            </h3>
            <p className="zavolah-font">...making a place called HOME</p>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-6 w-6 hover:text-[var(--color-orange)] cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-[var(--color-orange)] cursor-pointer" />
              <Linkedin className="h-6 w-6 hover:text-[var(--color-orange)] cursor-pointer" />
              <Youtube className="h-6 w-6 hover:text-[var(--color-orange)] cursor-pointer" />
              <MessageCircle className="h-6 w-6 hover:text-[var(--color-orange)] cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[var(--color-orange)]">About Us</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">Contact</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">Terms of Service</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[var(--color-orange)]">Return Policy</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">Shipping Information</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">FAQs</a></li>
              <li><a href="#" className="hover:text-[var(--color-orange)]">Service Centers</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest products and offers</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="mr-2" />
              <Button type="submit" className="bg-[var(--color-orange)] hover:bg-[var(--color-green)]">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-wrap justify-between items-center">
          {/* Payment Methods */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <CreditCard className="h-8 w-8" />
            <img src="/placeholder.svg?text=Visa&width=40&height=24" alt="Visa" className="h-8" />
            <img src="/placeholder.svg?text=MasterCard&width=40&height=24" alt="MasterCard" className="h-8" />
            <img src="/placeholder.svg?text=PayPal&width=40&height=24" alt="PayPal" className="h-8" />
          </div>

          {/* Dark Mode Toggle and Copyright */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-3 border rounded-full px-3 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full p-1"
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-700" />
                )}
              </Button>
              <span className="text-sm font-medium">
                {isDarkMode ? 'Light' : 'Dark'} Mode
              </span>
            </div>
            <p className="text-sm">© 2024 Zavolah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
