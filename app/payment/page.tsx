'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Upload } from 'lucide-react'

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const designId = searchParams.get('designId')
  const price = Number(searchParams.get('price'))

  // Payment States
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [paymentOption, setPaymentOption] = useState('full')
  
  // Design Customization States
  const [measurementUnit, setMeasurementUnit] = useState('meters')
  const [dimensions, setDimensions] = useState({ length: '', width: '', area: '' })
  const [features, setFeatures] = useState('')
  const [surveyPlan, setSurveyPlan] = useState(null)
  
  // Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const calculateAmount = () => {
    return paymentOption === 'full' ? price : price * 0.3
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(amount)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Combine all data for submission
    const submissionData = {
      designId,
      payment: {
        amount: calculateAmount(),
        method: paymentMethod,
        option: paymentOption
      },
      customization: {
        dimensions,
        measurementUnit,
        features,
        surveyPlan
      },
      customer: formData
    }
    // Handle payment and data submission logic here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Design Customization */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Design Customization</h2>
                
                {/* Land Measurements */}
                <div className="space-y-4">
                  <h3 className="font-medium">Land Dimensions</h3>
                  <RadioGroup 
                    defaultValue="meters" 
                    onValueChange={setMeasurementUnit}
                    className="flex space-x-4"
                  >
                    {['meters', 'feet', 'sqm'].map(unit => (
                      <div key={unit} className="flex items-center space-x-2">
                        <RadioGroupItem value={unit} id={unit} />
                        <Label htmlFor={unit}>{unit === 'sqm' ? 'Square Meters' : unit.charAt(0).toUpperCase() + unit.slice(1)}</Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {measurementUnit !== 'sqm' ? (
                    <div className="grid grid-cols-2 gap-4">
                      {['length', 'width'].map(dim => (
                        <div key={dim} className="space-y-2">
                          <Label>{dim.charAt(0).toUpperCase() + dim.slice(1)}</Label>
                          <Input 
                            type="number"
                            placeholder={`${dim} in ${measurementUnit}`}
                            value={dimensions[dim]}
                            onChange={(e) => setDimensions({...dimensions, [dim]: e.target.value})}
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label>Total Area</Label>
                      <Input 
                        type="number"
                        placeholder="Area in square meters"
                        value={dimensions.area}
                        onChange={(e) => setDimensions({...dimensions, area: e.target.value})}
                      />
                    </div>
                  )}
                </div>

                {/* Design Features */}
                <div className="space-y-2 mt-6">
                  <Label>Desired Features</Label>
                  <Textarea 
                    placeholder="List your desired features (e.g., number of bedrooms, specific rooms, style preferences)"
                    className="h-32"
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                  />
                </div>

                {/* Survey Plan Upload */}
                <div className="space-y-2 mt-6">
                  <Label>Land Survey Plan</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="surveyPlan"
                      className="hidden"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => setSurveyPlan(e.target.files[0])}
                    />
                    <label htmlFor="surveyPlan" className="cursor-pointer flex flex-col items-center space-y-2">
                      <Upload className="h-8 w-8 text-gray-400" />
                      <span className="text-sm text-gray-500">Upload your survey plan (PDF, JPG, PNG)</span>
                      {surveyPlan && (
                        <span className="text-sm text-green-600">Selected: {surveyPlan.name}</span>
                      )}
                    </label>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Payment Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-6">Payment Information</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Payment Options */}
                  <div className="space-y-4">
                    <div>
                      <Label>Payment Option</Label>
                      <RadioGroup
                        value={paymentOption}
                        onValueChange={setPaymentOption}
                        className="mt-2 space-y-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="full" id="full" />
                          <Label htmlFor="full">Full Payment ({formatPrice(price)})</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="partial" id="partial" />
                          <Label htmlFor="partial">30% Initial Payment ({formatPrice(price * 0.3)})</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label>Payment Method</Label>
                      <RadioGroup
                        value={paymentMethod}
                        onValueChange={setPaymentMethod}
                        className="mt-2 space-y-2"
                      >
                        {['card', 'transfer'].map(method => (
                          <div key={method} className="flex items-center space-x-2">
                            <RadioGroupItem value={method} id={method} />
                            <Label htmlFor={method}>{method === 'card' ? 'Card Payment' : 'Bank Transfer'}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Customer Information */}
                  <div className="space-y-4">
                    {['name', 'email', 'phone'].map(field => (
                      <div key={field}>
                        <Label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</Label>
                        <Input
                          id={field}
                          type={field === 'email' ? 'email' : 'text'}
                          placeholder={`Enter your ${field}`}
                          value={formData[field]}
                          onChange={(e) => setFormData({...formData, [field]: e.target.value})}
                        />
                      </div>
                    ))}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white"
                  >
                    Pay {formatPrice(calculateAmount())}
                  </Button>
                </form>
              </Card>

              {/* Order Summary */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Design Price</span>
                    <span>{formatPrice(price)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Payment Option</span>
                    <span>{paymentOption === 'full' ? 'Full Payment' : '30% Initial Payment'}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span>{formatPrice(calculateAmount())}</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Security Information */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Security</h2>
                <ul className="space-y-2 text-sm">
                  <li>✓ Secure SSL Encryption</li>
                  <li>✓ Protected Payment Information</li>
                  <li>✓ Money-back Guarantee</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
