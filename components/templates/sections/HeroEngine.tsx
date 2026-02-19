/**
 * [TEMPLATE COMPONENT]: HERO_ENGINE_SYSTEM v18.0.0 (ULTIMATE_PRODUCTION)
 * [STRATEGY]: LCP Priority Rendering | GPU-Accelerated Transitions | Zero-CLS Layout
 * [MAINTAINER]: AEMZA MACKS (Lead Systems Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import type { Route } from "next";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

interface HeroEngineProps {
  readonly title?: React.ReactNode;
  readonly subtitle?: string;
  readonly primaryActionLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryActionLabel?: string;
  readonly secondaryHref?: string;
  readonly align?: "left" | "center";
  readonly className?: string;
  readonly showIndicator?: boolean;
}

const HeroEngine = ({
  title = SITE_CONFIG.hero.title,
  subtitle = SITE_CONFIG.hero.description,
  primaryActionLabel = "ปรึกษาโปรเจกต์",
  primaryHref = SITE_CONFIG.links.line,
  secondaryActionLabel = "ดูผลงานที่ผ่านมา",
  secondaryHref = "/case-studies",
  align = "left",
  showIndicator = true,
  className,
}: HeroEngineProps) => {
  const isCenter = align === "center";

  /**
   * [PHYSICS]: Neural-Impulse Transition
   * ออกแบบมาให้ทำงานบน GPU Layer (transform-gpu) เพื่อความนิ่งระดับสูงสุด
   */
  const transition: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
    // [FIX]: ป้องกันกระบวนการกระพริบระหว่างทำ Animation
    type: "tween",
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36",
        isCenter ? "text-center" : "text-left",
        "bg-surface-main",
        className,
      )}
    >
      {/* --- 00. INFRASTRUCTURE LAYER (LCP Stable Background) --- */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] select-none"
        style={{
          backgroundImage: "url(/grid-pattern.svg)",
          /* [FIX]: บังคับใช้ GPU เพื่อไม่ให้รบกวนการวาดของ Text Content */
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* [DYNAMIC_AURA]: ระบบ Ambient ที่ใช้ GPU Compositing */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0 transform-gpu",
          isCenter
            ? "bg-[radial-gradient(circle_at_center,var(--brand-primary)_0%,transparent_60%)] opacity-10 blur-3xl"
            : "bg-[radial-gradient(circle_at_top_left,var(--brand-primary)_0%,transparent_50%)] opacity-15 blur-[100px]",
        )}
        aria-hidden="true"
      />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex flex-col",
            isCenter ? "mx-auto max-w-5xl items-center" : "max-w-7xl items-start",
          )}
        >
          {/* NODE 01: PROTOCOL INDICATOR */}
          {showIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mb-10 inline-flex items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-md md:mb-12"
            >
              <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Specialist_Protocol: v{SITE_CONFIG.project.version}
              </span>
            </motion.div>
          )}

          {/* NODE 02: MAIN MESSAGING MATRIX (The LCP Hub) */}
          <div className="w-full space-y-8 md:space-y-12">
            <motion.h1
              /* [LCP_OPT]: มั่นใจว่า H1 จะเริ่มปรากฏทันที (Initial Opacity > 0) เพื่อไม่ให้ LCP Mark ล่าช้า */
              initial={{ opacity: 0.2, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="text-text-primary transform-gpu text-5xl leading-[0.95] font-black tracking-tighter text-balance uppercase italic md:text-8xl lg:text-[7.5rem]"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: isCenter ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className={cn(
                "border-brand-primary/40",
                isCenter
                  ? "mx-auto max-w-3xl border-t-2 pt-10"
                  : "max-w-3xl border-l-[6px] pl-8 md:pl-12",
              )}
            >
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                “{subtitle}”
              </p>
            </motion.div>
          </div>

          {/* NODE 03: CONVERSION GATEWAY */}
          {(primaryActionLabel || secondaryActionLabel) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.4 }}
              className={cn(
                "mt-16 flex w-full flex-col gap-5 md:mt-20 md:flex-row md:gap-8",
                isCenter ? "items-center justify-center" : "items-start",
              )}
            >
              {primaryActionLabel && primaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="neo"
                  className="shadow-glow-lg group h-16 w-full transform-gpu rounded-2xl px-10 text-[11px] font-black tracking-[0.2em] uppercase transition-all hover:scale-[1.03] active:scale-95 md:w-auto"
                >
                  <a href={primaryHref} target="_blank" rel="noopener noreferrer">
                    <IconRenderer
                      name="Zap"
                      size={18}
                      className="mr-3 transition-transform duration-300 group-hover:scale-125"
                    />
                    {primaryActionLabel}
                  </a>
                </Button>
              )}

              {secondaryActionLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border bg-surface-card/40 hover:bg-surface-card hover:border-brand-primary/40 h-16 w-full transform-gpu rounded-2xl px-10 text-[11px] font-black tracking-[0.2em] uppercase backdrop-blur-sm transition-all hover:-translate-y-1 active:scale-95 md:w-auto"
                >
                  <Link href={secondaryHref as Route}>{secondaryActionLabel}</Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative Bottom Baseline */}
      <div className="via-border/30 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent opacity-40" />
    </section>
  );
};

export default memo(HeroEngine);
