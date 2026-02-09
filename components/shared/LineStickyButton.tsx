/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Partnership Integration | Theme-Aware Tooltips | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

/**
 * @component LineStickyButton
 * @description ปุ่ม Line ติดต่อด่วนแบบลอยตัว (Floating Action Button) 
 * [STABILIZED]: รองรับระบบ Multi-Theme และปรับปรุงระบบ Visual Feedback
 */
const LineStickyButton = () => {
  return (
    <div className="group relative flex items-center justify-end">
      
      {/* 01. CONTEXTUAL STATUS: ระบบแจ้งสถานะ Specialist */}
      <div className="pointer-events-none absolute right-0 bottom-full mb-4 w-max origin-bottom translate-y-2 scale-95 opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
        <div className={cn(
          "flex items-center gap-3 rounded-2xl border px-4 py-2 shadow-2xl backdrop-blur-md",
          /* [HYBRID]: ปรับจูนพื้นหลัง Tooltip ตามธีมปัจจุบัน */
          "border-border bg-surface-card/90"
        )}>
          <span className="relative flex h-2 w-2">
            <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-glow"></span>
          </span>
          <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
            Specialist_Online
          </p>
        </div>
      </div>

      {/* 02. PRIMARY ACTION NODE: ปุ่ม Line */}
      <Link
        href={SITE_CONFIG.links.line}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-[1.25rem] md:h-16 md:w-16 md:rounded-[1.5rem]",
          "bg-[#06C755] text-white shadow-[0_10px_30px_-10px_rgba(6,199,85,0.6)]",
          "transition-all duration-500 ease-[0.16,1,0.3,1]",
          "hover:scale-110 hover:-rotate-6 hover:shadow-[0_20px_40px_-10px_rgba(6,199,85,0.8)] active:scale-95",
        )}
        aria-label="Connect with Specialist via Line"
      >
        {/* Ambient Pulse: คลื่นความถี่จางๆ */}
        <span className="absolute inset-0 animate-ping rounded-[1.5rem] bg-[#06C755] opacity-20 duration-1000" />

        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          <IconRenderer name="MessageCircle" size={32} strokeWidth={2} />
        </div>

        {/* 03. CTA LABEL (Slide Left on Hover) */}
        <div className="pointer-events-none absolute right-full mr-4 hidden items-center md:flex">
          <span className={cn(
            "translate-x-4 rounded-xl px-5 py-2.5 text-[10px] font-black tracking-[0.2em] whitespace-nowrap uppercase shadow-xl transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100",
            /* [CONTRAST]: ใช้สี Inverted เพื่อให้ป้ายข้อความลอยเด่นในทุกธีม */
            "bg-text-primary text-surface-main"
          )}>
            ปรึกษาโปรเจกต์ฟรี
          </span>
          {/* Connector Line */}
          <div className="bg-border h-px w-4 scale-x-0 transition-all duration-500 group-hover:scale-x-100 opacity-50" />
        </div>
      </Link>
    </div>
  );
};

export default memo(LineStickyButton);
