/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v18.0.2 (PERFORMANCE_HARDENED)
 * [STRATEGY]: GPU Acceleration | Paint Flashing Mitigation | Composite Isolation
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode } from "react";
import React, { useMemo } from "react";
import { cn, injectThemeVariables } from "@/lib/utils";
import AmbientBackground from "@/components/ui/AmbientBackground";
import type { ThemeConfig } from "@/types";

type SpacingLevel = "none" | "small" | "medium" | "large" | "specialist";

interface LayoutEngineProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly spacing?: SpacingLevel;
  readonly theme?: ThemeConfig;
}

const LayoutEngine = ({ children, className, spacing = "large", theme }: LayoutEngineProps) => {
  const spacingMap: Record<SpacingLevel, string> = {
    none: "gap-y-0",
    small: "gap-y-12 md:gap-y-16",
    medium: "gap-y-20 md:gap-y-28",
    large: "gap-y-32 md:gap-y-48",
    specialist: "gap-y-40 md:gap-y-64",
  };

  const dynamicStyles = useMemo(() => injectThemeVariables(theme), [theme]);
  const ambientColor = theme?.primary || "var(--brand-primary)";

  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden",
        "transition-colors duration-700 ease-in-out", // [FIX]: เปลี่ยนจาก transition-all เป็น transition-colors
        "bg-[var(--surface-main)] text-[var(--text-primary)]",
        "touch-pan-y antialiased", // [FIX]: เพิ่ม Antialiasing และจำกัดการจัดการ Touch
        className,
      )}
      style={{
        ...dynamicStyles,
        // [HARDWARE_ACCELERATION]: บังคับให้เบราว์เซอร์ใช้ GPU ในการประมวลผลเลเยอร์นี้
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
      data-theme-mode={theme?.mode || "light"}
    >
      {/* --- LAYER 01: INFRASTRUCTURE (The Visual Grid) --- */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] select-none"
        style={{
          backgroundImage: "url(/grid-pattern.svg)",
          // [FIX]: ป้องกันการกระพริบของ Fixed Element ขณะ Scroll
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* [DYNAMIC_AURA]: ชั้นบรรยากาศสีฟุ้ง */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <AmbientBackground color={ambientColor} opacity={theme?.mode === "dark" ? 0.12 : 0.06} />
      </div>

      {/* --- LAYER 02: CONTENT HUB --- */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          "transition-opacity duration-500 ease-in-out", // [FIX]: เจาะจงเฉพาะ Opacity
          "isolation-auto", // [FIX]: แยก Layer Context เพื่อลดการ Blending ที่ซับซ้อน
          spacingMap[spacing],
        )}
      >
        {theme?.gradient && (
          <div
            className={cn(
              "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b opacity-25",
              theme.gradient,
            )}
            style={{ willChange: "opacity" }}
            aria-hidden="true"
          />
        )}

        {children}
      </main>

      {/* Decorative Final Baseline */}
      <div className="pointer-events-none absolute bottom-0 h-px w-full bg-gradient-to-r from-transparent via-[var(--brand-primary)]/20 to-transparent" />
    </div>
  );
};

export default React.memo(LayoutEngine);
