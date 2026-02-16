/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v18.0.0 (IDENTITY_SYNC)
 * [STRATEGY]: Total Identity Switcher | CSS Variable Orchestration | Fluid Spacing
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { CSSProperties, ReactNode } from "react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import AmbientBackground from "@/components/ui/AmbientBackground";
import type { ThemeConfig } from "@/types";

// --- 01. TYPE DEFINITIONS ---
type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  readonly theme?: Partial<ThemeConfig>; // [UPGRADED]: รองรับการทำ Identity Switcher เต็มรูปแบบ
}

const LayoutEngine = ({ children, className, spacing = "large", theme }: LayoutEngineProps) => {
  /**
   * [SPACING_MATRIX]: ระบบจัดการระยะห่างแบบ Fluid Gap
   * ปรับจังหวะการเว้นช่องไฟระหว่าง Section อัตโนมัติตามค่าความสำคัญของ Node
   */
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-12 md:gap-y-16",
    medium: "gap-y-20 md:gap-y-28",
    large: "gap-y-32 md:gap-y-48",
    specialist: "gap-y-40 md:gap-y-64",
  };

  const isTailwindBg = theme?.background?.startsWith("bg-");

  /**
   * [IDENTITY_ORCHESTRATION]: การฉีดตัวแปรอัตลักษณ์เข้าสู่ CSS Runtime
   * กลไกนี้ช่วยให้ Node อย่าง "โคราช" กลายเป็นเหลี่ยมคม (Radius 0)
   * ในขณะที่ "เชียงใหม่" ดูนุ่มนวลตามค่าที่กำหนดไว้ใน Node Data
   */
  const dynamicStyles = useMemo(() => {
    const styles: Record<string, string | undefined> = {};

    // 1. CORE COLOR PALETTE
    if (theme?.primary) {
      styles["--brand-primary"] = theme.primary;
      styles["--color-brand-primary"] = theme.primary;
    }
    if (theme?.secondary) {
      styles["--brand-secondary"] = theme.secondary;
    }
    if (theme?.accent) {
      styles["--brand-accent"] = theme.accent;
    }

    // 2. GEOMETRY & IDENTITY (Radius & Borders)
    // [FIX]: ป้องกันการแตกของ Layout ด้วยค่า Fallback มาตรฐาน
    styles["--brand-radius"] = theme?.radius ?? "0.75rem";
    styles["--brand-border-width"] = theme?.borderWidth ?? "1px";

    // 3. TYPOGRAPHY INJECTION
    if (theme?.fontFamily) {
      styles["--font-brand"] = theme.fontFamily;
      styles["fontFamily"] = theme.fontFamily; // บังคับใช้ Font-Family ที่ Root ของ Node
    }

    // 4. SURFACE & ANTI-FLASH LOGIC
    if (!isTailwindBg && theme?.background) {
      styles["--surface-main"] = theme.background;
      styles["backgroundColor"] = theme.background;
    }

    if (theme?.foreground) {
      styles["--text-main"] = theme.foreground;
      styles["color"] = theme.foreground;
    }

    return styles as CSSProperties;
  }, [theme, isTailwindBg]);

  // คำนวณสี ambient โดยอ้างอิงจาก Primary Color ของ Node
  const ambientColor = theme?.primary || "var(--brand-primary)";

  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden transition-all duration-700",
        "selection:bg-brand-primary/30 selection:text-brand-primary",
        isTailwindBg ? theme?.background : "bg-surface-main text-text-main",
        className,
      )}
      style={dynamicStyles}
    >
      {/* --- LAYER 01: INFRASTRUCTURE (The Visual Grid) --- */}
      <div
        className="bg-infrastructure-grid pointer-events-none fixed inset-0 z-0 opacity-[0.04] select-none"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* [DYNAMIC_AURA]: ชั้นบรรยากาศสีฟุ้งที่เปลี่ยนตาม Identity ของแต่ละพื้นที่ */}
      <AmbientBackground color={ambientColor} opacity={theme?.mode === "dark" ? 0.2 : 0.1} />

      {/* --- LAYER 02: CONTENT HUB --- */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          "transition-all duration-500 ease-in-out",
          spacingMap[spacing],
        )}
      >
        {/* [IDENTITY_MASK]: เลเยอร์ Gradient เสริมกรณีระบุพิเศษใน Theme Node */}
        {theme?.gradient && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b opacity-40",
              theme.gradient,
            )}
            aria-hidden="true"
          />
        )}

        {children}
      </main>

      {/* Decorative Final Baseline */}
      <div className="via-brand-primary/10 absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};

export default LayoutEngine;
