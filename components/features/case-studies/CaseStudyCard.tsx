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
      className="group rounded-section shadow-pro-sm hover:shadow-glow-lg relative flex h-full flex-col overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] transition-all duration-500 hover:border-[var(--color-brand-primary)]/40"
    >
      {/* 01. VISUAL CORE (Zero-CLS) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-offset)]">
        <Image
          src={imageSource}
          alt={`ผลงานรับทำเว็บไซต์ ${data.title} - เคสความสำเร็จจาก AEMDEVWEB`}
          fill
          priority={index === 0}
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[var(--surface-card)] via-transparent to-transparent opacity-60" />
      </div>

      {/* 02. CONTENT HUB */}
      <div className="flex flex-1 flex-col p-8 md:p-10">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] font-black tracking-[0.3em] text-[var(--color-brand-primary)] uppercase">
              {data.client || "Authority_Case"}
            </span>
            <div className="h-3 w-px bg-[var(--border)]" />
            <span className="text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">
              Success_Protocol
            </span>
          </div>

          <h3 className="line-clamp-2 text-3xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-4xl">
            {data.title}
          </h3>
        </header>

        <div className="mb-10 flex flex-wrap gap-2">
          {data.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-offset)] px-3 py-1.5 text-[9px] font-black tracking-widest text-[var(--text-secondary)] uppercase transition-colors group-hover:border-[var(--color-brand-primary)]/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] font-black tracking-widest text-[var(--text-muted)] uppercase opacity-60">
              Validated_Outcome
            </span>
            <span className="text-xl font-black tracking-tight text-[var(--text-primary)] uppercase italic">
              {primaryResult}
            </span>
          </div>
          <div className="group-hover:shadow-glow flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--surface-offset)] text-[var(--text-primary)] transition-all duration-300 group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
            <IconRenderer name="ArrowRight" size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
