/**
 * [FEATURE COMPONENT]: CONVERSION_CTA_SYSTEM v17.5.0 (PROPS_FIXED)
 * [STRATEGY]: Partnership Integration | Neural Physics | Multi-Theme Orchestration
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface ConversionCTAProps {
  readonly title?: string;
  readonly description?: string;
  readonly buttonLabel?: string;
  readonly buttonHref?: string; // [FIX]: Renamed from link
  readonly secondaryLabel?: string; // [FIX]: Added prop
  readonly secondaryHref?: string; // [FIX]: Added prop
  readonly className?: string;
}

/**
 * @component ConversionCTA
 * @description โหนดปิดท้ายเชิงกลยุทธ์ ออกแบบมาเพื่อเปลี่ยนความสนใจ (Intent) ให้เป็นผลลัพธ์ธุรกิจ (Leads)
 */
const ConversionCTA = ({
  title = "พร้อมยกระดับธุรกิจของคุณหรือยังครับ?",
  description = "ไม่ว่าคุณจะมีไอเดียอยู่แล้ว หรือยังไม่แน่ใจว่าจะเริ่มตรงไหนดี ทักมาปรึกษาผมได้ทุกเรื่องครับ",
  buttonLabel = "ปรึกษาแผนงานฟรี",
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
      {/* --- 01. INFRASTRUCTURE LAYER --- */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        <div className="from-surface-main to-surface-main absolute inset-0 bg-gradient-to-b via-transparent opacity-80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-[4rem] p-10 text-center transition-all duration-700 md:p-24",
            "border-border bg-surface-card/80 shadow-pro-xl border backdrop-blur-3xl",
            "hover:border-brand-primary/30 hover:shadow-glow-lg",
          )}
        >
          {/* --- 02. NARRATIVE NODE --- */}
          <div className="mx-auto max-w-4xl space-y-12">
            <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-4 rounded-full border px-6 py-2.5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary shadow-glow relative inline-flex h-2.5 w-2.5 rounded-full"></span>
              </span>
              <span className="text-brand-primary font-mono text-[10px] font-black tracking-[0.4em] uppercase">
                System_Node.v{SITE_CONFIG.project.version} // Specialist_Ready
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

            {/* --- 03. ACTION INTERFACE --- */}
            <div className="flex flex-col items-center justify-center gap-6 pt-10 sm:flex-row">
              {buttonHref && (
                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "group relative h-24 overflow-hidden rounded-[2.5rem] px-16 transition-all duration-500",
                    "bg-brand-primary text-surface-main hover:bg-text-primary hover:text-surface-main shadow-glow-lg hover:scale-110 active:scale-95",
                  )}
                >
                  <Link href={buttonHref} className="flex items-center gap-5">
                    <IconRenderer name="MessageCircle" size={28} strokeWidth={2.5} />
                    <span className="text-sm font-black tracking-[0.3em] uppercase">
                      {buttonLabel}
                    </span>
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-[1500ms] group-hover:translate-x-full" />
                  </Link>
                </Button>
              )}

              {/* [NEW]: Secondary Button Support */}
              {secondaryLabel && secondaryHref && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="hover:bg-surface-offset h-24 rounded-[2.5rem] border-2 px-12 text-sm font-black tracking-[0.2em] uppercase"
                >
                  <Link href={secondaryHref}>{secondaryLabel}</Link>
                </Button>
              )}
            </div>

            {/* Specialist Marker */}
            <div className="flex items-center justify-center gap-4 opacity-40 transition-opacity duration-500 hover:opacity-100">
              <IconRenderer name="Clock" size={16} className="text-brand-primary" strokeWidth={3} />
              <span className="text-text-muted font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Service_Window: {SITE_CONFIG.contact.workHours || "09:00 - 18:00"} // Fast_Response
              </span>
            </div>
          </div>

          {/* --- 04. ATMOSPHERIC PULSE --- */}
          <div className="ambient-aura absolute -top-40 -right-40 h-[600px] w-[600px] opacity-[var(--ambient-opacity)]" />
          <div className="bg-brand-primary/5 pointer-events-none absolute -bottom-60 -left-60 h-[500px] w-[500px] rounded-full opacity-[var(--ambient-opacity)] mix-blend-screen blur-[120px]" />
        </div>
      </div>
    </section>
  );
};

export default memo(ConversionCTA);
