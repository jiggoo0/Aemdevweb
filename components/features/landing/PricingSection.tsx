/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v17.4.7 (OPTIMIZED)
 * [STRATEGY]: Symmetric Balance | Information Hierarchy | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo, useMemo } from "react";
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
}

const PricingSection = () => {
  // [DATA_ENGINE]: Source of Truth Integration
  const displayPlans = useMemo<readonly PricingPlan[]>(() => {
    const foundationData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-CP-03");
    const growthData = MASTER_REGISTRY.find((s) => s.id === "AEM-SVC-SEO-07");

    const plans: PricingPlan[] = [];

    // 1. Module: Standard Foundation
    if (foundationData) {
      plans.push({
        id: "foundation",
        name: "Standard Foundation",
        price: foundationData.priceValue,
        unit: "/ Project",
        features: foundationData.benefits.slice(0, 4),
        cta: "เริ่มวางรากฐานธุรกิจ",
        highlight: false,
        href: `/services/${foundationData.templateSlug}`,
      });
    }

    // 2. Module: Strategic Growth (Focal Point)
    if (growthData) {
      plans.push({
        id: "growth",
        name: "Strategic Growth",
        price: growthData.priceValue,
        unit: `/ ${growthData.unit}`,
        features: [...growthData.benefits.slice(0, 3), "Specialist Consultation (Priority)"],
        cta: "ยกระดับธุรกิจให้เติบโต",
        highlight: true,
        href: `/services/${growthData.templateSlug}`,
      });
    }

    // 3. Module: Enterprise Custom
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
    });

    return plans;
  }, []);

  return (
    <section id="pricing" className="overflow-hidden py-32 md:py-48 lg:py-56">
      <div className="container mx-auto px-4">
        {/* --- 01. HEADER: Macro-Typography --- */}
        <header className="mb-24 max-w-5xl">
          <div className="bg-brand-primary mb-8 h-2 w-24 rounded-full" />
          <h2 className="text-text-primary text-6xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-9xl">
            Value-Driven <br />
            <span className="text-brand-primary">Investment.</span>
          </h2>
          <p className="text-text-secondary border-brand-primary mt-12 max-w-3xl border-l-[6px] pl-10 text-xl font-medium italic opacity-80 md:text-3xl">
            “งบประมาณที่โปร่งใส คือความจริงใจที่เราเปลี่ยนเป็นการทำเงินที่วัดผลได้จริง”
          </p>
        </header>

        {/* --- 02. PRICING GRID --- */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-center lg:gap-12">
          {displayPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12 }}
              className={cn(
                "bg-surface-card border-border relative flex flex-col rounded-[4rem] border p-12 transition-all duration-700",
                plan.highlight
                  ? "border-brand-primary shadow-glow ring-brand-primary/20 bg-surface-card/80 z-20 ring-1 backdrop-blur-3xl lg:scale-[1.05] lg:py-20"
                  : "hover:border-brand-primary/30 shadow-pro-sm",
              )}
            >
              {/* Specialist Choice Badge */}
              {plan.highlight && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-brand-primary text-surface-main shadow-glow flex items-center gap-3 rounded-full px-8 py-2.5">
                    <IconRenderer name="Zap" size={14} className="fill-current" />
                    <span className="text-[11px] font-black tracking-widest uppercase">
                      Recommended_Path
                    </span>
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="border-border mb-10 border-b pb-10">
                <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.4em] uppercase opacity-40">
                  Plan_Node.0{i + 1}
                </span>
                <h3 className="text-text-primary mt-4 text-3xl font-black tracking-tighter uppercase italic">
                  {plan.name}
                </h3>

                <div className="mt-8 flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    {typeof plan.price === "number" && (
                      <span className="text-brand-primary text-sm font-black opacity-60">฿</span>
                    )}
                    <span className="text-text-primary text-6xl font-black tracking-tighter tabular-nums md:text-7xl">
                      {typeof plan.price === "number"
                        ? plan.price.toLocaleString("th-TH")
                        : plan.price}
                    </span>
                  </div>
                  <span className="text-text-muted font-mono text-[9px] font-bold tracking-[0.3em] uppercase opacity-50">
                    {plan.unit}
                  </span>
                </div>
              </div>

              {/* Feature Matrix */}
              <ul className="mb-14 flex-grow space-y-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-5">
                    <div
                      className={cn(
                        "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-xl border",
                        plan.highlight
                          ? "bg-brand-primary border-brand-primary text-surface-main shadow-glow"
                          : "bg-surface-offset border-border text-brand-primary",
                      )}
                    >
                      <IconRenderer name="Check" size={12} strokeWidth={4} />
                    </div>
                    <span className="text-text-secondary group-hover:text-text-primary text-base leading-snug font-bold italic opacity-90 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Interaction Node */}
              <Link
                href={plan.href}
                className={cn(
                  "flex h-20 w-full items-center justify-center rounded-[2rem] text-[12px] font-black tracking-[0.3em] uppercase transition-all duration-500",
                  plan.highlight
                    ? "bg-brand-primary text-surface-main shadow-glow hover:scale-[1.02] active:scale-[0.98]"
                    : "bg-surface-offset text-text-primary border-border hover:border-brand-primary hover:text-brand-primary hover:shadow-glow-sm border",
                )}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PricingSection);
