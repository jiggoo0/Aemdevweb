/**
 * [UI PRIMITIVE]: SKELETON_CORE v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Subtle Neural Pulse | Semantic Token Mapping | Layout Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import { cn } from "@/lib/utils";

/**
 * @interface SkeletonProps
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 */
interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly className?: string;
}

/**
 * @component Skeleton
 * @description หน่วยเรนเดอร์ Ghost Element ระดับ Atomic
 * [STABILIZED]: ใช้ bg-surface-offset เพื่อให้กลมกลืนกับ Background ของทุกธีมอัตโนมัติ
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        /* [PHYSICS]: ระบบ Pulse ที่ปรับตามพื้นหลังของแต่ละธีม 
           ใช้ animate-pulse มาตรฐานเพื่อความเสถียรของ Browser Engine 
        */
        "animate-pulse rounded-md bg-surface-offset",
        
        /* [PERFORMANCE]: ผลักภาระการคำนวณแอนิเมชันไปที่ GPU Layer */
        "will-change-opacity", 
        
        className
      )}
      {...props}
    />
  );
}

export default memo(Skeleton);
