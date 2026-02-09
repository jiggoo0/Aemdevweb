/**
 * [SECTION COMPONENT]: FEATURE_GRID_ENGINE v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Intelligence Module Grid | Theme-Aware Depth | GPU Accelerated
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

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
  readonly heading?: string | React.ReactNode;
  readonly subheading?: string | React.ReactNode;
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

/**
 * @component FeatureGrid
 * @description หน่วยประมวลผลโหนดข้อมูล (Grid System) ที่จูนมาเพื่อสร้าง Authority
 * [STABILIZED]: รองรับการสลับโหมด Dark/Light และปรับปรุงระบบ Visual Depth
 */
const FeatureGrid = ({
  items,
  heading = "System Capabilities",
  subheading = "สถาปัตยกรรมที่ออกแบบมาเพื่อขยายขีดจำกัดทางธุรกิจด้วยมาตรฐานวิศวกรรมระดับสูง",
  columns = 3,
  className,
}: FeatureGridProps) => {
  
  // Adaptive Grid Configuration
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={cn("bg-surface-main relative overflow-hidden py-24 md:py-32 transition-colors duration-500", className)}>
      {/* 01. AMBIENT PHYSICS: ระบบเลเยอร์บรรยากาศ */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="ambient-aura absolute top-0 right-1/4 h-[600px] w-[600px] opacity-[var(--ambient-opacity)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. SECTION NARRATIVE: การสื่อสารวิสัยทัศน์ Specialist */}
        <header className="mb-20 max-w-4xl space-y-8 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase backdrop-blur-md">
            <div className="relative flex h-2 w-2">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-40"></span>
              <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-glow"></span>
            </div>
            Core_Architecture.v{SITE_CONFIG.project.version}
          </div>

          <h2 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="border-brand-primary border-l-4 pl-6 md:pl-10">
            <p className="text-text-secondary max-w-2xl text-lg leading-relaxed font-medium italic opacity-90 md:text-2xl">
              {typeof subheading === 'string' ? `“${subheading}”` : subheading}
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
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className={cn(
                "group relative flex h-full flex-col rounded-[2.5rem] p-8 md:p-10 transition-all duration-500",
                "border border-border bg-surface-card shadow-lg hover:shadow-glow hover:bg-surface-offset",
                "hover:border-brand-primary/40 hover:-translate-y-2 will-change-transform"
              )}
            >
              {/* Node Identifier */}
              <div className="text-text-muted group-hover:text-brand-primary/40 absolute top-8 right-8 font-mono text-[10px] font-black tracking-[0.4em] transition-colors">
                NODE_0{index + 1}
              </div>

              {/* Icon Interface: Tactile Physics */}
              <div className="text-brand-primary group-hover:bg-brand-primary relative mb-8 flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-surface-offset border border-border transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:text-surface-main group-hover:shadow-glow">
                <IconRenderer name={feature.icon} size={28} strokeWidth={2} className="relative z-10" />
              </div>

              {/* Information Hub */}
              <div className="flex flex-grow flex-col space-y-6">
                <div className="space-y-2">
                  {feature.category && (
                    <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-60">
                      // {feature.category}
                    </span>
                  )}
                  <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tighter uppercase italic transition-colors">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-text-secondary text-base leading-relaxed font-medium italic transition-opacity group-hover:text-text-primary">
                  {feature.description}
                </p>

                {/* Technical Spec Signal */}
                {feature.technicalDetail && (
                  <div className="border-border mt-auto flex items-center gap-4 border-t pt-6">
                    <div className="bg-brand-primary h-1.5 w-1.5 rounded-full transition-all group-hover:shadow-glow" />
                    <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.3em] uppercase transition-colors group-hover:text-text-primary">
                      Spec: {feature.technicalDetail}
                    </span>
                  </div>
                )}
              </div>

              {/* Subtle Aura Focus */}
              <div className="bg-brand-primary/10 pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 opacity-0 blur-[100px] transition-opacity duration-1000 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureGrid);
