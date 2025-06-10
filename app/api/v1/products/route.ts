import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"
import { validateApiKey, checkUserAccess, logApiUsage } from "@/lib/api/middleware"

export async function GET(request: NextRequest) {
  const startTime = Date.now()

  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)

    const page = Number.parseInt(searchParams.get("page") || "1")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const category = searchParams.get("category")
    const featured = searchParams.get("featured")
    const search = searchParams.get("search")
    const offset = (page - 1) * limit

    let query = supabase
      .from("digital_products")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (category) {
      query = query.eq("category", category)
    }

    if (featured === "true") {
      query = query.eq("is_featured", true)
    }

    if (search) {
      query = query.or(`title.ilike.%${search}%,description.ilike.%${search}%`)
    }

    const { data: products, error } = await query

    if (error) {
      return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
    }

    // Log API usage if API key is provided
    const apiKey = request.headers.get("x-api-key")
    if (apiKey) {
      const validation = await validateApiKey(request)
      if (validation instanceof NextResponse) return validation

      const responseTime = Date.now() - startTime
      await logApiUsage(
        validation.user.id,
        apiKey,
        "/api/v1/products",
        "GET",
        200,
        responseTime,
        request.ip || "",
        request.headers.get("user-agent") || "",
      )
    }

    return NextResponse.json({
      data: products,
      pagination: {
        page,
        limit,
        total: products?.length || 0,
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

    // Check if user has access to create products
    if (!checkUserAccess(user.role, ["business", "developer", "premium"])) {
      return NextResponse.json({ error: "Insufficient permissions" }, { status: 403 })
    }

    const body = await request.json()
    const {
      title,
      description,
      category,
      price,
      original_price,
      thumbnail_url,
      download_url,
      file_size,
      file_format,
      tags,
    } = body

    // Validate required fields
    if (!title || !category || !price) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const supabase = createServerClient()

    const { data: product, error } = await supabase
      .from("digital_products")
      .insert({
        title,
        description,
        category,
        price,
        original_price,
        thumbnail_url,
        download_url,
        file_size,
        file_format,
        tags,
        created_by: user.id,
      })
      .select()
      .single()

    if (error) {
      return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
    }

    const responseTime = Date.now() - startTime
    await logApiUsage(
      user.id,
      request.headers.get("x-api-key") || "",
      "/api/v1/products",
      "POST",
      201,
      responseTime,
      request.ip || "",
      request.headers.get("user-agent") || "",
    )

    return NextResponse.json(
      {
        data: product,
        message: "Product created successfully",
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
