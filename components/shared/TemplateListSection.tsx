/** @format */

"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";

import { getAllTemplatesMetadata } from "@/lib/template";
import TemplateCard from "@/components/marketplace/template/TemplateCard";

/**
 * TemplateListSection - ส่วนแสดงผลรูปแบบระบบและพอร์ตโฟลิโอ (The Solution Showcase)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การนำเสนอสินทรัพย์ดิจิทัลที่ผ่านการเพิ่มประสิทธิภาพระดับสูงสุด
 */
export default function TemplateListSection() {
  const templates = getAllTemplatesMetadata();
  const displayTemplates = (templates || []).slice(0, 4);

  // การตั้งค่าการเคลื่อนไหวเชิงระบบที่มีระเบียบและลื่นไหล
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden py-24 antialiased lg:py-40">
      {/* รายละเอียดพื้นหลัง: ลายเส้นตารางเชิงระบบเพื่อความประณีต */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        {/* [LAYER 1]: HEADER NODE - ส่วนนำเสนอจุดเด่นของระบบ */}
        <div className="mb-24 flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-16"
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-white px-5 py-1.5 text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase italic shadow-sm">
              <Zap size={12} className="fill-emerald-500" />
              Strategic System Assets
            </div>
            <h2 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Digital <br />
              <span className="text-emerald-500">Assets.</span>
            </h2>
            <p className="font-body mt-10 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              เปลี่ยนเว็บไซต์ให้เป็นสินทรัพย์เชิงธุรกิจที่สร้างผลลัพธ์จริง
              <br className="hidden md:block" />
              ด้วยรูปแบบระบบที่พัฒนาด้วยเทคโนโลยี
              <span className="text-slate-950">Next.js 16</span>
              ที่เนี้ยบและเปี่ยมประสิทธิภาพสูงสุด
            </p>
          </motion.div>

          <Link
            href="/templates"
            className="group relative inline-flex items-center gap-5 overflow-hidden rounded-2xl bg-slate-950 px-10 py-7 text-[11px] font-black tracking-[0.3em] text-white uppercase italic shadow-2xl transition-all hover:bg-emerald-600 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-4">
              View All Solutions
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </span>
          </Link>
        </div>

        {/* [LAYER 2]: QUALITY MATRIX - มาตรฐานการตรวจสอบคุณภาพ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            "Technical SEO Strategy",
            "Performance LCP < 0.8s",
            "Strategic Data Logic",
            "Conversion-First Framework",
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-slate-950">
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
              <span className="font-heading text-[10px] font-black tracking-[0.2em] text-slate-600 uppercase italic">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        {/* [LAYER 3]: STAGGERED GRID - พื้นที่แสดงตัวอย่างรูปแบบระบบ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-2"
        >
          {displayTemplates.length > 0 ? (
            displayTemplates.map((item) => (
              <motion.div key={item.slug} variants={itemVariants}>
                <TemplateCard template={item} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-slate-100 bg-slate-50/30 py-40 text-center">
              <Sparkles
                className="mb-8 animate-pulse text-slate-200"
                size={56}
              />
              <h3 className="font-heading text-2xl font-black text-slate-300 uppercase italic">
                Updating System Content...
              </h3>
            </div>
          )}
        </motion.div>

        {/* ส่วนสรุปท้ายเซกชัน */}
        <div className="mt-32 flex flex-col items-center gap-4 opacity-20 select-none">
          <div className="h-px w-24 bg-slate-400" />
          <p className="font-heading text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
            Developed by นายเอ็มซ่ามากส์ • AEMDEVWEB 2026
          </p>
        </div>
      </div>
    </section>
  );
}
