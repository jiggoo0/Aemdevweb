/**
 * [FEATURE COMPONENT]: HERO_GATEWAY_NODE v17.9.111 (LCP_STABILIZED)
 * [STRATEGY]: CSS-First Initial State | Neural Physics | Hydration Safety
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import type { Route } from "next";
import { motion, type Transition } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

/**
 * @component Hero
 * @description จุดยุทธศาสตร์หลักในการนำเสนอคุณค่าแบรนด์และกระตุ้น Conversion ทันที
 */
const Hero = () => {
  /**
   * [PHYSICS]: Neural Spring Transition
   * ออกแบบมาให้ตอบสนองไว (0.6s) เพื่อความรู้สึกแบบ High-Performance
   */
  const sharedTransition: Transition = {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1], // Custom Cubic Bezier สำหรับความพรีเมียม
  };

  /** * [OPTIMIZED]: ป้องกัน Layout Shift (CLS)
   * ใช้ opacity: 0.01 แทน 0 เพื่อให้ Browser จองพื้นที่ไว้ก่อน Hydration
   */
  const fadeUp = {
    initial: { opacity: 0.01, y: 15 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative flex min-h-[85dvh] flex-col justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-36">
      {/* --- 01. INFRASTRUCTURE LAYER (CSS Pattern) --- */}
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.04] select-none"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        aria-hidden="true"
      />

      {/* Dynamic Ambient Aura (GPU Accelerated) */}
      <div
        className="absolute top-[10%] -right-[5%] z-0 h-[500px] w-[500px] transform-gpu rounded-full opacity-20 blur-[100px]"
        style={{ background: "radial-gradient(circle, var(--brand-primary) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Node 01: Status Protocol Badge */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={sharedTransition}
          className="border-brand-primary/20 bg-brand-primary/5 mb-10 inline-flex items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-md"
        >
          <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
          <span className="text-brand-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            Protocol_Active: v{SITE_CONFIG.project.version}
          </span>
        </motion.div>

        {/* Node 02: Main Messaging Matrix (LCP Element) */}
        <div className="max-w-7xl space-y-12">
          <motion.h1
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...sharedTransition, delay: 0.05 }}
            className="text-text-primary text-5xl leading-[0.95] font-black tracking-tighter text-balance uppercase italic transition-opacity duration-300 md:text-8xl lg:text-[7.5rem]"
          >
            <span className="text-brand-primary mr-4 block md:inline">AEMDEVWEB</span>
            {SITE_CONFIG.hero.title.replace("AEMDEVWEB", "")}
          </motion.h1>

          <motion.div
            initial={fadeUp.initial}
            animate={fadeUp.animate}
            transition={{ ...sharedTransition, delay: 0.1 }}
            className="border-brand-primary border-l-[6px] pl-8 md:pl-12"
          >
            <p className="text-text-secondary max-w-3xl text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
              “{SITE_CONFIG.hero.description}”
            </p>
          </motion.div>
        </div>

        {/* Node 03: Conversion Gateway */}
        <motion.div
          initial={fadeUp.initial}
          animate={fadeUp.animate}
          transition={{ ...sharedTransition, delay: 0.15 }}
          className="mt-16 flex flex-col gap-6 md:flex-row md:items-center"
        >
          <Button
            asChild
            size="lg"
            variant="neo"
            className="shadow-glow-lg group h-16 transform-gpu rounded-2xl px-12 transition-all hover:scale-105 active:scale-95 md:h-20 md:px-16"
          >
            <a href={SITE_CONFIG.links.line} target="_blank" rel="noopener noreferrer">
              <IconRenderer
                name="Zap"
                size={20}
                className="mr-3 transition-transform group-hover:scale-125"
              />
              <span className="text-[11px] font-black tracking-widest uppercase">
                {SITE_CONFIG.hero.primaryAction}
              </span>
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-border bg-surface-card/40 hover:bg-surface-card h-16 transform-gpu rounded-2xl px-10 backdrop-blur-sm transition-all active:scale-95 md:h-20 md:px-12"
          >
            <Link href={"/services" as Route} className="flex items-center gap-4">
              <span className="text-[11px] font-black tracking-widest uppercase">
                {SITE_CONFIG.hero.secondaryAction}
              </span>
              <IconRenderer
                name="ArrowRight"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Visual Anchor Bottom (Divider) */}
      <div className="via-border/30 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </section>
  );
};

Hero.displayName = "Hero";

export default memo(Hero);
