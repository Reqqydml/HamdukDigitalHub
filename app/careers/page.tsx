import Link from "next/link"
import { ArrowRight, MapPin, Clock, DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Build your career with a team that's passionate about digital innovation and client success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Work With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer more than just a job - we provide a platform for growth, learning, and making a real impact.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <BenefitCard
                title="Remote-First Culture"
                description="Work from anywhere in the world with flexible hours and a healthy work-life balance."
              />
              <BenefitCard
                title="Continuous Learning"
                description="Access to courses, conferences, and certifications to keep your skills cutting-edge."
              />
              <BenefitCard
                title="Competitive Benefits"
                description="Health insurance, retirement plans, and performance bonuses for all team members."
              />
              <BenefitCard
                title="Innovation Focus"
                description="Work with the latest technologies and contribute to groundbreaking projects."
              />
              <BenefitCard
                title="Collaborative Environment"
                description="Join a supportive team that values diverse perspectives and creative solutions."
              />
              <BenefitCard
                title="Career Growth"
                description="Clear advancement paths and mentorship opportunities to accelerate your career."
              />
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Open Positions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore our current job openings and find the perfect role for your skills and interests.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-12">
              <JobCard
                title="Senior Full-Stack Developer"
                department="Engineering"
                location="Remote"
                type="Full-time"
                salary="$80k - $120k"
                description="We're looking for an experienced full-stack developer to join our engineering team and help build cutting-edge web applications."
                requirements={["5+ years of experience", "React/Node.js expertise", "Database design skills"]}
              />
              <JobCard
                title="UI/UX Designer"
                department="Design"
                location="Remote"
                type="Full-time"
                salary="$60k - $90k"
                description="Join our design team to create beautiful, user-friendly interfaces for web and mobile applications."
                requirements={["3+ years of design experience", "Figma/Sketch proficiency", "Portfolio required"]}
              />
              <JobCard
                title="Digital Marketing Specialist"
                department="Marketing"
                location="Remote"
                type="Full-time"
                salary="$50k - $75k"
                description="Help our clients grow their online presence through strategic digital marketing campaigns."
                requirements={["2+ years marketing experience", "SEO/SEM knowledge", "Analytics expertise"]}
              />
              <JobCard
                title="Project Manager"
                department="Operations"
                location="Remote"
                type="Full-time"
                salary="$65k - $85k"
                description="Lead cross-functional teams to deliver exceptional digital solutions for our clients."
                requirements={["PMP certification preferred", "Agile methodology", "Client management skills"]}
              />
              <JobCard
                title="Content Creator"
                department="Marketing"
                location="Remote"
                type="Part-time"
                salary="$30k - $45k"
                description="Create engaging content for our blog, social media, and educational materials."
                requirements={["Strong writing skills", "Social media experience", "Video editing skills"]}
              />
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Application Process</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our hiring process is designed to be transparent, fair, and efficient.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <ProcessStep
                step="1"
                title="Apply Online"
                description="Submit your application through our careers page with your resume and portfolio."
              />
              <ProcessStep
                step="2"
                title="Initial Review"
                description="Our team reviews your application and reaches out within 3-5 business days."
              />
              <ProcessStep
                step="3"
                title="Interview Process"
                description="Participate in 2-3 interviews including technical and cultural fit assessments."
              />
              <ProcessStep
                step="4"
                title="Welcome Aboard"
                description="Receive your offer and join our onboarding program to get started."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Us?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't see a position that fits? Send us your resume anyway - we're always looking for talented people.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Send Your Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BenefitCard({ title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function JobCard({ title, department, location, type, salary, description, requirements }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{title}</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{type}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{salary}</span>
              </div>
            </div>
          </div>
          <Badge variant="outline">{department}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div>
          <h4 className="font-medium mb-2">Requirements:</h4>
          <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
            {requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </div>
        <Button className="w-full">Apply Now</Button>
      </CardContent>
    </Card>
  )
}

function ProcessStep({ step, title, description }) {
  return (
    <div className="text-center space-y-4">
      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto">
        {step}
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}
