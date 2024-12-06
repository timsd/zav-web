function PaymentOptions({ paymentOption, setPaymentOption, design, formatPrice }) {
  return (
    <>
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
        <Label htmlFor="payment">Payment Amount</Label>
        <Input
          id="payment"
          type="text"
          value={formatPrice(design?.price * (paymentOption === 'full' ? 1 : 0.3))}
          disabled
        />
      </div>
    </>
  )
}
