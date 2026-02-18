/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v18.0.6 (STABILIZED_FINAL)
 * [STRATEGY]: Static Tree-Shaking | Compile-Time Safety | Zero-CLS Infrastructure
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import {
  // 1. Core UI & Navigation Controls
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
  Loader2,
  // 2. Connectivity & Mapping
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
  Send,
  // 3. High-End Tech & Intelligence Nodes
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
  Fingerprint,
  Hash,
  Newspaper,
  // 4. Conversion & Social Signals
  MessageCircle,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  MessageSquare,
  // 5. Specialist Authority Elements
  User,
  UserCheck,
  UserCircle2,
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
  type LucideProps,
} from "lucide-react";

/**
 * [REGISTRY]: ทะเบียนสัญลักษณ์มาตรฐาน (Centralized Registry)
 * ออกแบบมาเพื่อให้ Bundler สามารถทำ Static Analysis และตัด Code ที่ไม่ใช้ออกได้จริง 100%
 */
export const ICON_MAP = {
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
  Loader2,
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
  Send,
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
  Fingerprint,
  Hash,
  Newspaper,
  MessageCircle,
  MessageSquare,
  Facebook,
  Github,
  Youtube,
  Twitter,
  Instagram,
  Linkedin,
  User,
  UserCheck,
  UserCircle2,
  BookOpen,
  Quote,
  Lightbulb,
  Award,
  Star,
  ThumbsUp,
} as const;

/** [STRICT_TYPE]: บังคับใช้เฉพาะ Key ที่มีอยู่ใน Registry เท่านั้น เพื่อความปลอดภัยระดับ Type-Safe */
export type IconName = keyof typeof ICON_MAP;

interface IconRendererProps extends Omit<LucideProps, "ref"> {
  readonly name: IconName;
  readonly size?: number;
  readonly className?: string;
  readonly strokeWidth?: number;
  readonly title?: string;
}

/**
 * @component IconRenderer
 * @description หน่วยเรนเดอร์สัญลักษณ์แบบ Optimized สำหรับ Next.js 16 และ Tailwind 4
 */
const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  // [LOGIC]: O(1) Registry Lookup
  const IconComponent = ICON_MAP[name];

  // [FALLBACK_STRATEGY]: เมื่อหาไอคอนไม่พบ (Safe-Guard Node)
  if (!IconComponent) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[SYSTEM_CORE]: Icon "${name}" missing in ICON_MAP Registry.`);
    }
    return (
      <AlertTriangle
        size={size}
        className={cn("shrink-0 text-rose-500/40", className)}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        // [LAYOUT_STABILITY]: ป้องกันไอคอนบีบอัด (Zero-CLS Strategy)
        "shrink-0 transform-gpu transition-all duration-300 will-change-transform",
        "text-text-primary",
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

IconRenderer.displayName = "IconRenderer";

/**
 * [STABILIZED_EXPORT]: ใช้ Default Export เพียงอย่างเดียว เพื่อกำจัดรายงาน Duplicate Exports จาก Knip
 * โดยห่อหุ้มด้วย memo เพื่อประสิทธิภาพสูงสุดในการลด Re-renders
 */
export default memo(IconRenderer);
