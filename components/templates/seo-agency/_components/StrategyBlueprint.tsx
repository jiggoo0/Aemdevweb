"use client";

import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import type { ServiceFeature } from "@/types";
import { cn } from "@/lib/utils";

interface StrategyBlueprintProps {
  /** รายการกลยุทธ์ที่ดึงมาจาก Service Feature Registry */
  readonly items: readonly ServiceFeature[];
}

/**
 * @component StrategyBlueprint
 * @description แสดงผังโครงสร้างการทำงานในรูปแบบวิศวกรรม (Engineering Blueprint)
 * เน้นการนำเสนอ SEO ในรูปแบบของระบบโครงสร้าง (Architecture) มากกว่างานบริการทั่วไป
 */
export const StrategyBlueprint = ({ items }: StrategyBlueprintProps) => {
  return (
    <section className="bg-[var(--brand-primary)]/5 py-32">
      <div className="container mx-auto px-4">
        {/* --- Header Section: Technical Identification --- */}
        <div className="mb-20 space-y-4 text-center">
          <p className="font-mono text-xs font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase italic">
            // Strategic_Framework_v18
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl leading-tight font-black uppercase italic md:text-6xl">
            โครงสร้างการทำ SEO <br /> แบบ 360 องศา
          </h2>
        </div>

        {/* --- Strategy Grid: Node Deployment --- */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative overflow-hidden transition-all duration-500",
                "bg-[var(--surface-main)] p-10 shadow-sm",
                "border-[var(--border-width)] border-[var(--foreground)]/10 hover:border-[var(--brand-primary)]",
                "rounded-[var(--radius)]",
              )}
            >
              {/* Background Index: หมายเลขลำดับแบบจาง (Technical Metadata) */}
              <div className="absolute top-6 right-6 font-mono text-5xl font-black italic opacity-5 transition-opacity group-hover:opacity-10">
                0{idx + 1}
              </div>

              <div className="relative z-10 space-y-6">
                {/* Icon Node: High Contrast Branding */}
                <div className="text-[var(--brand-primary)] transition-transform duration-500 group-hover:scale-110">
                  <IconRenderer name={item.icon as IconName} size={48} strokeWidth={1.5} />
                </div>

                {/* Content Node */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-black tracking-tight uppercase italic">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner: Blueprint Vibe */}
              <div
                className="absolute right-0 bottom-0 h-8 w-8 opacity-5 transition-opacity group-hover:opacity-20"
                style={{
                  backgroundImage: `radial-gradient(var(--brand-primary) 2px, transparent 0)`,
                  backgroundSize: "8px 8px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
