import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { z } from "zod"

// Validation schema for quote requests
const quoteRequestSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[+]?[1-9][\d]{0,15}$/.test(val), "Please enter a valid phone number"),
  company: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  projectDetails: z
    .string()
    .min(10, "Project details must be at least 10 characters")
    .max(2000, "Project details must be less than 2000 characters"),
  newsletter: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body
    try {
      body = await request.json()
    } catch (error) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid JSON format in request body",
          details: "Please check your request format and try again",
        },
        { status: 400 },
      )
    }

    // Validate request data
    const validationResult = quoteRequestSchema.safeParse(body)
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }))

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: "Please check the form fields and try again",
          fieldErrors: errors,
        },
        { status: 400 },
      )
    }

    const validatedData = validationResult.data

    // Initialize Supabase client
    let supabase
    try {
      supabase = createServerClient()
    } catch (error) {
      console.error("Failed to initialize Supabase client:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Database connection failed",
          details: "Please try again later",
        },
        { status: 500 },
      )
    }

    // Insert quote request into database
    try {
      const { data: quoteRequest, error: insertError } = await supabase
        .from("quote_requests")
        .insert({
          first_name: validatedData.firstName,
          last_name: validatedData.lastName,
          email: validatedData.email,
          phone: validatedData.phone || null,
          company: validatedData.company || null,
          service_type: validatedData.serviceType,
          budget_range: validatedData.budgetRange || null,
          timeline: validatedData.timeline || null,
          project_details: validatedData.projectDetails,
          status: "pending",
        })
        .select()
        .single()

      if (insertError) {
        console.error("Database insert error:", insertError)
        return NextResponse.json(
          {
            success: false,
            error: "Failed to save quote request",
            details: "Please try again later",
          },
          { status: 500 },
        )
      }

      // If user wants to subscribe to newsletter
      if (validatedData.newsletter) {
        try {
          await supabase.from("newsletter_subscriptions").upsert(
            {
              email: validatedData.email,
              is_active: true,
            },
            {
              onConflict: "email",
            },
          )
        } catch (newsletterError) {
          console.error("Newsletter subscription error:", newsletterError)
          // Don't fail the quote request if newsletter subscription fails
        }
      }

      return NextResponse.json(
        {
          success: true,
          message: "Quote request submitted successfully!",
          details: "We'll get back to you within 24 hours with a detailed proposal.",
          data: {
            id: quoteRequest.id,
            status: quoteRequest.status,
            submittedAt: quoteRequest.created_at,
          },
        },
        { status: 201 },
      )
    } catch (error) {
      console.error("Unexpected database error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Database operation failed",
          details: "Please try again later",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Unexpected server error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      success: false,
      error: "Method not allowed",
      details: "This endpoint only accepts POST requests",
    },
    { status: 405 },
  )
}
