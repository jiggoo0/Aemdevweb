/**
 * [SHARED COMPONENT]: TRUST_BADGE_SYSTEM v17.4.6 (STABILIZED_FINAL)
 * [STRATEGY]: Modular Trust Nodes | Neural Physics | High-Fidelity Balance
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
 */
const TrustBadge = () => {
  /* [PHYSICS]: Neural Spring Orchestration - จูนความรู้สึกให้ "พรีเมียมและมั่นคง" */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.92, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  return (
    <div className="flex w-full flex-col items-center justify-center py-12 transition-colors duration-700">
      {/* --- 01. STATUS HEADER: Blueprint Alignment --- */}
      <motion.div
        initial={{ opacity: 0, width: "0%" }}
        whileInView={{ opacity: 0.6, width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="mb-14 flex max-w-md items-center justify-center gap-6"
      >
        <div className="via-border/50 h-px flex-1 bg-gradient-to-r from-transparent to-transparent" />
        <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.5em] whitespace-nowrap uppercase italic">
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
        className="flex flex-wrap justify-center gap-4 md:gap-5 lg:gap-6"
      >
        {TRUST_NODES.map((node) => (
          <motion.div
            key={node.label}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
            }}
            className={cn(
              "group relative flex cursor-default items-center gap-5 overflow-hidden rounded-[2rem]",
              "border-border bg-surface-card/40 shadow-pro-sm border px-8 py-4 backdrop-blur-2xl",
              "hover:border-brand-primary/40 hover:bg-surface-offset/60 hover:shadow-glow-sm transition-all duration-500",
            )}
          >
            {/* Neural Signal Node: สัญญาณชีพของเทคโนโลยี */}
            <div className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-30"></span>
              <span className="bg-brand-primary/30 group-hover:bg-brand-primary shadow-glow relative inline-flex h-2 w-2 rounded-full transition-all duration-500"></span>
            </div>

            {/* Content Hub */}
            <div className="flex items-center gap-4">
              <div className="text-text-muted group-hover:text-brand-primary transition-all duration-500 group-hover:rotate-[10deg]">
                <IconRenderer name={node.icon} size={18} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-text-secondary group-hover:text-text-primary font-mono text-[11px] font-black tracking-widest uppercase transition-colors duration-500">
                  {node.label}
                </span>
                <span className="text-brand-primary/40 group-hover:text-brand-primary/60 font-mono text-[7px] font-bold tracking-tighter uppercase transition-colors">
                  System_Authenticated
                </span>
              </div>
            </div>

            {/* Neural Shine Sweep: เอฟเฟกต์แสงวิ่งแบบละเอียด (Finesse) */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-[1200ms] ease-in-out group-hover:translate-x-full" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default memo(TrustBadge);
