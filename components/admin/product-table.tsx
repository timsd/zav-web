
import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

export function ProductTable() {
  const [products, setProducts] = useState([])
  const { toast } = useToast()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    const response = await fetch("/api/products")
    const data = await response.json()
    setProducts(data)
  }

  const deleteProduct = async (id) => {
    try {
      await fetch(`/api/products/${id}`, { method: "DELETE" })
      toast({ title: "Product deleted successfully" })
      fetchProducts()
    } catch (error) {
      toast({ title: "Error deleting product", variant: "destructive" })
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-12 h-12 rounded object-cover" 
                />
              </TableCell>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>₦{product.price.toLocaleString()}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full ${
                  product.inStock 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </TableCell>
              <TableCell className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="destructive" 
                  size="icon"
                  onClick={() => deleteProduct(product.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
