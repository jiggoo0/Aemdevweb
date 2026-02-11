/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v17.5.1 (STABILIZED)
 * [STRATEGY]: Vertical Signal Flow | Blueprint Geometry | Zero-Jitter UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";
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

const WorkProcess = () => {
  return (
    <section
      id="process"
      className="relative container mx-auto flex w-full flex-col overflow-hidden px-4 md:px-6"
    >
      {/* --- 01. SECTION HEADER --- */}
      <header className="border-border mb-32 flex flex-col justify-between gap-12 border-b pb-16 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-6">
          <div className="text-brand-primary flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              Execution_Framework_v{SITE_CONFIG.project.version}
            </span>
          </div>
          <h2 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Steps to <br />
            <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
              Success.
            </span>
          </h2>
        </div>

        <div className="border-brand-primary/50 max-w-md border-l-[6px] pl-10">
          <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-80 md:text-2xl">
            “เปลี่ยนไอเดียธุรกิจให้เป็น <br />
            <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-[12px]">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่วัดผลได้จริง”
          </p>
        </div>
      </header>

      {/* --- 02. PROCESS NODES: Signal Flow Grid --- */}
      <div className="relative grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Signal Flow Connector (Desktop Only) */}
        <div
          className="from-brand-primary/20 via-brand-primary/40 to-brand-primary/20 absolute top-20 left-0 hidden h-px w-full bg-gradient-to-r lg:block"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative"
          >
            <div
              className={cn(
                "border-border bg-surface-card/60 hover:border-brand-primary/40 relative z-10 flex h-full flex-col overflow-hidden rounded-[2.5rem] border p-10 backdrop-blur-xl transition-all duration-700",
                "hover:shadow-glow hover:-translate-y-4",
              )}
            >
              {/* Step ID Background (Ambient) */}
              <span className="text-border/5 group-hover:text-brand-primary/10 pointer-events-none absolute top-2 -left-4 z-0 font-sans text-[10rem] leading-none font-black transition-all duration-700">
                {step.id}
              </span>

              {/* Icon Matrix */}
              <div className="relative z-10 mb-12 flex items-center justify-between">
                <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow border-border flex h-16 w-16 items-center justify-center rounded-[1.25rem] border transition-all duration-500 group-hover:rotate-[10deg]">
                  <IconRenderer name={step.icon} size={30} strokeWidth={2.5} />
                </div>
                <div className="bg-brand-primary h-1.5 w-1.5 rounded-full opacity-30 group-hover:animate-ping group-hover:opacity-100" />
              </div>

              {/* Textual Infrastructure */}
              <div className="relative z-10 mb-10 flex-grow space-y-4">
                <div className="space-y-1">
                  <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-50">
                    Phase_0{index + 1}
                  </p>
                  <h3 className="text-text-primary group-hover:text-brand-primary text-2xl font-black tracking-tight uppercase italic transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-base leading-relaxed font-medium italic opacity-80">
                  {step.description}
                </p>
              </div>

              {/* Metric Node */}
              <div className="border-border relative z-10 mt-auto border-t pt-6">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-primary/20 flex h-5 w-5 items-center justify-center rounded-full">
                    <div className="bg-brand-primary h-1.5 w-1.5 rounded-full" />
                  </div>
                  <span className="text-text-muted font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
                    {step.metric}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- 03. CONVERSION HUB --- */}
      <div className="mt-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-12"
        >
          <h3 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            พร้อมเริ่มก้าวแรก <br /> ไปกับผู้เชี่ยวชาญหรือยังครับ?
          </h3>

          <div className="flex flex-col items-center gap-8">
            <Button
              asChild
              size="lg"
              className="group bg-text-primary text-surface-main hover:bg-brand-primary hover:shadow-glow h-20 rounded-full px-16 transition-all duration-500 hover:scale-110 active:scale-95"
            >
              <Link href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
                <span className="mr-4 text-xs font-black tracking-[0.4em] uppercase">
                  เริ่มวางกลยุทธ์ฟรี
                </span>
                <IconRenderer
                  name="ArrowRight"
                  size={20}
                  className="transition-transform group-hover:translate-x-2"
                />
              </Link>
            </Button>

            <p className="text-text-muted font-mono text-[10px] font-black tracking-[0.5em] uppercase opacity-30">
              System_Awaiting_Signal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(WorkProcess);
