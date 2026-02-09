/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v17.5.0 (STABILIZED_SYNC)
 * [STRATEGY]: High-Fidelity Depth | Multi-Theme Logic | LCP Optimization
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { TemplateMasterData } from "@/types";

interface ServiceCardProps {
  readonly data: TemplateMasterData;
  readonly className?: string;
  readonly isPopular?: boolean;
  readonly index?: number;
}

/**
 * @component ServiceCard
 * @description โหนดแสดงบริการหลักที่เน้นการนำเสนอมูลค่า (Value Proposition) และสถาปัตยกรรมข้อมูลที่ชัดเจน
 */
const ServiceCard = ({ data, className, isPopular, index = 0 }: ServiceCardProps) => {
  // [STRATEGY]: Normalize Features for Display
  // จัดลำดับความสำคัญของข้อความจุดเด่น (Benefits > CoreFeatures)
  const displayFeatures = useMemo(() => {
    if (data.benefits && data.benefits.length > 0) {
      return data.benefits.slice(0, 3);
    }
    return (data.coreFeatures || []).slice(0, 3).map((f) => f.title);
  }, [data.benefits, data.coreFeatures]);

  // [FORMATTING]: มาตรฐานการแสดงผลสกุลเงินไทย
  const priceDisplay = useMemo(() => {
    return (data.priceValue || 0).toLocaleString("th-TH");
  }, [data.priceValue]);

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[3rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        className
      )}
    >
      {/* --- 01. BADGE SYSTEM: ป้ายสถานะวิศวกรรมยอดนิยม --- */}
      {(isPopular || data.isPopular) && (
        <div className="bg-brand-primary shadow-glow absolute top-6 right-6 z-30 flex items-center gap-2 rounded-full px-5 py-1.5">
          <IconRenderer name="Zap" size={10} className="text-surface-main fill-current" />
          <span className="text-surface-main text-[9px] font-black tracking-widest uppercase">
            Popular_Choice
          </span>
        </div>
      )}

      {/* --- 02. VISUAL INFRASTRUCTURE: หน่วยประมวลผลทัศนียภาพ --- */}
      <div className="bg-surface-offset border-border relative aspect-[16/10] w-full overflow-hidden border-b">
        {/* Subtle Tech Grid Texture Layer */}
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.03]" aria-hidden="true" />

        {data.image ? (
          <Image
            src={data.image}
            alt={`บริการ ${data.title} โดย AEMDEVWEB Specialist`}
            fill
            quality={90}
            /* [LCP OPTIMIZATION]: รูปภาพ 2 ใบแรกจะถูกโหลดแบบ Priority เพื่อคะแนนความเร็วสูงสุด */
            priority={index < 2}
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 33vw"
          />
        ) : (
          <div className="bg-surface-main flex h-full w-full items-center justify-center opacity-20">
            <IconRenderer name="Cpu" size={60} strokeWidth={1} />
          </div>
        )}

        {/* Ambient Scrim Layer */}
        <div className="from-surface-card absolute inset-0 z-20 bg-gradient-to-t via-transparent to-transparent opacity-60" />
      </div>

      {/* --- 03. CONTENT ARCHITECTURE: โครงสร้างข้อมูลเชิงยุทธศาสตร์ --- */}
      <div className="flex flex-grow flex-col p-9 md:p-11">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-brand-primary shadow-glow h-1.5 w-8 rounded-full transition-all duration-500 group-hover:w-16" />
            <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-50">
              Module_SRV.{(index + 1).toString().padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-text-primary group-hover:text-brand-primary text-3xl leading-none font-black tracking-tighter uppercase italic transition-colors duration-500">
            {data.title.split("|")[0].trim()}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-base font-medium italic opacity-70">
            “{data.description}”
          </p>
        </header>

        {/* Feature Matrix: รายการขีดความสามารถทางเทคนิค */}
        <ul className="mb-10 space-y-4">
          {displayFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-4">
              <div className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-surface-main">
                <IconRenderer name="Check" size={12} strokeWidth={4} />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary text-sm font-bold transition-colors">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* --- 04. CONVERSION NODE: โหนดราคาและการตอบสนอง --- */}
        <div className="border-border mt-auto flex items-end justify-between border-t pt-10">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-40">
              Entry_Investment_Node
            </span>
            <div className="text-text-primary flex items-baseline">
              <span className="text-sm font-black opacity-50">฿</span>
              <span className="group-hover:text-brand-primary ml-1 text-4xl font-black tracking-tighter tabular-nums transition-colors">
                {priceDisplay}
              </span>
            </div>
          </div>

          {/* Interaction Trigger: Neural Physics Effect */}
          <div className="bg-surface-offset border-border group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-surface-main shadow-pro-sm group-hover:shadow-glow relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 hover:scale-105 active:scale-95">
            <IconRenderer
              name="ArrowRight"
              size={22}
              className="transition-transform duration-500 group-hover:-rotate-45"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ServiceCard);
