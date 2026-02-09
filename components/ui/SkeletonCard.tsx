"use client";

/**
 * [UI COMPONENT]: SKELETON_CARD_PATTERN v17.2.3 (HOTFIX_TYPE_SAFE)
 * [STRATEGY]: Structural Mirroring | Layout Anchoring | Zero-Jitter Hydration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo, type CSSProperties } from "react";
// [FIX]: เปลี่ยนจาก Named Import เป็น Default Import เพื่อลบ Error TS2614
import Skeleton from "@/components/ui/skeleton"; 
import { cn } from "@/lib/utils"; //

/**
 * [MANDATE]: Zero-Any Policy | Readonly Immutability
 */
interface SkeletonCardProps {
  readonly className?: string;
  readonly aspectRatio?: "video" | "square" | "portrait";
  readonly style?: CSSProperties; // [FIX]: เพิ่ม style prop เพื่อรองรับ Staggered Animation จาก Grid
}

/**
 * [STABILIZED]: SkeletonCard
 * ทำหน้าที่เป็นแม่แบบโครงสร้างเพื่อจองพื้นที่ให้ ServiceCard และ BlogCard 
 * ป้องกันอาการ Layout Shift (CLS) ขณะโหลดข้อมูล
 */
const SkeletonCard = ({ 
  className, 
  aspectRatio = "video", 
  style 
}: SkeletonCardProps) => {
  return (
    <div
      style={style} // [FIX]: ทำการ Spread style เข้าสู่ DOM Node หลักเพื่อแก้ Error TS2322
      className={cn(
        /* [ATMOSPHERIC ENGINE]: จำลองมิติและความลึกให้ตรงกับบัตรเนื้อหาจริง */
        "relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-6 md:p-8",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.02] before:to-transparent",
        className,
      )}
      aria-hidden="true"
    >
      {/* 01. VISUAL NODE: จำลองส่วนรูปภาพ (LCP Proxy Area) */}
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
        {/* [SHIMMER PROTOCOL]: ใช้แอนิเมชันเพื่อสื่อสารสถานะการโหลดอย่างนุ่มนวล */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Badge Proxy */}
        <Skeleton className="absolute top-4 left-4 h-6 w-20 rounded-full bg-white/10" />
      </div>

      {/* 02. NARRATIVE NODE: จำลองเนื้อหาเชิงลึก (Content Skeleton) */}
      <div className="flex flex-grow flex-col space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-8 w-3/4 rounded-lg bg-white/10" />
          <Skeleton className="h-8 w-1/2 rounded-lg bg-white/10" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded bg-white/5" />
          <Skeleton className="h-4 w-11/12 rounded bg-white/5" />
          <Skeleton className="h-4 w-4/6 rounded bg-white/5" />
        </div>

        <div className="mt-4 flex gap-3">
          <Skeleton className="h-6 w-20 rounded-full bg-white/5" />
          <Skeleton className="h-6 w-24 rounded-full bg-white/5" />
        </div>
      </div>

      {/* 03. ACTION INTERFACE: พื้นที่ปุ่มและราคา (Conversion Proxy) */}
      <div className="mt-8 flex items-end justify-between border-t border-white/5 pt-6">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16 rounded bg-white/5" />
          <Skeleton className="h-8 w-24 rounded bg-white/10" />
        </div>

        {/* Button/Icon Proxy: รักษาความสมมาตรของ UI */}
        <Skeleton className="h-12 w-12 rounded-xl bg-white/10" />
      </div>
    </div>
  );
};

export default memo(SkeletonCard); //
