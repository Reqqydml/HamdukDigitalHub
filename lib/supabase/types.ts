export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export type Database = {
  public: {
    Tables: {
      job_applications: {
        Row: {
          availability: string
          cover_letter: string
          created_at: string
          department: string
          email: string
          experience_level: string
          expected_salary: string
          first_name: string
          github_url: string | null
          id: number
          interview_date: string | null
          ip_address: string | null
          last_name: string
          linkedin_url: string | null
          notes: string | null
          phone: string
          portfolio_file_url: string | null
          portfolio_url: string | null
          position: string
          resume_url: string | null
          reviewer_id: string | null
          skills: string
          source: string | null
          status: string | null
          updated_at: string | null
          user_agent: string | null
          work_type: string
        }
        Insert: {
          availability: string
          cover_letter: string
          created_at?: string
          department: string
          email: string
          experience_level: string
          expected_salary: string
          first_name: string
          github_url?: string | null
          id?: number
          interview_date?: string | null
          ip_address?: string | null
          last_name: string
          linkedin_url?: string | null
          notes?: string | null
          phone: string
          portfolio_file_url?: string | null
          portfolio_url?: string | null
          position: string
          resume_url?: string | null
          reviewer_id?: string | null
          skills: string
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_agent?: string | null
          work_type: string
        }
        Update: {
          availability?: string
          cover_letter?: string
          created_at?: string
          department?: string
          email?: string
          experience_level?: string
          expected_salary?: string
          first_name?: string
          github_url?: string | null
          id?: number
          interview_date?: string | null
          ip_address?: string | null
          last_name?: string
          linkedin_url?: string | null
          notes?: string | null
          phone?: string
          portfolio_file_url?: string | null
          portfolio_url?: string | null
          position?: string
          resume_url?: string | null
          reviewer_id?: string | null
          skills?: string
          source?: string | null
          status?: string | null
          updated_at?: string | null
          user_agent?: string | null
          work_type?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          created_at: string
          email: string
          id: number
          is_active: boolean
          source: string | null
          subscribed_at: string | null
          unsubscribed_at: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          is_active?: boolean
          source?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          is_active?: boolean
          source?: string | null
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      job_application_stats: {
        Row: {
          count: number | null
          department: string | null
          month: string | null
          position: string | null
          status: string | null
        }
        Relationships: []
      }
      recent_job_applications: {
        Row: {
          created_at: string | null
          department: string | null
          email: string | null
          full_name: string | null
          id: number | null
          position: string | null
          status: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"]) | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    ? (PublicSchema["Tables"] & PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends keyof PublicSchema["Tables"] | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends keyof PublicSchema["Enums"] | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName] extends {
      [key: string]: infer E
    }
    ? E
    : never
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions] extends {
        [key: string]: infer E
      }
      ? E
      : never
    : never
