/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v17.9.100 (STRICT_MODE_PATCHED)
 * [STRATEGY]: Static Tree-Shaking | Compile-Time Safety | Layout Stable
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import {
  // 1. Core UI & Controls
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  Search,
  SearchX,
  MoreHorizontal,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Sun,
  Moon,
  Loader2, // [ADDED]: สำหรับ Loading State
  // 2. Navigation & Contact
  Home,
  MapPin,
  Map,
  Navigation,
  Calendar,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Link,
  Briefcase,
  Send, // [ADDED]: สำหรับปุ่ม Submit Form
  // 3. Tech & Services & Analytics
  Cpu,
  Layers,
  Database,
  Server,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Activity,
  BarChart,
  BarChart3,
  TrendingUp,
  Target,
  Rocket,
  Code,
  Code2,
  FileText,
  SearchCheck,
  Globe,
  Users,
  Building2,
  ShoppingBag,
  ShoppingCart,
  Lock,
  Unlock,
  Gauge,
  Smartphone,
  Layout,
  Monitor,
  Laptop,
  Image as ImageIcon,
  Box,
  Fingerprint, // [ADDED]: สำหรับ About Page
  Hash, // [ADDED]: สำหรับ Tech Specs
  Newspaper, // [ADDED]: สำหรับ Feature Grid / Blog
  // 4. Social & Media
  MessageCircle,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  // 5. Specialist Elements & Badges
  User,
  UserCheck,
  UserCircle2, // [ADDED]: สำหรับ Avatar / Profile
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
  type LucideProps,
} from "lucide-react";

/**
 * [REGISTRY]: ทะเบียนสัญลักษณ์มาตรฐาน
 * การทำ Static Mapping ช่วยให้ Next.js ทำ Tree-shaking ตัด Code ส่วนเกินออกได้จริง 100%
 */
export const ICON_MAP = {
  // Core
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle,
  CheckCircle2,
  AlertTriangle,
  Search,
  SearchX,
  MoreHorizontal,
  Plus,
  Minus,
  Info,
  HelpCircle,
  Sun,
  Moon,
  Loader2, // [ADDED]
  // Navigation
  Home,
  MapPin,
  Map,
  Navigation,
  Calendar,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Link,
  Briefcase,
  Send, // [ADDED]
  // Tech
  Cpu,
  Layers,
  Database,
  Server,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Zap,
  Activity,
  BarChart,
  BarChart3,
  TrendingUp,
  Target,
  Rocket,
  Code,
  Code2,
  FileText,
  SearchCheck,
  Globe,
  Users,
  Building2,
  ShoppingBag,
  ShoppingCart,
  Lock,
  Unlock,
  Gauge,
  Smartphone,
  Layout,
  Monitor,
  Laptop,
  Image: ImageIcon,
  Box,
  Fingerprint, // [ADDED]
  Hash, // [ADDED]
  Newspaper, // [ADDED]
  // Social
  MessageCircle,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  // Specialist
  User,
  UserCheck,
  UserCircle2, // [ADDED]
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
} as const;

// [STRICT_TYPE]: บังคับใช้ Key ที่มีอยู่จริงเท่านั้น ห้ามใช้ String มั่ว
export type IconName = keyof typeof ICON_MAP;

interface IconRendererProps extends Omit<LucideProps, "ref"> {
  readonly name: IconName; // [STRICT]: ลบ | string ออกเพื่อความปลอดภัยสูงสุด
  readonly size?: number;
  readonly className?: string;
  readonly strokeWidth?: number;
  readonly title?: string;
}

/**
 * @component IconRenderer
 * @description หน่วยแสดงผลสัญลักษณ์มาตรฐาน (Standardized Icon Unit)
 * ออกแบบมาเพื่อป้องกัน Layout Shift และรองรับ GPU Acceleration
 */
const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  // [LOGIC]: Direct Registry Lookup (O(1))
  const IconComponent = ICON_MAP[name];

  // [FALLBACK_STRATEGY]: เมื่อหาไอคอนไม่พบ (ป้องกันหน้าขาว)
  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[SYSTEM_CORE]: Icon "${name}" not found in Registry`);
    }
    return (
      <AlertTriangle
        size={size}
        className={cn("text-text-muted/40 shrink-0 opacity-50", className)}
        strokeWidth={1.5}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        // [LAYOUT_STABILITY]: เพิ่ม shrink-0 และ size locking ป้องกันไอคอนบี้
        "text-text-primary shrink-0 transition-all duration-300 will-change-transform",
        className,
      )}
      style={{
        minWidth: size,
        minHeight: size,
      }}
      strokeWidth={strokeWidth}
      aria-hidden={!title}
      {...(title ? { title } : {})}
      {...props}
    />
  );
};

export default memo(IconRenderer);
