import { Home, Package, ShoppingCart, Heart, Settings, Users } from 'lucide-react'
import Link from 'next/link'

export function AdminSidebar() {
  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/admin' },
    { icon: Package, label: 'Products', href: '/admin/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
    { icon: Users, label: 'Customers', href: '/admin/customers' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
  ]

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[var(--color-orange)]">Store Admin</h1>
      </div>
      <nav className="px-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-200 hover:bg-[var(--color-orange)]/10 rounded-lg transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}
