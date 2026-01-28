/** @format */

"use client"

import React from "react"
import {
  // [COMMON ICONS]: รายการไอคอนที่วางพิกัดไว้ใช้งานบ่อย
  Zap,
  Clock,
  Wallet,
  Building2,
  MapPin,
  Coffee,
  Heart,
  UserCircle,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Code2,
  Gauge,
  Layout,
  BarChart3,
  CheckCircle2,
  LayoutTemplate,
  CircleHelp,
  // [TYPES]: พิกัดข้อมูลเพื่อให้ระบบแม่นยำ
  type LucideProps,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
// ตรวจสอบพิกัดไฟล์ types ให้มี ServiceIconName รองรับชื่อไอคอนเหล่านี้
import { ServiceIconName } from "@/types"

/**
 * [ICON REGISTRY]: การผูกชื่อ (String) เข้ากับตัวไอคอนจริง
 * แผนงานนี้ช่วยให้ระบบส่งเพียงชื่อไอคอนมาจากหลังบ้าน เพื่อลดภาระการโหลดหน้าเว็บ
 */
const ICON_MAP: Record<string, LucideIcon> = {
  Zap,
  Clock,
  Wallet,
  Building2,
  MapPin,
  Coffee,
  Heart,
  UserCircle,
  TrendingUp,
  ShieldCheck,
  Rocket,
  Code2,
  Gauge,
  Layout,
  BarChart3,
  CheckCircle2,
  LayoutTemplate,
}

interface IconRendererProps extends LucideProps {
  /** ชื่อพิกัดไอคอนที่ดึงมาจากข้อมูลระบบงาน */
  name?: ServiceIconName | string
  /** คลาสสำหรับจัดการพิกัดสไตล์ด้วย Tailwind */
  className?: string
  /** ขนาดพิกัดของไอคอน (ค่าเริ่มต้น 24px) */
  size?: number
}

/**
 * IconRenderer - ระบบแสดงผลไอคอนอัตโนมัติจากชื่อ
 * ออกแบบมาเพื่อการวางระบบที่รวดเร็ว (Instant Render) และเนี้ยบตามมาตรฐานปี 2026
 * วางโครงสร้างโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function IconRenderer({
  name,
  className,
  size = 24,
  ...props
}: IconRendererProps) {
  // 1. ตรวจสอบพิกัดชื่อ: ค้นหาไอคอนในโครงสร้างทะเบียนที่มีอยู่
  const IconComponent = name ? ICON_MAP[name] : null

  // 2. พิกัดสำรอง: แสดงเครื่องหมายคำถามแบบจางๆ เมื่อหาพิกัดไอคอนไม่เจอ
  if (!IconComponent) {
    return (
      <CircleHelp
        size={size}
        className={cn("animate-pulse text-slate-300 opacity-40", className)}
        {...props}
      />
    )
  }

  // 3. วางระบบแสดงผล: ส่งไอคอนออกไปพร้อมพิกัดการตอบสนองที่ลื่นไหล
  return (
    <IconComponent
      size={size}
      className={cn("transition-all duration-300 ease-in-out", className)}
      {...props}
    />
  )
}
