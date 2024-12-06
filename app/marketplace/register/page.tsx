'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  username: z.string().min(3).max(20),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export default function RegisterForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setServerError('')

    try {
      // Add your registration API call here
      toast({
        title: "Registration successful",
        description: "Please check your email to verify your account.",
      })
      router.push('/marketplace/login')
    } catch (error) {
      setServerError(error.message)
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: error.message,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            placeholder="Username"
            {...form.register('username')}
          />
          {form.formState.errors.username && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
          )}
        </div>

        <div>
          <Input
            type="email"
            placeholder="Email"
            {...form.register('email')}
          />
          {form.formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Password"
            {...form.register('password')}
          />
          {form.formState.errors.password && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
          )}
        </div>

        <div>
          <Input
            type="password"
            placeholder="Confirm Password"
            {...form.register('confirmPassword')}
          />
          {form.formState.errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{form.formState.errors.confirmPassword.message}</p>
          )}
        </div>

        {serverError && (
          <p className="text-red-500 text-sm">{serverError}</p>
        )}

        <Button 
          type="submit" 
          className="w-full" 
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Registering...' : 'Register'}
        </Button>
      </form>
    </div>
  )
}
