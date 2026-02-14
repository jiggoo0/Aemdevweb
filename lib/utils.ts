/**
 * [UTILS]: CORE_SYSTEM_HELPERS v17.9.106 (ULTIMATE_HARDENED)
 * [STRATEGY]: CSS Variable Injection | Path Normalization | GPU Safe
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";
import type { ThemeConfig } from "@/types";

/**
 * [UI]: cn
 * มาตรฐานการรวม Tailwind Classes พร้อมจัดการ Conflict (Tailwind 4 Ready)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * [SEO]: absoluteUrl
 * แปลง Path ให้เป็น Full URL ที่ถูกต้อง 100% สำหรับ Metadata และ OpenGraph
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, ""); // ตัด slash ท้าย URL หลักออก

  if (!path || path === "/") return baseUrl;
  if (path.startsWith("http")) return path;

  // จัดการตัวแปร path ให้มี slash นำหน้าเพียงตัวเดียวเสมอ
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath.replace(/\/+$/, "")}`; // ลบ slash ท้าย path ออกถ้ามี
}

/**
 * [THEME]: injectThemeVariables
 * @description กลไกการฉีดค่าธีมเข้าสู่ CSS Variables (The Bridge)
 * [CRITICAL]: ใช้ override --surface-main หาก background เป็นค่าสี Hex
 */
export function injectThemeVariables(theme?: ThemeConfig): React.CSSProperties {
  if (!theme) return {} as React.CSSProperties;

  const styles: Record<string, string> = {
    "--brand-primary": theme.primary,
    "--color-brand-primary": theme.primary, // Tailwind 4 Direct Mapping
    "--brand-secondary": theme.secondary || `${theme.primary}CC`,
    "--brand-accent": theme.accent || theme.primary,
    "--brand-gradient":
      theme.gradient || `linear-gradient(to bottom, ${theme.primary}15, transparent)`,
  };

  // [ANTI-WHITE-FLASH LOGIC]
  if (theme.background && !theme.background.startsWith("bg-")) {
    styles["--surface-main"] = theme.background;
    styles["--brand-bg"] = theme.background;
  } else {
    styles["--brand-bg"] = "transparent";
  }

  return styles as React.CSSProperties;
}
