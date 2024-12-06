'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function useAuth() {
  const { data: session, status } = useSession()
  const router = useRouter()

  const login = async (email: string, password: string) => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.ok) {
      router.push('/dashboard')
    }

    return result
  }

  const logout = async () => {
    await signOut({ redirect: false })
    router.push('/auth/login')
  }

  return {
    session,
    status,
    login,
    logout,
    isAuthenticated: status === 'authenticated',
    isLoading: status === 'loading'
  }
}
