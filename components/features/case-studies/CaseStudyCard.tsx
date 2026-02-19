/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD v18.2.0 (PRODUCTION_HARDENED)
 * [STRATEGY]: ROI Impact Reveal | Flex-Symmetry Protocol | GPU-Stabilized Visuals
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [CHANGELOG]:
 * - Integrated Flex-1 hub to enforce footer alignment across grid rows.
 * - Refined ROI Reveal animation with hardware acceleration.
 * - Hardened image source resolution for strict Linux/Vercel paths.
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
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
  // [DATA_GUARD]: จัดการผลลัพธ์หลักที่ต้องการเน้น (ROI Signal)
  const primaryResult = useMemo(() => data.results?.[0] || "Growth_Verified", [data.results]);

  // [PATH_RESOLVER]: บังคับ Lowercase และ Clean Path สำหรับ Production Environment
  const imageSource = useMemo(() => {
    const rawPath = data.thumbnail || data.image || "/images/case-studies/default.webp";
    return rawPath.trim().toLowerCase();
  }, [data.thumbnail, data.image]);

  const imgData = useMemo(
    () => IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null,
    [imageSource],
  );

  return (
    <Link
      href={`/case-studies/${data.slug.toLowerCase()}`}
      aria-label={`ดูรายละเอียดผลงาน: ${data.title}`}
      className={cn(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: VISUAL AUTHORITY (ROI REVEAL ENGINE) --- */}
      <div
        className="border-border relative aspect-[16/10] w-full overflow-hidden border-b select-none"
        style={{ backgroundColor: "#020617" }}
      >
        <Image
          src={imageSource}
          alt={`Result: ${data.title}`}
          fill
          priority={index < 2}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-80 transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:opacity-40"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Global Overlays */}
        <div className="from-surface-main/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.03] mix-blend-overlay" />

        {/* [REVEAL_ENGINE]: ROI Stats display on Hover */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="translate-y-4 transform-gpu text-center transition-transform duration-500 group-hover:translate-y-0">
            <span className="text-brand-primary block text-5xl font-black tracking-tighter italic drop-shadow-2xl">
              {primaryResult.split(" ")[0]}
            </span>
            <div className="border-brand-primary/30 bg-surface-main/20 mt-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-md">
              <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[9px] font-black tracking-[0.2em] text-white uppercase">
                Alpha_Verification
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* --- LAYER 02: CONTENT HUB (Flex-Orchestrated) --- */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <div className="flex flex-1 flex-col space-y-6">
          <header className="flex items-center gap-3">
            <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 rounded-full" />
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-80">
              Client: {data.client}
            </span>
          </header>

          <div className="space-y-4">
            <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl leading-[0.95] font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-3xl">
              {data.title}
            </h3>

            <p className="text-text-secondary line-clamp-2 min-h-[3rem] text-sm leading-relaxed font-medium italic opacity-75 md:text-base">
              “{data.description}”
            </p>
          </div>
        </div>

        {/* [ACTION_FOOTER]: Forced Baseline Alignment */}
        <footer className="border-border mt-10 flex items-center justify-between border-t pt-8 md:mt-12">
          <div className="flex items-center gap-4">
            <div className="bg-surface-offset group-hover:border-brand-primary/50 group-hover:bg-brand-primary group-hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-2xl border border-transparent transition-all duration-500 group-hover:-rotate-12 group-hover:text-white">
              <IconRenderer name="ArrowUpRight" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary group-hover:text-brand-primary text-[11px] font-black uppercase transition-colors">
                Analyze Strategy
              </span>
              <span className="text-text-muted font-mono text-[8px] uppercase opacity-40">
                Node_Success.v18
              </span>
            </div>
          </div>

          <IconRenderer
            name="ShieldCheck"
            size={18}
            className="text-text-muted group-hover:text-brand-primary opacity-20 transition-all duration-500 group-hover:opacity-100"
          />
        </footer>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
