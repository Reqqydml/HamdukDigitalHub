import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { serviceCategories } from "@/lib/services-data"

export async function generateStaticParams() {
  const paths = []

  serviceCategories.forEach((category) => {
    category.services.forEach((service) => {
      paths.push({
        category: category.slug,
        service: service.name.toLowerCase().replace(/\s+/g, "-"),
      })
    })
  })

  return paths
}

export default function ServicePage({ params }: { params: { category: string; service: string } }) {
  const category = serviceCategories.find((cat) => cat.slug === params.category)

  if (!category) {
    notFound()
  }

  const service = category.services.find((svc) => svc.name.toLowerCase().replace(/\s+/g, "-") === params.service)

  if (!service) {
    notFound()
  }

  // Find related services from the same category
  const relatedServices = category.services.filter((s) => s.name !== service.name).slice(0, 3)

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
                <Link href={`/services/${category.slug}`} className="hover:text-primary transition-colors">
                  {category.name}
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{service.name}</span>
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{service.name}</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {service.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button asChild>
                  <Link href={`/contact?service=${encodeURIComponent(service.name)}`}>
                    Request this service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12 items-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">What's Included</h2>
                <div className="space-y-4">
                  {service.features &&
                    service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <p>{feature}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tighter mb-4">Why Choose Our {service.name} Service</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At Hamduk Digital Hub, we provide exceptional {service.name} services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
