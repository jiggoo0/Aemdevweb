/**
 * [LAYOUT COMPONENT]: SYSTEM_TOP_LOADER v17.0.2 (KINETIC_FEEDBACK)
 * [STRATEGY]: Route Transition Physics | Zero-Latency Perception | Brand Continuity
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import NextTopLoader from "nextjs-toploader";

interface TopLoaderProps {
  readonly color?: string;
  readonly showSpinner?: boolean;
  readonly height?: number;
  readonly shadow?: string | boolean;
  readonly zIndex?: number;
}

/**
 * @component TopLoader
 * @description ระบบแถบสถานะการโหลดด้านบน (NProgress) เพื่อสร้าง Feedback ทางสายตาเมื่อมีการเปลี่ยน Route
 * ปรับจูน Physics ให้รู้สึกรวดเร็วและตอบสนองทันที (Zero-Latency Feel)
 */
const TopLoader = ({
  color = "#22c55e", // Brand Primary (Neon Green) ตาม Design System
  showSpinner = false, // Minimalist Mode: ซ่อน Spinner เพื่อลด Visual Noise
  height = 2,
  shadow = true,
  zIndex = 9999,
}: TopLoaderProps) => {
  // [LOGIC]: Dynamic Shadow Generation
  // สร้าง Effect แสงฟุ้ง (Glow) เพื่อให้ดูเหมือนพลังงานกำลังวิ่ง
  const getShadow = () => {
    if (shadow === false) return "none";
    if (typeof shadow === "string") return shadow;
    return `0 0 12px ${color}, 0 0 5px ${color}`;
  };

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={200}
      height={height}
      crawl={true}
      showSpinner={showSpinner}
      easing="cubic-bezier(0.16, 1, 0.3, 1)" // Custom Curve: เร็วตอนต้น ชะลอตอนปลาย
      speed={200}
      shadow={getShadow()}
      zIndex={zIndex}
      showAtBottom={false}
    />
  );
};

export default memo(TopLoader);
