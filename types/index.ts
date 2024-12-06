export interface Design {
  id: number
  name: string
  seller: string
  price: number
  images: string[]
  rating: number
  reviews: number
  description: string
  specifications: {
    bedrooms: number
    bathrooms: number
    floors: number
    squareFootage: number
  }
}

export interface CartItem extends Design {
  quantity: number
}
