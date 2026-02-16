/**
 * [FEATURE COMPONENT]: SERVICE_CARD_NODE v17.9.74 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Adaptive Visual Logic | CLS Hardening | Hydration-Safe Pricing
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

// --- Infrastructure ---
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
  // [DATA_ADAPTER]: คัดเลือกจุดขายที่ทรงพลังที่สุด (จำกัดที่ 3 รายการเพื่อ Visual Balance)
  const displayFeatures = useMemo(() => {
    if (data.benefits?.length) return data.benefits.slice(0, 3);
    if (data.coreFeatures?.length) return data.coreFeatures.slice(0, 3).map((f) => f.title);
    return ["High-Performance Architecture", "Technical SEO Strategy", "ROI-Focused Design"];
  }, [data]);

  // [IMAGE_ENGINE]: จัดการ Visual Layer และป้องกัน Layout Shift (CLS)
  const imageSource = useMemo(() => data.image || "/images/services/default.webp", [data.image]);
  const imgData = IMAGE_BLUR_DATA[imageSource as keyof typeof IMAGE_BLUR_DATA] || null;

  // [COMMERCIAL_LOGIC]: ระบบแสดงราคาแบบ Hybrid (ตัวเลขจริง vs ใบเสนอราคา)
  const priceDisplay = useMemo(() => {
    if (!data.priceValue || data.priceValue === 0) return "Premium_Quote";
    return new Intl.NumberFormat("th-TH").format(data.priceValue);
  }, [data.priceValue]);

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[0.16,1,0.3,1]",
        "bg-surface-card border-border shadow-pro-sm border md:rounded-[3rem]",
        "hover:border-brand-primary/40 hover:shadow-glow-lg hover:-translate-y-2",
        "transform-gpu will-change-transform",
        className,
      )}
    >
      {/* --- LAYER 1: AUTHORITY BADGE (Social Proof) --- */}
      {(isPopular || data.isPopular) && (
        <div className="absolute top-6 right-6 z-30">
          <div className="bg-brand-primary/90 text-surface-main shadow-glow-sm flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 backdrop-blur-xl">
            <IconRenderer name="Star" size={10} className="fill-current" />
            <span className="text-[8px] font-black tracking-widest uppercase md:text-[9px]">
              Specialist_Choice
            </span>
          </div>
        </div>
      )}

      {/* --- LAYER 2: VISUAL CORE (Zero-CLS Architecture) --- */}
      <div
        className="bg-surface-offset relative w-full overflow-hidden select-none"
        style={{ aspectRatio: imgData ? `${imgData.width}/${imgData.height}` : "16/10" }}
      >
        <Image
          src={imageSource}
          alt={`Solution: ${data.title}`}
          fill
          priority={index < 3} // ปรับจูน LCP สำหรับ 3 บริการแรก
          placeholder={imgData?.blurDataURL ? "blur" : "empty"}
          blurDataURL={imgData?.blurDataURL}
          className="object-cover opacity-90 transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-100"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Aesthetic Layers: เพิ่มมิติและความขลังของ UI */}
        <div
          className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
        <div className="from-surface-card absolute inset-0 z-10 bg-gradient-to-t via-transparent to-transparent opacity-60" />
      </div>

      {/* --- LAYER 3: CONTENT HUB --- */}
      <div className="flex flex-grow flex-col p-8 md:p-10">
        <header className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-50">
              Service_Node.v17.{(index + 1).toString().padStart(2, "0")}
            </span>
          </div>

          <h3 className="text-text-primary group-hover:text-brand-primary line-clamp-2 text-2xl leading-[0.95] font-black tracking-tighter uppercase italic transition-colors duration-300 md:text-3xl">
            {data.title.split("|")[0].trim()}
          </h3>

          <p className="text-text-secondary line-clamp-2 text-sm leading-relaxed font-medium italic opacity-80">
            “{data.description}”
          </p>
        </header>

        {/* Feature Registry List */}
        <ul className="mb-10 space-y-3.5">
          {displayFeatures.map((feature, i) => (
            <li key={i} className="flex items-center gap-4">
              <div className="bg-surface-offset text-brand-primary group-hover:border-brand-primary/20 border-border flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border transition-all duration-500">
                <IconRenderer name="Check" size={12} strokeWidth={4} />
              </div>
              <span className="text-text-secondary group-hover:text-text-primary text-xs font-bold transition-colors md:text-sm">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* --- LAYER 4: COMMERCIAL GATEWAY --- */}
        <div className="border-border mt-auto flex items-end justify-between border-t pt-8">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase opacity-40">
              {data.priceValue ? "Starting_Investment" : "Inquiry_Status"}
            </span>
            <div className="text-text-primary group-hover:text-brand-primary flex items-baseline font-black transition-colors">
              {data.priceValue > 0 && <span className="mr-1 font-sans text-xs opacity-50">฿</span>}
              <span
                className={cn(
                  "tracking-tight uppercase italic tabular-nums",
                  data.priceValue ? "text-3xl md:text-4xl" : "text-xl opacity-80 md:text-2xl",
                )}
              >
                {priceDisplay}
              </span>
            </div>
          </div>

          <div className="bg-surface-offset group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow rounded-2xl p-4 transition-all duration-500 group-hover:-rotate-45">
            <IconRenderer name="ArrowRight" size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ServiceCard);
