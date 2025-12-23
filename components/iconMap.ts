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
} from "lucide-react"

/**
 * 🔒 Icon keys ที่อนุญาตให้ใช้ในระบบเท่านั้น
 * ใช้ร่วมกับ ServiceItem.icon
 */
export type ServiceIconKey =
  | "starter"
  | "clinic"
  | "construction"
  | "realEstate"
  | "cafe"

/**
 * 🎯 Centralized icon registry
 * UI layer เท่านั้นที่รู้ว่า icon จริงคืออะไร
 */
const ICON_REGISTRY: Record<ServiceIconKey, LucideIcon> = {
  starter: Home,
  clinic: Stethoscope,
  construction: Building2,
  realEstate: Award,
  cafe: Utensils,
}

/**
 * ✅ Resolver ที่ปลอดภัย (ไม่มี any)
 * - ถ้า key ไม่ตรง → fallback เป็น default
 */
export function resolveServiceIcon(
  key: ServiceIconKey | undefined
): LucideIcon {
  if (!key) return LayoutTemplate
  return ICON_REGISTRY[key] ?? LayoutTemplate
}
