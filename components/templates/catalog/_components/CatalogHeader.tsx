"use client";
import React from "react";

interface CatalogHeaderProps {
  title: string;
  subtitle: string;
  nodeCount: number;
}

export const CatalogHeader = ({ title, subtitle, nodeCount }: CatalogHeaderProps) => {
  return (
    <header className="mb-20 space-y-8">
      <div className="inline-flex items-center gap-3 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-[var(--brand-primary)]/5 px-4 py-2">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-primary)]"></span>
        </span>
        <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
          System_Registry_Active
        </span>
      </div>

      <div className="space-y-4">
        <h1 className="font-[family-name:var(--font-primary)] text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
          {title.split("|")[0]} <br />
          <span className="text-[var(--brand-primary)]">Architecture.</span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed font-medium text-[var(--text-primary)]/70 italic md:text-xl">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center gap-8 border-[var(--foreground)]/10 border-t-[var(--border-width)] pt-6">
        <div className="space-y-1">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">Total_Nodes</p>
          <p className="text-3xl font-black italic">{nodeCount.toString().padStart(2, "0")}</p>
        </div>
        <div className="space-y-1">
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase opacity-50">
            Identity_Mode
          </p>
          <p className="text-xl font-black tracking-widest text-[var(--brand-primary)] uppercase">
            Custom_Override
          </p>
        </div>
      </div>
    </header>
  );
};
