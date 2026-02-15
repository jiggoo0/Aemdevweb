"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TimelineNode {
  year: string;
  title: string;
  description: string;
  status?: "completed" | "active";
}

interface SuccessTimelineProps {
  items?: TimelineNode[];
}

/**
 * @component SuccessTimeline
 * @description แสดงเส้นทางความสำเร็จในรูปแบบโครงสร้างวิศวกรรม (Blueprint Path)
 */
export const SuccessTimeline = ({ items }: SuccessTimelineProps) => {
  // Mockup ข้อมูลกรณีไม่มีการส่ง Props เข้ามา
  const defaultItems: TimelineNode[] = [
    {
      year: "2023",
      title: "Foundational_Registry",
      description: "เริ่มต้นวางรากฐานระบบสถาปัตยกรรมเว็บไซต์เพื่ออุตสาหกรรมยุคใหม่",
      status: "completed",
    },
    {
      year: "2024",
      title: "Regional_Expansion",
      description: "ขยายเครือข่ายความน่าเชื่อถือครอบคลุมพื้นที่ยุทธศาสตร์สำคัญทั่วประเทศ",
      status: "completed",
    },
    {
      year: "2025",
      title: "Neural_Infrastructure",
      description:
        "อัปเกรดระบบการประมวลผลและ Identity Overriding เพื่อความเป็นเอกลักษณ์ระดับสูงสุด",
      status: "active",
    },
  ];

  const displayItems = items || defaultItems;

  return (
    <section className="relative overflow-hidden py-24">
      {/* Blueprint Grid Background (Subtle) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          size: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4">
        <div className="relative flex flex-col space-y-20">
          {/* Central Path (The Blueprint Line) */}
          <div className="absolute top-0 bottom-0 left-4 w-[var(--border-width)] bg-gradient-to-b from-[var(--brand-primary)] via-[var(--brand-primary)]/50 to-transparent md:left-1/2 md:-translate-x-1/2" />

          {displayItems.map((item, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "relative flex w-full flex-col items-start md:flex-row md:items-center",
                  isEven ? "md:flex-row-reverse" : "",
                )}
              >
                {/* 1. Content Block */}
                <div
                  className={cn("w-full pl-12 md:w-1/2 md:pl-0", isEven ? "md:pl-16" : "md:pr-16")}
                >
                  <div className="group rounded-[var(--radius)] border-[var(--border-width)] border-[var(--foreground)]/10 bg-[var(--surface-card)]/50 p-8 backdrop-blur-sm transition-all hover:border-[var(--brand-primary)]/40">
                    <p className="mb-2 font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase italic">
                      // Milestone_Node_{item.year}
                    </p>
                    <h3 className="mb-3 font-[family-name:var(--font-primary)] text-2xl font-black uppercase italic">
                      {item.title}
                    </h3>
                    <p className="leading-relaxed font-medium text-[var(--text-primary)]/60 italic">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* 2. Central Node (The Hub) */}
                <div className="absolute top-8 left-4 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center md:top-auto md:left-1/2">
                  <div
                    className={cn(
                      "h-4 w-4 rotate-45 border-2 transition-transform duration-700 group-hover:rotate-180",
                      item.status === "active"
                        ? "animate-pulse border-[var(--brand-primary)] bg-[var(--brand-primary)]"
                        : "border-[var(--brand-primary)] bg-[var(--surface-main)]",
                    )}
                  />
                  {/* Glow Effect for Active Node */}
                  {item.status === "active" && (
                    <div className="absolute inset-0 animate-ping rounded-full bg-[var(--brand-primary)] opacity-20 blur-lg" />
                  )}
                </div>

                {/* 3. Year Marker (Opposite Side) */}
                <div
                  className={cn(
                    "hidden w-1/2 md:block",
                    isEven ? "pr-16 text-right" : "pl-16 text-left",
                  )}
                >
                  <span className="font-[family-name:var(--font-primary)] text-7xl font-black tracking-tighter italic opacity-5 transition-opacity group-hover:opacity-10 lg:text-9xl">
                    {item.year}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
