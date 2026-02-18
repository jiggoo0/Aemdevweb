/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v18.0.5 (STABILIZED)
 * [STRATEGY]: Adaptive Blur | GPU Accelerated Transitions | Hydration Guard
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/IconRenderer";

interface ProcessStep {
  readonly id: string;
  readonly title: string;
  readonly thTitle: string;
  readonly description: string;
  readonly icon: IconName;
  readonly metric: string;
}

/**
 * [DATA_NODE]: PROCESS_STEPS
 * ย้ายข้อมูลที่เกี่ยวข้องกับธุรกิจออกจากการเรนเดอร์หลักเพื่อความคลีนของ Logic
 */
const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    id: "01",
    title: "Discovery & Strategy",
    thTitle: "วางแผนกลยุทธ์",
    description: "แกะรอยธุรกิจและพฤติกรรมลูกค้า เพื่อวางโครงสร้างเนื้อหาและ SEO ให้ตรงจุดที่สุด",
    icon: "Search",
    metric: "Business_Logic_Verified",
  },
  {
    id: "02",
    title: "High-Performance Build",
    thTitle: "พัฒนาระบบพลังสูง",
    description:
      "พัฒนาด้วย Next.js เน้นความเร็วระดับเสี้ยววินาที เพื่อการใช้งานที่ลื่นไหลระดับสากล",
    icon: "Cpu",
    metric: "Speed_Core_100",
  },
  {
    id: "03",
    title: "Quality Assurance",
    thTitle: "ตรวจสอบคุณภาพ",
    description: "ตรวจสอบ UX/UI และความปลอดภัยอย่างละเอียดถี่ถ้วนก่อนส่งมอบงานจริง",
    icon: "ShieldCheck",
    metric: "Zero_Vulnerability",
  },
  {
    id: "04",
    title: "Growth Optimization",
    thTitle: "ดูแลการเติบโต",
    description: "ติดตั้งระบบ Analytics ติดตามผล และเริ่มกระบวนการเปลี่ยนผู้เข้าชมให้เป็นยอดขาย",
    icon: "TrendingUp",
    metric: "ROI_Dominance",
  },
];

/**
 * @component WorkProcess
 * @description แสดงขั้นตอนการทำงานด้วยเทคนิคแอนิเมชันขั้นสูงที่ไม่กระทบต่อ Core Web Vitals
 */
const WorkProcess = () => {
  const [mounted, setMounted] = useState(false);

  // [HYDRATION_GUARD]: ป้องกันปัญหา Mismatch ระหว่าง Server และ Client
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="process"
      className="relative container mx-auto flex w-full flex-col overflow-hidden px-4 py-24 md:px-6 lg:py-32"
    >
      {/* --- 01. STRATEGIC HEADER --- */}
      <header className="border-border mb-20 flex flex-col justify-between gap-12 border-b pb-12 md:mb-28 md:pb-16 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-6">
          <div className="text-brand-primary flex items-center gap-4">
            <div className="bg-brand-primary h-2 w-2 animate-pulse rounded-full shadow-[0_0_15px_var(--brand-primary)]" />
            <span
              suppressHydrationWarning
              className="font-mono text-[9px] font-black tracking-[0.4em] uppercase md:text-[10px]"
            >
              Execution_Framework_v{SITE_CONFIG.project.version}
            </span>
          </div>
          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-7xl lg:text-9xl">
            Steps to <br />
            <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
              Success.
            </span>
          </h2>
        </div>

        <div className="border-brand-primary/50 max-w-md border-l-[4px] pl-6 md:border-l-[6px] md:pl-10">
          <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-80 md:text-2xl">
            “เปลี่ยนไอเดียธุรกิจให้เป็น <br />
            <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-[8px] md:underline-offset-[12px]">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่วัดผลได้จริง”
          </p>
        </div>
      </header>

      {/* --- 02. PROCESS NODES --- */}
      <div className="relative grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8">
        {/* Visual Connector: GPU Optimized */}
        <div
          className="from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 absolute top-20 left-0 hidden h-px w-full bg-gradient-to-r lg:block"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div
              className={cn(
                "border-border bg-surface-card/60 relative z-10 flex h-full flex-col overflow-hidden border p-8 transition-all duration-700 md:p-10",
                "rounded-[2rem] md:rounded-[2.5rem]",
                "hover:border-brand-primary/40 transform-gpu will-change-transform hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(var(--brand-primary-rgb),0.1)]",
                "backdrop-blur-md md:backdrop-blur-xl",
              )}
            >
              {/* Background Identifier */}
              <span
                suppressHydrationWarning
                className={cn(
                  "pointer-events-none absolute top-4 right-6 z-0 font-mono text-5xl font-black italic transition-all duration-700 md:text-7xl",
                  "text-border/10 group-hover:text-brand-primary/20",
                  !mounted && "opacity-0",
                )}
              >
                {step.id}
              </span>

              {/* Icon Container */}
              <div className="relative z-10 mb-8 flex items-center justify-between md:mb-12">
                <div className="border-border bg-surface-offset text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main flex h-14 w-14 items-center justify-center rounded-[1.25rem] border transition-all duration-500 group-hover:rotate-[10deg] md:h-16 md:w-16">
                  <IconRenderer
                    name={step.icon}
                    size={28}
                    strokeWidth={2.5}
                    className="md:h-8 md:w-8"
                  />
                </div>
                <div className="bg-brand-primary h-1.5 w-1.5 rounded-full opacity-30 group-hover:animate-ping group-hover:opacity-100" />
              </div>

              {/* Content Hub */}
              <div className="relative z-10 mb-8 flex-grow space-y-3 md:mb-10 md:space-y-4">
                <div className="space-y-1">
                  <p className="text-text-muted font-mono text-[8px] font-black tracking-[0.3em] uppercase opacity-50 md:text-[9px]">
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

              {/* Integrity Metric */}
              <div className="border-border relative z-10 mt-auto border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-primary/20 flex h-4 w-4 items-center justify-center rounded-full md:h-5 md:w-5">
                    <div className="bg-brand-primary h-1 w-1 rounded-full md:h-1.5 md:w-1.5" />
                  </div>
                  <span className="text-text-muted font-mono text-[8px] font-bold tracking-[0.3em] uppercase md:text-[10px]">
                    {step.metric}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- 03. CONVERSION GATEWAY --- */}
      <div className="mt-20 flex flex-col items-center text-center md:mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-10 md:space-y-12"
        >
          <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            พร้อมเริ่มก้าวแรก <br /> ไปกับผู้เชี่ยวชาญหรือยังครับ?
          </h3>

          <div className="flex flex-col items-center gap-6 md:gap-8">
            <Button
              asChild
              size="lg"
              className="group bg-text-primary text-surface-main hover:bg-brand-primary h-16 w-full transform-gpu rounded-full px-10 shadow-2xl transition-all duration-500 hover:scale-105 md:h-20 md:w-auto md:px-16"
            >
              <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="mr-4 text-[10px] font-black tracking-[0.3em] uppercase md:text-xs md:tracking-[0.4em]">
                  เริ่มวางกลยุทธ์ฟรี
                </span>
                <IconRenderer
                  name="ArrowRight"
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </a>
            </Button>
            <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-30 md:text-[10px]">
              System_Awaiting_Signal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

WorkProcess.displayName = "WorkProcess";

export default memo(WorkProcess);
