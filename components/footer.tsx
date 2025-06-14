"use client"



import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { supabase } from "@/lib/supabaseClient" // Update path to your actual Supabase client
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.from("newsletter_subscribers").insert([{ email }])

    if (!error) {
      setSuccess(true)
      setEmail("")
    } else {
      alert("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.svg" // Replace with your actual logo path
                alt="Hamduk Digital Hub logo"
                width={32}
                height={32}
              />
              <span className="text-xl font-bold">Hamduk Digital Hub</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your one-stop digital solutions hub with over 100 services to transform your business.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  href: "#",
                  label: "Facebook",
                  svg: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  label: "Twitter",
                  svg: (
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675..." />
                    </svg>
                  ),
                },
                // Add other icons similarly...
              ].map(({ href, label, svg }, idx) => (
                <Link key={idx} href={href} passHref legacyBehavior>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                    aria-label={label}
                  >
                    {svg}
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
                ["Testimonials", "/testimonials"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
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
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hamduk Digital Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
