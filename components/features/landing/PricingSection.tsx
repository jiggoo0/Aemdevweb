/**
 * [FEATURE COMPONENT]: PRICING_ARCHITECTURE v17.0.2 (MIDNIGHT_EDITION)
 * [STRATEGY]: Symmetric Balance | High-Contrast Conversion | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

// 1. System/Library
import React, { memo } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// 2. Constants & Utilities
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// 3. UI Components
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
    description:
      "วางรากฐานเว็บไซต์ให้มั่นคง ดูเป็นมืออาชีพ เพื่อเริ่มต้นสร้างความเชื่อมั่นบนโลกออนไลน์",
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
  // [PHYSICS]: ตั้งค่าแอนิเมชัน (Neural Flow)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <section id="pricing" className="relative w-full overflow-hidden">
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
            <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full"></span>
          </span>
          <span className="text-brand-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Investment_Logic.v2
          </span>
        </motion.div>

        <h2 className="text-5xl font-black tracking-tighter text-balance text-white uppercase md:text-7xl lg:text-8xl">
          Value-Driven <br />
          <span className="from-brand-primary bg-gradient-to-r to-emerald-400 bg-clip-text text-transparent">
            Investment.
          </span>
        </h2>

        <div className="border-brand-primary/50 mt-8 border-l-4 pl-6 md:pl-8">
          <p className="max-w-2xl text-lg leading-relaxed font-medium text-gray-400 md:text-2xl">
            งบประมาณที่โปร่งใส คือ{" "}
            <span className="decoration-brand-primary text-white underline decoration-2 underline-offset-4">
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
              plan.highlight
                ? "border-brand-primary bg-brand-primary/[0.03] z-10 shadow-[0_0_50px_-12px_rgba(34,197,94,0.15)] lg:scale-110 lg:py-12"
                : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]",
            )}
          >
            {/* Background Glow for Highlight */}
            {plan.highlight && (
              <div className="bg-brand-primary/20 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px]" />
            )}

            <div>
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <h3
                    className={cn(
                      "text-2xl font-black tracking-tight uppercase md:text-3xl",
                      plan.highlight ? "text-white" : "text-gray-200",
                    )}
                  >
                    {plan.name}
                  </h3>
                  {plan.highlight && (
                    <span className="bg-brand-primary mt-2 inline-block rounded-md px-2 py-0.5 text-[10px] font-bold tracking-wider text-black uppercase">
                      Recommended
                    </span>
                  )}
                </div>
                <IconRenderer
                  name={plan.highlight ? "Zap" : "Layers"}
                  className={cn("h-6 w-6", plan.highlight ? "text-brand-primary" : "text-gray-600")}
                />
              </div>

              {/* Price */}
              <div className="mb-8 border-b border-white/5 pb-8">
                <div className="flex items-baseline gap-1">
                  <span
                    className={cn(
                      "text-4xl font-black tracking-tighter md:text-5xl",
                      plan.highlight ? "text-brand-primary" : "text-white",
                    )}
                  >
                    {plan.price !== "Custom" ? `฿${plan.price}` : plan.price}
                  </span>
                  {plan.unit && (
                    <span className="font-mono text-xs font-medium text-gray-500">{plan.unit}</span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-400">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="mb-10 space-y-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <IconRenderer
                      name="Check"
                      className={cn(
                        "mt-0.5 h-4 w-4 shrink-0",
                        plan.highlight ? "text-brand-primary" : "text-gray-600",
                      )}
                    />
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              href={SITE_CONFIG.links.line}
              className={cn(
                "group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl py-4 text-xs font-bold tracking-widest uppercase transition-all hover:scale-[1.02] active:scale-[0.98]",
                plan.highlight
                  ? "bg-brand-primary hover:bg-brand-primary/90 hover:shadow-brand-primary/20 text-black shadow-lg"
                  : "bg-white text-black hover:bg-gray-200",
              )}
            >
              <span>{plan.cta}</span>
              <IconRenderer
                name="ArrowRight"
                size={14}
                className="transition-transform group-hover/btn:translate-x-1"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* 03. FOOTER NOTE */}
      <div className="mt-16 text-center md:mt-24">
        <p className="text-xs font-medium text-gray-500">
          * ราคาทั้งหมดเป็นราคาเริ่มต้นและยังไม่รวม VAT 7% • ดูแลความปลอดภัยฟรี 1 ปีเต็ม
        </p>
      </div>
    </section>
  );
};

export default memo(PricingSection);
