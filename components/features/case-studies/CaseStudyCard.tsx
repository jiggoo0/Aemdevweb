/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD_NODE v17.0.2 (STABILIZED)
 * [STRATEGY]: Success Imagery | Cinematic Scrim | Zero-Unused-Vars
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

// Interface สำหรับข้อมูลภายในการ์ด
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
  readonly index?: number; // [FIX]: Renamed from _index to index (Standardized)
  readonly className?: string;
}

/**
 * @component CaseStudyCard
 * @description การ์ดแสดงผลงานความสำเร็จ พร้อมระบบตรวจจับค่าความสำเร็จ (Impact Value)
 */
const CaseStudyCard = ({ data, index = 0, className }: CaseStudyCardProps) => {
  // Logic: เลือกคำอธิบายที่มีข้อมูล (Excerpt -> Description -> Default)
  const description = data.excerpt || data.description || "เจาะลึกกลยุทธ์เบื้องหลังความสำเร็จ...";

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-out",
        // Base Style (Midnight Aura)
        "border-white/10 bg-[#050505] backdrop-blur-sm",
        // Hover State
        "hover:border-brand-primary/50 hover:-translate-y-2 hover:bg-white/[0.02] hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]",
        className,
      )}
      // [PHYSICS]: ใช้ index เพื่อสร้าง Stagger Animation (ลดภาระ JS โดยใช้ CSS Variable)
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* 01. VISUAL NODE: ROI HIGHLIGHT */}
      <div className="bg-surface-offset relative aspect-[16/10] overflow-hidden border-b border-white/5">
        {/* Grid Texture */}
        <div className="absolute inset-0 z-10 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />

        <Image
          src={data.image || "/images/case-studies/preview.webp"}
          alt={`Case Study: ${data.title}`}
          fill
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-black/40 to-transparent opacity-90" />

        {/* Impact Overlay: แสดงผลเฉพาะเมื่อมีการระบุค่ามาเท่านั้น */}
        {data.impactValue && (
          <div className="absolute inset-0 z-20 flex translate-y-8 flex-col items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-6xl font-black tracking-tighter text-white drop-shadow-2xl md:text-7xl">
              {data.impactValue}
            </span>
            <div className="bg-brand-primary mt-2 flex items-center gap-2 rounded-full px-4 py-1.5 text-black shadow-[0_0_20px_var(--color-brand-primary)]">
              <IconRenderer name="TrendingUp" size={12} strokeWidth={3} />
              <span className="text-[9px] font-black tracking-widest uppercase">
                {data.impactLabel || "Success Rate"}
              </span>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-6 left-6 z-20">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2 backdrop-blur-md">
            <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
            <span className="text-[8px] font-black tracking-[0.2em] text-white/90 uppercase">
              {data.category}
            </span>
          </div>
        </div>
      </div>

      {/* 02. NARRATIVE NODE */}
      <div className="flex flex-grow flex-col justify-between p-8">
        <div className="space-y-4">
          <h3 className="group-hover:text-brand-primary text-2xl font-black tracking-tight text-white uppercase transition-colors duration-500 md:text-3xl">
            {data.title}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed font-medium text-gray-400 italic">
            “{description}”
          </p>
        </div>

        {/* 03. ACTION INTERFACE */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="group/btn flex items-center gap-4">
            <div className="group-hover/btn:border-brand-primary group-hover/btn:bg-brand-primary flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 group-hover/btn:scale-110 group-hover/btn:text-black group-hover/btn:shadow-[0_0_15px_rgba(34,197,94,0.4)]">
              <IconRenderer name="ArrowUpRight" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="group-hover/btn:text-brand-primary font-mono text-[8px] font-bold tracking-[0.2em] text-gray-600 uppercase transition-colors">
                Explore
              </span>
              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase transition-colors group-hover/btn:text-white">
                Read_Case
              </span>
            </div>
          </div>

          <IconRenderer
            name="ShieldCheck"
            size={20}
            className="group-hover:text-brand-primary/20 text-white/10 transition-colors duration-500"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
