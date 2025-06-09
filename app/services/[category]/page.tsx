import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { serviceCategories } from "@/lib/services-data"

export async function generateStaticParams() {
  return serviceCategories.map((category) => ({
    category: category.slug,
  }))
}

export default function ServiceCategoryPage({ params }: { params: { category: string } }) {
  const category = serviceCategories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{category.name}</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <div className="text-primary">{category.icon}</div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{category.name}</h1>
                </div>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service List */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-start">
              <div className="flex flex-col space-y-4">
                <div className="sticky top-24">
                  <div className="space-y-2 mb-6">
                    <h2 className="text-2xl font-bold tracking-tighter">Our {category.name} Services</h2>
                    <p className="text-muted-foreground">
                      Explore our comprehensive range of {category.name.toLowerCase()} services designed to help your
                      business thrive.
                    </p>
                  </div>
                  <div>
                    <Button asChild>
                      <Link href="/contact">
                        Request a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-3">Other Services</h3>
                    <ul className="space-y-2">
                      {serviceCategories
                        .filter((cat) => cat.slug !== category.slug)
                        .slice(0, 5)
                        .map((cat) => (
                          <li key={cat.slug}>
                            <Link
                              href={`/services/${cat.slug}`}
                              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                            >
                              <span className="text-sm mr-2">{cat.icon}</span>
                              {cat.name}
                              <ChevronRight className="ml-auto h-4 w-4" />
                            </Link>
                          </li>
                        ))}
                      {serviceCategories.length > 6 && (
                        <li>
                          <Link href="/services" className="flex items-center text-primary font-medium hover:underline">
                            View all categories
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <Accordion type="single" collapsible className="w-full">
                  {category.services.map((service, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger>{service.name}</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          <p className="text-muted-foreground">{service.description}</p>
                          {service.features && service.features.length > 0 && (
                            <div>
                              <h4 className="font-medium mb-2">What's included:</h4>
                              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                {service.features.map((feature, fidx) => (
                                  <li key={fidx}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div className="pt-2">
                            <Button size="sm" asChild>
                              <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>
                                Request this service
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Related Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore other services that complement {category.name.toLowerCase()}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceCategories
                .filter((cat) => cat.slug !== category.slug)
                .slice(0, 3)
                .map((cat) => (
                  <Link key={cat.slug} href={`/services/${cat.slug}`} className="group">
                    <Card className="overflow-hidden h-full transition-all hover:shadow-lg group-hover:border-primary">
                      <CardContent className="p-6">
                        <div className="mb-4 text-primary">{cat.icon}</div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {cat.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">{cat.description}</p>
                        <div className="flex items-center text-sm text-primary font-medium">
                          View Services
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>

            <div className="flex justify-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/services">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Services
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact us today to discuss your {category.name.toLowerCase()} needs and get a custom quote for our
                  services.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground" asChild>
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
