"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, FileText, MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ClientPortalPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginForm onLogin={() => setIsLoggedIn(true)} />
  }

  return <Dashboard />
}

function LoginForm({ onLogin }) {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    onLogin()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 flex items-center justify-center bg-muted/50">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Client Portal</h1>
            <p className="text-muted-foreground">Sign in to access your projects and account</p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
                <div className="text-center space-y-2">
                  <Link href="/forgot-password" className="text-sm text-primary hover:underline">
                    Forgot your password?
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-primary hover:underline">
                      Contact us to get started
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Header */}
        <section className="w-full py-6 bg-background border-b">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Welcome back, John!</h1>
                <p className="text-muted-foreground">Here's what's happening with your projects</p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Support
                </Button>
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="invoices">Invoices</TabsTrigger>
                <TabsTrigger value="messages">Messages</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">2 in progress, 1 in review</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                      <FileText className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$24,500</div>
                      <p className="text-xs text-muted-foreground">Across 8 projects</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$3,200</div>
                      <p className="text-xs text-muted-foreground">2 invoices due</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Support Tickets</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                      <p className="text-xs text-muted-foreground">1 open, 5 resolved</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ProjectItem
                        name="E-commerce Website Redesign"
                        status="In Progress"
                        progress={75}
                        dueDate="Dec 15, 2024"
                      />
                      <ProjectItem
                        name="Mobile App Development"
                        status="In Review"
                        progress={100}
                        dueDate="Dec 10, 2024"
                      />
                      <ProjectItem
                        name="Brand Identity Package"
                        status="Planning"
                        progress={25}
                        dueDate="Jan 5, 2025"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Messages</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <MessageItem
                        from="Sarah Johnson"
                        message="The latest design mockups are ready for review"
                        time="2 hours ago"
                      />
                      <MessageItem
                        from="Mike Chen"
                        message="Project milestone completed ahead of schedule"
                        time="1 day ago"
                      />
                      <MessageItem
                        from="Support Team"
                        message="Your invoice #INV-2024-156 has been generated"
                        time="2 days ago"
                      />
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="projects" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Projects</h2>
                  <Button asChild>
                    <Link href="/contact">
                      Start New Project
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="grid gap-6">
                  <ProjectCard
                    name="E-commerce Website Redesign"
                    description="Complete redesign of the online store with modern UI/UX"
                    status="In Progress"
                    progress={75}
                    startDate="Nov 1, 2024"
                    dueDate="Dec 15, 2024"
                    budget="$8,500"
                    team={["Sarah Johnson", "Mike Chen"]}
                  />
                  <ProjectCard
                    name="Mobile App Development"
                    description="iOS and Android app for customer engagement"
                    status="In Review"
                    progress={100}
                    startDate="Sep 15, 2024"
                    dueDate="Dec 10, 2024"
                    budget="$12,000"
                    team={["David Wilson", "Lisa Brown"]}
                  />
                  <ProjectCard
                    name="Brand Identity Package"
                    description="Logo design, brand guidelines, and marketing materials"
                    status="Planning"
                    progress={25}
                    startDate="Dec 1, 2024"
                    dueDate="Jan 5, 2025"
                    budget="$4,000"
                    team={["Emily Davis"]}
                  />
                </div>
              </TabsContent>

              <TabsContent value="invoices" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Invoices</h2>
                  <Button variant="outline">Download All</Button>
                </div>
                <div className="grid gap-4">
                  <InvoiceItem
                    number="INV-2024-156"
                    project="E-commerce Website Redesign"
                    amount="$3,200"
                    status="Pending"
                    dueDate="Dec 20, 2024"
                  />
                  <InvoiceItem
                    number="INV-2024-145"
                    project="Mobile App Development"
                    amount="$6,000"
                    status="Paid"
                    dueDate="Nov 15, 2024"
                  />
                  <InvoiceItem
                    number="INV-2024-134"
                    project="Mobile App Development"
                    amount="$6,000"
                    status="Paid"
                    dueDate="Oct 15, 2024"
                  />
                </div>
              </TabsContent>

              <TabsContent value="messages" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Messages</h2>
                  <Button>New Message</Button>
                </div>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium">Sarah Johnson</p>
                            <p className="text-sm text-muted-foreground">2 hours ago</p>
                          </div>
                          <p className="text-sm">
                            Hi John! I've uploaded the latest design mockups for your e-commerce website. Please take a
                            look and let me know your thoughts. The new product page layout should address all the
                            feedback from our last meeting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <p className="font-medium">You</p>
                            <p className="text-sm text-muted-foreground">1 hour ago</p>
                          </div>
                          <p className="text-sm">
                            Thanks Sarah! The designs look fantastic. I love the new product page layout. Can we
                            schedule a call tomorrow to discuss the checkout flow?
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name</Label>
                          <Input id="firstName" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input id="lastName" defaultValue="Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="john@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" defaultValue="+1 (555) 123-4567" />
                      </div>
                      <Button>Save Changes</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Project Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified about project milestones</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enabled
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Invoice Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive invoice and payment reminders</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Enabled
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Marketing Emails</p>
                          <p className="text-sm text-muted-foreground">Tips, updates, and special offers</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Disabled
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
    </div>
  )
}

function ProjectItem({ name, status, progress, dueDate }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="font-medium">{name}</p>
        <Badge variant={status === "In Progress" ? "default" : status === "In Review" ? "secondary" : "outline"}>
          {status}
        </Badge>
      </div>
      <Progress value={progress} className="h-2" />
      <p className="text-sm text-muted-foreground">Due: {dueDate}</p>
    </div>
  )
}

function MessageItem({ from, message, time }) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <p className="font-medium text-sm">{from}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
      <p className="text-sm text-muted-foreground">{message}</p>
    </div>
  )
}

function ProjectCard({ name, description, status, progress, startDate, dueDate, budget, team }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          <Badge variant={status === "In Progress" ? "default" : status === "In Review" ? "secondary" : "outline"}>
            {status}
          </Badge>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium">Start Date</p>
            <p className="text-muted-foreground">{startDate}</p>
          </div>
          <div>
            <p className="font-medium">Due Date</p>
            <p className="text-muted-foreground">{dueDate}</p>
          </div>
          <div>
            <p className="font-medium">Budget</p>
            <p className="text-muted-foreground">{budget}</p>
          </div>
          <div>
            <p className="font-medium">Team</p>
            <p className="text-muted-foreground">{team.join(", ")}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm">View Details</Button>
          <Button variant="outline" size="sm">
            Message Team
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function InvoiceItem({ number, project, amount, status, dueDate }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-medium">{number}</p>
            <p className="text-sm text-muted-foreground">{project}</p>
            <p className="text-sm text-muted-foreground">Due: {dueDate}</p>
          </div>
          <div className="text-right space-y-1">
            <p className="text-2xl font-bold">{amount}</p>
            <Badge variant={status === "Paid" ? "default" : "destructive"}>{status}</Badge>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button size="sm">View Invoice</Button>
          <Button variant="outline" size="sm">
            Download PDF
          </Button>
          {status === "Pending" && (
            <Button size="sm" className="ml-auto">
              Pay Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
