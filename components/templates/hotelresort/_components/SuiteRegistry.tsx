"use client";

import React from "react";
import type { CatalogItem } from "@/types";
import { cn } from "@/lib/utils";

interface SuiteRegistryProps {
  /** รายการยูนิตที่พักที่ดึงมาจาก Registry ระบบ */
  readonly items: readonly CatalogItem[];
}

/**
 * @component SuiteRegistry
 * @description ทะเบียนยูนิตที่พัก แสดงผลในรูปแบบ Node ข้อมูลเชิงเทคนิค
 * รองรับระบบ Identity Switcher (เหลี่ยม/มน) และการแสดงผลเชิงอุตสาหกรรม
 */
export const SuiteRegistry = ({ items }: SuiteRegistryProps) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* --- Header Section --- */}
        <div className="mb-16 space-y-2">
          <p className="font-mono text-xs font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase italic">
            // Unit_Registry_v18
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl leading-tight font-black uppercase italic md:text-5xl">
            เลือกพื้นที่พักผ่อน <br /> ตามความต้องการ
          </h2>
        </div>

        {/* --- Unit Grid --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {items.map((room, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative overflow-hidden bg-[var(--surface-card)] transition-all duration-500",
                "border-[var(--border-width)] border-[var(--foreground)]/10 hover:border-[var(--brand-primary)]/50",
                "rounded-[var(--radius)] shadow-sm hover:shadow-xl",
              )}
            >
              {/* Media Node: Placeholder for Room Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                {/* Technical Badge Overlay */}
                <div className="absolute top-6 left-6 z-10 rounded-[calc(var(--radius)*0.5)] border border-white/10 bg-black/40 p-3 font-mono text-[10px] tracking-widest text-white uppercase backdrop-blur-md">
                  SQM: {idx === 0 ? "55" : "85"} | MAX_GUESTS: 2
                </div>

                {/* [IMAGE_TIP]: หากมี URL รูปภาพ สามารถเปลี่ยน div นี้เป็น <Image /> ได้ทันที */}
                <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                {/* Blueprint Pattern Decor */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />
              </div>

              {/* Data Node: Content & Actions */}
              <div className="space-y-6 p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="font-mono text-[9px] tracking-tighter uppercase italic opacity-40">
                      // Unit_Identity
                    </p>
                    <h3 className="text-3xl leading-none font-black uppercase italic">
                      {room.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[9px] tracking-tighter uppercase italic opacity-40">
                      // Pricing
                    </p>
                    <p className="text-xl font-black text-[var(--brand-primary)]">
                      {room.price}{" "}
                      <span className="text-[10px] uppercase opacity-60">{room.unit}</span>
                    </p>
                  </div>
                </div>

                <p className="line-clamp-2 leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
                  {room.description}
                </p>

                {/* Primary CTA */}
                <button
                  className={cn(
                    "w-full py-4 text-[10px] font-black tracking-[0.2em] uppercase transition-all duration-300",
                    "border-[var(--border-width)] border-[var(--brand-primary)]/30 text-[var(--brand-primary)]",
                    "hover:shadow-glow-sm rounded-[var(--radius)] hover:bg-[var(--brand-primary)] hover:text-white",
                  )}
                >
                  Check_Availability
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
