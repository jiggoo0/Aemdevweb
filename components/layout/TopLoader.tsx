/**
 * [SYSTEM COMPONENT]: SYSTEM_TOP_LOADER v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Route Transition Physics | Theme-Aware Glow | Zero-Latency Perception
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
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
 * @description แถบสถานะการโหลดระดับ Specialist เชื่อมต่อกับ CSS Variable ของแบรนด์
 * [PHYSICS]: ใช้ Easing Curve แบบ Deceleration เพื่อความรู้สึกหรูหรา
 */
const TopLoader = ({
  color = "var(--color-brand-primary)",
  showSpinner = false,
  height = 2,
  shadow = true,
  zIndex = 9999,
}: TopLoaderProps) => {
  // [OPTIMIZATION]: คำนวณ Shadow String แค่ครั้งเดียว หรือเมื่อสีเปลี่ยน
  const shadowStyle = useMemo(() => {
    if (shadow === false) return undefined;
    if (typeof shadow === "string") return shadow;
    // Glow Effect: สร้างมิติแสงฟุ้งกระจายตามสีแบรนด์
    return `0 0 10px ${color}, 0 0 5px ${color}`;
  }, [shadow, color]);

  return (
    <NextTopLoader
      color={color}
      initialPosition={0.08}
      crawlSpeed={200} // [TUNING]: เร็วขึ้นเล็กน้อยเพื่อความรู้สึก Instant
      height={height}
      crawl={true}
      showSpinner={showSpinner}
      /* [PHYSICS]: พุ่งตัวออกอย่างรวดเร็วและชะลอตัวนุ่มนวลเมื่อใกล้จบ (Exponential Ease Out) */
      easing="cubic-bezier(0.16, 1, 0.3, 1)"
      speed={200}
      shadow={shadowStyle}
      zIndex={zIndex}
      showAtBottom={false}
    />
  );
};

export default memo(TopLoader);
