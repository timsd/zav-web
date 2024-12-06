import rateLimit from 'express-rate-limit'
import { NextResponse } from 'next/server'

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many booking requests, please try again later',
  standardHeaders: true,
  legacyHeaders: false,
})

export function withRateLimit(handler: Function) {
  return async (req: Request) => {
    try {
      await new Promise((resolve, reject) => {
        limiter(req as any, {} as any, (result: any) => {
          if (result instanceof Error) {
            reject(result)
          } else {
            resolve(result)
          }
        })
      })
      return handler(req)
    } catch (error) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      )
    }
  }
}
