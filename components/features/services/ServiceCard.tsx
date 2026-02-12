/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v17.9.9 (HYDRATION_STABILIZED)
 * [STRATEGY]: Adaptive Visual Logic | CLS Hardening | Runtime Error Prevention
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
// [FIX]: ตรวจสอบว่าไฟล์นี้มีอยู่จริง หรือใช้ fallback strategy
import { IMAGE_BLUR_DATA } from "@/constants/image-blur-data";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { TemplateMasterData } from "@/types";

interface ServiceCardProps {
  readonly data: TemplateMasterData;
  readonly className?: string;
  readonly isPopular?: boolean;
  readonly index?: number;
}

const ServiceCard = ({ data, className, isPopular, index = 0 }: ServiceCardProps) => {
  // [VALUE_PROPOSITION]: สกัดจุดขายหลัก 3 อันดับแรกเพื่อลด Cognitive Load
  const displayFeatures = useMemo(() => {
    // ตรวจสอบว่ามีข้อมูล benefits หรือ coreFeatures หรือไม่
    const benefits = data.benefits || [];
    if (benefits.length > 0) return benefits.slice(0, 3);

    return data.coreFeatures?.slice(0, 3).map((f) => f.title) || [];
  }, [data]);

  // [IMAGE_REGISTRY]: ดึงข้อมูล Blur และ Ratio จาก Global Registry (ถ้ามี)
  const imageSource = data.image || "/images/service/default.webp";
  // Safety Access: ป้องกัน undefined error ถ้า key ไม่มีใน registry
  const imgData = IMAGE_BLUR_DATA?.[imageSource] || null;

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-3",
        "transform-gpu will-change-transform", // [PERFORMANCE]: GPU Offload
        className,
      )}
    >
      {/* --- LAYER 1: POPULAR BADGE --- */}
      {(isPopular || data.isPopular) && (
        <div className="bg-brand-primary shadow-glow absolute top-6 right-6 z-30 rounded-full px-4 py-1.5 md:px-5">
          <span className="text-surface-main text-[8px] font-black tracking-widest uppercase md:text-[9px]">
            Popular_Choice
          </span>
        </div>
      )}

      {/* --- LAYER 2: VISUAL INFRASTRUCTURE (ZERO-CLS) --- */}
      <div className="bg-surface-offset border-border relative aspect-[16/10] w-full overflow-hidden border-b">
        <Image
          src={imageSource}
          alt={data.title}
          fill
          /* [CRITICAL FIX]: ป้องกัน Build Error หากไม่มี Blur Data */
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          priority={index < 2} // LCP Optimization for top 2 cards
          className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay Gradient for Text Readability (Optional) */}
        <div className="via-surface-main/20 to-surface-main/80 absolute inset-0 bg-gradient-to-t from-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* --- LAYER 3: CONTENT HUB --- */}
      <div className="flex flex-grow flex-col p-8 md:p-10">
        <header className="mb-6 space-y-3 md:mb-8 md:space-y-4">
          <span className="text-text-muted font-mono text-[9px] font-black uppercase opacity-50">
            Module_SRV.{(index + 1).toString().padStart(2, "0")} // {data.category}
          </span>
          <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tighter italic transition-colors md:text-3xl">
            {data.title.split("|")[0].trim()}
          </h3>
          <p className="text-text-secondary line-clamp-2 text-sm font-medium italic opacity-70 md:text-base">
            “{data.description}”
          </p>
        </header>

        {/* Dynamic Key Benefits List */}
        <ul className="mb-8 space-y-3 md:mb-10 md:space-y-4">
          {displayFeatures.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 md:items-center md:gap-4">
              <div className="bg-brand-primary/10 text-brand-primary mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg md:mt-0 md:h-6 md:w-6">
                <IconRenderer name="Check" size={12} strokeWidth={4} />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary text-xs font-bold transition-colors md:text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* --- LAYER 4: COMMERCIAL NODE --- */}
        <div className="border-border mt-auto flex items-end justify-between border-t pt-8 md:pt-10">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[8px] font-black uppercase opacity-40">
              Investment_Baseline
            </span>
            <div className="text-text-primary flex items-baseline font-black">
              <span className="mr-1 text-xs opacity-50 md:text-sm">฿</span>
              {/* suppressHydrationWarning เพื่อกัน Error จาก Locale String ของ Client */}
              <span suppressHydrationWarning className="text-3xl tabular-nums md:text-4xl">
                {(data.priceValue || 0).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main rounded-2xl p-3 transition-all md:p-4">
            <IconRenderer
              name="ArrowRight"
              size={20}
              className="transition-transform group-hover:-rotate-45"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ServiceCard);
