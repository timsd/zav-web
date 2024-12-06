'use client'

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function PopupDialog({ activePopup, setActivePopup }) {
  if (!activePopup) return null

  const popupContent = {
    about: "Zavolah Marketplace is a platform connecting innovative designers with homeowners and builders. Our marketplace showcases a wide range of architectural designs, from modern minimalist homes to eco-friendly treehouses.",
    'buyer-protection': "Our Buyer Protection program ensures a safe and secure transaction process. We offer a 100% money-back guarantee if the design doesn't meet the agreed-upon specifications.",
    terms: "By using Zavolah Marketplace, you agree to our terms of service. This includes respecting intellectual property rights, adhering to our payment policies, and following our community guidelines.",
    faq: "Frequently asked questions and answers about our marketplace, design process, and payment options.",
    contact: "Get in touch with our support team for any questions or concerns.",
    dispute: "Learn about our dispute resolution process and how we handle conflicts.",
    report: "Report any issues or violations of our marketplace policies."
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{activePopup}</h2>
          <Button variant="ghost" size="icon" onClick={() => setActivePopup(null)}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div>
          <p>{popupContent[activePopup]}</p>
        </div>
      </div>
    </div>
  )
}
