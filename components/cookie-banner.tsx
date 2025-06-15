"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    document.cookie = "cookie-consent=accepted; path=/; max-age=31536000" // 1 year
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    document.cookie = "cookie-consent=declined; path=/; max-age=31536000" // 1 year
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card className="shadow-lg border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cookie className="h-5 w-5 text-amber-600" />
              <CardTitle className="text-lg">Cookie Notice</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={declineCookies}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription>
            We use cookies to enhance your experience on our website. By continuing to use this site, you consent to our
            use of cookies.{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Learn more
            </Link>
          </CardDescription>
          <div className="flex space-x-2">
            <Button onClick={acceptCookies} size="sm" className="flex-1">
              Accept
            </Button>
            <Button onClick={declineCookies} variant="outline" size="sm" className="flex-1">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
