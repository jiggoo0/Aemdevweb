/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_ENGINE v17.9.100 (ULTIMATE_STABILIZED)
 * [STRATEGY]: Pure UI Component | Interaction-Driven | High-Fidelity
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
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import type { ServiceFaq } from "@/types";

interface DynamicFAQProps {
  readonly items?: readonly ServiceFaq[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

const DynamicFAQ = ({
  items = [],
  title = "Specialist FAQ",
  description = "ข้อมูลเชิงลึกและคำแนะนำทางเทคนิคจากทีมผู้เชี่ยวชาญ เพื่อให้คุณตัดสินใจได้แม่นยำที่สุด",
  className,
}: DynamicFAQProps) => {
  // [GUARD]: ป้องกันการ Render พื้นที่ว่างหากไม่มีข้อมูล
  if (!items || items.length === 0) return null;

  return (
    <section className={cn("relative overflow-hidden py-24 md:py-36", className)}>
      {/* --- 01. INFRASTRUCTURE LAYER --- */}
      <div
        className="bg-infrastructure-grid pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: "url(/grid-pattern.svg)" }}
      />

      {/* Background Aura Sync */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--brand-primary)_0%,transparent_60%)] opacity-[0.05] blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* --- 02. HEADER NODE: Sticky Intelligence Hub --- */}
          <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2.5 backdrop-blur-md">
              <div className="bg-brand-primary shadow-glow h-1.5 w-1.5 animate-pulse rounded-full" />
              <span className="font-mono text-[10px] font-black tracking-[0.3em] uppercase">
                Intelligence_Registry.v{SITE_CONFIG.project.version}
              </span>
            </div>

            <h2 className="text-text-primary text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-7xl">
              {title}
            </h2>

            <div className="border-brand-primary/40 border-l-[6px] pl-8">
              <p className="text-text-secondary text-xl leading-relaxed font-medium italic opacity-85">
                “{description}”
              </p>
            </div>

            {/* Support Link: สำหรับ Desktop */}
            <div className="hidden pt-12 lg:block">
              <a
                href={SITE_CONFIG.links.line}
                target="_blank"
                className="group flex items-center gap-4 opacity-50 transition-all hover:opacity-100"
              >
                <div className="bg-surface-offset border-border group-hover:border-brand-primary/40 group-hover:text-brand-primary flex h-10 w-10 items-center justify-center rounded-xl border">
                  <IconRenderer name="MessageCircle" size={18} />
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
                    "group relative overflow-hidden rounded-[2.2rem] border transition-all duration-500",
                    "bg-surface-card border-border shadow-sm",
                    "data-[state=open]:border-brand-primary/40 data-[state=open]:bg-surface-card/80 data-[state=open]:shadow-glow-sm",
                    "hover:border-brand-primary/20 hover:shadow-md",
                  )}
                >
                  <AccordionTrigger className="flex w-full items-center justify-between px-8 py-7 text-left transition-all [&[data-state=open]>div>svg]:rotate-180">
                    <span className="text-text-primary group-hover:text-brand-primary pr-6 text-lg font-black tracking-tighter uppercase italic transition-colors md:text-2xl">
                      {item.question}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-8 pt-0 pb-8">
                    <div className="border-border/30 border-t pt-6">
                      <p className="text-text-secondary text-base leading-relaxed font-medium italic opacity-90 md:text-xl">
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
};

export default memo(DynamicFAQ);
