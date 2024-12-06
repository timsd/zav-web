export function CheckoutForm() {
  return (
    <form className="max-w-2xl mx-auto space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" required />
        <Input label="Last Name" required />
      </div>
      <Input label="Email" type="email" required />
      <Input label="Phone Number" required />
      <Input label="Address" required />
      <Button type="submit" className="w-full">Continue to Payment</Button>
    </form>
  )
}
