/**
 * [UTILS]: CORE_SYSTEM_HELPERS v18.0.0 (SYNCHRONIZED)
 * [STRATEGY]: Identity Overriding | OKLCH Precision | Tailwind 4 optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { SITE_CONFIG } from "@/constants/site-config";
import type { ThemeConfig } from "@/types";

/** [UI]: Standard Tailwind Merger */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** * [SEO]: Path to Absolute URL Conversion
 * [FIXED]: มั่นใจว่าสอดคล้องกับ SITE_CONFIG (www) และจัดการ slash อย่างแม่นยำ
 */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");

  if (!path || path === "/" || path === "") return `${baseUrl}/`;
  if (path.startsWith("http")) return path;

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  // คืนค่า URL ที่สะอาดและคงโครงสร้าง www ไว้เสมอ
  return `${baseUrl}${cleanPath.replace(/\/+$/, "")}`;
}

/**
 * [COLOR_MATH]: hexToOklch
 * @description แปลง Hex เป็นค่า L C H (รองรับทั้ง 3 และ 6 หลัก)
 */
export function hexToOklch(hex: string): { l: number; c: number; h: number } | null {
  // รองรับ Hex แบบสั้น (#abc)
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

  // Linearize RGB
  [r, g, b] = [r, g, b].map((v) => (v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92));

  // Oklch Matrix Transformation
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6740398696 * g + 0.1140566322 * b;
  const s = 0.0883024619 * r + 0.2817185376 * g + 0.6299791005 * b;

  const l_ = Math.cbrt(l);
  const m_ = Math.cbrt(m);
  const s_ = Math.cbrt(s);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

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
 * [THEME]: injectThemeVariables
 * @description กลไกการฉีดค่าธีมพร้อมระบบ Identity Overriding
 */
export function injectThemeVariables(theme?: ThemeConfig): React.CSSProperties {
  const styles: Record<string, string> = {};
  if (!theme) return styles as React.CSSProperties;

  const defaultRadius = "2.5rem";
  const defaultFont = "var(--font-sans)";

  // Core Surfaces
  styles["--surface-main"] = theme.background || (theme.mode === "dark" ? "#020617" : "#ffffff");
  styles["--text-primary"] = theme.foreground || (theme.mode === "dark" ? "#f8fafc" : "#0f172a");

  // Identity Overrides
  styles["--radius"] = theme.radius || defaultRadius;
  styles["--font-primary"] = theme.fontFamily || defaultFont;
  styles["--border-width"] = theme.borderWidth || "1px";

  // [ENGINE]: OKLCH Dynamic Generator
  const processColor = (hex: string, key: string) => {
    const lch = hexToOklch(hex);
    if (lch) {
      const raw = `${lch.l} ${lch.c} ${lch.h}`;
      styles[`--brand-${key}-raw`] = raw;
      styles[`--brand-${key}`] = `oklch(${raw})`;
      // [NEW]: Contrast Text Logic (Simple L-threshold)
      styles[`--brand-${key}-fg`] = lch.l < 0.6 ? "#ffffff" : "#000000";
    } else {
      // Fallback กรณี Hex พัง
      styles[`--brand-${key}`] = hex;
    }
  };

  processColor(theme.primary, "primary");
  if (theme.secondary) processColor(theme.secondary, "secondary");
  if (theme.accent) processColor(theme.accent, "accent");

  return styles as React.CSSProperties;
}
