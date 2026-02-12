/**
 * [UI COMPONENT]: SKELETON_CARD_HUB v17.9.9 (PSI_OPTIMIZED)
 * [STRATEGY]: Blueprint Projection | Aspect Ratio Preservation | GPU Acceleration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo, type CSSProperties } from "react";
import Skeleton from "@/components/ui/Skeleton";
import { cn } from "@/lib/utils";

/**
 * [INTERFACE]: SkeletonCardProps
 * ปฏิบัติตาม Zero-Any Policy และใช้ Readonly เพื่อความปลอดภัยของข้อมูล
 */
interface SkeletonCardProps {
  readonly className?: string;
  readonly style?: CSSProperties;
  readonly aspectRatio?: "video" | "portrait" | "square" | "hero";
}

const SkeletonCard = ({ className, style, aspectRatio = "video" }: SkeletonCardProps) => {
  // [MAPPING]: ผูกโยงกับ Utility ใน globals.css เพื่อรักษาอัตราส่วนที่แน่นอน (CLS Mitigation)
  const ratioMap = {
    video: "aspect-[16/10]",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
    hero: "aspect-[21/9]", // Updated for modern hero sections
  };

  return (
    <div
      style={style}
      className={cn(
        "border-border bg-surface-card/40 shadow-pro-sm space-y-8 rounded-[3rem] border p-9 md:p-11",
        "transform-gpu transition-all duration-500 will-change-transform", // [PERFORMANCE]: ใช้ GPU ช่วยประมวลผล
        className,
      )}
    >
      {/* --- 01. IMAGE_PROJECTION (LCP/CLS Target) --- */}
      <Skeleton
        className={cn(
          "bg-brand-primary/5 w-full rounded-[2.5rem] opacity-50",
          ratioMap[aspectRatio],
        )}
      />

      <div className="space-y-5">
        {/* --- 02. IDENTITY_PROJECTION --- */}
        <div className="flex items-center gap-3">
          <Skeleton className="bg-brand-primary/20 h-2 w-12 rounded-full" />
          <Skeleton className="h-2 w-24 rounded-full opacity-40" />
        </div>
        <Skeleton className="h-10 w-full rounded-2xl" />

        {/* --- 03. CONTENT_NARRATIVE_PROJECTION --- */}
        <div className="space-y-3 pt-2">
          <Skeleton className="h-4 w-full rounded-lg opacity-60" />
          <Skeleton className="h-4 w-4/6 rounded-lg opacity-60" />
        </div>
      </div>

      {/* --- 04. ACTION_NODE_PROJECTION --- */}
      <div className="border-border flex items-center justify-between border-t pt-8">
        <div className="space-y-2">
          <Skeleton className="h-2 w-16 rounded-full opacity-30" />
          <Skeleton className="h-8 w-28 rounded-xl opacity-60" />
        </div>
        <Skeleton className="h-14 w-14 rounded-2xl opacity-40" />
      </div>
    </div>
  );
};

export default memo(SkeletonCard);
