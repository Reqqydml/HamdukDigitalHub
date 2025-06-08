import { type NextRequest, NextResponse } from "next/server"
import { validateApiKey, logApiUsage } from "@/lib/api/middleware"

export async function POST(request: NextRequest) {
  const startTime = Date.now()

  try {
    const validation = await validateApiKey(request)
    if (validation instanceof NextResponse) return validation

    const { user } = validation

    const body = await request.json()
    const { message, context, type } = body

    // Validate required fields
    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Different AI responses based on user role
    let response = ""
    let features = []

    switch (user.role) {
      case "general":
        response = `Hello! I'm your AI assistant. I can help you with basic questions about our services. For advanced features, consider upgrading your account.`
        features = ["Basic Q&A", "Service Information", "General Support"]
        break

      case "business":
        response = `Welcome! As a business user, I can help you with project planning, cost estimates, and business strategy recommendations. How can I assist you today?`
        features = ["Project Planning", "Cost Estimation", "Business Strategy", "Market Analysis"]
        break

      case "developer":
        response = `Hi there! I'm here to help with technical questions, code reviews, architecture decisions, and development best practices. What would you like to discuss?`
        features = ["Code Review", "Architecture Advice", "Technical Support", "Best Practices", "API Documentation"]
        break

      case "premium":
        response = `Greetings! As a premium user, you have access to all my capabilities including advanced analytics, custom solutions, priority support, and personalized recommendations.`
        features = [
          "Advanced Analytics",
          "Custom Solutions",
          "Priority Support",
          "Personalized Recommendations",
          "Full API Access",
        ]
        break

      default:
        response = `Hello! I'm your AI assistant. Please upgrade your account to access advanced features.`
        features = ["Basic Support"]
    }

    // Simulate AI processing based on message content
    if (message.toLowerCase().includes("quote") || message.toLowerCase().includes("price")) {
      response += ` Based on your query about pricing, I can help you estimate costs for your project. `

      if (user.role === "premium" || user.role === "business") {
        response += `For a detailed quote, I recommend our quote API or contact our sales team.`
      }
    }

    if (message.toLowerCase().includes("course") || message.toLowerCase().includes("learn")) {
      response += ` I see you're interested in learning! We have excellent courses available. `

      if (user.role === "premium") {
        response += `As a premium user, you get access to all courses with personalized learning paths.`
      }
    }

    const responseTime = Date.now() - startTime
    await logApiUsage(
      user.id,
      request.headers.get("x-api-key") || "",
      "/api/v1/ai-assistant",
      "POST",
      200,
      responseTime,
      request.ip || "",
      request.headers.get("user-agent") || "",
    )

    return NextResponse.json({
      data: {
        response,
        user_role: user.role,
        available_features: features,
        context: context || "general",
        timestamp: new Date().toISOString(),
      },
      message: "AI response generated successfully",
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
