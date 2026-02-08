/**
 * [FEATURE COMPONENT]: HERO_SYSTEM_ORCHESTRATOR v17.0.2 (LCP-OPTIMIZED)
 * [STRATEGY]: Midnight Aura | Neural Physics | Fluid Symmetry
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface HeroProps {
  readonly title?: React.ReactNode;
  readonly description?: string;
  readonly primaryActionText?: string;
  readonly primaryActionLink?: string;
  readonly secondaryActionText?: string;
  readonly secondaryActionLink?: string;
  readonly className?: string;
}

const Hero = ({
  title = SITE_CONFIG.hero.title,
  description = SITE_CONFIG.hero.description,
  primaryActionText = SITE_CONFIG.hero.primaryAction,
  primaryActionLink = SITE_CONFIG.links.line,
  secondaryActionText = SITE_CONFIG.hero.secondaryAction,
  secondaryActionLink = "#services",
  className,
}: HeroProps) => {
  /* [PHYSICS ENGINE]: Animation Config */
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden px-4 pt-32 pb-20 text-center sm:px-6 lg:px-8",
        className,
      )}
    >
      {/* 00. ATMOSPHERIC ENGINE: พื้นหลังและแสงเงา */}
      <div className="pointer-events-none absolute inset-0 -z-20 select-none" aria-hidden="true">
        {/* Main Aura */}
        <div className="bg-brand-primary/20 absolute top-[-10%] left-1/2 h-[600px] w-[90%] -translate-x-1/2 rounded-full opacity-40 mix-blend-screen blur-[140px]" />

        {/* Grid System */}
        <div className="bg-infrastructure-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-[0.4]" />

        {/* Secondary Glow */}
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 opacity-30 blur-[100px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-6xl space-y-10"
      >
        {/* 01. STATUS INDICATOR */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="group border-brand-primary/20 bg-brand-primary/5 hover:border-brand-primary/40 hover:bg-brand-primary/10 relative inline-flex items-center gap-3 overflow-hidden rounded-full border px-5 py-2 backdrop-blur-md transition-all duration-500">
            <span className="relative flex h-2 w-2">
              <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-[0_0_10px_var(--color-brand-primary)]"></span>
            </span>
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
              System.v{SITE_CONFIG.project.version}_Online
            </span>
          </div>
        </motion.div>

        {/* 02. CORE NARRATIVE */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h1 className="mx-auto max-w-5xl text-5xl leading-[0.95] font-black tracking-tighter text-balance text-white uppercase italic sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            <span className="bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <div className="mx-auto max-w-3xl">
            <p className="text-lg leading-relaxed font-medium text-balance text-slate-400 opacity-90 md:text-xl lg:text-2xl">
              {description}
            </p>
          </div>
        </motion.div>

        {/* 03. INTERFACE ACTIONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6"
        >
          <Button
            asChild
            className="group hover:bg-brand-primary relative h-16 w-full rounded-full bg-white px-10 text-sm font-black tracking-widest text-black shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] transition-all duration-500 hover:scale-105 hover:text-black hover:shadow-[0_0_40px_-5px_var(--color-brand-primary)] sm:w-auto"
          >
            <Link href={primaryActionLink} target="_blank">
              <span className="relative z-10 flex items-center gap-3 uppercase">
                {primaryActionText}
                <IconRenderer
                  name="ArrowRight"
                  size={18}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group h-16 w-full rounded-full border-white/10 bg-white/5 px-10 text-sm font-black tracking-widest text-white backdrop-blur-sm transition-all duration-500 hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            <Link href={secondaryActionLink}>
              <span className="flex items-center gap-3 uppercase">
                <IconRenderer
                  name="Layers"
                  size={18}
                  className="text-brand-primary opacity-70 transition-opacity group-hover:opacity-100"
                />
                {secondaryActionText}
              </span>
            </Link>
          </Button>
        </motion.div>

        {/* [NEW] 04. HERO VISUALIZER (LCP FIX) */}
        {/* เพิ่มส่วนแสดงรูปภาพเพื่อแก้ปัญหา LCP และสร้างความน่าเชื่อถือ */}
        <motion.div
          variants={itemVariants}
          className="relative mt-16 flex w-full justify-center px-4"
        >
          <div className="shadow-brand-primary/10 relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl lg:aspect-[21/9]">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />

            <Image
              src="/images/hero/main-hero.webp" // [CRITICAL]: ใช้รูปจริงที่มีอยู่ในระบบ
              alt="AEMDEVWEB Strategic Interface"
              fill
              priority // [LCP FIX]: บังคับโหลดทันที
              className="object-cover object-top opacity-80 transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
            />

            {/* Overlay Grid */}
            <div className="absolute inset-0 z-20 bg-[url('/grid-pattern.svg')] opacity-20 mix-blend-overlay" />
          </div>
        </motion.div>
      </motion.div>

      {/* 05. DECORATIVE FOOTER */}
      <div className="absolute bottom-0 left-0 hidden w-full justify-between px-12 pb-12 lg:flex">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-12 bg-white/20" />
          <span className="font-mono text-[9px] font-bold tracking-[0.4em] text-white uppercase">
            Scroll_To_Explore
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="font-mono text-[9px] font-bold tracking-[0.4em] text-white uppercase"
        >
          {SITE_CONFIG.brandName} &copy; {new Date().getFullYear()}
        </motion.div>
      </div>
    </section>
  );
};

export default memo(Hero);
