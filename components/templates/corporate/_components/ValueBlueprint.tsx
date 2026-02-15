"use client";
import React from "react";

export const ValueBlueprint = () => {
  const stats = [
    { label: "Active_Partners", value: "250+" },
    { label: "System_Stability", value: "99.9%" },
    { label: "ROI_Optimization", value: "x4.2" },
  ];

  return (
    <section className="border-[var(--foreground)]/10 border-y-[var(--border-width)] py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-20 md:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 text-center md:text-left">
              <p className="font-[family-name:var(--font-primary)] text-6xl font-black tracking-tighter text-[var(--brand-primary)] italic md:text-8xl">
                {stat.value}
              </p>
              <p className="font-mono text-sm font-black tracking-[0.3em] uppercase opacity-50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
