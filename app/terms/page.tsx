export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
                <p className="text-muted-foreground">Last updated: December 10, 2024</p>
              </div>

              <div className="prose prose-gray max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                  <p className="text-muted-foreground">
                    By accessing and using our services, you accept and agree to be bound by the terms and provision of
                    this agreement.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Use License</h2>
                  <p className="text-muted-foreground mb-4">
                    Permission is granted to temporarily download one copy of our materials for personal, non-commercial
                    transitory viewing only.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>This is the grant of a license, not a transfer of title</li>
                    <li>You may not modify or copy the materials</li>
                    <li>You may not use the materials for commercial purposes</li>
                    <li>You may not attempt to reverse engineer any software</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Service Terms</h2>
                  <p className="text-muted-foreground">
                    Our services are provided "as is" and we make no warranties, expressed or implied, and hereby
                    disclaim all other warranties.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Limitations</h2>
                  <p className="text-muted-foreground">
                    In no event shall Hamduk Digital Hub be liable for any damages arising out of the use or inability
                    to use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at
                    legal@hamdukdigital.com.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
