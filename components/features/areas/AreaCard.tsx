/**
 * [FEATURE COMPONENT]: AREA_CARD_NODE v17.5.0 (STABILIZED_FINAL)
 * [STRATEGY]: Compact Authority | Symmetrical Aspect Ratio | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { AreaNode } from "@/types";

interface AreaCardProps {
  readonly data: AreaNode;
  readonly index?: number;
  readonly className?: string;
}

/**
 * @component AreaCard
 * @description โหนดแสดงพื้นที่ให้บริการที่ปรับจูนสัดส่วนใหม่เพื่อความสมมาตรทางสายตา (Visual Symmetry)
 */
const AreaCard = ({ data, index = 0, className }: AreaCardProps) => {
  const districts = Array.isArray(data.districts) ? [...data.districts] : [];
  const displayTitle = data.province || "พื้นที่ให้บริการ";

  return (
    <Link
      href={`/areas/${data.slug}`}
      className={cn(
        "group relative flex min-h-[480px] flex-col overflow-hidden rounded-[3rem] transition-all duration-700 ease-[0.16,1,0.3,1]",
        "border-border bg-surface-card shadow-pro-sm border",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        className,
      )}
    >
      {/* --- LAYER 01: ATMOSPHERIC VISUAL ENGINE --- */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none" aria-hidden="true">
        <div className="relative h-full w-full">
          <Image
            src={data.heroImage || `/images/areas/${data.slug}-node.webp`}
            alt={`ผู้เชี่ยวชาญรับทำเว็บไซต์ ${displayTitle}`}
            fill
            className="object-cover opacity-50 transition-transform duration-[2s] ease-out group-hover:scale-105 group-hover:opacity-25"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 4}
            quality={85}
          />
          {/* ปรับ Gradient ให้ลึกขึ้นเพื่อความอ่านง่ายของ Text */}
          <div className="from-surface-main via-surface-main/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
          <div className="bg-infrastructure-grid absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay" />
        </div>
      </div>

      {/* --- LAYER 02: CONTENT ARCHITECTURE --- */}
      <div className="relative z-30 flex h-full flex-col justify-between p-8 md:p-10">
        {/* TOP: Identity Node */}
        <div className="flex items-start justify-between">
          <div className="bg-surface-offset/80 text-brand-primary border-border group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-500 group-hover:rotate-[12deg]">
            <IconRenderer name="MapPin" size={20} strokeWidth={2.5} />
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.4em] uppercase">
              NODE_{data.slug.slice(0, 3).toUpperCase()}
            </span>
            <div className="bg-brand-primary shadow-glow h-1 w-1 animate-pulse rounded-full" />
          </div>
        </div>

        {/* BOTTOM: Narrative Hub */}
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="space-y-1">
              <h3 className="text-text-primary group-hover:text-brand-primary text-3xl leading-tight font-black tracking-tighter uppercase italic transition-colors duration-500 md:text-4xl">
                {displayTitle}
              </h3>
              <p className="text-text-muted font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-60">
                Service_Deployment_Zone
              </p>
            </div>
            {/* Visual Indicator: Progress Line */}
            <div className="bg-brand-primary/20 h-1 w-12 overflow-hidden rounded-full transition-all duration-700 group-hover:w-full">
              <div className="bg-brand-primary h-full w-full" />
            </div>
          </div>

          <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed font-medium italic opacity-85">
            “วิศวกรรมโครงสร้างเว็บไซต์เพื่อสร้าง Authority สูงสุดในพื้นที่ {displayTitle}”
          </p>

          {/* District Tags: ระบบจัดลำดับพื้นที่อัจฉริยะ */}
          {districts.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {districts.slice(0, 2).map((district) => (
                <span
                  key={district}
                  className="bg-brand-primary/5 border-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main rounded-lg border px-3 py-1 text-[8px] font-black tracking-widest uppercase transition-all duration-300"
                >
                  {district}
                </span>
              ))}
              {districts.length > 2 && (
                <span className="text-text-muted flex items-center font-mono text-[8px] font-bold tracking-widest uppercase opacity-40">
                  +{districts.length - 2} LOCATIONS
                </span>
              )}
            </div>
          )}

          {/* Interaction Hub */}
          <div className="border-border flex items-center justify-between border-t pt-6">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-40">
              Analyze Area Connectivity
            </span>
            <div className="text-text-primary group-hover:text-brand-primary flex items-center gap-2 transition-all group-hover:translate-x-1">
              <IconRenderer name="ArrowRight" size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* GPU Accelerated Glow: เสริมมิติเมื่อ Hover */}
      <div className="bg-brand-primary/20 pointer-events-none absolute -right-20 -bottom-20 h-48 w-48 rounded-full opacity-0 mix-blend-screen blur-[100px] transition-opacity duration-1000 group-hover:opacity-100" />
    </Link>
  );
};

export default memo(AreaCard);
