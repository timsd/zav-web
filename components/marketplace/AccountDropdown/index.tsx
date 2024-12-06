export function AccountDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-1">
          <User className="h-5 w-5" />
          <span>Account</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Buyer Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Seller Dashboard</DropdownMenuItem>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
