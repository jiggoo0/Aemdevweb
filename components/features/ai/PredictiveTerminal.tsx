/**
 * [FEATURE COMPONENT]: PREDICTIVE_TERMINAL v1.0.0
 * [STRATEGY]: Client-Side Interaction | Real-time AI Stream | ROI Visualization
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { executeAiAnalysis } from "@/lib/ai/actions";
import { toast } from "sonner";

interface AnalysisResults {
  leakage: number;
  growthOpportunity: number;
  performanceScore: number;
}

export default function PredictiveTerminal() {
  const [url, setUrl] = useState("");
  const [revenue, setRevenue] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"idle" | "running" | "completed">("idle");
  const [output, setOutput] = useState<string[]>([]);
  const [results, setResults] = useState<AnalysisResults | null>(null);

  const logEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [output]);

  const runAnalysis = async () => {
    if (!query) {
      toast.error("กรุณาระบุสิ่งที่ต้องการให้ AI วิเคราะห์");
      return;
    }

    setStatus("running");
    setOutput([
      "❯ Initializing AI Strategy Agent...",
      "❯ Connection established with Neural Core.",
    ]);

    // Simulated steps for "Authenticity"
    const steps = [
      "🔍 Scanning Target Infrastructure...",
      "📊 Measuring Market Saturation...",
      "⚖️ Analyzing Revenue Leakage Nodes...",
      "🤖 Generating Predictive ROI Model...",
    ];

    for (const step of steps) {
      await new Promise((r) => setTimeout(r, 800));
      setOutput((prev) => [...prev, `❯ ${step}`]);
    }

    const response = await executeAiAnalysis({
      customerQuery: query,
      targetUrl: url,
      currentRevenue: Number(revenue) || 0,
    });

    if (response.success && response.data) {
      setOutput((prev) => [
        ...prev,
        "✨ Analysis Sync Complete.",
        `
[ADVICE]: ${response.data.answer}`,
      ]);
      setResults(response.data.analysisData);
      setStatus("completed");
    } else {
      toast.error(response.error);
      setStatus("idle");
    }
  };

  return (
    <div className="grid min-h-[550px] grid-cols-1 lg:grid-cols-12">
      {/* LEFT: INPUT CONSOLE */}
      <div className="border-border/10 space-y-10 border-b p-8 md:p-12 lg:col-span-5 lg:border-r lg:border-b-0">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
              Target_URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-business.com"
              className="bg-surface-offset border-border/20 focus:border-brand-primary/50 w-full rounded-xl border px-5 py-4 text-sm font-bold transition-all outline-none"
              disabled={status === "running"}
            />
          </div>
          <div className="space-y-2">
            <label className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
              Monthly_Revenue (THB)
            </label>
            <input
              type="number"
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              placeholder="ยอดขายต่อเดือนปัจจุบัน"
              className="bg-surface-offset border-border/20 focus:border-brand-primary/50 w-full rounded-xl border px-5 py-4 text-sm font-bold transition-all outline-none"
              disabled={status === "running"}
            />
          </div>
          <div className="space-y-2">
            <label className="text-brand-primary font-mono text-[10px] font-black tracking-widest uppercase">
              Consultation_Query
            </label>
            <textarea
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="เช่น 'อยากขยายสาขาไปต่างจังหวัดต้องเริ่มยังไง?'"
              className="bg-surface-offset border-border/20 focus:border-brand-primary/50 w-full resize-none rounded-xl border px-5 py-4 text-sm font-bold transition-all outline-none"
              disabled={status === "running"}
            />
          </div>
        </div>

        <Button
          onClick={runAnalysis}
          disabled={status === "running"}
          className="shadow-pro group h-16 w-full text-[11px] font-black tracking-widest uppercase italic"
        >
          {status === "running" ? (
            <IconRenderer name="Loader2" className="mr-3 animate-spin" />
          ) : (
            <IconRenderer name="Zap" className="mr-3 transition-transform group-hover:rotate-12" />
          )}
          {status === "running" ? "Processing..." : "Execute AI Analysis"}
        </Button>
      </div>

      {/* RIGHT: DATA FEED */}
      <div className="relative flex flex-col overflow-hidden bg-black/5 p-8 font-mono md:p-12 lg:col-span-7">
        <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.02]" />

        <div className="scrollbar-thin scrollbar-thumb-brand-primary/20 relative z-10 max-h-[400px] flex-1 overflow-y-auto pr-4">
          <div className="border-brand-primary/10 bg-surface-card/80 sticky top-0 mb-6 flex items-center gap-3 border-b pb-4 backdrop-blur-md">
            <IconRenderer name="Activity" className="text-brand-primary" size={18} />
            <span className="text-brand-primary text-[10px] font-bold tracking-widest uppercase">
              Live_Diagnostics_Output
            </span>
          </div>

          <div className="text-text-secondary space-y-4 text-[11px] leading-relaxed">
            {output.length === 0 && (
              <p className="italic opacity-40">
                // Awaiting System Command... <br /> // พร้อมรับข้อมูลเพื่อเริ่มการวิเคราะห์เชิงลึก
              </p>
            )}
            {output.map((line, i) => (
              <p
                key={i}
                className={cn(
                  "animate-in slide-in-from-left-1 duration-300",
                  line.startsWith("✨") ? "font-bold text-emerald-500" : "",
                )}
              >
                {line}
              </p>
            ))}
            <div ref={logEndRef} />
          </div>
        </div>

        {/* RESULTS HUB */}
        <div
          className={cn(
            "border-border/10 mt-8 border-t pt-8 transition-all duration-1000",
            status === "completed"
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-20 grayscale",
          )}
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-surface-card border-border/20 shadow-pro-sm rounded-2xl border p-6">
              <span className="text-brand-primary mb-2 block text-[8px] font-black tracking-[0.3em] uppercase">
                Growth_Potential
              </span>
              <span className="text-2xl font-black italic tabular-nums">
                {results ? `฿${results.growthOpportunity.toLocaleString()}` : "฿0.00"}
              </span>
            </div>
            <div className="bg-surface-card border-border/20 shadow-pro-sm rounded-2xl border p-6">
              <span className="text-brand-primary mb-2 block text-[8px] font-black tracking-[0.3em] uppercase">
                System_Efficiency
              </span>
              <span className="text-2xl font-black italic tabular-nums">
                {results ? `${results.performanceScore}/100` : "--/100"}
              </span>
            </div>
          </div>

          {status === "completed" && (
            <div className="mt-6 text-center">
              <p className="animate-pulse text-[9px] font-bold tracking-widest text-emerald-500 uppercase">
                Verified: แผนงาน ROI สูงสุดพร้อมส่งมอบทาง Line OA
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
