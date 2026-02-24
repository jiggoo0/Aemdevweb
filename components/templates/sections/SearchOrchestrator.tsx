/**
 * [SECTION COMPONENT]: SEARCH_ORCHESTRATOR v18.0.3 (UI_STABILIZED)
 * [STRATEGY]: Focus Reveal | Keyboard Synergy | Zero-Framer
 */

"use client";
import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface SearchOrchestratorProps {
  readonly value: string;
  readonly onChange: (val: string) => void;
}

export const SearchOrchestrator = ({ value, onChange }: SearchOrchestratorProps) => {
  return (
    <div className="group relative mb-16 max-w-2xl">
      {/* Dynamic Background Aura */}
      <div className="absolute inset-0 bg-[var(--brand-primary)]/10 opacity-0 blur-2xl transition-opacity duration-500 group-focus-within:opacity-100" />

      <div className="relative">
        <input
          type="text"
          placeholder="ค้นหา MODEL_ID, SERIAL หรือประเภทโซลูชัน..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(
            "w-full px-8 py-5 pl-16 text-xl transition-all duration-500 outline-none",
            "bg-[var(--surface-card)]/50 backdrop-blur-md",
            "border-[var(--border-width)] border-[var(--foreground)]/10",
            "rounded-[var(--radius)]",
            "focus:border-[var(--brand-primary)] focus:bg-[var(--surface-card)] focus:ring-4 focus:ring-[var(--brand-primary)]/10",
            "font-[family-name:var(--font-primary)] font-black tracking-tight uppercase italic",
          )}
        />

        {/* Fixed Icon Position */}
        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[var(--brand-primary)] transition-transform duration-500 group-focus-within:scale-110">
          <IconRenderer name="Search" size={28} strokeWidth={2.5} />
        </div>

        {/* Technical Status Indicator */}
        <div className="absolute top-1/2 right-6 hidden -translate-y-1/2 md:block">
          <div className="flex items-center gap-2 font-mono text-[8px] font-bold tracking-widest uppercase opacity-20 transition-opacity group-focus-within:opacity-40">
            <span className="h-1 w-1 animate-pulse rounded-full bg-[var(--brand-primary)]" />
            Live_Index_Active
          </div>
        </div>
      </div>
    </div>
  );
};
