/**
 * [SYSTEM MODULE]: GLOBAL_LOADING_UI v16.4 (ATMOSPHERIC)
 * [STRATEGY]: Seamless UX Transition | Technical Branding | Neural Aesthetics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

/**
 * @component Loading
 * @description หน้าจอระหว่างรอโหลดข้อมูล
 * ออกแบบมาเพื่อให้ความรู้สึกที่ลื่นไหลและแจ้งสถานะให้ผู้ใช้งานทราบอย่างเป็นมิตร
 */
export default function Loading() {
  return (
    <div
      className="bg-surface-main fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
      role="status"
      aria-label="กำลังจัดเตรียมหน้าเว็บสำหรับคุณ..."
    >
      {/* 01. DECORATIVE BACKGROUND INFRASTRUCTURE */}
      {/* Infrastructure Grid: ลายตารางที่สื่อถึงการวางโครงสร้างที่แม่นยำ */}
      <div className="bg-infrastructure-grid absolute inset-0 opacity-40" aria-hidden="true" />

      {/* Atmospheric Aura: แสงนวลที่ช่วยสร้างมิติให้หน้าจอ */}
      <div
        className="ambient-aura absolute top-1/4 left-1/4 h-96 w-96 animate-pulse opacity-30"
        aria-hidden="true"
      />
      <div
        className="ambient-aura absolute right-1/4 bottom-1/4 h-96 w-96 animate-pulse opacity-20 delay-700"
        aria-hidden="true"
      />

      {/* 02. SPECIALIST LOADER HUB */}
      <div className="relative z-10 flex flex-col items-center gap-y-10">
        {/* Brand Engine Core: สัญลักษณ์การประมวลผลระบบ */}
        <div className="relative">
          {/* Ripple Effect: เอฟเฟกต์วงคลื่นที่แผ่ออกมาอย่างนุ่มนวล */}
          <div className="bg-brand-primary/20 absolute inset-0 animate-ping rounded-full blur-2xl" />

          <div className="bg-surface-main border-brand-primary/30 shadow-pro-lg relative flex h-24 w-24 items-center justify-center rounded-[2rem] border backdrop-blur-xl">
            <IconRenderer
              name="Cpu"
              size={40}
              className="text-brand-primary animate-pulse"
              strokeWidth={1.2}
            />
          </div>
        </div>

        {/* 03. STATUS NOTIFICATION */}
        <div className="flex flex-col items-center gap-y-4">
          <div className="flex flex-col items-center space-y-1">
            <h3 className="text-text-primary text-xs font-black tracking-[0.4em] uppercase italic">
              กำลังจัดเตรียมระบบ
            </h3>
            <p className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">
              เพื่อประสบการณ์การใช้งานที่ดีที่สุดสำหรับคุณ
            </p>
          </div>

          {/* Staggered Dot Progress: จุดสถานะที่เคลื่อนไหวอย่างลื่นไหล */}
          <div className="flex items-center gap-x-3">
            <span className="bg-brand-primary h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.3s]" />
            <span className="bg-brand-primary h-1.5 w-1.5 animate-bounce rounded-full [animation-delay:-0.15s]" />
            <span className="bg-brand-primary h-1.5 w-1.5 animate-bounce rounded-full" />
          </div>
        </div>

        {/* 04. TECHNICAL METADATA (FOOTER) */}
        <div className="border-surface-muted/30 mt-12 border-t pt-6">
          <p className="text-brand-primary/40 font-mono text-[9px] tracking-[0.3em] uppercase">
            System Ready // พร้อมให้บริการ
          </p>
        </div>
      </div>
    </div>
  );
}
