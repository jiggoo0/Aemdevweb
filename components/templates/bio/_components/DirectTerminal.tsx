"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

export const DirectTerminal = () => {
  return (
    <div className="w-full space-y-6 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-black p-6">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-500/50" />
        <div className="h-2 w-2 rounded-full bg-amber-500/50" />
        <div className="h-2 w-2 rounded-full bg-green-500/50" />
        <span className="ml-2 font-mono text-[9px] opacity-30">Communication_Terminal</span>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3 font-mono text-sm">
          <span className="font-bold text-[var(--brand-primary)]">❯</span>
          <input
            type="text"
            placeholder="Enter_Email_For_Project_Quote..."
            className="w-full border-none bg-transparent text-white italic outline-none placeholder:opacity-20"
          />
        </div>
        <Button
          variant="specialist"
          className="h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
        >
          Deploy_Request
        </Button>
      </div>
    </div>
  );
};
