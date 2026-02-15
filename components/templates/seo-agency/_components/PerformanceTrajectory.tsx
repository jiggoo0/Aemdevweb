"use client";
import React from "react";
import { motion } from "framer-motion";

export const PerformanceTrajectory = () => {
  return (
    <section className="border-[var(--foreground)]/10 border-y-[var(--border-width)] py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-[family-name:var(--font-primary)] text-4xl leading-none font-black uppercase italic md:text-5xl">
              Growth <br /> <span className="text-[var(--brand-primary)]">Trajectory.</span>
            </h3>
            <p className="text-lg leading-relaxed italic opacity-70">
              เราไม่ได้โฟกัสแค่ยอดคลิก แต่เราโฟกัสที่วิถีการเติบโตของธุรกิจคุณ (ROI Journey)
              ผ่านโครงสร้างเว็บไซต์ที่ Google รัก
            </p>
          </div>

          {/* Simple Visual Graph */}
          <div className="relative h-64 border-b-2 border-l-2 border-[var(--foreground)]/10">
            <motion.svg
              viewBox="0 0 400 200"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <motion.path
                d="M 0 180 Q 100 170 150 100 T 400 20"
                fill="none"
                stroke="var(--brand-primary)"
                strokeWidth="6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <circle cx="400" cy="20" r="8" fill="var(--brand-primary)" className="animate-ping" />
            </motion.svg>
            <div className="absolute right-4 bottom-4 font-mono text-[9px] uppercase opacity-40">
              Organic_Traffic_Scaling
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
