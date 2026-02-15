"use client";
import React from "react";
import { motion } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";

export const AtmosphereHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header className="relative overflow-hidden border-[var(--foreground)]/5 border-b-[var(--border-width)] pt-32 pb-16 md:pt-48 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
          <div className="max-w-4xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-4 py-1.5"
            >
              <IconRenderer name="CloudSun" size={16} className="text-[var(--brand-primary)]" />
              <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                Environment: Optimal | 24°C | AQI: 12
              </span>
            </motion.div>
            <h1 className="font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl">
              {title.split("|")[0]} <br />
              <span className="text-[var(--brand-primary)]">Experience.</span>
            </h1>
            <p className="max-w-2xl border-l-2 border-[var(--brand-primary)] pl-6 text-xl font-medium text-[var(--text-primary)]/70 italic">
              {description}
            </p>
          </div>

          {/* Elevation / Location Node */}
          <div className="hidden rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 lg:block">
            <div className="space-y-4 font-mono text-xs tracking-widest uppercase">
              <div className="flex justify-between gap-12">
                <span className="opacity-40">Elevation</span>
                <span className="font-black text-[var(--brand-primary)]">350m AMSL</span>
              </div>
              <div className="flex justify-between gap-12">
                <span className="opacity-40">Node_Status</span>
                <span className="font-black text-green-500">Live_Registry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
