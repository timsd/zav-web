'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export function DesignDetailDialog({ design, isOpen, onOpenChange, onPurchase, formatPrice, isDarkMode }) {
  if (!design) return null

  const specs = {
    plotSize: design.plotSize || 'N/A',
    floorArea: design.floorArea || 'N/A',
    floors: design.floors || 'N/A',
    bedrooms: design.bedrooms || 'N/A',
    bathrooms: design.bathrooms || 'N/A',
    garage: design.garage || 'N/A'
  }

  const features = design.features || []
  const packageItems = design.package || []
  const constructionDetails = design.constructionDetails || []
  const additionalInfo = design.additionalInfo || 'No additional information available'

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className={`max-w-4xl ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{design.name}</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="overview">
          <TabsList className="grid grid-cols-4 gap-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="details">Additional Details</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <img
                  src={design.images[0]}
                  alt={design.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="grid grid-cols-3 gap-2">
                  {design.images.slice(1, 4).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${design.name} view ${index + 1}`}
                      className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-90"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Description</h3>
                  <p className="text-lg">{design.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Price</h3>
                  <p className="text-3xl font-bold text-[var(--color-orange)]">
                    {formatPrice(design.price)}
                  </p>
                </div>
                <div className="space-y-2">
                  <Button
                    onClick={() => onPurchase(design)}
                    className="w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white py-3 text-lg"
                  >
                    Purchase Design
                  </Button>
                  <p className="text-sm text-center">Secure payment & instant delivery</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="specifications" className="mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Building Specifications</h3>
                  <ul className="space-y-3">
                    <li>Plot Size: {specs.plotSize}</li>
                    <li>Total Floor Area: {specs.floorArea}</li>
                    <li>Number of Floors: {specs.floors}</li>
                    <li>Bedrooms: {specs.bedrooms}</li>
                    <li>Bathrooms: {specs.bathrooms}</li>
                    <li>Garage: {specs.garage}</li>
                    <li>Other features: {specs.features}</li>
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="mt-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {design.images.map((image, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={image}
                    alt={`${design.name} view ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="details" className="mt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Construction Details</h3>
                <ul className="space-y-3">
                  {constructionDetails.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[var(--color-orange)] mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <p>{additionalInfo}</p>
                  <div className="bg-gray-100 p-4 rounded-lg dark:bg-gray-700">
                    <h4 className="font-semibold mb-2">Note:</h4>
                    <p className="text-sm">Design can be customized according to your specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
