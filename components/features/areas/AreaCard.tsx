/**
 * [FEATURE COMPONENT]: AREA_CARD_NODE v17.0.2 (TYPE_SAFE)
 * [STRATEGY]: Vivid Visual Presence | High-Contrast Typography | Neural Interaction
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { AreaNode } from "@/types"; // ✅ Import จาก Global Types เพื่อความถูกต้อง

interface AreaCardProps {
  // ใช้ Type AreaNode จาก Global Types ซึ่งรองรับ readonly array แล้ว
  readonly data: AreaNode;
  readonly index?: number;
  readonly className?: string;
}

/**
 * @component AreaCard
 * @description โหนดแสดงผลพื้นที่ให้บริการ ออกแบบมาเพื่อสร้าง Local Authority ระดับพรีเมียม
 */
const AreaCard = ({ data, index = 0, className }: AreaCardProps) => {
  // Defensive Check: แปลง districts ที่อาจเป็น undefined ให้เป็น array ว่าง
  // ใช้ spread operator [...] เพื่อแปลง readonly array เป็น mutable array สำหรับ .slice() และ .map()
  const districts = data.districts ? [...data.districts] : [];

  // ใช้ name หรือ province เป็นชื่อหลัก (Fallback logic)
  const displayTitle = data.name || data.province;

  return (
    <Link
      href={`/areas/${data.slug}`}
      className={cn(
        "group relative flex min-h-[480px] flex-col overflow-hidden rounded-[2.5rem] transition-all duration-500 ease-out",
        // Base Style
        "border border-white/10 bg-[#050505]",
        // Hover State
        "hover:border-brand-primary/50 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {/* 01. ATMOSPHERIC IMAGE LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none">
        {/* ใช้ heroImage ถ้ามี หรือ fallback ไปที่รูป default ตาม slug */}
        <div className="relative h-full w-full">
          <Image
            src={data.heroImage || `/images/areas/${data.slug}.webp`}
            alt={`รับทำเว็บไซต์ ${displayTitle} SEO คุณภาพสูง`}
            fill
            className="object-cover opacity-60 transition-transform duration-[1.2s] group-hover:scale-110 group-hover:opacity-40"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 4} // Load 4 รูปแรกทันทีเพื่อ LCP ที่ดี
          />

          {/* Neural Scrim: ไล่เฉดสีดำเพื่อให้ข้อความอ่านง่าย */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/20" />

          {/* Grid Texture Overlay */}
          <div className="absolute inset-0 z-20 bg-[url('/grid-pattern.svg')] opacity-10 mix-blend-overlay" />
        </div>
      </div>

      {/* 02. CONTENT ARCHITECTURE */}
      <div className="relative z-20 flex h-full flex-col justify-between p-8">
        {/* Top Section: Marker Node */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="text-brand-primary group-hover:bg-brand-primary flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 group-hover:rotate-12 group-hover:text-black group-hover:shadow-[0_0_20px_var(--color-brand-primary)]">
              <IconRenderer name="MapPin" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-brand-primary/80 font-mono text-[9px] font-black tracking-[0.2em] uppercase">
                LOC_{(index + 1).toString().padStart(3, "0")}
              </span>
              <span className="font-mono text-[8px] font-bold tracking-widest text-white/40 uppercase">
                Active_Node
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section: Content Narrative */}
        <div className="space-y-6">
          {/* Title Area */}
          <div className="space-y-2">
            <h3 className="group-hover:text-brand-primary text-4xl font-black tracking-tighter text-white uppercase transition-colors duration-300 md:text-5xl">
              {displayTitle}
            </h3>
            <div className="bg-brand-primary h-1 w-12 rounded-full transition-all duration-500 group-hover:w-full" />
          </div>

          {/* Description */}
          <p className="line-clamp-2 text-sm leading-relaxed font-medium text-gray-400 italic">
            {data.description || `ยกระดับธุรกิจใน ${displayTitle} ด้วยเว็บไซต์และ SEO มาตรฐานสากล`}
          </p>

          {/* District Tags */}
          {districts.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {districts.slice(0, 3).map((district) => (
                <span
                  key={district}
                  className="group-hover:border-brand-primary/30 group-hover:bg-brand-primary/10 group-hover:text-brand-primary rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[9px] font-bold tracking-wider text-gray-300 uppercase transition-colors"
                >
                  {district}
                </span>
              ))}
              {districts.length > 3 && (
                <span className="text-brand-primary flex items-center px-2 font-mono text-[9px] font-bold tracking-widest uppercase">
                  +{districts.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Call to Action Indicator */}
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <span className="group-hover:text-brand-primary font-mono text-[9px] font-bold tracking-[0.3em] text-white/50 uppercase transition-colors">
              Explore_Area
            </span>
            <IconRenderer
              name="ArrowRight"
              size={16}
              className="group-hover:text-brand-primary text-white/50 transition-all duration-300 group-hover:translate-x-2"
            />
          </div>
        </div>
      </div>

      {/* Atmospheric Glow Effect */}
      <div className="bg-brand-primary/20 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full opacity-0 mix-blend-screen blur-[80px] transition-opacity duration-700 group-hover:opacity-100" />
    </Link>
  );
};

export default memo(AreaCard);
