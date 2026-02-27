/**
 * [SYSTEM COMPONENT]: LAYOUT_ENGINE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure Server Component | GPU Acceleration | Zero-JS
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import type { ReactNode } from "react";
import React from "react";
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
    large: "gap-y-24 md:gap-y-36", // Optimized for better flow
    specialist: "gap-y-40 md:gap-y-64",
  };

  // [SERVER_ONLY]: Logic executed during RSC rendering
  const dynamicStyles = injectThemeVariables(theme);
  const ambientColor = theme?.primary || "var(--brand-primary)";

  return (
    <div
      className={cn(
        "relative flex min-h-[100dvh] w-full flex-col overflow-x-hidden",
        "transition-colors duration-1000 ease-in-out", // Smoother transition
        "bg-[var(--surface-main)] text-[var(--text-primary)]",
        "touch-pan-y antialiased selection:bg-[var(--brand-primary)]/20",
        className,
      )}
      style={
        {
          ...dynamicStyles,
          // [HARDWARE_ACCELERATION]: Forced GPU compositing
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        } as React.CSSProperties
      }
      data-theme-mode={theme?.mode || "light"}
    >
      {/* --- LAYER 01: INFRASTRUCTURE (The Visual Grid) --- */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.02] select-none" // Reduced opacity for subtlety
        style={{
          backgroundImage: "url(/grid-pattern.svg)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* [DYNAMIC_AURA]: Enhanced atmosphere for depth */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#020617]/5 dark:bg-black/20" />{" "}
        {/* Added overlay for contrast */}
        <AmbientBackground color={ambientColor} opacity={theme?.mode === "dark" ? 0.15 : 0.08} />
      </div>

      {/* --- LAYER 02: CONTENT HUB --- */}
      <main
        className={cn(
          "relative z-10 flex w-full flex-auto flex-col",
          "transition-opacity duration-700 ease-in-out",
          "isolation-auto",
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

export default LayoutEngine;
