/**
 * [TEMPLATE COMPONENT]: HERO_ENGINE_SYSTEM v17.5.5 (STABILIZED)
 * [STRATEGY]: Outcome-Driven Architecture | Config-Led Defaults | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

// --- 1. Infrastructure & UI ---
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface HeroEngineProps {
  /** [DATA_INJECTION]: เนื้อหาหลัก */
  readonly title?: React.ReactNode;
  readonly subtitle?: string;

  // --- Action Interface (Reverted to match Templates) ---
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
 */
const HeroEngine = ({
  title = SITE_CONFIG.hero.title,
  subtitle = SITE_CONFIG.hero.description,
  primaryActionLabel = SITE_CONFIG.hero.primaryAction,
  primaryHref = SITE_CONFIG.links.line,
  secondaryActionLabel,
  secondaryHref = "/services",
  align = "left",
  showIndicator = true,
  className,
}: HeroEngineProps) => {
  const entryTransition: Transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[90vh] items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32",
        align === "center" ? "text-center" : "text-left",
        className,
      )}
    >
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className={cn("max-w-7xl", align === "center" ? "mx-auto" : "mx-0")}>
          {/* Indicator */}
          {showIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={entryTransition}
              className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mb-12 inline-flex items-center gap-4 rounded-2xl border px-5 py-2 backdrop-blur-md"
            >
              <div className="bg-brand-primary shadow-glow h-2 w-2 animate-pulse rounded-full" />
              <span className="font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                System_Active: v{SITE_CONFIG.project.version}
              </span>
            </motion.div>
          )}

          {/* Content */}
          <div className="space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={entryTransition}
              className="text-text-primary text-5xl leading-[0.95] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: align === "center" ? 0 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...entryTransition, delay: 0.2 }}
              className={cn(
                "border-brand-primary",
                align === "center"
                  ? "mx-auto max-w-3xl border-t-4 pt-8"
                  : "border-l-4 pl-8 md:pl-14",
              )}
            >
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85 md:text-3xl">
                “{subtitle}”
              </p>
            </motion.div>
          </div>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entryTransition, delay: 0.4 }}
            className={cn(
              "flex flex-col items-start gap-6 pt-16 md:flex-row md:items-center md:gap-8",
              align === "center" && "items-center justify-center",
            )}
          >
            {/* Primary */}
            {primaryActionLabel && primaryHref && (
              <Button
                asChild
                size="lg"
                variant="default"
                className="shadow-pro-lg group h-16 w-full px-10 md:w-auto"
              >
                <Link href={primaryHref} target="_blank" rel="noopener noreferrer">
                  <IconRenderer
                    name="MessageCircle"
                    size={20}
                    className="mr-3 transition-transform group-hover:scale-110"
                  />
                  <span className="text-[11px] font-black tracking-[0.3em] uppercase">
                    {primaryActionLabel}
                  </span>
                </Link>
              </Button>
            )}

            {/* Secondary */}
            {secondaryActionLabel && secondaryHref && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-border/50 hover:bg-surface-offset h-16 w-full px-10 backdrop-blur-xl transition-all md:w-auto"
              >
                <Link href={secondaryHref}>
                  <span className="text-[11px] font-black tracking-[0.2em] uppercase">
                    {secondaryActionLabel}
                  </span>
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </div>

      {/* Ambient */}
      <div className="from-brand-primary/5 pointer-events-none absolute top-0 right-0 -z-10 h-full w-1/2 bg-gradient-to-l to-transparent opacity-30" />
    </section>
  );
};

export default memo(HeroEngine);
