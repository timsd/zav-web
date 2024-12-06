export function CheckoutSteps({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, name: 'Cart Review' },
    { id: 2, name: 'Shipping' },
    { id: 3, name: 'Payment' },
    { id: 4, name: 'Confirmation' }
  ]

  return (
    <nav className="flex justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}`}>
            <span className="rounded-full h-8 w-8 flex items-center justify-center border-2">
              {step.id}
            </span>
            <span className="ml-2">{step.name}</span>
          </div>
          {index < steps.length - 1 && (
            <div className="w-16 h-1 mx-4 bg-border" />
          )}
        </div>
      ))}
    </nav>
  )
}
