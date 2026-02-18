/**
 * [FEATURE]: AUDIT_REPORT_GENERATOR v18.0.6 (STABILIZED_FINAL)
 * [STRATEGY]: Scanning Simulation | Conversion Hook | Named Export Alignment
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useEffect, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

/**
 * @component AuditReportGenerator
 * @description ระบบจำลองการตรวจสุขภาพเว็บไซต์ (SEO Audit Simulator)
 * [FIXED]: เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Knip Unused Exports และปรับปรุง Tree-shaking
 */
export const AuditReportGenerator = memo(() => {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [progress, setProgress] = useState(0);

  // [LOGIC]: Scanning Simulation - ประมวลผลแบบ Non-linear เพื่อความสมจริง
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (status === "scanning") {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setStatus("completed"), 600);
            return 100;
          }
          // สุ่มความเร็วเพื่อให้ดูเหมือนการประมวลผลจริง (Perceived Performance)
          const increment = Math.random() * (prev > 80 ? 5 : 15);
          return Math.min(prev + increment, 100);
        });
      }, 400);
    }

    return () => clearInterval(interval);
  }, [status]);

  const handleStartScan = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!url || !url.includes(".")) return;
      setStatus("scanning");
      setProgress(0);
    },
    [url],
  );

  return (
    <section id="audit-simulator" className="container mx-auto px-4 py-24 md:py-32">
      <div
        className={cn(
          "border-border/10 bg-surface-card relative overflow-hidden border transition-all duration-700",
          "rounded-[3rem] shadow-2xl",
          status === "scanning" ? "ring-brand-primary/30 ring-2" : "ring-1 ring-white/5",
        )}
      >
        {/* --- Blueprint Matrix Background --- */}
        <div
          className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(var(--text-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 p-8 md:p-20">
          <AnimatePresence mode="wait">
            {/* --- STAGE 01: IDLE (Target Acquisition) --- */}
            {status === "idle" && (
              <motion.div
                key="idle-node"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="mx-auto max-w-3xl space-y-12 text-center"
              >
                <div className="space-y-6">
                  <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-3 rounded-full border px-6 py-2">
                    <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_8px_var(--brand-primary)]" />
                    <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase italic">
                      Domain_Feasibility_Analysis
                    </span>
                  </div>
                  <h2 className="text-4xl leading-none font-black tracking-tighter uppercase italic md:text-7xl">
                    Scan your <br /> <span className="text-brand-primary">Competitor.</span>
                  </h2>
                  <p className="mx-auto max-w-xl text-lg font-medium italic opacity-60 md:text-xl">
                    ป้อน URL เว็บไซต์เพื่อเข้าถึงรายงานวิเคราะห์โครงสร้างพื้นฐาน{" "}
                    <br className="hidden md:block" />
                    และโอกาสในการทำอันดับเหนือคู่แข่ง
                  </p>
                </div>

                <form onSubmit={handleStartScan} className="relative mx-auto max-w-2xl space-y-6">
                  <div className="group relative">
                    <input
                      type="text"
                      required
                      placeholder="example-domain.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="bg-surface-main/50 focus:border-brand-primary focus:ring-brand-primary/10 w-full rounded-3xl border border-white/10 px-8 py-8 pl-16 text-xl font-bold italic transition-all outline-none focus:ring-4"
                    />
                    <div className="text-brand-primary/50 group-focus-within:text-brand-primary absolute top-1/2 left-6 -translate-y-1/2 transition-colors">
                      <IconRenderer name="Globe" size={28} />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="bg-text-primary text-surface-main hover:bg-brand-primary h-20 w-full rounded-3xl text-xl font-black tracking-[0.2em] uppercase italic transition-all duration-500"
                  >
                    เริ่มการ Audit ระบบ (Initialize)
                  </Button>
                </form>
              </motion.div>
            )}

            {/* --- STAGE 02: SCANNING (Intelligence Gathering) --- */}
            {status === "scanning" && (
              <motion.div
                key="scanning-node"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-16 py-12 text-center"
              >
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="border-brand-primary absolute inset-0 rounded-full border-b-2"
                  />
                  <div className="bg-surface-main absolute inset-4 flex items-center justify-center rounded-full border border-white/5">
                    <IconRenderer
                      name="Search"
                      size={48}
                      className="text-brand-primary animate-pulse"
                    />
                  </div>
                </div>

                <div className="mx-auto max-w-md space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-brand-primary font-mono text-3xl font-black italic">
                      {Math.round(progress)}%
                    </h3>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        className="bg-brand-primary h-full shadow-[0_0_15px_var(--brand-primary)]"
                        animate={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                  <p className="font-mono text-[9px] font-bold tracking-[0.3em] uppercase opacity-40">
                    Scanning: Core_Web_Vitals | Semantic_Mapping | Link_Equity
                  </p>
                </div>
              </motion.div>
            )}

            {/* --- STAGE 03: COMPLETED (Authority Insight) --- */}
            {status === "completed" && (
              <motion.div
                key="completed-node"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="grid grid-cols-1 items-center gap-12 md:gap-20 lg:grid-cols-2"
              >
                <div className="space-y-10">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-5 py-2 text-emerald-500">
                      <IconRenderer name="CheckCircle" size={20} />
                      <span className="font-mono text-[10px] font-black tracking-widest uppercase italic">
                        Analysis_Complete
                      </span>
                    </div>
                    <h3 className="text-4xl leading-none font-black uppercase italic md:text-6xl">
                      พบช่องโหว่ <br /> <span className="text-emerald-500">เชิงเทคนิค.</span>
                    </h3>
                    <p className="text-lg font-medium italic opacity-70">
                      เราตรวจพบจุดวิกฤตที่ทำให้เว็บไซต์ของคุณเสียเปรียบในการจัดอันดับ
                      ต้องการรายงานสรุปแนวทางแก้ไขระดับ Enterprise หรือไม่?
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button
                      size="lg"
                      className="bg-brand-primary h-16 rounded-2xl px-10 text-xs font-black tracking-widest uppercase italic"
                    >
                      รับรายงาน PDF ฉบับเต็ม
                    </Button>
                    <button
                      onClick={() => setStatus("idle")}
                      className="text-[10px] font-black tracking-widest uppercase opacity-30 transition-opacity hover:opacity-100"
                    >
                      [ Scan_New_Target ]
                    </button>
                  </div>
                </div>

                {/* Technical Scoreboard Card */}
                <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-black/40 p-10 backdrop-blur-xl">
                  {[
                    { label: "Technical_Health", val: "62/100", color: "text-amber-500" },
                    { label: "Indexing_Latency", val: "Critical", color: "text-red-500" },
                    { label: "Semantic_Score", val: "Optimal", color: "text-emerald-500" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-white/5 pb-6 last:border-0 last:pb-0"
                    >
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-40">
                        {item.label}
                      </span>
                      <span className={cn("text-2xl font-black italic", item.color)}>
                        {item.val}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
});

AuditReportGenerator.displayName = "AuditReportGenerator";
