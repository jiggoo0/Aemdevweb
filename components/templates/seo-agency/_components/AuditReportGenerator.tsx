"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * @component AuditReportGenerator
 * @description ระบบจำลองการตรวจสุขภาพเว็บไซต์ (SEO Audit Simulator)
 * เพื่อดึงดูด Lead คุณภาพสูงด้วยข้อมูลเทคนิค
 */
export const AuditReportGenerator = () => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [progress, setProgress] = useState(0);

  // [LOGIC]: ระบบจำลองการ Scan (Scanning Simulation)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === "scanning") {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStatus("completed"), 500);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 400);
    }
    return () => clearInterval(interval);
  }, [status]);

  const handleStartScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus("scanning");
    setProgress(0);
  };

  return (
    <section className="container mx-auto px-4 py-32">
      <div
        className={cn(
          "relative overflow-hidden border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)] transition-all duration-700",
          "rounded-[var(--radius)]",
          status === "scanning" ? "shadow-glow-sm border-[var(--brand-primary)]/50" : "",
        )}
      >
        {/* --- 1. Blueprint Grid Decor --- */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 p-8 md:p-16">
          <AnimatePresence mode="wait">
            {/* --- STATE: IDLE (Input Stage) --- */}
            {status === "idle" && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mx-auto max-w-3xl space-y-10 text-center"
              >
                <div className="space-y-4">
                  <p className="font-mono text-[10px] font-black tracking-[0.4em] text-[var(--brand-primary)] uppercase italic">
                    // Domain_Feasibility_Check
                  </p>
                  <h2 className="font-[family-name:var(--font-primary)] text-4xl leading-none font-black uppercase italic md:text-6xl">
                    วิเคราะห์ศักยภาพ <br /> โดเมนของคุณฟรี
                  </h2>
                  <p className="text-lg italic opacity-60">
                    ป้อน URL เว็บไซต์ของคุณเพื่อเริ่มกระบวนการตรวจสอบโครงสร้างเชิงเทคนิค
                  </p>
                </div>

                <form onSubmit={handleStartScan} className="group relative mx-auto max-w-2xl">
                  <input
                    type="url"
                    required
                    placeholder="https://your-website.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-main)] px-8 py-6 pl-14 text-xl italic transition-all outline-none focus:border-[var(--brand-primary)]"
                  />
                  <div className="absolute top-1/2 left-5 -translate-y-1/2 text-[var(--brand-primary)]">
                    <IconRenderer name="Globe" size={24} />
                  </div>
                  <div className="mt-6">
                    <Button
                      type="submit"
                      variant="specialist"
                      size="lg"
                      className="h-16 w-full text-lg tracking-widest uppercase italic"
                    >
                      เริ่มการ Scan ระบบ (Start Audit)
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* --- STATE: SCANNING (Processing Stage) --- */}
            {status === "scanning" && (
              <motion.div
                key="scanning"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12 py-10 text-center"
              >
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-4 border-dashed border-[var(--brand-primary)]/30"
                  />
                  <IconRenderer
                    name="Search"
                    size={48}
                    className="animate-pulse text-[var(--brand-primary)]"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                    Analyzing_Structure: {Math.round(progress)}%
                  </h3>
                  <div className="mx-auto h-2 max-w-md overflow-hidden rounded-full border border-[var(--foreground)]/10 bg-[var(--foreground)]/5">
                    <motion.div
                      className="h-full bg-[var(--brand-primary)]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="animate-pulse font-mono text-[9px] tracking-[0.2em] uppercase opacity-40">
                    Scanning: Core_Web_Vitals | Semantic_HTML | Registry_Match
                  </p>
                </div>
              </motion.div>
            )}

            {/* --- STATE: COMPLETED (Result Stage) --- */}
            {status === "completed" && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
              >
                <div className="space-y-8">
                  <div className="rounded-[var(--radius)] border-[var(--border-width)] border-green-500/20 bg-green-500/10 p-6">
                    <div className="mb-4 flex items-center gap-4 text-green-500">
                      <IconRenderer name="CheckCircle" size={28} />
                      <span className="font-black uppercase italic">Analysis_Ready</span>
                    </div>
                    <p className="text-lg font-medium italic opacity-80">
                      เราพบโอกาสในการปรับปรุงโครงสร้างเว็บไซต์ของคุณ
                      เพื่อเพิ่มความสามารถในการแข่งขันบน Google
                    </p>
                  </div>

                  <div className="space-y-4">
                    <p className="font-mono text-[10px] tracking-widest uppercase opacity-40">
                      // Next_Action
                    </p>
                    <h3 className="text-3xl leading-tight font-black uppercase italic">
                      รับรายงานฉบับเต็ม <br /> พร้อมแผนยุทธศาสตร์ 2026
                    </h3>
                    <Button
                      variant="neo"
                      size="lg"
                      className="h-16 w-full px-10 text-lg uppercase italic md:w-auto"
                    >
                      ดาวน์โหลด PDF และปรึกษาฟรี
                    </Button>
                  </div>
                </div>

                {/* Simulated Results Card */}
                <div className="space-y-6 rounded-[var(--radius)] border-[var(--border-width)] border-white/10 bg-black p-8">
                  {[
                    { label: "Technical_Score", val: "68/100", color: "text-amber-500" },
                    { label: "Indexing_Speed", val: "Critical", color: "text-red-500" },
                    { label: "Mobile_Authority", val: "Optimal", color: "text-green-500" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-end justify-between border-b border-white/5 pb-4"
                    >
                      <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">
                        {item.label}
                      </span>
                      <span className={cn("text-2xl font-black italic", item.color)}>
                        {item.val}
                      </span>
                    </div>
                  ))}
                  <div className="pt-4 text-center">
                    <button
                      onClick={() => setStatus("idle")}
                      className="font-mono text-[10px] tracking-widest uppercase underline opacity-30 hover:opacity-100"
                    >
                      Re_Scan_New_Domain
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
