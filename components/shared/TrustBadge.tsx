/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v17.0.2 (KINETIC_CHIPS)
 * [STRATEGY]: Modular Chips | Kinetic Glow | Semantic Reliability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer"; // ใช้ Type จาก Registry โดยตรงเพื่อความแม่นยำ

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

const TrustBadge = () => {
  // [PHYSICS]: Animation Variants
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
    <div className="flex w-full flex-col items-center justify-center py-10">
      {/* 01. STATUS HEADER: เส้นนำสายตา Kinetic Line */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }}
        className="mb-8 flex max-w-xs items-center justify-center gap-4 opacity-60"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="font-mono text-[9px] font-black tracking-[0.4em] whitespace-nowrap text-white/40 uppercase">
          Trusted_Infrastructure
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </motion.div>

      {/* 02. MODULE GRID: การแสดงผลแบบชิป */}
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
              "border border-white/5 bg-white/[0.03] px-5 py-2.5 backdrop-blur-md",
              "hover:border-brand-primary/40 transition-all duration-300 hover:bg-white/[0.08] hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.15)]",
            )}
          >
            {/* Active Indicator Dot */}
            <span className="relative flex h-1.5 w-1.5">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-75"></span>
              <span className="bg-brand-primary/50 group-hover:bg-brand-primary relative inline-flex h-1.5 w-1.5 rounded-full transition-colors duration-300"></span>
            </span>

            {/* Icon & Label */}
            <div className="flex items-center gap-2.5">
              <IconRenderer
                name={node.icon}
                size={14}
                className="group-hover:text-brand-primary text-gray-500 transition-colors duration-300"
              />
              <span className="font-mono text-[10px] font-bold tracking-wider text-gray-400 uppercase transition-colors duration-300 group-hover:text-white">
                {node.label}
              </span>
            </div>

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(TrustBadge);
