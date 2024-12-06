import { useState } from 'react'
import { Bell, MessageSquare, User, ShoppingCart } from 'lucide-react'

export function UserControls({ isDarkMode }) {
  const [notifications, setNotifications] = useState({
    messages: 3,
    alerts: 5,
    cart: 2
  })

  return (
    <div className="flex items-center space-x-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center space-x-1">
            <User className="h-5 w-5" />
            <span>Account</span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => router.push('/dashboard/buyer')}>
            Buyer Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push('/dashboard/seller')}>
            Seller Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => router.push('/profile')}>
            Profile Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={() => signOut()}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <NotificationBadge
        icon={<MessageSquare className="h-5 w-5" />}
        count={notifications.messages}
        onClick={() => router.push('/messages')}
      />

      <NotificationBadge
        icon={<Bell className="h-5 w-5" />}
        count={notifications.alerts}
        onClick={() => router.push('/notifications')}
      />

      <NotificationBadge
        icon={<ShoppingCart className="h-5 w-5" />}
        count={notifications.cart}
        onClick={() => router.push('/cart')}
      />
    </div>
  )
}
