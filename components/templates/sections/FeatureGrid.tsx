/**
 * [SECTION COMPONENT]: FEATURE_GRID_ENGINE v17.0.1 (STABILIZED)
 * [STRATEGY]: Intelligence Module Grid | Optical Balance | Performance First
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

/* --- 1. Infrastructure & Types --- */
export interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: string;
  readonly technicalDetail?: string;
  readonly category?: string;
}

interface FeatureGridProps {
  readonly items: readonly FeatureItem[];
  readonly heading?: string;
  readonly subheading?: string;
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

/**
 * @component FeatureGrid
 * @description หน่วยประมวลผลโหนดข้อมูล (Grid System) ที่จูนมาเพื่อสร้าง Authority ให้กับเนื้อหา
 * เน้นการแสดงผลแบบ Card ที่มีมิติ (Depth) และ Interaction ที่ตอบสนองต่อผู้ใช้
 */
const FeatureGrid = ({
  items,
  heading = "System Capabilities",
  subheading = "สถาปัตยกรรมที่ออกแบบมาเพื่อขยายขีดจำกัดทางธุรกิจด้วยมาตรฐานวิศวกรรมระดับสูง",
  columns = 3,
  className,
}: FeatureGridProps) => {
  // [GRID LOGIC]: Adaptive Grid Configuration
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={cn("bg-surface-main relative overflow-hidden py-24 md:py-32", className)}>
      {/* 01. AMBIENT PHYSICS: ระบบเลเยอร์บรรยากาศ */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0" />
        <div className="ambient-aura absolute top-0 right-1/4 h-[600px] w-[600px] opacity-20 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. SECTION NARRATIVE: การสื่อสารวิสัยทัศน์ */}
        <header className="mb-20 max-w-4xl space-y-6 md:mb-32 md:space-y-8">
          <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <div className="relative flex h-2 w-2">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"></span>
              <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--color-brand-primary)]"></span>
            </div>
            Core_Architecture.v17
          </div>

          <h2 className="text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="border-brand-primary border-l-4 pl-6 md:pl-10">
            <p className="max-w-2xl text-lg leading-relaxed font-medium text-gray-400 italic opacity-80 md:text-2xl">
              “{subheading}”
            </p>
          </div>
        </header>

        {/* 03. INTELLIGENCE NODES: ระบบแสดงผลแบบรายโหนด */}
        <div className={cn("grid gap-8 md:gap-12", gridCols)}>
          {items.map((feature, index) => (
            <motion.div
              key={`${feature.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
              className={cn(
                "group relative flex h-full flex-col rounded-[2.5rem] p-8 transition-all duration-700 md:p-10",
                "border border-white/5 bg-[#0A0A0A] shadow-lg",
                "hover:border-brand-primary/40 hover:-translate-y-2 hover:bg-white/[0.02] hover:shadow-2xl",
              )}
            >
              {/* Node Identifier */}
              <div className="group-hover:text-brand-primary/40 absolute top-8 right-8 font-mono text-[10px] font-black tracking-[0.4em] text-gray-700 transition-colors">
                NODE_0{index + 1}
              </div>

              {/* Icon Logic */}
              <div className="text-brand-primary group-hover:bg-brand-primary relative mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-black group-hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
                <IconRenderer
                  name={feature.icon}
                  size={28}
                  strokeWidth={2}
                  className="relative z-10"
                />
              </div>

              {/* Information Hub */}
              <div className="flex flex-grow flex-col space-y-6">
                <div className="space-y-2">
                  {feature.category && (
                    <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-60">
                      // {feature.category}
                    </span>
                  )}
                  <h3 className="group-hover:text-brand-primary text-2xl font-black tracking-tighter text-white uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-base leading-relaxed font-medium text-gray-400 italic opacity-70 transition-opacity group-hover:opacity-100">
                  “{feature.description}”
                </p>

                {/* Technical Spec Signal */}
                {feature.technicalDetail && (
                  <div className="mt-auto flex items-center gap-4 border-t border-white/5 pt-6">
                    <div className="bg-brand-primary h-1.5 w-1.5 rounded-full transition-all group-hover:shadow-[0_0_10px_var(--color-brand-primary)]" />
                    <span className="font-mono text-[9px] font-black tracking-[0.3em] text-gray-600 uppercase transition-colors group-hover:text-white">
                      Spec: {feature.technicalDetail}
                    </span>
                  </div>
                )}
              </div>

              {/* Subtle Aura Focus */}
              <div className="bg-brand-primary/20 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureGrid);
