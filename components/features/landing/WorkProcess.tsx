/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v18.1.0 (PRODUCTION_HARDENED)
 * [STRATEGY]: Symmetry Protocol | GPU-Driven Reveal | Zero-CLS Execution
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 * [CHANGELOG]:
 * - Integrated 'h-full' wrappers for grid balance.
 * - Refined typography to match the v18.2.0 Global Aesthetic.
 * - Optimized Framer Motion props for smoother mobile performance.
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { IconName } from "@/types";

interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly thTitle: string;
  readonly description: string;
  readonly icon: IconName;
  readonly metric: string;
}

const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Strategy",
    thTitle: "วางแผนกลยุทธ์",
    description: "วิเคราะห์ธุรกิจและพฤติกรรมลูกค้า เพื่อวางโครงสร้างข้อมูลและ SEO ให้แม่นยำที่สุด",
    icon: "Search",
    metric: "Business_Logic_Verified",
  },
  {
    id: "02",
    title: "High-Performance Build",
    thTitle: "พัฒนาระบบพลังสูง",
    description: "พัฒนาด้วย Next.js 15 เน้นความเร็วระดับเสี้ยววินาที เพื่อ UX ที่ลื่นไหลระดับสากล",
    icon: "Code2",
    metric: "Speed_Core_100",
  },
  {
    id: "03",
    title: "Quality Assurance",
    thTitle: "ตรวจสอบคุณภาพ",
    description: "ตรวจสอบความปลอดภัยและ Performance อย่างละเอียด 100% ก่อนส่งมอบงานจริง",
    icon: "ShieldCheck",
    metric: "Zero_Vulnerability",
  },
  {
    id: "04",
    title: "Growth Optimization",
    thTitle: "ดูแลการเติบโต",
    description: "ติดตั้งระบบ Analytics ติดตามผล และเปลี่ยนผู้เข้าชมให้เป็นยอดขายที่วัดผลได้",
    icon: "TrendingUp",
    metric: "ROI_Dominance",
  },
];

const WorkProcess = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="process"
      className="relative container mx-auto flex w-full flex-col overflow-hidden px-4 py-24 md:px-8 lg:py-40"
    >
      {/* --- 01. STRATEGIC HEADER (Unified Aesthetic) --- */}
      <header className="border-border/40 mb-20 flex flex-col justify-between gap-12 border-b pb-12 md:mb-28 md:pb-16 lg:flex-row lg:items-end">
        <div className="max-w-4xl space-y-6">
          <div className="text-brand-primary flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
            <span
              suppressHydrationWarning
              className="font-mono text-[10px] font-black tracking-[0.4em] uppercase"
            >
              Execution_Framework_v{SITE_CONFIG.project.version}
            </span>
          </div>
          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Success <br />
            <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
              Blueprint.
            </span>
          </h2>
        </div>

        <div className="border-brand-primary/50 max-w-md border-l-[4px] pl-6 md:border-l-[6px] md:pl-10">
          <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-80 md:text-2xl">
            “เปลี่ยนโครงสร้างธุรกิจให้เป็น <br />
            <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-[8px]">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่ทรงประสิทธิภาพ”
          </p>
        </div>
      </header>

      {/* --- 02. PROCESS NODES (Symmetry Grid) --- */}
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {/* Connection Line: Hardware Accelerated */}
        <div
          className="via-brand-primary/20 absolute top-1/2 left-0 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent to-transparent lg:block"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group flex h-full w-full flex-col"
          >
            <div
              className={cn(
                "border-border bg-surface-card/60 relative z-10 flex h-full flex-col overflow-hidden border p-8 transition-all duration-700 md:p-10",
                "rounded-[2.5rem] backdrop-blur-xl",
                "hover:border-brand-primary/40 hover:shadow-glow-lg transform-gpu will-change-transform hover:-translate-y-2",
              )}
            >
              {/* Sequential ID Background */}
              <span
                suppressHydrationWarning
                className={cn(
                  "pointer-events-none absolute top-4 right-6 z-0 font-mono text-6xl font-black italic transition-all duration-700 md:text-8xl",
                  "text-border/10 group-hover:text-brand-primary/10",
                  !mounted && "opacity-0",
                )}
              >
                {step.id}
              </span>

              {/* Icon Matrix */}
              <div className="relative z-10 mb-10 flex items-center justify-between">
                <div className="border-border bg-surface-offset text-brand-primary group-hover:bg-brand-primary group-hover:shadow-glow flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-[12deg] group-hover:text-white md:h-16 md:w-16">
                  <IconRenderer name={step.icon} size={28} strokeWidth={2.5} />
                </div>
                <div className="bg-brand-primary/20 group-hover:bg-brand-primary h-2 w-2 rounded-full group-hover:animate-ping" />
              </div>

              {/* Information Hub */}
              <div className="relative z-10 flex-grow space-y-4">
                <div className="space-y-1">
                  <p className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase opacity-60">
                    Phase_0{index + 1}
                  </p>
                  <h3 className="text-text-primary group-hover:text-brand-primary text-xl font-black tracking-tight uppercase italic transition-colors md:text-2xl">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed font-medium italic opacity-80 md:text-base">
                  {step.description}
                </p>
              </div>

              {/* Metric Verification */}
              <footer className="border-border relative z-10 mt-10 border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-primary/10 flex h-5 w-5 items-center justify-center rounded-full">
                    <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 rounded-full" />
                  </div>
                  <span className="text-text-muted font-mono text-[9px] font-bold tracking-[0.3em] uppercase">
                    {step.metric}
                  </span>
                </div>
              </footer>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- 03. CONVERSION HUB --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mt-24 flex flex-col items-center text-center md:mt-40"
      >
        <div className="max-w-3xl space-y-12">
          <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            Ready to Build Your <br />
            <span className="text-brand-primary">Digital Legacy?</span>
          </h3>

          <div className="flex flex-col items-center gap-8">
            <Button
              asChild
              size="lg"
              variant="neo"
              className="group shadow-glow-lg h-16 w-full transform-gpu rounded-full px-12 transition-all duration-500 hover:scale-[1.03] active:scale-95 md:h-20 md:w-auto"
            >
              <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="mr-4 text-[11px] font-black tracking-[0.3em] uppercase">
                  เริ่มวางกลยุทธ์ทันที
                </span>
                <IconRenderer
                  name="ArrowRight"
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </a>
            </Button>
            <p className="text-text-muted animate-pulse font-mono text-[10px] font-black tracking-[0.5em] uppercase opacity-30">
              Protocol_Awaiting_Signal
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

WorkProcess.displayName = "WorkProcess";

export default memo(WorkProcess);
