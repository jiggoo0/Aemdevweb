"use client";
import React from "react";
import { motion } from "framer-motion";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";

interface ProductNodeProps {
  name: string;
  description: string;
  icon: string;
  index: number;
  technicalID: string;
}

export const ProductNode = ({ name, description, icon, index, technicalID }: ProductNodeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group hover:shadow-glow-sm relative h-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] p-8 transition-all duration-500 hover:border-[var(--brand-primary)]/50"
    >
      <div className="flex h-full flex-col space-y-6">
        <div className="flex items-start justify-between">
          <div className="rounded-[var(--radius)] bg-[var(--brand-primary)]/10 p-4 text-[var(--brand-primary)]">
            <IconRenderer name={icon as IconName} size={32} strokeWidth={2} />
          </div>
          <span className="font-mono text-[10px] font-bold tracking-tighter opacity-30">
            {technicalID}
          </span>
        </div>

        <div className="flex-grow space-y-3">
          <h3 className="font-[family-name:var(--font-primary)] text-2xl leading-none font-black tracking-tight uppercase">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
            {description}
          </p>
        </div>

        <div className="border-[var(--foreground)]/5 border-t-[var(--border-width)] pt-6">
          <button className="w-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 py-3 text-[10px] font-black tracking-[0.2em] text-[var(--brand-primary)] uppercase transition-all hover:bg-[var(--brand-primary)] hover:text-white">
            View_Node_Details
          </button>
        </div>
      </div>
    </motion.div>
  );
};
