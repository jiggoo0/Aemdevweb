/** @format */

"use client"

import React from "react"
import {
  // [COMMON ICONS]: รายการไอคอนมาตรฐานสำหรับการใช้งานร่วมกับแผนงานระบบ
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
  // [TYPES]: โครงสร้างข้อมูลเพื่อความแม่นยำของระบบ
  type LucideProps,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { ServiceIconName } from "@/types"

/**
 * [ICON REGISTRY]: การผูกค่าชื่อไอคอน (String) เข้ากับ Component จริง
 * แนวทางนี้ช่วยเพิ่มประสิทธิภาพในการดึงข้อมูลจากหลังบ้านเพื่อแสดงผลทันที
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
  /** ชื่อไอคอนที่ระบุตามที่ลงทะเบียนไว้ในระบบ */
  name?: ServiceIconName | string
  /** คลาสสำหรับจัดการสไตล์ด้วย Tailwind CSS */
  className?: string
  /** ขนาดของไอคอน (ค่าเริ่มต้น 24px) */
  size?: number
}

/**
 * IconRenderer - ระบบแสดงผลไอคอนอัตโนมัติ (Strategic Icon Engine)
 * -------------------------------------------------------------------------
 * บริหารจัดการข้อมูลโดย: AEMDEVWEB (นายเอ็มซ่ามากส์)
 */
export default function IconRenderer({
  name,
  className,
  size = 24,
  ...props
}: IconRendererProps) {
  // 1. ค้นหาไอคอนจากทะเบียนที่ลงทะเบียนไว้
  const IconComponent = name ? ICON_MAP[name] : null

  // 2. ระบบสำรอง: กรณีไม่พบชื่อไอคอนในทะเบียน จะแสดงไอคอนช่วยเหลือแบบจาง
  if (!IconComponent) {
    return (
      <CircleHelp
        size={size}
        className={cn("animate-pulse text-slate-300 opacity-40", className)}
        {...props}
      />
    )
  }

  // 3. แสดงผลไอคอนพร้อมระบบการเปลี่ยนผ่านที่ลื่นไหล
  return (
    <IconComponent
      size={size}
      className={cn("transition-all duration-300 ease-in-out", className)}
      {...props}
    />
  )
}
