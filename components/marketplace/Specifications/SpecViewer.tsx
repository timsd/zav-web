export function SpecViewer({ designId }) {
  const { data: specs } = useDesignSpecs(designId)

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <SpecCard title="Dimensions">
          <p>Width: {specs?.dimensions.width}m</p>
          <p>Length: {specs?.dimensions.length}m</p>
          <p>Height: {specs?.dimensions.height}m</p>
        </SpecCard>
        
        <SpecCard title="Materials">
          {specs?.materials.map(material => (
            <div key={material.id} className="flex justify-between">
              <span>{material.name}</span>
              <span>{material.quantity} {material.unit}</span>
            </div>
          ))}
        </SpecCard>
      </div>

      <SpecCard title="Construction Notes">
        <div className="prose prose-sm">
          {specs?.constructionNotes}
        </div>
      </SpecCard>
    </div>
  )
}
