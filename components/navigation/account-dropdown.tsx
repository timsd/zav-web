"use client"

import { useRouter } from 'next/navigation'
import { LogOut, User } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AccountDropdown() {
  const router = useRouter()

  const handleSignOut = () => {
    localStorage.removeItem('userToken')
    localStorage.removeItem('isAuthenticated')
    router.push('/auth/choice') // This will be your new auth choice page
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="cursor-pointer">
          <LogOut className="h-4 w-4" />
        </div>
      </DropdownMenuTrigger>
  
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}  
