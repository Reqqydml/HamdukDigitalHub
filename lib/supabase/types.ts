export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          phone: string | null
          avatar_url: string | null
          role: "general" | "business" | "developer" | "premium"
          subscription_status: "active" | "inactive" | "cancelled" | "trial"
          subscription_expires_at: string | null
          api_key: string | null
          api_calls_count: number
          api_calls_limit: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: "general" | "business" | "developer" | "premium"
          subscription_status?: "active" | "inactive" | "cancelled" | "trial"
          subscription_expires_at?: string | null
          api_key?: string | null
          api_calls_count?: number
          api_calls_limit?: number
        }
        Update: {
          email?: string
          full_name?: string | null
          phone?: string | null
          avatar_url?: string | null
          role?: "general" | "business" | "developer" | "premium"
          subscription_status?: "active" | "inactive" | "cancelled" | "trial"
          subscription_expires_at?: string | null
          api_key?: string | null
          api_calls_count?: number
          api_calls_limit?: number
        }
      }
      quote_requests: {
        Row: {
          id: string
          user_id: string | null
          first_name: string
          last_name: string
          email: string
          phone: string | null
          company: string | null
          service_type: string
          budget_range: string | null
          timeline: string | null
          project_details: string
          status: "pending" | "reviewed" | "approved" | "rejected" | "completed"
          estimated_cost: number | null
          estimated_duration: string | null
          assigned_to: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id?: string | null
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          company?: string | null
          service_type: string
          budget_range?: string | null
          timeline?: string | null
          project_details: string
          status?: "pending" | "reviewed" | "approved" | "rejected" | "completed"
          estimated_cost?: number | null
          estimated_duration?: string | null
          assigned_to?: string | null
          notes?: string | null
        }
        Update: {
          status?: "pending" | "reviewed" | "approved" | "rejected" | "completed"
          estimated_cost?: number | null
          estimated_duration?: string | null
          assigned_to?: string | null
          notes?: string | null
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string | null
          instructor_name: string
          instructor_id: string | null
          category: string
          level: string
          duration_hours: number | null
          price: number
          currency: string
          thumbnail_url: string | null
          video_url: string | null
          content: any
          requirements: string[] | null
          learning_outcomes: string[] | null
          is_published: boolean
          enrollment_count: number
          rating: number
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description?: string | null
          instructor_name: string
          instructor_id?: string | null
          category: string
          level: string
          duration_hours?: number | null
          price: number
          currency?: string
          thumbnail_url?: string | null
          video_url?: string | null
          content?: any
          requirements?: string[] | null
          learning_outcomes?: string[] | null
          is_published?: boolean
          enrollment_count?: number
          rating?: number
        }
        Update: {
          title?: string
          description?: string | null
          instructor_name?: string
          category?: string
          level?: string
          duration_hours?: number | null
          price?: number
          currency?: string
          thumbnail_url?: string | null
          video_url?: string | null
          content?: any
          requirements?: string[] | null
          learning_outcomes?: string[] | null
          is_published?: boolean
          enrollment_count?: number
          rating?: number
        }
      }
      digital_products: {
        Row: {
          id: string
          title: string
          description: string | null
          category: string
          price: number
          currency: string
          original_price: number | null
          thumbnail_url: string | null
          preview_images: string[] | null
          download_url: string | null
          file_size: string | null
          file_format: string | null
          tags: string[] | null
          is_featured: boolean
          is_published: boolean
          download_count: number
          rating: number
          created_by: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          description?: string | null
          category: string
          price: number
          currency?: string
          original_price?: number | null
          thumbnail_url?: string | null
          preview_images?: string[] | null
          download_url?: string | null
          file_size?: string | null
          file_format?: string | null
          tags?: string[] | null
          is_featured?: boolean
          is_published?: boolean
          download_count?: number
          rating?: number
          created_by?: string | null
        }
        Update: {
          title?: string
          description?: string | null
          category?: string
          price?: number
          currency?: string
          original_price?: number | null
          thumbnail_url?: string | null
          preview_images?: string[] | null
          download_url?: string | null
          file_size?: string | null
          file_format?: string | null
          tags?: string[] | null
          is_featured?: boolean
          is_published?: boolean
          download_count?: number
          rating?: number
        }
      }
      va_bookings: {
        Row: {
          id: string
          user_id: string
          service_type: string
          description: string
          duration_hours: number
          hourly_rate: number
          total_cost: number
          currency: string
          preferred_start_date: string | null
          preferred_time: string | null
          status: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          assigned_va_id: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          user_id: string
          service_type: string
          description: string
          duration_hours: number
          hourly_rate: number
          total_cost: number
          currency?: string
          preferred_start_date?: string | null
          preferred_time?: string | null
          status?: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          assigned_va_id?: string | null
          notes?: string | null
        }
        Update: {
          service_type?: string
          description?: string
          duration_hours?: number
          hourly_rate?: number
          total_cost?: number
          currency?: string
          preferred_start_date?: string | null
          preferred_time?: string | null
          status?: "pending" | "confirmed" | "in_progress" | "completed" | "cancelled"
          assigned_va_id?: string | null
          notes?: string | null
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string
          featured_image: string | null
          category: string
          tags: string[] | null
          author_id: string | null
          is_published: boolean
          is_featured: boolean
          read_time: number | null
          view_count: number
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          title: string
          slug: string
          excerpt?: string | null
          content: string
          featured_image?: string | null
          category: string
          tags?: string[] | null
          author_id?: string | null
          is_published?: boolean
          is_featured?: boolean
          read_time?: number | null
          view_count?: number
          published_at?: string | null
        }
        Update: {
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string
          featured_image?: string | null
          category?: string
          tags?: string[] | null
          is_published?: boolean
          is_featured?: boolean
          read_time?: number | null
          view_count?: number
          published_at?: string | null
        }
      }
    }
  }
}
