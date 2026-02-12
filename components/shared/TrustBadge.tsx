/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Modular Trust Nodes | Neural Physics | GPU-Accelerated Rendering
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { SITE_CONFIG } from "@/constants/site-config";

interface TrustNode {
  readonly label: string;
  readonly icon: IconName;
  readonly status: "active" | "standby";
}

const TRUST_NODES: readonly TrustNode[] = [
  { label: "High-Speed Protocol", icon: "Zap", status: "active" },
  { label: "SEO Architecture", icon: "SearchCheck", status: "active" },
  { label: "Bank-Grade Security", icon: "ShieldCheck", status: "active" },
  { label: "Responsive Geometry", icon: "Layers", status: "active" },
  { label: "Next.js Core", icon: "Cpu", status: "active" },
];

/**
 * @component TrustBadge
 * @description โหนดแสดงเครื่องหมายความน่าเชื่อถือที่ปรับความสมดุลให้เข้ากับระบบ High-Mass Card
 * [ENGINEERING]: บังคับใช้ GPU Layer Promotion สำหรับ Animation เพื่อลดค่า TBT
 */
const TrustBadge = () => {
  /* [PHYSICS]: Neural Spring Orchestration - จูนความรู้สึกให้ "พรีเมียมและมั่นคง" */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <section
      className="flex w-full flex-col items-center justify-center py-16 transition-colors duration-700 md:py-24"
      aria-label="Trust Signals"
    >
      {/* --- 01. STATUS HEADER: Blueprint Alignment --- */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 0.6, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex max-w-2xl items-center justify-center gap-6 px-4"
      >
        <div className="via-border/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
        <span
          suppressHydrationWarning
          className="text-text-muted font-mono text-[9px] font-black tracking-[0.5em] whitespace-nowrap uppercase italic md:text-[10px]"
        >
          Verified_Infrastructure.v{SITE_CONFIG.project.version}
        </span>
        <div className="via-border/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
      </motion.div>

      {/* --- 02. NODES GRID: Balanced Kinetic Chips --- */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-4 px-4 md:gap-5 lg:gap-6"
      >
        {TRUST_NODES.map((node) => (
          <motion.div
            key={node.label}
            variants={itemVariants}
            whileHover={{
              scale: 1.03,
              y: -4,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className={cn(
              "group relative flex cursor-default items-center gap-5 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]",
              "border-border bg-surface-card/40 shadow-pro-sm border px-6 py-3.5 backdrop-blur-2xl md:px-8 md:py-4",
              "hover:border-brand-primary/40 hover:bg-surface-offset/60 hover:shadow-glow-sm transition-all duration-500",
              "transform-gpu will-change-transform",
            )}
          >
            {/* Neural Signal Node: สัญญาณชีพของเทคโนโลยี */}
            <div
              className="relative flex h-2.5 w-2.5 items-center justify-center"
              aria-hidden="true"
            >
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-30"></span>
              <span className="bg-brand-primary/30 group-hover:bg-brand-primary shadow-glow relative inline-flex h-2 w-2 rounded-full transition-all duration-500"></span>
            </div>

            {/* Content Hub */}
            <div className="flex items-center gap-4">
              <div className="text-text-muted group-hover:text-brand-primary transition-all duration-500 group-hover:rotate-[10deg]">
                <IconRenderer name={node.icon} size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-text-secondary group-hover:text-text-primary font-mono text-[10px] font-black tracking-widest uppercase transition-colors duration-500 md:text-[11px]">
                  {node.label}
                </span>
                <span className="text-brand-primary/40 group-hover:text-brand-primary/60 font-mono text-[7px] font-bold tracking-tighter uppercase transition-colors">
                  System_Authenticated
                </span>
              </div>
            </div>

            {/* Neural Shine Sweep: เอฟเฟกต์แสงวิ่งแบบ Finesse */}
            <div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-[1200ms] ease-in-out group-hover:translate-x-full"
              aria-hidden="true"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default memo(TrustBadge);
