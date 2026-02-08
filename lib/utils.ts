/**
 * [SYSTEM CORE]: GENERAL_UTILITIES v16.2.1 (STABILIZED)
 * [PLAN]: Performance-First Helpers | Thai Language Support | SEO Readiness
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * [UTILITY]: Class Merger (cn)
 * จัดการการรวม Tailwind Classes และแก้ไขปัญหา Style Conflict
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * [UTILITY]: Currency Formatter
 * แสดงผลราคา (รองรับหลักเกณฑ์ EEAT สำหรับหน้า Pricing)
 */
export function formatCurrency(
  value: number,
  currency: string = "THB",
  locale: string = "th-TH",
): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * [UTILITY]: Thai-Ready Slugify
 * สร้าง URL Slug รองรับภาษาไทย (SEO Authority Friendly)
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // ช่องว่างเป็น -
    .replace(/[^\u0E00-\u0E7Fa-z0-9-]/g, "") // อนุญาตเฉพาะ อักษรไทย, a-z, 0-9 และ -
    .replace(/-+/g, "-") // ลดทอน -- ที่ซ้ำซ้อน
    .replace(/^-+|-+$/g, ""); // ลบ - หัวท้าย
}

/**
 * [UTILITY]: Date Formatter
 * ปรับรูปแบบวันที่ (Specialist Peer-to-Peer Tone)
 */
export function formatDate(date: string | Date, locale: string = "th-TH"): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;

  // ตรวจสอบความถูกต้องของ Date Object
  if (isNaN(d.getTime())) return "";

  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * [UTILITY]: Advanced Reading Time
 * คำนวณเวลาอ่าน (รองรับความหนาแน่นอักขระภาษาไทย)
 */
export function getReadingTime(content: string): string {
  if (!content) return "0 นาที";

  const wordsPerMinute = 200;

  // Clean content: ลบ HTML tags ออกก่อนคำนวณ
  const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "");

  // ภาษาไทย: ใช้ค่าเฉลี่ย 4 ตัวอักษรต่อ 1 คำ
  const thaiCharCount = cleanContent.replace(/[^\u0E00-\u0E7F]/g, "").length;
  // ภาษาอังกฤษ: แยกด้วยช่องว่างตามปกติ
  const englishWordCount = cleanContent
    .replace(/[\u0E00-\u0E7F]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const totalWords = thaiCharCount / 4 + englishWordCount;
  const minutes = Math.ceil(totalWords / wordsPerMinute);

  return `${minutes} นาที`;
}

/**
 * [UTILITY]: Full URL Generator
 * สร้าง Absolute URL ที่ปลอดภัยสำหรับ Meta Tag / OG Image
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl?.replace(/\/$/, "") || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // ป้องกันกรณี path เป็น root อยู่แล้ว
  if (path === "/" || !path) return baseUrl;

  return `${baseUrl}${cleanPath}`;
}
