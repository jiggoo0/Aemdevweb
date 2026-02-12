/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.9.9 (STABILIZED_PREMIUM)
 * [STRATEGY]: Partnership Integration | Typed Routes Resolution | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
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

/**
 * @component LineStickyButton
 * @description ปุ่มติดต่อ Line แบบลอยตัวที่ผ่านการ Hardening
 * [FIXED]: เปลี่ยนจาก <Link> เป็น <a> เพื่อรองรับ External URL ตามมาตรฐาน Next.js 16 Typed Routes
 */
const LineStickyButton = ({ className }: LineStickyButtonProps) => {
  return (
    <FloatingContainer
      triggerY={500}
      id="line-fab"
      className={cn("fixed right-6 bottom-6 z-[60]", className)}
    >
      <div className="group relative flex items-center justify-end">
        {/* --- 01. SPECIALIST STATUS TOOLTIP --- */}
        <div className="pointer-events-none absolute right-0 bottom-full mb-5 w-max origin-bottom translate-y-3 scale-90 transform-gpu opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] will-change-transform group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
          <div className="shadow-pro-xl border-border bg-surface-card/95 flex items-center gap-3 rounded-2xl border px-5 py-2.5 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-brand-primary shadow-glow relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Specialist_Online
            </p>
          </div>
        </div>

        {/* --- 02. PRIMARY ACTION NODE --- */}
        {/* [FIXED]: ใช้ <a> แทน <Link> สำหรับ External Link เพื่อแก้ปัญหา TS2322 ใน Next.js 16 */}
        <a
          href={SITE_CONFIG.links.line}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "relative flex h-14 w-14 items-center justify-center rounded-[1.5rem] md:h-16 md:w-16 md:rounded-[1.8rem]",
            "shadow-glow-lg bg-[#06C755] text-white",
            "transform-gpu transition-all duration-700 ease-[0.16,1,0.3,1]",
            "hover:scale-110 hover:-rotate-12 active:scale-90",
          )}
          aria-label="Connect with Specialist via Line"
        >
          {/* Ambient Signal (GPU Optimized) */}
          <span className="absolute inset-0 transform-gpu animate-ping rounded-full bg-[#06C755] opacity-20 duration-1000" />

          <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
            <IconRenderer name="MessageCircle" size={28} strokeWidth={2.5} />
          </div>

          {/* --- 03. CTA SLIDE-LABEL (Desktop Only) --- */}
          <div className="pointer-events-none absolute right-full mr-6 hidden transform-gpu items-center md:flex">
            <span
              className={cn(
                "shadow-pro-xl translate-x-6 rounded-2xl px-6 py-3 text-[11px] font-black tracking-[0.2em] whitespace-nowrap uppercase opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100",
                "bg-text-primary text-surface-main",
              )}
            >
              ปรึกษาแผนงานฟรี
            </span>
            <div className="bg-brand-primary/40 h-px w-6 origin-right scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
          </div>
        </a>
      </div>
    </FloatingContainer>
  );
};

LineStickyButton.displayName = "LineStickyButton";

export default memo(LineStickyButton);
