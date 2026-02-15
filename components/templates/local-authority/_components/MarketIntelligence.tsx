"use client";
import React from "react";

interface MarketIntelligenceProps {
  level: string;
  industries: string[];
}

export const MarketIntelligence = ({ level, industries }: MarketIntelligenceProps) => {
  return (
    <section className="bg-[var(--brand-primary)]/5 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <div className="space-y-10">
            <div className="space-y-2">
              <p className="font-mono text-xs font-black tracking-[0.2em] uppercase opacity-50">
                Competitive_Level
              </p>
              <div className="flex items-center gap-4">
                <p className="text-5xl font-black text-[var(--brand-primary)] uppercase italic">
                  {level}
                </p>
                <div className="h-2 flex-grow overflow-hidden rounded-full bg-[var(--foreground)]/10">
                  <div
                    className="h-full bg-[var(--brand-primary)]"
                    style={{ width: level === "high" ? "90%" : level === "medium" ? "60%" : "30%" }}
                  />
                </div>
              </div>
            </div>

            <p className="text-lg font-medium italic opacity-70">
              เราวิเคราะห์คู่แข่งในพื้นที่เพื่อวางโครงสร้างเว็บไซต์ให้คุณ "โดดเด่น" และ "ครองอันดับ"
              ได้ไวกว่ามาตรฐานทั่วไป
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <p className="font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-40">
              Niche_Industry_Focus
            </p>
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="group rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-main)] p-4 font-bold italic transition-colors hover:border-[var(--brand-primary)]"
              >
                <span className="mr-3 font-mono text-[var(--brand-primary)]">0{idx + 1}</span>
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
