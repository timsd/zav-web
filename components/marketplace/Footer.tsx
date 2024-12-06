'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function MarketplaceFooter({ isDarkMode, setActivePopup }) {
  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-8`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl zavolah-font mb-4">Zavolah</h3>
            <p className="zavolah-font">...making a place called HOME</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>About Marketplace</Button></li>
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Buyer Protection</Button></li>
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Terms of Service</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>FAQs</Button></li>
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Contact Us</Button></li>
              <li><Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Report an Issue</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Stay updated with our latest designs and offers</p>
            <form className="flex">
              <Input type="email" placeholder="Your email" className="mr-2" />
              <Button type="submit" className="bg-[var(--color-orange)] hover:bg-[var(--color-green)]">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-wrap justify-between items-center">
          <p>© 2024 Zavolah Marketplace. All rights reserved.</p>
          <div className="flex space-x-4">
            <Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Privacy Policy</Button>
            <Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Cookie Policy</Button>
            <Button variant="link" className={isDarkMode ? 'text-white hover:text-[var(--color-orange)]' : ''}>Accessibility</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
