export const designs = [
  { 
    id: 1, 
    name: "Modern Minimalist Home", 
    seller: "ArchitectJohn", 
    price: 5000000,
    images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
    rating: 4.5,
    reviews: 12,
    description: "A sleek, minimalist design perfect for urban living. Features open spaces and large windows for natural light."
  },
  { 
    id: 2, 
    name: "Eco-Friendly Treehouse", 
    seller: "GreenDesigns", 
    price: 3500000,
    images: ["/placeholder.svg?height=200&width=200", "/placeholder.svg?height=200&width=200"],
    rating: 4.8,
    reviews: 23,
    description: "Sustainable living meets luxury in this unique treehouse design."
  },
  // Add more designs as needed
  {
    id: 3,
    name: "Contemporary African Villa",
    seller: "AfriModern",
    price: 9500000,
    images: ["/african-villa-1.jpg", "/african-villa-2.jpg"],
    rating: 4.8,
    reviews: 27,
    description: "Blend of modern architecture with traditional African elements. Features courtyard and natural ventilation.",
    specifications: {
      bedrooms: 4,
      bathrooms: 5,
      garages: 2,
      squareFootage: 3500
    }
  },
  {
    id: 4,
    name: "Luxury Penthouse Suite",
    seller: "UrbanElite",
    price: 12000000,
    images: ["/penthouse-1.jpg", "/penthouse-2.jpg"],
    rating: 5.0,
    reviews: 15,
    description: "Ultra-luxury penthouse design with private elevator and rooftop garden.",
    specifications: {
      bedrooms: 3,
      bathrooms: 4,
      garages: 2,
      squareFootage: 4000
    }
  }
  // Add more designs...
]
export type Design = {
  id: number
  name: string
  seller: string
  price: number
  images: string[]
  rating: number
  reviews: number
  description: string
}
