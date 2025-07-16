"use client"

import Link from "next/link"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, CheckCircle, AlertCircle, Loader2, FileText, LinkIcon, User, Briefcase } from "lucide-react"
import { toast } from "sonner"

const departments = [
  { id: "design-branding", name: "Design & Branding" },
  { id: "web-app-development", name: "Web & App Development" },
  { id: "digital-marketing", name: "Digital Marketing" },
  { id: "content-creation", name: "Content Creation" },
  { id: "digital-products", name: "Digital Products" },
  { id: "education-training", name: "Education & Training" },
  { id: "virtual-assistance", name: "Virtual Assistance" },
  { id: "business-tech", name: "Business & Tech" },
  { id: "community-platforms", name: "Community & Platforms" },
  { id: "admin-operations", name: "Admin & Operations" },
  { id: "internships", name: "Internships" },
]

const positions = {
  "design-branding": ["Graphic Designer", "UI/UX Designer", "Brand Identity Designer", "Presentation Designer"],
  "web-app-development": [
    "Frontend Developer (React, Next.js)",
    "Backend Developer (Node.js, Supabase)",
    "Fullstack Developer",
    "Mobile App Developer (Flutter/React Native)",
    "WordPress Developer",
    "Webflow Developer",
  ],
  "digital-marketing": [
    "Digital Marketing Strategist",
    "Social Media Manager",
    "SEO Specialist",
    "Paid Ads Specialist (Google/Facebook)",
    "Email Marketing Specialist",
    "Content & Funnel Strategist",
  ],
  "content-creation": [
    "Content Writer / Blog Writer",
    "Technical Writer",
    "Copywriter (Ads, Landing Pages)",
    "Scriptwriter (Video/TikTok/YouTube)",
    "Video Editor",
    "Podcast Editor / Audio Engineer",
    "Voiceover Artist",
  ],
  "digital-products": ["Template Designer (Notion/Canva)", "Product Pack Creator", "UI Kit Designer (Figma)"],
  "education-training": [
    "Course Instructor (Tech, Design, Business)",
    "Curriculum Developer",
    "Mentorship Coordinator",
    "Workshop Facilitator",
  ],
  "virtual-assistance": [
    "Virtual Assistant",
    "Customer Support Representative",
    "CRM/Data Entry Specialist",
    "Project Assistant",
  ],
  "business-tech": [
    "Business Analyst",
    "Tech Consultant",
    "Automation Expert (Zapier, Make)",
    "Notion Consultant",
    "Client Success Manager",
  ],
  "community-platforms": [
    "Community Manager",
    "Forum Moderator",
    "Platform Support Specialist",
    "Live Event Host / Coordinator",
  ],
  "admin-operations": [
    "HR & Talent Recruiter",
    "Operations Assistant",
    "Administrative Support Officer",
    "Internship Program Coordinator",
  ],
  internships: [
    "Frontend Developer Intern",
    "Backend Developer Intern",
    "Design Intern",
    "Content Intern",
    "Digital Marketing Intern",
    "Virtual Assistant Intern",
  ],
}

const salaryRanges = [
  "₦150,000 - ₦300,000",
  "₦300,000 - ₦500,000",
  "₦500,000 - ₦700,000",
  "₦700,000 - ₦1,000,000",
  "₦1,000,000 - ₦1,500,000",
  "₦1,500,000+",
  "Negotiable",
  "Let's Discuss",
]

export default function JobApplicationPage() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [progress, setProgress] = useState(0)
  const [characterCount, setCharacterCount] = useState(0)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: searchParams?.get("position") || "",
    department: searchParams?.get("department") || "",
    experience: "",
    expectedSalary: "",
    availability: "",
    workType: "",
    skills: "",
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    subscribeNewsletter: false,
    agreeTerms: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [availablePositions, setAvailablePositions] = useState<string[]>([])

  // Update available positions when department changes
  useEffect(() => {
    if (formData.department) {
      const deptKey = departments.find((d) => d.name === formData.department)?.id
      if (deptKey && positions[deptKey as keyof typeof positions]) {
        setAvailablePositions(positions[deptKey as keyof typeof positions])
      }
    }
  }, [formData.department])

  // Calculate form progress
  useEffect(() => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "position",
      "department",
      "experience",
      "expectedSalary",
      "availability",
      "workType",
      "skills",
      "coverLetter",
    ]
    const filledFields = requiredFields.filter((field) => formData[field as keyof typeof formData])
    const progressPercent = Math.round((filledFields.length / requiredFields.length) * 100)
    setProgress(progressPercent)
  }, [formData])

  // Update character count for cover letter
  useEffect(() => {
    setCharacterCount(formData.coverLetter.length)
  }, [formData.coverLetter])

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.position) newErrors.position = "Position is required"
    if (!formData.department) newErrors.department = "Department is required"
    if (!formData.experience) newErrors.experience = "Experience level is required"
    if (!formData.expectedSalary) newErrors.expectedSalary = "Expected salary is required"
    if (!formData.availability) newErrors.availability = "Availability is required"
    if (!formData.workType) newErrors.workType = "Work type preference is required"
    if (!formData.skills.trim()) newErrors.skills = "Skills are required"
    if (!formData.coverLetter.trim()) newErrors.coverLetter = "Cover letter is required"
    else if (formData.coverLetter.length < 100) newErrors.coverLetter = "Cover letter must be at least 100 characters"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions"

    // URL validations (optional fields)
    if (formData.portfolioUrl && !/^https?:\/\/.+/.test(formData.portfolioUrl)) {
      newErrors.portfolioUrl = "Please enter a valid URL"
    }
    if (formData.linkedinUrl && !/^https?:\/\/.+/.test(formData.linkedinUrl)) {
      newErrors.linkedinUrl = "Please enter a valid LinkedIn URL"
    }
    if (formData.githubUrl && !/^https?:\/\/.+/.test(formData.githubUrl)) {
      newErrors.githubUrl = "Please enter a valid GitHub URL"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/job-applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        toast.success("Application submitted successfully!")

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          position: "",
          department: "",
          experience: "",
          expectedSalary: "",
          availability: "",
          workType: "",
          skills: "",
          coverLetter: "",
          portfolioUrl: "",
          linkedinUrl: "",
          githubUrl: "",
          subscribeNewsletter: false,
          agreeTerms: false,
        })
      } else {
        setSubmitStatus("error")
        toast.error(result.error || "Failed to submit application")
      }
    } catch (error) {
      console.error("Application submission error:", error)
      setSubmitStatus("error")
      toast.error("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl text-green-800">Application Submitted!</CardTitle>
            <CardDescription>
              Thank you for your interest in joining our team. We'll review your application and get back to you soon.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  You should receive a confirmation email shortly. Please check your spam folder if you don't see it.
                </AlertDescription>
              </Alert>
              <Button asChild className="w-full">
                <a href="/careers">View More Positions</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Apply for a Position</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our team of talented professionals. Fill out the form below to submit your application.
          </p>

          {/* Progress Bar */}
          <div className="mt-6 max-w-md mx-auto">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Application Progress</span>
              <span>{progress}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Tell us about yourself</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Position Details */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Position Details
              </CardTitle>
              <CardDescription>Specify the role you're applying for</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="department">Department *</Label>
                <Select value={formData.department} onValueChange={(value) => handleInputChange("department", value)}>
                  <SelectTrigger className={errors.department ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select a department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept.id} value={dept.name}>
                        {dept.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
              </div>
              <div>
                <Label htmlFor="position">Position Applying For *</Label>
                <Select
                  value={formData.position}
                  onValueChange={(value) => handleInputChange("position", value)}
                  disabled={!formData.department}
                >
                  <SelectTrigger className={errors.position ? "border-red-500" : ""}>
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    {availablePositions.length > 0 ? (
                      availablePositions.map((pos) => (
                        <SelectItem key={pos} value={pos}>
                          {pos}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="" disabled>
                        Please select a department first
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select value={formData.experience} onValueChange={(value) => handleInputChange("experience", value)}>
                    <SelectTrigger className={errors.experience ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry-Level</SelectItem>
                      <SelectItem value="junior">Junior</SelectItem>
                      <SelectItem value="mid">Mid-Level</SelectItem>
                      <SelectItem value="senior">Senior-Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>
                <div>
                  <Label htmlFor="expectedSalary">Expected Salary (Naira) *</Label>
                  <Select
                    value={formData.expectedSalary}
                    onValueChange={(value) => handleInputChange("expectedSalary", value)}
                  >
                    <SelectTrigger className={errors.expectedSalary ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select expected salary" />
                    </SelectTrigger>
                    <SelectContent>
                      {salaryRanges.map((range) => (
                        <SelectItem key={range} value={range}>
                          {range}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.expectedSalary && <p className="text-red-500 text-sm mt-1">{errors.expectedSalary}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="availability">Availability *</Label>
                  <Select
                    value={formData.availability}
                    onValueChange={(value) => handleInputChange("availability", value)}
                  >
                    <SelectTrigger className={errors.availability ? "border-red-500" : ""}>
                      <SelectValue placeholder="When can you start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediately</SelectItem>
                      <SelectItem value="2weeks">2 Weeks Notice</SelectItem>
                      <SelectItem value="1month">1 Month Notice</SelectItem>
                      <SelectItem value="negotiable">Negotiable</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
                </div>
                <div>
                  <Label htmlFor="workType">Preferred Work Type *</Label>
                  <Select value={formData.workType} onValueChange={(value) => handleInputChange("workType", value)}>
                    <SelectTrigger className={errors.workType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select work type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.workType && <p className="text-red-500 text-sm mt-1">{errors.workType}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Cover Letter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Skills & Cover Letter
              </CardTitle>
              <CardDescription>Highlight your abilities and tell us why you're a great fit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="skills">Your Key Skills (e.g., React, Figma, SEO) *</Label>
                <Textarea
                  id="skills"
                  placeholder="List your relevant skills, separated by commas or new lines."
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  className={errors.skills ? "border-red-500" : ""}
                />
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
              </div>
              <div>
                <Label htmlFor="coverLetter">Cover Letter *</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us why you're interested in this role and Hamduk Digital Hub. Minimum 100 characters."
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  className={errors.coverLetter ? "border-red-500" : ""}
                  rows={8}
                />
                <div className="text-right text-sm text-gray-500 mt-1">{characterCount} / 100 minimum</div>
                {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Links & Files */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Links & Attachments (Optional)
              </CardTitle>
              <CardDescription>Share your online presence and upload your resume/portfolio</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                <Input
                  id="portfolioUrl"
                  type="url"
                  placeholder="e.g., https://yourportfolio.com"
                  value={formData.portfolioUrl}
                  onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                  className={errors.portfolioUrl ? "border-red-500" : ""}
                />
                {errors.portfolioUrl && <p className="text-red-500 text-sm mt-1">{errors.portfolioUrl}</p>}
              </div>
              <div>
                <Label htmlFor="linkedinUrl">LinkedIn Profile URL</Label>
                <Input
                  id="linkedinUrl"
                  type="url"
                  placeholder="e.g., https://linkedin.com/in/yourprofile"
                  value={formData.linkedinUrl}
                  onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                  className={errors.linkedinUrl ? "border-red-500" : ""}
                />
                {errors.linkedinUrl && <p className="text-red-500 text-sm mt-1">{errors.linkedinUrl}</p>}
              </div>
              <div>
                <Label htmlFor="githubUrl">GitHub Profile URL</Label>
                <Input
                  id="githubUrl"
                  type="url"
                  placeholder="e.g., https://github.com/yourusername"
                  value={formData.githubUrl}
                  onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                  className={errors.githubUrl ? "border-red-500" : ""}
                />
                {errors.githubUrl && <p className="text-red-500 text-sm mt-1">{errors.githubUrl}</p>}
              </div>
              {/* File Uploads - Placeholder for now, actual implementation would involve state for files and API for upload */}
              <div className="space-y-2">
                <Label>Resume Upload</Label>
                <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                  <Upload className="h-6 w-6 mr-2" />
                  Drag & drop your resume here, or <span className="text-blue-600 ml-1">browse</span>
                  <Input type="file" className="sr-only" accept=".pdf,.doc,.docx" />
                </div>
                <p className="text-sm text-gray-500">Max file size: 5MB. Accepted formats: PDF, DOC, DOCX.</p>
              </div>
              <div className="space-y-2">
                <Label>Portfolio/Work Samples (Optional)</Label>
                <div className="flex items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-center text-gray-500">
                  <Upload className="h-6 w-6 mr-2" />
                  Drag & drop files here, or <span className="text-blue-600 ml-1">browse</span>
                  <Input type="file" className="sr-only" accept=".pdf,.zip,.rar" multiple />
                </div>
                <p className="text-sm text-gray-500">Max file size: 10MB. Accepted formats: PDF, ZIP, RAR.</p>
              </div>
            </CardContent>
          </Card>

          {/* Consent & Newsletter */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Consent & Preferences
              </CardTitle>
              <CardDescription>Please confirm your agreement and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleInputChange("agreeTerms", checked as boolean)}
                />
                <Label
                  htmlFor="agreeTerms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the{" "}
                  <Link href="/terms" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="underline">
                    Privacy Policy
                  </Link>{" "}
                  *
                </Label>
              </div>
              {errors.agreeTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="subscribeNewsletter"
                  checked={formData.subscribeNewsletter}
                  onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked as boolean)}
                />
                <Label
                  htmlFor="subscribeNewsletter"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Subscribe to our newsletter for career tips and updates
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
