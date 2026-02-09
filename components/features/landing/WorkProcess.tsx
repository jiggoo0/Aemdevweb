/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Vertical Signal Flow | Blueprint Geometry | Multi-Theme Logic
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

const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Strategy",
    thTitle: "วางแผนกลยุทธ์",
    description: "ผมจะเริ่มจากการแกะรอยธุรกิจและพฤติกรรมลูกค้าของคุณ เพื่อวางโครงสร้างเนื้อหาและ SEO ให้ตรงจุดที่สุดครับ",
    icon: "Search",
    metric: "Business Alignment",
  },
  {
    id: "02",
    title: "High-Performance Build",
    thTitle: "พัฒนาระบบพลังสูง",
    description: "ลงมือพัฒนาด้วย Next.js และเทคโนโลยีระดับท็อป เน้นความเร็วระดับเสี้ยววินาที เพื่อให้ลูกค้าใช้งานลื่นไหลไม่มีสะดุด",
    icon: "Cpu",
    metric: "Speed Score 100",
  },
  {
    id: "03",
    title: "Quality Assurance",
    thTitle: "ตรวจสอบคุณภาพ",
    description: "ตรวจสอบความเรียบร้อยของข้อมูล มาตรฐาน UX/UI และความปลอดภัย เพื่อให้คุณมั่นใจที่สุดก่อนส่งมอบงานจริง",
    icon: "ShieldCheck",
    metric: "Zero-Vulnerability",
  },
  {
    id: "04",
    title: "Growth Optimization",
    thTitle: "ดูแลการเติบโต",
    description: "ติดตั้งระบบติดตามผล (Analytics) เพื่อดูการเติบโต และเริ่มกระบวนการเปลี่ยนผู้เข้าชมให้กลายเป็นยอดขาย",
    icon: "TrendingUp",
    metric: "ROI Focus",
  },
] as const;

const WorkProcess = () => {
  return (
    <section id="process" className="relative flex w-full flex-col overflow-hidden bg-surface-main transition-colors duration-500">
      
      {/* 01. SECTION HEADER: สื่อสารทิศทางงาน */}
      <header className="border-border mb-20 flex flex-col justify-between gap-10 border-b pb-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-4">
          <div className="text-brand-primary flex items-center gap-3">
            <span className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full shadow-glow" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Process.Workflow_v{SITE_CONFIG.project.version}
            </span>
          </div>
          <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
            Steps to <br />{" "}
            <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
              Success.
            </span>
          </h2>
        </div>

        <div className="border-brand-primary/50 max-w-md border-l-4 pl-6 md:pl-8">
          <p className="text-text-secondary text-lg leading-relaxed font-medium italic">
            “เปลี่ยนไอเดียธุรกิจให้เป็น{" "}
            <span className="text-text-primary decoration-brand-primary underline underline-offset-8">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่ทำงานได้จริงและวัดผลได้”
          </p>
        </div>
      </header>

      {/* 02. PROCESS NODES: ขั้นตอนการทำงาน */}
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connector Line (Desktop) - ปรับตามธีม */}
        <div className="bg-border absolute top-12 left-0 hidden h-0.5 w-full lg:block opacity-30" />

        

        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className={cn(
               "border-border bg-surface-card hover:border-brand-primary/50 relative z-10 flex h-full flex-col rounded-[2rem] border p-8 transition-all duration-500",
               "hover:-translate-y-2 hover:shadow-glow"
            )}>
              {/* Step Indicator Node */}
              <div className="mb-8 flex items-center justify-between">
                <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-surface-main group-hover:shadow-glow">
                  <IconRenderer name={step.icon} size={28} />
                </div>
                <span className="text-border group-hover:text-brand-primary/20 font-mono text-5xl font-black transition-colors">
                  {step.id}
                </span>
              </div>

              {/* Content Node */}
              <div className="mb-8 flex-grow space-y-3">
                <h3 className="text-text-primary group-hover:text-brand-primary text-xl font-black tracking-tight uppercase transition-colors">
                  {step.title}
                </h3>
                <p className="text-text-muted text-[10px] font-bold tracking-[0.2em] uppercase">
                  {step.thTitle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed font-medium italic">
                  {step.description}
                </p>
              </div>

              {/* Metric Pulse Badge */}
              <div className="border-border mt-auto border-t pt-5">
                <div className="flex items-center gap-3">
                  <div className="bg-brand-primary h-2 w-2 animate-ping rounded-full" />
                  <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                    {step.metric}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 03. CONVERSION HUB */}
      <div className="mt-24 flex flex-col items-center text-center">
        <h3 className="text-text-primary mb-8 text-3xl font-black tracking-tighter uppercase italic md:text-5xl">
          พร้อมเริ่มก้าวแรกไปด้วยกันไหมครับ?
        </h3>

        <Button
          asChild
          size="lg"
          className="group bg-text-primary text-surface-main hover:bg-brand-primary h-16 rounded-full px-12 text-xs font-black tracking-widest uppercase transition-all hover:scale-105 hover:text-surface-main hover:shadow-glow"
        >
          <Link href={SITE_CONFIG.links.line}>
            <span className="mr-4">ปรึกษาแผนงานฟรี</span>
            <IconRenderer
              name="ArrowRight"
              size={18}
              className="transition-transform group-hover:translate-x-2"
            />
          </Link>
        </Button>

        <div className="mt-12 flex items-center gap-6 opacity-20">
          <div className="bg-text-muted h-px w-16" />
          <span className="text-text-muted font-mono text-[10px] font-bold tracking-[0.4em] uppercase">
            Specialist_Ready
          </span>
          <div className="bg-text-muted h-px w-16" />
        </div>
      </div>
    </section>
  );
};

export default memo(WorkProcess);
