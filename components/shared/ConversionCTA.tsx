/**
 * [FEATURE COMPONENT]: CONVERSION_CTA_SYSTEM v17.3.9 (HYBRID_STABILIZED)
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
  readonly link?: string;
  readonly className?: string;
}

/**
 * @component ConversionCTA
 * @description โหนดปิดท้ายที่ออกแบบมาเพื่อเปลี่ยน User Intent ให้กลายเป็น Lead
 * [STABILIZED]: รองรับระบบ Multi-Theme และปรับปรุงระบบ Atmospheric Lighting
 */
const ConversionCTA = ({
  title = "พร้อมยกระดับธุรกิจของคุณหรือยังครับ?",
  description = "ไม่ว่าคุณจะมีไอเดียอยู่แล้ว หรือยังไม่แน่ใจว่าจะเริ่มตรงไหนดี ทักมาปรึกษาผมได้ทุกเรื่องครับ ผมพร้อมช่วยออกแบบแนวทางที่คุ้มค่าและได้ผลจริงให้กับธุรกิจของคุณ",
  buttonLabel = "ปรึกษาแผนงานฟรี",
  link = SITE_CONFIG.links.line,
  className,
}: ConversionCTAProps) => {
  return (
    <section
      className={cn("relative overflow-hidden py-24 md:py-32 bg-surface-main transition-colors duration-500", className)}
      role="region"
      aria-label="Contact Node"
    >
      {/* 01. INFRASTRUCTURE LAYER: พื้นผิวทางวิศวกรรม */}
      <div
        className="pointer-events-none absolute inset-0 z-0 select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        {/* Gradient Scrim ที่ปรับตามธีม */}
        <div className="absolute inset-0 bg-gradient-to-b from-surface-main via-transparent to-surface-main" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "relative overflow-hidden rounded-[3rem] p-8 text-center md:p-24 transition-all duration-500",
            /* [HYBRID THEME]: เปลี่ยนจาก Hardcode Hex เป็น Semantic Variables */
            "border border-border bg-surface-card/80 backdrop-blur-xl shadow-glow",
          )}
        >
          {/* 02. NARRATIVE NODE: การสื่อสารระดับ Specialist */}
          <div className="mx-auto max-w-4xl space-y-12">
            {/* Active Status Badge */}
            <div className="border-brand-primary/20 bg-brand-primary/5 inline-flex items-center gap-3 rounded-full border px-5 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full shadow-glow"></span>
              </span>
              <span className="text-brand-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase">
                System_Active.Node_v{SITE_CONFIG.project.version}
              </span>
            </div>

            {/* Headline: ปรับสีตามสถานะธีม */}
            <h2 className="text-4xl font-black tracking-tighter text-text-primary uppercase italic md:text-6xl lg:text-7xl">
              {title}
            </h2>

            {/* Description Quote */}
            <div className="border-brand-primary/30 mx-auto max-w-3xl border-l-4 pl-6 text-left md:pl-10">
              <p className="text-text-secondary text-lg leading-relaxed font-medium italic md:text-xl">
                “{description}”
              </p>
            </div>

            {/* 03. ACTION INTERFACE */}
            <div className="flex flex-col items-center gap-8 pt-8">
              <Button
                asChild
                size="lg"
                className={cn(
                  "group relative h-20 overflow-hidden rounded-[2rem] px-12 transition-all duration-500",
                  /* Button Contrast Logic: ใช้สี Inverted เพื่อให้ปุ่มโดดเด่นเสมอ */
                  "bg-brand-primary text-surface-main hover:scale-105 hover:bg-text-primary hover:text-surface-main active:scale-95 shadow-glow",
                )}
              >
                <Link href={link} className="flex items-center gap-4">
                  <IconRenderer name="MessageCircle" size={24} />
                  <span className="text-xs font-black tracking-[0.2em] uppercase">
                    {buttonLabel}
                  </span>
                  {/* Neural Flow Animation */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                </Link>
              </Button>

              {/* Specialist Commitment Marker */}
              <div className="flex items-center gap-3 opacity-60 transition-opacity hover:opacity-100">
                <IconRenderer
                  name="Clock"
                  size={14}
                  className="text-brand-primary"
                  strokeWidth={2.5}
                />
                <span className="text-text-muted font-mono text-[9px] font-bold tracking-[0.2em] uppercase">
                  Service_Window: {SITE_CONFIG.contact.workHours || "09:00 - 18:00"}
                </span>
              </div>
            </div>
          </div>

          {/* 04. ATMOSPHERIC PULSE */}
          <div className="ambient-aura absolute -top-40 -right-40 h-[500px] w-[500px] opacity-[var(--ambient-opacity)]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-blue-600/5 mix-blend-screen blur-[100px] opacity-[var(--ambient-opacity)]" />
        </div>
      </div>
    </section>
  );
};

export default memo(ConversionCTA);
