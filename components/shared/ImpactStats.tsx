/**
 * [SHARED COMPONENT]: IMPACT_STATS_SYSTEM v17.9.103 (SERVER_OPTIMIZED)
 * [STRATEGY]: Pure DOM Counter | IntersectionObserver | Zero-Framer
 */

"use client";

import React, { memo, useEffect, useRef, useState } from "react";
import IconRenderer from "@/components/ui/IconRenderer";
import type { IconName } from "@/components/ui/IconRenderer";
import { cn } from "@/lib/utils";
import { UI_STRINGS } from "@/constants/ui-strings";

interface MetricItem {
  readonly id: string;
  readonly label: string;
  readonly value: number;
  readonly decimals?: number;
  readonly unit: string;
  readonly icon: IconName;
  readonly prefix?: string;
  readonly description: string;
  readonly trend?: "up" | "stable";
}

const _SYSTEM_METRICS: readonly MetricItem[] = [
  {
    id: "PERF_CORE",
    label: "เว็บโหลดเร็วพิเศษ",
    value: 99,
    unit: "/100",
    icon: "Zap",
    description: "คะแนนประสิทธิภาพสูงสุด",
    trend: "stable",
  },
  {
    id: "ROI_VELOCITY",
    label: "เพิ่มยอดขาย",
    value: 300,
    unit: "%",
    icon: "TrendingUp",
    prefix: "+",
    description: "โอกาสปิดการขายที่มากขึ้น",
    trend: "up",
  },
  {
    id: "UPTIME_SHIELD",
    label: "ระบบเสถียร 100%",
    value: 99.99,
    decimals: 2,
    unit: "%",
    icon: "ShieldCheck",
    description: "ธุรกิจลื่นไหลไม่มีสะดุด",
    trend: "stable",
  },
  {
    id: "AI_AUTHORITY",
    label: "ติดหน้าแรก Google",
    value: 1.2,
    decimals: 1,
    unit: "M+",
    icon: "Globe",
    description: "ดึงดูดลูกค้าคุณภาพ",
    trend: "up",
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
        "border-border bg-surface-card/30 shadow-pro-sm backdrop-blur-md",
        "hover:-translate-y-1 hover:border-[var(--color-brand-primary)]/40 hover:bg-[var(--surface-offset)]/60 hover:shadow-sm",
        "transform-gpu will-change-transform",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />

      <div className="relative z-10 mb-auto flex items-start justify-between">
        <div className="border-border group-hover:text-surface-main group- flex h-14 w-14 items-center justify-center rounded-2xl border bg-[var(--surface-offset)] text-[var(--color-brand-primary)] transition-all duration-500 group-hover:bg-[var(--color-brand-primary)] group-hover:shadow-md">
          <IconRenderer name={stat.icon} size={24} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-text-muted font-sans text-[10px] font-bold tracking-widest uppercase opacity-60">
            {UI_STRINGS.stats.statPrefix} 0{index + 1}
          </span>
          <div className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand-primary)] shadow-md" />
        </div>
      </div>

      <div className="relative z-10 mt-10 space-y-6">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <p className="text-text-primary font-mono text-5xl font-black tracking-tighter italic md:text-6xl">
              <Counter value={stat.value} decimals={stat.decimals} prefix={stat.prefix} />
            </p>
            <div className="flex flex-col">
              {stat.trend === "up" && (
                <IconRenderer name="ArrowUpRight" size={12} className="mb-1 text-emerald-500" />
              )}
              <span className="text-lg leading-none font-black tracking-widest text-[var(--color-brand-primary)] uppercase opacity-100">
                {stat.unit}
              </span>
            </div>
          </div>
          <p className="text-text-primary text-sm leading-relaxed font-black tracking-[0.1em] uppercase italic transition-colors group-hover:text-[var(--color-brand-primary)] md:text-base">
            {stat.label}
          </p>
        </div>

        <div className="space-y-3">
          <div className="bg-border/50 h-px w-full transition-all duration-700 group-hover:bg-[var(--color-brand-primary)]/20" />
          <p className="text-text-muted font-mono text-[10px] leading-relaxed tracking-wider uppercase opacity-100">
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

interface ImpactStatsProps {
  readonly data?: UniversalTemplateProps;
  readonly className?: string;
}

const ImpactStats = ({ data, className }: ImpactStatsProps) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // [DYNAMIC_DATA]: ดึงข้อมูลจาก Province DNA หากไม่มีให้ใช้ค่ามาตรฐานที่สมเหตุสมผล
  const metrics: MetricItem[] = [
    {
      id: "LOCAL_TRAFFIC",
      label: `${UI_STRINGS.stats.reachCustomers}${data?.province || UI_STRINGS.stats.allAreas}`,
      value: data?.socialProof?.reviewCount ? data.socialProof.reviewCount * 10 : 12000,
      unit: "P/M",
      icon: "TrendingUp",
      description: UI_STRINGS.stats.brandAwareness,
      trend: "up",
    },
    {
      id: "SPEED_NODE",
      label: UI_STRINGS.stats.fastLoad,
      value: data?.regionalความเร็ว || 14,
      decimals: 1,
      unit: "MS",
      icon: "Zap",
      description: UI_STRINGS.stats.globalStandard,
      trend: "stable",
    },
    {
      id: "SATURATION",
      label: UI_STRINGS.stats.expertise,
      value: data?.marketโอกาสเติบโต || 85,
      unit: "%",
      icon: "Target",
      description: UI_STRINGS.stats.inYourBusiness,
      trend: "up",
    },
    {
      id: "TRUST_INDEX",
      label: UI_STRINGS.stats.satisfaction,
      value: data?.socialProof?.rating || 4.9,
      decimals: 1,
      unit: "/5.0",
      icon: "Award",
      description: UI_STRINGS.stats.fromOurClients,
      trend: "stable",
    },
  ];

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
    <div ref={ref} className={cn("w-full", className)}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((stat, index) => (
          <MetricCard key={stat.id} stat={stat} index={index} visible={visible} />
        ))}
      </div>
    </div>
  );
};

export default memo(ImpactStats);
