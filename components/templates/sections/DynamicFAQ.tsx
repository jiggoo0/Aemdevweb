/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_SYSTEM v17.8.5 (STABILIZED)
 * [STRATEGY]: Schema-First | High-Fidelity UX | Persona Hardened
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
  description = "ข้อมูลวิศวกรรมและคำแนะนำจาก นายเอ็มซ่ามากส์",
  className,
}: DynamicFAQProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className={cn("py-32 md:py-48", className)}>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-32">
          <div className="space-y-10 lg:col-span-5">
            <div className="border-brand-primary/20 bg-brand-primary/5 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black uppercase">
              Intelligence_Registry
            </div>
            <h2 className="text-text-primary text-5xl font-black tracking-tighter uppercase italic md:text-7xl">
              {title}
            </h2>
            <p className="text-text-secondary border-brand-primary/30 border-l-2 pl-8 text-xl leading-relaxed font-medium italic opacity-80">
              {description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="space-y-6">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-surface-card border-border data-[state=open]:border-brand-primary/40 data-[state=open]:shadow-glow-sm rounded-[2.5rem] border px-8 py-4 transition-all duration-500"
                >
                  <AccordionTrigger className="text-text-primary hover:text-brand-primary text-left text-xl font-black tracking-tight uppercase italic transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary pt-4 pb-8 pl-2 text-lg leading-relaxed font-medium italic opacity-90">
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
