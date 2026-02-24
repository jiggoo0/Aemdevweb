/**
 * [SECTION COMPONENT]: FEATURE_GRID_ENGINE v17.9.103 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | IntersectionObserver | Zero-Framer
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

interface FeatureItem {
  readonly title: string;
  readonly description: string;
  readonly icon: IconName;
  readonly technicalDetail?: string;
}

interface FeatureGridProps {
  readonly items: readonly FeatureItem[];
  readonly heading?: React.ReactNode;
  readonly subheading?: string;
  readonly columns?: 2 | 3 | 4;
  readonly className?: string;
}

const FeatureGridEngine = ({
  items,
  heading = "System Capabilities",
  subheading,
  columns = 3,
  className,
}: FeatureGridProps) => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // [OPTIMIZATION]: Grid Layout Matrix แบบ Responsive
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <section ref={sectionRef} className={cn("relative overflow-hidden py-24 md:py-36", className)}>
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--brand-primary)_0%,transparent_70%)] opacity-[0.04] blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* LAYER 01: HEADER MATRIX */}
        <header className="mb-24 max-w-5xl space-y-10 md:mb-32">
          <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-md">
            <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
              Engineering_Matrix.v{SITE_CONFIG.project.version}
            </span>
          </div>

          <h2 className="text-text-primary text-5xl leading-relaxed font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            {heading}
          </h2>

          {subheading && (
            <div className="border-brand-primary/40 border-l-[6px] pl-8 md:pl-16">
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                “{subheading}”
              </p>
            </div>
          )}
        </header>

        {/* LAYER 02: GRID SYSTEM (UI Render Node) */}
        <div className={cn("grid gap-8 lg:gap-10", gridCols)}>
          {items.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className={cn(
                "group rounded-section relative flex flex-col justify-between overflow-hidden border transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                "bg-surface-card border-border shadow-pro-sm p-10 md:p-12",
                "hover:border-brand-primary/40 hover:shadow-glow-sm hover:-translate-y-2",
                "transform-gpu will-change-transform",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="from-brand-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* ICON DYNAMIC RENDERER */}
                <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow border-border rounded-card mb-10 flex h-20 w-20 items-center justify-center border transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12">
                  <IconRenderer name={feature.icon} size={32} strokeWidth={2} />
                </div>

                <div className="space-y-5">
                  <h3 className="text-text-primary group-hover:text-brand-primary text-3xl leading-relaxed font-black tracking-tighter uppercase italic transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-75 transition-opacity duration-500 group-hover:opacity-100">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* TECHNICAL NODE BOTTOM BAR */}
              {feature.technicalDetail && (
                <div className="border-border text-text-muted relative z-10 mt-12 flex items-center justify-between border-t pt-8">
                  <span className="group-hover:text-brand-primary font-mono text-[9px] font-black tracking-[0.2em] uppercase opacity-50 transition-colors group-hover:opacity-100">
                    Spec: {feature.technicalDetail}
                  </span>
                  <div className="bg-border group-hover:bg-brand-primary h-1.5 w-1.5 rounded-full shadow-sm transition-colors duration-500" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FeatureGridEngine);
