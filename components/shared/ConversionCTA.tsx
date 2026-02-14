/**
 * [SHARED COMPONENT]: CONVERSION_CTA_SYSTEM v17.9.105 (ULTIMATE_HARDENED)
 * [STRATEGY]: Partnership Integration | Typed Routes Resolution | Build-Stabilized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import type { Route } from "next";

import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

interface ConversionCTAProps {
  readonly title?: string;
  readonly description?: string;
  readonly buttonLabel?: string;
  readonly buttonHref?: string;
  readonly secondaryLabel?: string;
  readonly secondaryHref?: string;
  readonly className?: string;
}

/**
 * @component ConversionCTA
 * @description โหนดปิดท้ายเชิงกลยุทธ์ ออกแบบมาเพื่อเปลี่ยนความสนใจให้เป็นผลลัพธ์ธุรกิจ
 */
const ConversionCTA = ({
  title = "พร้อมรีดประสิทธิภาพธุรกิจของคุณหรือยังครับ?",
  description = "ไม่ว่าคุณจะต้องการดันอันดับ Google หรือสร้างเครื่องจักรทำเงินที่ทำงาน 24 ชม. ผมพร้อมวางกลยุทธ์ให้ทันที",
  buttonLabel = "เริ่มวางกลยุทธ์ฟรี",
  buttonHref = SITE_CONFIG.links.line,
  secondaryLabel,
  secondaryHref,
  className,
}: ConversionCTAProps) => {
  return (
    <section
      className={cn(
        "bg-surface-main relative overflow-hidden py-24 transition-colors duration-700 md:py-32 lg:py-40",
        className,
      )}
      role="region"
      aria-label="Conversion Node"
    >
      {/* --- LAYER 01: INFRASTRUCTURE (Visual Base) --- */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div
          className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url(/grid-pattern.svg)" }}
        />
        <div className="from-surface-main to-surface-main absolute inset-0 bg-gradient-to-b via-transparent opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-[3rem] p-10 text-center transition-all duration-700 md:rounded-[4rem] md:p-24",
            "border-border bg-surface-card/80 shadow-pro-xl border backdrop-blur-3xl",
            "hover:border-brand-primary/30 hover:shadow-glow-lg transform-gpu will-change-transform",
          )}
        >
          {/* --- LAYER 02: NARRATIVE MATRIX --- */}
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Specialist Badge Status */}
            <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="bg-brand-primary absolute inline-flex h-full w-full transform-gpu animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary shadow-glow relative inline-flex h-2.5 w-2.5 rounded-full"></span>
              </span>
              <span
                suppressHydrationWarning
                className="text-brand-primary font-mono text-[9px] font-black tracking-[0.4em] uppercase md:text-[10px]"
              >
                System_Node.v{SITE_CONFIG.project.version} // Specialist_Active
              </span>
            </div>

            <h2 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl lg:text-8xl">
              {title}
            </h2>

            <div className="border-brand-primary/40 mx-auto max-w-3xl border-l-[6px] pl-8 text-left md:pl-12">
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-90 md:text-2xl lg:text-3xl">
                “{description}”
              </p>
            </div>

            {/* --- LAYER 03: INTERFACE DISPATCHER --- */}
            <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
              {/* PRIMARY: External Gateway (Line OA) - [RESOLVED]: ใช้ variant="neo" */}
              {buttonHref && (
                <Button
                  asChild
                  size="lg"
                  variant="neo"
                  className={cn(
                    "group relative h-20 overflow-hidden rounded-[2rem] px-12 transition-all duration-500 md:h-24 md:rounded-[2.5rem] md:px-16",
                    "shadow-glow-lg transform-gpu hover:scale-110 active:scale-95",
                  )}
                >
                  <a
                    href={buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5"
                  >
                    <IconRenderer name="MessageCircle" size={28} strokeWidth={2.5} />
                    <span className="text-xs font-black tracking-[0.3em] uppercase md:text-sm">
                      {buttonLabel}
                    </span>
                    {/* Neural Sweep Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1500ms] group-hover:translate-x-full" />
                  </a>
                </Button>
              )}

              {/* SECONDARY: Internal Bridge */}
              {secondaryLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:bg-surface-offset h-20 transform-gpu rounded-[2rem] border-2 px-10 text-xs font-black tracking-[0.2em] uppercase md:h-24 md:rounded-[2.5rem] md:px-12 md:text-sm"
                >
                  <Link href={secondaryHref as Route}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>

            {/* Response Protocol Footer */}
            <div className="flex items-center justify-center gap-4 opacity-40 transition-opacity duration-500 hover:opacity-100">
              <IconRenderer name="Clock" size={16} className="text-brand-primary" strokeWidth={3} />
              <span
                suppressHydrationWarning
                className="text-text-muted font-mono text-[9px] font-black tracking-[0.3em] uppercase md:text-[10px]"
              >
                Uptime_Service: {SITE_CONFIG.contact.workHours || "09:00 - 18:00"} //
                Real_Time_Response
              </span>
            </div>
          </div>

          {/* ATMOSPHERIC DEPTH (GPU Accelerated) */}
          <div className="bg-brand-primary/5 pointer-events-none absolute -bottom-60 -left-60 h-[500px] w-[500px] transform-gpu rounded-full mix-blend-screen blur-[120px] will-change-transform" />
        </div>
      </div>
    </section>
  );
};

export default memo(ConversionCTA);
