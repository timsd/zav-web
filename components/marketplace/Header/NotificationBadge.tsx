interface NotificationBadgeProps {
  icon: React.ReactNode
  count: number
  onClick: () => void
}

export function NotificationBadge({ icon, count, onClick }: NotificationBadgeProps) {
  return (
    <Button 
      variant="ghost" 
      className="relative" 
      onClick={onClick}
    >
      {icon}
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          {count}
        </span>
      )}
    </Button>
  )
}
