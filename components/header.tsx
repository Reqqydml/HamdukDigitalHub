"use client"

import * as React from "react"
import Link from "next/link"
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
import { Globe, Menu } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/components/auth/auth-provider"

export function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const { user, signOut } = useAuth()

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
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
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-primary" />
          <Link href="/" className="text-xl font-bold">
            Hamduk Digital Hub
          </Link>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), pathname === "/" && "text-primary")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname === "/services" ? "text-primary" : ""}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/services" title="All Services">
                    Browse our complete catalog of over 100 digital services
                  </ListItem>
                  <ListItem href="/services/web-development" title="Web Development">
                    Custom websites, e-commerce, and web applications
                  </ListItem>
                  <ListItem href="/services/app-development" title="App Development">
                    Mobile apps for iOS and Android platforms
                  </ListItem>
                  <ListItem href="/services/branding" title="Branding">
                    Logo design, brand identity, and visual assets
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/courses" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), pathname === "/courses" && "text-primary")}
                >
                  Courses
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/shop" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), pathname === "/shop" && "text-primary")}
                >
                  Shop
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/community-hub" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), pathname === "/community-hub" && "text-primary")}
                >
                  Community
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), pathname === "/about" && "text-primary")}
                >
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), pathname === "/contact" && "text-primary")}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

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
                <Link
                  href="/"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/" && "text-primary",
                  )}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/services" && "text-primary",
                  )}
                >
                  Services
                </Link>
                <Link
                  href="/courses"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/courses" && "text-primary",
                  )}
                >
                  Courses
                </Link>
                <Link
                  href="/shop"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/shop" && "text-primary",
                  )}
                >
                  Shop
                </Link>
                <Link
                  href="/community-hub"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/community-hub" && "text-primary",
                  )}
                >
                  Community
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/about" && "text-primary",
                  )}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-primary",
                    pathname === "/contact" && "text-primary",
                  )}
                >
                  Contact
                </Link>
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
