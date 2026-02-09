"use client";

/**
 * [UI PRIMITIVE]: SKELETON_CORE v17.2.3 (NEURAL_PULSE)
 * [STRATEGY]: Subtle Neural Pulse | OKLCH Infrastructure | Layout Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils"; //

/**
 * @interface SkeletonProps
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 */
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly className?: string;
}

/**
 * @component Skeleton
 * @description หน่วยเรนเดอร์ Ghost Element ที่ใช้ระบบ Pulse แบบนุ่มนวล
 * ออกแบบมาเพื่อรักษาสถาปัตยกรรมเลย์เอาต์ (Layout Anchoring) ในช่วง Hydration
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        /* [PHYSICS]: ระบบ Neural Pulse ที่ใช้ค่าความโปร่งใส (Alpha) 
           เพื่อให้กลมกลืนกับพื้นหลัง Surface Main (#050505) */
        "animate-pulse-slow rounded-md bg-white/[0.08]",
        "will-change-opacity", // [PERFORMANCE]: บังคับใช้ GPU Acceleration
        className
      )}
      {...props}
    />
  );
}

// [PERFORMANCE]: ป้องกันการ Re-render ที่ไม่จำเป็นในระดับ Atomic Node
export default memo(Skeleton);
