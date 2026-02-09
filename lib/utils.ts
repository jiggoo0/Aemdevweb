/**
 * [SYSTEM CORE]: GENERAL_UTILITIES v17.4.2 (STABILIZED)
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
 * [UTILITY]: Full URL Generator (Single Source of Truth)
 * สร้าง Absolute URL ที่ปลอดภัยสำหรับ Meta Tag / OG Image / Schema
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl?.replace(/\/$/, "") || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // ป้องกันกรณี path เป็น root ("/" หรือ "") อยู่แล้ว
  if (path === "/" || !path) return baseUrl;

  return `${baseUrl}${cleanPath}`;
}

/**
 * [UTILITY]: Currency Formatter
 * แสดงผลราคาแบบมาตรฐานสากล (รองรับหลักเกณฑ์ EEAT สำหรับหน้า Pricing)
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
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0E00-\u0E7Fa-z0-9-]/g, "") // อนุญาตเฉพาะไทย, อังกฤษ, ตัวเลข, ขีด
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * [UTILITY]: Date Formatter
 * ปรับรูปแบบวันที่ให้เป็นภาษาไทยแบบอ่านง่าย
 */
export function formatDate(date: string | Date, locale: string = "th-TH"): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "";

  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * [UTILITY]: Advanced Reading Time
 * คำนวณเวลาอ่านบทความ (รองรับภาษาไทย)
 */
export function getReadingTime(content: string): string {
  if (!content) return "0 นาที";

  const wordsPerMinute = 200;
  const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "");

  // ภาษาไทย: ใช้ค่าเฉลี่ย 4 ตัวอักษรต่อ 1 คำ
  const thaiCharCount = cleanContent.replace(/[^\u0E00-\u0E7F]/g, "").length;

  // ภาษาอังกฤษ: นับคำตามปกติ
  const englishWordCount = cleanContent
    .replace(/[\u0E00-\u0E7F]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const totalWords = thaiCharCount / 4 + englishWordCount;
  const minutes = Math.ceil(totalWords / wordsPerMinute);

  return `${minutes} นาที`;
}
