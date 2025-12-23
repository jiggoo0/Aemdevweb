/** @format */
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

/**
 * 🛠️ การสร้าง Supabase Client แบบ Singleton
 * ตรวจสอบค่า ENV เพื่อไม่ให้ Build ล่มเมื่อค่าเหล่านี้หายไปในช่วง Compile
 */
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any) // หรือคืนค่า mock object เพื่อให้ TypeScript ไม่ฟ้อง

// สำหรับกรณีใช้ใน Server Action หรือ API Route (Service Role)
export const getSupabaseAdmin = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!supabaseUrl || !serviceKey) {
    return null
  }
  return createClient(supabaseUrl, serviceKey)
}
