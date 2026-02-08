/**
 * [FEATURE COMPONENT]: WORK_PROCESS_SYSTEM v17.0.1 (BLUEPRINT_FLOW)
 * [STRATEGY]: Vertical Signal Flow | Blueprint Geometry | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

// --- Data Structure ---
const PROCESS_STEPS = [
  {
    id: "01",
    title: "Discovery & Strategy",
    thTitle: "วางแผนกลยุทธ์",
    description:
      "ผมจะเริ่มจากการแกะรอยธุรกิจและพฤติกรรมลูกค้าของคุณ เพื่อวางโครงสร้างเนื้อหาและ SEO ให้ตรงจุดที่สุดครับ",
    icon: "Search", // ใช้ Search หรือ Compass
    metric: "Business Alignment",
  },
  {
    id: "02",
    title: "High-Performance Build",
    thTitle: "พัฒนาระบบพลังสูง",
    description:
      "ลงมือพัฒนาด้วย Next.js และเทคโนโลยีระดับท็อป เน้นความเร็วระดับเสี้ยววินาที เพื่อให้ลูกค้าใช้งานลื่นไหลไม่มีสะดุด",
    icon: "Cpu",
    metric: "Speed Score 100",
  },
  {
    id: "03",
    title: "Quality Assurance",
    thTitle: "ตรวจสอบคุณภาพ",
    description:
      "ตรวจสอบความเรียบร้อยของข้อมูล มาตรฐาน UX/UI และความปลอดภัย เพื่อให้คุณมั่นใจที่สุดก่อนส่งมอบงานจริง",
    icon: "ShieldCheck",
    metric: "Zero-Vulnerability",
  },
  {
    id: "04",
    title: "Growth Optimization",
    thTitle: "ดูแลการเติบโต",
    description:
      "ติดตั้งระบบติดตามผล (Analytics) เพื่อดูการเติบโต และเริ่มกระบวนการเปลี่ยนผู้เข้าชมให้กลายเป็นยอดขาย",
    icon: "TrendingUp",
    metric: "ROI Focus",
  },
] as const;

const WorkProcess = () => {
  return (
    <section id="process" className="relative flex w-full flex-col overflow-hidden">
      {/* 01. SECTION HEADER: สื่อสารทิศทางงาน */}
      <header className="border-surface-muted/30 mb-20 flex flex-col justify-between gap-10 border-b pb-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl space-y-4">
          <div className="text-brand-primary flex items-center gap-3">
            <span className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">
              Process.Workflow_v17
            </span>
          </div>
          <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase md:text-6xl lg:text-7xl">
            Steps to <br />{" "}
            <span className="from-brand-primary bg-gradient-to-r to-emerald-400 bg-clip-text text-transparent">
              Success.
            </span>
          </h2>
        </div>

        <div className="border-brand-primary/50 max-w-md border-l-2 pl-6">
          <p className="text-text-secondary text-lg leading-relaxed font-medium">
            “เปลี่ยนไอเดียธุรกิจให้เป็น{" "}
            <span className="text-text-primary decoration-brand-primary/50 underline underline-offset-4">
              เครื่องจักรทำเงิน
            </span>{" "}
            ที่ทำงานได้จริงและวัดผลได้”
          </p>
        </div>
      </header>

      {/* 02. PROCESS NODES: ขั้นตอนการทำงาน */}
      <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Connector Line (Desktop) */}
        <div className="bg-surface-muted/30 absolute top-12 left-0 hidden h-0.5 w-full lg:block" />

        {PROCESS_STEPS.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative"
          >
            <div className="border-surface-muted bg-surface-main hover:border-brand-primary/50 relative z-10 flex h-full flex-col rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
              {/* Step Indicator */}
              <div className="mb-6 flex items-center justify-between">
                <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary flex h-12 w-12 items-center justify-center rounded-xl transition-colors group-hover:text-black">
                  <IconRenderer name={step.icon} size={24} />
                </div>
                <span className="text-surface-muted group-hover:text-brand-primary/20 font-mono text-4xl font-black">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <div className="mb-6 flex-grow">
                <h3 className="text-text-primary group-hover:text-brand-primary mb-1 text-xl font-bold tracking-tight uppercase">
                  {step.title}
                </h3>
                <p className="text-text-muted mb-3 text-xs font-bold tracking-wider uppercase">
                  {step.thTitle}
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Metric Badge */}
              <div className="border-surface-muted/50 mt-auto border-t pt-4">
                <div className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                  <span className="text-text-muted font-mono text-[10px] font-bold tracking-widest uppercase">
                    {step.metric}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 03. CTA FOOTER */}
      <div className="mt-20 flex flex-col items-center text-center">
        <h3 className="text-text-primary mb-6 text-2xl font-black tracking-tight uppercase md:text-4xl">
          พร้อมเริ่มก้าวแรกไปด้วยกันไหมครับ?
        </h3>

        <Button
          asChild
          size="lg"
          className="group bg-text-primary text-surface-main hover:bg-brand-primary h-16 rounded-full px-10 text-xs font-bold tracking-widest uppercase hover:text-black md:text-sm"
        >
          <Link href={SITE_CONFIG.links.line}>
            <span className="mr-3">ปรึกษาแผนงานฟรี</span>
            <IconRenderer
              name="ArrowRight"
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </Button>

        <div className="mt-8 flex items-center gap-4 opacity-30">
          <div className="bg-text-muted h-px w-12" />
          <span className="text-text-muted font-mono text-[10px] tracking-[0.3em] uppercase">
            Specialist_Ready
          </span>
          <div className="bg-text-muted h-px w-12" />
        </div>
      </div>
    </section>
  );
};

export default memo(WorkProcess);
