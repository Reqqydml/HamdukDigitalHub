"use client"

import { useEffect, useState } from "react"
import { useAuth } from "@/components/auth/auth-provider"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Key, CreditCard, Eye, Copy } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const [userProfile, setUserProfile] = useState<any>(null)
  const [apiKey, setApiKey] = useState<string>("")
  const [apiUsage, setApiUsage] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    if (user) {
      fetchUserProfile()
      fetchApiUsage()
    }
  }, [user])

  const fetchUserProfile = async () => {
    const { data, error } = await supabase.from("users").select("*").eq("id", user?.id).single()

    if (data) {
      setUserProfile(data)
      setApiKey(data.api_key || "")
    }
  }

  const fetchApiUsage = async () => {
    const { data, error } = await supabase
      .from("api_usage_logs")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false })
      .limit(10)

    if (data) {
      setApiUsage(data)
    }
  }

  const generateApiKey = async () => {
    const { data, error } = await supabase.rpc("generate_api_key")

    if (data) {
      const { error: updateError } = await supabase.from("users").update({ api_key: data }).eq("id", user?.id)

      if (!updateError) {
        setApiKey(data)
        toast({
          title: "API Key Generated",
          description: "Your new API key has been created successfully.",
        })
      }
    }
  }

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey)
    toast({
      title: "Copied!",
      description: "API key copied to clipboard.",
    })
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!user) {
    return <div className="flex items-center justify-center min-h-screen">Please sign in to access the dashboard.</div>
  }

  return (
    <div className="container mx-auto py-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {userProfile?.full_name || user.email}</p>
        </div>
        <Badge variant={userProfile?.role === "premium" ? "default" : "secondary"}>
          {userProfile?.role?.toUpperCase() || "GENERAL"}
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Calls Used</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProfile?.api_calls_count || 0}</div>
            <p className="text-xs text-muted-foreground">of {userProfile?.api_calls_limit || 100} limit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Account Type</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{userProfile?.role || "General"}</div>
            <p className="text-xs text-muted-foreground">{userProfile?.subscription_status || "inactive"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">API Key Status</CardTitle>
            <Key className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{apiKey ? "Active" : "None"}</div>
            <p className="text-xs text-muted-foreground">{apiKey ? "Ready to use" : "Generate key"}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Activity</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {apiUsage?.[0] ? new Date(apiUsage[0].created_at).toLocaleDateString() : "Never"}
            </div>
            <p className="text-xs text-muted-foreground">{apiUsage?.[0]?.endpoint || "No API calls yet"}</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="api" className="space-y-4">
        <TabsList>
          <TabsTrigger value="api">API Management</TabsTrigger>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="api" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>API Key Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {apiKey ? (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Your API Key</label>
                  <div className="flex items-center space-x-2">
                    <code className="flex-1 p-2 bg-muted rounded text-sm font-mono">{apiKey.substring(0, 20)}...</code>
                    <Button size="sm" variant="outline" onClick={copyApiKey}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <p className="text-muted-foreground">You don't have an API key yet.</p>
                  <Button onClick={generateApiKey}>Generate API Key</Button>
                </div>
              )}

              <div className="space-y-2">
                <h3 className="font-medium">API Endpoints Available</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="font-mono text-sm">GET /api/v1/quotes</span>
                    <Badge variant={userProfile?.role === "general" ? "destructive" : "default"}>
                      {userProfile?.role === "general" ? "Restricted" : "Available"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="font-mono text-sm">GET /api/v1/courses</span>
                    <Badge variant="default">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="font-mono text-sm">GET /api/v1/products</span>
                    <Badge variant="default">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="font-mono text-sm">POST /api/v1/va-booking</span>
                    <Badge variant={userProfile?.role === "general" ? "destructive" : "default"}>
                      {userProfile?.role === "general" ? "Restricted" : "Available"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 border rounded">
                    <span className="font-mono text-sm">POST /api/v1/ai-assistant</span>
                    <Badge variant="default">Available</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="usage" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent API Usage</CardTitle>
            </CardHeader>
            <CardContent>
              {apiUsage && apiUsage.length > 0 ? (
                <div className="space-y-2">
                  {apiUsage.map((log: any) => (
                    <div key={log.id} className="flex items-center justify-between p-2 border rounded">
                      <div>
                        <span className="font-mono text-sm">
                          {log.method} {log.endpoint}
                        </span>
                        <p className="text-xs text-muted-foreground">{new Date(log.created_at).toLocaleString()}</p>
                      </div>
                      <Badge variant={log.status_code < 400 ? "default" : "destructive"}>{log.status_code}</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground">No API usage yet</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Account Type</label>
                <p className="text-sm text-muted-foreground">{userProfile?.role || "General"}</p>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">API Call Limit</label>
                <p className="text-sm text-muted-foreground">{userProfile?.api_calls_limit || 100} calls per month</p>
              </div>
              {userProfile?.role === "general" && (
                <div className="p-4 border rounded bg-muted/50">
                  <h4 className="font-medium mb-2">Upgrade Your Account</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upgrade to Business, Developer, or Premium to access more features and higher API limits.
                  </p>
                  <Button>Upgrade Account</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
