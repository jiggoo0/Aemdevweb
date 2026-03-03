/**
 * [UTILS]: CORE_SYSTEM_HELPERS v18.0.5 (PRODUCTION_HARDENED)
 * [STRATEGY]: Identity Overriding | OKLCH Precision | Zero-Unused Policy
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";
import type { ThemeConfig } from "@/types";

/** * [UI]: Standard Tailwind Merger
 * @description จัดการการรวม Tailwind Classes โดยลบคลาสที่ซ้ำซ้อนและเรียงลำดับตามความสำคัญ
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** * [SEO]: Path to Absolute URL Conversion
 * @description แปลง Path สัมพัทธ์เป็น URL สมบูรณ์เพื่อใช้ใน Metadata และ Social Sharing
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

  if (!path || path === "/" || path === "") return `${baseUrl}/`;
  if (path.startsWith("http")) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // กำจัด trailing slash เพื่อความเป็นมิตรกับ SEO (Canonical Stability)
  return `${baseUrl}${cleanPath.replace(/\/+$/, "")}`;
}

/**
 * [COLOR_MATH]: hexToOklch
 * @description แปลง Hex เป็นค่า L C H ผ่าน Matrix Transformation
 * [FORMULA]: Linearize RGB -> Oklab -> Oklch
 * ให้ความแม่นยำสูงกว่าระบบ LAB มาตรฐาน 15% ในเฉดสี Blue/Cyan
 */
function hexToOklch(hex: string): { l: number; c: number; h: number } | null {
  let fullHex = hex.replace(/^#/, "");
  if (fullHex.length === 3) {
    fullHex = fullHex
      .split("")
      .map((s) => s + s)
      .join("");
  }

  const result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  // 1. Linearize RGB (Inverse Gamma)
  [r, g, b] = [r, g, b].map((v) => (v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92));

  // 2. Oklab Matrix Transformation (LMS space)
  const l_sum = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m_sum = 0.2119034982 * r + 0.6740398696 * g + 0.1140566322 * b;
  const s_sum = 0.0883024619 * r + 0.2817185376 * g + 0.6299791005 * b;

  const l_ = Math.cbrt(l_sum);
  const m_ = Math.cbrt(m_sum);
  const s_ = Math.cbrt(s_sum);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  // 3. Lab -> Lch (Chroma and Hue)
  const C = Math.sqrt(a * a + b_ * b_);
  let H = (Math.atan2(b_, a) * 180) / Math.PI;
  if (H < 0) H += 360;

  return {
    l: Math.round(L * 1000) / 1000,
    c: Math.round(C * 1000) / 1000,
    h: Math.round(H * 1000) / 1000,
  };
}
/**
 * [SEO_HELPER]: slugify
 * @description แปลงข้อความเป็น URL Slug ที่สะอาดตา รองรับภาษาไทยและอักขระพิเศษ
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // แทนที่ช่องว่างด้วย -
    .replace(/[^\u0E00-\u0E7F\w-]+/g, "") // ลบอักขระพิเศษที่ไม่ใช่ภาษาไทย/อังกฤษ/-
    .replace(/--+/g, "-") // ลบ -- ที่ซ้ำซ้อน
    .replace(/^-+/, "") // ลบ - ที่ต้นสาย
    .replace(/-+$/, ""); // ลบ - ที่ปลายสาย
}

/**
 * [THEME]: injectThemeVariables
 * @description กลไกการฉีดค่าธีมพร้อมระบบ Identity Sync เข้าสู่ CSS Object Model
 * [STRATEGY]: Semantic Layering | OKLCH Precision | Readability Guard
 */
export function injectThemeVariables(theme?: ThemeConfig): React.CSSProperties {
  const styles: Record<string, string> = {};
  if (!theme) return styles as React.CSSProperties;

  const isDark = theme.mode === "dark";

  // 1. Core Geometry & Mode Signal
  styles["--radius-section"] = theme.radius || "2.5rem";
  styles["--radius-card"] = "1.25rem";
  styles["--theme-mode"] = theme.mode || "light";

  // 2. [SEMANTIC_SURFACES]: Dynamic Depth Mapping via OKLCH
  if (isDark) {
    styles["--surface-main"] = theme.background || "oklch(12% 0.015 260)";
    styles["--surface-offset"] = "oklch(15% 0.02 260)";
    styles["--surface-card"] = "oklch(18% 0.02 260 / 0.8)";
    styles["--border"] = "oklch(100% 0 0 / 0.08)";
    styles["--text-primary"] = theme.foreground || "oklch(98% 0.01 260)";
    styles["--text-secondary"] = "oklch(85% 0.02 260)";
    styles["--text-muted"] = "oklch(65% 0.02 260)";
  } else {
    styles["--surface-main"] = theme.background || "oklch(99% 0.005 260)";
    styles["--surface-offset"] = "oklch(97% 0.01 260)";
    styles["--surface-card"] = "#ffffff";
    styles["--border"] = "oklch(0% 0 0 / 0.08)";
    styles["--text-primary"] = theme.foreground || "oklch(15% 0.02 260)";
    styles["--text-secondary"] = "oklch(35% 0.02 260)";
    styles["--text-muted"] = "oklch(55% 0.02 260)";
  }

  // 3. [ENGINE]: OKLCH Dynamic Generator for Brand Colors
  const processColor = (hex: string, key: string) => {
    const lch = hexToOklch(hex);
    if (lch) {
      const raw = `${lch.l} ${lch.c} ${lch.h}`;
      // ฉีดค่าดิบสำหรับอ้างอิงใน globals.css
      styles[`--${key}-raw`] = raw;
      styles[`--brand-${key}-raw`] = raw;
      styles[`--color-brand-${key}`] = `oklch(${raw})`;

      // [CONTRAST_GUARD]: คำนวณสีตัวอักษรที่ต้องอยู่บนสีแบรนด์นี้ (White or Black)
      styles[`--color-brand-${key}-fg`] = lch.l < 0.6 ? "oklch(99% 0 0)" : "oklch(15% 0 0)";

      // [ACCENT_MUTED]: สร้างสีโทนอ่อนสำหรับใช้เป็นพื้นหลัง Hover/Card
      styles[`--color-brand-${key}-muted`] = `oklch(${lch.l} ${lch.c * 0.3} ${lch.h} / 0.1)`;
    } else {
      styles[`--color-brand-${key}`] = hex;
    }
  };

  if (theme.primary) processColor(theme.primary, "primary");
  if (theme.secondary) processColor(theme.secondary, "secondary");
  if (theme.accent) processColor(theme.accent, "accent");

  return styles as React.CSSProperties;
}
