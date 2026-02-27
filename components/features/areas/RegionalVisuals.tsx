/**
 * [FEATURE COMPONENT]: REGIONAL_VISUALS v18.1.0 (ATMOSPHERIC_GRID)
 * [STRATEGY]: Blueprint Imagery | Kinetic Reveal | GPU-Accelerated Gallery
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface RegionalVisualsProps {
  readonly data?: {
    banner?: string;
    gallery?: readonly string[];
  };
  readonly province: string;
}

export const RegionalVisuals = memo(({ data, province }: RegionalVisualsProps) => {
  if (!data?.gallery || data.gallery.length === 0) return null;

  return (
    <section className="bg-surface-offset relative overflow-hidden py-24 md:py-32">
      {/* 01. DECORATIVE BLUEPRINT grid */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="mb-16 space-y-4">
          <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-3 rounded-full border px-4 py-1.5">
            <IconRenderer name="Camera" size={14} className="text-brand-primary" />
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
              Visual_Success_Logs: {province}
            </span>
          </div>
          <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            Regional <span className="text-brand-primary">Assets.</span>
          </h2>
        </div>

        {/* 02. ATMOSPHERIC GALLERY GRID */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.gallery.map((img, idx) => (
            <div
              key={idx}
              className={cn(
                "group border-border bg-surface-card rounded-card relative h-[300px] overflow-hidden border transition-all duration-700",
                "hover:border-brand-primary/40 hover:shadow-glow-sm",
                idx === 0 && "md:col-span-2 md:h-[400px] lg:col-span-2",
              )}
            >
              <Image
                src={img}
                alt={`${province} Success Unit ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 group-hover:opacity-40"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay Metadata */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-0 flex translate-y-4 flex-col justify-end p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-brand-primary font-mono text-[9px] font-black tracking-widest uppercase">
                  NODE_REF: {province.toUpperCase()}_EXP_{idx + 1}
                </span>
                <h4 className="mt-2 text-xl font-black tracking-tighter text-white uppercase italic">
                  Technical_Verification_Success
                </h4>
              </div>

              {/* Status HUD */}
              <div className="absolute top-6 right-6 flex items-center gap-2 rounded-full border border-white/5 bg-black/40 px-3 py-1 opacity-0 backdrop-blur-md transition-opacity delay-300 group-hover:opacity-100">
                <div className="h-1 w-1 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-mono text-[7px] font-bold tracking-widest text-white uppercase">
                  Live_Node
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

RegionalVisuals.displayName = "RegionalVisuals";
