import Link from "next/link"
import { ArrowRight, Quote, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear what our clients have to say about their experience working with Hamduk Digital Hub.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center space-y-6 text-center">
                  <Quote className="h-12 w-12 text-primary" />
                  <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed">
                    "Hamduk Digital Hub completely transformed our online presence. Their team's expertise in web
                    development and digital marketing helped us increase our revenue by 250% in just six months."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-lg">Sarah Johnson</p>
                      <p className="text-muted-foreground">CEO, TechStart Inc.</p>
                      <div className="flex items-center mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="The mobile app they developed for us exceeded all expectations. The user experience is fantastic and our customers love it."
                author="Michael Chen"
                position="Product Manager, MobileFirst"
                company="MobileFirst"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="Their branding services completely revitalized our company image. We've seen a 40% increase in brand recognition."
                author="Jessica Williams"
                position="Marketing Director"
                company="GrowthBrand"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="Professional, reliable, and incredibly talented. They delivered our e-commerce platform on time and within budget."
                author="David Rodriguez"
                position="Founder"
                company="ShopSmart"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="The digital marketing campaign they created generated more leads than we've ever seen. Highly recommended!"
                author="Emily Davis"
                position="Business Owner"
                company="LocalBiz"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="Their team's expertise in UI/UX design helped us create a product that our users absolutely love."
                author="Alex Thompson"
                position="CTO"
                company="InnovateTech"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="From concept to launch, they guided us through every step. The final product exceeded our expectations."
                author="Lisa Brown"
                position="Operations Manager"
                company="ServicePro"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="Their virtual assistance services have been a game-changer for our business operations and productivity."
                author="Robert Wilson"
                position="CEO"
                company="ScaleUp"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="The content creation team helped us establish a strong online presence and engage our target audience effectively."
                author="Maria Garcia"
                position="Marketing Manager"
                company="ContentCorp"
                rating={5}
                avatar="/placeholder.svg"
              />
              <TestimonialCard
                quote="Their educational courses helped our team upskill and stay current with the latest digital trends."
                author="James Miller"
                position="HR Director"
                company="TechTeam"
                rating={5}
                avatar="/placeholder.svg"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Businesses Worldwide</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our commitment to excellence is reflected in our client satisfaction rates.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground text-center">Happy Clients</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground text-center">Satisfaction Rate</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">4.9/5</div>
                <div className="text-sm text-muted-foreground text-center">Average Rating</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-4xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground text-center">Repeat Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Our Success Stories?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's work together to create your own success story. Contact us today to get started.
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

function TestimonialCard({ quote, author, position, company, rating, avatar }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6 h-full flex flex-col">
        <div className="flex-1 space-y-4">
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <blockquote className="text-muted-foreground italic">"{quote}"</blockquote>
        </div>
        <div className="flex items-center space-x-4 mt-6">
          <Avatar>
            <AvatarImage src={avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{position}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
