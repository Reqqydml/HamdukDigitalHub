import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  LayoutGrid,
  MessageSquare,
  Palette,
  PenTool,
  Play,
  Users,
  Briefcase,
  GraduationCap,
  ShoppingCart,
  TrendingUp,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NewsletterForm } from "@/components/newsletter-form"
import { TrustLogos } from "@/components/trust-logos"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-background to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Your One-Stop Digital Solutions Hub
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Over 100 digital services across 10 categories to transform your business. From design to
                    development, marketing to education - we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/services">
                      Explore Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Book a Consultation</Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>100+ Services</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>10 Categories</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Logos */}
        <TrustLogos />

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-white">
                  Our Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  10 Service Categories, 100+ Solutions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive range of digital services designed to help your business thrive in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
              <ServiceCard
                icon={<Palette className="h-8 w-8 text-primary" />}
                title="Design & Branding"
                description="Logo design, brand identity, UI/UX design, and complete visual branding solutions."
                serviceCount="15+ Services"
              />
              <ServiceCard
                icon={<Globe className="h-8 w-8 text-primary" />}
                title="Web & App Development"
                description="Custom websites, web apps, mobile apps, e-commerce solutions, and maintenance services."
                serviceCount="15+ Services"
              />
              <ServiceCard
                icon={<TrendingUp className="h-8 w-8 text-primary" />}
                title="Digital Marketing"
                description="SEO, social media marketing, ads management, email campaigns, and conversion optimization."
                serviceCount="13+ Services"
              />
              <ServiceCard
                icon={<PenTool className="h-8 w-8 text-primary" />}
                title="Content Creation"
                description="Blog writing, video editing, copywriting, podcast production, and multimedia content."
                serviceCount="14+ Services"
              />
              <ServiceCard
                icon={<ShoppingCart className="h-8 w-8 text-primary" />}
                title="Digital Products"
                description="Templates, UI kits, e-books, digital planners, and custom digital product development."
                serviceCount="10+ Services"
              />
              <ServiceCard
                icon={<GraduationCap className="h-8 w-8 text-primary" />}
                title="Education & Training"
                description="Online courses, workshops, mentorship, certification programs, and skill development."
                serviceCount="10+ Services"
              />
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                title="Virtual Assistance"
                description="Administrative support, project management, customer service, and business operations."
                serviceCount="13+ Services"
              />
              <ServiceCard
                icon={<Briefcase className="h-8 w-8 text-primary" />}
                title="Business & Tech Services"
                description="Business consulting, automation, dashboards, SOPs, and tech stack recommendations."
                serviceCount="10+ Services"
              />
              <ServiceCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Community & Platforms"
                description="Forum setup, membership communities, event hosting, and platform management."
                serviceCount="9+ Services"
              />
              <ServiceCard
                icon={<LayoutGrid className="h-8 w-8 text-primary" />}
                title="Client Services & Systems"
                description="CRM setup, client portals, invoicing systems, and business process automation."
                serviceCount="10+ Services"
              />
            </div>
            <div className="flex justify-center mt-12">
              <Button asChild>
                <Link href="/services">
                  View All Services
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-white">
                  Our Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See Our Work in Action</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse through our recent projects and see how we've helped businesses achieve their digital goals.
                </p>
              </div>
            </div>

            <Tabs defaultValue="design" className="mt-12">
              <div className="flex justify-center">
                <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-2xl">
                  <TabsTrigger value="design">Design</TabsTrigger>
                  <TabsTrigger value="development">Development</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="content">Content</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="design" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Complete Brand Identity"
                    category="Design & Branding"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="UI/UX Design System"
                    category="Design & Branding"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Product Packaging Design"
                    category="Design & Branding"
                  />
                </div>
              </TabsContent>
              <TabsContent value="development" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="E-commerce Platform"
                    category="Web Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Mobile App Development"
                    category="App Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Custom Web Application"
                    category="Web Development"
                  />
                </div>
              </TabsContent>
              <TabsContent value="marketing" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Social Media Campaign"
                    category="Digital Marketing"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="SEO Optimization"
                    category="Digital Marketing"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Email Marketing Campaign"
                    category="Digital Marketing"
                  />
                </div>
              </TabsContent>
              <TabsContent value="content" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Video Content Series"
                    category="Content Creation"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Blog Content Strategy"
                    category="Content Creation"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Podcast Production"
                    category="Content Creation"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-white">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with us.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <TestimonialCard
                quote="Hamduk Digital Hub transformed our entire brand identity. Their design team created a cohesive brand system that perfectly represents our values and has significantly increased our brand recognition."
                author="Sarah Johnson"
                position="CEO, TechStart Inc."
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The web development team delivered our e-commerce platform on time and exceeded our expectations. Our online sales have increased by 300% since the launch."
                author="Michael Chen"
                position="Founder, RetailPro"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Their digital marketing services completely transformed our online presence. We've seen a 250% increase in qualified leads and our ROI has never been better."
                author="Jessica Williams"
                position="Marketing Director, GrowthBrand"
                avatar="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest digital trends, tips, and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Transform Your Digital Presence?
                  </h2>
                  <p className="max-w-[600px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Let's discuss how our 100+ digital services across 10 categories can help your business grow and
                    succeed in the digital landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-foreground bg-transparent" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Palette className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Design</h3>
                    <p className="text-sm text-muted-foreground text-center">Branding & creative solutions</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Code className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-bold">Development</h3>
                    <p className="text-sm text-muted-foreground text-center">Web & app development</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <TrendingUp className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-bold">Marketing</h3>
                    <p className="text-sm text-muted-foreground text-center">Digital growth strategies</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <GraduationCap className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-sm text-muted-foreground text-center">Training & skill development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ServiceCard({ icon, title, description, serviceCount }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center justify-between">
          {icon}
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">{serviceCount}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

function PortfolioCard({ image, title, category }) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-200">{category}</p>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 bg-white/20 text-white border-white/40 hover:bg-white/30 w-fit"
        >
          View Project
          <Play className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, position, avatar }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <p className="italic text-muted-foreground">"{quote}"</p>
          </div>
          <div className="flex items-center space-x-4">
            <Image src={avatar || "/placeholder.svg"} alt={author} width={50} height={50} className="rounded-full" />
            <div>
              <h4 className="font-semibold">{author}</h4>
              <p className="text-sm text-muted-foreground">{position}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
