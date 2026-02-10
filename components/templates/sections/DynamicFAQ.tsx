/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_SYSTEM v17.5.5 (STABILIZED)
 * [STRATEGY]: Schema-First | UX Resiliency | Neural Physics
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import type { ServiceFaq } from "@/types"; // Import Type ที่ถูกต้อง

interface DynamicFAQProps {
  readonly items?: readonly ServiceFaq[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

const DynamicFAQ = ({
  items = [],
  title = "Frequently Asked Questions",
  description = "คำถามที่พบบ่อยเกี่ยวกับบริการและขั้นตอนการทำงาน",
  className,
}: DynamicFAQProps) => {
  // [SAFETY_CHECK]: หากไม่มีข้อมูล ไม่ต้องเรนเดอร์ UI
  if (!items || items.length === 0) return null;

  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Header Column */}
          <div className="space-y-8 lg:col-span-5">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
              Knowledge_Base
            </div>
            <h2 className="text-text-primary text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
              {title}
            </h2>
            <p className="text-text-secondary text-lg font-medium italic opacity-80">
              {description}
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-surface-card border-border data-[state=open]:border-brand-primary/40 data-[state=open]:shadow-glow-sm rounded-[2rem] border px-6 py-2 transition-all duration-300"
                >
                  <AccordionTrigger className="text-text-primary hover:text-brand-primary text-left text-lg font-bold tracking-wide uppercase italic transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pt-2 pb-6 pl-2 text-base leading-relaxed font-medium opacity-90">
                    {item.answer}
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
