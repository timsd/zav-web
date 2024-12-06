export function NotificationButtons() {
  return (
    <>
      <Button variant="ghost" className="relative">
        <MessageSquare className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          3
        </span>
      </Button>
      <Button variant="ghost" className="relative">
        <Bell className="h-5 w-5" />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
          5
        </span>
      </Button>
    </>
  )
}
