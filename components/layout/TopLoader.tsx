/**
 * [SYSTEM COMPONENT]: SYSTEM_TOP_LOADER v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Route Transition Physics | Theme-Aware Glow | Zero-Latency Perception
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
 * @description ระบบแถบสถานะการโหลด (NProgress) ที่เชื่อมโยงกับ Design System
 * [STABILIZED]: รองรับการสลับโหมด Dark/Light ผ่าน CSS Variables
 */
const TopLoader = ({
  /* [FIX]: เปลี่ยนจาก #22c55e เป็นการอ้างอิง Variable จาก globals.css */
  color = "var(--color-brand-primary)", 
  showSpinner = false,
  height = 2,
  shadow = true,
  zIndex = 9999,
}: TopLoaderProps) => {
  
  /**
   * [LOGIC]: Dynamic Shadow Generation
   * ใช้ค่าจาก CSS Variable เพื่อให้แสง Glow เปลี่ยนตามสถานะของธีม
   */
  const getShadow = () => {
    if (shadow === false) return "none";
    if (typeof shadow === "string") return shadow;
    // ใช้ CSS variable ใน shadow เพื่อความต่อเนื่องของ UI
    return `0 0 10px var(--color-brand-primary), 0 0 5px var(--color-brand-primary)`;
  };

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={200}
      height={height}
      crawl={true}
      showSpinner={showSpinner}
      /* [PHYSICS]: Curve แบบ Specialist - พุ่งตัวเร็วและชะลออย่างนุ่มนวลตอนใกล้จบ */
      easing="cubic-bezier(0.16, 1, 0.3, 1)" 
      speed={250}
      shadow={getShadow()}
      zIndex={zIndex}
      showAtBottom={false}
    />
  );
};

export default memo(TopLoader);
