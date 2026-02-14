/**
 * [COMPONENT]: DYNAMIC_THEME_WRAPPER v17.9.113 (STABLE_FIX)
 * [STRATEGY]: OKLCH Object Resolution | Null-Safety | Perceptual Theme Bridge
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import { injectThemeVariables, hexToOklch, cn } from "@/lib/utils";
import type { ThemeConfig } from "@/types";

interface DynamicThemeWrapperProps {
  readonly theme?: ThemeConfig;
  readonly children: React.ReactNode;
  readonly className?: string;
}

/**
 * @description Wrapper อัจฉริยะที่ไม่ได้แค่ฉีดสี แต่คำนวณความสว่าง (Lightness)
 * เพื่อรองรับการปรับ UI ตามสภาพแวดล้อมของแต่ละแบรนด์อัตโนมัติ
 */
const DynamicThemeWrapper = ({ theme, children, className }: DynamicThemeWrapperProps) => {
  // [THEME_LOGIC]: ฉีด CSS Variables พื้นฐานเข้าสู่ Root
  const themeStyles = injectThemeVariables(theme);

  // [ADVANCED_LOGIC]: สกัดค่าความสว่าง (Lightness) จาก OKLCH Object
  // แก้ไข Error: hexToOklch คืนค่าเป็น { l, c, h } ไม่ใช่ string
  const brandLightness = useMemo(() => {
    if (!theme?.primary) return "0.5";

    const oklch = hexToOklch(theme.primary);

    // [FIXED]: ตรวจสอบค่า null และเข้าถึง property .l โดยตรง
    if (!oklch) return "0.5";

    return oklch.l.toString(); // แปลงค่า Lightness (0-1) เป็น string
  }, [theme?.primary]);

  return (
    <main
      style={
        {
          ...themeStyles,
          // ฉีดค่าความสว่างเข้าสู่ CSS Variable เพื่อให้ Tailwind นำไปคำนวณต่อได้
          "--brand-l": brandLightness,
        } as React.CSSProperties
      }
      data-theme-mode={theme?.mode || "light"}
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-x-hidden",
        "bg-[var(--brand-bg)] text-[var(--brand-foreground)]",
        "transition-colors duration-500 ease-in-out",
        className,
      )}
    >
      {/* [ANTI-WHITE-FLASH]: แผ่นสีระดับ Hardware-Accelerated 
          ป้องกันอาการจอขาวก่อน Hydration สำเร็จ 
      */}
      <div
        className="pointer-events-none fixed inset-0 z-[-1] bg-[var(--brand-bg)]"
        aria-hidden="true"
      />

      {children}
    </main>
  );
};

export default memo(DynamicThemeWrapper);
