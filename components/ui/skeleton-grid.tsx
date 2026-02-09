/**
 * [UI COMPONENT]: SKELETON_GRID_ORCHESTRATOR v17.3.10 (STABILIZED)
 * [STRATEGY]: Staggered Neural Pulse | GPU Accelerated | Zero-CLS Hub
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { cn } from "@/lib/utils";

/**
 * @interface SkeletonGridProps
 * [MANDATE]: Zero-Any Policy | Strict Deep Immutability
 */
interface SkeletonGridProps {
  readonly count?: number;
  readonly aspectRatio?: "video" | "square" | "portrait";
  readonly className?: string;
}

/**
 * @component SkeletonGrid
 * @description หน่วยควบคุมการกระจายโครงสร้าง Skeleton แบบกลุ่ม 
 * [STABILIZED]: แก้ไข Type Mismatch ของ 'style' prop และปรับจูน GPU Offloading
 */
function SkeletonGrid({ 
  count = 6, 
  aspectRatio = "video",
  className
}: SkeletonGridProps) {
  return (
    <div 
      className={cn(
        /* [LAYOUT ENGINE]: Responsive Grid Architecture */
        "grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3",
        "bg-surface-main transition-colors duration-500",
        className
      )}
    >
      {Array.from({ length: count }).map((_, index) => {
        /**
         * [PHYSICS ENGINE]: Dynamic Stagger Logic
         * คำนวณค่า Opacity และ Delay บน Main Thread หนึ่งครั้ง 
         * เพื่อส่งต่อให้ GPU ประมวลผลผ่าน CSS Variables
         */
        const nodeStyle: React.CSSProperties = {
          opacity: Math.max(0.6, 1 - index * 0.05),
          animationDelay: `${index * 60}ms`,
          willChange: "opacity, transform"
        };

        return (
          <SkeletonCard 
            key={`skeleton-node-${index}`} 
            aspectRatio={aspectRatio}
            style={nodeStyle}
            className={cn(
              "animate-in fade-in slide-in-from-bottom-2 duration-700 fill-mode-both",
              /* [HYDRATION SHIELD]: ป้องกัน Flash of Unstyled Content */
              "opacity-0" 
            )}
          />
        );
      })}
    </div>
  );
}

export default memo(SkeletonGrid);
