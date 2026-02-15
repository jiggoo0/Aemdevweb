/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_ENGINE v18.0.34 (KNIP_RESOLVED)
 * [STRATEGY]: Path Synchronization | Identity-Aware UI | Named Export
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";
// [RESOLVED]: ปรับ Path ตามรายงานของ Knip เพื่อความเสถียรในการ Build
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer, { type IconName } from "@/components/ui/IconRenderer";
import type { ServiceFaq } from "@/types";

interface DynamicFAQProps {
  readonly items?: readonly ServiceFaq[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

/**
 * [FIXED]: ใช้ Named Export เพื่อป้องกัน Build Error (TS2305)
 * และห่อด้วย memo เพื่อประสิทธิภาพสูงสุดในการ Re-render
 */
export const DynamicFAQ = memo(
  ({
    items = [],
    title = "Specialist FAQ",
    description = "ข้อมูลเชิงลึกและคำแนะนำทางเทคนิคจากทีมผู้เชี่ยวชาญ เพื่อให้คุณตัดสินใจได้แม่นยำที่สุด",
    className,
  }: DynamicFAQProps) => {
    // [GUARD]: ป้องกันการ Render พื้นที่ว่างหากไม่มีข้อมูลใน Node
    if (!items || items.length === 0) return null;

    return (
      <section className={cn("relative overflow-hidden py-24 md:py-36", className)}>
        {/* --- 01. INFRASTRUCTURE LAYER (Technical Aura) --- */}
        {/* Background Grid: เชื่อมโยงสีตาม Brand Primary ของแต่ละ Node */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Dynamic Background Glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--brand-primary)_0%,transparent_60%)] opacity-[0.05] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
            {/* --- 02. HEADER NODE: Sticky Intelligence Hub --- */}
            <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
              {/* Version Tag */}
              <div className="inline-flex items-center gap-4 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-5 py-2.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_8px_var(--brand-primary)]" />
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                  Intelligence_Registry.v{SITE_CONFIG.project.version}
                </span>
              </div>

              {/* Section Title: รองรับ Dynamic Font Identity */}
              <h2 className="font-[family-name:var(--font-brand)] text-5xl leading-[0.9] font-black tracking-tighter text-[var(--foreground)] uppercase italic md:text-7xl">
                {title}
              </h2>

              {/* Description Quote */}
              <div className="border-l-[6px] border-[var(--brand-primary)]/40 pl-8">
                <p className="text-xl leading-relaxed font-medium text-[var(--text-main)] italic opacity-85">
                  “{description}”
                </p>
              </div>

              {/* Technical Support Link */}
              <div className="hidden pt-12 lg:block">
                <a
                  href={SITE_CONFIG.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 opacity-50 transition-all hover:opacity-100"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--foreground)]/10 bg-[var(--surface-main)] transition-colors group-hover:border-[var(--brand-primary)]/40 group-hover:text-[var(--brand-primary)]">
                    <IconRenderer name={"MessageCircle" as IconName} size={18} />
                  </div>
                  <span className="font-mono text-[10px] font-black tracking-widest uppercase">
                    Technical_Inquiry_Line
                  </span>
                </a>
              </div>
            </div>

            {/* --- 03. INTERACTION NODE: The Accordion Matrix --- */}
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="flex flex-col gap-5">
                {items.map((item, index) => (
                  <AccordionItem
                    key={`faq-${index}`}
                    value={`item-${index}`}
                    className={cn(
                      "group relative overflow-hidden border transition-all duration-500",
                      "border-[var(--foreground)]/10 bg-[var(--surface-main)] shadow-sm",
                      "rounded-[var(--brand-radius)]", // [IDENTITY_SYNC]: ปรับความมนตาม Node Data
                      "data-[state=open]:shadow-glow-sm data-[state=open]:border-[var(--brand-primary)]/40",
                      "hover:border-[var(--brand-primary)]/20 hover:shadow-md",
                    )}
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between px-8 py-7 text-left transition-all [&[data-state=open]>div>svg]:rotate-180">
                      <span className="pr-6 font-[family-name:var(--font-brand)] text-lg font-black tracking-tighter uppercase italic transition-colors group-hover:text-[var(--brand-primary)] md:text-2xl">
                        {item.question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="px-8 pt-0 pb-8">
                      <div className="border-t border-[var(--foreground)]/5 pt-6">
                        <p className="text-base leading-relaxed font-medium text-[var(--text-main)] italic opacity-90 md:text-xl">
                          {item.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

DynamicFAQ.displayName = "DynamicFAQ";
