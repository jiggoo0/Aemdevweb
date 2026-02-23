"use client";
import React from "react";
import { motion } from "framer-motion";
import type { ServiceFeature } from "@/types";

export const CapabilityGraph = ({ skills }: { skills: readonly ServiceFeature[] }) => {
  return (
    <div className="w-full space-y-6 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/5 bg-[var(--surface-card)] p-8">
      <p className="font-mono text-[10px] font-black tracking-[0.3em] uppercase italic opacity-40">
        // Capability_Metrics
      </p>
      <div className="space-y-5">
        {skills.map((skill, idx) => (
          <div key={idx} className="space-y-2">
            <div className="flex justify-between font-mono text-[10px] tracking-tighter uppercase">
              <span className="font-bold">{skill.title}</span>
              <span className="text-[var(--brand-primary)]">9{idx}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full border border-[var(--foreground)]/5 bg-[var(--foreground)]/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${90 + idx}%` }}
                className="h-full bg-[var(--brand-primary)]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
