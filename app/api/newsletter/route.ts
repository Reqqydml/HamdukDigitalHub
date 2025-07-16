import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { z } from "zod"

// Validation schema
const newsletterSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(255, "Email address is too long")
    .toLowerCase()
    .trim(),
})

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.ip || request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          error: "Too many subscription attempts. Please try again in 15 minutes.",
          success: false,
          code: "RATE_LIMIT_EXCEEDED",
        },
        { status: 429 },
      )
    }

    // Parse and validate request body
    let body
    try {
      body = await request.json()
    } catch (parseError) {
      return NextResponse.json(
        {
          error: "Invalid request format. Please check your data and try again.",
          success: false,
          code: "INVALID_JSON",
        },
        { status: 400 },
      )
    }

    // Validate email with Zod
    const validation = newsletterSchema.safeParse(body)
    if (!validation.success) {
      const errors = validation.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))

      return NextResponse.json(
        {
          error: errors[0]?.message || "Invalid email address",
          success: false,
          code: "VALIDATION_ERROR",
          details: errors,
        },
        { status: 400 },
      )
    }

    const { email } = validation.data

    // Initialize Supabase client
    let supabase
    try {
      supabase = createClient()
    } catch (supabaseError) {
      console.error("Supabase client error:", supabaseError)
      return NextResponse.json(
        {
          error: "Database connection failed. Please try again later.",
          success: false,
          code: "DATABASE_CONNECTION_ERROR",
        },
        { status: 500 },
      )
    }

    // Check if email already exists
    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id, email, is_active, subscribed_at")
      .eq("email", email)
      .maybeSingle()

    if (checkError) {
      console.error("Database check error:", checkError)
      return NextResponse.json(
        {
          error: "Failed to verify subscription status. Please try again.",
          success: false,
          code: "DATABASE_CHECK_ERROR",
        },
        { status: 500 },
      )
    }

    if (existingSubscription) {
      if (existingSubscription.is_active) {
        return NextResponse.json(
          {
            error: "This email address is already subscribed to our newsletter.",
            success: false,
            code: "ALREADY_SUBSCRIBED",
            subscribedAt: existingSubscription.subscribed_at,
          },
          { status: 409 },
        )
      } else {
        // Reactivate inactive subscription
        const { data: reactivatedData, error: reactivateError } = await supabase
          .from("newsletter_subscriptions")
          .update({
            is_active: true,
            subscribed_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .eq("id", existingSubscription.id)
          .select()
          .single()

        if (reactivateError) {
          console.error("Reactivation error:", reactivateError)
          return NextResponse.json(
            {
              error: "Failed to reactivate subscription. Please try again.",
              success: false,
              code: "REACTIVATION_ERROR",
            },
            { status: 500 },
          )
        }

        return NextResponse.json({
          message: "Welcome back! Your newsletter subscription has been reactivated.",
          success: true,
          data: reactivatedData,
          type: "reactivated",
        })
      }
    }

    // Insert new subscription
    const { data: newSubscription, error: insertError } = await supabase
      .from("newsletter_subscriptions")
      .insert({
        email,
        subscribed_at: new Date().toISOString(),
        is_active: true,
      })
      .select()
      .single()

    if (insertError) {
      console.error("Supabase insert error:", insertError)

      // Handle specific database errors
      if (insertError.code === "23505") {
        // Unique constraint violation
        return NextResponse.json(
          {
            error: "This email address is already subscribed.",
            success: false,
            code: "DUPLICATE_EMAIL",
          },
          { status: 409 },
        )
      }

      return NextResponse.json(
        {
          error: "Failed to complete subscription. Please try again.",
          success: false,
          code: "SUBSCRIPTION_ERROR",
        },
        { status: 500 },
      )
    }

    // Success response
    return NextResponse.json({
      message: "🎉 Successfully subscribed to our newsletter!",
      success: true,
      data: newSubscription,
      type: "new_subscription",
      confirmationMessage:
        "Thank you for subscribing! You'll receive our latest updates, digital insights, and exclusive offers directly in your inbox.",
    })
  } catch (error) {
    console.error("Newsletter subscription error:", error)
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please try again later.",
        success: false,
        code: "INTERNAL_SERVER_ERROR",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const supabase = createClient()

    const { data: subscriptions, error } = await supabase
      .from("newsletter_subscriptions")
      .select("id, email, subscribed_at, is_active")
      .eq("is_active", true)
      .order("subscribed_at", { ascending: false })
      .limit(100)

    if (error) {
      console.error("Error fetching subscriptions:", error)
      return NextResponse.json(
        {
          error: "Failed to fetch subscriptions",
          success: false,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      subscriptions: subscriptions || [],
      count: subscriptions?.length || 0,
      success: true,
    })
  } catch (error) {
    console.error("Error fetching newsletter subscriptions:", error)
    return NextResponse.json(
      {
        error: "Failed to fetch subscriptions",
        success: false,
      },
      { status: 500 },
    )
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const token = searchParams.get("token")

    if (!email || !token) {
      return NextResponse.json(
        {
          error: "Email and unsubscribe token are required",
          success: false,
        },
        { status: 400 },
      )
    }

    const supabase = createClient()

    // In a real implementation, you'd verify the token
    const { error } = await supabase
      .from("newsletter_subscriptions")
      .update({ is_active: false, updated_at: new Date().toISOString() })
      .eq("email", email)

    if (error) {
      console.error("Unsubscribe error:", error)
      return NextResponse.json(
        {
          error: "Failed to unsubscribe",
          success: false,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      message: "Successfully unsubscribed from newsletter",
      success: true,
    })
  } catch (error) {
    console.error("Unsubscribe error:", error)
    return NextResponse.json(
      {
        error: "Failed to unsubscribe",
        success: false,
      },
      { status: 500 },
    )
  }
}
