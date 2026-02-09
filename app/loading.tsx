/**
 * [SYSTEM MODULE]: GLOBAL_LOADING_UI v17.0.1 (PERFORMANCE_TUNED)
 * [STRATEGY]: Zero-Layout Shift | GPU Acceleration | Neural Feedback
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]"
      role="status"
      aria-live="polite"
      aria-label="System Initializing..."
    >
      {/* 01. DECORATIVE BACKGROUND INFRASTRUCTURE */}
      <div className="absolute inset-0 z-0 opacity-20 select-none pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Radial Gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#22c55e08,transparent)]" />
      </div>

      {/* 02. SPECIALIST LOADER HUB */}
      <div className="relative z-10 flex flex-col items-center gap-y-12">
        {/* Brand Engine Core */}
        <div className="relative group">
          {/* Outer Ring Pulse */}
          <div className="absolute inset-0 -m-4 rounded-full border border-brand-primary/10 opacity-0 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
          
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full animate-pulse" />

          {/* Icon Container */}
          <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_30px_-10px_rgba(34,197,94,0.3)]">
            <IconRenderer
              name="Cpu"
              size={40}
              className="text-brand-primary animate-[spin_10s_linear_infinite]"
              strokeWidth={1.5}
            />
            
            {/* Status Dot */}
            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-brand-primary shadow-[0_0_10px_var(--color-brand-primary)] animate-pulse" />
          </div>
        </div>

        {/* 03. STATUS INTELLIGENCE */}
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-2">
            <h3 className="text-white text-sm font-black tracking-[0.3em] uppercase animate-pulse">
              System_Initializing
            </h3>
            <p className="text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase">
              Optimizing Route Architecture...
            </p>
          </div>

          {/* Digital Progress Bar */}
          <div className="h-0.5 w-48 overflow-hidden rounded-full bg-white/10">
            <div className="h-full bg-brand-primary w-1/2 animate-[shimmer_1.5s_infinite] shadow-[0_0_10px_var(--color-brand-primary)]" />
          </div>
        </div>
      </div>

      {/* 04. FOOTER METADATA */}
      <div className="absolute bottom-12 left-0 w-full text-center">
        <p className="text-white/20 font-mono text-[9px] tracking-[0.4em] uppercase">
          AEMDEVWEB &copy; Secure Connection
        </p>
      </div>
    </div>
  );
}
