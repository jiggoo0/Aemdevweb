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
  marketโอกาสเติบโต?: number;
}

export const LocalInsight = ({
  data,
  insight: directInsight,
  painPoints: directPainPoints,
  marketโอกาสเติบโต: directโอกาสเติบโต,
}: LocalInsightProps) => {
  const insight = directInsight || data?.localContext?.marketInsight || data?.description || "";
  const painPoints = directPainPoints || (data?.localContext?.painPoints as string[]) || [];
  const saturation = directโอกาสเติบโต || data?.marketโอกาสเติบโต || 45;
  const competitorIndex = (saturation * 1.2).toFixed(1);
  const opportunityScore = (100 - saturation * 0.8).toFixed(1);

  return (
    <section className="relative overflow-hidden bg-[var(--surface-main)] py-24 md:py-32">
      {/* 01. ANALYTIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          {/* --- INTELLIGENCE_NODE: Primary Insight --- */}
          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-4 rounded-full border border-[var(--color-brand-primary)]/30 bg-[var(--color-brand-primary)]/10 px-6 py-2.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-sm" />
                <span className="font-sans text-[11px] font-bold tracking-[0.2em] text-[var(--color-brand-primary)] uppercase">
                  Market Analysis & Strategy
                </span>
              </div>

              <h2 className="text-5xl leading-tight font-black tracking-tight text-[var(--text-primary)] sm:text-6xl md:text-7xl">
                Regional <span className="text-[var(--color-brand-primary)]">Insight.</span>
              </h2>

              <div className="border-l-[6px] border-[var(--color-brand-primary)] pl-8 md:pl-12">
                <p className="text-xl leading-relaxed font-medium text-[var(--text-primary)] md:text-2xl">
                  {insight}
                </p>
              </div>
            </div>

            {/* Matrix Display Units */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  label: "Digital โอกาสเติบโต",
                  val: `${saturation}%`,
                  color: "text-[var(--color-brand-primary)]",
                },
                {
                  label: "Competition Index",
                  val: competitorIndex,
                  color: "text-[var(--text-primary)]",
                },
                {
                  label: "Opportunity Score",
                  val: `${opportunityScore}`,
                  color: "text-[var(--color-brand-primary)]",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-card shadow-pro-sm relative overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] p-8 transition-all hover:border-[var(--color-brand-primary)]/50"
                >
                  <span className="mb-4 block font-sans text-[10px] font-bold tracking-widest text-[var(--text-muted)] uppercase">
                    {item.label}
                  </span>
                  <div className="flex items-end gap-2">
                    <span className={cn("text-4xl font-black tracking-tighter", item.color)}>
                      {item.val}
                    </span>
                    {i === 2 && (
                      <span className="mb-1 text-xs font-bold text-[var(--text-muted)] opacity-30">
                        /100
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- DIAGNOSTIC_NODE: Pain Points --- */}
          <div className="lg:col-span-5">
            <div className="rounded-section shadow-pro-xl relative overflow-hidden border border-[var(--border)] bg-[var(--surface-card)] p-10 md:p-14">
              <span className="mb-12 block font-sans text-[11px] font-bold tracking-[0.3em] text-[var(--text-muted)] uppercase">
                Key Market Challenges
              </span>

              <div className="space-y-8">
                {painPoints?.map((point, idx) => (
                  <div key={idx} className="group flex items-start gap-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-brand-primary)]/20 bg-[var(--color-brand-primary)]/10 text-[var(--color-brand-primary)] transition-all group-hover:bg-[var(--color-brand-primary)] group-hover:text-white">
                      <IconRenderer name="CheckCircle2" size={20} />
                    </div>
                    <p className="text-lg leading-relaxed font-medium text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secure Signature */}
              <div className="mt-16 border-t border-[var(--border)] pt-10">
                <p className="font-sans text-[10px] font-medium tracking-wide text-[var(--text-muted)] opacity-50">
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
