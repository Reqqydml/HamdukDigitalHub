"use client"

import { useState } from "react"
import { ArrowRight, Calendar, MessageSquare, Trophy, Users, Bell, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CommunityPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Community Hub</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with fellow digital professionals, share knowledge, and grow together in our vibrant
                  community.
                </p>
              </div>
              {!isLoggedIn && (
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" onClick={() => setIsLoggedIn(true)}>
                    Join Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="w-full py-12 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">12.5K</div>
                <div className="text-sm text-muted-foreground text-center">Active Members</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">2.8K</div>
                <div className="text-sm text-muted-foreground text-center">Discussions</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground text-center">Events This Month</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground text-center">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Community Content */}
        <section className="w-full py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="forums" className="w-full">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                <TabsList>
                  <TabsTrigger value="forums">Forums</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                </TabsList>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search community..." className="pl-10 w-64" />
                  </div>
                  {isLoggedIn && (
                    <Button variant="outline" size="sm">
                      <Bell className="h-4 w-4 mr-2" />
                      Notifications
                    </Button>
                  )}
                </div>
              </div>

              <TabsContent value="forums" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-3">
                  <div className="lg:col-span-2 space-y-6">
                    <ForumCategory
                      title="Web Development"
                      description="Discuss web technologies, frameworks, and best practices"
                      topics={234}
                      posts={1567}
                      lastPost="2 hours ago"
                    />
                    <ForumCategory
                      title="Mobile App Development"
                      description="iOS, Android, and cross-platform development discussions"
                      topics={156}
                      posts={892}
                      lastPost="4 hours ago"
                    />
                    <ForumCategory
                      title="Design & UX"
                      description="UI/UX design, branding, and creative discussions"
                      topics={189}
                      posts={1234}
                      lastPost="1 hour ago"
                    />
                    <ForumCategory
                      title="Digital Marketing"
                      description="SEO, social media, content marketing, and growth strategies"
                      topics={298}
                      posts={2156}
                      lastPost="30 minutes ago"
                    />
                    <ForumCategory
                      title="Freelancing & Business"
                      description="Tips for running a successful digital business"
                      topics={167}
                      posts={945}
                      lastPost="3 hours ago"
                    />
                  </div>
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Discussions</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <DiscussionItem
                          title="Best practices for React performance optimization"
                          author="Sarah Johnson"
                          replies={23}
                          time="2 hours ago"
                        />
                        <DiscussionItem
                          title="How to price freelance projects effectively"
                          author="Mike Chen"
                          replies={45}
                          time="4 hours ago"
                        />
                        <DiscussionItem
                          title="Mobile-first design principles"
                          author="Emily Davis"
                          replies={18}
                          time="6 hours ago"
                        />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Top Contributors</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ContributorItem name="Alex Rodriguez" posts={156} badge="Expert" avatar="/placeholder.svg" />
                        <ContributorItem name="Jessica Williams" posts={134} badge="Mentor" avatar="/placeholder.svg" />
                        <ContributorItem name="David Wilson" posts={98} badge="Helper" avatar="/placeholder.svg" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Upcoming Events</h2>
                  <Button>Create Event</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <EventCard
                    title="React Best Practices Workshop"
                    date="Dec 15, 2024"
                    time="2:00 PM EST"
                    attendees={45}
                    type="Workshop"
                    host="Sarah Johnson"
                  />
                  <EventCard
                    title="Freelancer Networking Meetup"
                    date="Dec 18, 2024"
                    time="6:00 PM EST"
                    attendees={78}
                    type="Networking"
                    host="Community Team"
                  />
                  <EventCard
                    title="UI/UX Design Critique Session"
                    date="Dec 20, 2024"
                    time="3:00 PM EST"
                    attendees={32}
                    type="Critique"
                    host="Mike Chen"
                  />
                  <EventCard
                    title="Digital Marketing Trends 2025"
                    date="Dec 22, 2024"
                    time="1:00 PM EST"
                    attendees={156}
                    type="Webinar"
                    host="Emily Davis"
                  />
                  <EventCard
                    title="Code Review & Feedback Session"
                    date="Dec 25, 2024"
                    time="4:00 PM EST"
                    attendees={23}
                    type="Code Review"
                    host="David Wilson"
                  />
                  <EventCard
                    title="New Year Goal Setting Workshop"
                    date="Jan 2, 2025"
                    time="11:00 AM EST"
                    attendees={89}
                    type="Workshop"
                    host="Lisa Brown"
                  />
                </div>
              </TabsContent>

              <TabsContent value="members" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Community Members</h2>
                  <Button variant="outline">View All Members</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <MemberCard
                    name="Sarah Johnson"
                    title="Senior Full-Stack Developer"
                    location="San Francisco, CA"
                    posts={156}
                    joined="Jan 2023"
                    badge="Expert"
                    avatar="/placeholder.svg"
                  />
                  <MemberCard
                    name="Mike Chen"
                    title="UI/UX Designer"
                    location="New York, NY"
                    posts={134}
                    joined="Mar 2023"
                    badge="Mentor"
                    avatar="/placeholder.svg"
                  />
                  <MemberCard
                    name="Emily Davis"
                    title="Digital Marketing Specialist"
                    location="Austin, TX"
                    posts={98}
                    joined="May 2023"
                    badge="Helper"
                    avatar="/placeholder.svg"
                  />
                  <MemberCard
                    name="David Wilson"
                    title="Mobile App Developer"
                    location="Seattle, WA"
                    posts={87}
                    joined="Jul 2023"
                    badge="Contributor"
                    avatar="/placeholder.svg"
                  />
                  <MemberCard
                    name="Lisa Brown"
                    title="Project Manager"
                    location="Chicago, IL"
                    posts={76}
                    joined="Sep 2023"
                    badge="Organizer"
                    avatar="/placeholder.svg"
                  />
                  <MemberCard
                    name="Alex Rodriguez"
                    title="DevOps Engineer"
                    location="Miami, FL"
                    posts={65}
                    joined="Nov 2023"
                    badge="Helper"
                    avatar="/placeholder.svg"
                  />
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Community Achievements</h2>
                  <Button variant="outline">View Leaderboard</Button>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <AchievementCard
                    icon={<Trophy className="h-8 w-8 text-yellow-500" />}
                    title="Top Contributor"
                    description="Made 100+ helpful posts"
                    earned="156 members"
                  />
                  <AchievementCard
                    icon={<Users className="h-8 w-8 text-blue-500" />}
                    title="Community Builder"
                    description="Helped 50+ new members"
                    earned="89 members"
                  />
                  <AchievementCard
                    icon={<MessageSquare className="h-8 w-8 text-green-500" />}
                    title="Discussion Starter"
                    description="Started 25+ popular discussions"
                    earned="67 members"
                  />
                  <AchievementCard
                    icon={<Calendar className="h-8 w-8 text-purple-500" />}
                    title="Event Organizer"
                    description="Organized 10+ community events"
                    earned="23 members"
                  />
                  <AchievementCard
                    icon={<Trophy className="h-8 w-8 text-orange-500" />}
                    title="Knowledge Sharer"
                    description="Shared 50+ resources"
                    earned="134 members"
                  />
                  <AchievementCard
                    icon={<Users className="h-8 w-8 text-red-500" />}
                    title="Mentor"
                    description="Mentored 10+ community members"
                    earned="45 members"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Join Our Community?</h2>
                <p className="max-w-[900px] opacity-90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with thousands of digital professionals, share knowledge, and accelerate your career growth.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button variant="secondary" size="lg">
                  Join Now - It's Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary-foreground">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ForumCategory({ title, description, topics, posts, lastPost }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>{topics} topics</span>
              <span>{posts} posts</span>
              <span>Last post: {lastPost}</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            View Forum
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function DiscussionItem({ title, author, replies, time }) {
  return (
    <div className="space-y-1">
      <h4 className="font-medium text-sm line-clamp-2">{title}</h4>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>by {author}</span>
        <span>{replies} replies</span>
      </div>
      <p className="text-xs text-muted-foreground">{time}</p>
    </div>
  )
}

function ContributorItem({ name, posts, badge, avatar }) {
  return (
    <div className="flex items-center space-x-3">
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatar || "/placeholder.svg"} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <p className="font-medium text-sm">{name}</p>
        <p className="text-xs text-muted-foreground">{posts} posts</p>
      </div>
      <Badge variant="secondary" className="text-xs">
        {badge}
      </Badge>
    </div>
  )
}

function EventCard({ title, date, time, attendees, type, host }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="outline">{type}</Badge>
          <span className="text-sm text-muted-foreground">{attendees} attending</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <Calendar className="h-4 w-4" />
          <span>
            {date} at {time}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">Hosted by {host}</p>
        <Button className="w-full mt-4">Join Event</Button>
      </CardContent>
    </Card>
  )
}

function MemberCard({ name, title, location, posts, joined, badge, avatar }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={avatar || "/placeholder.svg"} />
            <AvatarFallback>
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="text-center space-y-2">
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
            <Badge variant="secondary">{badge}</Badge>
          </div>
          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
            <span>{posts} posts</span>
            <span>Joined {joined}</span>
          </div>
          <Button variant="outline" size="sm" className="w-full">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function AchievementCard({ icon, title, description, earned }) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-4">
          <div>{icon}</div>
          <div className="text-center space-y-2">
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
            <p className="text-xs text-muted-foreground">Earned by {earned}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
