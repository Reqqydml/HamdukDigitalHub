import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Validation schema
const subscriptionSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
})

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxAttempts = 5

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return { allowed: true }
  }

  if (record.count >= maxAttempts) {
    return { allowed: false, resetTime: record.resetTime }
  }

  record.count++
  return { allowed: true }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"
    
    // Check rate limit
    const rateLimit = checkRateLimit(ip)
    if (!rateLimit.allowed) {
      const resetTime = rateLimit.resetTime ? new Date(rateLimit.resetTime).toLocaleTimeString() : "soon"
      return NextResponse.json(
        { 
          error: `Too many subscription attempts. Please try again after ${resetTime}.`,
          code: "RATE_LIMITED"
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = subscriptionSchema.safeParse(body)

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => err.message).join(", ")
      return NextResponse.json(
        { error: errors, code: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    const { email } = validationResult.data
    const normalizedEmail = email.toLowerCase().trim()

    // Create Supabase client
    const supabase = createClient()

    // Check if email already exists
    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id, email, is_active, unsubscribed_at")
      .eq("email", normalizedEmail)
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Database check error:", checkError)
      return NextResponse.json(
        { error: "Database error occurred. Please try again.", code: "DATABASE_ERROR" },
        { status: 500 }
      )
    }

    // Handle existing subscription
    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return NextResponse.json
