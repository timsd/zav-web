'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function BecomeSeller() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessName: '',
    sellerUsername: '',
    phoneNumber: '',
    bankName: '',
    accountNumber: '',
    bio: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Become a Seller on Zavolah Marketplace</CardTitle>
          <CardDescription>
            Join our community of innovative designers and showcase your architectural designs to a global audience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            {/* Add other form fields */}
            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
