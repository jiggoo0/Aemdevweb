import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

interface LocalInsightProps {
  insight: string;
  painPoints: string[];
  marketSaturation?: number;
}

export const LocalInsight = ({ insight, painPoints, marketSaturation }: LocalInsightProps) => {
  // [LOGIC]: Simulate competition data based on saturation
  const saturation = marketSaturation || 45; // Default fallback
  const competitorIndex = (saturation * 1.2).toFixed(1);
  const opportunityScore = (100 - saturation * 0.8).toFixed(1);

  return (
    <section className="border-b border-[var(--foreground)]/10 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          {/* Insight Column */}
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="font-mono text-xs font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase italic">
                // Market_Insight
              </p>
              <h2 className="font-[family-name:var(--font-primary)] text-4xl leading-tight font-black uppercase italic">
                วิเคราะห์บริบทธุรกิจ <br /> ในพื้นที่จังหวัดของคุณ
              </h2>
              <p className="border-l-4 border-[var(--brand-primary)] pl-8 text-xl leading-relaxed text-[var(--foreground)]/80 italic">
                "{insight}"
              </p>
            </div>

            {/* [NEW]: Digital Competition Monitor */}
            <div className="grid grid-cols-1 gap-4 rounded-[var(--radius)] border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 p-6 backdrop-blur-sm md:grid-cols-3">
              <div className="space-y-1">
                <p className="font-mono text-[9px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                  Digital_Saturation
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black italic">{saturation}%</span>
                  <div className="mb-1 h-2 w-full max-w-[40px] overflow-hidden rounded-full bg-[var(--brand-primary)]/10">
                    <div
                      className="h-full bg-[var(--brand-primary)]"
                      style={{ width: `${saturation}%` }}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-1 border-[var(--brand-primary)]/10 pl-4 md:border-l">
                <p className="font-mono text-[9px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                  Competition_Index
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black italic">{competitorIndex}</span>
                  <span className="mb-1 font-mono text-[8px] font-bold opacity-40">Lv.</span>
                </div>
              </div>
              <div className="space-y-1 border-[var(--brand-primary)]/10 pl-4 md:border-l">
                <p className="font-mono text-[9px] font-black tracking-widest text-[var(--brand-primary)] uppercase">
                  Opportunity_Node
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl font-black text-emerald-500 italic">
                    {opportunityScore}
                  </span>
                  <span className="mb-1 font-mono text-[8px] font-bold opacity-40">/100</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pain Points Column */}
          {painPoints && painPoints.length > 0 && (
            <div className="rounded-[var(--radius)] border border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 md:p-12">
              <p className="mb-8 font-mono text-[10px] font-bold tracking-widest uppercase opacity-40">
                Target_Pain_Points
              </p>
              <div className="space-y-6">
                {painPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="pt-1 text-[var(--brand-primary)]">
                      <IconRenderer name="AlertCircle" size={18} />
                    </div>
                    <p className="leading-relaxed font-medium text-[var(--foreground)]/80 italic">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
