/**
 * [UI COMPONENT]: SERVICE_CARD_NODE v17.0.2 (TYPE_SAFE)
 * [STRATEGY]: High-Fidelity Depth | Neural Physics | Click-Through Safety
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceData, ServiceFeature } from "@/types"; // ✅ Import จาก Global Types

interface ServiceCardProps {
  // ใช้ Type ServiceData จาก Global Types ซึ่งรองรับ readonly array แล้ว
  readonly data: ServiceData;
  readonly className?: string;
  readonly isPopular?: boolean;
  readonly index?: number;
}

const ServiceCard = ({ data, className, isPopular, index = 0 }: ServiceCardProps) => {
  // [LOGIC_CORE]: จัดเตรียมข้อมูล Features อย่างปลอดภัย
  const displayFeatures = useMemo(() => {
    // เลือกใช้ benefits ก่อน ถ้าไม่มีให้ใช้ coreFeatures
    // ใช้ as any ชั่วคราวหรือ Type Guard ถ้าโครงสร้างข้อมูลซับซ้อน แต่การใช้ spread [...] ช่วยแก้เรื่อง readonly ได้
    const benefits = data.benefits ? [...data.benefits] : [];
    const features = data.coreFeatures ? [...data.coreFeatures] : [];

    const rawList = benefits.length > 0 ? benefits : features;

    // ตัดมาแค่ 3 รายการแรก
    return rawList.slice(0, 3);
  }, [data.benefits, data.coreFeatures]);

  // ตัดคำ Title ส่วนแรก (ก่อนเครื่องหมาย |)
  const displayTitle = useMemo(() => data.title.split("|")[0].trim(), [data.title]);

  // จัดรูปแบบราคา (ใส่ลูกน้ำ)
  const formattedPrice = useMemo(() => {
    // เช็คว่ามี priceValue (number) หรือ price (string)
    if (typeof data.priceValue === "number") {
      return data.priceValue.toLocaleString("th-TH");
    }
    // Fallback ถ้าไม่มี priceValue ให้ใช้ string price และลบตัวอักษรที่ไม่ใช่ตัวเลขออก
    const priceString = typeof data.price === "string" ? data.price : "0";
    const numericPrice = parseFloat(priceString.replace(/[^0-9.]/g, ""));
    return isNaN(numericPrice) ? priceString : numericPrice.toLocaleString("th-TH");
  }, [data.priceValue, data.price]);

  return (
    <div
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border transition-all duration-500 ease-out",
        // Base Style (Midnight Aura)
        "border-white/10 bg-[#050505] backdrop-blur-sm",
        // Hover State
        "hover:border-brand-primary/50 hover:-translate-y-2 hover:bg-white/[0.02] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {/* Popular Badge */}
      {isPopular && (
        <div className="bg-brand-primary absolute top-4 right-4 z-30 animate-pulse rounded-full px-3 py-1 text-[9px] font-black tracking-widest text-black uppercase shadow-[0_0_15px_var(--color-brand-primary)]">
          Best_Value
        </div>
      )}

      {/* 01. VISUAL NODE: ส่วนแสดงรูปภาพ */}
      <div className="bg-surface-offset relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 z-10 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

        {data.image ? (
          <Image
            src={data.image}
            alt={`Service: ${displayTitle}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 group-hover:rotate-1"
            priority={index < 3}
          />
        ) : (
          <div className="bg-surface-offset group-hover:text-brand-primary/10 flex h-full w-full items-center justify-center text-white/5 transition-colors">
            <IconRenderer name="Cpu" size={80} strokeWidth={1} />
          </div>
        )}

        {/* Node ID Badge */}
        <div className="absolute top-4 left-4 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-3 py-1 backdrop-blur-md">
          <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-[0_0_10px_var(--color-brand-primary)]" />
          <span className="font-mono text-[8px] font-black tracking-[0.2em] text-white/80 uppercase">
            SRV-{(index + 1).toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* 02. CONTENT NODE: เนื้อหาหลัก */}
      <div className="flex flex-grow flex-col p-6 md:p-8">
        {/* Header */}
        <div className="mb-6 space-y-2">
          <h3 className="group-hover:text-brand-primary text-2xl font-black tracking-tight text-white uppercase transition-colors duration-300 md:text-3xl">
            {displayTitle}
          </h3>
          <div className="bg-brand-primary/50 group-hover:bg-brand-primary h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full" />
        </div>

        {/* Description */}
        <p className="mb-6 line-clamp-2 text-sm leading-relaxed font-medium text-gray-400">
          {data.description}
        </p>

        {/* Features List */}
        <ul className="mb-8 space-y-3">
          {displayFeatures.map((feature, idx) => {
            // Safe rendering: รองรับทั้ง String และ Object (ServiceFeature)
            const featureText =
              typeof feature === "string" ? feature : (feature as ServiceFeature).title;
            return (
              <li key={idx} className="group/item flex items-start gap-3">
                <div className="group-hover/item:bg-brand-primary mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-white/5 text-gray-500 transition-colors group-hover/item:text-black">
                  <IconRenderer name="Check" size={10} strokeWidth={4} />
                </div>
                <span className="text-sm font-medium text-gray-400 transition-colors group-hover/item:text-white">
                  {featureText}
                </span>
              </li>
            );
          })}
        </ul>

        {/* 03. ACTION NODE: ราคาและปุ่ม */}
        <div className="mt-auto flex items-end justify-between border-t border-white/10 pt-6">
          <div className="space-y-1">
            <span className="group-hover:text-brand-primary/80 font-mono text-[8px] font-bold tracking-[0.2em] text-gray-500 uppercase transition-colors">
              Starting_At
            </span>
            <div className="flex items-baseline text-white">
              <span className="text-sm font-bold text-gray-400">฿</span>
              <span className="group-hover:text-brand-primary ml-1 text-3xl font-black tracking-tighter tabular-nums transition-colors">
                {formattedPrice}
              </span>
            </div>
          </div>

          <Link
            href={`/services/${data.templateSlug}`}
            className="group/btn hover:border-brand-primary hover:bg-brand-primary relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:text-black active:scale-95"
            aria-label={`View details for ${displayTitle}`}
          >
            <IconRenderer
              name="ArrowRight"
              size={20}
              className="transition-transform duration-300 group-hover/btn:-rotate-45"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(ServiceCard);
