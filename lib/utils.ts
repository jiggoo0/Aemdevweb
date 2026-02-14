/**
 * [UTILS]: CORE_SYSTEM_HELPERS v17.9.107 (OKLCH_ENGINE_INTEGRATED)
 * [STRATEGY]: Perceptual Color Math | CSS Variable Injection | Tailwind 4 optimized
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
 * @description แปลง Hex เป็นค่า L C H (Raw Numbers) เพื่อใช้ใน CSS oklch()
 * มอบความแม่นยำสูงตามการมองเห็นของมนุษย์
 */
export function hexToOklch(hex: string): { l: number; c: number; h: number } | null {
  // 1. แปลง Hex เป็น RGB (0-1)
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return null;

  let r = parseInt(result[1], 16) / 255;
  let g = parseInt(result[2], 16) / 255;
  let b = parseInt(result[3], 16) / 255;

  // 2. Linearize RGB (sRGB to Linear RGB)
  [r, g, b] = [r, g, b].map((v) => (v > 0.04045 ? Math.pow((v + 0.055) / 1.055, 2.4) : v / 12.92));

  // 3. RGB to OKLAB (Approximate Perceptual Matrix)
  const l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
  const m = 0.2119034982 * r + 0.6740398696 * g + 0.1140566322 * b;
  const s = 0.0883024619 * r + 0.2817185376 * g + 0.6299791005 * b;

  const l_ = Math.pow(l, 1 / 3);
  const m_ = Math.pow(m, 1 / 3);
  const s_ = Math.pow(s, 1 / 3);

  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_;
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_;
  const b_ = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_;

  // 4. OKLAB to OKLCH
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
 * @description กลไกการฉีดค่าธีมเข้าสู่ CSS Variables พร้อมรองรับ OKLCH Engine
 */
export function injectThemeVariables(theme?: ThemeConfig): React.CSSProperties {
  if (!theme) return {} as React.CSSProperties;

  const styles: Record<string, string> = {
    // --- Hex Fallback (For simple usage) ---
    "--brand-primary": theme.primary,
    "--brand-foreground": theme.foreground || (theme.mode === "dark" ? "#ffffff" : "#0f172a"),

    // --- OKLCH Engine (For Advanced UI/Tailwind 4) ---
    // สร้างตัวแปรดิบ (Raw) เพื่อให้ใช้ oklch(var(--brand-primary-lch) / <opacity>) ได้
  };

  const primaryLch = hexToOklch(theme.primary);
  if (primaryLch) {
    styles["--brand-primary-lch"] = `${primaryLch.l} ${primaryLch.c} ${primaryLch.h}`;
    // ฉีด Full Value เพื่อใช้กับ Tailwind 4 color configuration
    styles["--color-brand-primary"] = `oklch(${primaryLch.l} ${primaryLch.c} ${primaryLch.h})`;
  }

  // [ANTI-WHITE-FLASH & SURFACE LOGIC]
  if (theme.background && !theme.background.startsWith("bg-")) {
    styles["--surface-main"] = theme.background;
    styles["--brand-bg"] = theme.background;

    // สร้าง OKLCH สำหรับพื้นหลังเพื่อทำ Dynamic Contrast
    const bgLch = hexToOklch(theme.background);
    if (bgLch) styles["--brand-bg-lch"] = `${bgLch.l} ${bgLch.c} ${bgLch.h}`;
  } else {
    styles["--brand-bg"] = "transparent";
  }

  return styles as React.CSSProperties;
}
