/**
 * [SECTION COMPONENT]: HERO_ENGINE_SYSTEM v17.0.2 (FLEXIBLE_CORE)
 * [STRATEGY]: Impact-First Architecture | Data-Type Resilience | Routing Flexibility
 * [MAINTAINER]: AEMDEVWEB Specialist Team
 */

"use client";

import React, { memo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/constants/site-config";
import IconRenderer from "@/components/ui/IconRenderer";
import { Button } from "@/components/ui/button";

interface HeroEngineProps {
  /** ข้อความหัวเรื่องหลัก (รองรับ HTML/JSX) */
  readonly title?: string | React.ReactNode;
  /** คำอธิบายรอง */
  readonly subtitle?: string;
  /** ข้อความบนปุ่มหลัก */
  readonly primaryActionLabel?: string;
  /** ลิงก์ของปุ่มหลัก (Default: Line OA) */
  readonly primaryHref?: string;
  /** ข้อความบนปุ่มรอง */
  readonly secondaryActionLabel?: string;
  /** ลิงก์ของปุ่มรอง (Default: /case-studies) */
  readonly secondaryHref?: string;
  /** สไตล์เพิ่มเติม */
  readonly className?: string;
}

const HeroEngine = ({
  title = "เปลี่ยนเว็บไซต์ให้เป็นเครื่องมือหาลูกค้าที่ทำงานแทนคุณ 24 ชั่วโมง",
  subtitle = "เราช่วยวางรากฐานระบบหลังบ้านให้แข็งแรง โหลดไว และติดอันดับการค้นหา เพื่อให้ธุรกิจของคุณเติบโตได้อย่างมั่นคงบนโลกดิจิทัลครับ",
  primaryActionLabel = "ปรึกษาแผนงานฟรี",
  primaryHref = SITE_CONFIG.links.line,
  secondaryActionLabel = "ดูผลงานที่ผ่านมา",
  secondaryHref = "/case-studies",
  className,
}: HeroEngineProps) => {
  return (
    <section
      className={cn(
        "bg-surface-main relative flex min-h-[85vh] items-center overflow-hidden py-24 md:py-32 lg:py-40",
        className,
      )}
    >
      {/* 01. ATMOSPHERIC PHYSICS: Background Infrastructure */}
      <div className="pointer-events-none absolute inset-0 z-0 select-none" aria-hidden="true">
        {/* Grid Layer */}
        <div className="bg-infrastructure-grid absolute inset-0 opacity-[0.05]" />
        
        {/* Dynamic Auras */}
        <div className="ambient-aura absolute top-1/4 -right-20 h-[300px] w-[300px] opacity-[0.15] blur-[120px] md:h-[600px] md:w-[600px] will-change-transform" />
        <div className="ambient-aura absolute -bottom-40 -left-20 h-[250px] w-[250px] opacity-[0.08] blur-[100px] md:h-[500px] md:w-[500px] will-change-transform" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-7xl">
          
          {/* 02. ACTIVE NODE INDICATOR */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-offset border-brand-primary/10 shadow-pro-sm mb-8 inline-flex items-center gap-4 rounded-2xl border px-4 py-2 md:mb-14 md:px-6 md:py-3"
          >
            <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
              <div className="bg-brand-primary absolute inset-0 animate-ping rounded-full opacity-40" />
              <div className="bg-brand-primary relative h-2 w-2 rounded-full md:h-2.5 md:w-2.5" />
            </div>
            <span className="text-text-primary font-mono text-[9px] font-black tracking-[0.3em] uppercase md:text-[10px]">
              System_Active.Stabilized
            </span>
          </motion.div>

          {/* 03. STRATEGIC NARRATIVE */}
          <div className="space-y-8 md:space-y-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="text-4xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-7xl md:leading-[1] lg:text-8xl"
            >
              {/* รองรับทั้ง String และ Complex Node (span, br) */}
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="border-brand-primary border-l-2 pl-6 md:border-l-4 md:pl-10"
            >
              <p className="max-w-3xl text-lg leading-relaxed font-medium text-gray-400 italic opacity-90 md:text-2xl">
                “{subtitle}”
              </p>
            </motion.div>
          </div>

          {/* 04. CONVERSION INTERFACE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-start gap-4 pt-12 md:flex-row md:items-center md:gap-8 md:pt-16"
          >
            {/* Primary Action */}
            <Button
              asChild
              className="hover:bg-brand-primary shadow-pro-lg group relative h-16 w-full overflow-hidden rounded-[2rem] bg-white px-8 text-black transition-all duration-500 hover:text-black active:scale-95 md:h-20 md:w-auto md:px-12"
            >
              <Link href={primaryHref} target="_blank">
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-black/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                <IconRenderer
                  name="MessageCircle"
                  size={20}
                  className="relative z-10 mr-3 md:mr-4"
                />
                <span className="relative z-10 text-[10px] font-black tracking-[0.2em] uppercase md:text-[11px]">
                  {primaryActionLabel}
                </span>
              </Link>
            </Button>

            {/* Secondary Action */}
            <Button
              variant="outline"
              asChild
              className="hover:border-brand-primary/50 h-16 w-full rounded-[2rem] border-white/10 bg-white/5 px-8 text-white backdrop-blur-xl transition-all duration-500 hover:bg-white/10 active:scale-95 md:h-20 md:w-auto md:px-12"
            >
              <Link href={secondaryHref}>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase md:text-[11px]">
                  {secondaryActionLabel}
                </span>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default memo(HeroEngine);
