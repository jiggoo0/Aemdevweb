"use client";
import React from "react";
import { motion } from "framer-motion";

interface VisionPortalProps {
  title: string;
  subtitle: string;
}

export const VisionPortal = ({ title, subtitle }: VisionPortalProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-4 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-5 py-2"
          >
            <div className="shadow-glow h-2 w-2 rounded-full bg-[var(--brand-primary)]" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase">
              Corporate_Strategic_Node.v2026
            </span>
          </motion.div>

          <h1 className="font-[family-name:var(--font-primary)] text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl">
            {title.split("|")[0]} <br />
            <span className="text-[var(--brand-primary)]">Specialist.</span>
          </h1>

          <p className="max-w-3xl border-l-4 border-[var(--brand-primary)] pl-8 text-xl leading-relaxed font-medium text-[var(--text-primary)]/80 italic md:pl-12 md:text-3xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/4 -translate-y-1/4 opacity-10">
        <p className="text-[20vw] font-black italic select-none">TRUST</p>
      </div>
    </section>
  );
};
