"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Clock, Mail, MapPin, Phone, CheckCircle, Loader2, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"
import { Notification } from "@/components/ui/notification"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company: string
  serviceType: string
  budgetRange: string
  timeline: string
  projectDetails: string
  newsletter: boolean
  terms: boolean
}

interface FormErrors {
  [key: string]: string
}

interface ValidationState {
  [key: string]: "valid" | "invalid" | "pending"
}

interface NotificationState {
  show: boolean
  variant: "success" | "error" | "warning" | "info"
  title: string
  description: string
  details?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    budgetRange: "",
    timeline: "",
    projectDetails: "",
    newsletter: false,
    terms: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [validationState, setValidationState] = useState<ValidationState>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [progress, setProgress] = useState(0)
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    variant: "info",
    title: "",
    description: "",
  })

  // Calculate form completion progress
  useEffect(() => {
    const requiredFields = ["firstName", "lastName", "email", "serviceType", "projectDetails", "terms"]
    const completedFields = requiredFields.filter((field) => {
      if (field === "terms") return formData.terms
      return formData[field as keyof FormData] && String(formData[field as keyof FormData]).trim() !== ""
    })
    setProgress((completedFields.length / requiredFields.length) * 100)
  }, [formData])

  // Real-time email validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Real-time phone validation
  const validatePhone = (phone: string) => {
    if (!phone) return true // Phone is optional
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
    return phoneRegex.test(phone.replace(/[\s\-()]/g, ""))
  }

  // Show notification
  const showNotification = (
    variant: "success" | "error" | "warning" | "info",
    title: string,
    description: string,
    details?: string,
  ) => {
    setNotification({
      show: true,
      variant,
      title,
      description,
      details,
    })
  }

  // Hide notification
  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, show: false }))
  }

  // Handle input changes with real-time validation
  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear previous errors
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }

    // Real-time validation
    if (field === "email" && typeof value === "string") {
      if (value && !validateEmail(value)) {
        setValidationState((prev) => ({ ...prev, email: "invalid" }))
        setErrors((prev) => ({ ...prev, email: "Please enter a valid email address" }))
      } else if (value) {
        setValidationState((prev) => ({ ...prev, email: "valid" }))
        setErrors((prev) => ({ ...prev, email: "" }))
      }
    }

    if (field === "phone" && typeof value === "string") {
      if (value && !validatePhone(value)) {
        setValidationState((prev) => ({ ...prev, phone: "invalid" }))
        setErrors((prev) => ({ ...prev, phone: "Please enter a valid phone number" }))
      } else {
        setValidationState((prev) => ({ ...prev, phone: "valid" }))
        setErrors((prev) => ({ ...prev, phone: "" }))
      }
    }

    // Validate required fields
    const requiredFields = ["firstName", "lastName", "email", "serviceType", "projectDetails"]
    if (requiredFields.includes(field) && typeof value === "string") {
      if (!value.trim()) {
        setValidationState((prev) => ({ ...prev, [field]: "invalid" }))
      } else {
        setValidationState((prev) => ({ ...prev, [field]: "valid" }))
      }
    }
  }

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    hideNotification()

    // Client-side validation
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email address"
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type"
    if (!formData.projectDetails.trim()) newErrors.projectDetails = "Project details are required"
    else if (formData.projectDetails.length < 10)
      newErrors.projectDetails = "Project details must be at least 10 characters"
    if (!formData.terms) newErrors.terms = "You must agree to the terms and conditions"
    if (formData.phone && !validatePhone(formData.phone)) newErrors.phone = "Please enter a valid phone number"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)

      showNotification(
        "error",
        "Form Validation Failed",
        "Please fix the errors highlighted in red and try again.",
        `Found ${Object.keys(newErrors).length} error(s) in the form.`,
      )

      // Scroll to first error
      const firstErrorField = Object.keys(newErrors)[0]
      const errorElement = document.getElementById(firstErrorField)
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" })
        errorElement.focus()
      }

      return
    }

    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      let result
      try {
        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(`HTTP ${response.status}: ${errorText}`)
        }
        result = await response.json()
      } catch (jsonError) {
        console.error("Response parsing error:", jsonError)
        throw new Error("Invalid response from server")
      }

      if (result.success) {
        // Success notification with celebration
        showNotification(
          "success",
          "🎉 Quote Request Submitted Successfully!",
          result.message || "Your quote request has been received and is being processed.",
          result.details || "We'll get back to you within 24 hours with a detailed proposal.",
        )

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          serviceType: "",
          budgetRange: "",
          timeline: "",
          projectDetails: "",
          newsletter: false,
          terms: false,
        })
        setErrors({})
        setValidationState({})

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" })

        // Optional: Show additional success actions after a delay
        setTimeout(() => {
          showNotification(
            "info",
            "What's Next?",
            "Check your email for a confirmation message. Our team will review your request and contact you soon.",
            "You can also reach us directly at info@hamdukdigital.com or +234 (0) 123 456 7890.",
          )
        }, 3000)
      } else {
        // Error notification with specific details
        showNotification(
          "error",
          "Submission Failed",
          result.error || "Failed to submit quote request",
          result.details || "Please check your information and try again.",
        )

        // Handle field-specific errors
        if (result.fieldErrors) {
          const fieldErrors: FormErrors = {}
          result.fieldErrors.forEach((error: any) => {
            fieldErrors[error.field] = error.message
          })
          setErrors(fieldErrors)
        }
      }
    } catch (error) {
      console.error("Quote submission error:", error)

      // Network error notification
      showNotification(
        "error",
        "Network Error",
        "Unable to submit your quote request due to a connection problem.",
        "Please check your internet connection and try again. If the problem persists, contact us directly.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to start your digital transformation? Contact us today for a free consultation and custom quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Quote Request Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Request a Quote
                    <div className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</div>
                  </CardTitle>
                  <Progress value={progress} className="w-full" />
                </CardHeader>
                <CardContent>
                  {/* Enhanced Notification System */}
                  {notification.show && (
                    <div className="mb-6">
                      <Notification
                        variant={notification.variant}
                        title={notification.title}
                        description={notification.description}
                        onClose={hideNotification}
                        autoClose={notification.variant === "success"}
                        autoCloseDelay={notification.variant === "success" ? 8000 : 0}
                        showCloseButton={true}
                      >
                        {notification.details && <div className="mt-2 text-sm opacity-80">{notification.details}</div>}
                        {notification.variant === "success" && (
                          <div className="mt-3 flex items-center gap-2">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">Thank you for choosing Hamduk Digital!</span>
                          </div>
                        )}
                      </Notification>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="flex items-center">
                          First Name <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          placeholder="John"
                          className={`${
                            validationState.firstName === "valid"
                              ? "border-green-500"
                              : validationState.firstName === "invalid" || errors.firstName
                                ? "border-red-500"
                                : ""
                          }`}
                          required
                          aria-describedby={errors.firstName ? "firstName-error" : undefined}
                        />
                        {errors.firstName && (
                          <p id="firstName-error" className="text-sm text-red-600" role="alert">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="flex items-center">
                          Last Name <span className="text-red-500 ml-1">*</span>
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          placeholder="Doe"
                          className={`${
                            validationState.lastName === "valid"
                              ? "border-green-500"
                              : validationState.lastName === "invalid" || errors.lastName
                                ? "border-red-500"
                                : ""
                          }`}
                          required
                          aria-describedby={errors.lastName ? "lastName-error" : undefined}
                        />
                        {errors.lastName && (
                          <p id="lastName-error" className="text-sm text-red-600" role="alert">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center">
                        Email <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="john@example.com"
                          className={`${
                            validationState.email === "valid"
                              ? "border-green-500"
                              : validationState.email === "invalid" || errors.email
                                ? "border-red-500"
                                : ""
                          }`}
                          required
                          aria-describedby={errors.email ? "email-error" : undefined}
                        />
                        {validationState.email === "valid" && (
                          <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                        )}
                      </div>
                      {errors.email && (
                        <p id="email-error" className="text-sm text-red-600" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          placeholder="+234 (0) 123 456 7890"
                          className={`${
                            validationState.phone === "valid"
                              ? "border-green-500"
                              : validationState.phone === "invalid" || errors.phone
                                ? "border-red-500"
                                : ""
                          }`}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                        />
                        {validationState.phone === "valid" && (
                          <CheckCircle className="absolute right-3 top-3 h-4 w-4 text-green-500" />
                        )}
                      </div>
                      {errors.phone && (
                        <p id="phone-error" className="text-sm text-red-600" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service" className="flex items-center">
                        Service Needed <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Select
                        value={formData.serviceType}
                        onValueChange={(value) => handleInputChange("serviceType", value)}
                        required
                      >
                        <SelectTrigger className={`${errors.serviceType ? "border-red-500" : ""}`}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="app-development">App Development</SelectItem>
                          <SelectItem value="branding">Branding & Design</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="content-creation">Content Creation</SelectItem>
                          <SelectItem value="virtual-assistance">Virtual Assistance</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.serviceType && (
                        <p className="text-sm text-red-600" role="alert">
                          {errors.serviceType}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (NGN)</Label>
                      <Select
                        value={formData.budgetRange}
                        onValueChange={(value) => handleInputChange("budgetRange", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-500k">Under ₦500,000</SelectItem>
                          <SelectItem value="500k-1m">₦500,000 - ��1,000,000</SelectItem>
                          <SelectItem value="1m-2.5m">₦1,000,000 - ₦2,500,000</SelectItem>
                          <SelectItem value="2.5m-5m">₦2,500,000 - ₦5,000,000</SelectItem>
                          <SelectItem value="5m-plus">₦5,000,000+</SelectItem>
                          <SelectItem value="discuss">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="3-6-months">3-6 months</SelectItem>
                          <SelectItem value="6-plus-months">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center">
                        Project Details <span className="text-red-500 ml-1">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.projectDetails}
                        onChange={(e) => handleInputChange("projectDetails", e.target.value)}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className={`min-h-[120px] ${
                          validationState.projectDetails === "valid"
                            ? "border-green-500"
                            : validationState.projectDetails === "invalid" || errors.projectDetails
                              ? "border-red-500"
                              : ""
                        }`}
                        required
                        aria-describedby={errors.projectDetails ? "projectDetails-error" : undefined}
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{formData.projectDetails.length}/2000 characters</span>
                        {formData.projectDetails.length >= 10 && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      {errors.projectDetails && (
                        <p id="projectDetails-error" className="text-sm text-red-600" role="alert">
                          {errors.projectDetails}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Subscribe to our newsletter for digital tips and updates
                      </Label>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.terms}
                        onCheckedChange={(checked) => handleInputChange("terms", checked as boolean)}
                        required
                        className={errors.terms ? "border-red-500" : ""}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the{" "}
                        <Link href="/terms" className="text-primary hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                        <span className="text-red-500 ml-1">*</span>
                      </Label>
                    </div>
                    {errors.terms && (
                      <p className="text-sm text-red-600" role="alert">
                        {errors.terms}
                      </p>
                    )}

                    <Button type="submit" className="w-full" disabled={isSubmitting || progress < 100}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending Quote Request...
                        </>
                      ) : (
                        <>
                          Send Quote Request
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-sm text-muted-foreground">
                          123 Digital Street
                          <br />
                          Victoria Island, Lagos
                          <br />
                          Nigeria
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">+234 (0) 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">info@hamdukdigital.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-sm text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM WAT
                          <br />
                          Saturday: 10:00 AM - 4:00 PM WAT
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map */}
                <Card>
                  <CardHeader>
                    <CardTitle>Find Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Live Chat */}
                <Card>
                  <CardHeader>
                    <CardTitle>Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Our support team is available for live chat during business hours.
                    </p>
                    <Button className="w-full">Start Live Chat</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our services and process.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto mt-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How long does a typical project take?</AccordionTrigger>
                  <AccordionContent>
                    Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks,
                    while complex web applications or mobile apps can take 2-6 months. We'll provide a detailed timeline
                    during our initial consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What's included in your web development service?</AccordionTrigger>
                  <AccordionContent>
                    Our web development service includes custom design, responsive development, content management
                    system, SEO optimization, security features, testing, and deployment. We also provide training and
                    ongoing support.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Do you offer ongoing maintenance and support?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer comprehensive maintenance packages including regular updates, security monitoring,
                    backups, performance optimization, and technical support. We have different tiers to match your
                    needs and budget.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can you work with our existing brand guidelines?</AccordionTrigger>
                  <AccordionContent>
                    We can work with your existing brand guidelines and assets. If you don't have brand guidelines, we
                    can help create them as part of our branding services.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept various payment methods including bank transfers, credit cards, PayPal, and
                    cryptocurrency. We typically work with a 50% upfront payment and 50% upon completion, but can
                    arrange milestone-based payments for larger projects.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>Do you work with international clients?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we work with clients worldwide. We have experience working across different time zones and can
                    accommodate various communication preferences. All our services are available globally.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
