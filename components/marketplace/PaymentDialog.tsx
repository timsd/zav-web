'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PaymentDialog({ isOpen, onOpenChange, selectedDesign, formatPrice }) {
  const [landSizeUnit, setLandSizeUnit] = useState('sqft')
  const [paymentOption, setPaymentOption] = useState('full')
  const [surveyPlan, setSurveyPlan] = useState(null)
  const [paymentStep, setPaymentStep] = useState('details')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    landSize: '',
    customChanges: ''
  })

  const handlePayment = async (formData) => {
    const paymentData = {
      amount: selectedDesign.price * (paymentOption === 'full' ? 1 : 0.3),
      email: formData.email,
      name: formData.name,
      designId: selectedDesign.id,
      paymentOption
    }

    const response = await fetch('/api/payments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(paymentData)
    })

    const result = await response.json()
    
    if (result.paymentUrl) {
      window.location.href = result.paymentUrl
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        {paymentStep === 'details' ? (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Purchase</DialogTitle>
              <DialogDescription>Please provide your details and choose your payment option.</DialogDescription>
            </DialogHeader>
            <form onSubmit={(e) => { e.preventDefault(); setPaymentStep('payment'); }} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
              </div>

              <div>
                <Label htmlFor="land-size">Land Size</Label>
                <div className="flex space-x-2">
                  <Input id="land-size" type="number" placeholder="Enter size" className="flex-grow" required value={formData.landSize} onChange={(e) => setFormData({...formData, landSize: e.target.value})} />
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

              {landSizeUnit === 'custom' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="length">Length</Label>
                    <Input id="length" type="number" placeholder="Length" required />
                  </div>
                  <div>
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" type="number" placeholder="Width" required />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="survey-plan">Survey Plan (Optional)</Label>
                <Input 
                  id="survey-plan" 
                  type="file" 
                  onChange={(e) => setSurveyPlan(e.target.files?.[0] || null)} 
                  accept=".pdf,.jpg,.png"
                />
                <p className="text-sm text-gray-500 mt-1">Upload your survey plan for better design customization</p>
              </div>

              <div>
                <Label htmlFor="custom-changes">Custom Changes</Label>
                <Textarea 
                  id="custom-changes" 
                  placeholder="Describe any modifications you'd like..."
                  className="min-h-[100px]"
                  value={formData.customChanges}
                  onChange={(e) => setFormData({...formData, customChanges: e.target.value})}
                />
              </div>

              <div>
                <Label>Payment Option</Label>
                <RadioGroup value={paymentOption} onValueChange={setPaymentOption}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="full" id="full-payment" />
                    <Label htmlFor="full-payment">100% Upfront Payment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="installment" id="installment-payment" />
                    <Label htmlFor="installment-payment">30% Initial Payment</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label>Payment Amount</Label>
                <Input 
                  type="text" 
                  value={formatPrice(selectedDesign?.price * (paymentOption === 'full' ? 1 : 0.3))} 
                  disabled 
                />
              </div>

              <div>
                <Label>Payment Method</Label>
                <RadioGroup defaultValue="online">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="online" id="online" />
                    <Label htmlFor="online">Online Payment</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label htmlFor="bank-transfer">Bank Transfer</Label>
                  </div>
                </RadioGroup>
              </div>

              <DialogFooter>
                <Button type="submit" className="bg-[var(--color-orange)] hover:bg-[var(--color-green)]">
                  Proceed to Payment
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div>
            <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Design Cost:</span>
                <span>{formatPrice(selectedDesign?.price)}</span>
              </div>
              <PaymentIntegration 
                amount={selectedDesign?.price * (paymentOption === 'full' ? 1 : 0.3)}
                email={formData.email}
                onSuccess={handlePaymentSuccess}
                onClose={() => setPaymentStep('details')}
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}