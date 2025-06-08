import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Calendar, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Hamduk Digital Hub</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We're a passionate team of digital experts dedicated to transforming businesses through innovative
                    technology solutions and creative excellence.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/contact">
                      Work With Us
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/careers">View Careers</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="About Us"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
                      Our Mission
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">Empowering Digital Success</h2>
                    <p className="text-muted-foreground">
                      To democratize access to high-quality digital services and education, enabling businesses and
                      individuals to thrive in the digital economy through innovative solutions, expert guidance, and
                      continuous learning opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-white">
                      Our Vision
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter">Leading Digital Transformation</h2>
                    <p className="text-muted-foreground">
                      To become the world's most trusted digital hub, where businesses of all sizes can access
                      comprehensive digital solutions, learn cutting-edge skills, and connect with a global community of
                      digital innovators.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Impact</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Numbers that showcase our commitment to excellence and client success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground text-center">Projects Completed</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground text-center">Countries Served</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground text-center">Students Trained</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground text-center">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The talented individuals behind Hamduk Digital Hub's success.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Ahmed Hamduk"
                position="Founder & CEO"
                bio="Visionary leader with 15+ years in digital transformation and business strategy."
              />
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Sarah Johnson"
                position="Head of Development"
                bio="Full-stack developer and technical architect with expertise in modern web technologies."
              />
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Michael Chen"
                position="Creative Director"
                bio="Award-winning designer specializing in brand identity and user experience design."
              />
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Emily Davis"
                position="Marketing Director"
                bio="Digital marketing strategist with proven track record in growth and customer acquisition."
              />
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="David Wilson"
                position="Head of Education"
                bio="Educational technology expert and curriculum developer with passion for online learning."
              />
              <TeamMember
                image="/placeholder.svg?height=300&width=300"
                name="Lisa Brown"
                position="Operations Manager"
                bio="Operations specialist ensuring smooth project delivery and exceptional client experience."
              />
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Journey</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From humble beginnings to becoming a leading digital solutions provider.
                </p>
              </div>
            </div>
            <div className="mt-12 space-y-8">
              <TimelineItem
                year="2018"
                title="Company Founded"
                description="Ahmed Hamduk founded Hamduk Digital Hub with a vision to democratize digital services."
              />
              <TimelineItem
                year="2019"
                title="First 100 Clients"
                description="Reached our first milestone of serving 100 satisfied clients across various industries."
              />
              <TimelineItem
                year="2020"
                title="Online Education Launch"
                description="Launched our comprehensive online learning platform with expert-led courses."
              />
              <TimelineItem
                year="2021"
                title="Global Expansion"
                description="Expanded operations to serve clients in over 25 countries worldwide."
              />
              <TimelineItem
                year="2022"
                title="Community Platform"
                description="Introduced our community hub connecting digital professionals globally."
              />
              <TimelineItem
                year="2023"
                title="Digital Marketplace"
                description="Launched our digital product marketplace featuring premium templates and tools."
              />
              <TimelineItem
                year="2024"
                title="AI Integration"
                description="Integrated AI-powered tools to enhance our service delivery and client experience."
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  The principles that guide everything we do.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              <ValueCard
                icon={<Award className="h-8 w-8 text-primary" />}
                title="Excellence"
                description="We strive for excellence in every project, delivering solutions that exceed expectations."
              />
              <ValueCard
                icon={<Users className="h-8 w-8 text-primary" />}
                title="Collaboration"
                description="We believe in the power of collaboration, working closely with clients and team members."
              />
              <ValueCard
                icon={<Calendar className="h-8 w-8 text-primary" />}
                title="Innovation"
                description="We embrace innovation, constantly exploring new technologies and methodologies."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Work Together?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how we can help transform your digital presence and achieve your business goals.
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
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function TeamMember({ image, name, position, bio }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Image src={image || "/placeholder.svg"} alt={name} width={150} height={150} className="rounded-full" />
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-primary font-medium">{position}</p>
            <p className="text-sm text-muted-foreground">{bio}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function TimelineItem({ year, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 bg-primary rounded-full"></div>
        <div className="w-px h-16 bg-border"></div>
      </div>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <Badge variant="outline">{year}</Badge>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
