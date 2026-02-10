/**
 * [TEMPLATE COMPONENT]: HERO_ENGINE_SYSTEM v17.5.6 (STABILIZED)
 * [STRATEGY]: Outcome-Driven Architecture | Config-Led Defaults | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// --- 1. Infrastructure & UI ---
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface HeroEngineProps {
  /** [DATA_INJECTION]: เนื้อหาหลัก */
  readonly title?: React.ReactNode;
  readonly subtitle?: string;

  // --- Action Interface ---
  readonly primaryActionLabel?: string;
  readonly primaryHref?: string;
  readonly secondaryActionLabel?: string;
  readonly secondaryHref?: string;

  // --- Visual Controls ---
  readonly align?: "left" | "center";
  readonly className?: string;
  readonly showIndicator?: boolean;
}

/**
 * @component HeroEngine
 * @description หน่วยประมวลผลส่วนหัวสำหรับ Templates (Bio, Catalog, etc.)
 * รองรับการจัดวางทั้งแบบ Center และ Left Aligned
 */
const HeroEngine = ({
  title = SITE_CONFIG.hero.title,
  subtitle = SITE_CONFIG.hero.description,
  primaryActionLabel,
  primaryHref,
  secondaryActionLabel,
  secondaryHref,
  align = "left",
  showIndicator = true,
  className,
}: HeroEngineProps) => {
  const entryTransition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  const isCenter = align === "center";

  return (
    <section
      className={cn(
        "relative flex min-h-[85vh] flex-col justify-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32",
        isCenter ? "text-center" : "text-left",
        className,
      )}
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex flex-col",
            isCenter ? "mx-auto max-w-5xl items-center" : "max-w-7xl items-start",
          )}
        >
          {/* 01. SYSTEM INDICATOR */}
          {showIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={entryTransition}
              className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mb-10 inline-flex items-center gap-3 rounded-full border px-4 py-1.5 backdrop-blur-md md:mb-12"
            >
              <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                System_Active: v{SITE_CONFIG.project.version}
              </span>
            </motion.div>
          )}

          {/* 02. MAIN CONTENT HUB */}
          <div className="w-full space-y-8 md:space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={entryTransition}
              className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl xl:text-[7rem]"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: isCenter ? 0 : -20, y: isCenter ? 20 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ...entryTransition, delay: 0.2 }}
              className={cn(
                "border-brand-primary/50",
                isCenter
                  ? "mx-auto max-w-3xl border-t-2 pt-8"
                  : "max-w-4xl border-l-4 pl-6 md:pl-10",
              )}
            >
              <p className="text-text-secondary text-lg leading-relaxed font-medium italic opacity-90 md:text-2xl lg:text-3xl">
                “{subtitle}”
              </p>
            </motion.div>
          </div>

          {/* 03. ACTION GATEWAY */}
          {(primaryActionLabel || secondaryActionLabel) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...entryTransition, delay: 0.4 }}
              className={cn(
                "mt-12 flex w-full flex-col gap-4 md:mt-16 md:flex-row md:gap-6",
                isCenter ? "items-center justify-center" : "items-start",
              )}
            >
              {/* Primary Action */}
              {primaryActionLabel && primaryHref && (
                <Button
                  asChild
                  size="lg"
                  className="shadow-pro-lg group h-14 w-full rounded-xl px-8 text-xs font-black tracking-[0.25em] uppercase md:h-16 md:w-auto md:px-10"
                >
                  <Link
                    href={primaryHref}
                    target={primaryHref.startsWith("http") ? "_blank" : undefined}
                  >
                    <IconRenderer
                      name="MessageCircle"
                      size={18}
                      className="mr-3 transition-transform group-hover:scale-110"
                    />
                    {primaryActionLabel}
                  </Link>
                </Button>
              )}

              {/* Secondary Action */}
              {secondaryActionLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/50 bg-surface-card/30 hover:bg-surface-card hover:border-brand-primary/30 h-14 w-full rounded-xl px-8 text-xs font-black tracking-[0.2em] uppercase backdrop-blur-sm md:h-16 md:w-auto md:px-10"
                >
                  <Link href={secondaryHref}>{secondaryActionLabel}</Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* 04. AMBIENT BACKGROUND */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-30",
          isCenter
            ? "bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10"
            : "from-brand-primary/5 bg-gradient-to-l to-transparent",
        )}
        aria-hidden="true"
      />

      <div className="via-border/30 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </section>
  );
};

export default memo(HeroEngine);
