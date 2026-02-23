"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface LocalMapNodeProps {
  lat: number;
  lng: number;
  province: string;
}

/**
 * @component LocalMapNode
 * @description แสดงพิกัดที่ตั้งในรูปแบบ Industrial Blueprint พร้อมระบบ Identity Switcher
 * [OPTIMIZED]: Wrapped with memo for rendering performance
 */
export const LocalMapNode = memo(({ lat, lng, province }: LocalMapNodeProps) => {
  // [DEFENSIVE]: Fallback coordinates if undefined (Bangkok Center)
  const safeLat = lat || 13.7563;
  const safeLng = lng || 100.5018;

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="group relative">
        {/* --- 1. Technical Frame Area (Geographic Blueprint) --- */}
        <div
          className={cn(
            "relative aspect-[21/9] overflow-hidden transition-all duration-700",
            "border border-[var(--foreground)]/10 bg-black shadow-2xl",
            "rounded-[var(--radius)] group-hover:border-[var(--brand-primary)]/40",
          )}
        >
          {/* Blueprint Grid Overlay */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-20"
            style={{
              backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Map Visual (Monochromatic Style) */}
          <div className="absolute inset-0 z-0 opacity-40 brightness-50 contrast-125 grayscale invert transition-opacity duration-1000 group-hover:opacity-60">
            <div className="flex h-full w-full items-center justify-center bg-[var(--brand-primary)]/5">
              <IconRenderer
                name="Map"
                size={80}
                className="animate-pulse text-[var(--brand-primary)] opacity-10"
              />
            </div>
          </div>

          {/* Crosshair UI */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute top-1/2 left-0 h-px w-full bg-[var(--brand-primary)]/20" />
            <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--brand-primary)]/20" />

            {/* Corner Markers */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-[var(--brand-primary)]" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-[var(--brand-primary)]" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-[var(--brand-primary)]" />
            <div className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-[var(--brand-primary)]" />
          </div>

          {/* Target Marker */}
          <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "backOut" }}
              className="relative flex items-center justify-center"
            >
              <div className="absolute h-20 w-20 animate-ping rounded-full border-2 border-[var(--brand-primary)] opacity-20" />
              <div className="h-4 w-4 rotate-45 bg-[var(--brand-primary)] shadow-[0_0_20px_var(--brand-primary)]" />
            </motion.div>
          </div>
        </div>

        {/* --- 2. Data Readout Floater --- */}
        <div className="absolute bottom-8 left-8 z-40 hidden md:block">
          <div className="space-y-4 rounded-[calc(var(--radius)*0.5)] border border-[var(--brand-primary)]/30 bg-black/80 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              <p className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                Local_Registry_Synched
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[9px] tracking-widest text-white uppercase opacity-40">
                Active_Node_Location
              </p>
              <p className="font-[family-name:var(--font-primary)] text-xl font-black text-white uppercase italic">
                {province}_HUB.sys
              </p>
            </div>

            <div className="flex gap-6 border-t border-white/10 pt-2 text-white">
              <div>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-30">
                  Lat_Coord
                </p>
                <p className="font-mono text-xs font-bold">{safeLat.toFixed(4)}</p>
              </div>
              <div>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-30">
                  Lng_Coord
                </p>
                <p className="font-mono text-xs font-bold">{safeLng.toFixed(4)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

LocalMapNode.displayName = "LocalMapNode";
