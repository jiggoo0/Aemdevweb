/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v17.9.9 (GPU_OPTIMIZED)
 * [STRATEGY]: GPU-Accelerated Atmosphere | Organic Pulse | Zero-LCP Impact
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly gridOpacity?: number;
  readonly color?: string;
  readonly opacity?: number;
}

function AmbientBackground({
  className,
  gridOpacity = 0.03,
  color,
  opacity,
}: AmbientBackgroundProps) {
  // [PERFORMANCE]: Pre-compute styles to avoid inline object thrashing
  const auraStyle = {
    "--aura-color": color || "var(--color-brand-primary, #2563eb)",
    "--aura-opacity": opacity ?? 0.12,
  } as React.CSSProperties;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "bg-surface-main transition-colors duration-1000",
        className,
      )}
      aria-hidden="true"
      style={auraStyle}
    >
      {/* 01. TECHNICAL GRID */}
      <div
        className="bg-infrastructure-grid absolute inset-0 transition-opacity duration-1000 will-change-transform"
        style={{
          opacity: gridOpacity,
          maskImage: "radial-gradient(circle at center, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, black, transparent 75%)",
        }}
      />

      {/* 02. DYNAMIC AURAS (GPU PROMOTED) */}
      <div
        className={cn(
          "absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] rounded-full",
          "bg-[var(--aura-color)] opacity-[var(--aura-opacity)]",
          "mix-blend-soft-light blur-[80px] md:blur-[180px]",
          "animate-float transform-gpu will-change-transform",
        )}
      />

      <div
        className={cn(
          "absolute -right-[5%] -bottom-[5%] h-[40vw] w-[40vw] rounded-full",
          "bg-[var(--aura-color)] opacity-[calc(var(--aura-opacity)*0.6)]",
          "mix-blend-plus-lighter blur-[60px] md:blur-[140px]",
          "animate-pulse-slow transform-gpu will-change-transform",
        )}
      />

      {/* 03. DEPTH SHIELD */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--color-surface-main)_120%)] opacity-80" />
    </div>
  );
}

export default memo(AmbientBackground);
