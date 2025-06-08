import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Digital Services</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive range of over 100 digital services designed to help your business thrive in
                  the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-30 w-full border-y bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container flex overflow-x-auto py-4">
            <ul className="flex min-w-full flex-none gap-4 md:gap-8">
              <li>
                <a href="#web-development" className="text-sm font-medium hover:text-primary">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#app-development" className="text-sm font-medium hover:text-primary">
                  App Development
                </a>
              </li>
              <li>
                <a href="#branding" className="text-sm font-medium hover:text-primary">
                  Branding & Design
                </a>
              </li>
              <li>
                <a href="#virtual-assistance" className="text-sm font-medium hover:text-primary">
                  Virtual Assistance
                </a>
              </li>
              <li>
                <a href="#content-creation" className="text-sm font-medium hover:text-primary">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="text-sm font-medium hover:text-primary">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#education" className="text-sm font-medium hover:text-primary">
                  Online Education
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Service Categories */}
        <section id="web-development" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                    Category
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">Web Development</h2>
                  <p className="text-muted-foreground">
                    Custom websites, e-commerce solutions, and web applications tailored to your business needs.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Custom Website Development</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        We create custom websites that are tailored to your specific business needs and goals. Our
                        websites are responsive, fast, and optimized for search engines.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Responsive design for all devices</li>
                        <li>SEO-friendly structure</li>
                        <li>Fast loading speeds</li>
                        <li>Custom functionality</li>
                        <li>Content management systems</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>E-commerce Solutions</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        Our e-commerce solutions help you sell products and services online with secure payment
                        processing, inventory management, and a seamless shopping experience.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Custom online stores</li>
                        <li>Secure payment gateways</li>
                        <li>Inventory management</li>
                        <li>Order processing</li>
                        <li>Customer accounts</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Web Applications</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        We develop custom web applications that automate processes, improve efficiency, and provide
                        valuable tools for your business and customers.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Custom dashboards</li>
                        <li>CRM systems</li>
                        <li>Booking systems</li>
                        <li>Project management tools</li>
                        <li>Data visualization</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Website Maintenance</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        Keep your website running smoothly with our maintenance services, including updates, security
                        patches, backups, and performance optimization.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Regular updates</li>
                        <li>Security monitoring</li>
                        <li>Backup management</li>
                        <li>Performance optimization</li>
                        <li>Content updates</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section id="app-development" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-start">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                    Category
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">App Development</h2>
                  <p className="text-muted-foreground">
                    Native and cross-platform mobile applications for iOS and Android devices.
                  </p>
                </div>
                <div>
                  <Button asChild>
                    <Link href="/contact">
                      Request a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>iOS App Development</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        We create native iOS applications that provide a seamless user experience on iPhone and iPad
                        devices, taking advantage of the latest iOS features.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Native Swift development</li>
                        <li>iOS-specific features</li>
                        <li>App Store optimization</li>
                        <li>Performance optimization</li>
                        <li>Regular updates</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Android App Development</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        Our Android applications are built to work across the diverse ecosystem of Android devices,
                        providing a consistent experience for all users.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Native Kotlin development</li>
                        <li>Material Design implementation</li>
                        <li>Google Play Store optimization</li>
                        <li>Device compatibility</li>
                        <li>Performance optimization</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Cross-Platform Development</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        We use cross-platform frameworks like React Native and Flutter to build applications that work
                        on both iOS and Android from a single codebase.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>React Native development</li>
                        <li>Flutter development</li>
                        <li>Code reusability</li>
                        <li>Consistent experience across platforms</li>
                        <li>Faster development time</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>App Maintenance & Updates</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground mb-4">
                        Keep your mobile applications up-to-date with our maintenance services, including bug fixes,
                        feature updates, and compatibility improvements.
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Bug fixes and patches</li>
                        <li>Feature enhancements</li>
                        <li>OS compatibility updates</li>
                        <li>Performance monitoring</li>
                        <li>Security updates</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Additional service categories would follow the same pattern */}

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your project requirements and get a custom quote for our services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
                  <Link href="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
