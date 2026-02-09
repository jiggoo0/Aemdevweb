/**
 * [FEATURE COMPONENT]: IMPACT_STATS_SYSTEM v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Direct DOM Manipulation | Neural Physics | Multi-Theme Orchestration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useEffect, useRef } from "react";
import { motion, useSpring, useInView, useMotionValueEvent } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

// --- 1. Infrastructure: นิยามข้อมูลแบบ Deterministic ---
interface MetricItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly decimals?: number;
  readonly unit: string;
  readonly icon: IconName;
  readonly prefix?: string;
  readonly description: string;
}

const SYSTEM_METRICS: readonly MetricItem[] = [
  {
    id: "PERF_CORE",
    label: "Performance Score",
    value: 99,
    decimals: 0,
    unit: "/100",
    icon: "Zap",
    description: "Lighthouse Speed Index",
  },
  {
    id: "ROI_VELOCITY",
    label: "Conversion Growth",
    value: 300,
    decimals: 0,
    unit: "%",
    icon: "TrendingUp",
    prefix: "+",
    description: "Average Client Uplift",
  },
  {
    id: "UPTIME_SHIELD",
    label: "System Uptime",
    value: 99.99,
    decimals: 2,
    unit: "%",
    icon: "ShieldCheck",
    description: "Enterprise Grade SLA",
  },
  {
    id: "PRT_NETWORK",
    label: "Active Partners",
    value: 150,
    decimals: 0,
    unit: "+",
    icon: "Users",
    description: "Trusting Businesses",
  },
];

// --- 2. Core Engine: ตัวนับเลขประสิทธิภาพสูง (Direct DOM Mapping) ---
const Counter = ({
  value,
  decimals = 0,
  prefix = "",
}: {
  value: number;
  decimals?: number;
  prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  const springValue = useSpring(0, {
    stiffness: 60,
    damping: 25,
    mass: 1,
    restDelta: 0.001,
  });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (ref.current) {
      const formatted = latest.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      ref.current.textContent = `${prefix}${formatted}`;
    }
  });

  return <span ref={ref} className="tracking-tighter tabular-nums" />;
};

// --- 3. UI Node: Metric Card Architecture ---
const MetricCard = ({ stat, index }: { stat: MetricItem; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={cn(
        "group relative overflow-hidden rounded-[1.5rem] border p-6 transition-all duration-500",
        /* [HYBRID THEME]: Mapping ไปยัง Semantic Tokens */
        "border-border bg-surface-card shadow-sm",
        "hover:border-brand-primary/30 hover:bg-surface-offset/50 hover:shadow-glow"
      )}
    >
      {/* Infrastructure Grid Overlay: ปรับตามธีมอัตโนมัติ */}
      <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.03]" />

      {/* Header Hub: Icon & Identity */}
      <div className="relative mb-6 flex items-start justify-between">
        <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 items-center justify-center rounded-xl border border-border transition-all duration-500 group-hover:rotate-6 group-hover:text-surface-main">
          <IconRenderer name={stat.icon} size={20} strokeWidth={2} />
        </div>
        <span className="text-text-muted font-mono text-[9px] font-black tracking-widest uppercase transition-colors group-hover:text-brand-primary/50">
          {stat.id}
        </span>
      </div>

      {/* Logic Node: Numeric Visualization */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <h3 className="text-text-primary font-mono text-4xl font-black tracking-tighter italic md:text-5xl">
            <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
          </h3>
          <span className="text-brand-primary text-sm font-black">{stat.unit}</span>
        </div>
        <p className="text-text-secondary mt-2 text-xs font-bold tracking-widest uppercase transition-colors group-hover:text-text-primary">
          {stat.label}
        </p>
        
        {/* Animated Underline */}
        <div className="bg-border group-hover:bg-brand-primary/30 mt-2 h-px w-8 transition-all duration-500 group-hover:w-full" />
        
        <p className="text-text-muted mt-2 font-mono text-[9px] tracking-tight uppercase">
          {stat.description}
        </p>
      </div>

      {/* Neural Progress Line: GPU Accelerated */}
      <div className="bg-border absolute bottom-0 left-0 h-[2px] w-full opacity-30">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "circOut" }}
          className="from-brand-primary/0 via-brand-primary to-brand-primary h-full bg-gradient-to-r"
        />
      </div>
    </motion.div>
  );
};

// --- 4. Main Orchestrator ---
const ImpactStats = () => {
  return (
    <div className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {SYSTEM_METRICS.map((stat, index) => (
          <MetricCard key={stat.id} stat={stat} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default memo(ImpactStats);
