/**
 * [UI COMPONENT]: SKELETON_CARD_HUB v17.3.10 (STABILIZED)
 * [STRATEGY]: Blueprint Projection | Aspect Ratio Preservation | Multi-Theme Depth
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import type { CSSProperties } from "react";
import React, { memo } from "react";
import Skeleton from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

/**
 * @interface SkeletonCardProps
 * [FIXED]: เพิ่ม style prop เพื่อรองรับการคำนวณ Neural Stagger จาก Grid Engine
 */
interface SkeletonCardProps {
  readonly className?: string;
  readonly style?: CSSProperties; // แก้ปัญหา TS2322
  readonly aspectRatio?: "video" | "portrait" | "square";
}

/**
 * @component SkeletonCard
 * @description โครงร่างจำลองสำหรับการ์ดบริการหรือบทความ 
 * [STABILIZED]: ปรับจูนการรับ CSS Properties สำหรับ GPU-Accelerated Animations
 */
const SkeletonCard = ({ 
  className, 
  style, 
  aspectRatio = "video" 
}: SkeletonCardProps) => {
  
  // Mapping อัตราส่วนภาพตามยุทธศาสตร์ดีไซน์
  const ratioMap = {
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    square: "aspect-square",
  };

  return (
    <div 
      style={style} // [CRITICAL]: ต้องส่งผ่านค่าสไตล์เพื่อใช้ในระบบ Stagger Animation
      className={cn(
        "space-y-6 rounded-[2.5rem] border border-border bg-surface-card/40 p-8 shadow-pro-sm",
        "transition-all duration-500", // เสริมความสมูทในการเปลี่ยนผ่านธีมสี
        className
      )}
    >
      {/* 01. IMAGE_NODE_PROJECTION: จำลองส่วนหัวรูปภาพ */}
      <Skeleton className={cn("w-full rounded-[2rem] bg-surface-offset/50", ratioMap[aspectRatio])} />

      <div className="space-y-4">
        {/* 02. HEADER_NODE_PROJECTION: จำลองชื่อหัวข้อ */}
        <Skeleton className="h-8 w-3/4 rounded-xl bg-surface-offset" />
        
        {/* 03. CONTENT_NODE_PROJECTION: จำลองเนื้อหาบรรยาย */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-lg bg-surface-offset/60" />
          <Skeleton className="h-4 w-5/6 rounded-lg bg-surface-offset/60" />
        </div>
      </div>

      {/* 04. FOOTER_NODE_PROJECTION: จำลองปุ่ม CTA */}
      <div className="flex items-center gap-4 pt-4">
        <Skeleton className="h-10 w-32 rounded-full bg-surface-offset" />
        <Skeleton className="h-10 w-10 rounded-full bg-surface-offset/40" />
      </div>
    </div>
  );
};

// [PERFORMANCE]: Memoization เพื่อป้องกันการ Re-render ส่วน Skeleton โดยไม่จำเป็น
export default memo(SkeletonCard);
