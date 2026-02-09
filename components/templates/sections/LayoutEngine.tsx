/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v17.5.0 (THEME_AWARE)
 * [STRATEGY]: Atmospheric Orchestration | Dynamic Theme Injection | Visual Hierarchy
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { CSSProperties, ReactNode } from "react";
import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import AmbientBackground from "@/components/ui/AmbientBackground";

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  /**
   * [THEME INJECTION]: รับค่า Theme จาก Master Registry มาอัดฉีดเข้าสู่ UI
   */
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string; // รองรับทั้ง Hex (#000) และ Tailwind Class (bg-zinc-950)
    readonly gradient?: string; // รองรับ Tailwind Gradient (from-... via-... to-...)
  };
}

const LayoutEngine = ({ children, className, spacing = "large", theme }: LayoutEngineProps) => {
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-16 md:gap-y-24",
    medium: "gap-y-28 md:gap-y-36",
    large: "gap-y-40 md:gap-y-52",
    specialist: "gap-y-52 md:gap-y-72",
  };

  // [LOGIC]: ตรวจสอบประเภทของ Background (Tailwind vs Hex)
  const isTailwindBg = theme?.background?.startsWith("bg-");

  // [LOGIC]: อัดฉีดสีเข้าสู่ CSS Variables เพื่อให้ Component ลูกใช้งานได้
  const dynamicStyles = {
    ...(theme?.primary && { "--color-brand-primary": theme.primary }),
    ...(theme?.secondary && { "--color-brand-secondary": theme.secondary }),
    ...(!isTailwindBg && theme?.background && { "--color-surface-main": theme.background }),
  } as CSSProperties;

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-700",
        isTailwindBg ? theme?.background : "bg-surface-main",
      )}
      style={dynamicStyles}
    >
      {/* 01. ATMOSPHERIC LAYER: ส่งสี Primary ไปที่ Aura โดยตรง */}
      <AmbientBackground color={theme?.primary} opacity={0.15} />

      {/* 02. GRADIENT DEPTH: เลเยอร์ไล่เฉดสีเพื่อความพรีเมียม */}
      {theme?.gradient && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 bg-gradient-to-b opacity-80 mix-blend-soft-light",
            theme.gradient,
          )}
          aria-hidden="true"
        />
      )}

      {/* 03. CONTENT HUB: ส่วนเนื้อหาหลัก */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          spacingMap[spacing],
          className,
        )}
      >
        {children}
      </main>

      {/* 04. SYSTEM SIGNATURE */}
      <footer className="relative z-10 container mx-auto mt-auto px-6 pt-20 pb-12">
        <div className="border-border/30 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-60">
              Engineered_Node v{SITE_CONFIG.project.version} // Specialist_Stable
            </span>
          </div>
          <div className="text-text-muted hidden items-center gap-8 font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-30 md:flex">
            <span>Stability: 100%_Deterministic</span>
            <span>Environment: Production_Node</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default memo(LayoutEngine);
