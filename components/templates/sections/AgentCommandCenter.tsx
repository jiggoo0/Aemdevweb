/**
 * [FEATURE]: AGENT_COMMAND_CENTER v18.4.0 (AUTONOMOUS_READY)
 * [STRATEGY]: Agent-Process Simulation | Dynamic State Visualization | Zero-JS
 */

"use client";

import React, { useState, useEffect, memo } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

interface AgentProcess {
  id: string;
  step: string;
  status: "pending" | "processing" | "success";
}

export const AgentCommandCenter = memo(() => {
  const [processes, setProcesses] = useState<AgentProcess[]>([
    { id: "ID_SCAN", step: "Identifying_Node_Entity...", status: "pending" },
    { id: "SEC_HARD", step: "Verifying_Security_Headers...", status: "pending" },
    { id: "GEO_SYNC", step: "Syncing_GEO_Knowledge_Graph...", status: "pending" },
    { id: "AGENT_ORCH", step: "Orchestrating_Agent_Payload...", status: "pending" },
  ]);

  useEffect(() => {
    const runProcess = async () => {
      for (let i = 0; i < processes.length; i++) {
        setProcesses((prev) =>
          prev.map((p, idx) => (idx === i ? { ...p, status: "processing" } : p)),
        );
        await new Promise((r) => setTimeout(r, 1200));
        setProcesses((prev) => prev.map((p, idx) => (idx === i ? { ...p, status: "success" } : p)));
      }
    };
    runProcess();
  }, []);

  return (
    <div className="border-border/50 rounded-section bg-surface-card shadow-pro-xl relative overflow-hidden border p-8 font-mono md:p-12">
      {/* 01. TERMINAL HEADER */}
      <div className="border-border/10 mb-10 flex items-center justify-between border-b pb-6">
        <div className="flex items-center gap-4">
          <div className="bg-brand-primary h-3 w-3 animate-pulse rounded-full shadow-[0_0_10px_var(--brand-primary)]" />
          <span className="text-text-primary text-[10px] font-black tracking-[0.4em] uppercase">
            Autonomous_Agent_Console
          </span>
        </div>
        <span className="text-text-muted text-[8px] font-bold uppercase opacity-30">
          Protocol: v18.4.0_ALPHA
        </span>
      </div>

      {/* 02. PROCESS MATRIX */}
      <div className="space-y-6">
        {processes.map((proc) => (
          <div key={proc.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all duration-500",
                  proc.status === "pending" && "bg-border/20",
                  proc.status === "processing" && "bg-brand-primary animate-ping",
                  proc.status === "success" &&
                    "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]",
                )}
              />
              <span
                className={cn(
                  "text-[11px] font-medium tracking-wider transition-colors duration-500",
                  proc.status === "pending" && "text-text-muted opacity-40",
                  proc.status === "processing" && "text-text-primary animate-pulse",
                  proc.status === "success" && "text-text-secondary font-bold",
                )}
              >
                ❯ {proc.step}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "text-[8px] font-black tracking-widest uppercase",
                  proc.status === "pending" && "text-text-muted opacity-20",
                  proc.status === "processing" && "text-brand-primary",
                  proc.status === "success" && "text-emerald-500",
                )}
              >
                [{proc.status.toUpperCase()}]
              </span>
              {proc.status === "success" && (
                <IconRenderer name="Check" size={10} className="text-emerald-500" />
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 03. SYSTEM FOOTER */}
      <div className="border-border/10 mt-12 border-t pt-8 text-center">
        <p className="text-text-muted text-[9px] font-black tracking-[0.5em] uppercase italic opacity-20">
          Neural_Engine_Operational // Agent_Ready
        </p>
      </div>

      {/* Decorative Grid Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
});

AgentCommandCenter.displayName = "AgentCommandCenter";
