import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Design } from "@/types/marketplace"
import { PaymentFormFields } from "./PaymentFormFields"

interface PaymentFormFieldsProps {
  landSizeUnit: string
  setLandSizeUnit: (unit: string) => void
  paymentOption: string
  setPaymentOption: (option: string) => void
  setSurveyPlan: (file: File | null) => void
  selectedDesign: Design | null
  formatPrice: (price: number) => string
}

export function PaymentFormFields({
  landSizeUnit,
  setLandSizeUnit,
  paymentOption,
  setPaymentOption,
  setSurveyPlan,
  selectedDesign,
  formatPrice
}: PaymentFormFieldsProps) {
  return (
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
  )
}
