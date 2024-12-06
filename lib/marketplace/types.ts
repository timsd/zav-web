export interface Design {
  id: string
  name: string
  price: number
  images: string[]
  seller: string
  bedrooms: number
  bathrooms: number
  squareFootage: number
  features: string[]
  status: 'available' | 'sold'
}
