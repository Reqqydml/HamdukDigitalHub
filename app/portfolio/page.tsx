import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Eye } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our latest projects and see how we've helped businesses transform their digital presence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList>
                  <TabsTrigger value="all">All Projects</TabsTrigger>
                  <TabsTrigger value="web">Web Development</TabsTrigger>
                  <TabsTrigger value="app">App Development</TabsTrigger>
                  <TabsTrigger value="branding">Branding</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="TechStart E-commerce Platform"
                    category="Web Development"
                    description="Complete e-commerce solution with custom features and integrations"
                    tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FitTracker Mobile App"
                    category="App Development"
                    description="Cross-platform fitness tracking app with social features"
                    tags={["React Native", "Firebase", "Redux", "Charts"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="GreenEarth Brand Identity"
                    category="Branding"
                    description="Complete brand identity for sustainable products company"
                    tags={["Logo Design", "Brand Guidelines", "Print Design"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="HealthCare Dashboard"
                    category="Web Development"
                    description="Patient management system with real-time analytics"
                    tags={["Vue.js", "Python", "PostgreSQL", "Charts"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FoodDelivery App"
                    category="App Development"
                    description="On-demand food delivery app with real-time tracking"
                    tags={["Flutter", "Firebase", "Maps API", "Payments"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FinTech Marketing Campaign"
                    category="Marketing"
                    description="Digital marketing campaign that increased conversions by 300%"
                    tags={["SEO", "PPC", "Social Media", "Analytics"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="web" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="TechStart E-commerce Platform"
                    category="Web Development"
                    description="Complete e-commerce solution with custom features and integrations"
                    tags={["React", "Node.js", "MongoDB", "Stripe"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="HealthCare Dashboard"
                    category="Web Development"
                    description="Patient management system with real-time analytics"
                    tags={["Vue.js", "Python", "PostgreSQL", "Charts"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="Educational Portal"
                    category="Web Development"
                    description="Online learning platform with video streaming and assessments"
                    tags={["Next.js", "Prisma", "Video API", "Payments"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="app" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FitTracker Mobile App"
                    category="App Development"
                    description="Cross-platform fitness tracking app with social features"
                    tags={["React Native", "Firebase", "Redux", "Charts"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FoodDelivery App"
                    category="App Development"
                    description="On-demand food delivery app with real-time tracking"
                    tags={["Flutter", "Firebase", "Maps API", "Payments"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="Social Networking App"
                    category="App Development"
                    description="Social platform for creative professionals"
                    tags={["Swift", "Kotlin", "WebSocket", "Media"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="branding" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="GreenEarth Brand Identity"
                    category="Branding"
                    description="Complete brand identity for sustainable products company"
                    tags={["Logo Design", "Brand Guidelines", "Print Design"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="TechStartup Rebrand"
                    category="Branding"
                    description="Modern rebrand for AI technology startup"
                    tags={["Logo Design", "Web Design", "Marketing Materials"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="Restaurant Brand Package"
                    category="Branding"
                    description="Complete brand identity for upscale restaurant chain"
                    tags={["Logo", "Menu Design", "Signage", "Packaging"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="FinTech Marketing Campaign"
                    category="Marketing"
                    description="Digital marketing campaign that increased conversions by 300%"
                    tags={["SEO", "PPC", "Social Media", "Analytics"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="E-commerce Growth Strategy"
                    category="Marketing"
                    description="Comprehensive growth strategy for online retailer"
                    tags={["Email Marketing", "Conversion Optimization", "Retargeting"]}
                  />
                  <PortfolioItem
                    image="/placeholder.svg?height=400&width=600"
                    title="SaaS Content Marketing"
                    category="Marketing"
                    description="Content strategy that generated 500% increase in organic traffic"
                    tags={["Content Strategy", "SEO", "Lead Generation"]}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Project?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's create something amazing together. Contact us to discuss your project requirements.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function PortfolioItem({ image, title, category, description, tags }) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
            <Button size="sm" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Badge variant="outline">{category}</Badge>
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
