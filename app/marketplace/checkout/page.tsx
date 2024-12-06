export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <CheckoutSteps currentStep={1} />
      <CheckoutForm />
      <PaymentSummary />
    </div>
  )
}
