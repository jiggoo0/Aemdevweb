/** @format */

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Timer, Gauge, ShieldCheck } from "lucide-react";

/**
 * PerformanceAuthority - ระบบตรวจสอบและยืนยันประสิทธิภาพขั้นสูง (Verification Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านตัวชี้วัดเชิงเทคนิคที่เป็นเลิศ
 */
export const PerformanceAuthority = () => {
  const performanceMetrics = [
    {
      label: "Response Efficiency",
      value: "0.4s",
      icon: Timer,
      desc: "ความเร็วในการประมวลผลการแสดงผลครั้งแรก",
      color: "text-emerald-500",
    },
    {
      label: "Optimization Standards",
      value: "100/100",
      icon: Gauge,
      desc: "คะแนนมาตรฐานประสิทธิภาพสูงสุดจาก Google",
      color: "text-blue-500",
    },
    {
      label: "Structural Integrity",
      value: "Grade A",
      icon: ShieldCheck,
      desc: "ระบบการจัดการความปลอดภัยและข้อมูลขั้นสูง",
      color: "text-indigo-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        ease: "easeOut" as const,
      }}
      className="my-24 overflow-hidden rounded-[4rem] border border-slate-100 bg-white shadow-2xl shadow-emerald-500/5"
    >
      <div className="flex flex-col lg:flex-row">
        {/* [LAYER 1]: BRANDING NODE - การแสดงอัตลักษณ์แห่งความเร็วและเสถียรภาพ */}
        <div className="relative flex flex-col justify-center bg-slate-950 p-12 text-white lg:w-1/3">
          {/* แสงนวลตาสร้างมิติความทันสมัย */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />

          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-[1.5rem] bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            >
              <Zap size={28} fill="currentColor" className="text-slate-950" />
            </motion.div>

            <h3 className="font-heading text-4xl leading-[0.9] font-black tracking-tighter uppercase italic">
              System <br />
              <span className="text-emerald-400">Inventory.</span>
            </h3>

            <div className="mt-8 space-y-4">
              <p className="font-body text-sm font-bold text-slate-400">
                ระบบถูกปรับจูนด้วยเทคโนโลยี{" "}
                <span className="text-white">Next.js 16 Static-First</span>{" "}
                เพื่อให้ทุกจุดการเชื่อมต่อทำงานอย่างราบรื่นและเปี่ยมประสิทธิภาพสูงสุด
              </p>
              <div className="flex items-center gap-2 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic">
                <div className="h-1 w-8 rounded-full bg-emerald-500" />
                Performance First Strategy
              </div>
            </div>
          </div>
        </div>

        {/* [LAYER 2]: METRICS SENSORS - ส่วนแสดงผลตัวชี้วัดประสิทธิภาพ */}
        <div className="grid flex-1 gap-1 bg-slate-50 p-1 md:grid-cols-3">
          {performanceMetrics.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              className="group flex flex-col justify-between bg-white/80 p-10 backdrop-blur-sm transition-all"
            >
              <div className="mb-12 flex items-center justify-between">
                <div
                  className={`rounded-2xl bg-slate-50 p-3 transition-colors group-hover:bg-white group-hover:shadow-md ${item.color}`}
                >
                  <item.icon size={24} />
                </div>
                <span className="font-heading text-[10px] font-black tracking-widest text-slate-200 uppercase">
                  Metric_{index + 1}
                </span>
              </div>

              <div className="space-y-2">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                  className="text-5xl font-black tracking-tighter text-slate-950 italic md:text-6xl"
                >
                  {item.value}
                </motion.div>
                <div className="text-[12px] font-black tracking-widest text-emerald-600 uppercase italic">
                  {item.label}
                </div>
                <p className="font-body text-xs leading-relaxed font-bold text-slate-400">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* [LAYER 3]: COMPLIANCE FOOTER - ข้อมูลมาตรฐานความสอดคล้องระดับสากล */}
      <div className="border-t border-slate-50 bg-emerald-500/5 py-4">
        <div className="flex items-center justify-center gap-4">
          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
            Optimization Protocol: AEM Engine v2026.4 Verified
          </p>
        </div>
      </div>
    </motion.div>
  );
};
