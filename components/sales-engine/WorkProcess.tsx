/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * [TYPE DEFINITIONS]
 */
interface ProcessStep {
  title: string;
  desc: string;
  icon: LucideIcon;
  color: string;
  hoverColor: string;
}

/**
 * WorkProcess - ระบบอธิบายขั้นตอนการดำเนินงาน (The Strategic Implementation)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความโปร่งใสผ่านลำดับขั้นตอนที่แม่นยำและตรวจสอบได้
 */
export const WorkProcess = () => {
  const steps: ProcessStep[] = [
    {
      title: "Business Mapping",
      desc: "วิเคราะห์เป้าหมายธุรกิจและกลยุทธ์คำค้นหา เพื่อวางแผนงานระบบให้แม่นยำสูงสุด",
      icon: Search,
      color: "text-blue-600 bg-blue-50",
      hoverColor: "bg-blue-600",
    },
    {
      title: "Interface Planning",
      desc: "ออกแบบโครงสร้างเนื้อหาและจุดปฏิสัมพันธ์ (Conversion Point) ที่เน้นผลลัพธ์จริง",
      icon: PenTool,
      color: "text-emerald-600 bg-emerald-50",
      hoverColor: "bg-emerald-600",
    },
    {
      title: "Technical Build",
      desc: "พัฒนาระบบด้วยมาตรฐานความเร็วสูงสุด เพื่อสร้างความได้เปรียบในการแข่งขันบนตลาดดิจิทัล",
      icon: Code2,
      color: "text-indigo-600 bg-indigo-50",
      hoverColor: "bg-indigo-600",
    },
    {
      title: "System Launch",
      desc: "ตรวจสอบความเสถียรและออนไลน์ระบบ เพื่อผลักดันให้ธุรกิจเข้าถึงกลุ่มเป้าหมายในทันที",
      icon: Rocket,
      color: "text-orange-600 bg-orange-50",
      hoverColor: "bg-orange-600",
    },
  ];

  return (
    <section className="relative my-24 w-full px-6 antialiased lg:my-40">
      {/* Heading Protocol: ส่วนนำเสนอหัวข้อเชิงกลยุทธ์ */}
      <div className="mb-20 text-center md:text-left">
        <div className="mb-4 flex items-center justify-center gap-3 md:justify-start">
          <div className="h-2 w-12 rounded-full bg-emerald-500" />
          <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
            Strategic Implementation
          </span>
        </div>
        <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl lg:text-8xl">
          The <span className="text-emerald-500">AEM</span> Process.
        </h2>
      </div>

      {/* Process Container: โครงสร้างรายการแบบ Semantic เพื่อประสิทธิภาพสูงสุด */}
      <ol className="grid gap-1 overflow-hidden rounded-[3.5rem] bg-slate-100 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            className="group relative flex flex-col bg-white p-10 transition-all duration-500 hover:z-10 hover:scale-[1.02] lg:p-14"
          >
            {/* ลำดับขั้นตอนและไอคอนแสดงผล */}
            <div className="mb-14 flex items-center justify-between">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 group-hover:bg-slate-950 group-hover:text-emerald-400",
                  step.color,
                )}
              >
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <span className="font-heading text-6xl font-black text-slate-50 transition-colors duration-500 group-hover:text-slate-100 lg:text-7xl">
                0{index + 1}
              </span>
            </div>

            {/* รายละเอียดขั้นตอนการดำเนินงาน */}
            <div className="flex flex-1 flex-col space-y-4">
              <h3 className="font-heading text-2xl font-black tracking-tighter text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
                {step.title}
              </h3>
              <p className="font-body text-base leading-relaxed font-bold text-slate-500 group-hover:text-slate-700">
                {step.desc}
              </p>
            </div>

            {/* สัญลักษณ์นำทางเชื่อมต่อ (แสดงผลเฉพาะ Desktop) */}
            {index !== steps.length - 1 && (
              <div className="absolute top-1/2 -right-5 z-20 hidden -translate-y-1/2 transition-transform group-hover:translate-x-2 md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-xl ring-8 ring-slate-100/50">
                  <ArrowRight size={16} className="text-emerald-500" />
                </div>
              </div>
            )}

            {/* แถบสีแสดงสถานะเมื่อมีการโต้ตอบ */}
            <div
              className={cn(
                "absolute bottom-0 left-0 h-2 w-0 transition-all duration-700 ease-out group-hover:w-full",
                step.hoverColor,
              )}
            />
          </motion.li>
        ))}
      </ol>

      {/* Footer Status: ข้อมูลยืนยันมาตรฐานการดำเนินงาน */}
      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <div className="mb-4 h-[1px] w-24 bg-slate-200" />
        <div className="inline-flex items-center gap-3 rounded-full border border-slate-100 bg-white px-6 py-2 shadow-sm">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <span className="font-heading text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase italic">
            Quality Framework Standard 2026
          </span>
        </div>
      </div>
    </section>
  );
};
