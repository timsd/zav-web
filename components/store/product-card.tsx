
import { Heart, ShoppingCart, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function ProductCard({ product, addToCart, toggleWishlist, isWishlisted, onQuickView }) {
  return (
    <motion.div 
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="relative aspect-square">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-[var(--color-orange)] opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => onQuickView(product)}
        >
          <Eye className="h-5 w-5" />
        </Button>

        <Badge className="absolute top-4 left-4 bg-[var(--color-orange)] text-white">
          {product.category}
        </Badge>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-[var(--color-orange)]">
            ₦{product.price.toLocaleString()}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="ml-1 text-sm">{product.rating}</span>
          </div>
        </div>

        <div className="relative group/tooltip mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {product.description}
          </p>
          <div className="absolute bottom-[calc(100%+1rem)] left-0 w-full p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 z-10">
            {product.description}
          </div>
        </div>

        <div className="flex gap-2 mt-auto sticky bottom-0 bg-white dark:bg-gray-800 py-2">
          <Button 
            className="flex-1 bg-[var(--color-orange)] hover:bg-[var(--color-green)] transform hover:scale-105 transition-all"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          
          <Button
            variant="outline"
            className="aspect-square p-2 hover:bg-pink-50 dark:hover:bg-pink-950"
            onClick={() => toggleWishlist(product)}
          >
            <Heart 
              className={`h-5 w-5 transition-colors ${
                isWishlisted ? 'fill-red-500 text-red-500' : 'hover:text-red-500'
              }`} 
            />
          </Button>
        </div>
      </div>

      {!product.inStock && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <span className="text-white font-semibold text-lg">Out of Stock</span>
        </div>
      )}
    </motion.div>
  )
}
