/**
 * [SECTION COMPONENT]: FEATURE_GRID_ENGINE v17.9.0 (STABILIZED)
 * [STRATEGY]: Technical Authority | Responsive Matrix | GPU Optimized
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import type { ServiceFeature, IconName } from "@/types";

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
  // [OPTIMIZATION]: Improved Grid Logic for better responsiveness
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section className={cn("relative py-24 md:py-36", className)}>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <header className="mb-24 max-w-5xl space-y-12 md:mb-36">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black uppercase">
            Engineering_Matrix.v{SITE_CONFIG.project.version}
          </div>
          <h2 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl">
            {heading}
          </h2>
          {subheading && (
            <div className="border-brand-primary border-l-4 pl-10 md:pl-16">
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                “{subheading}”
              </p>
            </div>
          )}
        </header>

        <div className={cn("grid gap-10 lg:gap-14", gridCols)}>
          {items.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              className="group bg-surface-card border-border hover:border-brand-primary/40 hover:shadow-glow-sm relative flex flex-col rounded-[3.5rem] border p-12 transition-all duration-500 hover:-translate-y-3"
            >
              <div className="text-brand-primary group-hover:bg-brand-primary bg-surface-offset group-hover:text-surface-main group-hover:shadow-glow mb-12 flex h-20 w-20 items-center justify-center rounded-[2rem] transition-all duration-500 group-hover:-rotate-6">
                <IconRenderer name={feature.icon as IconName} size={36} />
              </div>
              <div className="flex-grow space-y-5">
                <h3 className="text-text-primary group-hover:text-brand-primary text-3xl leading-none font-black tracking-tighter uppercase italic transition-colors">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-75 transition-opacity group-hover:opacity-100">
                  {feature.description}
                </p>
              </div>
              {feature.technicalDetail && (
                <div className="border-border text-text-muted mt-10 border-t pt-8 font-mono text-[10px] font-black tracking-widest uppercase opacity-40">
                  Registry: {feature.technicalDetail}
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
