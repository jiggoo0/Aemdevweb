/**
 * [UTILS]: CORE_SYSTEM_HELPERS v17.9.109 (STABLE_OKLCH)
 * [STRATEGY]: Identity Overriding | CSS Variable Injection | Tailwind 4 optimized
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

/** [SEO]: Path to Absolute URL Conversion */
export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  if (!path || path === "/") return baseUrl;
  if (path.startsWith("http")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath.replace(/\/+$/, "")}`;
}

/**
 * [COLOR_MATH]: hexToOklch
 * @description แปลง Hex เป็นค่า L C H มอบความแม่นยำสูงตามการมองเห็น
 */
export function hexToOklch(hex: string): { l: number; c: number; h: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  [r, g, b] = [r, g, b].map((v) => (v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92));

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
 * @description กลไกการฉีดค่าธีมพร้อมระบบ Identity Overriding (Radius & Fonts)
 */
export function injectThemeVariables(theme?: ThemeConfig): React.CSSProperties {
  if (!theme) return {} as React.CSSProperties;

  // [FALLBACKS]: กำหนดค่าพื้นฐานของระบบ
  const defaultRadius = "2.5rem";
  const defaultFont = "var(--font-sans)";

  const styles: Record<string, string> = {
    // --- Functional Surfaces ---
    "--surface-main": theme.background || (theme.mode === "dark" ? "#020617" : "#ffffff"),
    "--text-primary": theme.foreground || (theme.mode === "dark" ? "#f8fafc" : "#0f172a"),

    // --- Identity Overrides (The Identity Switcher) ---
    // หาก Node ระบุ radius: "0px" หรือ "none" มันจะล้างความมนทิ้งทั้งหน้า
    "--radius": theme.radius || defaultRadius,

    // สลับชุดฟอนต์หลัก เช่น สลับไปใช้ var(--font-mono) สำหรับ Industrial Vibe
    "--font-primary": theme.fontFamily || defaultFont,

    // เส้นขอบแบบปรับแต่งได้ (ใช้สำหรับ Blueprint Style)
    "--border-width": theme.borderWidth || "1px",
  };

  // [ENGINE]: Primary Color Resolution (OKLCH)
  const primaryLch = hexToOklch(theme.primary);
  if (primaryLch) {
    const rawVal = `${primaryLch.l} ${primaryLch.c} ${primaryLch.h}`;
    styles["--brand-primary-raw"] = rawVal;
    styles["--brand-primary"] = `oklch(${rawVal})`;
  }

  // [ENGINE]: Secondary & Accent
  if (theme.secondary) {
    const sLch = hexToOklch(theme.secondary);
    if (sLch) styles["--brand-secondary-raw"] = `${sLch.l} ${sLch.c} ${sLch.h}`;
  }
  if (theme.accent) {
    const aLch = hexToOklch(theme.accent);
    if (aLch) styles["--brand-accent-raw"] = `${aLch.l} ${aLch.c} ${aLch.h}`;
  }

  return styles as React.CSSProperties;
}
