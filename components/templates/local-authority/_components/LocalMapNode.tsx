"use client";

import React from "react";
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
 * ปรับปรุง: ลบ Unused Variable เพื่อประสิทธิภาพการ Build
 */
export const LocalMapNode = ({ lat, lng, province }: LocalMapNodeProps) => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="group relative">
        {/* --- 1. Technical Frame Area (Geographic Blueprint) --- */}
        <div
          className={cn(
            "relative aspect-[21/9] overflow-hidden transition-all duration-700",
            "border-[var(--border-width)] border-[var(--foreground)]/10 bg-black shadow-2xl",
            "rounded-[var(--radius)] group-hover:border-[var(--brand-primary)]/40",
          )}
        >
          {/* Blueprint Grid Overlay: สร้างความรู้สึกเหมือนกระดาษกราฟวิศวกรรม */}
          <div
            className="pointer-events-none absolute inset-0 z-10 opacity-20"
            style={{
              backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
          />

          {/* Map Visual (Monochromatic Style) */}
          <div className="absolute inset-0 z-0 opacity-40 brightness-50 contrast-125 grayscale invert transition-opacity duration-1000 group-hover:opacity-60">
            {/* Note: Placeholder สำหรับ Map visual */}
            <div className="flex h-full w-full items-center justify-center bg-[var(--brand-primary)]/5">
              <IconRenderer
                name="Map"
                size={80}
                className="animate-pulse text-[var(--brand-primary)] opacity-10"
              />
            </div>
          </div>

          {/* Crosshair UI: เส้นกึ่งกลางพิกัดเป้าหมาย */}
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute top-1/2 left-0 h-px w-full bg-[var(--brand-primary)]/20" />
            <div className="absolute top-0 left-1/2 h-full w-px bg-[var(--brand-primary)]/20" />

            {/* Corner Markers: กรอบมุมฉาก */}
            <div className="absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-[var(--brand-primary)]" />
            <div className="absolute top-4 right-4 h-4 w-4 border-t-2 border-r-2 border-[var(--brand-primary)]" />
            <div className="absolute bottom-4 left-4 h-4 w-4 border-b-2 border-l-2 border-[var(--brand-primary)]" />
            <div className="absolute right-4 bottom-4 h-4 w-4 border-r-2 border-b-2 border-[var(--brand-primary)]" />
          </div>

          {/* Target Marker: สัญญาณจุดพิกัดหลัก */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute h-20 w-20 animate-ping rounded-full border-2 border-[var(--brand-primary)] opacity-20" />
              <div className="h-4 w-4 rotate-45 bg-[var(--brand-primary)] shadow-[0_0_20px_rgba(var(--brand-primary-raw),0.5)]" />
            </div>
          </motion.div>
        </div>

        {/* --- 2. Data Readout Floater: แผงควบคุมพิกัด --- */}
        <div className="absolute bottom-8 left-8 z-40 hidden md:block">
          <div className="space-y-4 rounded-[calc(var(--radius)*0.5)] border-[var(--border-width)] border-[var(--brand-primary)]/30 bg-black/80 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <p className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                Local_Registry_Synched
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-mono text-[9px] tracking-widest uppercase opacity-40">
                Active_Node_Location
              </p>
              <p className="font-[family-name:var(--font-primary)] text-xl font-black uppercase italic">
                {province}_HUB.sys
              </p>
            </div>

            <div className="flex gap-6 border-t border-white/10 pt-2">
              <div>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-30">
                  Lat_Coord
                </p>
                <p className="font-mono text-xs font-bold">{lat.toFixed(4)}</p>
              </div>
              <div>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-30">
                  Lng_Coord
                </p>
                <p className="font-mono text-xs font-bold">{lng.toFixed(4)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
