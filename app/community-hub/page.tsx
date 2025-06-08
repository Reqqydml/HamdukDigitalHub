"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { createClient } from "@/lib/supabase/client"
import { AuthModal } from "@/components/auth/auth-modal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, Plus, Search } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function CommunityHubPage() {
  const { user, loading } = useAuth()
  const [forums, setForums] = useState<any[]>([])
  const [posts, setPosts] = useState<any[]>([])
  const [newPostTitle, setNewPostTitle] = useState("")
  const [newPostContent, setNewPostContent] = useState("")
  const [selectedForum, setSelectedForum] = useState<string>("")
  const supabase = createClient()

  useEffect(() => {
    fetchForums()
    if (user) {
      fetchPosts()
    }
  }, [user])

  const fetchForums = async () => {
    const { data, error } = await supabase.from("forums").select("*").order("created_at", { ascending: false })

    if (data) {
      setForums(data)
      if (data.length > 0) {
        setSelectedForum(data[0].id)
      }
    }
  }

  const fetchPosts = async () => {
    if (!selectedForum) return

    const { data, error } = await supabase
      .from("forum_posts")
      .select(`
        *,
        users:user_id (full_name, avatar_url)
      `)
      .eq("forum_id", selectedForum)
      .order("created_at", { ascending: false })

    if (data) {
      setPosts(data)
    }
  }

  useEffect(() => {
    if (selectedForum && user) {
      fetchPosts()
    }
  }, [selectedForum, user])

  const createPost = async () => {
    if (!user || !newPostTitle || !newPostContent || !selectedForum) {
      toast({
        title: "Error",
        description: "Please fill in all fields and select a forum.",
        variant: "destructive",
      })
      return
    }

    const { data, error } = await supabase.from("forum_posts").insert({
      forum_id: selectedForum,
      user_id: user.id,
      title: newPostTitle,
      content: newPostContent,
    })

    if (error) {
      toast({
        title: "Error",
        description: "Failed to create post.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Success",
        description: "Post created successfully!",
      })
      setNewPostTitle("")
      setNewPostContent("")
      fetchPosts()
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

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
                  Connect with fellow digital professionals, share knowledge, and grow together.
                </p>
              </div>
              {!user && (
                <AuthModal>
                  <Button size="lg">Join Community</Button>
                </AuthModal>
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
                <div className="text-3xl font-bold text-primary">{forums.length}</div>
                <div className="text-sm text-muted-foreground text-center">Forums</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">{posts.length}</div>
                <div className="text-sm text-muted-foreground text-center">Discussions</div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="text-3xl font-bold text-primary">89%</div>
                <div className="text-sm text-muted-foreground text-center">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Community Content */}
        {user ? (
          <section className="w-full py-12 bg-muted/50">
            <div className="container px-4 md:px-6">
              <Tabs defaultValue="forums" className="w-full">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
                  <TabsList>
                    <TabsTrigger value="forums">Forums</TabsTrigger>
                    <TabsTrigger value="create">Create Post</TabsTrigger>
                    <TabsTrigger value="members">Members</TabsTrigger>
                  </TabsList>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search community..." className="pl-10 w-64" />
                  </div>
                </div>

                <TabsContent value="forums" className="space-y-6">
                  <div className="grid gap-6 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                      <Card>
                        <CardHeader>
                          <CardTitle>Forums</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {forums.map((forum) => (
                            <Button
                              key={forum.id}
                              variant={selectedForum === forum.id ? "default" : "ghost"}
                              className="w-full justify-start"
                              onClick={() => setSelectedForum(forum.id)}
                            >
                              {forum.name}
                            </Button>
                          ))}
                        </CardContent>
                      </Card>
                    </div>

                    <div className="lg:col-span-3">
                      <div className="space-y-4">
                        {posts.map((post) => (
                          <Card key={post.id}>
                            <CardContent className="p-6">
                              <div className="flex items-start space-x-4">
                                <Avatar>
                                  <AvatarImage src={post.users?.avatar_url || "/placeholder.svg"} />
                                  <AvatarFallback>{post.users?.full_name?.charAt(0) || "U"}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 space-y-2">
                                  <div className="flex items-center justify-between">
                                    <h3 className="font-semibold">{post.title}</h3>
                                    <span className="text-sm text-muted-foreground">
                                      {new Date(post.created_at).toLocaleDateString()}
                                    </span>
                                  </div>
                                  <p className="text-muted-foreground">{post.content}</p>
                                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                    <span className="flex items-center">
                                      <MessageSquare className="h-4 w-4 mr-1" />
                                      {post.reply_count || 0} replies
                                    </span>
                                    <span>by {post.users?.full_name || "Anonymous"}</span>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="create" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Create New Post</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Forum</label>
                        <select
                          value={selectedForum}
                          onChange={(e) => setSelectedForum(e.target.value)}
                          className="w-full p-2 border rounded"
                        >
                          {forums.map((forum) => (
                            <option key={forum.id} value={forum.id}>
                              {forum.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Title</label>
                        <Input
                          value={newPostTitle}
                          onChange={(e) => setNewPostTitle(e.target.value)}
                          placeholder="Enter post title..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Content</label>
                        <Textarea
                          value={newPostContent}
                          onChange={(e) => setNewPostContent(e.target.value)}
                          placeholder="Write your post content..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button onClick={createPost} className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Post
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="members" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center space-y-4">
                          <Avatar className="h-16 w-16">
                            <AvatarFallback>SJ</AvatarFallback>
                          </Avatar>
                          <div className="text-center space-y-2">
                            <h3 className="font-bold">Sarah Johnson</h3>
                            <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                            <Badge variant="secondary">Expert</Badge>
                          </div>
                          <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
                            <span>156 posts</span>
                            <span>Joined Jan 2023</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {/* Add more member cards as needed */}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        ) : (
          <section className="w-full py-12 bg-background">
            <div className="container px-4 md:px-6">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Join Our Community</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Sign in to access forums, connect with other members, and participate in discussions.
                </p>
                <AuthModal>
                  <Button size="lg">Sign In to Continue</Button>
                </AuthModal>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
