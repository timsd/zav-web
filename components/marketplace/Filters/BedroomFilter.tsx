export function BedroomFilter({ selected, onChange }) {
  const options = [2, 3, 4, 5, '5+']
  
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option} className="flex items-center">
          <Checkbox
            id={`bedroom-${option}`}
            checked={selected.includes(option)}
            onCheckedChange={(checked) => {
              if (checked) {
                onChange([...selected, option])
              } else {
                onChange(selected.filter(item => item !== option))
              }
            }}
          />
          <label htmlFor={`bedroom-${option}`} className="ml-2">
            {option} {typeof option === 'number' && 'Bedrooms'}
          </label>
        </div>
      ))}
    </div>
  )
}
