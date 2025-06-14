import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/client"

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 })
    }

    const supabase = createServerClient()

    const { data: existingSubscription, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id")
      .eq("email", email)
      .maybeSingle()

    if (checkError) {
      console.error("Database check error:", checkError)
      return NextResponse.json({ error: "Failed to check subscription" }, { status: 500 })
    }

    if (existingSubscription) {
      return NextResponse.json({ error: "Email already subscribed" }, { status: 409 })
    }

    const { data, error } = await supabase
      .from("newsletter_subscriptions")
      .insert([{ email }])
      .select()

    if (error) {
      console.error("Database error:", error)
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 })
    }

    return NextResponse.json({ message: "Successfully subscribed!", data: data[0] }, { status: 201 })
  } catch (error) {
    console.error("API error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
