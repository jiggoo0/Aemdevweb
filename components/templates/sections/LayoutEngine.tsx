/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE_V17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Atmospheric Orchestration | Theme-Aware Depth | Deterministic Build
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 * [LOCATION]: @/components/layout/LayoutEngine.tsx
 */

import type { CSSProperties, ReactNode } from "react";
import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  readonly theme?: {
    readonly primary?: string;
    readonly background?: string;
  };
}

/**
 * @component LayoutEngine
 * @description แกนกลางการจัดวางที่ควบคุมแรงดึงดูดสายตา (Visual Gravity) และบรรยากาศของระบบ
 * [STABILIZED]: แก้ไขระบบ Path Mapping และจูนค่าความสว่าง Ambient สำหรับ Multi-Theme
 */
function LayoutEngine({
  children,
  className,
  spacing = "large",
  theme,
}: LayoutEngineProps) {
  
  // [SPACING ARCHITECTURE]: มาตราส่วนช่องไฟระดับวิศวกรรม
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-16 md:gap-y-24",
    medium: "gap-y-28 md:gap-y-36",
    large: "gap-y-40 md:gap-y-52",
    specialist: "gap-y-52 md:gap-y-72",
  };

  // [LOGIC]: Dynamic Theme Injection แบบปลอดภัยต่อระบบ SSR/Hydration
  const dynamicStyles = {
    ...(theme?.primary && {
      "--color-brand-primary": theme.primary,
    }),
    ...(theme?.background && {
      "--color-surface-main": theme.background,
    }),
  } as CSSProperties;

  return (
    <div
      className="bg-surface-main relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-700"
      style={dynamicStyles}
    >
      {/* 01. ATMOSPHERIC PHYSICS: เลเยอร์พื้นหลังเชิงโครงสร้าง */}
      
      
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        {/* Infrastructure Grid: ปรับตาม Border Token ของธีม */}
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />

        {/* Layered Ambient Lighting: เชื่อมโยงกับ --ambient-opacity ของระบบธีม */}
        <div className="ambient-aura absolute -top-[10%] -left-[10%] h-[800px] w-[800px] opacity-[var(--ambient-opacity)] blur-[100px]" />
        <div className="ambient-aura absolute -right-[5%] bottom-[10%] h-[600px] w-[600px] opacity-[var(--ambient-opacity)] blur-[80px]" />

        {/* Hybrid Vignette: สร้างมิติความลึกด้วย Radial Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,var(--color-surface-main)_100%)] opacity-60" />
      </div>

      {/* 02. STRATEGIC CONTENT FLOW: พื้นที่เรนเดอร์ Node หลัก */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          spacingMap[spacing],
          className,
        )}
      >
        {children}
      </main>

      {/* 03. INFRASTRUCTURE SIGNATURE: ระบบยืนยันมาตรฐาน Core Performance */}
      <footer className="relative z-10 container mx-auto mt-auto px-6 pt-20 pb-12">
        <div className="border-border flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative h-2 w-2">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-40" />
              <div className="bg-brand-primary relative h-2 w-2 rounded-full shadow-glow" />
            </div>
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Engineered_Node v{SITE_CONFIG.project.version} | {SITE_CONFIG.business.established.split('-')[0]}.Archive
            </span>
          </div>

          <div className="text-text-muted hidden items-center gap-8 font-mono text-[8px] font-bold tracking-[0.3em] uppercase md:flex">
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand-primary/40" />
              Stability: 100%_Deterministic
            </span>
            <span className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-brand-primary/40" />
              Environment: Specialist_Production
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default memo(LayoutEngine);
