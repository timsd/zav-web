
// Add these imports
import Link from 'next/link'

// Update the auth-related navigation items
const authLinks = isAuthenticated ? (
  <AccountDropdown />
) : (
  <div className="flex items-center gap-4">
    <Link href="/auth/login">
      <Button variant="ghost">Sign In</Button>
    </Link>
    <Link href="/auth/buyer/register">
      <Button className="bg-[var(--color-green)]">Create Account</Button>
    </Link>
  </div>
)
