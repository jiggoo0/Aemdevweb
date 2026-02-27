"use client";
import React from "react";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/constants/site-config";

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
      const base = province.length * 2;
      const variance = Math.floor(Math.abs(Math.sin(province.length) * 15));
      setLatency(10 + base + variance);
    }
  }, [providedLatency, province]);

  const runCheck = () => {
    setStatus("running");
    setOutput(["Initializing_Regional_Node...", `Target_Geo: ${province}`, "Measuring_Latency..."]);

    setTimeout(() => {
      setOutput((prev) => [...prev, `Ping: ${latency}ms`, "Securing_Endpoint_v18..."]);
      setTimeout(() => {
        setOutput((prev) => [
          ...prev,
          "Firewall: Active",
          "SSL_Protocol: Hardened",
          "Identity_Sync: Verified",
          "Success: Node_Security_100%",
        ]);
        setStatus("complete");
      }, 1200);
    }, 1000);
  };

  return (
    <div className="border-border/50 bg-surface-card shadow-pro-xl w-full space-y-6 rounded-[var(--radius)] p-6 font-mono">
      <div className="border-border/10 flex items-center justify-between border-b pb-4">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-amber-500/50" />
          <div className="h-2 w-2 rounded-full bg-emerald-500/50" />
          <span className="text-text-muted ml-2 text-[9px] uppercase opacity-30">
            {mode === "health-check" ? `Geo_Terminal: ${province}` : "Communication_Terminal"}
          </span>
        </div>
        {status === "complete" && (
          <span className="text-brand-primary animate-pulse text-[8px] font-black tracking-widest uppercase">
            // Authenticated
          </span>
        )}
      </div>

      <div className="space-y-4">
        {mode === "health-check" ? (
          <div className="space-y-3">
            <div className="min-h-[120px] text-[10px] leading-relaxed">
              {output.map((line, i) => (
                <p key={i} className="text-text-secondary">
                  <span className="text-brand-primary mr-2 opacity-30">❯</span>
                  {line}
                </p>
              ))}
              {status === "idle" && (
                <p className="text-text-muted italic opacity-40">
                  System_Idle. Ready to scan regional infrastructure...
                </p>
              )}
            </div>
            {status === "complete" ? (
              <Button
                asChild
                variant="specialist"
                className="h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
              >
                <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                  Connect_With_Specialist
                </a>
              </Button>
            ) : (
              <Button
                onClick={runCheck}
                disabled={status === "running"}
                variant="specialist"
                className="h-12 w-full text-[10px] font-black tracking-[0.2em] uppercase"
              >
                {status === "running" ? "Scanning..." : "Analyze_Health"}
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="flex gap-3 text-sm">
              <span className="text-brand-primary font-bold">❯</span>
              <input
                type="text"
                placeholder="Enter_Email_For_Project_Quote..."
                className="text-text-primary w-full border-none bg-transparent italic outline-none placeholder:opacity-20"
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
