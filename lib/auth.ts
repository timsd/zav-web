  import { getServerSession } from 'next-auth'
  import { PrismaAdapter } from '@auth/prisma-adapter'
  import { prisma } from '@/lib/prisma'
  import GoogleProvider from "next-auth/providers/google"
  import CredentialsProvider from "next-auth/providers/credentials"
  import bcrypt from 'bcrypt'

  export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
      strategy: 'jwt'
    },
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: "Email", type: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (!credentials?.email || !credentials?.password) {
            return null
          }
        
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email
            }
          })
        
          if (!user) {
            return null
          }
        
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          )
        
          if (!isPasswordValid) {
            return null
          }
        
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role
          }
        }
      })
    ],
    callbacks: {
      async session({ session, token }) {
        if (token) {
          session.user.id = token.sub
          session.user.role = token.role
        }
        return session
      },
      async jwt({ token, user }) {
        if (user) {
          token.role = user.role
        }
        return token
      }
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: '/auth/signin',
    }
  }

  export const auth = () => getServerSession(authOptions)
