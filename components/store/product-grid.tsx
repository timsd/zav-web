
import { ProductCard } from "./product-card"

export function ProductGrid({ products, addToCart, toggleWishlist, wishlist, onQuickView }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          isWishlisted={wishlist.includes(product.id)}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  )
}
