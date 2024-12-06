export function DesignGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="space-y-4">
      <div className="aspect-square relative rounded-lg overflow-hidden">
        <Image 
          src={mainImage} 
          alt="Design preview" 
          fill 
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-square relative rounded-md overflow-hidden ${
              mainImage === image ? 'ring-2 ring-primary' : ''
            }`}
          >
            <Image 
              src={image} 
              alt={`Preview ${index + 1}`} 
              fill 
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
