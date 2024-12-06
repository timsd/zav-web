import { AdminSidebar } from "@/components/admin/sidebar"

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        <AdminSidebar />
        <main className="flex-1 p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
