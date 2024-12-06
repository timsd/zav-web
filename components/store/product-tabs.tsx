
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductGrid } from "./product-grid"
import { productSlides } from "@/data/product-slides"

export function ProductTabs({ addToCart, toggleWishlist, wishlist }) {
  return (
    <Tabs defaultValue="all" className="mb-8">
      <TabsList className="flex space-x-2">
        <TabsTrigger value="all" className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-orange)] hover:text-white">
          All Products
        </TabsTrigger>
        <TabsTrigger value="renewable" className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-green)] hover:text-white">
          Renewable Energy
        </TabsTrigger>
        <TabsTrigger value="furniture" className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-orange)] hover:text-white">
          Smart Furniture
        </TabsTrigger>
        <TabsTrigger value="construction" className="px-4 py-2 rounded-md transition-colors duration-200 hover:bg-[var(--color-green)] hover:text-white">
          Construction
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="all">
        <ProductGrid
          products={productSlides}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      </TabsContent>
      
      <TabsContent value="renewable">
        <ProductGrid
          products={productSlides.filter(p => p.category === "Renewable Energy")}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      </TabsContent>
      
      <TabsContent value="furniture">
        <ProductGrid
          products={productSlides.filter(p => p.category === "Smart Furniture")}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      </TabsContent>
      
      <TabsContent value="construction">
        <ProductGrid
          products={productSlides.filter(p => p.category === "Construction")}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      </TabsContent>
    </Tabs>
  )
}
