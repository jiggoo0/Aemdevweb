/**
 * [FEATURE COMPONENT]: CASE_STUDY_CARD_NODE v17.5.0 (STABILIZED_FINAL)
 * [STRATEGY]: Adaptive Success Imagery | ROI Impact Logic | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  readonly data: CaseStudy;
  readonly index?: number;
  readonly className?: string;
}

/**
 * @component CaseStudyCard
 * @description การ์ดแสดงเคสความสำเร็จที่ออกแบบมาเพื่อเปลี่ยน "ความเชื่อถือ" ให้เป็น "ยอดโอนเงิน"
 */
const CaseStudyCard = ({ data, index = 0, className }: CaseStudyCardProps) => {
  // สกัดเอาผลลัพธ์หลักตัวแรกออกมาแสดงผลเพื่อสร้าง Impact ทันทีที่เห็น
  const primaryResult = data.results?.[0] || "Success_Verified";

  return (
    <Link
      href={`/case-studies/${data.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        className,
      )}
      /* Staggered Animation: ใช้ CSS Variable เพื่อคุมจังหวะการแสดงผล */
      style={{ animationDelay: `${index * 150}ms` } as React.CSSProperties}
    >
      {/* --- 01. VISUAL AUTHORITY ENGINE: ส่วนแสดงภาพลักษณ์ความสำเร็จ --- */}
      <div className="bg-surface-offset border-border relative aspect-[16/10] overflow-hidden border-b">
        {/* Subtle Tech Grid Texture */}
        <div
          className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.03]"
          aria-hidden="true"
        />

        <Image
          src={data.thumbnail}
          alt={`Success_Case_AEMDEVWEB: ${data.title}`}
          fill
          quality={90}
          /* [LCP OPTIMIZATION]: รูปภาพ 2 ใบแรกจะถูกโหลดล่วงหน้าเพื่อคะแนน Performance สูงสุด */
          priority={index < 2}
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 40vw"
        />

        {/* Cinematic Scrim: ไล่แสงเงาเพื่อให้ข้อมูล ROI โดดเด่นขึ้นมา */}
        <div className="from-surface-main via-surface-main/30 absolute inset-0 z-10 bg-gradient-to-t to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />

        {/* --- ROI IMPACT OVERLAY: แสดงตัวเลขความสำเร็จ (Neural Physics) --- */}
        <div className="absolute inset-0 z-20 flex translate-y-6 flex-col items-center justify-center opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-brand-primary text-4xl font-black tracking-tighter uppercase italic drop-shadow-[0_10px_30px_rgba(var(--brand-primary-rgb),0.5)] md:text-5xl lg:text-6xl">
            {primaryResult.split(" ")[0]}
          </span>
          <div className="bg-brand-primary text-surface-main shadow-glow mt-4 flex items-center gap-2 rounded-full px-6 py-2">
            <IconRenderer name="TrendingUp" size={14} strokeWidth={3} />
            <span className="text-[10px] font-black tracking-[0.2em] uppercase">
              Verified_Success
            </span>
          </div>
        </div>
      </div>

      {/* --- 02. NARRATIVE HUB: ส่วนวิศวกรรมข้อมูลความน่าเชื่อถือ --- */}
      <div className="flex flex-grow flex-col justify-between p-9 lg:p-11">
        <div className="space-y-7">
          <div className="flex items-center gap-4">
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Project_Log: {data.client}
            </span>
            <div className="bg-border h-px flex-grow opacity-30" />
          </div>

          <h3 className="text-text-primary group-hover:text-brand-primary text-2xl leading-[1.15] font-black tracking-tighter uppercase italic transition-colors duration-500 md:text-3xl">
            {data.title}
          </h3>

          <p className="text-text-secondary line-clamp-2 text-base leading-relaxed font-medium italic opacity-75 transition-opacity group-hover:opacity-100">
            “{data.description}”
          </p>
        </div>

        {/* --- 03. INTERFACE GATEWAY: โหนดการเข้าถึง Audit ข้อมูล --- */}
        <div className="border-border mt-12 flex items-center justify-between border-t pt-8">
          <div className="flex items-center gap-5">
            <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-surface-main group-hover:shadow-glow relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500">
              <IconRenderer
                name="ArrowUpRight"
                size={22}
                className="relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-45"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-text-primary text-[11px] font-black tracking-[0.1em] uppercase">
                Analyze Strategy
              </span>
              <span className="text-text-muted font-mono text-[8px] font-bold tracking-widest uppercase opacity-40">
                Case_Node_0{index + 1}
              </span>
            </div>
          </div>

          <IconRenderer
            name="ShieldCheck"
            size={22}
            className="text-text-muted group-hover:text-brand-primary opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:opacity-70"
          />
        </div>
      </div>
    </Link>
  );
};

export default memo(CaseStudyCard);
