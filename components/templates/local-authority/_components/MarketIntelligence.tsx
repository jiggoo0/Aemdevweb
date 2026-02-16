"use client";
import React from "react";

interface MarketIntelligenceProps {
  level: string; // "low" | "medium" | "high"
  industries: string[];
}

export const MarketIntelligence = ({
  level = "medium",
  industries = [],
}: MarketIntelligenceProps) => {
  // [LOGIC]: Determine bar width based on competition level
  const getWidth = () => {
    switch (level.toLowerCase()) {
      case "high":
        return "90%";
      case "low":
        return "30%";
      default:
        return "60%"; // medium
    }
  };

  return (
    <section className="bg-[var(--brand-primary)]/5 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Competitive Level Analysis */}
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="font-mono text-xs font-black tracking-[0.2em] uppercase opacity-50">
                Competitive_Level
              </p>
              <div className="space-y-2">
                <div className="flex items-end justify-between">
                  <p className="text-5xl leading-none font-black text-[var(--brand-primary)] uppercase italic">
                    {level}
                  </p>
                  <span className="font-mono text-xs font-bold opacity-40">INDEX_SCORE</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-[var(--foreground)]/10">
                  <div
                    className="h-full bg-[var(--brand-primary)] transition-all duration-1000 ease-out"
                    style={{ width: getWidth() }}
                  />
                </div>
              </div>
            </div>

            <p className="text-lg leading-relaxed font-medium italic opacity-70">
              เราวิเคราะห์คู่แข่งในพื้นที่เพื่อวางโครงสร้างเว็บไซต์ให้คุณ "โดดเด่น" และ "ครองอันดับ"
              ได้ไวกว่ามาตรฐานทั่วไป โดยใช้กลยุทธ์เฉพาะทางสำหรับตลาด {level} competition
            </p>
          </div>

          {/* Niche Industry List */}
          {industries && industries.length > 0 && (
            <div className="space-y-6">
              <p className="font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
                Niche_Industry_Focus
              </p>
              <div className="grid gap-3">
                {industries.map((industry, idx) => (
                  <div
                    key={idx}
                    className="group flex items-center gap-4 rounded-[var(--radius)] border border-[var(--foreground)]/10 bg-[var(--surface-main)] p-4 transition-all hover:border-[var(--brand-primary)] hover:shadow-sm"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[var(--brand-primary)]/10 font-mono text-xs font-bold text-[var(--brand-primary)] transition-colors group-hover:bg-[var(--brand-primary)] group-hover:text-white">
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-[var(--foreground)]/80 italic group-hover:text-[var(--foreground)]">
                      {industry}
                    </span>
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
