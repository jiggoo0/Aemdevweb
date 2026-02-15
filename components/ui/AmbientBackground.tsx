/**
 * [UI COMPONENT]: AMBIENT_BACKGROUND v18.0.0 (AURA_ENGINE_CORE)
 * [STRATEGY]: Atmospheric Fluidity | Noise Texture Layering | GPU Accelerated Aura
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AmbientBackgroundProps {
  readonly className?: string;
  readonly color?: string;
  readonly opacity?: number;
}

/**
 * @function AmbientBackground
 * @description เลเยอร์บรรยากาศอัจฉริยะที่สร้าง "Aura" รอบเนื้อหา
 * ปรับเปลี่ยนสีตาม Identity ของจังหวัดหรือบริการอัตโนมัติ
 */
const AmbientBackground = ({ className, color, opacity = 1 }: AmbientBackgroundProps) => {
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
        transition: "background-color 1.2s cubic-bezier(0.22, 1, 0.36, 1)", // จังหวะการเปลี่ยนสีที่นุ่มนวล
      }}
      aria-hidden="true"
    >
      {/* --- LAYER 01: DYNAMIC AURA NODES (GPU ACCELERATED) --- */}
      {/* วงรัศมีสีหลัก (Primary Aura) - เคลื่อนที่แบบช้าๆ เพื่อให้หน้าเว็บดูมีชีวิต */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[15%] -left-[10%] h-[80vw] w-[80vw] transform-gpu rounded-full opacity-[0.12] blur-[120px]"
        style={{ backgroundColor: "var(--brand-primary)" }}
      />

      {/* วงรัศมีสีรอง (Secondary Aura) - เพิ่มมิติของแสงจากมุมล่าง */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -right-[10%] -bottom-[10%] h-[60vw] w-[60vw] transform-gpu rounded-full opacity-[0.08] blur-[100px]"
        style={{ backgroundColor: "var(--brand-secondary, var(--brand-primary))" }}
      />

      {/* --- LAYER 02: NOISE TEXTURE (High-End Polish) --- */}
      {/* เลเยอร์เม็ดสีรบกวนบางๆ เพื่อลด Color Banding และเพิ่มความรู้สึกเหมือนเนื้อกระดาษ/ฟิล์ม */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* --- LAYER 03: REFINED INFRASTRUCTURE GRID --- */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(var(--brand-primary) 0.5px, transparent 0.5px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* --- LAYER 04: DEPTH VIGNETTE --- */}
      {/* ไล่เฉดสีเพื่อบีบสายตาเข้าสู่เนื้อหาตรงกลาง (Center Focus) */}
      <div className="from-surface-main/40 to-surface-main/40 absolute inset-0 bg-gradient-to-tr via-transparent" />
    </div>
  );
};

export default memo(AmbientBackground);
