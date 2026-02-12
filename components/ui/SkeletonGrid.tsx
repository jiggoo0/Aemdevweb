/**
 * [UI COMPONENT]: SKELETON_GRID_ORCHESTRATOR v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Staggered Neural Pulse | GPU Accelerated | Zero-CLS Hub
 */

"use client";

import React, { memo } from "react";
import SkeletonCard from "@/components/ui/SkeletonCard";
import { cn } from "@/lib/utils";

interface SkeletonGridProps {
  readonly count?: number;
  readonly aspectRatio?: "video" | "square" | "portrait";
  readonly className?: string;
}

function SkeletonGrid({ count = 6, aspectRatio = "video", className }: SkeletonGridProps) {
  return (
    <div className={cn("grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3 xl:gap-12", className)}>
      {Array.from({ length: count }).map((_, index) => {
        // [PHYSICS ENGINE]: ระบบหน่วงเวลาแบบ Stagger เพื่อความนุ่มนวล
        const nodeStyle: React.CSSProperties = {
          animationDelay: `${index * 100}ms`, // เพิ่ม Delay เล็กน้อยให้เห็นลำดับชัดขึ้น
          opacity: 0, // เริ่มต้นที่ 0 แล้วค่อย Fade-in
          animationFillMode: "forwards",
        };

        return (
          <SkeletonCard
            key={`skeleton-node-${index}`}
            aspectRatio={aspectRatio}
            style={nodeStyle}
            className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out"
          />
        );
      })}
    </div>
  );
}

export default memo(SkeletonGrid);
