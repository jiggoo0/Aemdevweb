/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v17.9.9 (STABILIZED_FINAL)
 * [STRATEGY]: Symmetric Balance | Hydration-Safe Numbers | Typed Routes Fix
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";
import type { Route } from "next";

import React, { memo, useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import { MASTER_REGISTRY } from "@/constants/master-registry";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

// --- Types Protocol ---
interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: number | string;
  readonly unit: string;
  readonly features: readonly string[];
  readonly cta: string;
  readonly highlight: boolean;
  readonly href: string;
  readonly isExternal?: boolean; // [NEW]: แยกประเภทลิงก์เพื่อความปลอดภัย
}

const PricingSection = () => {
  // [HYDRATION_GUARD]: ล็อคสถานะ Mount เพื่อป้องกันตัวเลขราคา Mismatch ระหว่าง Server/Client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // [DATA_ENGINE]: Source of Truth Integration
  const displayPlans = useMemo<readonly PricingPlan[]>(() => {
    const foundationData =
      MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-CP-03") || MASTER_REGISTRY[0];
    const growthData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-SEO-07") || MASTER_REGISTRY[1];

    const plans: PricingPlan[] = [];

    // 1. Module: Standard Foundation
    if (foundationData) {
      plans.push({
        id: "foundation",
        name: "Standard Foundation",
        price: foundationData.priceValue || 29000,
        unit: "/ Project",
        features: foundationData.benefits?.slice(0, 4) || [
          "Core System Infrastructure",
          "Responsive Neural UI",
          "Technical SEO Setup",
          "Admin Deployment",
        ],
        cta: "เริ่มวางรากฐานธุรกิจ",
        highlight: false,
        href: `/services/${foundationData.templateSlug}`,
      });
    }

    // 2. Module: Strategic Growth
    if (growthData) {
      plans.push({
        id: "growth",
        name: "Strategic Growth",
        price: growthData.priceValue || 45000,
        unit: "/ Project",
        features: [
          ...(growthData.benefits?.slice(0, 3) || []),
          "Specialist Consultation (Priority)",
          "Conversion Rate Optimization",
        ],
        cta: "ยกระดับธุรกิจให้เติบโต",
        highlight: true,
        href: `/services/${growthData.templateSlug}`,
      });
    }

    // 3. Module: Enterprise Custom (External Link Case)
    plans.push({
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
      isExternal: true, // [REQUIRED]: สำหรับการแก้ TS2322
    });

    return plans;
  }, []);

  return (
    <section id="pricing" className="overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-4">
        {/* --- 01. HEADER: Macro-Typography --- */}
        <header className="mb-20 max-w-5xl md:mb-24">
          <div className="bg-brand-primary mb-6 h-2 w-16 rounded-full md:mb-8 md:w-24" />
          <h2 className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-7xl lg:text-9xl">
            Value-Driven <br />
            <span className="text-brand-primary">Investment.</span>
          </h2>
          <div className="border-brand-primary mt-10 max-w-3xl border-l-[4px] pl-6 md:mt-12 md:border-l-[6px] md:pl-10">
            <p className="text-text-secondary text-lg font-medium italic opacity-80 md:text-2xl lg:text-3xl">
              “งบประมาณที่โปร่งใส คือความจริงใจที่เราเปลี่ยนเป็นการทำเงินที่วัดผลได้จริง”
            </p>
          </div>
        </header>

        {/* --- 02. PRICING GRID --- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-10 xl:gap-12">
          {displayPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className={cn(
                "bg-surface-card border-border relative flex flex-col rounded-[3rem] border p-8 transition-all duration-700 md:p-10",
                plan.highlight
                  ? "border-brand-primary shadow-glow ring-brand-primary/20 bg-surface-card/90 z-20 ring-1 backdrop-blur-3xl lg:scale-[1.05] lg:py-16"
                  : "hover:border-brand-primary/30 shadow-pro-sm",
                "transform-gpu will-change-transform",
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 md:-top-6">
                  <div className="bg-brand-primary text-surface-main shadow-glow flex items-center gap-2 rounded-full px-6 py-2 md:gap-3 md:px-8 md:py-2.5">
                    <IconRenderer name="Zap" size={14} className="fill-current" />
                    <span className="text-[9px] font-black tracking-widest uppercase md:text-[11px]">
                      Recommended_Path
                    </span>
                  </div>
                </div>
              )}

              {/* Price Content */}
              <div className="border-border mb-8 border-b pb-8 md:mb-10 md:pb-10">
                <span className="text-text-muted font-mono text-[9px] font-black tracking-[0.4em] uppercase opacity-40">
                  Plan_Node.0{i + 1}
                </span>
                <h3 className="text-text-primary mt-4 text-2xl font-black tracking-tighter uppercase italic md:text-3xl">
                  {plan.name}
                </h3>

                <div className="mt-6 flex flex-col gap-1 md:mt-8">
                  <div className="flex items-baseline gap-2">
                    {typeof plan.price === "number" && (
                      <span className="text-brand-primary text-xs font-black opacity-60 md:text-sm">
                        ฿
                      </span>
                    )}
                    <span
                      suppressHydrationWarning
                      className="text-text-primary text-5xl font-black tracking-tighter tabular-nums md:text-6xl lg:text-7xl"
                    >
                      {mounted && typeof plan.price === "number"
                        ? plan.price.toLocaleString("th-TH")
                        : plan.price}
                    </span>
                  </div>
                  <span className="text-text-muted font-mono text-[8px] font-bold tracking-[0.3em] uppercase opacity-50 md:text-[9px]">
                    {plan.unit}
                  </span>
                </div>
              </div>

              {/* Features List */}
              <ul className="mb-10 flex-grow space-y-5 md:mb-14 md:space-y-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4 md:gap-5">
                    <div
                      className={cn(
                        "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border md:h-6 md:w-6 md:rounded-xl",
                        plan.highlight
                          ? "bg-brand-primary border-brand-primary text-surface-main shadow-glow"
                          : "bg-surface-offset border-border text-brand-primary",
                      )}
                    >
                      <IconRenderer name="Check" size={12} strokeWidth={4} />
                    </div>
                    <span className="text-text-secondary text-sm leading-snug font-bold italic opacity-90 md:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* [RESOLVED]: Link Architecture for Typed Routes */}
              {plan.isExternal ? (
                /* กรณีลิงก์ภายนอก: ใช้แท็ก <a> เพื่อเลี่ยงกฎ Typed Routes ของ Next.js 16 */
                <a
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex h-16 w-full items-center justify-center rounded-[2rem] text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 md:h-20 md:text-[12px]",
                    "bg-surface-offset text-text-primary border-border hover:border-brand-primary hover:text-brand-primary hover:shadow-glow-sm transform-gpu border",
                  )}
                >
                  {plan.cta}
                </a>
              ) : (
                /* กรณีลิงก์ภายใน: ใช้ <Link> และ Cast 'as Route' เพื่อให้ผ่านการ Build */
                <Link
                  href={plan.href as Route}
                  className={cn(
                    "flex h-16 w-full items-center justify-center rounded-[2rem] text-[10px] font-black tracking-[0.3em] uppercase transition-all duration-500 md:h-20 md:text-[12px]",
                    plan.highlight
                      ? "bg-brand-primary text-surface-main shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                      : "bg-surface-offset text-text-primary border-border hover:border-brand-primary hover:text-brand-primary hover:shadow-glow-sm border",
                    "transform-gpu will-change-transform",
                  )}
                >
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
