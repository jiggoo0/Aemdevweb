/**
 * [SHARED COMPONENT]: LINE_STICKY_BUTTON v17.0.2 (INTEGRATED)
 * [STRATEGY]: Partnership Integration | Persistent Conversion | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

const LineStickyButton = () => {
  return (
    // [LAYOUT NOTE]: ใช้ relative เพื่อให้ Tooltips อ้างอิงตำแหน่งจากปุ่มนี้
    // ตำแหน่ง Fixed จะถูกจัดการโดย RootLayout เพื่อให้เรียง Layer กับ Toaster ได้ถูกต้อง
    <div className="group relative flex items-center justify-end">
      {/* 01. CONTEXTUAL STATUS: ระบบแจ้งสถานะ Specialist (Slide Up on Hover) */}
      <div className="pointer-events-none absolute right-0 bottom-full mb-4 w-max origin-bottom translate-y-2 scale-95 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
        <div className="border-brand-primary/20 flex items-center gap-3 rounded-2xl border bg-[#050505]/90 px-4 py-2 shadow-xl backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-[0_0_8px_var(--color-brand-primary)]"></span>
          </span>
          <p className="font-mono text-[9px] font-black tracking-[0.3em] text-white uppercase">
            Specialist_Online
          </p>
        </div>
      </div>

      {/* 02. PRIMARY ACTION NODE: ปุ่ม Line พร้อมฟิสิกส์แอนิเมชัน */}
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
        {/* Ambient Pulse: คลื่นความถี่จางๆ สื่อถึงความพร้อมในการให้บริการ */}
        <span className="absolute inset-0 animate-ping rounded-[1.5rem] bg-[#06C755] opacity-20 duration-1000" />

        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          <IconRenderer name="MessageCircle" size={32} strokeWidth={2} />
        </div>

        {/* 03. CTA LABEL (Slide Left on Hover) */}
        <div className="pointer-events-none absolute right-full mr-4 hidden items-center md:flex">
          <span className="translate-x-4 rounded-xl bg-white px-4 py-2 text-[10px] font-black tracking-[0.2em] whitespace-nowrap text-black uppercase opacity-0 shadow-lg transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
            ปรึกษาโปรเจกต์ฟรี
          </span>
          {/* Connector Line */}
          <div className="h-px w-4 scale-x-0 bg-white/20 transition-all duration-500 group-hover:scale-x-100" />
        </div>
      </Link>
    </div>
  );
};

export default memo(LineStickyButton);
