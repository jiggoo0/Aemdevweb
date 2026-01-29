// @format
// พิกัดข้อมูล: lib/utils.ts
// หน้าที่: รวมชุดเครื่องมือประมวลผลกลาง (Core Utility Engine)
// มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 Compatible
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/constants/site-config";

/**
 * [UTILITY: cn]
 * หน้าที่: ผสานคลาส Tailwind และจัดการพิกัดสี OKLCH ไม่ให้ทับซ้อนกัน
 * ยุทธศาสตร์: ลดขนาดรหัส HTML และเพิ่มประสิทธิภาพการเรนเดอร์
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * [UTILITY: formatThaiDate]
 * หน้าที่: แปลงพิกัดเวลาเป็นภาษาไทยมาตรฐาน
 */
export function formatThaiDate(date: string | Date): string {
  const targetDate = new Date(date);
  if (isNaN(targetDate.getTime())) return "ไม่ระบุพิกัดเวลา";

  return targetDate.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * [UTILITY: absoluteUrl]
 * หน้าที่: สร้างพิกัด URL แบบเต็ม (Canonical URL) สำหรับ Metadata และ SEO
 * สำคัญ: ใช้เพื่อกำจัดจุดเสี่ยงเรื่อง Broken Link ในระบบการค้นหา
 */
export function absoluteUrl(path: string) {
  return `${siteConfig.project.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * [UTILITY: slugify]
 * หน้าที่: ฟอกข้อความให้กลายเป็นพิกัด URL (Slug) ที่สะอาด
 * มาตรฐาน: รองรับภาษาไทยและภาษาอังกฤษเพื่อระบบบทความระดับสากล
 */
export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")     // เปลี่ยนช่องว่างเป็นขีด
    .replace(/&/g, "-and-")   // เปลี่ยน & เป็น and
    .replace(/[^\u0E00-\u0E7F\w-]+/g, "") // ลบอักขระพิเศษยกเว้นภาษาไทยและอักษรปกติ
    .replace(/--+/g, "-");    // ลบขีดซ้ำ
}

/**
 * [UTILITY: formatCurrency]
 * หน้าที่: จัดการพิกัดงบประมาณในระบบ Sale Page
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
  }).format(value);
}
