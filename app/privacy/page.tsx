export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Privacy Policy</h1>
                <p className="text-muted-foreground">Last updated: December 10, 2024</p>
              </div>

              <div className="prose prose-gray max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We collect information you provide directly to us, such as when you create an account, make a
                    purchase, or contact us for support.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Usage data and analytics</li>
                    <li>Communication preferences</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use the information we collect to provide, maintain, and improve our services.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide and deliver our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Communicate about products, services, and events</li>
                    <li>Monitor and analyze trends and usage</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
                  <p className="text-muted-foreground">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except as described in this policy.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Data Security</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate security measures to protect your personal information against unauthorized
                    access, alteration, disclosure, or destruction.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at privacy@hamdukdigital.com.
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
