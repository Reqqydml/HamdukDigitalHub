import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { z } from "zod"

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Validation schema
const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50, "First name too long"),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50, "Last name too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long"),
  position: z.string().min(1, "Position is required"),
  department: z.string().min(1, "Department is required"),
  experience: z.enum(["entry", "junior", "mid", "senior", "lead"]),
  expectedSalary: z.string().min(1, "Expected salary is required"),
  availability: z.enum(["immediate", "2weeks", "1month", "negotiable"]),
  workType: z.enum(["remote", "onsite", "hybrid"]),
  skills: z.string().min(10, "Please provide at least 10 characters describing your skills"),
  coverLetter: z.string().min(100, "Cover letter must be at least 100 characters").max(2000, "Cover letter too long"),
  portfolioUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  linkedinUrl: z.string().url("Please enter a valid LinkedIn URL").optional().or(z.literal("")),
  githubUrl: z.string().url("Please enter a valid GitHub URL").optional().or(z.literal("")),
  subscribeNewsletter: z.boolean().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to the terms and conditions"),
})

// Rate limiting function
function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxAttempts = 3 // Reduced for job applications

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
          error: `Too many application attempts. Please try again after ${resetTime}.`,
          code: "RATE_LIMITED",
        },
        { status: 429 },
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validationResult = applicationSchema.safeParse(body)

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ")
      return NextResponse.json({ error: errors, code: "VALIDATION_ERROR" }, { status: 400 })
    }

    const applicationData = validationResult.data
    const normalizedEmail = applicationData.email.toLowerCase().trim()

    // Create Supabase client
    const supabase = createServerClient()

    // Check for duplicate applications (same email + position within 30 days)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const { data: existingApplication, error: checkError } = await supabase
      .from("job_applications")
      .select("id, position, created_at")
      .eq("email", normalizedEmail)
      .eq("position", applicationData.position)
      .gte("created_at", thirtyDaysAgo.toISOString())
      .single()

    if (checkError && checkError.code !== "PGRST116") {
      console.error("Database check error:", checkError)
      return NextResponse.json(
        { error: "Database error occurred. Please try again.", code: "DATABASE_ERROR" },
        { status: 500 },
      )
    }

    if (existingApplication) {
      return NextResponse.json(
        {
          error: "You have already applied for this position recently. Please wait 30 days before applying again.",
          code: "DUPLICATE_APPLICATION",
        },
        { status: 409 },
      )
    }

    // Create new job application
    const { data: newApplication, error: insertError } = await supabase
      .from("job_applications")
      .insert({
        first_name: applicationData.firstName,
        last_name: applicationData.lastName,
        email: normalizedEmail,
        phone: applicationData.phone,
        position: applicationData.position,
        department: applicationData.department,
        experience_level: applicationData.experience,
        expected_salary: applicationData.expectedSalary,
        availability: applicationData.availability,
        work_type: applicationData.workType,
        skills: applicationData.skills,
        cover_letter: applicationData.coverLetter,
        portfolio_url: applicationData.portfolioUrl || null,
        linkedin_url: applicationData.linkedinUrl || null,
        github_url: applicationData.githubUrl || null,
        status: "pending",
        source: "website",
        ip_address: ip,
        user_agent: request.headers.get("user-agent") || null,
      })
      .select()
      .single()

    if (insertError) {
      console.error("Insert error:", insertError)
      return NextResponse.json(
        { error: "Failed to submit application. Please try again.", code: "INSERT_ERROR" },
        { status: 500 },
      )
    }

    // Handle newsletter subscription if requested
    if (applicationData.subscribeNewsletter) {
      try {
        const { error: newsletterError } = await supabase.from("newsletter_subscriptions").upsert(
          {
            email: normalizedEmail,
            is_active: true,
            subscribed_at: new Date().toISOString(),
            source: "job_application",
          },
          {
            onConflict: "email",
          },
        )

        if (newsletterError) {
          console.error("Newsletter subscription error:", newsletterError)
          // Don't fail the application if newsletter subscription fails
        }
      } catch (newsletterError) {
        console.error("Newsletter subscription error:", newsletterError)
        // Don't fail the application if newsletter subscription fails
      }
    }

    return NextResponse.json(
      {
        message: "Application submitted successfully! We'll review your application and get back to you soon.",
        code: "SUCCESS",
        data: {
          id: newApplication.id,
          applicationNumber: `APP-${newApplication.id.toString().padStart(6, "0")}`,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Job application submission error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again.", code: "INTERNAL_ERROR" },
      { status: 500 },
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const email = searchParams.get("email")
    const status = searchParams.get("status")

    if (!email) {
      return NextResponse.json({ error: "Email parameter is required", code: "MISSING_EMAIL" }, { status: 400 })
    }

    const supabase = createServerClient()

    let query = supabase
      .from("job_applications")
      .select("id, position, department, status, created_at, updated_at")
      .eq("email", email.toLowerCase().trim())
      .order("created_at", { ascending: false })

    if (status) {
      query = query.eq("status", status)
    }

    const { data: applications, error } = await query

    if (error) {
      console.error("Fetch applications error:", error)
      return NextResponse.json({ error: "Failed to fetch applications", code: "FETCH_ERROR" }, { status: 500 })
    }

    return NextResponse.json(
      {
        data: applications,
        count: applications.length,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Get applications error:", error)
    return NextResponse.json({ error: "An unexpected error occurred", code: "INTERNAL_ERROR" }, { status: 500 })
  }
}
