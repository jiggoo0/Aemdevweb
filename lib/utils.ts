/**
 * [SYSTEM CORE]: GENERAL_UTILITIES v17.2.0 (STABILIZED)
 * [PLAN]: Performance-First Helpers | Thai Language Support | SEO Readiness
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";

/**
 * [UTILITY]: Class Merger (cn)
 * จัดการการรวม Tailwind Classes และแก้ไขปัญหา Style Conflict
 * ใช้สำหรับการรวม className แบบ Dynamic
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * [UTILITY]: Currency Formatter
 * แสดงผลราคาแบบมาตรฐานสากล (รองรับหลักเกณฑ์ EEAT สำหรับหน้า Pricing)
 * Default: THB, ไม่มีทศนิยม
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
 * เปลี่ยน "รับทำเว็บไซต์ SEO" -> "รับทำเว็บไซต์-seo"
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // เปลี่ยนช่องว่างเป็น -
    .replace(/[^\u0E00-\u0E7Fa-z0-9-]/g, "") // อนุญาตเฉพาะ อักษรไทย, a-z, 0-9 และ -
    .replace(/-+/g, "-") // ลดทอน -- ที่ซ้ำซ้อนให้เหลืออันเดียว
    .replace(/^-+|-+$/g, ""); // ลบ - ที่ขึ้นต้นและลงท้าย
}

/**
 * [UTILITY]: Date Formatter
 * ปรับรูปแบบวันที่ให้เป็นภาษาไทยแบบอ่านง่าย (Specialist Peer-to-Peer Tone)
 * Ex: "9 กุมภาพันธ์ 2026"
 */
export function formatDate(date: string | Date, locale: string = "th-TH"): string {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;

  // ตรวจสอบความถูกต้องของ Date Object (Invalid Date Check)
  if (isNaN(d.getTime())) return "";

  return d.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * [UTILITY]: Advanced Reading Time
 * คำนวณเวลาอ่านบทความ (รองรับความหนาแน่นอักขระภาษาไทย)
 * Logic: ไทยใช้การนับตัวอักษรหาร 4, อังกฤษนับคำปกติ
 */
export function getReadingTime(content: string): string {
  if (!content) return "0 นาที";

  const wordsPerMinute = 200;

  // Clean content: ลบ HTML tags ออกก่อนคำนวณ เพื่อความแม่นยำ
  const cleanContent = content.replace(/<\/?[^>]+(>|$)/g, "");

  // ภาษาไทย: ใช้ค่าเฉลี่ย 4 ตัวอักษรต่อ 1 คำ (Heuristic for Thai)
  const thaiCharCount = cleanContent.replace(/[^\u0E00-\u0E7F]/g, "").length;
  
  // ภาษาอังกฤษ: แยกด้วยช่องว่างตามปกติ
  const englishWordCount = cleanContent
    .replace(/[\u0E00-\u0E7F]/g, " ") // แทนที่ไทยด้วยช่องว่างเพื่อนับเฉพาะอังกฤษ
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const totalWords = (thaiCharCount / 4) + englishWordCount;
  const minutes = Math.ceil(totalWords / wordsPerMinute);

  return `${minutes} นาที`;
}

/**
 * [UTILITY]: Full URL Generator
 * สร้าง Absolute URL ที่ปลอดภัยสำหรับ Meta Tag / OG Image / Schema
 * ป้องกันปัญหา Double Slash หรือ Missing Base URL
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl?.replace(/\/$/, "") || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  // ป้องกันกรณี path เป็น root ("/" หรือ "") อยู่แล้ว
  if (path === "/" || !path) return baseUrl;

  return `${baseUrl}${cleanPath}`;
}
