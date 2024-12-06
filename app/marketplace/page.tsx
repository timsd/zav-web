  'use client'

  import { useState } from 'react'
  import { useRouter } from 'next/navigation'
  import MarketplaceHeader from '@/components/marketplace/Header'
  import MarketplaceFooter from '@/components/marketplace/Footer'
  import { ViewControls } from '@/components/marketplace/ViewControls'
  import { Card } from '@/components/ui/card'
  import { Button } from '@/components/ui/button'
  import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
  import { designs } from '@/data/designs'
  import { DesignDetailDialog } from '@/components/marketplace/DesignDetailDialog'

  export default function MarketplacePage() {
    const router = useRouter()
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [searchQuery, setSearchQuery] = useState('')
    const [viewMode, setViewMode] = useState('grid')
    const [selectedDesign, setSelectedDesign] = useState(null)
    const [isDetailDialogOpen, setIsDetailDialogOpen] = useState(false)
    const [activePopup, setActivePopup] = useState(null)

    const formatPrice = (price: number) => {
      return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
      }).format(price)
    }

    const handlePurchase = (design: any) => {
      router.push(`/payment?designId=${design.id}&price=${design.price}`)
    }

    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <MarketplaceHeader
          isDarkMode={isDarkMode}
          toggleDarkMode={() => setIsDarkMode(!isDarkMode)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
     
        <main className={`container mx-auto px-4 py-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Design Marketplace</h1>
            <ViewControls
              viewMode={viewMode}
              setViewMode={setViewMode}
              isDarkMode={isDarkMode}
            />
          </div>

          <div className={`grid ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          } gap-6`}>
            {designs.map((design) => (
              <Card
                key={design.id}
                className={`
                  cursor-pointer rounded-lg overflow-hidden
                  ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}
                `}
              >
                <img
                  src={design.images[0]}
                  alt={design.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {design.name}
                  </h3>
                  <p className={`mt-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {design.description}
                  </p>
                  <div className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {formatPrice(design.price)}
                  </div>
                  <Button
                    onClick={() => {
                      setSelectedDesign(design)
                      setIsDetailDialogOpen(true)
                    }}
                    className="mt-4 w-full bg-[var(--color-orange)] hover:bg-[var(--color-green)] text-white"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </main>

        <DesignDetailDialog
          design={selectedDesign}
          isOpen={isDetailDialogOpen}
          onOpenChange={setIsDetailDialogOpen}
          onPurchase={handlePurchase}
          formatPrice={formatPrice}
          isDarkMode={isDarkMode}
        />

        <Dialog open={!!activePopup} onOpenChange={() => setActivePopup(null)}>
          <DialogContent className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
            <DialogHeader>
              <DialogTitle>{activePopup?.title || 'Information'}</DialogTitle>
            </DialogHeader>
            <div>{activePopup?.content}</div>
          </DialogContent>
        </Dialog>

        <MarketplaceFooter
          isDarkMode={isDarkMode}
          setActivePopup={setActivePopup}
        />
      </div>
    )
  }
