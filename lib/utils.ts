/**
 * [SYSTEM CORE]: GENERAL_UTILITIES v17.9.9 (REFINED)
 * [STRATEGY]: Core Helper Consolidation | Dead Code Elimination | Termux Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * [UTILITY]: cn (Class Name Merger)
 * รวม Tailwind Classes และจัดการการทับซ้อนของ CSS อย่างมีประสิทธิภาพ
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * [SEO]: absoluteUrl
 * สร้าง Full Path URL สำหรับ Metadata และ Schema โดยอ้างอิงจาก SITE_CONFIG
 */
export function absoluteUrl(path: string): string {
  if (!path) return SITE_CONFIG.siteUrl;
  if (path.startsWith("http")) return path;

  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  return path === "/" ? baseUrl : `${baseUrl}${cleanPath}`;
}

/**
 * [CLEANUP_NOTE]:
 * ลบ slugify และ formatDate ออกชั่วคราวตามรายงาน Knip Audit v5.0
 * เนื่องจากระบบปัจจุบันใช้ Static Slugs จาก constants/ เป็นหลัก
 * และจัดการ Date String ผ่าน MDX Content โดยตรงแล้ว
 */
