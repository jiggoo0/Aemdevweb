/**
 * [SECTION COMPONENT]: FEATURE_GRID_ENGINE v17.5.5 (STABILIZED)
 * [STRATEGY]: Intelligence Module Grid | Technical Authority | GPU Optimized
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import type { ServiceFeature } from "@/types"; // ใช้ Type กลางของระบบ

// [UPDATE]: ใช้ ServiceFeature แทน FeatureItem เพื่อลดความซ้ำซ้อน
// แต่ยังคงรองรับ technicalDetail แบบ Optional extension
interface FeatureGridProps {
  readonly items: readonly (ServiceFeature & { technicalDetail?: string })[];
  readonly heading?: React.ReactNode;
  readonly subheading?: string;
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

const FeatureGrid = ({
  items,
  heading = "System Capabilities",
  subheading,
  columns = 3,
  className,
}: FeatureGridProps) => {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={cn("relative py-24 md:py-32", className)}>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* HEADER ARCHITECTURE */}
        <header className="mb-24 max-w-4xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            Core_Architecture.v{SITE_CONFIG.project.version}
          </div>
          <h2 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            {heading}
          </h2>
          {subheading && (
            <div className="border-brand-primary border-l-4 pl-8 md:pl-12">
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-80 md:text-2xl">
                “{subheading}”
              </p>
            </div>
          )}
        </header>

        {/* FEATURE NODES */}
        <div className={cn("grid gap-8 lg:gap-12", gridCols)}>
          {items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-surface-card border-border hover:border-brand-primary/40 hover:shadow-glow-sm relative flex flex-col rounded-[3rem] border p-10 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="text-brand-primary group-hover:bg-brand-primary bg-surface-offset group-hover:text-surface-main group-hover:shadow-glow mb-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:rotate-6">
                <IconRenderer name={feature.icon} size={30} />
              </div>
              <div className="space-y-4">
                <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tight uppercase italic transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-base leading-relaxed font-medium italic opacity-70">
                  {feature.description}
                </p>
              </div>
              {feature.technicalDetail && (
                <div className="border-border text-text-muted mt-8 border-t pt-6 font-mono text-[9px] font-black tracking-widest uppercase opacity-40">
                  Spec: {feature.technicalDetail}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureGrid);
