/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.9.66 (STRUCTURE_ALIGNED)
 * [STRATEGY]: Partnership Integration | Sibling Import Resolution | Neural Physics
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
// [FIXED]: นำเข้าจาก Sibling ในโฟลเดอร์เดียวกัน (Shared) เพื่อความเสถียรของ Path
import { FloatingContainer } from "./FloatingContainer";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

interface LineStickyButtonProps {
  readonly className?: string;
}

/**
 * @component LineStickyButton
 * @description ปุ่มติดต่อ Line แบบลอยตัวที่ผ่านการ Hardening และจัดระเบียบโครงสร้างใหม่
 */
const LineStickyButton = ({ className }: LineStickyButtonProps) => {
  return (
    <FloatingContainer
      triggerY={120} // [UX]: ปรากฏตัวเมื่อเลื่อนผ่านระยะพ้นช่วงสายตา (Hero Section)
      id="line-fab"
      className={cn("fixed right-6 bottom-6 z-[60]", className)}
    >
      <div className="group relative flex items-center justify-end">
        {/* --- 01. TOOLTIP LAYER (Specialist Status Indicator) --- */}
        <div className="pointer-events-none absolute right-0 bottom-full mb-4 w-max origin-bottom translate-y-3 scale-90 transform-gpu opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] will-change-transform group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <div className="border-border bg-surface-card/95 shadow-pro-xl flex items-center gap-3 rounded-2xl border px-5 py-2.5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              {/* Signal Pulse */}
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#06C755] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#06C755] shadow-[0_0_8px_#06C755]"></span>
            </span>
            <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.2em] uppercase">
              Specialist_Online
            </p>
          </div>
        </div>

        {/* --- 02. PRIMARY ACTION NODE (LINE Link) --- */}
        <a
          href={SITE_CONFIG.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-[1.5rem] md:h-16 md:w-16 md:rounded-[1.8rem]",
            // [VISUAL]: Gradient Brand Identity
            "bg-gradient-to-br from-[#06C755] to-[#00B900] text-white",
            // [GLOW]: ระบบเรืองแสงแบบไดนามิก
            "shadow-[0_8px_20px_-6px_rgba(6,199,85,0.5)] hover:shadow-[0_12px_28px_-6px_rgba(6,199,85,0.7)]",
            "transform-gpu transition-all duration-700 ease-[0.16,1,0.3,1]",
            "hover:scale-110 hover:-rotate-6 active:scale-95",
          )}
          aria-label="Connect with Specialist via Line"
        >
          {/* Ambient Signal Pulse */}
          <span className="absolute inset-0 z-0 transform-gpu animate-ping rounded-[1.5rem] bg-[#06C755] opacity-20 duration-2000" />

          <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
            <IconRenderer
              name="MessageCircle"
              size={28}
              strokeWidth={2.5}
              className="drop-shadow-md"
            />
          </div>

          {/* --- 03. CTA DESKTOP LABEL (Slide-out) --- */}
          <div className="pointer-events-none absolute right-full mr-6 hidden transform-gpu items-center md:flex">
            <span
              className={cn(
                "shadow-pro-xl translate-x-4 rounded-2xl px-5 py-2.5 text-[10px] font-black tracking-[0.15em] whitespace-nowrap uppercase opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100",
                "bg-surface-main text-text-primary border-border border",
              )}
            >
              ปรึกษาโปรเจกต์
            </span>
            {/* Structural Linkage */}
            <div className="bg-border h-px w-4 origin-right scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        </a>
      </div>
    </FloatingContainer>
  );
};

LineStickyButton.displayName = "LineStickyButton";

export default memo(LineStickyButton);
