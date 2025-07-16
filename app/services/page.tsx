import Link from "next/link"
import {
  ArrowRight,
  Palette,
  Globe,
  TrendingUp,
  PenTool,
  ShoppingCart,
  GraduationCap,
  MessageSquare,
  Briefcase,
  Users,
  LayoutGrid,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
                  Explore our comprehensive range of over 100 digital services across 10 categories, designed to help
                  your business thrive in the digital landscape.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <Badge variant="secondary">100+ Services</Badge>
                <Badge variant="secondary">10 Categories</Badge>
                <Badge variant="secondary">Expert Team</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-30 w-full border-y bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <nav className="container flex overflow-x-auto py-4">
            <ul className="flex min-w-full flex-none gap-4 md:gap-6 text-sm">
              <li>
                <a href="#design-branding" className="font-medium hover:text-primary whitespace-nowrap">
                  Design & Branding
                </a>
              </li>
              <li>
                <a href="#web-app-development" className="font-medium hover:text-primary whitespace-nowrap">
                  Web & App Development
                </a>
              </li>
              <li>
                <a href="#digital-marketing" className="font-medium hover:text-primary whitespace-nowrap">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#content-creation" className="font-medium hover:text-primary whitespace-nowrap">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#digital-products" className="font-medium hover:text-primary whitespace-nowrap">
                  Digital Products
                </a>
              </li>
              <li>
                <a href="#education-training" className="font-medium hover:text-primary whitespace-nowrap">
                  Education & Training
                </a>
              </li>
              <li>
                <a href="#virtual-assistance" className="font-medium hover:text-primary whitespace-nowrap">
                  Virtual Assistance
                </a>
              </li>
              <li>
                <a href="#business-tech" className="font-medium hover:text-primary whitespace-nowrap">
                  Business & Tech
                </a>
              </li>
              <li>
                <a href="#community-platforms" className="font-medium hover:text-primary whitespace-nowrap">
                  Community & Platforms
                </a>
              </li>
              <li>
                <a href="#client-services" className="font-medium hover:text-primary whitespace-nowrap">
                  Client Services
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Design & Branding */}
        <section id="design-branding" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<Palette className="h-12 w-12 text-primary" />}
              title="Design & Branding"
              description="Complete visual identity solutions from logo design to comprehensive brand systems."
              serviceCount="15+ Services"
              services={[
                {
                  title: "Logo Design",
                  description: "Custom logo design that represents your brand identity and values.",
                  features: ["Multiple concepts", "Vector files", "Brand guidelines", "Unlimited revisions"],
                },
                {
                  title: "Full Brand Identity Kits",
                  description: "Comprehensive brand packages including logos, colors, typography, and guidelines.",
                  features: [
                    "Logo variations",
                    "Color palette",
                    "Typography system",
                    "Brand guidelines",
                    "Business card design",
                  ],
                },
                {
                  title: "Business Card & Stationery Design",
                  description: "Professional business cards, letterheads, and corporate stationery design.",
                  features: ["Business cards", "Letterheads", "Envelopes", "Invoice templates", "Print-ready files"],
                },
                {
                  title: "Social Media Graphics",
                  description: "Eye-catching graphics for all your social media platforms and campaigns.",
                  features: ["Post templates", "Story designs", "Cover photos", "Ad creatives", "Brand consistency"],
                },
                {
                  title: "Poster / Flyer / Brochure Design",
                  description: "Marketing materials that capture attention and communicate your message effectively.",
                  features: [
                    "Event posters",
                    "Marketing flyers",
                    "Tri-fold brochures",
                    "Product catalogs",
                    "Print optimization",
                  ],
                },
                {
                  title: "Pitch Deck / Presentation Design",
                  description: "Professional presentations that impress investors and clients.",
                  features: [
                    "Investor pitch decks",
                    "Sales presentations",
                    "Corporate templates",
                    "Infographic slides",
                    "Animation support",
                  ],
                },
                {
                  title: "UI Design (Web & Mobile)",
                  description: "User interface design for websites and mobile applications.",
                  features: ["Wireframing", "Visual design", "Responsive layouts", "Design systems", "Prototyping"],
                },
                {
                  title: "UX Auditing",
                  description: "Comprehensive user experience analysis and improvement recommendations.",
                  features: [
                    "Usability testing",
                    "User journey mapping",
                    "Conversion optimization",
                    "Accessibility audit",
                    "Detailed reports",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Web & App Development */}
        <section id="web-app-development" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<Globe className="h-12 w-12 text-primary" />}
              title="Web & App Development"
              description="Custom websites, web applications, and mobile apps built with modern technologies."
              serviceCount="15+ Services"
              services={[
                {
                  title: "Website Design & Development",
                  description: "Custom websites built with modern technologies and best practices.",
                  features: [
                    "Responsive design",
                    "SEO optimization",
                    "Fast loading",
                    "CMS integration",
                    "Analytics setup",
                  ],
                },
                {
                  title: "Landing Pages",
                  description: "High-converting landing pages optimized for your marketing campaigns.",
                  features: [
                    "Conversion optimization",
                    "A/B testing",
                    "Lead capture forms",
                    "Analytics tracking",
                    "Mobile responsive",
                  ],
                },
                {
                  title: "Web Apps (React / Next.js)",
                  description: "Modern web applications built with React and Next.js frameworks.",
                  features: [
                    "Server-side rendering",
                    "API integration",
                    "Database connectivity",
                    "Authentication",
                    "Performance optimization",
                  ],
                },
                {
                  title: "E-commerce Sites (Shopify / WooCommerce)",
                  description: "Complete e-commerce solutions with payment processing and inventory management.",
                  features: [
                    "Product catalogs",
                    "Payment gateways",
                    "Inventory management",
                    "Order processing",
                    "Customer accounts",
                  ],
                },
                {
                  title: "Mobile Apps (Flutter / React Native)",
                  description: "Cross-platform mobile applications for iOS and Android.",
                  features: [
                    "Native performance",
                    "Cross-platform compatibility",
                    "App store deployment",
                    "Push notifications",
                    "Offline functionality",
                  ],
                },
                {
                  title: "WordPress Customization",
                  description: "Custom WordPress themes and plugins tailored to your needs.",
                  features: [
                    "Custom themes",
                    "Plugin development",
                    "Performance optimization",
                    "Security hardening",
                    "Maintenance",
                  ],
                },
                {
                  title: "Website Maintenance",
                  description: "Ongoing website maintenance, updates, and security monitoring.",
                  features: [
                    "Regular updates",
                    "Security monitoring",
                    "Backup management",
                    "Performance optimization",
                    "Content updates",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Digital Marketing */}
        <section id="digital-marketing" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<TrendingUp className="h-12 w-12 text-primary" />}
              title="Digital Marketing"
              description="Comprehensive digital marketing strategies to grow your online presence and drive results."
              serviceCount="13+ Services"
              services={[
                {
                  title: "Social Media Strategy & Management",
                  description: "Complete social media management across all major platforms.",
                  features: [
                    "Content planning",
                    "Community management",
                    "Engagement strategies",
                    "Analytics reporting",
                    "Brand consistency",
                  ],
                },
                {
                  title: "Facebook, Instagram & Google Ads",
                  description: "Targeted advertising campaigns that drive conversions and ROI.",
                  features: [
                    "Campaign setup",
                    "Audience targeting",
                    "Ad creative design",
                    "Performance optimization",
                    "ROI tracking",
                  ],
                },
                {
                  title: "SEO (Technical & Content)",
                  description: "Search engine optimization to improve your website's visibility and rankings.",
                  features: [
                    "Keyword research",
                    "On-page optimization",
                    "Technical SEO",
                    "Content optimization",
                    "Link building",
                  ],
                },
                {
                  title: "Email Marketing Campaigns",
                  description: "Automated email sequences and campaigns that nurture leads and drive sales.",
                  features: [
                    "Email automation",
                    "List segmentation",
                    "Template design",
                    "A/B testing",
                    "Performance analytics",
                  ],
                },
                {
                  title: "Funnel Building & Automation",
                  description: "Sales funnels and marketing automation to convert leads into customers.",
                  features: [
                    "Lead magnets",
                    "Sales sequences",
                    "Automation workflows",
                    "Conversion tracking",
                    "Optimization",
                  ],
                },
                {
                  title: "Conversion Rate Optimization",
                  description: "Optimize your website and campaigns for maximum conversions.",
                  features: [
                    "A/B testing",
                    "User behavior analysis",
                    "Landing page optimization",
                    "Form optimization",
                    "Performance tracking",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Content Creation */}
        <section id="content-creation" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<PenTool className="h-12 w-12 text-primary" />}
              title="Content Creation"
              description="High-quality content across all formats to engage your audience and drive results."
              serviceCount="14+ Services"
              services={[
                {
                  title: "Blog Writing",
                  description: "SEO-optimized blog posts that engage readers and drive organic traffic.",
                  features: [
                    "SEO optimization",
                    "Keyword research",
                    "Engaging content",
                    "Regular publishing",
                    "Performance tracking",
                  ],
                },
                {
                  title: "Video Editing (YouTube, IG Reels)",
                  description: "Professional video editing for social media and marketing campaigns.",
                  features: [
                    "Professional editing",
                    "Motion graphics",
                    "Color correction",
                    "Audio enhancement",
                    "Platform optimization",
                  ],
                },
                {
                  title: "Copywriting (Web, Ads, Product)",
                  description: "Persuasive copy that converts visitors into customers.",
                  features: ["Sales copy", "Ad copy", "Website content", "Product descriptions", "Email copy"],
                },
                {
                  title: "Podcast Production",
                  description: "Complete podcast production from recording to distribution.",
                  features: [
                    "Audio editing",
                    "Show notes",
                    "Thumbnail design",
                    "Distribution setup",
                    "Analytics tracking",
                  ],
                },
                {
                  title: "Scriptwriting (YouTube, TikTok)",
                  description: "Engaging scripts for video content that capture attention and drive engagement.",
                  features: [
                    "Hook creation",
                    "Storytelling",
                    "Call-to-actions",
                    "Platform optimization",
                    "Trend integration",
                  ],
                },
                {
                  title: "E-book Creation",
                  description: "Professional e-books for lead generation and thought leadership.",
                  features: [
                    "Content writing",
                    "Design layout",
                    "Interactive elements",
                    "Distribution formats",
                    "Marketing strategy",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Digital Products */}
        <section id="digital-products" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<ShoppingCart className="h-12 w-12 text-primary" />}
              title="Digital Product Development & Sales"
              description="Create and sell digital products that generate passive income for your business."
              serviceCount="10+ Services"
              services={[
                {
                  title: "Notion / Canva / Figma Templates",
                  description: "Professional templates for productivity and design tools.",
                  features: [
                    "Notion dashboards",
                    "Canva templates",
                    "Figma UI kits",
                    "Customizable designs",
                    "Commercial license",
                  ],
                },
                {
                  title: "UI Kits & Code Components",
                  description: "Ready-to-use UI components and code libraries for developers.",
                  features: [
                    "React components",
                    "Vue components",
                    "CSS frameworks",
                    "Documentation",
                    "Regular updates",
                  ],
                },
                {
                  title: "Digital Planners & Printable Packs",
                  description: "Digital planners and printables for productivity and organization.",
                  features: [
                    "Interactive planners",
                    "Printable designs",
                    "Multiple formats",
                    "Customizable layouts",
                    "Commercial rights",
                  ],
                },
                {
                  title: "Custom Illustrations",
                  description: "Unique illustrations and graphics for your brand and products.",
                  features: [
                    "Custom artwork",
                    "Vector illustrations",
                    "Character design",
                    "Icon sets",
                    "Brand consistency",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Education & Training */}
        <section id="education-training" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<GraduationCap className="h-12 w-12 text-primary" />}
              title="Education & Training"
              description="Comprehensive learning solutions to develop skills and advance careers."
              serviceCount="10+ Services"
              services={[
                {
                  title: "Online Courses",
                  description: "Comprehensive online courses with video lessons and practical exercises.",
                  features: [
                    "Video lessons",
                    "Practical exercises",
                    "Certificates",
                    "Community access",
                    "Lifetime updates",
                  ],
                },
                {
                  title: "Live Workshops",
                  description: "Interactive workshops with hands-on learning and real-time feedback.",
                  features: [
                    "Live instruction",
                    "Interactive exercises",
                    "Q&A sessions",
                    "Recording access",
                    "Follow-up support",
                  ],
                },
                {
                  title: "One-on-One Mentorship",
                  description: "Personalized mentorship programs tailored to individual goals.",
                  features: [
                    "Personal guidance",
                    "Custom curriculum",
                    "Regular check-ins",
                    "Goal tracking",
                    "Career advice",
                  ],
                },
                {
                  title: "Certification Programs",
                  description: "Industry-recognized certification programs to validate skills.",
                  features: [
                    "Structured curriculum",
                    "Practical projects",
                    "Industry certification",
                    "Career support",
                    "Alumni network",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Virtual Assistance */}
        <section id="virtual-assistance" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<MessageSquare className="h-12 w-12 text-primary" />}
              title="Virtual Assistance Services"
              description="Professional virtual assistance to help you focus on growing your business."
              serviceCount="13+ Services"
              services={[
                {
                  title: "Calendar / Schedule Management",
                  description: "Professional calendar management and appointment scheduling.",
                  features: [
                    "Appointment scheduling",
                    "Calendar coordination",
                    "Meeting preparation",
                    "Reminder systems",
                    "Time zone management",
                  ],
                },
                {
                  title: "Email Management",
                  description: "Efficient email management and customer communication.",
                  features: [
                    "Email sorting",
                    "Response templates",
                    "Follow-up systems",
                    "Customer support",
                    "Newsletter management",
                  ],
                },
                {
                  title: "CRM Data Entry & Lead Generation",
                  description: "CRM management and lead generation to grow your customer base.",
                  features: ["Data entry", "Lead research", "Contact management", "Pipeline tracking", "Reporting"],
                },
                {
                  title: "Social Media Scheduling",
                  description: "Social media content scheduling and community management.",
                  features: [
                    "Content scheduling",
                    "Community engagement",
                    "Hashtag research",
                    "Analytics reporting",
                    "Brand consistency",
                  ],
                },
                {
                  title: "Customer Support (Chat / Email)",
                  description: "Professional customer support across multiple channels.",
                  features: [
                    "Live chat support",
                    "Email support",
                    "Ticket management",
                    "Knowledge base",
                    "Customer satisfaction tracking",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Business & Tech Services */}
        <section id="business-tech" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<Briefcase className="h-12 w-12 text-primary" />}
              title="Business & Tech Services"
              description="Strategic business consulting and technical solutions to optimize operations."
              serviceCount="10+ Services"
              services={[
                {
                  title: "Business Plan Creation",
                  description: "Comprehensive business plans for startups and established businesses.",
                  features: [
                    "Market analysis",
                    "Financial projections",
                    "Strategy development",
                    "Investor-ready format",
                    "Regular updates",
                  ],
                },
                {
                  title: "Automations (Zapier, Make, APIs)",
                  description: "Business process automation to improve efficiency and reduce manual work.",
                  features: [
                    "Workflow automation",
                    "API integrations",
                    "Data synchronization",
                    "Custom solutions",
                    "Ongoing support",
                  ],
                },
                {
                  title: "Internal Dashboards & Trackers",
                  description: "Custom dashboards and tracking systems for business metrics.",
                  features: [
                    "KPI dashboards",
                    "Performance tracking",
                    "Real-time data",
                    "Custom reports",
                    "Mobile access",
                  ],
                },
                {
                  title: "SOPs & Company Wikis (Notion)",
                  description: "Standard operating procedures and knowledge management systems.",
                  features: [
                    "Process documentation",
                    "Team wikis",
                    "Training materials",
                    "Version control",
                    "Access management",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Community & Platforms */}
        <section id="community-platforms" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<Users className="h-12 w-12 text-primary" />}
              title="Community & Platforms"
              description="Build and manage online communities and platforms for your audience."
              serviceCount="9+ Services"
              services={[
                {
                  title: "Forum Setup & Management",
                  description: "Professional forum setup and ongoing community management.",
                  features: ["Forum installation", "Custom themes", "Moderation tools", "User management", "Analytics"],
                },
                {
                  title: "Private Membership Communities",
                  description: "Exclusive membership communities with gated content and features.",
                  features: [
                    "Membership tiers",
                    "Content gating",
                    "Payment integration",
                    "Member onboarding",
                    "Engagement tools",
                  ],
                },
                {
                  title: "Event Hosting (Webinars, Lives)",
                  description: "Professional event hosting and management services.",
                  features: [
                    "Event setup",
                    "Registration management",
                    "Live streaming",
                    "Recording services",
                    "Follow-up automation",
                  ],
                },
                {
                  title: "Creator Network Platforms",
                  description: "Platforms connecting creators with opportunities and collaborations.",
                  features: [
                    "Creator profiles",
                    "Matching algorithms",
                    "Project management",
                    "Payment processing",
                    "Rating systems",
                  ],
                },
              ]}
            />
          </div>
        </section>

        {/* Client Services & Systems */}
        <section id="client-services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <ServiceCategory
              icon={<LayoutGrid className="h-12 w-12 text-primary" />}
              title="Client Services & Systems"
              description="Streamline your client relationships with professional systems and processes."
              serviceCount="10+ Services"
              services={[
                {
                  title: "Client Onboarding Portals",
                  description: "Streamlined client onboarding with automated workflows and documentation.",
                  features: [
                    "Welcome sequences",
                    "Document collection",
                    "Project setup",
                    "Communication tools",
                    "Progress tracking",
                  ],
                },
                {
                  title: "CRM Setup & Management",
                  description: "Complete CRM implementation and management for better client relationships.",
                  features: [
                    "CRM configuration",
                    "Data migration",
                    "Workflow automation",
                    "Training",
                    "Ongoing support",
                  ],
                },
                {
                  title: "Invoicing & Billing Systems",
                  description: "Automated invoicing and billing systems for efficient payment processing.",
                  features: [
                    "Automated invoicing",
                    "Payment processing",
                    "Recurring billing",
                    "Tax calculations",
                    "Financial reporting",
                  ],
                },
                {
                  title: "Support Ticket Systems",
                  description: "Professional support ticket systems for efficient customer service.",
                  features: [
                    "Ticket management",
                    "Priority levels",
                    "Team assignment",
                    "Knowledge base",
                    "Performance metrics",
                  ],
                },
              ]}
            />
          </div>
        </section>

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
                <Button variant="outline" size="lg" className="border-primary-foreground bg-transparent" asChild>
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

function ServiceCategory({ icon, title, description, serviceCount, services }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-start">
      <div className="flex flex-col justify-center space-y-4 lg:sticky lg:top-32">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              {icon}
              <div>
                <CardTitle className="text-2xl">{title}</CardTitle>
                <Badge variant="secondary" className="mt-2">
                  {serviceCount}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{description}</p>
            <Button asChild>
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {services.map((service, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{service.title}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
