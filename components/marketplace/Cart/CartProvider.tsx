'use client'

import { createContext, useContext, useState } from 'react'
import type { Design } from '@/types'

interface CartContextType {
  cartItems: Design[]
  addToCart: (design: Design) => void
  removeFromCart: (designId: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<Design[]>([])

  const addToCart = (design: Design) => {
    setCartItems(prev => [...prev, design])
  }

  const removeFromCart = (designId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== designId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}
