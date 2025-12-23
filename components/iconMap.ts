/** @format */
import type { LucideIcon } from "lucide-react"
import {
  LayoutTemplate,
  Utensils,
  Building2,
  Zap,
  Stethoscope,
  Home,
  Award,
  Settings,
  ShieldCheck,
  Cpu,
  Truck,
  Briefcase,
  Store,
} from "lucide-react"

/**
 * 🔒 Icon keys ที่อนุญาตให้ใช้ในระบบ
 * เพิ่มหมวดหมู่: Logistics, Corporate, และ Shop เพื่อรองรับ SME ทุกรูปแบบ
 */
export type ServiceIconKey =
  | "starter"
  | "clinic"
  | "construction"
  | "realEstate"
  | "cafe"
  | "logistics" // สำหรับรถขนส่ง/หจก.
  | "corporate" // สำหรับบริษัททั่วไป
  | "retail" // สำหรับร้านค้าปลีก
  | "custom" // สำหรับงานระบบพิเศษ

/**
 * 🎯 Centralized icon registry
 * จับคู่สัญลักษณ์ให้เข้ากับกลุ่มธุรกิจเป้าหมายของ aemdevweb
 */
const ICON_REGISTRY: Record<ServiceIconKey, LucideIcon> = {
  starter: Home,
  clinic: Stethoscope,
  construction: Building2,
  realEstate: Award,
  cafe: Utensils,
  logistics: Truck,
  corporate: Briefcase,
  retail: Store,
  custom: Cpu,
}

/**
 * ✅ Resolver ที่ปลอดภัย
 * @param key - รับเป็น string ทั่วไปได้เพื่อความยืดหยุ่นเวลาดึงจาก JSON/Database
 */
export function resolveServiceIcon(key: string | undefined | null): LucideIcon {
  // 1. Fallback ถ้าไม่มี Key ส่งมา
  if (!key) return LayoutTemplate

  // 2. ตรวจสอบว่า Key อยู่ใน Registry หรือไม่
  const Icon = ICON_REGISTRY[key as ServiceIconKey]

  // 3. ถ้าไม่มีในลิสต์ → ให้ใช้ไอคอน Settings (สื่อถึงงานระบบ) หรือ LayoutTemplate
  return Icon ?? Settings
}
