// lib/supabase/server.ts
import { createClient } from "@supabase/supabase-js"
import type { Database } from "./types"

export const createServerClient = () =>
  createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // Use the server-side key here
  )
