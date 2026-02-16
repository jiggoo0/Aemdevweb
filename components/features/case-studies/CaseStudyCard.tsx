/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD v18.0.0 (ULTIMATE_STABLE)
 * [STRATEGY]: ROI Impact Logic | Metadata Resolution | Case-Sensitive Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure ---
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
  // [DATA_GUARD]: Safe Access Logic & Fallbacks
  const primaryResult = useMemo(() => data.results?.[0] || "Growth Guaranteed", [data.results]);

  // [PATH_RESOLVER]: บังคับ Lowercase และเช็ค Fallback Path ที่ถูกต้อง
  const imageSource = useMemo(() => {
    const rawPath = data.thumbnail || data.image || "/images/case-studies/default.webp";
    // ป้องกันปัญหาเรื่องเครื่องหมายคำพูดซ้ำซ้อนหรือช่องว่าง
    return rawPath.trim().toLowerCase();
  }, [data.thumbnail, data.image]);

  // [ENGINE]: CLS Protection (Strict Type Access)
  const imgData = useMemo(
    () => IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null,
    [imageSource],
  );

  return (
    <Link
      href={`/case-studies/${data.slug.toLowerCase()}`}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm border md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: VISUAL AUTHORITY --- */}
      <div
        className="bg-surface-offset border-border relative w-full overflow-hidden border-b select-none"
        style={{
          aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10",
          backgroundColor: "#121212", // Fallback background color
        }}
      >
        <Image
          src={imageSource}
          alt={`Case Study: ${data.title}`}
          fill
          priority={index < 2}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-60"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
        />

        {/* Texture & Overlays */}
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.05] mix-blend-overlay" />
        <div className="from-surface-main/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-90" />

        {/* ROI Reveal (Hover) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="translate-y-4 transform-gpu transition-transform duration-500 group-hover:translate-y-0">
            <span className="text-brand-primary block text-center text-4xl font-black tracking-tighter italic drop-shadow-lg md:text-5xl">
              {primaryResult.split(" ")[0]}
            </span>
            <div className="bg-surface-main/20 border-brand-primary/30 mt-3 rounded-full border px-4 py-1.5 backdrop-blur-md">
              <span className="text-surface-main font-mono text-[9px] font-black tracking-[0.2em] text-white uppercase shadow-black drop-shadow-md">
                Verified_Success
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- LAYER 02: CONTENT HUB --- */}
      <div className="flex flex-grow flex-col justify-between p-8 md:p-10">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--brand-primary)]" />
            <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase md:text-[9px]">
              Client: {data.client}
            </span>
          </div>

          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-3xl">
            {data.title}
          </h3>

          <p className="text-text-secondary line-clamp-2 text-sm font-medium italic opacity-75 md:text-base">
            “{data.description}”
          </p>
        </div>

        {/* Action Footer */}
        <div className="border-border mt-10 flex items-center justify-between border-t pt-6 md:mt-12 md:pt-8">
          <div className="flex items-center gap-4">
            <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main group-hover:border-brand-primary/50 group-hover:shadow-glow rounded-2xl border border-transparent p-3 transition-all duration-500 group-hover:-rotate-12 md:p-3.5">
              <IconRenderer name="ArrowUpRight" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary group-hover:text-brand-primary text-[10px] font-black uppercase transition-colors md:text-[11px]">
                View Strategy
              </span>
              <span className="text-text-muted font-mono text-[8px] uppercase opacity-40">
                Node_0{index + 1}
              </span>
            </div>
          </div>

          <IconRenderer
            name="ShieldCheck"
            size={18}
            className="text-text-muted group-hover:text-brand-primary opacity-20 transition-all duration-500 group-hover:opacity-100"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
