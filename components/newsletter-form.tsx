"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Notification } from "@/components/ui/notification"
import { Mail, CheckCircle, AlertCircle, Loader2, Sparkles, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  className?: string
  showCard?: boolean
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
}

interface NotificationState {
  show: boolean
  type: "success" | "error" | "warning" | "info"
  title: string
  description: string
  autoClose?: boolean
  showSparkles?: boolean
}

export function NewsletterForm({
  className,
  showCard = true,
  title = "Subscribe to Newsletter",
  description = "Get the latest updates and offers delivered to your inbox.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [notification, setNotification] = useState<NotificationState | null>(null)

  // Email validation
  const validateEmail = useCallback((email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }, [])

  // Real-time email validation
  useEffect(() => {
    const trimmedEmail = email.trim()
    setIsValidEmail(trimmedEmail.length > 0 && validateEmail(trimmedEmail))
  }, [email, validateEmail])

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    if (!emailTouched && value.length > 0) {
      setEmailTouched(true)
    }
  }

  // Show notification
  const showNotification = useCallback((notificationData: NotificationState) => {
    setNotification(notificationData)
  }, [])

  // Hide notification
  const hideNotification = useCallback(() => {
    setNotification(null)
  }, [])

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedEmail = email.trim()

    // Client-side validation
    if (!trimmedEmail) {
      showNotification({
        show: true,
        type: "error",
        title: "Email Required",
        description: "Please enter your email address to subscribe to our newsletter.",
      })
      return
    }

    if (!validateEmail(trimmedEmail)) {
      showNotification({
        show: true,
        type: "error",
        title: "Invalid Email",
        description: "Please enter a valid email address (e.g., you@example.com).",
      })
      return
    }

    setLoading(true)
    hideNotification()

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      // Handle response
      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch (jsonError) {
          throw new Error(`Server error: ${response.status} ${response.statusText}`)
        }

        // Handle specific error cases
        switch (errorData.code) {
          case "ALREADY_SUBSCRIBED":
            showNotification({
              show: true,
              type: "warning",
              title: "Already Subscribed",
              description:
                "This email address is already subscribed to our newsletter. Check your inbox for our latest updates!",
            })
            break
          case "RATE_LIMIT_EXCEEDED":
            showNotification({
              show: true,
              type: "warning",
              title: "Too Many Attempts",
              description: "Please wait a few minutes before trying to subscribe again.",
            })
            break
          case "VALIDATION_ERROR":
            showNotification({
              show: true,
              type: "error",
              title: "Invalid Email Format",
              description: errorData.error || "Please check your email address and try again.",
            })
            break
          default:
            showNotification({
              show: true,
              type: "error",
              title: "Subscription Failed",
              description: errorData.error || "Unable to subscribe at this time. Please try again later.",
            })
        }
        return
      }

      // Parse successful response
      const data = await response.json()

      if (data.success) {
        // Clear form
        setEmail("")
        setEmailTouched(false)

        // Show success notification
        showNotification({
          show: true,
          type: "success",
          title: data.type === "reactivated" ? "Welcome Back!" : "Successfully Subscribed!",
          description:
            data.confirmationMessage ||
            "Thank you for subscribing! You'll receive our latest updates and exclusive offers.",
          autoClose: true,
          showSparkles: true,
        })

        // Show additional info after a delay
        setTimeout(() => {
          showNotification({
            show: true,
            type: "info",
            title: "What's Next?",
            description:
              "You'll receive a welcome email shortly. Our newsletters are sent weekly with the latest digital insights, tips, and exclusive offers from Hamduk Digital Hub.",
            autoClose: true,
          })
        }, 3000)
      } else {
        showNotification({
          show: true,
          type: "error",
          title: "Subscription Failed",
          description: data.error || "An unexpected error occurred. Please try again.",
        })
      }
    } catch (networkError) {
      console.error("Newsletter subscription error:", networkError)
      showNotification({
        show: true,
        type: "error",
        title: "Network Error",
        description: "Unable to connect to our servers. Please check your internet connection and try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const formContent = (
    <div className="space-y-4">
      {notification && (
        <Notification
          variant={notification.type}
          title={notification.title}
          description={notification.description}
          onClose={hideNotification}
          autoClose={notification.autoClose}
          autoCloseDelay={notification.type === "success" ? 8000 : undefined}
          showSparkles={notification.showSparkles}
          className="mb-4"
        />
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={handleEmailChange}
              disabled={loading}
              className={cn(
                "pl-10 pr-10 transition-all duration-200",
                emailTouched &&
                  email.length > 0 &&
                  (isValidEmail
                    ? "border-green-500 focus:border-green-500 focus:ring-green-500/20"
                    : "border-red-500 focus:border-red-500 focus:ring-red-500/20"),
              )}
              aria-describedby="email-validation"
              autoComplete="email"
              spellCheck={false}
            />
            {emailTouched && email.length > 0 && (
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                {isValidEmail ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                )}
              </div>
            )}
          </div>

          {emailTouched && email.length > 0 && !isValidEmail && (
            <p id="email-validation" className="text-sm text-red-600 flex items-center gap-1">
              <AlertCircle className="h-3 w-3" />
              Please enter a valid email address
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={loading || !email.trim() || (emailTouched && !isValidEmail)}
          className="w-full transition-all duration-200"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {buttonText}
            </>
          )}
        </Button>

        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <Shield className="h-3 w-3" />
          <span>We respect your privacy. Unsubscribe at any time.</span>
        </div>
      </form>
    </div>
  )

  if (!showCard) {
    return <div className={className}>{formContent}</div>
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{formContent}</CardContent>
    </Card>
  )
}
