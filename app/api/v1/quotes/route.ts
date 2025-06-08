import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { validateApiKey, checkUserAccess, logApiUsage } from "@/lib/api/middleware"

export async function GET(request: NextRequest) {
  const startTime = Date.now()

  try {
    const validation = await validateApiKey(request)
    if (validation instanceof NextResponse) return validation

    const { user } = validation

    // Check if user has access to view quotes
    if (!checkUserAccess(user.role, ["business", "developer", "premium"])) {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)

    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const status = searchParams.get("status")
    const offset = (page - 1) * limit

    let query = supabase
      .from("quote_requests")
      .select("*")
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq("status", status)
    }

    // If not premium user, only show their own quotes
    if (user.role !== "premium") {
      query = query.eq("user_id", user.id)
    }

    const { data: quotes, error } = await query

    if (error) {
      return NextResponse.json({ error: "Failed to fetch quotes" }, { status: 500 })
    }

    const responseTime = Date.now() - startTime
    await logApiUsage(
      user.id,
      request.headers.get("x-api-key") || "",
      "/api/v1/quotes",
      "GET",
      200,
      responseTime,
      request.ip || "",
      request.headers.get("user-agent") || "",
    )

    return NextResponse.json({
      data: quotes,
      pagination: {
        page,
        limit,
        total: quotes?.length || 0,
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const body = await request.json()
    const { first_name, last_name, email, phone, company, service_type, budget_range, timeline, project_details } = body

    // Validate required fields
    if (!first_name || !last_name || !email || !service_type || !project_details) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createServerClient()

    // Check if API key is provided (for external requests)
    const apiKey = request.headers.get("x-api-key")
    let userId = null

    if (apiKey) {
      const validation = await validateApiKey(request)
      if (validation instanceof NextResponse) return validation
      userId = validation.user.id
    }

    const { data: quote, error } = await supabase
      .from("quote_requests")
      .insert({
        user_id: userId,
        first_name,
        last_name,
        email,
        phone,
        company,
        service_type,
        budget_range,
        timeline,
        project_details,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "Failed to create quote request" }, { status: 500 })
    }

    const responseTime = Date.now() - startTime
    if (apiKey && userId) {
      await logApiUsage(
        userId,
        apiKey,
        "/api/v1/quotes",
        "POST",
        201,
        responseTime,
        request.ip || "",
        request.headers.get("user-agent") || "",
      )
    }

    return NextResponse.json(
      {
        data: quote,
        message: "Quote request created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
