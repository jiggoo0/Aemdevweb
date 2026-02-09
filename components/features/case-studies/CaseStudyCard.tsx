/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD_NODE v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Adaptive Success Imagery | Cinematic Scrim | Deterministic Quality
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface CaseStudyData {
  readonly slug: string;
  readonly title: string;
  readonly excerpt?: string;
  readonly description?: string;
  readonly category: string;
  readonly impactValue?: string;
  readonly impactLabel?: string;
  readonly image?: string;
}

interface CaseStudyCardProps {
  readonly data: CaseStudyData;
  readonly index?: number;
  readonly className?: string;
}

/**
 * @component CaseStudyCard
 * @description โหนดแสดงผลงานความสำเร็จ รองรับ Multi-Theme และปรับจูน LCP สำหรับภาพความละเอียดสูง
 */
const CaseStudyCard = ({ data, index = 0, className }: CaseStudyCardProps) => {
  const description = data.excerpt || data.description || "เจาะลึกกลยุทธ์เบื้องหลังความสำเร็จ...";

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        /* [HYBRID THEME]: ปรับเปลี่ยนสีตามตัวแปร Semantic */
        "bg-surface-main border-border shadow-sm",
        "hover:border-brand-primary/50 hover:-translate-y-2 hover:bg-surface-offset/50 hover:shadow-glow",
        className,
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 01. VISUAL NODE: ROI HIGHLIGHT (GPU Accelerated) */}
      <div className="bg-surface-offset relative aspect-[16/10] overflow-hidden border-b border-border">
        {/* Dynamic Infrastructure Grid */}
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.05]" />

        <Image
          src={data.image || "/images/case-studies/preview.webp"}
          alt={`Case Study: ${data.title}`}
          fill
          /* [DETERMINISTIC FIX]: ล็อคคุณภาพให้ตรงกับระบบป้องกัน Hydration Error */
          quality={85}
          /* [LCP OPTIMIZATION]: โหลดเฉพาะ 2 ใบแรกของแถว */
          priority={index < 2}
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Cinematic Scrim: ยังคงความเข้มไว้เพื่อให้ Impact Value โดดเด่นเสมอ */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />

        {/* Impact Overlay: แสดงผลตัวเลขความสำเร็จ (ROI/Conversion) */}
        {data.impactValue && (
          <div className="absolute inset-0 z-20 flex translate-y-8 flex-col items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-6xl font-black tracking-tighter text-white drop-shadow-2xl md:text-7xl">
              {data.impactValue}
            </span>
            <div className="bg-brand-primary mt-2 flex items-center gap-2 rounded-full px-4 py-1.5 text-black shadow-glow">
              <IconRenderer name="TrendingUp" size={12} strokeWidth={3} />
              <span className="text-[9px] font-black tracking-widest uppercase">
                {data.impactLabel || "Success Rate"}
              </span>
            </div>
          </div>
        )}

        {/* Category Badge Protocol */}
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
            <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
            <span className="text-[8px] font-black tracking-[0.2em] text-white/90 uppercase">
              {data.category}
            </span>
          </div>
        </div>
      </div>

      {/* 02. NARRATIVE NODE: ส่วนข้อมูลเชิงยุทธศาสตร์ */}
      <div className="flex flex-grow flex-col justify-between p-8 md:p-10">
        <div className="space-y-4">
          <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tight uppercase transition-colors duration-500 md:text-3xl">
            {data.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed font-medium italic opacity-70 transition-opacity group-hover:opacity-100">
            “{description}”
          </p>
        </div>

        {/* 03. ACTION INTERFACE: จุดเชื่อมต่อประสบการณ์ผู้ใช้ */}
        <div className="border-border mt-8 flex items-center justify-between border-t pt-6">
          <div className="group/btn flex items-center gap-4">
            <div className="border-border bg-surface-card group-hover/btn:bg-brand-primary group-hover/btn:border-brand-primary flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:text-white group-hover/btn:shadow-glow">
              <IconRenderer name="ArrowUpRight" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-text-muted font-mono text-[8px] font-bold tracking-[0.2em] uppercase transition-colors">
                Explore
              </span>
              <span className="text-text-secondary group-hover/btn:text-text-primary text-[10px] font-black tracking-widest uppercase transition-colors">
                Read_Case
              </span>
            </div>
          </div>

          <IconRenderer
            name="ShieldCheck"
            size={20}
            className="text-text-muted opacity-20 transition-all duration-500 group-hover:text-brand-primary group-hover:opacity-40"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
