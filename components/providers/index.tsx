import { CartProvider } from './CartProvider'
import { ThemeProvider } from './ThemeProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ThemeProvider>
  )
}
