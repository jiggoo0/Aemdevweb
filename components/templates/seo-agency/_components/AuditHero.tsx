"use client";
import React from "react";
import { motion } from "framer-motion";

export const AuditHero = ({ title, description }: { title: string; description: string }) => {
  const metrics = [
    { label: "Performance", value: "99", color: "text-green-500" },
    { label: "Accessibility", value: "100", color: "text-green-500" },
    { label: "Best Practices", value: "100", color: "text-green-500" },
    { label: "SEO_Index", value: "100", color: "text-[var(--brand-primary)]" },
  ];

  return (
    <section className="relative overflow-hidden border-[var(--foreground)]/10 border-b-[var(--border-width)] pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-4 py-2">
              <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                System_Audit_Active
              </span>
            </div>
            <h1 className="font-[family-name:var(--font-primary)] text-6xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
              {title.split("|")[0]} <br />
              <span className="text-[var(--brand-primary)]">Laboratory.</span>
            </h1>
            <p className="max-w-xl text-xl font-medium text-[var(--text-primary)]/70 italic">
              {description}
            </p>
          </div>

          {/* Audit Metrics Display */}
          <div className="shadow-glow-sm grid grid-cols-2 gap-4 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-black p-8">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-2 border-[var(--border-width)] border-white/5 p-6">
                <p className="font-mono text-[9px] tracking-widest uppercase opacity-40">
                  {m.label}
                </p>
                <p className={`text-4xl font-black italic ${m.color}`}>{m.value}</p>
                <div className="h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    className={`h-full bg-current ${m.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
