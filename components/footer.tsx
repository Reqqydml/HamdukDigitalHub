"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong.")
      } else {
        setSuccess(true)
        setEmail("")
      }
    } catch (err) {
      console.error("Subscription error:", err)
      setError("An unexpected error occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Hamduk Digital Hub logo" width={32} height={32} />
              <span className="text-xl font-bold">Hamduk Digital Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop digital solutions hub with over 100 services to transform your business.
            </p>
            <div className="flex space-x-4">
              {[
                { href: "#", label: "Facebook", icon: "facebook" },
                { href: "#", label: "Twitter", icon: "twitter" },
                { href: "#", label: "LinkedIn", icon: "linkedin" },
                { href: "#", label: "Instagram", icon: "instagram" },
              ].map(({ href, label }, idx) => (
                <Link key={idx} href={href} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                    aria-label={label}
                  >
                    <i className={`ri-${label.toLowerCase()}-line text-xl`} />
                  </a>
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                ["Web Development", "/services/web-development"],
                ["App Development", "/services/app-development"],
                ["Branding & Design", "/services/branding"],
                ["Digital Marketing", "/services/marketing"],
                ["Content Creation", "/services/content"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-muted-foreground hover:text-primary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
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

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter to get the latest updates and offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" disabled={loading}>
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
              {success && <p className="text-sm text-green-600">You’ve been subscribed!</p>}
              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground space-y-2">
          <p>© {new Date().getFullYear()} Hamduk Digital Hub. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
