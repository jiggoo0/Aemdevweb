/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v17.5.5 (STABILIZED)
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
  gridOpacity = 0.04, // ปรับลดลงเล็กน้อยเพื่อให้ดู Clean ขึ้น
  color,
  opacity,
}: AmbientBackgroundProps) {
  /**
   * [PERFORMANCE]: ใช้ CSS Variables เพื่อลดการ Re-paint
   * การเปลี่ยนสีผ่าน Variable จะลื่นกว่าการเปลี่ยนผ่าน Inline Style ตรงๆ
   */
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
      {/* 01. TECHNICAL GRID: ตารางโครงสร้างระดับสถาปัตยกรรม */}
      <div
        className="bg-infrastructure-grid absolute inset-0 transition-opacity duration-1000"
        style={{
          opacity: gridOpacity,
          maskImage: "radial-gradient(circle at center, black, transparent 80%)", // [ADD]: ให้ตารางจางหายไปตามขอบ
        }}
      />

      {/* 02. DYNAMIC AURAS: ใช้ transform-gpu เพื่อลดภาระ CPU */}
      {/* Main Aura (Top-Left) */}
      <div
        className={cn(
          "absolute -top-[20%] -left-[10%] h-[70vw] w-[70vw] rounded-full",
          "bg-[var(--aura-color)] opacity-[var(--aura-opacity)]",
          // [FIX]: ลด Blur บนมือถือเพื่อลดภาระ GPU (Mobile: 60px, Desktop: 150px)
          "mix-blend-soft-light blur-[60px] md:blur-[150px]",
          "animate-aura-float transform-gpu transition-colors duration-1000 will-change-transform",
        )}
      />

      {/* Secondary Aura (Bottom-Right) */}
      <div
        className={cn(
          "absolute -right-[10%] -bottom-[10%] h-[50vw] w-[50vw] rounded-full",
          "bg-[var(--aura-color)] opacity-[calc(var(--aura-opacity)*0.7)]",
          // [FIX]: ลด Blur บนมือถือเพื่อลดภาระ GPU
          "mix-blend-plus-lighter blur-[50px] md:blur-[120px]",
          "animate-pulse-slow transform-gpu transition-colors duration-1000 will-change-transform",
        )}
      />

      {/* 03. DEPTH LAYER: สร้างความลึกแบบ Specialist */}
      <div className="bg-surface-main/20 absolute inset-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-surface-main)_100%)] opacity-60" />
    </div>
  );
}

export default memo(AmbientBackground);
