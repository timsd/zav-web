import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface FooterProps {
  openPopup: (content: string) => void
}

export function Footer({ openPopup }: FooterProps) {
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl zavolah-font mb-4">Zavolah</h3>
            <p className="zavolah-font">...making a place called HOME</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Button variant="link" onClick={() => openPopup('about')}>About Marketplace</Button></li>
              <li><Button variant="link" onClick={() => openPopup('buyer-protection')}>Buyer Protection</Button></li>
              <li><Button variant="link" onClick={() => openPopup('terms')}>Terms of Service</Button></li>
              <li><Button variant="link" onClick={() => window.location.href = '/become-seller'}>Become a Seller</Button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Button variant="link" onClick={() => openPopup('faq')}>FAQs</Button></li>
              <li><Button variant="link" onClick={() => openPopup('contact')}>Contact Us</Button></li>
              <li><Button variant="link" onClick={() => openPopup('dispute')}>Dispute Resolution</Button></li>
              <li><Button variant="link" onClick={() => openPopup('report')}>Report an Issue</Button></li>
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
            <Button variant="link" onClick={() => openPopup('privacy')}>Privacy Policy</Button>
            <Button variant="link" onClick={() => openPopup('cookie')}>Cookie Policy</Button>
            <Button variant="link" onClick={() => openPopup('accessibility')}>Accessibility</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
