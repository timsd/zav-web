import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface PopupDialogProps {
  content: string | null
  onClose: () => void
}

export function PopupDialog({ content, onClose }: PopupDialogProps) {
  if (!content) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{content}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <div>
          {content === 'about' && (
            <p>Zavolah Marketplace is a platform connecting innovative designers with homeowners and builders. Our marketplace showcases a wide range of architectural designs, from modern minimalist homes to eco-friendly treehouses.</p>
          )}
          {content === 'buyer-protection' && (
            <p>Our Buyer Protection program ensures a safe and secure transaction process. We offer a 100% money-back guarantee if the design doesn't meet the agreed-upon specifications.</p>
          )}
          {/* Add other content conditions here */}
        </div>
      </div>
    </div>
  )
}
