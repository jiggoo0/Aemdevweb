/** @format */

"use client";

import React from "react";
import {
  // [DNA ICONS]: ทะเบียนไอคอนหลักเพื่อการแสดงผลสมรรถนะระบบ AEMDEVWEB
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
  ArrowUpRight,
  AlertCircle, // สำหรับพิกัดวิเคราะห์จุดเสี่ยง (Risk Analysis)
  MessageSquare, // สำหรับระบบติดต่อสื่อสาร (Fast Response)
  Facebook, // สำหรับพิกัดเชื่อมโยงโซเชียลมีเดีย
  // [TYPES]: โครงสร้างข้อมูลเพื่อความแม่นยำระดับ 7
  type LucideProps,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { ServiceIconName } from "@/types";

/**
 * [ICON MAP REGISTRY]: ระบบจับคู่ชื่อพิกัดข้อมูลเข้ากับคอมโพเนนต์ไอคอนจริง
 * เพิ่มประสิทธิภาพการ Render โดยการทำ Static Mapping
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
  ArrowUpRight,
  AlertCircle,
  MessageSquare,
  Facebook,
};

interface IconRendererProps extends LucideProps {
  /** name: ชื่อพิกัดไอคอนที่ลงทะเบียนไว้ในทะเบียนกลาง (Strict Type) */
  name?: ServiceIconName | string;
  /** className: คลาสสำหรับจัดการสไตล์ด้วย Tailwind CSS 4 (OKLCH) */
  className?: string;
  /** size: ขนาดพิกัดของไอคอน (Default: 24px) */
  size?: number;
}

/**
 * IconRenderer: ระบบจัดการการแสดงผลไอคอนอัตโนมัติ (Strategic Icon Engine)
 * -------------------------------------------------------------------------
 * ควบคุมมาตรฐานความปลอดภัยและประสิทธิภาพสูงสุดโดย: นายเอ็มซ่ามากส์
 */
export default function IconRenderer({
  name,
  className,
  size = 24,
  ...props
}: IconRendererProps) {
  // 1. ตรวจสอบพิกัดคอมโพเนนต์ไอคอนจากทะเบียน
  const IconComponent = name ? ICON_MAP[name] : null;

  // 2. Fallback Protocol: กรณีไม่พบพิกัดไอคอน จะแสดงสถานะแจ้งเตือนแบบจางพร้อม Animation
  if (!IconComponent) {
    return (
      <CircleHelp
        size={size}
        className={cn(
          "animate-pulse text-[oklch(0.9_0.02_260)] opacity-40 transition-opacity",
          className,
        )}
        {...props}
      />
    );
  }

  // 3. Render Node: แสดงผลไอคอนพร้อมระบบการเปลี่ยนผ่านที่สมบูรณ์ (Fluid Transition)
  return (
    <IconComponent
      size={size}
      className={cn(
        "shrink-0 transition-all duration-300 ease-in-out",
        className,
      )}
      {...props}
    />
  );
}
