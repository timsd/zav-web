import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function Grid({ designs }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {designs?.map((design) => (
        <Card key={design.id} className="group hover:shadow-lg transition-shadow">
          <div className="aspect-[4/3] relative overflow-hidden rounded-t-lg">
            <Image
              src={design.images[0]}
              alt={design.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{design.name}</h3>
            <p className="text-muted-foreground">₦{design.price.toLocaleString()}</p>
            <div className="flex gap-2 mt-2">
              <Badge>{design.bedrooms} Beds</Badge>
              <Badge>{design.bathrooms} Baths</Badge>
            </div>
            <Button className="w-full mt-4">View Details</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}