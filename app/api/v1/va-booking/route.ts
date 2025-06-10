import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { validateApiKey, checkUserAccess, logApiUsage } from "@/lib/api/middleware"

export async function GET(request: NextRequest) {
  const startTime = Date.now()

  try {
    const validation = await validateApiKey(request)
    if (validation instanceof NextResponse) return validation

    const { user } = validation

    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)

    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const offset = (page - 1) * limit

    let query = supabase
      .from("va_bookings")
      .select("*")
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq("status", status)
    }

    // If not premium user, only show their own bookings
    if (user.role !== "premium") {
      query = query.eq("user_id", user.id)
    }

    const { data: bookings, error } = await query

    if (error) {
      return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 })
    }

    const responseTime = Date.now() - startTime
    await logApiUsage(
      user.id,
      request.headers.get("x-api-key") || "",
      "/api/v1/va-booking",
      "GET",
      200,
      responseTime,
      request.ip || "",
      request.headers.get("user-agent") || "",
    )

    return NextResponse.json({
      data: bookings,
      pagination: {
        page,
        limit,
        total: bookings?.length || 0,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const validation = await validateApiKey(request)
    if (validation instanceof NextResponse) return validation

    const { user } = validation

    // Check if user has access to book VA services
    if (!checkUserAccess(user.role, ["business", "developer", "premium"])) {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    const body = await request.json()
    const { service_type, description, duration_hours, hourly_rate, preferred_start_date, preferred_time, notes } = body

    // Validate required fields
    if (!service_type || !description || !duration_hours || !hourly_rate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const total_cost = duration_hours * hourly_rate

    const supabase = createServerClient()

    const { data: booking, error } = await supabase
      .from("va_bookings")
      .insert({
        user_id: user.id,
        service_type,
        description,
        duration_hours,
        hourly_rate,
        total_cost,
        preferred_start_date,
        preferred_time,
        notes,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "Failed to create booking" }, { status: 500 })
    }

    const responseTime = Date.now() - startTime
    await logApiUsage(
      user.id,
      request.headers.get("x-api-key") || "",
      "/api/v1/va-booking",
      "POST",
      201,
      responseTime,
      request.ip || "",
      request.headers.get("user-agent") || "",
    )

    return NextResponse.json(
      {
        data: booking,
        message: "VA booking created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
