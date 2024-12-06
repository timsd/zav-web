
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import {
  User, Settings, Package, Lock, LogOut, Trash2,
  ChevronRight, Bell, CreditCard, Heart, Home, Mail, Phone,
  MessageSquare
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { AccountDropdown } from "@/components/navigation/account-dropdown"

export function AccountDashboard() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState('profile')

  const [userProfile, setUserProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+234 123 456 7890',
    address: '123 Lagos Street',
    avatar: '/path-to-avatar.jpg'
  })

  const [orders] = useState([
    {
      id: 1,
      orderNumber: "ORD-2024-001",
      date: "2024-01-15",
      status: "Delivered",
      total: 299999,
      items: [
        {
          id: 1,
          name: "Solar Panel Kit",
          quantity: 1,
          price: 299999,
          image: "/products/solar-panel.jpg"
        }
      ]
    }
  ])

  const [pendingReviews] = useState([
    {
      id: 1,
      productName: 'Solar Panel Kit',
      productImage: '/products/solar-panel.jpg',
      purchaseDate: '2024-01-15',
      rating: 0
    }
  ])

  const [wishlistItems] = useState([
    {
      id: 1,
      name: 'Solar Panel Kit',
      price: 299999,
      image: '/products/solar-panel.jpg',
      inStock: true
    }
  ])

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true,
    productReviews: true
  })

  // Function implementations
  const handleReviewChange = (id: number, value: string) => {
    // Review text change logic
  }

  const handleRatingChange = (id: number, rating: number) => {
    // Rating update logic
  }

  const submitReview = (id: number) => {
    // Review submission logic
  }

  const updateNotificationPreference = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const addToCart = async (product: any) => {
    // Cart addition logic
  }

  const removeFromWishlist = async (productId: number) => {
    // Wishlist removal logic
  }

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.'
    )
    
    if (confirmed) {
      try {
        const response = await fetch('/api/account/delete', {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`
          }
        })

        if (response.ok) {
          localStorage.clear()
          router.push('/auth/buyer/register')
        }
      } catch (error) {
        console.error('Failed to delete account:', error)
      }
    }
  }
  // Menu items configuration
  const menuItems = [
    {
      id: 'profile',
      title: 'Profile',
      icon: User,
      description: 'Manage your personal information'
    },
    {
      id: 'orders',
      title: 'Orders',
      icon: Package,
      description: 'Track and manage your orders'
    },
    {
      id: 'wishlist',
      title: 'Wishlist',
      icon: Heart,
      description: 'View your saved items'
    },
    {
      id: 'payments',
      title: 'Payment Methods',
      icon: CreditCard,
      description: 'Manage your payment options'
    },
    {
      id: 'notifications',
      title: 'Notifications',
      icon: Bell,
      description: 'Control your notification preferences'
    },
    {
      id: 'pending-reviews',
      title: 'Pending Reviews',
      icon: MessageSquare,
      description: 'Review your recent purchases'
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      description: 'Update password and security options'
    }
  ]

  const renderContent = () => {
    switch(activeSection) {
      case 'profile':
        //delected
      // Add other case implementations here (orders, wishlist, etc.)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16 ring-2 ring-[var(--color-orange)]">
            <AvatarImage src={userProfile.avatar} />
            <AvatarFallback>{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userProfile.name.split(' ')[0]}!</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>
        </div>
        <AccountDropdown />
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900">Active Orders</h3>
          <p className="text-3xl font-bold text-[var(--color-orange)]">{orders.length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900">Wishlist Items</h3>
          <p className="text-3xl font-bold text-[var(--color-green)]">{wishlistItems.length}</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold text-gray-900">Pending Reviews</h3>
          <p className="text-3xl font-bold text-blue-500">{pendingReviews.length}</p>
        </Card>
      </div>

      <div className="flex gap-6">
        <div className="w-64 flex-shrink-0">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left p-3 rounded-lg flex items-center gap-3
                  ${activeSection === item.id
                    ? 'bg-[var(--color-orange)] text-white'
                    : 'hover:bg-gray-100'
                  }`}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.title}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ x: 4 }}
              onClick={handleDeleteAccount}
              className="w-full text-left p-3 rounded-lg flex items-center gap-3 text-red-500 hover:bg-red-50"
            >
              <Trash2 className="h-5 w-5" />
              <span className="font-medium">Delete Account</span>
            </motion.button>
          </nav>
        </div>

        <div className="flex-grow bg-white rounded-lg p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
// Inside renderContent function, add these cases:

case 'orders':
  //deleted

case 'wishlist':
  //deleted

  case 'payments':
    //deleted
case 'pending-reviews':
 //deleted

case 'notifications':
  //deleted

  case 'security':
    //deleted

    case 'delete-account':
      //deleted