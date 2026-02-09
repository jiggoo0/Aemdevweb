/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v17.3.9 (HYBRID_STABILIZED)
 * [STRATEGY]: Symmetric Balance | Multi-Theme Orchestration | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// --- 1. Infrastructure & UI ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";

// --- Data Structure ---
interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly unit?: string;
  readonly features: readonly string[];
  readonly highlight: boolean;
  readonly cta: string;
}

const PRICING_PLANS: readonly PricingPlan[] = [
  {
    id: "plan-standard",
    name: "Standard Foundation",
    description: "วางรากฐานเว็บไซต์ให้มั่นคง ดูเป็นมืออาชีพ เพื่อเริ่มต้นสร้างความเชื่อมั่นบนโลกออนไลน์",
    price: "15,900",
    unit: "/ Project",
    features: [
      "ระบบ Next.js ความเร็วสูง (Gen 2026)",
      "Performance Score 95-100 คะแนน",
      "Responsive Design ทุกหน้าจอ 100%",
      "วางโครงสร้าง Technical SEO พื้นฐาน",
      "เชื่อมต่อ Line OA / Facebook Chat",
    ],
    highlight: false,
    cta: "เริ่มวางรากฐานธุรกิจ",
  },
  {
    id: "plan-growth",
    name: "Strategic Growth",
    description: "แผนงานเชิงกลยุทธ์เพื่อขยายตลาด ดึงดูดลูกค้าใหม่ และเพิ่มโอกาสการขายอย่างยั่งยืน",
    price: "29,500",
    unit: "/ Project",
    features: [
      "ทุกความสามารถของแพ็กเกจ Standard",
      "ระบบ MDX CMS จัดการบทความ SEO",
      "เน้นทำอันดับ Keyword เชิงพาณิชย์",
      "ติดตั้ง Analytics ติดตาม Conversion",
      "สิทธิ์ปรึกษาแผนงานกับ Specialist",
    ],
    highlight: true,
    cta: "ยกระดับธุรกิจให้เติบโต",
  },
  {
    id: "plan-enterprise",
    name: "Enterprise Custom",
    description: "ระบบพิเศษที่ออกแบบเฉพาะทาง ตอบโจทย์เป้าหมายธุรกิจที่ซับซ้อนและสเกลใหญ่",
    price: "Custom",
    unit: "",
    features: [
      "สถาปัตยกรรมระบบออกแบบเฉพาะ (Tailored)",
      "เชื่อมต่อ API และจัดการ Database",
      "วางกลยุทธ์ SEO ระดับประเทศ/สากล",
      "ความปลอดภัยระดับ Enterprise Security",
      "ทีม Support ดูแลระบบแบบ Priority 24/7",
    ],
    highlight: false,
    cta: "คุยแผนงานพิเศษ",
  },
] as const;

const PricingSection = () => {
  /* [PHYSICS]: Neural Flow Configuration */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 50, damping: 20 },
    },
  };

  return (
    <section id="pricing" className="relative w-full overflow-hidden bg-surface-main transition-colors duration-500">
      {/* 01. VALUE PROPOSITION: Header */}
      <div className="mb-20 max-w-4xl md:mb-28">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="border-brand-primary/30 bg-brand-primary/5 mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
            <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-glow"></span>
          </span>
          <span className="text-brand-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Investment_Logic.v2
          </span>
        </motion.div>

        <h2 className="text-text-primary text-5xl font-black tracking-tighter text-balance uppercase md:text-7xl lg:text-8xl">
          Value-Driven <br />
          <span className="from-brand-primary bg-gradient-to-r to-emerald-500 bg-clip-text text-transparent">
            Investment.
          </span>
        </h2>

        <div className="border-brand-primary/50 mt-8 border-l-4 pl-6 md:pl-8">
          <p className="text-text-secondary max-w-2xl text-lg leading-relaxed font-medium md:text-2xl">
            งบประมาณที่โปร่งใส คือ{" "}
            <span className="decoration-brand-primary text-text-primary underline decoration-2 underline-offset-4">
              ความจริงใจ
            </span>{" "}
            ที่เราพร้อมเปลี่ยนทุกการลงทุนให้เป็นระบบทำเงินที่วัดผลได้จริง
          </p>
        </div>
      </div>

      {/* 02. PRICING GRID: Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center"
      >
        {PRICING_PLANS.map((plan) => (
          <motion.div
            key={plan.id}
            variants={cardVariants}
            className={cn(
              "group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-8 transition-all duration-500 md:p-10",
              /* [HYBRID THEME]: ปรับจูนพื้นหลังและการ์ดตามโหมด */
              plan.highlight
                ? "border-brand-primary bg-brand-primary/[0.03] z-10 shadow-glow lg:scale-110 lg:py-12"
                : "border-border bg-surface-card hover:border-brand-primary/30 hover:bg-surface-offset/50",
            )}
          >
            {/* Dynamic Glow Overlay */}
            {plan.highlight && (
              <div className="bg-brand-primary/10 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px] opacity-[var(--ambient-opacity)]" />
            )}

            <div>
              {/* Header Node */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h3 className={cn(
                    "text-2xl font-black tracking-tight uppercase md:text-3xl",
                    "text-text-primary"
                  )}>
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="bg-brand-primary mt-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider text-surface-main uppercase">
                      Recommended
                    </span>
                  )}
                </div>
                <IconRenderer
                  name={plan.highlight ? "Zap" : "Layers"}
                  className={cn("h-6 w-6 transition-colors duration-500", plan.highlight ? "text-brand-primary" : "text-text-muted")}
                />
              </div>

              {/* Price Node */}
              <div className="border-border mb-8 border-b pb-8">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "text-4xl font-black tracking-tighter md:text-5xl",
                    plan.highlight ? "text-brand-primary" : "text-text-primary"
                  )}>
                    {plan.price !== "Custom" ? `฿${plan.price}` : plan.price}
                  </span>
                  {plan.unit && (
                    <span className="text-text-muted font-mono text-xs font-medium">{plan.unit}</span>
                  )}
                </div>
                <p className="text-text-secondary mt-4 text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="mb-10 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={cn(
                      "mt-0.5 rounded-full p-0.5",
                      plan.highlight ? "text-brand-primary" : "text-text-muted"
                    )}>
                      <IconRenderer name="Check" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-text-secondary text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Interaction Hub */}
            <Link
              href={SITE_CONFIG.links.line}
              className={cn(
                "group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-4 text-xs font-bold tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]",
                plan.highlight
                  ? "bg-brand-primary text-surface-main hover:shadow-glow shadow-lg"
                  : "bg-text-primary text-surface-main hover:bg-brand-primary hover:text-surface-main shadow-md",
              )}
            >
              <span className="relative z-10">{plan.cta}</span>
              <IconRenderer
                name="ArrowRight"
                size={14}
                className="relative z-10 transition-transform group-hover/btn:translate-x-1"
              />
              <div className="absolute inset-0 z-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-full" />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* 03. SYSTEM FOOTNOTE */}
      <div className="mt-16 text-center md:mt-24">
        <p className="text-text-muted text-[10px] font-bold tracking-widest uppercase">
          * ราคาทั้งหมดเป็นราคาเริ่มต้นและยังไม่รวม VAT 7% • ดูแลความปลอดภัยฟรี 1 ปีเต็ม
        </p>
      </div>
    </section>
  );
};

export default memo(PricingSection);
