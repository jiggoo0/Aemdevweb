/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_ENGINE v18.0.6 (THEME_AGNOSTIC_STABILIZED)
 * [STRATEGY]: CSS Variable Strict Mapping | Identity-Aware UI | SEO Optimized
 * [MAINTAINER]: AEMZA MACKS (Lead Architect)
 */

"use client";

import React, { memo, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import JsonLd from "@/components/seo/JsonLd";
import type { ServiceFaq } from "@/types";

interface DynamicFAQProps {
  readonly items?: readonly ServiceFaq[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

export const DynamicFAQ = memo(
  ({
    items = [],
    title = "Specialist FAQ",
    description = "ข้อมูลเชิงลึกและคำแนะนำทางเทคนิคจากทีมผู้เชี่ยวชาญ เพื่อให้คุณตัดสินใจได้แม่นยำที่สุด",
    className,
  }: DynamicFAQProps) => {
    const faqSchema = useMemo(() => {
      if (!items || items.length === 0) return null;
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };
    }, [items]);

    if (!items || items.length === 0) return null;

    return (
      <section
        id="intelligence-hub"
        className={cn(
          "relative overflow-hidden bg-[var(--surface-main)] py-24 md:py-36",
          className,
        )}
      >
        {faqSchema && <JsonLd data={faqSchema} id="schema-faq-dynamic" />}

        {/* --- 01. INFRASTRUCTURE LAYER (Strict Variable Usage) --- */}
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(var(--brand-primary) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--brand-primary)_0%,transparent_60%)] opacity-[0.05] blur-3xl" />

        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
            {/* --- 02. HEADER NODE: Sticky Narrative --- */}
            <div className="space-y-10 lg:sticky lg:top-32 lg:col-span-5 lg:h-fit">
              <div className="inline-flex items-center gap-4 rounded-full border border-[var(--brand-primary)]/20 bg-[var(--brand-primary)]/5 px-6 py-2.5 backdrop-blur-md">
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--brand-primary)] shadow-[0_0_10px_var(--brand-primary)]" />
                <span className="font-mono text-[10px] font-black tracking-[0.3em] text-[var(--brand-primary)] uppercase">
                  Intelligence_Registry.v{SITE_CONFIG.project.version}
                </span>
              </div>

              <h2 className="text-5xl leading-[0.9] font-black tracking-tighter text-[var(--text-primary)] uppercase italic md:text-8xl">
                {title}
              </h2>

              <div className="border-l-[6px] border-[var(--brand-primary)]/40 pl-8">
                <p className="text-xl leading-relaxed font-medium text-[var(--text-primary)] italic opacity-80 md:text-2xl">
                  “{description}”
                </p>
              </div>

              <div className="hidden pt-12 lg:block">
                <a
                  href={SITE_CONFIG.links.line}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 opacity-40 transition-all hover:opacity-100"
                >
                  <div className="border-border/10 group-hover:shadow-glow-sm flex h-12 w-12 items-center justify-center rounded-2xl border bg-[var(--surface-main)] transition-all group-hover:border-[var(--brand-primary)]/40 group-hover:text-[var(--brand-primary)]">
                    <IconRenderer name="MessageCircle" size={20} />
                  </div>
                  <span className="font-mono text-[10px] font-black tracking-widest text-[var(--text-primary)] uppercase">
                    Technical_Inquiry_Line
                  </span>
                </a>
              </div>
            </div>

            {/* --- 03. INTERACTION NODE: The Accordion Matrix --- */}
            <div className="lg:col-span-7">
              <Accordion type="single" collapsible className="flex flex-col gap-6">
                {items.map((item, index) => (
                  <AccordionItem
                    key={`faq-${index}`}
                    value={`item-${index}`}
                    className={cn(
                      "group relative overflow-hidden border transition-all duration-500",
                      "border-border/10 bg-[var(--surface-main)] shadow-sm",
                      "rounded-[2rem] md:rounded-[2.5rem]",
                      "data-[state=open]:shadow-glow-sm data-[state=open]:border-[var(--brand-primary)]/40",
                      "hover:border-[var(--brand-primary)]/20",
                    )}
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between px-8 py-8 text-left transition-all hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
                      <span className="pr-6 text-xl font-black tracking-tighter text-[var(--text-primary)] uppercase italic transition-colors group-hover:text-[var(--brand-primary)] md:text-3xl">
                        {item.question}
                      </span>
                    </AccordionTrigger>

                    <AccordionContent className="px-8 pt-0 pb-10">
                      <div className="border-border/5 border-t pt-8">
                        <p className="text-lg leading-relaxed font-medium text-[var(--text-primary)] italic opacity-80 md:text-2xl">
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
