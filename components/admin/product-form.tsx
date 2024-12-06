import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

export function ProductForm({ product, onSubmit }) {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const formData = new FormData(e.target)
      const data = Object.fromEntries(formData)
      await onSubmit(data)
      toast({ title: "Product saved successfully" })
    } catch (error) {
      toast({ title: "Error saving product", variant: "destructive" })
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="name" defaultValue={product?.name} placeholder="Product Name" required />
      <Textarea name="description" defaultValue={product?.description} placeholder="Description" />
      <Input name="price" type="number" defaultValue={product?.price} placeholder="Price" required />
      <Input name="category" defaultValue={product?.category} placeholder="Category" required />
      <Input name="image" defaultValue={product?.image} placeholder="Image URL" required />
      <Button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Product"}
      </Button>
    </form>
  )
}
