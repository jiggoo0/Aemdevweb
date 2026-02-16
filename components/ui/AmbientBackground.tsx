/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v18.0.2 (AURA_ENGINE_OPTIMIZED)
 * [STRATEGY]: Adaptive Fluidity | GPU Conservation | Static Aura for Mobile
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly color?: string;
  readonly opacity?: number;
}

const AmbientBackground = ({ className, color, opacity = 1 }: AmbientBackgroundProps) => {
  // [PERFORMANCE]: ตรวจสอบสถานะ Mobile เพื่อหยุด Animation ที่กินทรัพยากร
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);

  useEffect(() => {
    const checkPerformanceMode = () => {
      setIsLowPowerMode(window.innerWidth < 768);
    };
    checkPerformanceMode();
    window.addEventListener("resize", checkPerformanceMode);
    return () => window.removeEventListener("resize", checkPerformanceMode);
  }, []);

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden select-none",
        "h-[100dvh] w-full",
        !color && "bg-surface-main",
        className,
      )}
      style={{
        backgroundColor: color,
        opacity: opacity,
        transition: "background-color 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      aria-hidden="true"
    >
      {/* --- LAYER 01: ADAPTIVE AURA NODES --- */}
      {/* [OPTIMIZED]: 
          1. ลด Blur บน Mobile ลงเหลือ 60px เพื่อลดงาน GPU
          2. หยุด Infinite Animation บน Mobile เพื่อประหยัด CPU/Battery
      */}
      <motion.div
        animate={
          !isLowPowerMode
            ? {
                x: [0, 30, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }
            : {}
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "absolute -top-[15%] -left-[10%] h-[80vw] w-[80vw] transform-gpu rounded-full opacity-[0.10]",
          "blur-[60px] md:blur-[120px]", // ลดการเบลอหนักๆ บนจอเล็ก
        )}
        style={{ backgroundColor: "var(--brand-primary)" }}
      />

      <motion.div
        animate={
          !isLowPowerMode
            ? {
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className={cn(
          "absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] transform-gpu rounded-full opacity-[0.06]",
          "blur-[50px] md:blur-[100px]",
        )}
        style={{ backgroundColor: "var(--brand-secondary, var(--brand-primary))" }}
      />

      {/* --- LAYER 02: NOISE TEXTURE (High-End Polish) --- */}
      <div
        className="absolute inset-0 opacity-[0.012] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 03: REFINED INFRASTRUCTURE GRID --- */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* --- LAYER 04: DEPTH VIGNETTE --- */}
      <div className="from-surface-main/40 to-surface-main/60 absolute inset-0 bg-gradient-to-tr via-transparent" />
    </div>
  );
};

export default memo(AmbientBackground);
