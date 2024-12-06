import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CartIcon, BellIcon } from "@/components/icons"

export function MarketplaceUserNav() {
  return (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="icon">
        <CartIcon className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <BellIcon className="h-5 w-5" />
      </Button>
      <Avatar />
    </div>
  )
}
