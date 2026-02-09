"use client";

/**
 * [UI COMPONENT]: SKELETON_GRID_ORCHESTRATOR v17.2.3 (STRUCTURAL_SHIELD)
 * [STRATEGY]: Staggered Neural Pulse | Grid Stability | GPU Accelerated
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard"; //
import { cn } from "@/lib/utils"; //

/**
 * @interface SkeletonGridProps
 * [MANDATE]: Zero-Any Policy | Deep Immutability
 */
interface SkeletonGridProps {
  readonly count?: number;
  readonly aspectRatio?: "video" | "square" | "portrait";
  readonly className?: string;
}

/**
 * @component SkeletonGrid
 * @description หน่วยควบคุมการกระจายโครงสร้าง Skeleton แบบกลุ่ม 
 * เพื่อจองพื้นที่สำหรับ Card Grid ในหน้า Services, Blog หรือ Case Studies
 */
function SkeletonGrid({ 
  count = 6, 
  aspectRatio = "video",
  className
}: SkeletonGridProps) {
  return (
    <div 
      className={cn(
        /* [LAYOUT ENGINE]: กำหนดระบบ Grid ที่สอดคล้องกับมาตรฐาน Card Grid ของ AEMDEVWEB */
        "grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard 
          key={`skeleton-node-${index}`} 
          aspectRatio={aspectRatio}
          /* [NEURAL PHYSICS]: การทำ Staggered Animation ผ่าน Inline Styles 
             เพื่อประสิทธิภาพสูงสุดและลดภาระ CSS Bundle */
          style={{
            opacity: Math.max(0.4, 1 - index * 0.1),
            animationDelay: `${index * 75}ms`,
            willChange: "opacity, transform"
          } as React.CSSProperties}
          className="animate-in fade-in duration-700"
        />
      ))}
    </div>
  );
}

// [PERFORMANCE]: ป้องกันการ Re-render ทั้ง Grid ในขณะที่ข้อมูลย่อยกำลังอัปเดต
export default memo(SkeletonGrid);
