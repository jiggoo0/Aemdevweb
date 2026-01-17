/** @format */
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

/**
 * 🛠️ Supabase Client: Static Content Mode
 * ปิดระบบ Auth ทั้งหมดเพื่อไม่ให้ Build พัง (เพราะไม่มีระบบ Login)
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // ✅ ปิดถาวร
    autoRefreshToken: false, // ✅ ปิดถาวร
    detectSessionInUrl: false, // ✅ ปิดถาวร
  },
})

export const getPublicUrl = (path: string, bucket: string = "showcase") => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path)
  return data.publicUrl
}
