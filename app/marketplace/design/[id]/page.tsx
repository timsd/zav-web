export default function DesignDetailPage({ params }) {
  const design = await getDesignById(params.id)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        <DesignGallery images={design.images} />
        <DesignInfo design={design} />
      </div>
    </div>
  )
}
