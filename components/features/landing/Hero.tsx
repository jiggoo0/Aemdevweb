/**
 * [FEATURE COMPONENT]: HERO_GATEWAY_NODE v17.5.6 (LCP_PATCHED)
 * [STRATEGY]: Kinetic Typography | GPU Acceleration | Layout Stability
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image"; // [ADD]: Import Image Component
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface HeroProps {
  readonly title?: React.ReactNode;
  readonly subtitle?: string;
  readonly primaryActionLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryActionLabel?: string;
  readonly secondaryHref?: string;
  readonly className?: string;
}

const Hero = ({
  title = SITE_CONFIG.hero.title,
  subtitle = SITE_CONFIG.hero.description,
  primaryActionLabel = SITE_CONFIG.hero.primaryAction,
  primaryHref = SITE_CONFIG.links.line,
  secondaryActionLabel = SITE_CONFIG.hero.secondaryAction,
  secondaryHref = "/services",
  className,
}: HeroProps) => {
  // [PHYSICS]: Neural Ease พร้อมระยะเคลื่อนไหวที่สั้นลงเพื่อความนิ่ง (CLS Fix)
  const entryTransition: Transition = {
    duration: 0.8, // ลดเวลาลงเพื่อให้ LCP แสดงผลไวขึ้น
    ease: [0.16, 1, 0.3, 1],
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-28 pb-20 md:pt-32 md:pb-32",
        "content-visibility-visible will-change-contents", // [PERFORMANCE]: บังคับ Rendering ทันที
        className,
      )}
    >
      {/* --- 01. INFRASTRUCTURE LAYER (Optimized) --- */}
      {/* [FIX LCP]: ใช้ Image Component พร้อม Priority แทน div background */}
      <div className="absolute inset-0 z-0 opacity-[0.15]">
        <Image
          src="/grid-pattern.svg"
          alt="Infrastructure Grid"
          fill
          priority={true} // ⭐ บังคับโหลดทันทีแก้ LCP
          quality={75}
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Neural Orb: ใช้ GPU ในการ Render แสงฟุ้ง */}
      <div className="bg-brand-primary/10 pointer-events-none absolute top-[10%] -right-[10%] z-0 h-[500px] w-[500px] transform-gpu rounded-full blur-[120px] md:h-[800px] md:w-[800px]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* --- 02. SYSTEM STATUS BADGE --- */}
        <motion.div
          initial={{ opacity: 0, x: -10 }} // ลดระยะจาก -20 เหลือ -10
          animate={{ opacity: 1, x: 0 }}
          transition={entryTransition}
          className="border-brand-primary/20 bg-brand-primary/5 mb-8 inline-flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-md md:mb-12"
        >
          <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
          <span className="text-brand-primary/90 font-mono text-[9px] font-black tracking-[0.3em] uppercase md:text-[10px]">
            System_Active: v{SITE_CONFIG.project.version}
          </span>
        </motion.div>

        {/* --- 03. MAIN NARRATIVE HUB (LCP Target) --- */}
        <div className="max-w-6xl space-y-10 md:space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 15 }} // [CLS FIX]: ลดระยะกระโดดจาก 40 เหลือ 15
            animate={{ opacity: 1, y: 0 }}
            transition={entryTransition}
            className="text-text-primary text-5xl leading-[0.95] font-black tracking-tighter text-balance uppercase italic will-change-transform md:text-7xl lg:text-8xl xl:text-[7.5rem]"
          >
            {typeof title === "string" && title.startsWith("AEMDEVWEB") ? (
              <>
                <span className="text-brand-primary mr-4 block md:inline-block">AEMDEVWEB</span>
                {title.replace("AEMDEVWEB", "")}
              </>
            ) : (
              title
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -15 }} // ลดระยะเคลื่อนไหว
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...entryTransition, delay: 0.15 }}
            className="border-brand-primary border-l-[4px] pl-6 md:border-l-[6px] md:pl-10"
          >
            <p className="text-text-secondary max-w-3xl text-lg leading-relaxed font-medium italic opacity-90 md:text-2xl lg:text-3xl">
              “{subtitle}”
            </p>
          </motion.div>
        </div>

        {/* --- 04. INTERACTION GATEWAY --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...entryTransition, delay: 0.3 }}
          className="mt-16 flex flex-col items-start gap-6 md:mt-20 md:flex-row md:items-center md:gap-8"
        >
          <Button
            asChild
            size="lg"
            className="group shadow-pro-lg relative h-16 w-full transform-gpu overflow-hidden rounded-xl px-10 md:h-20 md:w-auto md:rounded-2xl md:px-12"
          >
            <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
              <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />
              <IconRenderer
                name="MessageCircle"
                size={24}
                className="relative z-10 mr-3 transition-transform group-hover:scale-110 md:mr-4"
              />
              <span className="relative z-10 text-xs font-black tracking-[0.2em] uppercase md:tracking-[0.3em]">
                {primaryActionLabel}
              </span>
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className={cn(
              "group h-16 w-full justify-start rounded-xl px-8 transition-all md:h-20 md:w-auto md:justify-center md:rounded-2xl",
              "border-border bg-surface-card/50 text-text-secondary hover:border-brand-primary/50 hover:bg-surface-card hover:text-text-primary shadow-sm",
            )}
          >
            <Link href={secondaryHref} className="flex items-center gap-3">
              <span className="text-xs font-black tracking-[0.2em] uppercase">
                {secondaryActionLabel}
              </span>
              <IconRenderer
                name="ArrowRight"
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </motion.div>
      </div>

      <div
        className="via-border/30 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

export default memo(Hero);
