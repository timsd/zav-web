import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"

export function PaymentDialog({ isOpen, onClose, design }) {
  const [landSizeUnit, setLandSizeUnit] = useState("sqft")
  const [paymentOption, setPaymentOption] = useState("full")

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Please provide your details and choose your payment option.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" required />
            </div>
            <div>
              <Label htmlFor="land-size">Land Size</Label>
              <div className="flex space-x-2">
                <Input id="land-size" type="number" placeholder="Enter size" className="flex-grow" required />
                <Select value={landSizeUnit} onValueChange={setLandSizeUnit}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sqft">sq ft</SelectItem>
                    <SelectItem value="sqm">sq m</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <PaymentOptions 
              paymentOption={paymentOption} 
              setPaymentOption={setPaymentOption} 
              design={design} 
              formatPrice={formatPrice} 
            />
          </div>
          <DialogFooter className="mt-4">
            <Button type="submit">Make Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}