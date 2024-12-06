import { heroSlides } from "@/data/hero-slides"

export function Hero() {
  return (
    <div className="relative">
      {heroSlides.map((slide) => (
        <div key={slide.id} className="relative">
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-8">{slide.description}</p>
                <Button asChild>
                  <Link href={slide.link}>{slide.cta}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
