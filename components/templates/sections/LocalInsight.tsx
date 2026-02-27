import React from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface LocalInsightProps {
  insight: string;
  painPoints: string[];
  marketSaturation?: number;
}

export const LocalInsight = ({ insight, painPoints, marketSaturation }: LocalInsightProps) => {
  const saturation = marketSaturation || 45;
  const competitorIndex = (saturation * 1.2).toFixed(1);
  const opportunityScore = (100 - saturation * 0.8).toFixed(1);

  return (
    <section className="relative overflow-hidden">
      {/* 01. ANALYTIC INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="bg-brand-primary/5 absolute top-0 right-0 h-full w-1/2 translate-x-1/2 -skew-x-12 opacity-40" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-24">
          {/* --- INTELLIGENCE_NODE: Primary Insight --- */}
          <div className="space-y-12 lg:col-span-7">
            <div className="space-y-8">
              <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-md">
                <div className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full shadow-[0_0_8px_var(--brand-primary)]" />
                <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                  Market_Intelligence.v18
                </span>
              </div>

              <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl">
                Regional <br /> <span className="text-brand-primary">Insight.</span>
              </h2>

              <div className="border-brand-primary/40 border-l-[6px] pl-8 md:pl-12">
                <p className="text-text-primary text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                  “{insight}”
                </p>
              </div>
            </div>

            {/* Matrix Display Units */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                { label: "Digital_Saturation", val: `${saturation}%`, color: "text-brand-primary" },
                { label: "Competition_Index", val: competitorIndex, color: "text-text-primary" },
                {
                  label: "Opportunity_Node",
                  val: `${opportunityScore}`,
                  color: "text-emerald-500",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-border/10 bg-surface-card rounded-card hover:border-brand-primary/30 relative overflow-hidden border p-6 transition-all"
                >
                  <span className="text-text-muted mb-4 block font-mono text-[8px] font-black tracking-widest uppercase opacity-40">
                    // {item.label}
                  </span>
                  <div className="flex items-end gap-2">
                    <span className={cn("text-4xl font-black tracking-tighter italic", item.color)}>
                      {item.val}
                    </span>
                    {i === 2 && <span className="mb-1 text-xs font-black opacity-20">/100</span>}
                  </div>
                  <div className="bg-border/5 absolute bottom-0 left-0 h-1 w-full overflow-hidden">
                    <div className="bg-brand-primary animate-shimmer h-full w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- DIAGNOSTIC_NODE: Pain Points --- */}
          <div className="lg:col-span-5">
            <div className="border-border/10 bg-surface-card rounded-section shadow-pro-xl relative overflow-hidden border p-10 md:p-16">
              <span className="text-text-muted mb-12 block font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-40">
                Target_Pain_Points
              </span>

              <div className="space-y-10">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="group flex items-start gap-6">
                    <div className="bg-brand-primary/10 border-brand-primary/20 text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all group-hover:rotate-12 group-hover:text-white">
                      <IconRenderer name="AlertCircle" size={20} />
                    </div>
                    <p className="text-text-secondary group-hover:text-text-primary text-lg leading-relaxed font-medium italic opacity-80 transition-colors">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Secure Signature */}
              <div className="border-border/5 mt-16 border-t pt-10 text-center">
                <span className="text-text-muted font-mono text-[8px] font-bold tracking-widest uppercase opacity-20">
                  Audit_Verified_by_AEMZA_MACKS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
