/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.4.6 (STABILIZED)
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
 * @description โหนดติดต่อด่วนแบบลอยตัว (Floating Action Button)
 * ออกแบบมาเพื่อกระตุ้น Micro-conversion ผ่านช่องทาง Line Official
 */
const LineStickyButton = () => {
  return (
    <div className="group relative flex items-center justify-end">
      {/* --- 01. CONTEXTUAL STATUS: ระบบแจ้งสถานะความพร้อมของผู้เชี่ยวชาญ --- */}
      <div className="pointer-events-none absolute right-0 bottom-full mb-5 w-max origin-bottom translate-y-3 scale-90 opacity-0 transition-all duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
        <div
          className={cn(
            "shadow-pro-xl flex items-center gap-3 rounded-2xl border px-5 py-2.5 backdrop-blur-xl",
            /* [HYBRID THEME]: ปรับจูนแสงเงาและพื้นหลังตามสภาวะธีม */
            "border-border bg-surface-card/95",
          )}
        >
          <span className="relative flex h-2 w-2">
            <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-brand-primary shadow-glow relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
          <p className="text-text-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
            Specialist_Online
          </p>
        </div>
      </div>

      {/* --- 02. PRIMARY ACTION NODE: ศูนย์กลางการเชื่อมต่อ --- */}
      <Link
        href={SITE_CONFIG.links.line}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "pointer-events-auto relative flex h-14 w-14 items-center justify-center rounded-[1.5rem] md:h-20 md:w-20 md:rounded-[2rem]",
          "bg-[#06C755] text-white shadow-[0_15px_40px_-10px_rgba(6,199,85,0.5)]",
          "transition-all duration-700 ease-[0.16,1,0.3,1]",
          "hover:scale-110 hover:-rotate-12 hover:shadow-[0_25px_50px_-10px_rgba(6,199,85,0.7)] active:scale-90",
        )}
        aria-label="Connect with Specialist via Line"
      >
        {/* Ambient Pulse: สัญญาณความถี่จางๆ เพื่อเรียกสายตาแบบ Subliminal */}
        <span className="absolute inset-0 animate-ping rounded-[2rem] bg-[#06C755] opacity-20 duration-1000" />

        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          <IconRenderer name="MessageCircle" size={32} strokeWidth={2.5} />
        </div>

        {/* --- 03. CTA SLIDE-LABEL: ป้ายข้อความตอบสนองแบบเลื่อน --- */}
        <div className="pointer-events-none absolute right-full mr-6 hidden items-center md:flex">
          <span
            className={cn(
              "shadow-pro-xl translate-x-6 rounded-2xl px-6 py-3 text-[11px] font-black tracking-[0.2em] whitespace-nowrap uppercase opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100",
              /* [CONTRAST LOGIC]: ใช้สีตัดกันเพื่อให้ข้อความอ่านง่ายที่สุดในทุกเลเยอร์ */
              "bg-text-primary text-surface-main",
            )}
          >
            ปรึกษาแผนงานฟรี
          </span>

          {/* Connector Physics Line */}
          <div className="bg-brand-primary/40 h-px w-6 origin-right scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />
        </div>
      </Link>
    </div>
  );
};

export default memo(LineStickyButton);
