import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Design } from "@/types/marketplace"

interface PaymentDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  selectedDesign: Design | null
}

export function PaymentDialog({ isOpen, onOpenChange, onSubmit, selectedDesign }: PaymentDialogProps) {
  const [landSizeUnit, setLandSizeUnit] = useState('sqft')
  const [paymentOption, setPaymentOption] = useState('full')
  const [surveyPlan, setSurveyPlan] = useState<File | null>(null)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
          <DialogDescription>
            Please provide your details and choose your payment option.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="land-size">Land Size</Label>
              <div className="flex gap-2">
                <Input id="land-size" type="number" placeholder="Enter size" />
                <Select value={landSizeUnit} onValueChange={setLandSizeUnit}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sqft">sq ft</SelectItem>
                    <SelectItem value="sqm">sq m</SelectItem>
                    <SelectItem value="acres">acres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>Payment Option</Label>
              <RadioGroup value={paymentOption} onValueChange={setPaymentOption}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="full" id="full" />
                  <Label htmlFor="full">Full Payment ({selectedDesign && formatPrice(selectedDesign.price)})</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="installment" id="installment" />
                  <Label htmlFor="installment">Installment Payment</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="survey-plan">Upload Survey Plan</Label>
              <Input
                id="survey-plan"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(e) => setSurveyPlan(e.target.files?.[0] || null)}
              />
            </div>

            <div>
              <Label htmlFor="additional-notes">Additional Notes</Label>
              <Textarea id="additional-notes" placeholder="Any special requirements or notes" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Make Payment</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}