/**
 * [SPECIALIST COMPONENT]: REVENUE_LEAKAGE_ENGINE v18.5.0 (EXECUTIVE_STEALTH)
 * [STRATEGY]: Precise Matrix Simulation | High-End Depth | Kinetic Feedback
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { useState, useMemo, useEffect, memo } from "react";
import { Button } from "@/components/ui/Button";
import type { BaseTemplateProps } from "@/types";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

export default function RevenueLeakageCalculator({
  data: _data,
  suppressUI,
}: Partial<BaseTemplateProps>) {
  const [mounted, setMounted] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  // --- 1. Variables State ---
  const [traffic, setTraffic] = useState<number>(50000);
  const [aov, setAov] = useState<number>(1500);
  const [conversionRate, setConversionRate] = useState<number>(2.0);
  const [currentSpeed, setCurrentSpeed] = useState<number>(4.0);

  const targetSpeed = 1.0;

  // --- 2. Calculation Logic ---
  const { monthlyLoss, yearlyLoss } = useMemo(() => {
    if (currentSpeed <= targetSpeed) return { monthlyLoss: 0, yearlyLoss: 0 };
    const diff = currentSpeed - targetSpeed;
    const lossPercentage = diff * 0.07;
    const conversionLoss = (conversionRate / 100) * lossPercentage;
    const directLoss = Math.floor(traffic * conversionLoss * aov);
    const seoTrafficLeakage = traffic * (diff * 0.075);
    const seoLossVal = Math.floor(seoTrafficLeakage * (conversionRate / 100) * aov);
    const mLoss = directLoss + seoLossVal;
    return { monthlyLoss: mLoss, yearlyLoss: mLoss * 12 };
  }, [traffic, aov, conversionRate, currentSpeed]);

  // Handle calculation effect for 'authenticity'
  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 400);
    return () => clearTimeout(timer);
  }, [traffic, aov, conversionRate, currentSpeed]);

  useEffect(() => setMounted(true), []);

  if (suppressUI) return null;

  return (
    <section className="bg-surface-main border-border/40 relative overflow-hidden border-y py-24 md:py-40">
      {/* 01. MATRIX INFRASTRUCTURE */}
      <div className="bg-infrastructure-grid pointer-events-none absolute inset-0 opacity-[0.02]" />
      <div className="bg-brand-primary/5 pointer-events-none absolute top-0 -left-1/4 h-[600px] w-[600px] rounded-full blur-[140px]" />

      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-8">
        {/* --- STRATEGIC HEADER --- */}
        <header className="mb-20 space-y-6 text-center md:text-left">
          <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2">
            <span className="bg-brand-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase">
              Financial_Leakage_Analysis_v18.5
            </span>
          </div>
          <h2 className="text-text-primary text-4xl leading-tight font-black tracking-tighter uppercase italic md:text-7xl">
            Analyze your <br /> <span className="text-brand-primary">Revenue Drain.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl text-lg font-medium italic opacity-80 md:text-xl">
            “ทุกมิลลิวินาทีที่เว็บคุณช้า คือกำไรสุทธิที่กำลังไหลออกจากธุรกิจโดยไม่รู้ตัว”
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          {/* LEFT: Matrix Inputs */}
          <div className="glass-card rounded-section border-border/50 bg-surface-card/80 shadow-pro-xl border p-8 backdrop-blur-3xl md:p-16 lg:col-span-7">
            <div className="border-border/10 mb-12 flex items-center justify-between border-b pb-6">
              <h3 className="text-text-primary text-xl font-black tracking-tighter uppercase italic">
                System_Parameter_Input
              </h3>
              <div className="flex gap-1">
                <div className="bg-border h-1 w-4 rounded-full" />
                <div className="bg-brand-primary h-1 w-8 rounded-full" />
              </div>
            </div>

            <div className="space-y-12">
              <InputGroup
                label="Monthly_Traffic"
                value={mounted ? traffic.toLocaleString() : "0"}
                unit="Users"
                min={1000}
                max={500000}
                step={1000}
                current={traffic}
                onChange={setTraffic}
              />
              <InputGroup
                label="Average_Order_Value"
                value={mounted ? `฿${aov.toLocaleString()}` : "0"}
                unit="THB"
                min={100}
                max={10000}
                step={100}
                current={aov}
                onChange={setAov}
              />
              <InputGroup
                label="Conversion_Target"
                value={`${conversionRate.toFixed(1)}%`}
                unit="Rate"
                min={0.5}
                max={10.0}
                step={0.1}
                current={conversionRate}
                onChange={setConversionRate}
              />
              <div className="border-border/10 border-t pt-10">
                <InputGroup
                  label="Current_Latency_Index"
                  value={`${currentSpeed.toFixed(1)}s`}
                  unit="Delay"
                  min={1.0}
                  max={10.0}
                  step={0.5}
                  current={currentSpeed}
                  onChange={setCurrentSpeed}
                  isWarning={currentSpeed > 3}
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Real-time Ledger */}
          <div className="lg:sticky lg:top-32 lg:col-span-5">
            <div className="rounded-section bg-text-primary shadow-pro-xl relative flex flex-col overflow-hidden p-10 text-white md:p-16">
              {/* Data Overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: "radial-gradient(#fff 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="bg-brand-primary absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-20 blur-[100px]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-brand-primary font-mono text-[9px] font-black tracking-widest uppercase">
                    Result_Ledger
                  </span>
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full bg-emerald-500",
                      isCalculating && "animate-ping",
                    )}
                  />
                </div>

                <div className="mb-12 space-y-2">
                  <p className="font-mono text-[10px] text-white/40 uppercase">
                    Estimated_Monthly_Loss
                  </p>
                  <h4
                    className={cn(
                      "font-mono text-5xl font-black tracking-tighter italic tabular-nums transition-all duration-300 md:text-7xl",
                      isCalculating ? "scale-95 opacity-40" : "scale-100 opacity-100",
                    )}
                  >
                    {mounted ? `฿${monthlyLoss.toLocaleString()}` : "฿0"}
                  </h4>
                </div>

                <div className="mb-16 space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[10px] font-bold text-white/40 uppercase italic">
                      Yearly_Trajectory
                    </span>
                    <span className="text-brand-primary text-xl font-black italic tabular-nums">
                      ฿{(yearlyLoss / 1000000).toFixed(2)}M
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed font-medium text-white/60 italic">
                    “วิเคราะห์ความสูญเสียสะสมเชิงเทคนิคผ่านสมการ Revenue Matrix v18.5
                    พบโอกาสการกู้คืนยอดขายในระดับวิศวกรรม”
                  </p>
                </div>

                <div className="mt-auto space-y-6">
                  <Button
                    href={SITE_CONFIG.links.line}
                    className="bg-brand-primary h-16 w-full rounded-2xl text-[11px] font-black tracking-[0.3em] uppercase italic transition-all hover:scale-[1.02] active:scale-95"
                  >
                    Recover Revenue Strategy
                  </Button>
                  <p className="text-center text-[8px] font-black tracking-widest text-white/20 uppercase">
                    Protocol_Awaiting_Specialist_Signal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface InputGroupProps {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (val: number) => void;
  isWarning?: boolean;
}

const InputGroup = memo(
  ({ label, value, unit, min, max, step, current, onChange, isWarning }: InputGroupProps) => (
    <div className="space-y-4">
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <span className="text-text-muted font-mono text-[8px] font-black tracking-widest uppercase opacity-40">
            // {label}
          </span>
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "text-2xl font-black tracking-tighter uppercase italic md:text-3xl",
                isWarning ? "text-brand-primary" : "text-text-primary",
              )}
            >
              {value}
            </span>
            <span className="text-text-muted font-mono text-[9px] font-bold uppercase opacity-30">
              [{unit}]
            </span>
          </div>
        </div>
      </div>
      <div className="group relative flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={current}
          onChange={(e) => onChange(Number(e.target.value))}
          className="bg-border/30 accent-brand-primary hover:bg-border/50 h-1.5 w-full cursor-pointer appearance-none rounded-full transition-all outline-none"
        />
      </div>
    </div>
  ),
);

InputGroup.displayName = "InputGroup";
