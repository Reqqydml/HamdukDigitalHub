import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Code,
  Globe,
  Laptop,
  LayoutGrid,
  MessageSquare,
  Palette,
  PenTool,
  Play,
  Smartphone,
  Users,
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
                    Over 100 digital services to transform your business. From web development to branding, we've got
                    you covered.
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
                    <span>24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Satisfaction Guaranteed</span>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Services for Every Need</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our comprehensive range of digital services designed to help your business thrive in the
                  digital landscape.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <ServiceCard
                icon={<Globe className="h-8 w-8 text-primary" />}
                title="Web Development"
                description="Custom websites, e-commerce solutions, and web applications tailored to your business needs."
              />
              <ServiceCard
                icon={<Smartphone className="h-8 w-8 text-primary" />}
                title="App Development"
                description="Native and cross-platform mobile applications for iOS and Android devices."
              />
              <ServiceCard
                icon={<Palette className="h-8 w-8 text-primary" />}
                title="Branding & Design"
                description="Logo design, brand identity, and visual assets that make your brand stand out."
              />
              <ServiceCard
                icon={<MessageSquare className="h-8 w-8 text-primary" />}
                title="Virtual Assistance"
                description="Administrative support, customer service, and business operations assistance."
              />
              <ServiceCard
                icon={<PenTool className="h-8 w-8 text-primary" />}
                title="Content Creation"
                description="Engaging blog posts, articles, videos, and social media content for your audience."
              />
              <ServiceCard
                icon={<LayoutGrid className="h-8 w-8 text-primary" />}
                title="Digital Marketing"
                description="SEO, social media marketing, email campaigns, and PPC advertising strategies."
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

            <Tabs defaultValue="web" className="mt-12">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="web">Web</TabsTrigger>
                  <TabsTrigger value="app">App</TabsTrigger>
                  <TabsTrigger value="branding">Branding</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="web" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="E-commerce Platform"
                    category="Web Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Corporate Website"
                    category="Web Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Educational Portal"
                    category="Web Development"
                  />
                </div>
              </TabsContent>
              <TabsContent value="app" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Fitness Tracker App"
                    category="App Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Food Delivery App"
                    category="App Development"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Social Networking App"
                    category="App Development"
                  />
                </div>
              </TabsContent>
              <TabsContent value="branding" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Restaurant Rebrand"
                    category="Branding"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Tech Startup Identity"
                    category="Branding"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Fashion Brand Design"
                    category="Branding"
                  />
                </div>
              </TabsContent>
              <TabsContent value="marketing" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="SEO Campaign"
                    category="Digital Marketing"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Social Media Strategy"
                    category="Digital Marketing"
                  />
                  <PortfolioCard
                    image="/placeholder.svg?height=300&width=400"
                    title="Email Marketing Campaign"
                    category="Digital Marketing"
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
                quote="Hamduk Digital Hub transformed our online presence. Their web development team created a site that perfectly represents our brand and has significantly increased our conversions."
                author="Sarah Johnson"
                position="CEO, TechStart Inc."
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="The app development team at Hamduk delivered our project on time and exceeded our expectations. The app has been downloaded thousands of times with excellent reviews."
                author="Michael Chen"
                position="Product Manager, MobileFirst"
                avatar="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                quote="Their branding services completely revitalized our company image. We've seen a 40% increase in brand recognition since working with Hamduk Digital Hub."
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
                    Let's discuss how our 100+ digital services can help your business grow and succeed in the digital
                    landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="secondary" size="lg" asChild>
                    <Link href="/contact">
                      Get Started Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
                    <Link href="/services">View Services</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Code className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Web & App</h3>
                    <p className="text-sm text-muted-foreground text-center">Development solutions for all platforms</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Palette className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-bold">Design</h3>
                    <p className="text-sm text-muted-foreground text-center">Creative branding and UI/UX design</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Users className="h-8 w-8 text-secondary" />
                    <h3 className="text-xl font-bold">Marketing</h3>
                    <p className="text-sm text-muted-foreground text-center">Digital strategies that drive growth</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-4 text-foreground">
                    <Laptop className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Education</h3>
                    <p className="text-sm text-muted-foreground text-center">Online courses and training programs</p>
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

function ServiceCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
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
