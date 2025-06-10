import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase/server"

export async function validateApiKey(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key")

  if (!apiKey) {
    return NextResponse.json({ error: "API key is required" }, { status: 401 })
  }

  const supabase = createServerClient()

  const { data: user, error } = await supabase
    .from("users")
    .select("id, role, api_calls_count, api_calls_limit, subscription_status")
    .eq("api_key", apiKey)
    .single()

  if (error || !user) {
    return NextResponse.json({ error: "Invalid API key" }, { status: 401 })
  }

  // Check API call limits
  if (user.api_calls_count >= user.api_calls_limit) {
    return NextResponse.json({ error: "API call limit exceeded" }, { status: 429 })
  }

  // Increment API call count
  await supabase
    .from("users")
    .update({ api_calls_count: user.api_calls_count + 1 })
    .eq("id", user.id)

  return { user }
}

export function checkUserAccess(userRole: string, requiredRole: string[]) {
  const roleHierarchy = {
    general: 0,
    business: 1,
    developer: 2,
    premium: 3,
  }

  const userLevel = roleHierarchy[userRole as keyof typeof roleHierarchy] || 0
  const requiredLevel = Math.min(...requiredRole.map((role) => roleHierarchy[role as keyof typeof roleHierarchy] || 0))

  return userLevel >= requiredLevel
}

export async function logApiUsage(
  userId: string,
  apiKey: string,
  endpoint: string,
  method: string,
  statusCode: number,
  responseTime: number,
  ipAddress: string,
  userAgent: string,
) {
  const supabase = createServerClient()

  await supabase.from("api_usage_logs").insert({
    user_id: userId,
    api_key: apiKey,
    endpoint,
    method,
    status_code: statusCode,
    response_time: responseTime,
    ip_address: ipAddress,
    user_agent: userAgent,
  })
}
