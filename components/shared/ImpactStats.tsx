/**
 * [COMPONENT]: IMPACT_STATS_SYSTEM v17.0.1 (HUD_EDITION)
 * [STRATEGY]: Direct DOM Manipulation | Reactive Physics | Visual Feedback
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useEffect, useRef } from "react";
import { motion, useSpring, useInView, useMotionValueEvent } from "framer-motion";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer"; // Import จากไฟล์จริง

// --- 1. Infrastructure: นิยามข้อมูล ---
interface MetricItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly decimals?: number; // เพิ่มความละเอียดทศนิยม
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

// --- 2. Core Engine: ตัวนับเลขประสิทธิภาพสูง (Direct DOM) ---
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
      // Formatter: จัดการตัวเลขและทศนิยมให้แม่นยำ
      const formatted = latest.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      ref.current.textContent = `${prefix}${formatted}`;
    }
  });

  return <span ref={ref} className="tracking-tighter tabular-nums" />;
};

// --- 3. UI Component: การ์ดแสดงผลแต่ละใบ ---
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
      className="group hover:border-brand-primary/30 relative overflow-hidden rounded-[1.5rem] border border-white/5 bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.15)]"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.03]" />

      {/* Header: Icon & ID */}
      <div className="relative mb-6 flex items-start justify-between">
        <div className="text-brand-primary group-hover:bg-brand-primary flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:rotate-6 group-hover:text-black">
          <IconRenderer name={stat.icon} size={20} strokeWidth={2} />
        </div>
        <span className="group-hover:text-brand-primary/70 font-mono text-[9px] font-black tracking-widest text-white/20 uppercase transition-colors">
          {stat.id}
        </span>
      </div>

      {/* Main Stats */}
      <div className="relative z-10">
        <div className="flex items-baseline gap-1">
          <h3 className="font-mono text-4xl font-black tracking-tighter text-white italic md:text-5xl">
            <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
          </h3>
          <span className="text-brand-primary text-sm font-black">{stat.unit}</span>
        </div>
        <p className="mt-2 text-xs font-bold tracking-widest text-slate-400 uppercase transition-colors group-hover:text-white">
          {stat.label}
        </p>
        <div className="group-hover:bg-brand-primary/30 mt-2 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-full" />
        <p className="mt-2 font-mono text-[9px] tracking-tight text-slate-600 uppercase">
          {stat.description}
        </p>
      </div>

      {/* Interactive Progress Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 + index * 0.1, ease: "circOut" }}
          className="from-brand-primary/0 via-brand-primary to-brand-primary h-full bg-gradient-to-r opacity-50"
        />
      </div>
    </motion.div>
  );
};

// --- 4. Main Export ---
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
