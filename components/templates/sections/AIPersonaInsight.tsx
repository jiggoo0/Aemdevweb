/**
 * [FEATURE]: AI_PERSONA_INSIGHT v18.1.0 (GEO_OPTIMIZED)
 * [STRATEGY]: AI-Answer Simulation | Generative Engine Visibility | Zero-JS Animation
 */

"use client";

import React, { memo } from "react";
import IconRenderer from "@/components/ui/IconRenderer";

interface AIPersonaInsightProps {
  readonly data?: {
    summary: string;
    topBenefits: string[];
    expertRef: string;
  };
}

export const AIPersonaInsight = memo(({ data }: AIPersonaInsightProps) => {
  if (!data) return null;

  return (
    <div className="group border-brand-primary/20 bg-brand-primary/5 rounded-section hover:border-brand-primary/40 relative overflow-hidden border p-8 backdrop-blur-xl transition-all duration-500 md:p-12">
      {/* 01. AI AMBIENT SIGNAL */}
      <div className="bg-brand-primary/10 animate-aura-1 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-[100px]" />
      <div className="animate-aura-2 absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="relative z-10 space-y-10">
        {/* Header Node */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow flex h-12 w-12 items-center justify-center rounded-2xl transition-transform group-hover:rotate-12">
              <IconRenderer name="Cpu" size={24} className="text-white" />
            </div>
            <div>
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase italic">
                Answer_Engine_Simulation
              </span>
              <h3 className="text-text-primary text-2xl font-black tracking-tighter uppercase italic">
                AI_Insight_Matrix.v18
              </h3>
            </div>
          </div>
          <div className="border-brand-primary/20 flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="font-mono text-[8px] font-bold tracking-widest text-emerald-500 uppercase">
              GEO_Optimized
            </span>
          </div>
        </div>

        {/* AI Generated Answer Box */}
        <div className="rounded-card border-border/10 bg-surface-main/40 space-y-6 border p-8 shadow-inner backdrop-blur-md md:p-10">
          <div className="flex gap-4">
            <IconRenderer name="Quote" size={20} className="text-brand-primary/40 shrink-0" />
            <p className="text-text-primary text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl">
              {data.summary}
            </p>
          </div>

          <div className="border-border/5 grid grid-cols-1 gap-4 border-t pt-8 md:grid-cols-2">
            {data.topBenefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <IconRenderer
                  name="CheckCircle2"
                  size={16}
                  className="text-brand-primary mt-1 shrink-0"
                />
                <span className="text-text-secondary text-sm font-medium italic">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Signature */}
        <div className="flex items-center justify-between opacity-40">
          <span className="font-mono text-[9px] font-black tracking-widest uppercase">
            Signature: {data.expertRef}
          </span>
          <span className="font-mono text-[9px] font-black tracking-widest uppercase">
            Status: Data_Connected
          </span>
        </div>
      </div>
    </div>
  );
});

AIPersonaInsight.displayName = "AIPersonaInsight";
