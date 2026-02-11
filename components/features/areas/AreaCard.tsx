/**
 * [FEATURE COMPONENT]: AREA_CARD_NODE v17.7.0 (ZERO_CLS_HARDENED)
 * [STRATEGY]: Aspect-Ratio Mapping | Geographic Authority | Neural Physics
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure ---
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { AreaNode } from "@/types";

interface AreaCardProps {
  readonly data: AreaNode;
  readonly index?: number;
  readonly className?: string;
}

const AreaCard = ({ data, index = 0, className }: AreaCardProps) => {
  const districts = Array.isArray(data.districts) ? [...data.districts] : [];
  const displayTitle = data.province || "พื้นที่ให้บริการ";
  const imagePath = useMemo(
    () => data.heroImage || `/images/areas/${data.slug}-node.webp`,
    [data.heroImage, data.slug],
  );

  // [ENGINE]: ดึงข้อมูล Metadata เพื่อจองพื้นที่โฆษณา (Slot Reservation)
  const imgData = IMAGE_BLUR_DATA[imagePath];

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
      {/* --- LAYER 01: VISUAL ENGINE (CLS PROTECTED) --- */}
      <div
        className="absolute inset-0 z-0 overflow-hidden select-none"
        /* [CLS GUARD]: บังคับสัดส่วนจาก Metadata จริง */
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "auto" }}
      >
        <Image
          src={imagePath}
          alt={`ผู้เชี่ยวชาญรับทำเว็บไซต์ ${displayTitle}`}
          fill
          priority={index < 2}
          placeholder="blur"
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-50 transition-transform duration-[2s] ease-out group-hover:scale-105 group-hover:opacity-25"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="from-surface-main via-surface-main/90 absolute inset-0 z-10 bg-gradient-to-t to-transparent" />
        <div className="bg-infrastructure-grid absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay" />
      </div>

      {/* --- LAYER 02: CONTENT --- */}
      <div className="relative z-30 flex h-full flex-col justify-between p-8 md:p-10">
        <div className="flex items-start justify-between">
          <div className="bg-surface-offset/80 text-brand-primary border-border group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow flex h-12 w-12 items-center justify-center rounded-xl border backdrop-blur-xl transition-all duration-500 group-hover:rotate-[12deg]">
            <IconRenderer name="MapPin" size={20} strokeWidth={2.5} />
          </div>
          <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.4em] uppercase">
            NODE_{data.slug.slice(0, 3).toUpperCase()}
          </span>
        </div>

        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="text-text-primary group-hover:text-brand-primary text-3xl leading-tight font-black tracking-tighter uppercase italic transition-colors md:text-4xl">
              {displayTitle}
            </h3>
            <div className="bg-brand-primary/20 h-1 w-12 overflow-hidden rounded-full transition-all duration-700 group-hover:w-full" />
          </div>

          {districts.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {districts.slice(0, 2).map((d) => (
                <span
                  key={d}
                  className="bg-brand-primary/5 border-brand-primary/10 text-brand-primary rounded-lg border px-3 py-1 text-[8px] font-black tracking-widest uppercase"
                >
                  {d}
                </span>
              ))}
            </div>
          )}

          <div className="border-border flex items-center justify-between border-t pt-6">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-40">
              Analyze Connectivity
            </span>
            <IconRenderer
              name="ArrowRight"
              size={16}
              className="text-text-primary group-hover:text-brand-primary transition-all group-hover:translate-x-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(AreaCard);
