"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/components/auth/auth-provider"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/community-hub", label: "Community" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { user, signOut } = useAuth()
  const isServicesPath = pathname.startsWith("/services")

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Hamduk Digital Hub Logo" width={64} height={64} />
            <span className="text-xl font-bold">Hamduk Digital Hub</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks.map(({ href, label }) =>
              label === "Services" ? (
                <NavigationMenuItem key={label}>
                  <NavigationMenuTrigger className={isServicesPath ? "text-primary" : ""}>
                    {label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <ListItem href="/services" title="All Services">
                        Browse our complete catalog of over 100 digital services
                      </ListItem>
                      <ListItem href="/services#web-app-development" title="Web Development">
                        Custom websites, e-commerce, and web applications
                      </ListItem>
                      <ListItem href="/services#web-app-development" title="App Development">
                        Mobile apps for iOS and Android platforms
                      </ListItem>
                      <ListItem href="/services#design-branding" title="Branding">
                        Logo design, brand identity, and visual assets
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={label}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        pathname === href && "text-primary"
                      )}
                      aria-current={pathname === href ? "page" : undefined}
                    >
                      {label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />
          {user ? (
            <>
              <Link href="/dashboard" className="hidden md:block">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button variant="outline" onClick={signOut} className="hidden md:block">
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <AuthModal>
                <Button variant="outline" className="hidden md:block">
                  Sign In
                </Button>
              </AuthModal>
              <AuthModal>
                <Button className="hidden md:block">Get Started</Button>
              </AuthModal>
            </>
          )}

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === href && "text-primary"
                    )}
                    aria-current={pathname === href ? "page" : undefined}
                  >
                    {label}
                  </Link>
                ))}
                {user ? (
                  <>
                    <Link href="/dashboard">
                      <Button variant="outline" className="w-full">
                        Dashboard
                      </Button>
                    </Link>
                    <Button onClick={signOut} variant="outline" className="w-full">
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <AuthModal>
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </AuthModal>
                    <AuthModal>
                      <Button className="w-full">Get Started</Button>
                    </AuthModal>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
