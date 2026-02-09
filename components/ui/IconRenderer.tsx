/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v17.4.5 (STABILIZED_FINAL)
 * [STRATEGY]: Static Tree-Shaking | Zero-Runtime Error | Semantic Fallback
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
 * การทำ Static Mapping ช่วยให้ Next.js ทำ Tree-shaking ตัด Code ส่วนเกินออกได้ 100%
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
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
} as const;

export type IconName = keyof typeof ICON_MAP;

interface IconRendererProps extends Omit<LucideProps, "ref"> {
  readonly name: IconName | string;
  readonly size?: number;
  readonly className?: string;
  readonly strokeWidth?: number;
  readonly title?: string;
}

/**
 * @component IconRenderer
 * @description หน่วยแสดงผลสัญลักษณ์มาตรฐาน (Standardized Icon Unit)
 * รองรับการทำงานร่วมกับ CMS Data ที่อาจส่ง string มาเป็นชื่อไอคอน
 */
const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  // [LOGIC]: Direct Registry Lookup (O(1) complexity)
  const IconComponent = ICON_MAP[name as IconName];

  // [FALLBACK_STRATEGY]: เมื่อหาไอคอนไม่พบ (เช่น CMS ส่งชื่อผิด)
  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[SYSTEM_CORE]: Icon "${name}" not found in Registry v17.4.5`);
    }
    // แสดง Placeholder ที่ไม่ทำลาย Layout
    return (
      <AlertTriangle
        size={size}
        className={cn("text-text-muted/40 opacity-50", className)}
        strokeWidth={1.5}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        /* Base Style: รองรับการสลับธีมและ Animation */
        "text-text-primary shrink-0 transition-all duration-300",
        className,
      )}
      strokeWidth={strokeWidth}
      aria-hidden={!title}
      {...(title ? { title } : {})}
      {...props}
    />
  );
};

export default memo(IconRenderer);
