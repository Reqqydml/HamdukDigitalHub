import Image from "next/image"

export function TrustLogos() {
  return (
    <section className="w-full py-12 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-sm font-medium text-muted-foreground">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo 1"
              width={120}
              height={40}
              className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo 2"
              width={120}
              height={40}
              className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo 3"
              width={120}
              height={40}
              className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo 4"
              width={120}
              height={40}
              className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
            <Image
              src="/placeholder.svg?height=40&width=120"
              alt="Company Logo 5"
              width={120}
              height={40}
              className="opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
