/**
 * [UI COMPONENT]: SERVICE_CARD_NODE v17.3.9 (STABILIZED_LOGIC)
 * [STRATEGY]: High-Fidelity Depth | Multi-Theme Logic | Type-Safe Iteration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceData, ServiceFeature } from "@/types";

interface ServiceCardProps {
  readonly data: ServiceData;
  readonly className?: string;
  readonly isPopular?: boolean;
  readonly index?: number;
}

const ServiceCard = ({ data, className, isPopular, index = 0 }: ServiceCardProps) => {
  
  // [TYPE_GUARD]: ระบบตรวจสอบคุณสมบัติข้อมูลระดับ Specialist
  const isServiceFeature = (item: unknown): item is ServiceFeature => {
    return typeof item === "object" && item !== null && "title" in item;
  };

  // [DATA_PREP]: สกัดคุณสมบัติหลัก 3 รายการ [RESOLVED: Implicit Any]
  const featuresList = useMemo(() => {
    const rawList = Array.isArray(data.benefits) && data.benefits.length > 0 
      ? data.benefits 
      : (Array.isArray(data.coreFeatures) ? data.coreFeatures : []);

    return rawList.slice(0, 3).map((item: string | ServiceFeature): string => {
      if (typeof item === "string") return item;
      if (isServiceFeature(item)) return item.title;
      return "Service_Module.v17";
    });
  }, [data.benefits, data.coreFeatures]);

  const displayTitle = useMemo(() => 
    (data.title || "Untitled_Node").split("|")[0].trim(), 
    [data.title]
  );

  const formattedPrice = useMemo(() => {
    if (typeof data.priceValue === "number") return data.priceValue.toLocaleString("th-TH");
    const numeric = parseFloat(String(data.price || "0").replace(/[^0-9.]/g, ""));
    return isNaN(numeric) ? String(data.price) : numeric.toLocaleString("th-TH");
  }, [data.priceValue, data.price]);

  return (
    <Link
      href={`/services/${data.templateSlug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border transition-all duration-500 ease-[0.16,1,0.3,1]",
        "border-border bg-surface-card",
        "hover:border-brand-primary/40 hover:-translate-y-2 hover:bg-surface-offset hover:shadow-glow",
        "will-change-transform",
        className,
      )}
    >
      {isPopular && (
        <div className="bg-brand-primary absolute top-5 right-5 z-30 animate-pulse rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest text-surface-main uppercase shadow-glow">
          Best_Value
        </div>
      )}

      {/* 01. VISUAL NODE: การประมวลผลพื้นหลังและรูปภาพ */}
      <div className="bg-surface-offset relative aspect-[16/10] w-full overflow-hidden border-b border-border">
        <div className="bg-infrastructure-grid absolute inset-0 z-10 opacity-[0.05]" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-80" />

        {data.image ? (
          <Image
            src={data.image}
            alt={`Service: ${displayTitle}`}
            fill
            quality={85}
            priority={index < 2}
            className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-text-muted/10">
            <IconRenderer name="Cpu" size={80} strokeWidth={1} />
          </div>
        )}

        {/* Badge: รหัสลำดับ Node */}
        <div className="absolute top-5 left-5 z-30 flex items-center gap-2 rounded-full border border-border bg-surface-card/60 px-3 py-1 backdrop-blur-md">
          <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-glow" />
          <span className="text-text-primary font-mono text-[8px] font-black tracking-[0.2em] uppercase">
            SRV-{(index + 1).toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* 02. CONTENT NODE: โครงสร้างข้อมูลหลัก */}
      <div className="flex flex-grow flex-col p-8 md:p-10">
        <div className="mb-6 space-y-3">
          <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tight uppercase transition-colors duration-300 md:text-3xl">
            {displayTitle}
          </h3>
          <div className="bg-border group-hover:bg-brand-primary h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full shadow-glow" />
        </div>

        <p className="text-text-secondary mb-8 line-clamp-2 text-sm leading-relaxed font-medium italic opacity-80">
          {data.description}
        </p>

        {/* Feature Matrix [RESOLVED: idx: number text: string] */}
        <ul className="mb-8 space-y-4">
          {featuresList.map((text: string, idx: number) => (
            <li key={idx} className="group/item flex items-start gap-3">
              <div className="bg-surface-offset text-brand-primary group-hover/item:bg-brand-primary mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-border transition-all group-hover/item:text-surface-main group-hover/item:shadow-glow">
                <IconRenderer name="Check" size={10} strokeWidth={4} />
              </div>
              <span className="text-text-secondary text-sm font-bold transition-colors group-hover/item:text-text-primary">
                {text}
              </span>
            </li>
          ))}
        </ul>

        {/* 03. ACTION NODE: จุดตอบสนองทางธุรกิจ */}
        <div className="mt-auto flex items-end justify-between border-t border-border pt-8">
          <div className="space-y-1">
            <span className="text-text-muted font-mono text-[8px] font-black tracking-[0.2em] uppercase opacity-40">Starting_Investment</span>
            <div className="text-text-primary flex items-baseline">
              <span className="text-sm font-black opacity-50">฿</span>
              <span className="group-hover:text-brand-primary ml-1 text-4xl font-black tracking-tighter tabular-nums transition-colors">
                {formattedPrice}
              </span>
            </div>
          </div>

          <div className="border-border bg-surface-card text-text-primary group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-surface-main relative flex h-14 w-14 items-center justify-center rounded-[1.25rem] border transition-all duration-300 hover:scale-105 active:scale-95 shadow-pro-sm group-hover:shadow-glow">
            <IconRenderer name="ArrowRight" size={22} className="transition-transform duration-300 group-hover:-rotate-45" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default memo(ServiceCard);
