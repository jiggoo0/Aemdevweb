/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v18.1.0 (PRODUCTION_MAXIMIZED)
 * [STRATEGY]: Symmetric Balance | Hydration Guarded | GPU-Accelerated
 */

"use client";

import React, { memo, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import type { Route } from "next";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: number | string;
  readonly unit: string;
  readonly features: readonly string[];
  readonly cta: string;
  readonly highlight: boolean;
  readonly href: string;
  readonly isExternal?: boolean;
}

const PricingSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  // ป้องกัน Hydration Mismatch จากการใช้ toLocaleString()
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const displayPlans = useMemo<readonly PricingPlan[]>(() => {
    const foundationData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-CP-03") || MASTER_REGISTRY[0];
    const growthData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-SEO-07") || MASTER_REGISTRY[1];

    return [
      {
        id: "foundation",
        name: "Standard Foundation",
        price: foundationData?.priceValue || 29000,
        unit: "/ Project",
        features: foundationData?.benefits?.slice(0, 4) || [
          "Core System Infrastructure",
          "Responsive Neural UI",
          "Technical SEO Setup",
          "Admin Deployment",
        ],
        cta: "เริ่มวางรากฐานธุรกิจ",
        highlight: false,
        href: `/services/${foundationData?.templateSlug || "standard"}`,
      },
      {
        id: "growth",
        name: "Strategic Growth",
        price: growthData?.priceValue || 45000,
        unit: "/ Project",
        features: [
          ...(growthData?.benefits?.slice(0, 3) || []),
          "Specialist Consultation (Priority)",
          "Conversion Rate Optimization",
        ],
        cta: "ยกระดับธุรกิจให้เติบโต",
        highlight: true,
        href: `/services/${growthData?.templateSlug || "growth"}`,
      },
      {
        id: "enterprise",
        name: "Enterprise Custom",
        price: "Custom",
        unit: "Tailored Architecture",
        features: [
          "Infrastructure Scaling Strategy",
          "API & Advanced DB Integration",
          "National SEO Dominance",
          "Dedicated Support Node",
        ],
        cta: "คุยแผนงานพิเศษ",
        highlight: false,
        href: SITE_CONFIG.links.line,
        isExternal: true,
      },
    ];
  }, []);

  return (
    <section id="pricing" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-8">
        {/* --- 01. HEADER --- */}
        <header className="mb-20 max-w-5xl md:mb-32">
          <div className="text-brand-primary mb-8 flex items-center gap-4">
            <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
            <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">Investment_Protocol</span>
          </div>
          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl">
            Value-Driven <br />
            <span className="text-brand-primary">Investment.</span>
          </h2>
          <div className="border-brand-primary mt-12 max-w-3xl border-l-[6px] pl-10">
            <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-80 md:text-3xl">
              “งบประมาณที่โปร่งใส คือ <span className="text-text-primary decoration-brand-primary font-black underline underline-offset-8">ความจริงใจ</span> ที่วัดผลได้จริง”
            </p>
          </div>
        </header>

        {/* --- 02. PRICING GRID --- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-stretch lg:gap-10">
          {displayPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                "group relative flex flex-col rounded-[2.5rem] border p-8 md:p-12 transition-all duration-500 transform-gpu",
                plan.highlight 
                  ? "border-brand-primary bg-surface-card/90 shadow-glow-lg z-10 lg:scale-[1.03]" 
                  : "bg-surface-card border-border hover:border-brand-primary/40"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-brand-primary text-surface-main shadow-glow flex items-center gap-2 rounded-full px-6 py-2">
                    <IconRenderer name="Zap" size={12} className="fill-current" />
                    <span className="text-[10px] font-black tracking-widest uppercase">Recommended</span>
                  </div>
                </div>
              )}

              <div className="border-border mb-10 border-b pb-10">
                <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">Plan_Node.0{i + 1}</span>
                <h3 className="text-text-primary group-hover:text-brand-primary mt-4 text-3xl font-black tracking-tighter uppercase italic transition-colors">
                  {plan.name}
                </h3>
                <div className="mt-8 flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    {typeof plan.price === "number" && <span className="text-brand-primary font-black opacity-60">฿</span>}
                    <span className="text-text-primary text-5xl font-black tracking-tighter italic tabular-nums md:text-7xl">
                      {!isMounted ? "---" : (typeof plan.price === "number" ? plan.price.toLocaleString("th-TH") : plan.price)}
                    </span>
                  </div>
                  <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.3em] uppercase opacity-50">{plan.unit}</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col">
                <ul className="mb-14 space-y-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className={cn(
                        "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border",
                        plan.highlight ? "bg-brand-primary border-brand-primary text-white shadow-glow" : "bg-surface-offset border-border text-brand-primary"
                      )}>
                        <IconRenderer name="Check" size={12} strokeWidth={4} />
                      </div>
                      <span className="text-text-secondary text-sm font-bold italic opacity-90 md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {plan.isExternal ? (
                    <a href={plan.href} target="_blank" rel="noopener noreferrer" 
                       className="border-border bg-surface-offset text-text-primary hover:border-brand-primary hover:text-brand-primary flex h-16 w-full items-center justify-center rounded-[2rem] border text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500">
                      {plan.cta}
                    </a>
                  ) : (
                    <Link href={plan.href as Route}
                          className={cn(
                            "flex h-16 w-full items-center justify-center rounded-[2rem] text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-500",
                            plan.highlight ? "bg-brand-primary text-white shadow-glow hover:scale-[1.02]" : "border-border bg-surface-offset text-text-primary border hover:border-brand-primary"
                          )}>
                      {plan.cta}
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
