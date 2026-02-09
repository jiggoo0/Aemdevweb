/**
 * [UI COMPONENT]: SKELETON_GRID_ORCHESTRATOR v17.4.5 (STABILIZED_FINAL)
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
          animationDelay: `${index * 80}ms`,
          opacity: Math.max(0.5, 1 - index * 0.1),
        };

        return (
          <SkeletonCard
            key={`skeleton-node-${index}`}
            aspectRatio={aspectRatio}
            style={nodeStyle}
            className="animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-1000"
          />
        );
      })}
    </div>
  );
}

export default memo(SkeletonGrid);
