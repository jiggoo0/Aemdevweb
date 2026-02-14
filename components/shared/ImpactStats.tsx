/**
 * [SHARED COMPONENT]: IMPACT_STATS_SYSTEM v17.9.102 (ULTIMATE_HARDENED)
 * [STRATEGY]: Direct DOM Counter | GPU-Accelerated Layers | Zero-CLS Hardened
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useEffect, useRef } from "react";
import { motion, useSpring, useInView, useMotionValueEvent } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";

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
    unit: "/100",
    icon: "Zap",
    description: "Lighthouse Speed Index",
  },
  {
    id: "ROI_VELOCITY",
    label: "Conversion Growth",
    value: 300,
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
    unit: "+",
    icon: "Users",
    description: "Trusting Businesses",
  },
];

/** * @engine High-Performance Counter
 * [OPTIMIZATION]: ใช้ Direct DOM Manipulation เพื่อ Zero-Jank Animation
 */
const Counter = ({
  value,
  decimals = 0,
  prefix = "",
}: {
  readonly value: number;
  readonly decimals?: number;
  readonly prefix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const springValue = useSpring(0, { stiffness: 40, damping: 20, mass: 1 });

  useEffect(() => {
    if (isInView) springValue.set(value);
  }, [isInView, value, springValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (ref.current) {
      const numericValue = Number(latest);
      ref.current.textContent = `${prefix}${numericValue.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}`;
    }
  });

  return <span ref={ref} className="transform-gpu tabular-nums" />;
};

const MetricCard = ({ stat, index }: { stat: MetricItem; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
        },
      }}
      className={cn(
        "group relative flex min-h-[280px] flex-col overflow-hidden rounded-[2.5rem] border p-10 transition-all duration-700",
        "border-border bg-surface-card/30 shadow-pro-sm backdrop-blur-3xl",
        "hover:border-brand-primary/40 hover:bg-surface-offset/60 hover:shadow-glow-sm hover:-translate-y-3",
        "transform-gpu will-change-transform",
      )}
    >
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />

      <div className="relative z-10 mb-auto flex items-start justify-between">
        <div className="bg-surface-offset text-brand-primary group-hover:bg-brand-primary border-border group-hover:text-surface-main group-hover:shadow-glow flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-500 group-hover:rotate-[10deg]">
          <IconRenderer name={stat.icon} size={24} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
            Node_Stat.0{index + 1}
          </span>
          <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="relative z-10 mt-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <h3 className="text-text-primary font-mono text-5xl font-black tracking-tighter italic md:text-6xl">
              <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
            </h3>
            <span className="text-brand-primary text-lg font-black tracking-widest uppercase opacity-80">
              {stat.unit}
            </span>
          </div>
          <p className="text-text-primary group-hover:text-brand-primary text-sm font-black tracking-[0.2em] uppercase italic transition-colors">
            {stat.label}
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-border/50 group-hover:bg-brand-primary/20 h-px w-full transition-all duration-700" />
          <p className="text-text-muted font-mono text-[9px] leading-relaxed tracking-widest uppercase opacity-60">
            {stat.description}
          </p>
        </div>
      </div>

      {/* Neural Progress Bar */}
      <div className="bg-border/5 absolute bottom-0 left-0 h-1.5 w-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.5 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="via-brand-primary/50 to-brand-primary h-full bg-gradient-to-r from-transparent"
        />
      </div>
    </motion.div>
  );
};

const ImpactStats = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
      >
        {SYSTEM_METRICS.map((stat, index) => (
          <MetricCard key={stat.id} stat={stat} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default memo(ImpactStats);
