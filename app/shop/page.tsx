import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Filter, Search, ShoppingCart, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

export default function ShopPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Digital Shop</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Premium digital products, templates, and tools to accelerate your business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="w-full py-8 bg-background border-b">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search products..." className="pl-10 w-full md:w-64" />
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="templates">Templates</SelectItem>
                    <SelectItem value="graphics">Graphics</SelectItem>
                    <SelectItem value="tools">Tools & Software</SelectItem>
                    <SelectItem value="courses">Courses</SelectItem>
                    <SelectItem value="ebooks">E-books</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="free">Free</SelectItem>
                    <SelectItem value="under-25">Under $25</SelectItem>
                    <SelectItem value="25-50">$25 - $50</SelectItem>
                    <SelectItem value="50-100">$50 - $100</SelectItem>
                    <SelectItem value="over-100">Over $100</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">Showing 48 of 156 products</div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Featured Products</h2>
              <Button variant="outline" asChild>
                <Link href="/shop/featured">View All Featured</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Premium Website Template Bundle"
                description="10 modern, responsive website templates for various industries"
                price="$89"
                originalPrice="$149"
                rating={4.9}
                reviews={234}
                badge="Bestseller"
                category="Templates"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Social Media Graphics Pack"
                description="500+ Instagram, Facebook, and Twitter graphics templates"
                price="$39"
                rating={4.8}
                reviews={156}
                badge="New"
                category="Graphics"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="SEO Audit Tool Pro"
                description="Comprehensive SEO analysis and optimization tool"
                price="$79"
                rating={4.7}
                reviews={89}
                category="Tools"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Digital Marketing Masterclass"
                description="Complete course on modern digital marketing strategies"
                price="$199"
                originalPrice="$299"
                rating={4.9}
                reviews={445}
                badge="Popular"
                category="Courses"
              />
            </div>
          </div>
        </section>

        {/* All Products */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-8">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="E-commerce Store Template"
                description="Modern, conversion-optimized online store template"
                price="$59"
                rating={4.8}
                reviews={123}
                category="Templates"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Logo Design Kit"
                description="Professional logo templates and design elements"
                price="$29"
                rating={4.6}
                reviews={78}
                category="Graphics"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Project Management Dashboard"
                description="Complete dashboard template for project tracking"
                price="$49"
                rating={4.7}
                reviews={92}
                category="Templates"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Content Calendar Template"
                description="Social media content planning and scheduling template"
                price="$19"
                rating={4.5}
                reviews={156}
                category="Tools"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Brand Guidelines Template"
                description="Professional brand identity guidelines template"
                price="$39"
                rating={4.8}
                reviews={67}
                category="Templates"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Email Marketing Templates"
                description="20 responsive email newsletter templates"
                price="$25"
                rating={4.6}
                reviews={134}
                category="Templates"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Analytics Dashboard UI Kit"
                description="Complete UI kit for analytics and data visualization"
                price="$69"
                rating={4.9}
                reviews={89}
                category="Graphics"
              />
              <ProductCard
                image="/placeholder.svg?height=200&width=300"
                title="Freelancer Business Kit"
                description="Complete business toolkit for freelancers and consultants"
                price="$99"
                originalPrice="$149"
                rating={4.8}
                reviews={203}
                badge="Bundle"
                category="Tools"
              />
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button variant="outline">Load More Products</Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Something Custom?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Can't find what you're looking for? Our team can create custom digital products tailored to your
                  specific needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Request Custom Product
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

function ProductCard({ image, title, description, price, originalPrice, rating, reviews, badge, category }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {badge && <Badge className="absolute top-2 left-2 bg-secondary text-white">{badge}</Badge>}
          <Badge variant="outline" className="absolute top-2 right-2 bg-background">
            {category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-bold line-clamp-1">{title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span>{rating}</span>
            </div>
            <span className="text-muted-foreground">({reviews} reviews)</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold">{price}</span>
          {originalPrice && <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>}
        </div>
        <Button size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
