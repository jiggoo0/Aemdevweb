/**
 * [SYSTEM MODULE]: GLOBAL_LOADING_UI v17.9.9 (HYBRID_ORCHESTRATOR)
 * [STRATEGY]: Skeleton Projection | Server-Side First | Perceived Speed Optimization
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import SkeletonGrid from "@/components/ui/SkeletonGrid"; // [ACTIVE_IMPORT]: แก้ไขปัญหา Unused File
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

/**
 * @component Loading
 * @description หน้าจอเริ่มต้นระบบที่ทำงานแบบ Hybrid
 * [REACT_19_UPDATE]: ลบ : JSX.Element เพื่อความเสถียรของ Type Mapping
 */
export default function Loading() {
  const currentYear = "2026";

  return (
    <div className="bg-surface-main relative min-h-screen w-full overflow-hidden">
      {/* --- 01. BACKGROUND INFRASTRUCTURE --- */}
      <div className="absolute inset-0 z-0 opacity-20" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0" />
      </div>

      {/* --- 02. SKELETON PROJECTION (Content Placeholder) --- */}
      <div className="container mx-auto px-4 pt-48 pb-24 md:px-6">
        <div className="mb-12 space-y-4 opacity-20">
          <div className="bg-border h-4 w-32 rounded-full" />
          <div className="bg-border h-12 w-full max-w-xl rounded-2xl" />
        </div>

        {/* [INTEGRATION]: เรียกใช้ SkeletonGrid เพื่อจำลองเนื้อหาที่กำลังโหลด */}
        <div className="pointer-events-none select-none">
          <SkeletonGrid count={3} aspectRatio="video" className="opacity-40" />
        </div>
      </div>

      {/* --- 03. SYSTEM OVERLAY (High-Priority Status) --- */}
      <div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center backdrop-blur-sm"
        role="status"
        aria-live="polite"
      >
        <div className="bg-surface-main/80 absolute inset-0 -z-10" />

        <div className="relative flex flex-col items-center gap-y-10">
          {/* Central Loader Node */}
          <div className="relative">
            <div className="bg-brand-primary/20 absolute inset-0 animate-pulse rounded-full blur-3xl" />
            <div
              className={cn(
                "border-border bg-surface-card relative flex h-28 w-28 items-center justify-center rounded-[2.5rem] border",
                "shadow-glow-lg backdrop-blur-xl transition-all duration-500",
              )}
            >
              <IconRenderer
                name="Cpu"
                size={48}
                className="text-brand-primary animate-[spin_6s_linear_infinite]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* Status Intelligence Text */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h3 className="text-text-primary animate-pulse text-base font-black tracking-[0.5em] uppercase italic">
                System_Initializing
              </h3>
              <p className="text-text-muted font-mono text-[10px] font-bold tracking-[0.2em] uppercase opacity-70">
                Projecting v{SITE_CONFIG.project.version} Data_Nodes...
              </p>
            </div>

            {/* Progress Bar Micro-interaction */}
            <div className="bg-surface-offset border-border/50 h-1 w-64 overflow-hidden rounded-full border">
              <div className="bg-brand-primary shadow-glow h-full w-full origin-left animate-[shimmer_2s_infinite_ease-in-out]" />
            </div>
          </div>
        </div>
      </div>

      {/* --- 04. FOOTER SIGNATURE --- */}
      <div className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-text-muted/40 font-mono text-[9px] font-black tracking-[0.5em] uppercase">
          {SITE_CONFIG.brandName} // Secured_Environment &copy; {currentYear}
        </p>
      </div>
    </div>
  );
}
