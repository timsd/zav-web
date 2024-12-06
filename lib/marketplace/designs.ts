export const designs = [
  {
    id: 1,
    name: "Modern Minimalist Home",
    seller: "ArchitectJohn",
    price: 5000000,
    images: [
      "/designs/modern-minimal-1.jpg",
      "/designs/modern-minimal-2.jpg"
    ],
    rating: 4.5,
    reviews: 12,
    description: "A sleek, minimalist design perfect for urban living. Features open spaces and large windows for natural light.",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
      squareFootage: 2500
    }
  },
  {
    id: 2,
    name: "Eco-Friendly Treehouse",
    seller: "GreenDesigns",
    price: 3500000,
    images: [
      "/designs/eco-tree-1.jpg",
      "/designs/eco-tree-2.jpg"
    ],
    rating: 4.8,
    reviews: 23,
    description: "Sustainable living meets luxury in this unique treehouse design. Incorporates recycled materials and solar power.",
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      floors: 2,
      squareFootage: 1800
    }
  },
  {
    id: 3,
    name: "Urban Loft Conversion",
    seller: "CitySpaceInnovators",
    price: 6000000,
    images: [
      "/designs/urban-loft-1.jpg",
      "/designs/urban-loft-2.jpg"
    ],
    rating: 4.2,
    reviews: 8,
    description: "Transform any industrial space into a chic urban loft. High ceilings and exposed brick are key features.",
    specifications: {
      bedrooms: 2,
      bathrooms: 2,
      floors: 1,
      squareFootage: 1500
    }
  },
  {
    id: 4,
    name: "Coastal Beach House",
    seller: "SeaSideArchitects",
    price: 7500000,
    images: [
      "/designs/beach-house-1.jpg",
      "/designs/beach-house-2.jpg"
    ],
    rating: 4.7,
    reviews: 31,
    description: "Bring the beach to your doorstep with this airy, open-plan design. Large windows and a spacious deck for ocean views.",
    specifications: {
      bedrooms: 5,
      bathrooms: 4,
      floors: 2,
      squareFootage: 3200
    }
  },
  {
    id: 5,
    name: "Smart Home Integration",
    seller: "TechHouseDesigns",
    price: 8500000,
    images: [
      "/designs/smart-home-1.jpg",
      "/designs/smart-home-2.jpg"
    ],
    rating: 4.9,
    reviews: 42,
    description: "Cutting-edge smart home technology integrated into a modern design. Control everything from your smartphone.",
    specifications: {
      bedrooms: 4,
      bathrooms: 3,
      floors: 2,
      squareFootage: 2800
    }
  }
]

export type Design = typeof designs[0]

// Data fetching hook
export function useDesignData() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(designs)

  useEffect(() => {
    // Simulate API fetch
    setIsLoading(true)
    setTimeout(() => {
      setData(designs)
      setIsLoading(false)
    }, 1000)
  }, [])

  return { designs: data, isLoading }
}

export async function getDesigns() {
  const designs = await prisma.design.findMany({
    include: {
      seller: true,
      images: true
    }
  })
  return designs
}
