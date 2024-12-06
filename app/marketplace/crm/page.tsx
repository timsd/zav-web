'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CRM() {
  const [designs, setDesigns] = useState([
    { id: 1, name: 'Modern Villa', seller: 'ArchitectJohn', price: 5000000, status: 'active' },
    { id: 2, name: 'Eco House', seller: 'GreenDesigns', price: 3500000, status: 'pending' }
  ])
  
  const [sellers, setSellers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', sales: 12 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive', sales: 8 }
  ])
  
  const [buyers, setBuyers] = useState([
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', purchases: 2, lastPurchase: '2024-01-15' },
    { id: 2, name: 'Bob Wilson', email: 'bob@example.com', purchases: 1, lastPurchase: '2024-02-01' }
  ])

  const handleDesignEdit = (id, field, value) => {
    setDesigns(designs.map(design => 
      design.id === id ? { ...design, [field]: value } : design
    ))
  }

  const handleSellerEdit = (id, field, value) => {
    setSellers(sellers.map(seller => 
      seller.id === id ? { ...seller, [field]: value } : seller
    ))
  }

  const handleBuyerEdit = (id, field, value) => {
    setBuyers(buyers.map(buyer => 
      buyer.id === id ? { ...buyer, [field]: value } : buyer
    ))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Zavolah Marketplace CRM</h1>
      
      <Tabs defaultValue="designs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="designs">Designs</TabsTrigger>
          <TabsTrigger value="sellers">Sellers</TabsTrigger>
          <TabsTrigger value="buyers">Buyers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="designs">
          <DesignsManagement designs={designs} onEdit={handleDesignEdit} />
        </TabsContent>
        
        <TabsContent value="sellers">
          <SellersManagement sellers={sellers} onEdit={handleSellerEdit} />
        </TabsContent>
        
        <TabsContent value="buyers">
          <BuyersManagement buyers={buyers} onEdit={handleBuyerEdit} />
        </TabsContent>

        <TabsContent value="analytics">
          <AnalyticsDashboard designs={designs} sellers={sellers} buyers={buyers} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
