"use client";
import React from "react";
import IconRenderer from "@/components/ui/IconRenderer";

interface SearchOrchestratorProps {
  value: string;
  onChange: (val: string) => void;
}

export const SearchOrchestrator = ({ value, onChange }: SearchOrchestratorProps) => {
  return (
    <div className="group relative mb-16 max-w-2xl">
      <div className="absolute inset-0 bg-[var(--brand-primary)]/10 opacity-0 blur-xl transition-opacity duration-500 group-focus-within:opacity-100" />
      <div className="relative">
        <input
          type="text"
          placeholder="ค้นหา MODEL_ID, SERIAL หรือประเภทโซลูชัน..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)]/50 px-8 py-5 pl-16 font-[family-name:var(--font-primary)] text-xl transition-all outline-none focus:border-[var(--brand-primary)] focus:bg-[var(--surface-card)]"
        />
        <div className="absolute top-1/2 left-6 -translate-y-1/2 text-[var(--brand-primary)]">
          <IconRenderer name="Search" size={28} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};
