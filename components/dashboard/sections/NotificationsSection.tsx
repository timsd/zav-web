  'use client'

  import { useDashboard } from '@/hooks/useDashboard'
  import { Card } from '@/components/ui/card'
  import { Switch } from '@/components/ui/switch'
  import { toast } from 'sonner'
  import { Bell, Mail, Tag, Star } from 'lucide-react'

  export function NotificationsSection() {
    const { notifications, updateNotifications } = useDashboard()

    const notificationTypes = [
      {
        key: 'orderUpdates',
        title: 'Order Updates',
        description: 'Get notified about your order status and delivery updates',
        icon: Bell
      },
      {
        key: 'promotions',
        title: 'Promotions & Deals',
        description: 'Receive updates about special offers and discounts',
        icon: Tag
      },
      {
        key: 'newsletter',
        title: 'Newsletter',
        description: 'Stay updated with our latest products and company news',
        icon: Mail
      },
      {
        key: 'productReviews',
        title: 'Product Reviews',
        description: 'Get reminded to review products you've purchased',
        icon: Star
      }
    ]

    const handleToggle = async (key: string, value: boolean) => {
      try {
        await updateNotifications({ [key]: value })
        toast.success('Notification preferences updated')
      } catch (error) {
        toast.error('Failed to update preferences')
      }
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Notification Preferences</h2>
      
        <Card className="p-6">
          <div className="space-y-6">
            {notificationTypes.map(({ key, title, description, icon: Icon }) => (
              <div key={key} className="flex items-center justify-between">
                <div className="flex gap-4">
                  <Icon className="w-5 h-5 text-gray-500" />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                  </div>
                </div>
                <Switch
                  checked={notifications[key]}
                  onCheckedChange={(checked) => handleToggle(key, checked)}
                />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Communication Channels</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-500">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push Notifications</p>
                <p className="text-sm text-gray-500">Get instant updates on your device</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>
      </div>
    )
  }
