/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.9.68 (ULTIMATE_HARDENED)
 * [STRATEGY]: Partnership Integration | Neural Physics | GPU-Leaning
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { FloatingContainer } from "./FloatingContainer";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

interface LineStickyButtonProps {
  readonly className?: string;
}

const LineStickyButton = ({ className }: LineStickyButtonProps) => {
  return (
    <FloatingContainer
      triggerY={120}
      id="line-fab"
      className={cn("fixed right-6 bottom-6 z-[60]", className)}
    >
      <div className="group relative flex items-center justify-end">
        {/* --- 01. STATUS NODE (Neural Specialist Indicator) --- */}
        <div className="pointer-events-none absolute right-0 bottom-full mb-5 w-max origin-bottom translate-y-3 scale-90 transform-gpu opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] will-change-[transform,opacity] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <div className="border-border/40 bg-surface-card/90 shadow-pro-xl flex items-center gap-3 rounded-2xl border px-5 py-2.5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06C755] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06C755] shadow-[0_0_10px_#06C755]"></span>
            </span>
            <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.2em] uppercase">
              Specialist_Online
            </p>
          </div>
        </div>

        {/* --- 02. PRIMARY ACTION NODE (Neural-Spring Button) --- */}
        <a
          href={SITE_CONFIG.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-[1.6rem] md:h-16 md:w-16 md:rounded-[1.9rem]",
            "bg-gradient-to-br from-[#06C755] to-[#00B900] text-white",
            "shadow-[0_8px_20px_-6px_rgba(6,199,85,0.5)] hover:shadow-[0_12px_32px_-6px_rgba(6,199,85,0.7)]",
            "transform-gpu transition-all duration-700 ease-[0.16,1,0.3,1]",
            "hover:scale-110 hover:-rotate-6 active:scale-95",
            "pointer-events-auto", // รับประกันการคลิกได้แม้ wrapper จะเป็น none
          )}
          aria-label="Connect with AEMZA MACKS via Line"
        >
          {/* Ambient Signal Pulse - GPU Optimized */}
          <span className="absolute inset-0 z-0 transform-gpu animate-ping rounded-[1.6rem] bg-[#06C755] opacity-20 duration-[2500ms]" />

          <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
            <IconRenderer
              name="MessageCircle"
              size={28}
              strokeWidth={2.5}
              className="drop-shadow-md"
            />
          </div>

          {/* --- 03. CTA DESKTOP LABEL (Neural Slide-out) --- */}
          <div className="pointer-events-none absolute right-full mr-6 hidden transform-gpu items-center md:flex">
            <span
              className={cn(
                "shadow-pro-xl border-border/60 bg-surface-main/90 text-text-primary translate-x-4 rounded-2xl border px-6 py-3 text-[10px] font-black tracking-[0.2em] whitespace-nowrap uppercase opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100",
              )}
            >
              ปรึกษาโปรเจกต์
            </span>
            {/* Visual Linkage Logic */}
            <div className="bg-brand-primary h-px w-6 origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        </a>
      </div>
    </FloatingContainer>
  );
};

LineStickyButton.displayName = "LineStickyButton";

export default memo(LineStickyButton);
