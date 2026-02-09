/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v17.1.0 (FULL_REGISTRY)
 * [STRATEGY]: Static Icon Mapping | Zero-Runtime Error | Tree-Shaking Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React from "react";
import {
  // 1. General UI
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle, // [ADDED]: ใช้ใน Corporate Template
  CheckCircle2,
  AlertTriangle,
  Search,
  SearchX,
  MoreHorizontal,
  Plus,
  Minus,
  Info,
  HelpCircle,

  // 2. Navigation & Contact
  Home,
  MapPin,
  Map, // [ADDED]: ใช้ใน Local Template
  Navigation, // [ADDED]: ใช้ใน Local Template
  Calendar,
  Clock,
  Phone,
  Mail,
  Share2,
  ExternalLink,
  Link,

  // 3. Features & Services
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
  Image as ImageIcon, // Alias to avoid conflict with Next/Image

  // 4. Social & Media
  MessageCircle, // Used for LINE
  Facebook,
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,

  // 5. Specialist Elements
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

import { cn } from "@/lib/utils";

/**
 * [REGISTRY]: ทะเบียนสัญลักษณ์ที่อนุญาตให้ใช้งานในระบบ
 * การ Map แบบ Static ช่วยให้ Next.js ทำ Tree-shaking ได้สมบูรณ์ที่สุด
 */
export const ICON_MAP = {
  // General
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

  // Tech & Services
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
  Image: ImageIcon, // Use 'Image' key but map to ImageIcon component

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
  readonly name: IconName | string; // Allow string for dynamic data
  readonly size?: number;
  readonly className?: string;
  readonly strokeWidth?: number;
  readonly title?: string;
}

/**
 * @component IconRenderer
 * @description หน่วยแสดงผลสัญลักษณ์มาตรฐาน (Standardized Icon Unit)
 * ทำหน้าที่แปลง String Key ให้เป็น Lucide Component พร้อมระบบ Fallback
 */
const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  // [LOGIC]: Direct Lookup (O(1))
  // Cast name as IconName to satisfy TypeScript, fallback handles invalid keys
  const IconComponent = ICON_MAP[name as IconName];

  // [FALLBACK]: กรณีหา Icon ไม่เจอ ให้แสดง AlertTriangle แทนที่จะ Crash
  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[SYSTEM_WARNING]: Icon "${name}" not found in registry.`);
    }
    return (
      <AlertTriangle
        size={size}
        className={cn("text-yellow-500/50", className)} // ลดความเด่นของ Fallback ลงเล็กน้อย
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn("shrink-0 transition-all duration-300", className)}
      strokeWidth={strokeWidth}
      aria-hidden={!title}
      {...(title ? { title } : {})}
      {...props}
    />
  );
};

export default React.memo(IconRenderer);
