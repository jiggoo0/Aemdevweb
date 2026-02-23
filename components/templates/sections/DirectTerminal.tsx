"use client";
import React from "react";
import { Button } from "@/components/ui/Button";

interface DirectTerminalProps {
  mode?: "contact" | "health-check";
  province?: string;
  latency?: number;
}

export const DirectTerminal = ({
  mode = "contact",
  province = "Global",
  latency: providedLatency,
}: DirectTerminalProps) => {
  const [status, setStatus] = React.useState<"idle" | "running" | "complete">("idle");
  const [output, setOutput] = React.useState<string[]>([]);
  const [latency, setLatency] = React.useState<number>(providedLatency || 25);

  // [HYDRATION_SAFE]: Generate stable simulated latency on mount if not provided
  React.useEffect(() => {
    if (!providedLatency) {
      // Deterministic-like random based on province name length to avoid mismatch
      const base = province.length * 2;
      const variance = Math.floor(Math.abs(Math.sin(province.length) * 15));
      setLatency(10 + base + variance);
    }
  }, [providedLatency, province]);

  const runCheck = () => {
    setStatus("running");
    setOutput(["Initializing_Regional_Node...", `Target_Geo: ${province}`, "Measuring_Latency..."]);

    setTimeout(() => {
      setOutput((prev) => [...prev, `Ping: ${latency}ms`, "Checking_Mobile_Compatibility..."]);
      setTimeout(() => {
        setOutput((prev) => [
          ...prev,
          "Core_Web_Vitals: Optimized",
          "Success: Region_Node_Healthy",
        ]);
        setStatus("complete");
      }, 1000);
    }, 1000);
  };

  return (
    <div className="w-full space-y-6 rounded-[var(--radius)] border-[var(--border-width)] border-[var(--brand-primary)]/20 bg-black p-6 font-mono">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-500/50" />
        <div className="h-2 w-2 rounded-full bg-amber-500/50" />
        <div className="h-2 w-2 rounded-full bg-green-500/50" />
        <span className="ml-2 text-[9px] uppercase opacity-30">
          {mode === "health-check" ? `Geo_Terminal: ${province}` : "Communication_Terminal"}
        </span>
      </div>

      <div className="space-y-4">
        {mode === "health-check" ? (
          <div className="space-y-3">
            <div className="min-h-[100px] text-[10px] leading-relaxed text-emerald-500/80">
              {output.map((line, i) => (
                <p key={i}>
                  <span className="mr-2 opacity-30">❯</span>
                  {line}
                </p>
              ))}
              {status === "idle" && (
                <p className="italic opacity-40">
                  System_Idle. Ready to scan local infrastructure...
                </p>
              )}
            </div>
            <Button
              onClick={runCheck}
              disabled={status === "running"}
              variant="specialist"
              className="h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
            >
              {status === "complete" ? "Re-Scan_Node" : "Analyze_Health"}
            </Button>
          </div>
        ) : (
          <>
            <div className="flex gap-3 text-sm">
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
          </>
        )}
      </div>
    </div>
  );
};
