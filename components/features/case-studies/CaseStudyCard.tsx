/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD v17.7.0 (ZERO_CLS_HARDENED)
 * [STRATEGY]: ROI Impact Logic | Metadata Resolution | GPU Optimized
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
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
  const primaryResult = data.results?.[0] || "Success";
  const imgData = IMAGE_BLUR_DATA[data.thumbnail];

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        className,
      )}
    >
      {/* --- VISUAL AUTHORITY (CLS PROTECTED) --- */}
      <div
        className="bg-surface-offset border-border relative overflow-hidden border-b"
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
      >
        <Image
          src={data.thumbnail}
          alt={data.title}
          fill
          priority={index < 2}
          placeholder="blur"
          blurDataURL={imgData?.blurDataURL}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <div className="from-surface-main absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-80" />

        <div className="absolute inset-0 z-20 flex translate-y-6 flex-col items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-brand-primary text-4xl font-black italic">
            {primaryResult.split(" ")[0]}
          </span>
          <div className="bg-brand-primary text-surface-main mt-4 rounded-full px-6 py-2 text-[10px] font-black uppercase">
            Verified_Success
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between p-9 lg:p-11">
        <div className="space-y-7">
          <span className="text-brand-primary font-mono text-[9px] font-black tracking-widest uppercase">
            Log: {data.client}
          </span>
          <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black italic transition-colors">
            {data.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-base font-medium italic opacity-75">
            “{data.description}”
          </p>
        </div>

        <div className="border-border mt-12 flex items-center justify-between border-t pt-8">
          <div className="flex items-center gap-5">
            <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl p-4 transition-all">
              <IconRenderer name="ArrowUpRight" size={22} />
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary text-[11px] font-black uppercase">
                Analyze Strategy
              </span>
              <span className="text-text-muted font-mono text-[8px] opacity-40">
                Case_Node_0{index + 1}
              </span>
            </div>
          </div>
          <IconRenderer
            name="ShieldCheck"
            size={22}
            className="text-text-muted opacity-20 transition-all group-hover:opacity-70"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
