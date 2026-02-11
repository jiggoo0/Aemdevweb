/**
 * [TEMPLATE COMPONENT]: HERO_ENGINE_SYSTEM v17.9.0 (STABILIZED_FINAL)
 * [STRATEGY]: Outcome-Driven | Persona Injected | Neural Physics | Zero-CLS
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

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
  primaryActionLabel,
  primaryHref,
  secondaryActionLabel,
  secondaryHref,
  align = "left",
  showIndicator = true,
  className,
}: HeroEngineProps) => {
  const isCenter = align === "center";

  // [RESOLVED]: Literal Tuple easing สำหรับ Motion เพื่อความสมูทสูงสุด
  const transition = {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] as const,
  };

  return (
    <section
      className={cn(
        "relative flex min-h-[80vh] flex-col justify-center overflow-hidden pt-36 pb-24 md:pt-48 md:pb-36",
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
          {showIndicator && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary mb-12 inline-flex items-center gap-4 rounded-full border px-5 py-2 backdrop-blur-md"
            >
              <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Specialist_Protocol: v{SITE_CONFIG.project.version}
              </span>
            </motion.div>
          )}

          <div className="w-full space-y-10 md:space-y-14">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="text-text-primary text-5xl leading-[0.85] font-black tracking-tighter uppercase italic md:text-8xl lg:text-[7.5rem]"
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: isCenter ? 0 : -30, y: isCenter ? 20 : 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
              className={cn(
                "border-brand-primary/40",
                isCenter
                  ? "mx-auto max-w-3xl border-t-2 pt-10"
                  : "max-w-4xl border-l-4 pl-8 md:pl-14",
              )}
            >
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90 md:text-3xl">
                “{subtitle}”
              </p>
            </motion.div>
          </div>

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
                  className="shadow-glow group h-16 w-full rounded-2xl px-10 text-xs font-black tracking-[0.3em] uppercase md:w-auto"
                >
                  <Link href={primaryHref}>
                    <IconRenderer
                      name="Zap"
                      size={18}
                      className="mr-3 transition-transform group-hover:scale-125"
                    />
                    {primaryActionLabel}
                  </Link>
                </Button>
              )}

              {secondaryActionLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-border/60 bg-surface-card/40 hover:bg-surface-card hover:border-brand-primary/40 h-16 w-full rounded-2xl px-10 text-xs font-black tracking-[0.3em] uppercase backdrop-blur-sm md:w-auto"
                >
                  <Link href={secondaryHref}>{secondaryActionLabel}</Link>
                </Button>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Atmospheric Background Layer */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          isCenter
            ? "bg-[radial-gradient(circle_at_center,_var(--color-brand-primary)_0%,_transparent_75%)] opacity-10"
            : "from-brand-primary/5 bg-gradient-to-l to-transparent opacity-30",
        )}
        aria-hidden="true"
      />
      <div className="via-border/20 absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
    </section>
  );
};

export default memo(HeroEngine);
