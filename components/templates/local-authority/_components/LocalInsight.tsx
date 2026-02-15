"use client";
import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

interface LocalInsightProps {
  insight: string;
  painPoints: string[];
}

export const LocalInsight = ({ insight, painPoints }: LocalInsightProps) => {
  return (
    <section className="border-[var(--foreground)]/10 border-b-[var(--border-width)] py-24 md:py-32">
      <div className="container mx-auto grid grid-cols-1 gap-20 px-4 lg:grid-cols-2">
        <div className="space-y-8">
          <p className="font-mono text-xs font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase italic">
            // Market_Insight
          </p>
          <h2 className="font-[family-name:var(--font-primary)] text-4xl leading-tight font-black uppercase italic">
            วิเคราะห์บริบทธุรกิจ <br /> ในพื้นที่จังหวัดของคุณ
          </h2>
          <p className="border-l-4 border-[var(--brand-primary)] pl-8 text-xl leading-relaxed text-[var(--text-primary)]/70 italic">
            "{insight}"
          </p>
        </div>

        <div className="rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 md:p-12">
          <p className="mb-8 font-mono text-[10px] font-bold tracking-widest uppercase opacity-40">
            Target_Pain_Points
          </p>
          <div className="space-y-6">
            {painPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="pt-1 text-[var(--brand-primary)]">
                  <IconRenderer name="AlertCircle" size={18} />
                </div>
                <p className="font-medium text-[var(--text-primary)]/80 italic">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
