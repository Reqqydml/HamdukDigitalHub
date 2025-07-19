import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  Code,
  TrendingUp,
  PenTool,
  Package,
  GraduationCap,
  Users,
  Settings,
  MessageCircle,
  Briefcase,
  Sparkles,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Careers - Join Our Team | Hamduk Digital Hub",
  description:
    "Join our dynamic team at Hamduk Digital Hub. We're hiring talented professionals across design, development, marketing, and more. Competitive salaries in Naira.",
}

const departments = [
  {
    id: "design-branding",
    name: "Design & Branding",
    icon: Palette,
    color: "bg-purple-100 text-purple-800 border-purple-200",
    description: "Create stunning visuals and brand experiences",
    positions: [
      {
        title: "Graphic Designer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "UI/UX Designer",
        level: "Junior-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦800,000",
        urgent: true,
      },
      {
        title: "Brand Identity Designer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦700,000",
        urgent: false,
      },
      {
        title: "Presentation Designer",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦250,000 - ₦500,000",
        urgent: false,
      },
    ],
  },
  {
    id: "web-app-development",
    name: "Web & App Development",
    icon: Code,
    color: "bg-blue-100 text-blue-800 border-blue-200",
    description: "Build cutting-edge web and mobile applications",
    positions: [
      {
        title: "Frontend Developer (React, Next.js)",
        level: "Junior-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦900,000",
        urgent: true,
      },
      {
        title: "Backend Developer (Node.js, Supabase)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦500,000 - ₦1,000,000",
        urgent: true,
      },
      {
        title: "Fullstack Developer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦600,000 - ₦1,200,000",
        urgent: false,
      },
      {
        title: "Mobile App Developer (Flutter/React Native)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦500,000 - ₦1,000,000",
        urgent: false,
      },
      {
        title: "WordPress Developer",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "Webflow Developer",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦350,000 - ₦650,000",
        urgent: false,
      },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    icon: TrendingUp,
    color: "bg-green-100 text-green-800 border-green-200",
    description: "Drive growth through strategic digital marketing",
    positions: [
      {
        title: "Digital Marketing Strategist",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦800,000",
        urgent: true,
      },
      {
        title: "Social Media Manager",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦250,000 - ₦500,000",
        urgent: false,
      },
      {
        title: "SEO Specialist",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦700,000",
        urgent: false,
      },
      {
        title: "Paid Ads Specialist (Google/Facebook)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦750,000",
        urgent: true,
      },
      {
        title: "Email Marketing Specialist",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "Content & Funnel Strategist",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦450,000 - ₦850,000",
        urgent: false,
      },
    ],
  },
  {
    id: "content-creation",
    name: "Content Creation",
    icon: PenTool,
    color: "bg-orange-100 text-orange-800 border-orange-200",
    description: "Create compelling content across all platforms",
    positions: [
      {
        title: "Content Writer / Blog Writer",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦250,000 - ₦500,000",
        urgent: false,
      },
      {
        title: "Technical Writer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦750,000",
        urgent: true,
      },
      {
        title: "Copywriter (Ads, Landing Pages)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦700,000",
        urgent: false,
      },
      {
        title: "Scriptwriter (Video/TikTok/YouTube)",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "Video Editor",
        level: "Junior-Senior",
        type: "Full-time",
        salary: "₦300,000 - ₦700,000",
        urgent: true,
      },
      {
        title: "Podcast Editor / Audio Engineer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦650,000",
        urgent: false,
      },
      {
        title: "Voiceover Artist",
        level: "Junior-Senior",
        type: "Freelance",
        salary: "₦50,000 - ₦200,000/project",
        urgent: false,
      },
    ],
  },
  {
    id: "digital-products",
    name: "Digital Products",
    icon: Package,
    color: "bg-pink-100 text-pink-800 border-pink-200",
    description: "Design and create digital products and templates",
    positions: [
      {
        title: "Template Designer (Notion/Canva)",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "Product Pack Creator",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦750,000",
        urgent: false,
      },
      {
        title: "UI Kit Designer (Figma)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦450,000 - ₦800,000",
        urgent: false,
      },
    ],
  },
  {
    id: "education-training",
    name: "Education & Training",
    icon: GraduationCap,
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
    description: "Share knowledge and train the next generation",
    positions: [
      {
        title: "Course Instructor (Tech, Design, Business)",
        level: "Senior-Lead",
        type: "Part-time",
        salary: "₦500,000 - ₦1,000,000",
        urgent: true,
      },
      {
        title: "Curriculum Developer",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦800,000",
        urgent: false,
      },
      {
        title: "Mentorship Coordinator",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦650,000",
        urgent: false,
      },
      {
        title: "Workshop Facilitator",
        level: "Mid-Senior",
        type: "Part-time",
        salary: "₦100,000 - ₦300,000/month",
        urgent: false,
      },
    ],
  },
  {
    id: "virtual-assistance",
    name: "Virtual Assistance",
    icon: Users,
    color: "bg-teal-100 text-teal-800 border-teal-200",
    description: "Provide exceptional support and assistance",
    positions: [
      {
        title: "Virtual Assistant",
        level: "Entry-Mid",
        type: "Full-time",
        salary: "₦200,000 - ₦450,000",
        urgent: true,
      },
      {
        title: "Customer Support Representative",
        level: "Entry-Junior",
        type: "Full-time",
        salary: "₦180,000 - ₦350,000",
        urgent: true,
      },
      {
        title: "CRM/Data Entry Specialist",
        level: "Entry-Junior",
        type: "Full-time",
        salary: "₦200,000 - ₦400,000",
        urgent: false,
      },
      {
        title: "Project Assistant",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦250,000 - ₦500,000",
        urgent: false,
      },
    ],
  },
  {
    id: "business-tech",
    name: "Business & Tech",
    icon: Settings,
    color: "bg-gray-100 text-gray-800 border-gray-200",
    description: "Drive business growth through technology solutions",
    positions: [
      {
        title: "Business Analyst",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦500,000 - ₦900,000",
        urgent: false,
      },
      {
        title: "Tech Consultant",
        level: "Senior-Lead",
        type: "Full-time",
        salary: "₦700,000 - ₦1,500,000",
        urgent: true,
      },
      {
        title: "Automation Expert (Zapier, Make)",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦450,000 - ₦850,000",
        urgent: false,
      },
      {
        title: "Notion Consultant",
        level: "Mid-Senior",
        type: "Part-time",
        salary: "₦300,000 - ₦600,000",
        urgent: false,
      },
      {
        title: "Client Success Manager",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦800,000",
        urgent: true,
      },
    ],
  },
  {
    id: "community-platforms",
    name: "Community & Platforms",
    icon: MessageCircle,
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    description: "Build and manage thriving communities",
    positions: [
      {
        title: "Community Manager",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦300,000 - ₦600,000",
        urgent: true,
      },
      {
        title: "Forum Moderator",
        level: "Entry-Junior",
        type: "Part-time",
        salary: "₦100,000 - ₦250,000",
        urgent: false,
      },
      {
        title: "Platform Support Specialist",
        level: "Junior-Mid",
        type: "Full-time",
        salary: "₦250,000 - ₦500,000",
        urgent: false,
      },
      {
        title: "Live Event Host / Coordinator",
        level: "Mid-Senior",
        type: "Part-time",
        salary: "₦200,000 - ₦400,000",
        urgent: false,
      },
    ],
  },
  {
    id: "admin-operations",
    name: "Admin & Operations",
    icon: Briefcase,
    color: "bg-red-100 text-red-800 border-red-200",
    description: "Keep operations running smoothly",
    positions: [
      {
        title: "HR & Talent Recruiter",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦400,000 - ₦750,000",
        urgent: true,
      },
      {
        title: "Operations Assistant",
        level: "Entry-Junior",
        type: "Full-time",
        salary: "₦200,000 - ₦400,000",
        urgent: false,
      },
      {
        title: "Administrative Support Officer",
        level: "Entry-Junior",
        type: "Full-time",
        salary: "₦180,000 - ₦350,000",
        urgent: false,
      },
      {
        title: "Internship Program Coordinator",
        level: "Mid-Senior",
        type: "Full-time",
        salary: "₦350,000 - ₦650,000",
        urgent: false,
      },
    ],
  },
  {
    id: "internships",
    name: "Internships",
    icon: Sparkles,
    color: "bg-emerald-100 text-emerald-800 border-emerald-200",
    description: "Start your career journey with us",
    positions: [
      {
        title: "Frontend Developer Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦50,000 - ₦100,000/month",
        urgent: true,
      },
      {
        title: "Backend Developer Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦50,000 - ₦100,000/month",
        urgent: true,
      },
      {
        title: "Design Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦40,000 - ₦80,000/month",
        urgent: false,
      },
      {
        title: "Content Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦30,000 - ₦60,000/month",
        urgent: false,
      },
      {
        title: "Digital Marketing Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦35,000 - ₦70,000/month",
        urgent: false,
      },
      {
        title: "Virtual Assistant Intern",
        level: "Entry",
        type: "Internship",
        salary: "₦25,000 - ₦50,000/month",
        urgent: true,
      },
    ],
  },
]

export default function CareersPage() {
  const totalPositions = departments.reduce((acc, dept) => acc + dept.positions.length, 0)
  const urgentPositions = departments.reduce((acc, dept) => acc + dept.positions.filter((pos) => pos.urgent).length, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Briefcase className="h-4 w-4" />
            We're Hiring - {totalPositions}+ Open Positions
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Join Our <span className="text-blue-600">Amazing Team</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build your career with Nigeria's leading digital agency. We offer competitive salaries, remote work options,
            and opportunities to work on exciting projects with global clients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="#positions">View Open Positions</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalPositions}+</div>
              <div className="text-gray-600">Open Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{urgentPositions}</div>
              <div className="text-gray-600">Urgent Hiring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">11</div>
              <div className="text-gray-600">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Hamduk Digital Hub?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just a workplace - we're a community of innovators, creators, and problem-solvers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Competitive Salaries</h3>
              <p className="text-gray-600">Fair compensation in Naira with regular reviews and bonuses</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Remote-First</h3>
              <p className="text-gray-600">Work from anywhere in Nigeria with flexible schedules</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning & Growth</h3>
              <p className="text-gray-600">Continuous learning opportunities and career advancement</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
              <p className="text-gray-600">Flexible hours and time off to recharge and grow</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect role across our diverse departments. All positions offer competitive Naira salaries and
              growth opportunities.
            </p>
          </div>

          <div className="space-y-12">
            {departments.map((department) => (
              <div key={department.id} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${department.color}`}>
                    <department.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{department.name}</h3>
                    <p className="text-gray-600">{department.description}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto">
                    {department.positions.length} positions
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {department.positions.map((position, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{position.title}</CardTitle>
                            <CardDescription className="space-y-1">
                              <div className="flex items-center gap-2 text-sm">
                                <Badge variant="outline" className="text-xs">
                                  {position.level}
                                </Badge>
                                <Badge variant="outline" className="text-xs">
                                  {position.type}
                                </Badge>
                              </div>
                            </CardDescription>
                          </div>
                          {position.urgent && <Badge className="bg-red-100 text-red-800 border-red-200">Urgent</Badge>}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <DollarSign className="h-4 w-4" />
                            <span className="font-medium">{position.salary}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>Remote/Hybrid Available</span>
                          </div>
                          <Button asChild className="w-full">
                            <Link
                              href={`/careers/apply?position=${encodeURIComponent(position.title)}&department=${encodeURIComponent(department.name)}`}
                            >
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't see the perfect role? We're always looking for talented individuals. Send us your resume and let's
            talk!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/careers/apply">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="/contact">Contact HR</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
