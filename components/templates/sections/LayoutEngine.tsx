/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v17.9.105 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Atmospheric Orchestration | Dynamic Theme Injection | Gap Matrix
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { CSSProperties, ReactNode } from "react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import AmbientBackground from "@/components/ui/AmbientBackground";

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  readonly theme?: {
    readonly primary?: string;
    readonly secondary?: string;
    readonly background?: string;
    readonly gradient?: string;
  };
}

const LayoutEngine = ({ children, className, spacing = "large", theme }: LayoutEngineProps) => {
  /**
   * [SPACING_LOGIC]: ระบบจัดระยะห่างแนวตั้งระหว่าง Section
   * [FIXED]: นำไปใช้งานใน <main> เพื่อลด Warning และสร้าง Layout ที่สมดุล
   */
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-12 md:gap-y-20",
    medium: "gap-y-24 md:gap-y-32",
    large: "gap-y-32 md:gap-y-48",
    specialist: "gap-y-40 md:gap-y-64",
  };

  const isTailwindBg = theme?.background?.startsWith("bg-");

  /**
   * [THEME_INJECTION]: กลไกการฉีดค่าสีเข้าสู่ CSS Runtime
   * [FIX]: ใช้ backgroundColor (camelCase) เพื่อรองรับ React 19+ Strict Mode
   */
  const dynamicStyles = useMemo(() => {
    const styles: Record<string, string | undefined> = {};

    if (theme?.primary) {
      styles["--brand-primary"] = theme.primary;
      styles["--color-brand-primary"] = theme.primary;
    }

    if (theme?.secondary) {
      styles["--brand-secondary"] = theme.secondary;
      styles["--color-brand-secondary"] = theme.secondary;
    }

    // [ANTI-WHITE-FLASH]: ผูกค่าสีพื้นหลังเข้ากับสถาปัตยกรรมหลัก
    if (!isTailwindBg && theme?.background) {
      styles["--surface-main"] = theme.background;
      styles["backgroundColor"] = theme.background;
    }

    return styles as CSSProperties;
  }, [theme, isTailwindBg]);

  const ambientColor = theme?.primary || "var(--brand-primary)";

  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden transition-colors duration-1000",
        "selection:bg-brand-primary/30 selection:text-brand-primary",
        isTailwindBg ? theme?.background : "bg-surface-main",
        className,
      )}
      style={dynamicStyles}
    >
      {/* --- LAYER 01: ATMOSPHERIC EFFECTS (Fixed Infrastructure) --- */}
      <div
        className="bg-infrastructure-grid pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* [DYNAMIC_AURA]: พื้นหลังบรรยากาศที่เปลี่ยนตามสีแบรนด์ */}
      <AmbientBackground color={ambientColor} opacity={0.15} />

      {/* --- LAYER 02: MAIN CONTENT HUB --- */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          spacingMap[spacing], // [RESOLVED]: เรียกใช้งาน Spacing Matrix เรียบร้อย
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default LayoutEngine;
