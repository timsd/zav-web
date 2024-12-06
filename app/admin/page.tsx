
'use client'

import { useSession } from "next-auth/react"
import { AdminDashboard } from "@/components/admin/dashboard"
import { AdminHeader } from "@/components/admin/header"
import { ProductTable } from "@/components/admin/product-table"
import { SignInForm } from "@/components/auth/sign-in-form"

export default function AdminPage() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
        <SignInForm />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AdminHeader title="Dashboard Overview" />
      
      <main className="container mx-auto p-6">
        <AdminDashboard />
        
        <div className="mt-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <ProductTable />
          </div>
        </div>
      </main>
    </div>
  )
}
