export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  
  const addToCart = (design: Design) => {
    setCart(prev => [...prev, { ...design, quantity: 1 }])
  }

  return { cart, addToCart }
}
