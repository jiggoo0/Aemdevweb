/**
 * [UI COMPONENT]: SKELETON_CARD_PATTERN v17.0.2 (ATMOSPHERIC)
 * [STRATEGY]: Structural Mirroring | Layout Stability | Specialist Geometry
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonCardProps {
  readonly className?: string;
  readonly aspectRatio?: "video" | "square" | "portrait";
}

const SkeletonCard = ({ className, aspectRatio = "video" }: SkeletonCardProps) => {
  return (
    <div
      className={cn(
        // Base Container: เลียนแบบ ServiceCard/BlogCard ของ v17
        "relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 md:p-8",
        className,
      )}
      aria-hidden="true"
    >
      {/* 01. VISUAL NODE: จำลองส่วนรูปภาพ */}
      <div
        className={cn(
          "relative mb-8 w-full overflow-hidden rounded-xl bg-white/5",
          aspectRatio === "video"
            ? "aspect-video"
            : aspectRatio === "square"
              ? "aspect-square"
              : "aspect-[3/4]",
        )}
      >
        {/* Shimmer Effect Overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Node Badge Proxy */}
        <Skeleton className="absolute top-4 left-4 h-6 w-20 rounded-full bg-white/10" />
      </div>

      {/* 02. NARRATIVE NODE: จำลองเนื้อหา */}
      <div className="flex flex-grow flex-col space-y-6">
        {/* Title Node */}
        <div className="space-y-3">
          <Skeleton className="h-8 w-3/4 rounded-lg bg-white/10" />
          <Skeleton className="h-8 w-1/2 rounded-lg bg-white/10" />
        </div>

        {/* Excerpt Node */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded bg-white/5" />
          <Skeleton className="h-4 w-11/12 rounded bg-white/5" />
          <Skeleton className="h-4 w-4/6 rounded bg-white/5" />
        </div>

        {/* Metadata / Tags */}
        <div className="mt-4 flex gap-3">
          <Skeleton className="h-6 w-20 rounded-full bg-white/5" />
          <Skeleton className="h-6 w-24 rounded-full bg-white/5" />
        </div>
      </div>

      {/* 03. ACTION INTERFACE: พื้นที่ด้านล่าง */}
      <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-6">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16 rounded bg-white/5" />
          <Skeleton className="h-8 w-24 rounded bg-white/10" />
        </div>

        {/* Button Proxy */}
        <Skeleton className="h-12 w-12 rounded-xl bg-white/10" />
      </div>
    </div>
  );
};

export default SkeletonCard;
