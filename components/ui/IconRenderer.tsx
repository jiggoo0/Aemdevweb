/**
 * [UI COMPONENT]: ICON_RENDERER_SYSTEM v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Static Icon Mapping | Zero-Runtime Error | Multi-Theme Resilience
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React from "react";
import {
  // 1. General UI
  Menu, X, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight,
  Check, CheckCircle, CheckCircle2, AlertTriangle, Search, SearchX,
  MoreHorizontal, Plus, Minus, Info, HelpCircle,

  // 2. Navigation & Contact
  Home, MapPin, Map, Navigation, Calendar, Clock, Phone, Mail,
  Share2, ExternalLink, Link,

  // 3. Tech & Services
  Cpu, Layers, Database, Server, Shield, ShieldCheck, ShieldAlert,
  Zap, Activity, BarChart, BarChart3, TrendingUp, Target, Rocket,
  Code, Code2, FileText, SearchCheck, Globe, Users, Building2,
  ShoppingBag, ShoppingCart, Lock, Unlock, Gauge, Smartphone,
  Layout, Monitor, Laptop, Image as ImageIcon,

  // 4. Social & Media
  MessageCircle, Facebook, Github, Youtube, Twitter, Instagram, Linkedin,

  // 5. Specialist Elements
  User, UserCheck, BookOpen, Quote, Lightbulb, Award, Star, ThumbsUp,
  type LucideProps,
} from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * [REGISTRY]: ทะเบียนสัญลักษณ์มาตรฐาน
 * การทำ Static Mapping ช่วยให้ระบบ Build สามารถทำ Tree-shaking ได้ 100%
 */
export const ICON_MAP = {
  Menu, X, ChevronRight, ChevronDown, ArrowRight, ArrowUpRight,
  Check, CheckCircle, CheckCircle2, AlertTriangle, Search, SearchX,
  MoreHorizontal, Plus, Minus, Info, HelpCircle,
  Home, MapPin, Map, Navigation, Calendar, Clock, Phone, Mail,
  Share2, ExternalLink, Link,
  Cpu, Layers, Database, Server, Shield, ShieldCheck, ShieldAlert,
  Zap, Activity, BarChart, BarChart3, TrendingUp, Target, Rocket,
  Code, Code2, FileText, SearchCheck, Globe, Users, Building2,
  ShoppingBag, ShoppingCart, Lock, Unlock, Gauge, Smartphone,
  Layout, Monitor, Laptop, Image: ImageIcon,
  MessageCircle, Facebook, Github, Youtube, Twitter, Instagram, Linkedin,
  User, UserCheck, BookOpen, Quote, Lightbulb, Award, Star, ThumbsUp,
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
 * [STABILIZED]: รองรับการสลับธีมและระบบ Fallback ที่ไม่ทำลาย Layout
 */
const IconRenderer = ({
  name,
  size = 24,
  className,
  strokeWidth = 2,
  title,
  ...props
}: IconRendererProps) => {
  // [LOGIC]: Direct Registry Lookup
  const IconComponent = ICON_MAP[name as IconName];

  // [FALLBACK_STRATEGY]: เมื่อหาไอคอนไม่พบ ระบบจะใช้ AlertTriangle พร้อมสี Semantic
  if (!IconComponent) {
    if (process.env.NODE_ENV === "development") {
      console.warn(`[SYSTEM_CORE]: Icon "${name}" not found in v17.3.9 registry.`);
    }
    return (
      <AlertTriangle
        size={size}
        /* ใช้ text-text-muted เพื่อให้ดูกลมกลืนกับธีมปัจจุบัน */
        className={cn("text-text-muted/40", className)}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      className={cn(
        /* ปรับจูนค่า Default สีไอคอนให้เป็นไปตาม Text สีหลักของธีมนั้นๆ */
        "text-text-primary shrink-0 transition-all duration-300", 
        className
      )}
      strokeWidth={strokeWidth}
      aria-hidden={!title}
      {...(title ? { title } : {})}
      {...props}
    />
  );
};

export default React.memo(IconRenderer);
