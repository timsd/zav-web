export function Steps({ currentStep }: { currentStep: number }) {
  const steps = [
    { id: 1, name: 'Details' },
    { id: 2, name: 'Payment' },
    { id: 3, name: 'Confirmation' }
  ]

  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <>
          <div className={`flex items-center ${currentStep >= step.id ? 'text-[var(--color-orange)]' : 'text-gray-400'}`}>
            <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 
              ${currentStep >= step.id ? 'border-[var(--color-orange)]' : 'border-gray-400'}`}>
              {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
            </div>
            <span className="ml-2">{step.name}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`h-1 w-16 mx-4 ${currentStep > step.id ? 'bg-[var(--color-orange)]' : 'bg-gray-300'}`} />
          )}
        </>
      ))}
    </div>
  )
}
