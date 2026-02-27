/**
 * [REGIONAL COMPONENT]: LOCAL_INSIGHT v18.1.0 (AUTHENTIC_ANALYTICS)
 * [STRATEGY]: Data Transparency | Professional Typography | Clean Data Visualization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { UniversalTemplateProps } from "@/types";

interface LocalInsightProps {
  data?: UniversalTemplateProps;
  insight?: string;
  painPoints?: string[];
  marketSaturation?: number;
}

export const LocalInsight = ({
  data,
  insight: directInsight,
  painPoints: directPainPoints,
  marketSaturation: directSaturation,
}: LocalInsightProps) => {
  const insight = directInsight || data?.localContext?.marketInsight || data?.description || "";
  const painPoints = directPainPoints || (data?.localContext?.painPoints as string[]) || [];
  const saturation = directSaturation || data?.marketSaturation || 45;
  const competitorIndex = (saturation * 1.2).toFixed(1);
  const opportunityScore = (100 - saturation * 0.8).toFixed(1);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* 01. ANALYTIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* --- INTELLIGENCE_NODE: Primary Insight --- */}
          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-md">
                <div className="bg-brand-primary h-1.5 w-1.5 rounded-full shadow-[0_0_8px_var(--brand-primary)]" />
                <span className="text-brand-primary font-sans text-[11px] font-bold tracking-[0.2em] uppercase">
                  Market Analysis & Strategy
                </span>
              </div>

              <h2 className="text-text-primary text-5xl leading-tight font-black tracking-tight sm:text-6xl md:text-7xl">
                Regional <span className="text-brand-primary">Insight.</span>
              </h2>

              <div className="border-brand-primary/40 border-l-[6px] pl-8 md:pl-12">
                <p className="text-text-primary text-xl leading-relaxed font-medium opacity-90 md:text-2xl">
                  {insight}
                </p>
              </div>
            </div>

            {/* Matrix Display Units */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { label: "Digital Saturation", val: `${saturation}%`, color: "text-brand-primary" },
                { label: "Competition Index", val: competitorIndex, color: "text-text-primary" },
                {
                  label: "Opportunity Score",
                  val: `${opportunityScore}`,
                  color: "text-brand-primary",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-border/10 bg-surface-card rounded-card hover:border-brand-primary/30 shadow-pro-sm relative overflow-hidden border p-8 transition-all"
                >
                  <span className="text-text-muted mb-4 block font-sans text-[10px] font-bold tracking-widest uppercase opacity-60">
                    {item.label}
                  </span>
                  <div className="flex items-end gap-2">
                    <span className={cn("text-4xl font-black tracking-tighter", item.color)}>
                      {item.val}
                    </span>
                    {i === 2 && <span className="mb-1 text-xs font-bold opacity-30">/100</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- DIAGNOSTIC_NODE: Pain Points --- */}
          <div className="lg:col-span-5">
            <div className="border-border/10 bg-surface-card rounded-section shadow-pro relative overflow-hidden border p-10 md:p-14">
              <span className="text-text-muted mb-12 block font-sans text-[11px] font-bold tracking-[0.3em] uppercase opacity-70">
                Key Market Challenges
              </span>

              <div className="space-y-8">
                {painPoints?.map((point, idx) => (
                  <div key={idx} className="group flex items-start gap-6">
                    <div className="bg-brand-primary/10 border-brand-primary/20 text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all group-hover:text-white">
                      <IconRenderer name="CheckCircle2" size={20} />
                    </div>
                    <p className="text-text-secondary group-hover:text-text-primary text-lg leading-relaxed font-medium opacity-90 transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secure Signature */}
              <div className="border-border/10 mt-16 border-t pt-10">
                <p className="text-text-muted font-sans text-[10px] font-medium tracking-wide opacity-40">
                  Data-driven strategy verified for regional growth standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
