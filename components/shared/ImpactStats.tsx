/**
 * [SHARED COMPONENT]: IMPACT_STATS_SYSTEM v17.9.103 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure DOM Counter | IntersectionObserver | Zero-Framer
 */

"use client";

import React, { memo, useEffect, useRef, useState } from "react";
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

/** * @engine High-Performance Counter (Non-Framer)
 * [OPTIMIZATION]: ใช้ requestAnimationFrame เพื่อ Zero-Jank Animation
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
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const current = easedProgress * value;

      if (ref.current) {
        ref.current.textContent = `${prefix}${current.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        })}`;
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value, decimals, prefix]);

  return (
    <span ref={ref} className="transform-gpu tabular-nums">
      0
    </span>
  );
};

const MetricCard = ({
  stat,
  index,
  visible,
}: {
  stat: MetricItem;
  index: number;
  visible: boolean;
}) => {
  return (
    <div
      className={cn(
        "group rounded-section relative flex min-h-[280px] flex-col overflow-hidden border p-10 transition-all duration-1000",
        "border-border bg-surface-card/30 shadow-pro-sm backdrop-blur-3xl",
        "hover:border-brand-primary/40 hover:bg-surface-offset/60 hover:shadow-glow-sm hover:-translate-y-3",
        "transform-gpu will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
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
        <div
          className={cn(
            "via-brand-primary/50 to-brand-primary h-full bg-gradient-to-r from-transparent transition-all duration-[3000ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            visible ? "w-full" : "w-0",
          )}
          style={{ transitionDelay: `${500 + index * 100}ms` }}
        />
      </div>
    </div>
  );
};

const ImpactStats = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1, margin: "-100px" },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="mx-auto w-full max-w-7xl px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SYSTEM_METRICS.map((stat, index) => (
          <MetricCard key={stat.id} stat={stat} index={index} visible={visible} />
        ))}
      </div>
    </section>
  );
};

export default memo(ImpactStats);
