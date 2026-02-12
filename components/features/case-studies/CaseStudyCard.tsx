/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD v17.9.9 (ZERO_CLS_HARDENED)
 * [STRATEGY]: ROI Impact Logic | Metadata Resolution | GPU Optimized
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
// [FIX]: ตรวจสอบ Import Path ให้ถูกต้อง
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  readonly data: CaseStudy;
  readonly index?: number;
  readonly className?: string;
}

const CaseStudyCard = ({ data, index = 0, className }: CaseStudyCardProps) => {
  // [DATA_GUARD]: ป้องกัน undefined error
  const primaryResult = data.results?.[0] || "Success Guaranteed";
  const imageSource = data.thumbnail || "/images/case-study/default.webp";

  // Safety Access: ป้องกัน Crash ถ้า key ไม่มีใน registry
  const imgData = IMAGE_BLUR_DATA?.[imageSource] || null;

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        "transform-gpu will-change-transform", // [PERFORMANCE]
        className,
      )}
    >
      {/* --- VISUAL AUTHORITY (GPU ACCELERATED) --- */}
      <div
        className="bg-surface-offset border-border relative w-full overflow-hidden border-b"
        // Force Aspect Ratio to prevent CLS
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
      >
        <Image
          src={imageSource}
          alt={data.title}
          fill
          /* [LCP OPTIMIZATION]: Preload 2 ใบแรก */
          priority={index < 2}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Gradient Overlay */}
        <div className="from-surface-main/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

        {/* --- ROI OVERLAY (Hover Reveal) --- */}
        <div className="absolute inset-0 z-20 flex translate-y-8 flex-col items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-brand-primary text-3xl font-black italic drop-shadow-lg md:text-4xl">
            {primaryResult.split(" ")[0]}
          </span>
          <div className="bg-brand-primary text-surface-main shadow-glow mt-4 rounded-full px-5 py-1.5 text-[9px] font-black uppercase md:px-6 md:py-2 md:text-[10px]">
            Verified_Success
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between p-8 md:p-10 lg:p-11">
        <div className="space-y-6 md:space-y-7">
          <span className="text-brand-primary font-mono text-[8px] font-black tracking-widest uppercase md:text-[9px]">
            Log: {data.client}
          </span>
          <h3 className="text-text-primary group-hover:text-brand-primary text-xl font-black italic transition-colors md:text-2xl lg:text-3xl">
            {data.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-sm font-medium italic opacity-75 md:text-base">
            “{data.description}”
          </p>
        </div>

        <div className="border-border mt-10 flex items-center justify-between border-t pt-6 md:mt-12 md:pt-8">
          <div className="flex items-center gap-4 md:gap-5">
            <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl p-3 transition-all md:p-4">
              <IconRenderer name="ArrowUpRight" size={20} className="md:h-6 md:w-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary text-[10px] font-black uppercase md:text-[11px]">
                Analyze Strategy
              </span>
              <span className="text-text-muted font-mono text-[8px] opacity-40">
                Case_Node_0{index + 1}
              </span>
            </div>
          </div>
          <IconRenderer
            name="ShieldCheck"
            size={20}
            className="text-text-muted opacity-20 transition-all group-hover:opacity-70 md:h-6 md:w-6"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
