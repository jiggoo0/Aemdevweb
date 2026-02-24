/**
 * [SECTION COMPONENT]: LOCAL_MAP_NODE v18.0.3 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure CSS Transitions | Interaction Reveal | Zero-Framer
 */

"use client";

import React, { memo, useState, useEffect, useRef } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface LocalMapNodeProps {
  lat: number;
  lng: number;
  province: string;
}

export const LocalMapNode = memo(({ lat, lng, province }: LocalMapNodeProps) => {
  const safeLat = lat || 13.7563;
  const safeLng = lng || 100.5018;

  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="container mx-auto px-4 py-24">
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
            <div
              className={cn(
                "relative flex items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
                visible ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            >
              <div className="absolute h-20 w-20 animate-ping rounded-full border-2 border-[var(--brand-primary)] opacity-20" />
              <div className="h-4 w-4 rotate-45 bg-[var(--brand-primary)] shadow-[0_0_20px_var(--brand-primary)]" />
            </div>
          </div>
        </div>

        {/* --- 2. Data Readout Floater --- */}
        <div
          className={cn(
            "absolute bottom-8 left-8 z-40 hidden transition-all delay-500 duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] md:block",
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
        >
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
