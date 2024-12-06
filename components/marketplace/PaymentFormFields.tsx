import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PaymentFormFieldsProps {
  cardNumber: string
  expiryDate: string
  cvv: string
  onCardNumberChange: (value: string) => void
  onExpiryDateChange: (value: string) => void
  onCvvChange: (value: string) => void
}

export function PaymentFormFields({
  cardNumber,
  expiryDate,
  cvv,
  onCardNumberChange,
  onExpiryDateChange,
  onCvvChange
}: PaymentFormFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="card-number">Card Number</Label>
        <Input
          id="card-number"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => onCardNumberChange(e.target.value)}
          maxLength={19}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="expiry">Expiry Date</Label>
          <Input
            id="expiry"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={(e) => onExpiryDateChange(e.target.value)}
            maxLength={5}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            type="password"
            placeholder="123"
            value={cvv}
            onChange={(e) => onCvvChange(e.target.value)}
            maxLength={4}
          />
        </div>
      </div>
    </div>
  )
}
