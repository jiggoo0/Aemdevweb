/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Modular Chips | Multi-Theme Logic | Neural Physics
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
 * @description หน่วยแสดงผลสัญลักษณ์ความน่าเชื่อถือแบบ Kinetic Chips 
 * รองรับการสลับโหมด Dark/Light อัตโนมัติ
 */
const TrustBadge = () => {
  /* [PHYSICS]: Neural Flow Configuration */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-10 transition-colors duration-500">
      {/* 01. STATUS HEADER: เส้นนำสายตา Kinetic Line */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
        className="mb-10 flex max-w-xs items-center justify-center gap-4 opacity-60"
      >
        <div className="bg-gradient-to-r from-transparent via-border to-transparent h-px flex-1" />
        <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] whitespace-nowrap uppercase">
          Trusted_Infrastructure.v{SITE_CONFIG.project.version}
        </span>
        <div className="bg-gradient-to-r from-transparent via-border to-transparent h-px flex-1" />
      </motion.div>

      {/* 02. MODULE GRID: การแสดงผลแบบ Kinetic Chips */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-3 md:gap-4"
      >
        {TRUST_NODES.map((node) => (
          <motion.div
            key={node.label}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            className={cn(
              "group relative flex cursor-default items-center gap-3 overflow-hidden rounded-full",
              /* [HYBRID THEME]: Mapping ไปยัง Semantic Tokens */
              "border border-border bg-surface-card px-5 py-2.5 backdrop-blur-md shadow-sm",
              "hover:border-brand-primary/40 transition-all duration-300 hover:bg-surface-offset/50 hover:shadow-glow",
            )}
          >
            {/* Active Indicator Pulse */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-75"></span>
              <span className="bg-brand-primary/50 group-hover:bg-brand-primary relative inline-flex h-1.5 w-1.5 rounded-full transition-colors duration-300 shadow-glow"></span>
            </span>

            {/* Icon & Label Logic */}
            <div className="flex items-center gap-2.5">
              <IconRenderer
                name={node.icon}
                size={14}
                className="text-text-muted group-hover:text-brand-primary transition-colors duration-300"
              />
              <span className="text-text-secondary group-hover:text-text-primary font-mono text-[10px] font-black tracking-wider uppercase transition-colors duration-300">
                {node.label}
              </span>
            </div>

            {/* Neural Shine Effect: GPU Accelerated */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-text-primary/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(TrustBadge);
