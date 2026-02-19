/**
 * [COMPONENT]: CONVERSION_CTA_SYSTEM v18.0.2 (DYNAMIC_SYNC)
 * [STRATEGY]: CSS Variable Implementation | Identity Overriding | Production Ready
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/Button";

interface ConversionCTAProps {
  readonly title?: string;
  readonly description?: string;
  readonly buttonLabel?: string;
  readonly buttonHref?: string;
  readonly className?: string;
}

const ConversionCTA = ({
  title = "พร้อมรีดประสิทธิภาพธุรกิจของคุณหรือยังครับ?",
  description = "ไม่ว่าคุณจะต้องการดันอันดับ Google หรือสร้างเครื่องจักรทำเงินที่ทำงาน 24 ชม. ผมพร้อมวางกลยุทธ์ให้ทันที",
  buttonLabel = "เริ่มวางกลยุทธ์ฟรี",
  buttonHref = "#",
  className,
}: ConversionCTAProps) => {
  return (
    <section className={cn("relative overflow-hidden py-20 md:py-32", className)} role="region">
      <div className="relative z-10 container mx-auto px-4">
        <div
          className={cn(
            "relative overflow-hidden rounded-[2.5rem] p-8 md:p-16 lg:p-24",
            "border border-[var(--brand-primary)]/20 bg-[var(--surface-main)] shadow-2xl",
            "transition-all duration-500 hover:border-[var(--brand-primary)]/40",
          )}
        >
          {/* Atmospheric Background (Dynamic) */}
          <div
            className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-[var(--brand-primary)] opacity-5 blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center gap-8 text-center">
            {/* สถานะ Node (Dynamic Color) */}
            <div className="flex items-center gap-3 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-5 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-primary)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--brand-primary)]"></span>
              </span>
              <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[var(--brand-primary)] uppercase">
                Specialist_Active
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl leading-tight font-black tracking-tighter text-[var(--text-primary)] md:text-6xl lg:text-7xl">
              {title}
            </h2>

            <p className="max-w-2xl text-lg font-medium text-[var(--text-primary)] italic opacity-80 md:text-xl">
              “{description}”
            </p>

            <Button
              asChild
              size="lg"
              className={cn(
                "h-16 rounded-2xl px-10 md:h-20 md:px-16",
                "bg-[var(--brand-primary)] text-[var(--brand-primary-fg)] hover:opacity-90",
                "shadow-[var(--brand-primary)]/20 shadow-lg transition-transform hover:scale-105 active:scale-95",
              )}
            >
              <a
                href={buttonHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <IconRenderer name="MessageCircle" size={24} />
                <span className="text-sm font-black tracking-widest uppercase">{buttonLabel}</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ConversionCTA);
