/**
 * [SYSTEM MODULE]: GLOBAL_LOADING_UI v17.4.5 (HYBRID_THEME_STABILIZED)
 * [STRATEGY]: Zero-Layout Shift | Theme-Aware Physics | TBT_OPTIMIZED
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/**
 * @component Loading
 * @description หน้าจอเริ่มต้นระบบที่ถูกปรับจูนให้มี Overhead ต่ำที่สุด
 * [STABILIZED]: รองรับระบบ Multi-Theme และใช้ GPU Acceleration เต็มรูปแบบ
 */
function Loading() {
  // [DETERMINISTIC]: ดึงปีจาก Config เพื่อความเสถียรของ SSR
  const currentYear = SITE_CONFIG.business.established.split("-")[0] || "2026";

  return (
    <div
      className="bg-surface-main fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-700"
      role="status"
      aria-live="polite"
      aria-label="System Initializing..."
    >
      {/* 01. ATMOSPHERIC INFRASTRUCTURE: พื้นผิวทางวิศวกรรมแบบ Dynamic */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40 select-none"
        aria-hidden="true"
      >
        {/* Infrastructure Grid ที่ปรับตามตัวแปร Border ของธีม */}
        <div className="bg-infrastructure-grid absolute inset-0" />

        {/* Ambient Pulse: ใช้ค่าออปาซิตี้ตามความสว่างของธีม */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,var(--color-brand-primary),transparent)] opacity-[var(--ambient-opacity)]" />
      </div>

      {/* 02. SPECIALIST LOADER HUB: ศูนย์กลางการประมวลผลทางสายตา */}
      <div className="relative z-10 flex flex-col items-center gap-y-12">
        <div className="relative">
          {/* Inner Glow Overlay */}
          <div className="bg-brand-primary/20 absolute inset-0 animate-pulse rounded-full blur-2xl" />

          {/* Icon Container: บังคับใช้ GPU layer เพื่อลดค่า Total Blocking Time (TBT) */}
          <div
            className={cn(
              "border-border bg-surface-card relative flex h-24 w-24 items-center justify-center rounded-3xl border",
              "shadow-glow backdrop-blur-md will-change-transform",
            )}
          >
            <IconRenderer
              name="Cpu"
              size={40}
              className="text-brand-primary animate-[spin_8s_linear_infinite]"
              strokeWidth={1.5}
            />
            {/* Neural Heartbeat Dot */}
            <div className="bg-brand-primary shadow-glow absolute top-2 right-2 h-2 w-2 animate-pulse rounded-full" />
          </div>
        </div>

        {/* 03. STATUS INTELLIGENCE: ข้อมูลสถานะการเริ่มต้นระบบ */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-3">
            <h3 className="text-text-primary animate-pulse text-sm font-black tracking-[0.4em] uppercase">
              System_Initializing
            </h3>
            <p className="text-text-muted font-mono text-[10px] font-bold tracking-[0.2em] uppercase">
              Optimizing v{SITE_CONFIG.project.version} Infrastructure...
            </p>
          </div>

          {/* Digital Progress Bar: ระบบ Shimmer แบบ Hybrid */}
          <div className="bg-surface-offset h-0.5 w-48 overflow-hidden rounded-full">
            <div className="bg-brand-primary shadow-glow h-full w-1/2 animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>

      {/* 04. FOOTER METADATA: อัตลักษณ์ความปลอดภัย */}
      <div className="absolute bottom-12 left-0 w-full text-center">
        <p className="text-text-muted/30 font-mono text-[9px] font-bold tracking-[0.4em] uppercase">
          {SITE_CONFIG.brandName} &copy; {currentYear} // Secure_Node_v17
        </p>
      </div>
    </div>
  );
}

export default memo(Loading);
