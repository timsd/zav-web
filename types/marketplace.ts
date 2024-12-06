export interface Design {
  id: number
  name: string
  seller: string
  price: number
  images: string[]
  rating: number
  reviews: number
  description: string
}

export interface Project {
  id: number
  name: string
  seller: string
  status?: string
  completion?: number
  completionDate?: string
}
