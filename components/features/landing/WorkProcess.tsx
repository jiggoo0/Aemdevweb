/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v17.9.9 (PRODUCTION_STABILIZED)
 * [STRATEGY]: Two-Pass Rendering | Typed Routes Resolution | Zero-Jitter UI
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { IconName } from "@/components/ui/IconRenderer";

// --- 01. DATA INFRASTRUCTURE ---
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
  // [STRATEGY]: Two-Pass Rendering เพื่อล้างข้อพิพาทระหว่าง Server/Client HTML
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section
      id="process"
      className="relative container mx-auto flex w-full flex-col overflow-hidden px-4 py-24 md:px-6 lg:py-32"
    >
      {/* --- 01. SECTION HEADER --- */}
      <header className="border-border mb-24 flex flex-col justify-between gap-12 border-b pb-12 md:mb-32 md:pb-16 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-6">
          <div className="text-brand-primary flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
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

      {/* --- 02. PROCESS NODES: Signal Flow Grid --- */}
      <div className="relative grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-8">
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
                "border-border bg-surface-card/60 hover:border-brand-primary/40 relative z-10 flex h-full flex-col overflow-hidden rounded-[2.5rem] border p-8 backdrop-blur-xl transition-all duration-700 md:p-10",
                "hover:shadow-glow transform-gpu will-change-transform hover:-translate-y-4",
              )}
            >
              {/* [FIXED NODE]: พื้นหลังตัวเลขลำดับ (Client-Side Only Visibility) */}
              <span
                suppressHydrationWarning
                className="text-border/5 group-hover:text-brand-primary/10 pointer-events-none absolute top-2 -left-4 z-0 font-sans text-[8rem] leading-none font-black transition-all duration-700 md:text-[10rem]"
                style={{
                  opacity: isClient ? undefined : 0,
                  visibility: isClient ? "visible" : "hidden",
                }}
              >
                {step.id}
              </span>

              {/* Icon Matrix */}
              <div className="relative z-10 mb-8 flex items-center justify-between md:mb-12">
                <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary group-hover:text-surface-main group-hover:shadow-glow border-border flex h-14 w-14 items-center justify-center rounded-[1.25rem] border transition-all duration-500 group-hover:rotate-[10deg] md:h-16 md:w-16">
                  <IconRenderer
                    name={step.icon}
                    size={28}
                    strokeWidth={2.5}
                    className="md:h-8 md:w-8"
                  />
                </div>
                <div className="bg-brand-primary h-1.5 w-1.5 rounded-full opacity-30 group-hover:animate-ping group-hover:opacity-100" />
              </div>

              {/* Textual Content */}
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

              {/* Metric Verification */}
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
      <div className="mt-24 flex flex-col items-center text-center md:mt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl space-y-10 md:space-y-12"
        >
          <h3 className="text-text-primary text-3xl font-black tracking-tighter uppercase italic md:text-6xl lg:text-7xl">
            พร้อมเริ่มก้าวแรก <br /> ไปกับผู้เชี่ยวชาญหรือยังครับ?
          </h3>

          <div className="flex flex-col items-center gap-6 md:gap-8">
            {/* [FIXED]: ใช้แท็ก <a> ร่วมกับ target="_blank" สำหรับลิงก์ภายนอก เพื่อแก้ปัญหา Next.js Typed Routes (TS2322) */}
            <Button
              asChild
              size="lg"
              className="group bg-text-primary text-surface-main hover:bg-brand-primary hover:shadow-glow h-16 w-full rounded-full px-10 transition-all duration-500 hover:scale-110 active:scale-95 md:h-20 md:w-auto md:px-16"
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

            <p className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-30 md:text-[10px] md:tracking-[0.5em]">
              System_Awaiting_Signal
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(WorkProcess);
