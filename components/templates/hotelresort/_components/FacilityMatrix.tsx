"use client";

import React from "react";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import type { ServiceFeature } from "@/types";

interface FacilityMatrixProps {
  /** รายการสิ่งอำนวยความสะดวกที่ดึงมาจาก Service Registry */
  readonly items: readonly ServiceFeature[];
}

/**
 * @component FacilityMatrix
 * @description แสดงผังสิ่งอำนวยความสะดวกในรูปแบบ Grid อุตสาหกรรม
 * เน้นความชัดเจนของ Infrastructure และสถานะระบบ
 */
export const FacilityMatrix = ({ items }: FacilityMatrixProps) => {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        {/* --- Grid Container: Border-aware layout --- */}
        <div className="grid grid-cols-2 gap-[var(--border-width)] overflow-hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--foreground)]/10 shadow-sm md:grid-cols-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center space-y-6 bg-[var(--surface-main)] p-10 text-center transition-all duration-300 hover:bg-[var(--brand-primary)]/5"
            >
              {/* Icon Node: High-visibility with hover animation */}
              <div className="text-[var(--brand-primary)] transition-transform duration-500 group-hover:scale-110">
                <IconRenderer name={item.icon as IconName} size={40} strokeWidth={1.5} />
              </div>

              {/* Data Labels */}
              <div className="space-y-2">
                <h4 className="text-sm font-black tracking-widest text-[var(--foreground)] uppercase italic">
                  {item.title}
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-1 w-1 animate-pulse rounded-full bg-green-500" />
                  <p className="font-mono text-[9px] font-bold tracking-tighter uppercase opacity-40 transition-opacity group-hover:opacity-80">
                    System_Active
                  </p>
                </div>
              </div>

              {/* Decorative Corner (Optional: Blueprint Vibe) */}
              <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-10">
                <IconRenderer name="Target" size={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
