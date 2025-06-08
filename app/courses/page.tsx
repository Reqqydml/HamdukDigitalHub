import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Learning Hub</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Master digital skills with our comprehensive online courses. Learn at your own pace with expert
                  instructors and hands-on projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="w-full py-8 bg-background border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <Input placeholder="Search courses..." className="w-full md:w-64" />
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="app-development">App Development</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-muted-foreground">Showing 24 of 156 courses</div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="Complete Web Development Bootcamp"
                instructor="John Smith"
                rating={4.8}
                students={2543}
                duration="40 hours"
                level="Beginner"
                price="$99"
                description="Learn HTML, CSS, JavaScript, React, and Node.js from scratch. Build real-world projects and become a full-stack developer."
              />
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="Mobile App Development with React Native"
                instructor="Sarah Johnson"
                rating={4.9}
                students={1876}
                duration="35 hours"
                level="Intermediate"
                price="$129"
                description="Build cross-platform mobile apps for iOS and Android using React Native. Includes deployment to app stores."
              />
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="UI/UX Design Fundamentals"
                instructor="Mike Chen"
                rating={4.7}
                students={3421}
                duration="25 hours"
                level="Beginner"
                price="$79"
                description="Master the principles of user interface and user experience design. Create beautiful and functional designs."
              />
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="Digital Marketing Mastery"
                instructor="Emily Davis"
                rating={4.8}
                students={2987}
                duration="30 hours"
                level="Intermediate"
                price="$89"
                description="Learn SEO, social media marketing, email marketing, and PPC advertising to grow your business online."
              />
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="Python Programming for Beginners"
                instructor="David Wilson"
                rating={4.9}
                students={4532}
                duration="45 hours"
                level="Beginner"
                price="$69"
                description="Start your programming journey with Python. Learn syntax, data structures, and build practical projects."
              />
              <CourseCard
                image="/placeholder.svg?height=200&width=400"
                title="Advanced JavaScript & ES6+"
                instructor="Lisa Brown"
                rating={4.8}
                students={1654}
                duration="28 hours"
                level="Advanced"
                price="$119"
                description="Master modern JavaScript features, async programming, and advanced concepts for professional development."
              />
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More Courses</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Learning Today</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of students who have transformed their careers with our expert-led courses.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/courses">
                    Browse All Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
                  <Link href="/contact">Get Help Choosing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function CourseCard({ image, title, instructor, rating, students, duration, level, price, description }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-secondary">{level}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          <p className="text-sm text-muted-foreground">by {instructor}</p>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>{students}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="text-2xl font-bold">{price}</div>
        <Button asChild>
          <Link href={`/courses/${title.toLowerCase().replace(/\s+/g, "-")}`}>Enroll Now</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
