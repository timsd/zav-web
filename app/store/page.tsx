
"use client"

import { useState } from 'react'
import { StoreNav } from '@/components/store/store-nav'
import { ProductGrid } from '@/components/store/product-grid'
import { ProductTabs } from '@/components/store/product-tabs'
import { FAQSection } from '@/components/store/faq-section'
import { Chat } from '@/components/ui/chat'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { StarRating } from "@/components/ui/star-rating"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { products, faqItems, navigationItems } from '@/config/constants'
import { Sun, Moon } from "lucide-react"
import { StoreFooter } from '@/components/store/footer'

type Product = {
  id: number
  name: string
  category: string
  price: number
  rating: number
  inStock: boolean
  description: string
  features?: string[]
  specifications?: string[]
  image: string
  reviews: number
}

type FilterState = {
  price: { min: number; max: number }
  rating: number
  inStock: boolean
}

export default function Store() {
  const [cartItems, setCartItems] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showChat, setShowChat] = useState<boolean>(false)
  const [wishlist, setWishlist] = useState<number[]>([])
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([])
  const [filters, setFilters] = useState<FilterState>({
    price: { min: 0, max: 200000000 },
    rating: 0,
    inStock: false
  })
  const [sortBy, setSortBy] = useState<string>('featured')
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id)
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item as any).quantity + 1 }
            : item
        )
      }
      return [...prev, { ...product, quantity: 1, dateAdded: new Date() }]
    })
  }

  const toggleWishlist = (product: Product) => {
    setWishlist(prev =>
      prev.includes(product.id)
        ? prev.filter(id => id !== product.id)
        : [...prev, product.id]
    )
  }

  const trackProductView = (product: Product) => {
    setRecentlyViewed(prev =>
      [product, ...prev.filter(p => p.id !== product.id)].slice(0, 4)
    )
  }

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesPrice = product.price >= filters.price.min && product.price <= filters.price.max
      const matchesRating = product.rating >= filters.rating
      const matchesStock = !filters.inStock || product.inStock
      return matchesSearch && matchesPrice && matchesRating && matchesStock
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price
        case 'price-desc': return b.price - a.price
        case 'rating': return b.rating - a.rating
        default: return 0
      }
    })

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <StoreNav
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        cartItems={cartItems}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-1 container mx-auto px-4 py-6">
        <div className={`flex flex-col md:flex-row gap-4 mb-6 p-4 rounded-lg
          ${isDarkMode ? 'bg-gray-800/90 backdrop-blur-sm' : 'bg-gray-100/90 backdrop-blur-sm'}
          border border-gray-200 sticky top-0 z-10`}>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="rating">Best Rating</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-wrap items-center gap-2">
            <Input
              type="number"
              value={filters.price.min}
              onChange={e => setFilters(prev => ({
                ...prev,
                price: { ...prev.price, min: Number(e.target.value) }
              }))}
              className="w-full md:w-24"
              placeholder="Min Price"
            />
            <span className={isDarkMode ? 'text-white' : 'text-gray-700'}>to</span>
            <Input
              type="number"
              value={filters.price.max}
              onChange={e => setFilters(prev => ({
                ...prev,
                price: { ...prev.price, max: Number(e.target.value) }
              }))}
              className="w-full md:w-24"
              placeholder="Max Price"
            />
          </div>

          <div className="flex items-center">
            <Checkbox
              checked={filters.inStock}
              onCheckedChange={checked => setFilters(prev => ({ ...prev, inStock: checked }))}
              id="inStock"
            />
            <label htmlFor="inStock" className="ml-2">In Stock Only</label>
          </div>
        </div>

        <ProductTabs
          filteredProducts={filteredProducts}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
          onProductView={trackProductView}
          setQuickViewProduct={setQuickViewProduct}
        />

        {recentlyViewed.length > 0 && (
          <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recently Viewed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {recentlyViewed.map(product => (
                <ProductGrid
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  toggleWishlist={toggleWishlist}
                  wishlist={wishlist}
                />
              ))}
            </div>
          </section>
        )}

        <FAQSection items={faqItems} />
      </main>

      {quickViewProduct && (
        <Dialog open={!!quickViewProduct} onOpenChange={() => setQuickViewProduct(null)}>
          <DialogContent className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full rounded-lg" />
                <div className="mt-4 flex flex-wrap gap-2">
                  {quickViewProduct.features?.map(feature => (
                    <Badge key={feature}>{feature}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold">{quickViewProduct.name}</h2>
                <div className="flex items-center mt-2">
                  <StarRating rating={quickViewProduct.rating} />
                  <span className="ml-2">({quickViewProduct.reviews} reviews)</span>
                </div>
                <p className="text-2xl font-bold mt-4">₦{quickViewProduct.price.toLocaleString()}</p>
                <p className="mt-4">{quickViewProduct.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold">Specifications:</h3>
                  <ul className="list-disc pl-4">
                    {quickViewProduct.specifications?.map(spec => (
                      <li key={spec}>{spec}</li>
                    ))}
                  </ul>
                </div>
                <Button
                  onClick={() => addToCart(quickViewProduct)}
                  className="w-full mt-6 bg-[var(--color-orange)] hover:bg-[var(--color-green)]"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <StoreFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  )
}
