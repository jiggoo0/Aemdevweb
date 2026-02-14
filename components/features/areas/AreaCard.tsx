/**
 * [FEATURE COMPONENT]: AREA_CARD_NODE v17.9.72 (TRUST_HARDENED)
 * [STRATEGY]: Social Proof Injection | Geographic Authority | CLS Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
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
  // [DEFENSIVE]: ป้องกัน Array เป็น undefined และ Clone เพื่อความปลอดภัย
  const districts = useMemo(
    () => (Array.isArray(data.districts) ? [...data.districts] : []),
    [data.districts],
  );

  const displayTitle = data.province || "พื้นที่ให้บริการ";

  // [TRUST_SIGNAL]: ดึงข้อมูล Social Proof จาก Local Context
  const socialProof = data.localContext?.socialProof;

  // [LOGIC]: Smart Fallback Image Strategy & Type-Safe Lookup
  const imagePath = useMemo(
    () => data.heroImage || `/images/areas/${data.slug}-node.webp`,
    [data.heroImage, data.slug],
  );

  // [TYPE_FIX]: Assertion เพื่อป้องกัน TS Index Error
  const imgData = IMAGE_BLUR_DATA[imagePath as keyof typeof IMAGE_BLUR_DATA] || null;

  return (
    <Link
      href={`/areas/${data.slug}`}
      className={cn(
        "group relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[3rem] transition-all duration-700 ease-[0.16,1,0.3,1]",
        "border-border bg-surface-card shadow-pro-sm border",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 01: VISUAL ENGINE (CLS PROTECTED) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        <Image
          src={imagePath}
          alt={`บริการรับทำเว็บไซต์ ${displayTitle} โดยผู้เชี่ยวชาญ`}
          fill
          priority={index < 2}
          placeholder={imgData ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-50 transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-40"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="from-surface-main via-surface-main/80 to-surface-main/20 absolute inset-0 z-10 bg-gradient-to-t" />
        <div
          className="bg-infrastructure-grid absolute inset-0 z-20 opacity-[0.05] mix-blend-overlay"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
      </div>

      {/* --- LAYER 02: CONTENT ENGINE --- */}
      <div className="relative z-30 flex h-full flex-col justify-between p-8 md:p-10">
        {/* Header: Icon, ID & Trust Signal */}
        <div className="flex items-start justify-between">
          <div className="bg-surface-offset/80 text-brand-primary border-border group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-xl transition-all duration-500 group-hover:rotate-[12deg]">
            <IconRenderer name="MapPin" size={24} strokeWidth={2.5} />
          </div>

          <div className="flex flex-col items-end gap-1">
            <span className="text-brand-primary font-mono text-[8px] font-black tracking-[0.4em] uppercase opacity-80">
              NODE_{data.slug.slice(0, 3).toUpperCase()}
            </span>

            {/* [TRUST_INJECTION]: แสดงคะแนนรีวิวรายพื้นที่ */}
            {socialProof && (
              <div className="bg-brand-primary/10 border-brand-primary/20 flex items-center gap-1.5 rounded-full border px-2.5 py-1 backdrop-blur-md">
                <div className="text-brand-primary flex">
                  {[...Array(5)].map((_, i) => (
                    <IconRenderer
                      key={`star-${i}`}
                      name="Star"
                      size={8}
                      className={cn(
                        i < Math.floor(socialProof.rating) ? "fill-current" : "opacity-30",
                      )}
                    />
                  ))}
                </div>
                <span className="text-brand-primary font-mono text-[7px] font-bold">
                  {socialProof.rating} ({socialProof.reviewCount})
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Body: Title & Tags */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-text-primary group-hover:text-brand-primary text-4xl leading-[0.9] font-black tracking-tighter uppercase italic transition-colors md:text-5xl">
              {displayTitle}
            </h3>
            <div className="bg-brand-primary/20 group-hover:bg-brand-primary h-1.5 w-12 overflow-hidden rounded-full transition-all duration-700 group-hover:w-full" />
          </div>

          {districts.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {districts.slice(0, 3).map((d) => (
                <span
                  key={d}
                  className="bg-surface-card/50 border-border text-text-secondary rounded-lg border px-3 py-1 text-[9px] font-bold tracking-wider uppercase backdrop-blur-sm"
                >
                  {d}
                </span>
              ))}
              {districts.length > 3 && (
                <span className="text-brand-primary px-2 py-1 text-[9px] font-bold">+More</span>
              )}
            </div>
          )}

          {/* Footer: Action Indicator */}
          <div className="border-border flex items-center justify-between border-t pt-6">
            <span className="text-text-muted group-hover:text-brand-primary font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-50 transition-colors">
              Analyze_Connectivity.Local
            </span>
            <div className="transition-transform duration-300 group-hover:translate-x-2">
              <IconRenderer
                name="ArrowRight"
                size={18}
                className="text-text-primary group-hover:text-brand-primary transition-colors"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(AreaCard);
