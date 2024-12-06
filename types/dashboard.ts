export interface UserProfile {
  id: string
  name: string
  email: string
  phone: string
  address: string
  avatar: string
}

export interface Order {
  id: string
  orderNumber: string
  date: string
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled'
  total: number
  items: OrderItem[]
}

export interface OrderItem {
  id: string
  productId: string
  name: string
  quantity: number
  price: number
  image: string
}

export interface PaymentMethod {
  id: string
  brand: 'Visa' | 'Mastercard'
  last4: string
  expiryMonth: number
  expiryYear: number
  isDefault: boolean
}

export interface NotificationPreferences {
  orderUpdates: boolean
  promotions: boolean
  newsletter: boolean
  productReviews: boolean
}

export interface Session {
  id: string
  device: string
  location: string
  lastActive: string
  current: boolean
}
