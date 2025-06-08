import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Insights Blog</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest trends, tips, and insights in digital technology and business growth.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <div className="flex space-x-2">
                  <Input placeholder="Search articles..." />
                  <Button>Search</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Article</h2>
            </div>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Featured Article"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="space-y-4">
                    <Badge>Featured</Badge>
                    <h3 className="text-2xl font-bold">The Future of Web Development: Trends to Watch in 2025</h3>
                    <p className="text-muted-foreground">
                      Explore the emerging technologies and methodologies that will shape web development in the coming
                      year, from AI integration to new frameworks and tools.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>Sarah Johnson</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Dec 10, 2024</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>8 min read</span>
                      </div>
                    </div>
                    <Button asChild>
                      <Link href="/blog/future-of-web-development">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Recent Articles</h2>
              <Button variant="outline">View All Articles</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="10 Essential UI/UX Design Principles for 2025"
                excerpt="Learn the fundamental design principles that will help you create better user experiences in the modern digital landscape."
                author="Mike Chen"
                date="Dec 8, 2024"
                readTime="6 min read"
                category="Design"
              />
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="Building Scalable React Applications: Best Practices"
                excerpt="Discover proven strategies for building React applications that can grow with your business needs."
                author="Emily Davis"
                date="Dec 5, 2024"
                readTime="12 min read"
                category="Development"
              />
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="Digital Marketing ROI: How to Measure Success"
                excerpt="Learn how to track and measure the return on investment for your digital marketing campaigns effectively."
                author="David Wilson"
                date="Dec 3, 2024"
                readTime="9 min read"
                category="Marketing"
              />
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="The Rise of AI in Web Development"
                excerpt="Explore how artificial intelligence is transforming the way we build and maintain websites."
                author="Lisa Brown"
                date="Nov 30, 2024"
                readTime="7 min read"
                category="Technology"
              />
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="Mobile-First Design: Why It Matters More Than Ever"
                excerpt="Understanding the importance of mobile-first design in today's smartphone-dominated world."
                author="Alex Rodriguez"
                date="Nov 28, 2024"
                readTime="5 min read"
                category="Design"
              />
              <BlogCard
                image="/placeholder.svg?height=200&width=400"
                title="E-commerce Conversion Optimization Strategies"
                excerpt="Proven techniques to increase your online store's conversion rates and boost sales."
                author="Jessica Williams"
                date="Nov 25, 2024"
                readTime="11 min read"
                category="E-commerce"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Browse by Category</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find articles that match your interests and expertise level.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
              <CategoryCard title="Web Development" count={45} />
              <CategoryCard title="Mobile Apps" count={32} />
              <CategoryCard title="UI/UX Design" count={28} />
              <CategoryCard title="Digital Marketing" count={38} />
              <CategoryCard title="E-commerce" count={22} />
              <CategoryCard title="Technology" count={41} />
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter and never miss the latest insights and tips from our experts.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" className="bg-white text-foreground" />
                  <Button variant="secondary">Subscribe</Button>
                </div>
                <p className="text-xs opacity-75">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BlogCard({ image, title, excerpt, author, date, readTime, category }) {
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
          <Badge className="absolute top-2 left-2" variant="secondary">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-bold line-clamp-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
          <Button variant="outline" className="w-full">
            Read More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function CategoryCard({ title, count }) {
  return (
    <Card className="transition-all hover:shadow-lg cursor-pointer">
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{count} articles</p>
      </CardContent>
    </Card>
  )
}
