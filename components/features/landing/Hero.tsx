"use client";

/**
 * [FEATURE COMPONENT]: HERO_SYSTEM_ORCHESTRATOR v17.3.11 (STABILIZED_FINAL)
 * [STRATEGY]: Zero-Latency Paint | Theme-Aware Interface | LCP_MAX_OPTIMIZED
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

import React, { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

// --- Infrastructure & Data ---
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";

// --- UI Components ---
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

/**
 * [FIXED]: เพิ่ม subtitle เพื่อแก้ Error TS2322 ในหน้า About, Privacy, Terms และ Templates ต่างๆ
 */
export interface HeroProps {
  readonly title?: React.ReactNode;
  readonly subtitle?: string | React.ReactNode; // รองรับ subtitle จาก Page ต่างๆ
  readonly description?: string;               // รองรับ description จาก SITE_CONFIG
  readonly primaryActionText?: string;
  readonly primaryActionLink?: string;
  readonly secondaryActionText?: string;
  readonly secondaryActionLink?: string;
  readonly className?: string;
}

const Hero = ({
  title = SITE_CONFIG.hero.title,
  subtitle, 
  description = SITE_CONFIG.hero.description,
  primaryActionText = SITE_CONFIG.hero.primaryAction,
  primaryActionLink = SITE_CONFIG.links.line,
  secondaryActionText = SITE_CONFIG.hero.secondaryAction,
  secondaryActionLink = "#services",
  className,
}: HeroProps) => {
  
  // [DETERMINISTIC FIX]: ป้องกัน Hydration Error
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // [LOGIC]: เลือกใช้เนื้อหาจาก subtitle ก่อน ถ้าไม่มีให้ใช้ description
  const displayDescription = subtitle || description;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const currentYear = SITE_CONFIG.business.established?.split('-')[0] || "2026";

  return (
    <section
      className={cn(
        "relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-surface-main px-4 pt-32 pb-20 text-center sm:px-6 lg:px-8 transition-colors duration-500",
        className,
      )}
    >
      {/* 00. ATMOSPHERIC ENGINE */}
      <div className="pointer-events-none absolute inset-0 -z-20 select-none" aria-hidden="true">
        <div className="bg-brand-primary/20 absolute top-[-10%] left-1/2 h-[600px] w-[90%] -translate-x-1/2 rounded-full opacity-[var(--ambient-opacity,0.3)] mix-blend-screen blur-[140px]" />
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[var(--ambient-opacity,0.1)]" />
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
              <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-glow"></span>
            </span>
            <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.3em] uppercase">
              System_Online.v{SITE_CONFIG.project.version}
            </span>
          </div>
        </motion.div>

        {/* 02. CORE NARRATIVE */}
        <motion.div variants={itemVariants} className="space-y-8">
          <h1 className="mx-auto max-w-5xl text-5xl leading-[0.95] font-black tracking-tighter text-balance text-text-primary uppercase italic sm:text-6xl md:text-7xl lg:text-[6.5rem]">
            <span className="bg-gradient-to-b from-text-primary via-text-primary to-text-primary/50 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <div className="mx-auto max-w-3xl">
            {/* [RESOLVED]: แสดงผลได้ทั้งจาก subtitle และ description */}
            <div className="text-text-secondary text-lg leading-relaxed font-medium text-balance opacity-90 md:text-xl lg:text-2xl">
              {displayDescription}
            </div>
          </div>
        </motion.div>

        {/* 03. INTERFACE ACTIONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 pt-6 sm:flex-row sm:gap-6"
        >
          <Button
            asChild
            className="group hover:bg-brand-primary relative h-16 w-full rounded-full bg-text-primary px-10 text-sm font-black tracking-widest text-surface-main shadow-2xl transition-all duration-500 hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            <Link href={primaryActionLink} target={primaryActionLink.startsWith('http') ? "_blank" : "_self"}>
              <span className="relative z-10 flex items-center gap-3 uppercase">
                {primaryActionText}
                <IconRenderer name="ArrowRight" size={18} className="transition-transform duration-500 group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="group h-16 w-full rounded-full border-border bg-surface-card px-10 text-sm font-black tracking-widest text-text-primary backdrop-blur-sm transition-all duration-500 hover:border-text-primary/30 hover:bg-surface-offset active:scale-95 sm:w-auto"
          >
            <Link href={secondaryActionLink}>
              <span className="flex items-center gap-3 uppercase">
                <IconRenderer name="Layers" size={18} className="text-brand-primary opacity-70 transition-opacity group-hover:opacity-100" />
                {secondaryActionText}
              </span>
            </Link>
          </Button>
        </motion.div>

        {/* 04. HERO VISUALIZER */}
        <motion.div variants={itemVariants} className="relative mt-16 flex w-full justify-center px-4">
          <div className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-surface-card shadow-2xl lg:aspect-[21/9]">
            <div className="bg-surface-offset absolute inset-0 z-0 animate-pulse" />
            <Image
              src="/images/hero/main-hero.webp"
              alt={`${SITE_CONFIG.brandName} Strategic Interface Showcase`}
              fill
              priority
              quality={90}
              className="object-cover object-top opacity-80 transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
            />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-surface-main via-transparent to-transparent opacity-60" />
          </div>
        </motion.div>
      </motion.div>

      {/* 05. DECORATIVE FOOTER */}
      {hasMounted && (
        <div className="absolute bottom-0 left-0 hidden w-full justify-between px-12 pb-12 lg:flex">
          <div className="flex items-center gap-4 opacity-40">
            <div className="bg-border h-px w-12" />
            <span className="text-text-primary font-mono text-[9px] font-bold tracking-[0.4em] uppercase">Scroll_To_Explore</span>
          </div>
          <div className="text-text-primary font-mono text-[9px] font-bold tracking-[0.4em] uppercase opacity-40">
            {SITE_CONFIG.brandName} &copy; {currentYear}
          </div>
        </div>
      )}
    </section>
  );
};

export default memo(Hero);
