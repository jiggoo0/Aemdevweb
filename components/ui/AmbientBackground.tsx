/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v17.9.46 (STABILIZED)
 * [STRATEGY]: Viewport Locking | Prop-Driven Atmosphere | GPU Optimization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly color?: string;
  readonly opacity?: number;
}

/**
 * @function AmbientBackground
 * @description เลเยอร์พื้นหลังบรรยากาศที่ล็อคความสูงตาม Viewport และรองรับการปรับแต่งสี/ความโปร่งใส
 */
const AmbientBackground = ({ className, color, opacity = 1 }: AmbientBackgroundProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "h-[100dvh] w-full", // [STRATEGY]: บังคับความสูงแบบ Dynamic Viewport
        !color && "bg-surface-main", // Default Fallback จาก CSS Variable
        className,
      )}
      style={{
        backgroundColor: color,
        opacity: opacity, // จัดการค่าความโปร่งใสผ่าน Style Object (Zero-Latency)
      }}
      aria-hidden="true"
    >
      {/* --- 01. AMBIENT GLOW NODES (GPU ACCELERATED) --- */}
      <div
        className="absolute -top-[10%] -left-[10%] h-[70vw] w-[70vw] transform-gpu rounded-full opacity-20 blur-[100px]"
        style={{ backgroundColor: "var(--brand-primary)" }}
      />
      <div
        className="absolute -right-[5%] -bottom-[5%] h-[40vw] w-[40vw] transform-gpu rounded-full opacity-10 blur-[80px]"
        style={{ backgroundColor: "var(--brand-primary)" }}
      />

      {/* --- 02. INFRASTRUCTURE GRID (CSS-NATIVE) --- */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Overlay สำหรับสร้างมิติความลึก (Depth Layer) */}
      <div className="to-surface-main/20 absolute inset-0 bg-gradient-to-b from-transparent via-transparent" />
    </div>
  );
};

export default memo(AmbientBackground);
