
import { NextResponse } from 'next/server'
import { withAuth } from "next-auth/middleware"

// Single middleware function that handles both regular and admin routes
export default withAuth(
  function middleware(req) {
    const isAdminRoute = req.nextUrl.pathname.startsWith('/admin')
    const isDashboardRoute = req.nextUrl.pathname.startsWith('/dashboard')

    if (isAdminRoute && req.nextauth?.token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    if (isDashboardRoute && !req.nextauth?.token) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    }
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*'
  ]
}
