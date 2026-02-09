/**
 * [SYSTEM COMPONENT]: SYSTEM_TOP_LOADER v17.4.6 (STABILIZED)
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
 * @description ระบบแถบสถานะการโหลดระดับ Specialist ที่เชื่อมต่อกับ CSS Variable ของแบรนด์
 * ออกแบบมาเพื่อลด Cognitive Load ระหว่างการเปลี่ยน Route
 */
const TopLoader = ({
  color = "var(--color-brand-primary)",
  showSpinner = false,
  height = 2,
  shadow = true,
  zIndex = 9999,
}: TopLoaderProps) => {
  /**
   * [LOGIC]: Dynamic Shadow Generation
   * ใช้ค่าจาก Global CSS Variables เพื่อสร้างแสง Glow ที่สอดคล้องกับธีม (Dark/Light)
   */
  const getShadow = () => {
    if (shadow === false) return "none";
    if (typeof shadow === "string") return shadow;
    return `0 0 10px var(--color-brand-primary), 0 0 5px var(--color-brand-primary)`;
  };

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={250}
      height={height}
      crawl={true}
      showSpinner={showSpinner}
      /* [PHYSICS]: Specialist Power-Out Curve 
         พุ่งตัวออกอย่างรวดเร็ว (0.16) และชะลอตัวลงอย่างนุ่มนวล (0.3) เมื่อใกล้เป้าหมาย 
      */
      easing="cubic-bezier(0.16, 1, 0.3, 1)"
      speed={300}
      shadow={getShadow()}
      zIndex={zIndex}
      showAtBottom={false}
    />
  );
};

export default memo(TopLoader);
