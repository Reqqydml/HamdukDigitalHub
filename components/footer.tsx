"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Notification } from "@/components/ui/notification"
import { Mail, CheckCircle, AlertCircle, Loader2, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [notification, setNotification] = useState<{
    show: boolean
    type: "success" | "error" | "warning"
    title: string
    description: string
  } | null>(null)

  // Email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email.trim())
  }

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValidEmail(validateEmail(value))
    if (!emailTouched && value.length > 0) {
      setEmailTouched(true)
    }
  }

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    const trimmedEmail = email.trim()

    // Client-side validation
    if (!trimmedEmail) {
      setNotification({
        show: true,
        type: "error",
        title: "Email Required",
        description: "Please enter your email address.",
      })
      return
    }

    if (!validateEmail(trimmedEmail)) {
      setNotification({
        show: true,
        type: "error",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      })
      return
    }

    setLoading(true)
    setNotification(null)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      if (!response.ok) {
        let errorData
        try {
          errorData = await response.json()
        } catch (jsonError) {
          throw new Error(`Server error: ${response.status}`)
        }

        if (errorData.code === "ALREADY_SUBSCRIBED") {
          setNotification({
            show: true,
            type: "warning",
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          })
        } else {
          setNotification({
            show: true,
            type: "error",
            title: "Subscription Failed",
            description: errorData.error || "Please try again later.",
          })
        }
        return
      }

      const data = await response.json()

      if (data.success) {
        setEmail("")
        setEmailTouched(false)
        setNotification({
          show: true,
          type: "success",
          title: "🎉 Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter!",
        })
      } else {
        setNotification({
          show: true,
          type: "error",
          title: "Subscription Failed",
          description: data.error || "An unexpected error occurred.",
        })
      }
    } catch (networkError) {
      console.error("Network error:", networkError)
      setNotification({
        show: true,
        type: "error",
        title: "Network Error",
        description: "Please check your connection and try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Hamduk Digital Hub logo" width={64} height={64} />
              <span className="text-xl font-bold">Hamduk Digital Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop digital solutions hub with over 100 services across 10 categories to transform your
              business.
            </p>
            <div className="flex space-x-4">
              {[
  { href: "https://facebook.com", label: "Facebook", icon: Facebook },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://instagram.com", label: "Instagram", icon: Instagram },
].map(({ href, label, icon: Icon }) => (
  <Link
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-primary transition-colors"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </Link>
))}
            </div>
          </div>
            {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              {[
                ["About Us", "/about"],
                ["Portfolio", "/portfolio"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
                ["Testimonials", "/testimonials"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Design & Development</h3>
            <ul className="space-y-2">
              {[
                ["Design & Branding", "/services#design-branding"],
                ["Web Development", "/services#web-app-development"],
                ["App Development", "/services#web-app-development"],
                ["Digital Products", "/services#digital-products"],
                ["Content Creation", "/services#content-creation"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Business & Marketing</h3>
            <ul className="space-y-2">
              {[
                ["Digital Marketing", "/services#digital-marketing"],
                ["Virtual Assistance", "/services#virtual-assistance"],
                ["Business & Tech", "/services#business-tech"],
                ["Client Services", "/services#client-services"],
                ["Education & Training", "/services#education-training"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">Get the latest updates, tips, and exclusive offers.</p>

            {notification && (
              <Notification
                variant={notification.type}
                title={notification.title}
                description={notification.description}
                onClose={() => setNotification(null)}
                autoClose={notification.type === "success"}
                autoCloseDelay={5000}
                className="mb-4"
              />
            )}

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  disabled={loading}
                  className={cn(
                    "pl-10 pr-10 transition-all duration-200",
                    emailTouched &&
                      email.length > 0 &&
                      (isValidEmail
                        ? "border-green-500 focus:border-green-500"
                        : "border-red-500 focus:border-red-500"),
                  )}
                  autoComplete="email"
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

              <Button
                type="submit"
                disabled={loading || !email.trim() || (emailTouched && !isValidEmail)}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>

              <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                <Shield className="h-3 w-3" />
                <span>We respect your privacy</span>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Hamduk Digital Hub. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
