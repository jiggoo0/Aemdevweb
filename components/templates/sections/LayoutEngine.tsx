/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v17.9.1 (STABILIZED)
 * [STRATEGY]: Atmospheric Orchestration | Dynamic Theme Injection | Persona Sync
 * [MAINTAINER]: AEMDEVWEB Specialist Team (นายเอ็มซ่ามากส์)
 */

import type { CSSProperties, ReactNode } from "react";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
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
  // [SPACING_LOGIC]: การจัดระยะห่างแกน Y ระหว่าง Section ต่างๆ แบบ Responsive
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-16 md:gap-y-24",
    medium: "gap-y-28 md:gap-y-40",
    large: "gap-y-40 md:gap-y-56",
    specialist: "gap-y-52 md:gap-y-80",
  };

  const isTailwindBg = theme?.background?.startsWith("bg-");

  // [THEME_INJECTION]: ฉีดตัวแปร CSS เพื่อควบคุมสีแบรนด์ในระดับ Component Tree
  const dynamicStyles = useMemo(
    () =>
      ({
        "--color-brand-primary": theme?.primary || "oklch(0.72 0.18 150)",
        "--color-brand-secondary": theme?.secondary || "oklch(0.6 0.15 150)",
        ...(!isTailwindBg && theme?.background && { "--color-surface-main": theme.background }),
      }) as CSSProperties,
    [theme, isTailwindBg],
  );

  return (
    <div
      className={cn(
        /* [FIX]: บังคับพื้นหลังและสีตัวอักษรให้ตรงกับ Theme หลัก เพื่อป้องกัน White Flash */
        "relative flex min-h-screen w-full flex-col overflow-x-hidden transition-colors duration-1000",
        isTailwindBg ? theme?.background : "bg-surface-main",
        className,
      )}
      style={dynamicStyles}
    >
      {/* --- LAYER 01: ATMOSPHERIC EFFECTS --- */}
      <AmbientBackground color={theme?.primary} opacity={0.15} />

      {theme?.gradient && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 bg-gradient-to-b opacity-30 mix-blend-soft-light",
            theme.gradient,
          )}
          aria-hidden="true"
        />
      )}

      {/* --- LAYER 02: MAIN CONTENT HUB --- */}
      <main className={cn("relative z-10 flex w-full flex-auto flex-col", spacingMap[spacing])}>
        {children}
      </main>

      {/* --- LAYER 03: SYSTEM SIGNATURE (Persona Validation) --- */}
      <footer className="relative z-10 container mx-auto mt-auto px-6 py-16">
        <div className="border-border/10 flex flex-col items-center justify-between gap-8 border-t pt-10 md:flex-row">
          <div className="flex items-center gap-5">
            <div
              className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_12px_var(--color-brand-primary)]"
              aria-hidden="true"
            />
            <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-50">
              {SITE_CONFIG.brandName} // Specialist_Node v{SITE_CONFIG.project.version}
            </span>
          </div>
          <div className="text-text-muted flex items-center gap-10 font-mono text-[9px] font-bold tracking-[0.2em] uppercase opacity-30">
            <span>Arch: Next.js_16.1.6</span>
            <span>Persona: {SITE_CONFIG.expert.displayName}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutEngine;
