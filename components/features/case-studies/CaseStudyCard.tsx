/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD_NODE v18.1.2 (FALLBACK_FIXED)
 * [STRATEGY]: Pure Server Component | Zero-JS Payload | Authority Building
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure & Utilities ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import IconRenderer from "@/components/ui/IconRenderer";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  readonly data: CaseStudy;
  readonly index?: number;
}

const CaseStudyCard = ({ data, index = 0 }: CaseStudyCardProps) => {
  // [SERVER_ONLY]: Pure logic for RSC execution
  const primaryResult = data.results?.[0] || "Growth_Verified";
  const imageSource = data.image || "/images/case-studies/default.webp";
  const imgData = IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null;

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className="group rounded-section bg-surface-card border-border shadow-pro-sm hover:border-brand-primary/40 hover:shadow-glow-lg relative flex h-full flex-col overflow-hidden border transition-all duration-500"
    >
      {/* 01. VISUAL CORE (Zero-CLS) */}
      <div className="bg-surface-offset relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={imageSource}
          alt={`Success: ${data.title}`}
          fill
          priority={index === 0}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="from-surface-card absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-60" />
      </div>

      {/* 02. CONTENT HUB */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
              {data.client || "Authority_Case"}
            </span>
            <div className="bg-border h-3 w-px" />
            <span className="text-text-muted text-[10px] font-bold tracking-widest uppercase">
              Success_Protocol
            </span>
          </div>

          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-3xl font-black tracking-tighter uppercase italic transition-colors md:text-4xl">
            {data.title}
          </h3>
        </header>

        <div className="mb-10 flex flex-wrap gap-2">
          {data.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="border-border bg-surface-offset text-text-muted group-hover:border-brand-primary/20 rounded-lg border px-3 py-1.5 text-[9px] font-black tracking-widest uppercase transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-border mt-auto flex items-center justify-between border-t pt-8">
          <div className="flex flex-col gap-1">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase opacity-50">
              Validated_Outcome
            </span>
            <span className="text-text-primary text-xl font-black tracking-tight uppercase italic">
              {primaryResult}
            </span>
          </div>
          <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300">
            <IconRenderer name="ArrowRight" size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
