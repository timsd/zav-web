"use client"

import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] disabled:opacity-50"
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = "Input"

export { Input }