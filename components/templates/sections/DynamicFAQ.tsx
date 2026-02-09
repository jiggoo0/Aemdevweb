/**
 * [SECTION COMPONENT]: DYNAMIC_FAQ_ENGINE v17.0.2 (ACCESSIBILITY_TUNED)
 * [STRATEGY]: Intelligence Knowledge Base | SEO Authority | Fluid Motion
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { useState, memo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/* 1. Infrastructure & UI Components */
import IconRenderer from "@/components/ui/IconRenderer";
import JsonLd from "@/components/seo/JsonLd";
import { SITE_CONFIG } from "@/constants/site-config";

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

interface DynamicFAQProps {
  readonly items: readonly FAQItem[];
  readonly title?: string;
  readonly description?: string;
  readonly className?: string;
}

/**
 * @component DynamicFAQ
 * @description หน่วยประมวลผลคำถามระดับ Specialist (Accordion System)
 * จูนมาเพื่อลดความกังวลของพาร์ทเนอร์ และเพิ่มคะแนน ROI ผ่าน FAQ Schema
 */
const DynamicFAQ = ({
  items,
  title = "ศูนย์ความรู้และคำถามที่พบบ่อย",
  description = "รวบรวมข้อมูลเชิงลึกและคำชี้แจงด้านสถาปัตยกรรมระบบเพื่อให้คุณเริ่มแผนงานได้อย่างมั่นใจ",
  className,
}: DynamicFAQProps) => {
  // [STATE]: ใช้ index เพื่อเปิดทีละอัน (Exclusive Accordion)
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // [A] SEO ARCHITECTURE: เตรียม Schema
  const faqSchema = {
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

  return (
    <section className={cn("bg-surface-main relative overflow-hidden py-24 md:py-32", className)}>
      <JsonLd data={faqSchema} />

      {/* 01. ATMOSPHERIC LAYER: มิติแสงและระบบกริตรากฐาน */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.05] select-none"
        aria-hidden="true"
      >
        <div className="bg-infrastructure-grid absolute inset-0" />
        <div className="ambient-aura absolute right-0 bottom-0 h-[500px] w-[500px] opacity-[0.15] blur-[120px] will-change-transform" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* 02. STRATEGIC HEADER: การสื่อสารระดับสากล */}
        <header className="mb-20 max-w-4xl space-y-6 md:mb-32 md:space-y-8">
          <div className="border-brand-primary/20 bg-brand-primary/10 text-brand-primary inline-flex items-center gap-4 rounded-full border px-5 py-2 font-mono text-[10px] font-black tracking-[0.4em] uppercase">
            <IconRenderer name="SearchCheck" size={14} />
            <span>Intelligence_Hub.v17</span>
          </div>

          <h2 className="text-4xl leading-[0.95] font-black tracking-tighter text-white uppercase italic md:text-7xl lg:text-8xl">
            {title}
          </h2>
          <div className="border-brand-primary border-l-4 pl-6 md:pl-12">
            <p className="max-w-2xl text-lg leading-relaxed font-medium text-gray-400 italic opacity-80 md:text-2xl">
              “{description}”
            </p>
          </div>
        </header>

        {/* 03. ACCORDION REGISTRY: ระบบโหนดคำถาม */}
        <div className="max-w-5xl space-y-4 md:space-y-6">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={`${item.question}-${index}`}
                className={cn(
                  "group overflow-hidden rounded-[2rem] border transition-all duration-500 md:rounded-[2.5rem]",
                  isActive
                    ? "border-brand-primary/40 bg-[#0A0A0A] shadow-2xl"
                    : "hover:border-brand-primary/20 border-white/5 bg-white/[0.02] hover:bg-white/[0.04]",
                )}
              >
                <button
                  id={headerId}
                  aria-controls={contentId}
                  aria-expanded={isActive}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="flex w-full items-start justify-between p-6 text-left md:items-center md:p-10 cursor-pointer"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
                    <span
                      className={cn(
                        "font-mono text-[10px] font-black tracking-widest uppercase transition-colors",
                        isActive ? "text-brand-primary" : "text-gray-600 group-hover:text-gray-400",
                      )}
                    >
                      NODE.0{index + 1}
                    </span>
                    <span
                      className={cn(
                        "text-lg font-bold tracking-tight transition-colors md:text-2xl",
                        isActive ? "text-brand-primary" : "text-white",
                      )}
                    >
                      {item.question}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-500 md:h-12 md:w-12 md:rounded-2xl",
                      isActive
                        ? "border-brand-primary bg-brand-primary rotate-180 text-black"
                        : "border-white/10 bg-white/5 text-gray-400 group-hover:border-white/20 group-hover:text-white",
                    )}
                  >
                    <IconRenderer name="ChevronDown" size={20} strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      id={contentId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-8 md:px-10 md:pb-10">
                        <div className="border-t border-white/5 pt-6 md:pt-8">
                          <p className="text-base leading-relaxed font-medium text-gray-400 md:text-lg">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* 04. CONVERSION FOOTNOTE: จุดเชื่อมต่อการสนับสนุนเชิงเทคนิค */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 md:mt-32 md:flex-row md:gap-10 md:pt-16"
        >
          <div className="flex items-center gap-6 md:gap-8">
            <div className="bg-brand-primary/10 text-brand-primary relative flex h-14 w-14 items-center justify-center rounded-2xl md:h-16 md:w-16">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-2xl opacity-20" />
              <IconRenderer name="MessageCircle" size={24} className="relative z-10 md:size-7" />
            </div>
            <div className="space-y-1 md:space-y-2">
              <p className="text-lg font-black text-white md:text-2xl">
                Still have unanswered queries?
              </p>
              <p className="text-xs font-medium text-gray-500 italic opacity-60 md:text-sm">
                ทีมวิศวกรของเราพร้อมถอดรหัสทุกข้อสงสัยเชิงเทคนิคให้คุณโดยไม่มีค่าใช้จ่าย
              </p>
            </div>
          </div>

          <Link
            href={SITE_CONFIG.links.line}
            target="_blank"
            className="group hover:bg-brand-primary relative flex h-16 w-full items-center justify-center gap-4 overflow-hidden rounded-[1.5rem] bg-white px-8 transition-all duration-500 active:scale-95 md:h-20 md:w-auto md:justify-start md:px-12"
          >
            <span className="relative z-10 text-[10px] font-black tracking-[0.3em] text-black uppercase md:text-[11px]">
              เปิดช่องทางปรึกษา
            </span>
            <IconRenderer
              name="ArrowUpRight"
              size={18}
              className="relative z-10 text-black transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 md:size-5"
            />
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(DynamicFAQ);
