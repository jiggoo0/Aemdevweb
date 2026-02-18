/**
 * [FEATURE]: PERFORMANCE_TRAJECTORY v18.0.7 (STABILIZED_FINAL)
 * [STRATEGY]: Growth Visualization | Named Export Alignment | GPU-Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";

/**
 * @component PerformanceTrajectory
 * @description แสดงกราฟการเติบโตของ Traffic แบบจำลอง เพื่อสร้างความเชื่อมั่นในเชิงเทคนิค
 * [FIXED]: เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Build Error และปรับปรุงสถาปัตยกรรม
 */
export const PerformanceTrajectory = memo(() => {
  return (
    <section
      id="growth-trajectory"
      className="border-border/10 bg-surface-main/50 border-y py-24 md:py-32"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* --- 01. CONTENT_LAYER: Strategic Narrative --- */}
          <div className="space-y-8">
            <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-3 rounded-full border px-5 py-1.5">
              <span className="bg-brand-primary h-1 w-1 animate-pulse rounded-full" />
              <p className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                Scaling_Algorithm_V18
              </p>
            </div>

            <h3 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
              Growth <br />
              <span className="text-brand-primary">Trajectory.</span>
            </h3>

            <div className="border-brand-primary border-l-4 pl-6 md:pl-8">
              <p className="text-text-secondary max-w-xl text-lg leading-relaxed font-medium italic opacity-80 md:text-2xl">
                เราไม่ได้โฟกัสแค่ยอดคลิก แต่เราโฟกัสที่วิถีการเติบโตของรายได้ (ROI Journey)
                ผ่านโครงสร้างพื้นฐานที่{" "}
                <span className="text-text-primary font-bold">Google Search AI</span> ยอมรับ
              </p>
            </div>

            <div className="flex gap-8 pt-4">
              <div className="space-y-1">
                <span className="text-brand-primary text-3xl font-black italic md:text-4xl">
                  +450%
                </span>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-40">
                  Avg_Traffic_Yield
                </p>
              </div>
              <div className="border-border/20 space-y-1 border-l pl-8">
                <span className="text-text-primary text-3xl font-black italic md:text-4xl">
                  1.2s
                </span>
                <p className="font-mono text-[8px] tracking-widest uppercase opacity-40">
                  LCP_Optimization_Target
                </p>
              </div>
            </div>
          </div>

          {/* --- 02. VISUAL_LAYER: Technical Growth Chart --- */}
          <div className="group relative">
            <div className="border-border/10 bg-surface-card relative h-[300px] w-full overflow-hidden rounded-[2.5rem] border p-10 md:h-[400px]">
              {/* Chart Grid - Blueprint Style */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Threshold Line (The "Before" SEO) */}
              <div className="absolute bottom-[30%] left-0 w-full border-t border-dashed border-white/5 italic">
                <span className="absolute -top-4 left-6 font-mono text-[8px] tracking-widest uppercase opacity-20">
                  Standard_Market_Baseline
                </span>
              </div>

              {/* Main SVG Graph */}
              <div className="relative h-full w-full">
                <svg
                  viewBox="0 0 400 200"
                  className="absolute inset-0 h-full w-full overflow-visible transition-transform duration-700 group-hover:scale-[1.02]"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-primary)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="var(--brand-primary)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Area Fill */}
                  <motion.path
                    d="M 0 190 Q 50 185 100 170 T 200 130 T 300 70 T 400 20 V 200 H 0 Z"
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />

                  {/* Main Trajectory Path - GPU Accelerated */}
                  <motion.path
                    d="M 0 190 Q 50 185 100 170 T 200 130 T 300 70 T 400 20"
                    fill="none"
                    stroke="var(--brand-primary)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="transform-gpu drop-shadow-[0_0_12px_var(--brand-primary)] will-change-[pathLength]"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                  />

                  {/* Target Node Indicator */}
                  <motion.circle
                    cx="400"
                    cy="20"
                    r="6"
                    fill="var(--brand-primary)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                  />
                </svg>

                {/* Status Nodes Labeling */}
                <div className="absolute top-4 right-0 flex flex-col items-end gap-1">
                  <span className="text-brand-primary animate-pulse font-mono text-[10px] font-black tracking-widest uppercase">
                    Target_Acquired
                  </span>
                  <span className="text-text-muted font-mono text-[8px] uppercase opacity-40">
                    Hyper_Growth_State
                  </span>
                </div>
              </div>

              {/* Legend Axis */}
              <div className="absolute bottom-6 left-10 flex w-[calc(100%-80px)] justify-between font-mono text-[8px] font-bold tracking-widest uppercase opacity-20">
                <span>Phase_Initialize</span>
                <span>Optimizing</span>
                <span>Dominating</span>
              </div>
            </div>

            {/* Background Glow */}
            <div className="bg-brand-primary/10 absolute -right-10 -bottom-10 h-64 w-64 transform-gpu rounded-full blur-[100px]" />
          </div>
        </div>
      </div>
    </section>
  );
});

PerformanceTrajectory.displayName = "PerformanceTrajectory";
