/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v17.5.5 (STABILIZED)
 * [STRATEGY]: Atmospheric Orchestration | Dynamic Theme Injection | Zero-Jitter
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
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-16 md:gap-y-24",
    medium: "gap-y-28 md:gap-y-36",
    large: "gap-y-40 md:gap-y-52",
    specialist: "gap-y-52 md:gap-y-72",
  };

  const isTailwindBg = theme?.background?.startsWith("bg-");

  /**
   * [PERFORMANCE]: ใช้ useMemo เพื่อคำนวณสไตล์เฉพาะเมื่อ theme เปลี่ยนเท่านั้น
   * ลดภาระของ CPU บนอุปกรณ์ที่ทรัพยากรจำกัด (ARM/Termux)
   */
  const dynamicStyles = useMemo(() => {
    return {
      "--color-brand-primary": theme?.primary || "#2563eb", // Fallback to Default Blue
      "--color-brand-secondary": theme?.secondary || "#1e40af",
      ...(!isTailwindBg && theme?.background && { "--color-surface-main": theme.background }),
    } as CSSProperties;
  }, [theme, isTailwindBg]);

  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col overflow-clip transition-colors duration-700",
        isTailwindBg ? theme?.background : "bg-surface-main",
      )}
      style={dynamicStyles}
    >
      {/* 01. ATMOSPHERIC LAYER */}
      <AmbientBackground color={theme?.primary} opacity={0.15} />

      {/* 02. GRADIENT DEPTH: ใช้ opacity ต่ำลงเพื่อไม่ให้รบกวนการอ่าน (Readability) */}
      {theme?.gradient && (
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-0 bg-gradient-to-b opacity-40 mix-blend-soft-light",
            theme.gradient,
          )}
          aria-hidden="true"
        />
      )}

      {/* 03. CONTENT HUB */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          spacingMap[spacing],
          className,
        )}
      >
        {children}
      </main>

      {/* 04. SYSTEM SIGNATURE: เพิ่มขอบเขตให้ Container เพื่อความเนี๊ยบ */}
      <footer className="relative z-10 container mx-auto mt-auto px-6 py-12">
        <div className="border-border/10 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <div className="flex items-center gap-4">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-brand-primary)] shadow-[0_0_10px_var(--color-brand-primary)]" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
              Engineered_Node v{SITE_CONFIG.project.version} //{" "}
              {SITE_CONFIG.business.status || "Stable"}
            </span>
          </div>
          <div className="text-text-muted hidden items-center gap-8 font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-20 md:flex">
            <span>Core: Next.js_16.1</span>
            <span>Logic: Deterministic_v2</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LayoutEngine;
