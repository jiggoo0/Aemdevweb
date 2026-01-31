/** @format */
// พิกัดข้อมูล: components/shared/Hero.tsx
// หน้าที่: ศูนย์กลางการนำเสนอแผนงานระบบหลัก (The System Hub)
// มาตรฐาน: Next.js 16 | Tailwind 4 (OKLCH) | Ultra-Deep Level 7
// ควบคุมระบบโดย: นายเอ็มซ่ามากส์

"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  PlayCircle,
  Cpu,
  MapPin,
} from "lucide-react"; // [FIXED]: ลบ Terminal ออกเนื่องจากไม่ได้ถูกใช้งานใน Component นี้
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site-config";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[oklch(1_0_0)] pt-24 pb-16 lg:pt-48 lg:pb-40 dark:bg-[oklch(0.12_0.02_260)]">
      {/* ลายตารางพื้นหลัง: ให้ความรู้สึกเนี้ยบและเป็นระบบแม่นยำ */}
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,oklch(0.9_0.01_260_/_0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.9_0.01_260_/_0.1)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:4rem_4rem]"
        aria-hidden="true"
      />

      {/* รัศมีแสง Emerald Glow: เพิ่มมิติและความพรีเมียม */}
      <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] translate-x-1/4 -translate-y-1/4 rounded-full bg-[oklch(0.65_0.2_160_/_0.05)] blur-[120px]" />

      <div className="container-za">
        <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-center">
          
          {/* [CONTENT NODE]: ส่วนสื่อสารยุทธศาสตร์หลัก */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 space-y-12"
          >
            {/* Status Badge: ยืนยันความพร้อมของระบบปักหมุดสำเร็จ */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-[oklch(0.65_0.2_160_/_0.2)] bg-[oklch(0.96_0.04_160_/_0.5)] px-4 py-2 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-[oklch(0.65_0.2_160)]" />
              <span className="text-[10px] font-black tracking-[0.2em] text-[oklch(0.4_0.15_160)] uppercase italic">
                Rank Success at Every Node • 2026
              </span>
            </div>

            {/* Headline: อัตลักษณ์แบรนด์ที่เน้นความเป็นที่หนึ่ง */}
            <div className="relative">
              <h1 className="text-7xl leading-[0.85] font-black tracking-tighter text-[oklch(0.2_0.02_260)] uppercase italic md:text-9xl lg:text-[11rem] dark:text-[oklch(0.95_0.01_260)]">
                <span>AEM</span>
                <span className="text-[oklch(0.65_0.2_160)]">DEV</span>
                <span>WEB</span>
                <br />
                <span className="relative mt-4 inline-block text-[0.4em] tracking-tight text-[oklch(0.65_0.2_160)] md:text-[0.5em]">
                  The Specialist
                  <span className="text-[oklch(0.2_0.02_260)] dark:text-[oklch(0.95_0.01_260)]">.</span>
                </span>
              </h1>
            </div>

            {/* Value Proposition: คุยแบบมนุษย์เน้นผลลัพธ์ที่จับต้องได้ */}
            <p className="max-w-2xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl">
              เราทำเว็บไซต์ให้
              <strong className="mx-2 text-[oklch(0.2_0.02_260)] underline decoration-[oklch(0.65_0.2_160_/_0.3)] decoration-8 underline-offset-[10px] dark:text-[oklch(0.95_0.01_260)]">
                "ติดหน้าแรก"
              </strong>
              เพื่อให้คนหาธุรกิจคุณเจอเป็นเจ้าแรก จูนความเร็วและ SEO โดย
              นายเอ็มซ่ามากส์ เพื่อยอดขายที่โตขึ้นจริง
            </p>

            {/* [CTA NODE]: ปุ่มนำทางเชิงยุทธศาสตร์ */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button
                asChild
                className="group h-20 rounded-3xl bg-[oklch(0.2_0.02_260)] px-10 text-lg font-black tracking-widest text-white uppercase italic shadow-2xl transition-all hover:bg-[oklch(0.65_0.2_160)] active:scale-95 dark:bg-white dark:text-slate-950"
              >
                <Link href="/services" className="flex items-center gap-4">
                  ดูบริการทั้งหมด
                  <ArrowRight
                    size={22}
                    strokeWidth={3}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group h-20 rounded-3xl border-2 border-[oklch(0.65_0.2_160)] px-10 text-lg font-black tracking-widest text-[oklch(0.2_0.02_260)] uppercase italic transition-all hover:bg-[oklch(0.65_0.2_160_/_0.1)] active:scale-95 dark:text-white"
              >
                <Link href="/areas" className="flex items-center gap-4">
                  <MapPin size={22} className="text-[oklch(0.65_0.2_160)]" />
                  ปักหมุดสำเร็จได้ทุกพิกัด
                </Link>
              </Button>
            </div>

            {/* [SUB CTA]: สร้าง Trust ผ่านผลงานจริง */}
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-4 px-2 py-4 text-xs font-black tracking-widest text-[oklch(0.5_0.02_260)] uppercase italic transition-all hover:text-[oklch(0.2_0.02_260)] dark:hover:text-white"
            >
              <PlayCircle
                size={20}
                className="text-[oklch(0.65_0.2_160)] transition-transform group-hover:scale-110"
              />
              ดูเคสธุรกิจที่สำเร็จมาแล้วจริงๆ
            </Link>

            {/* Performance Metrics: ยืนยันสมรรถนะระดับสูง */}
            <div className="flex flex-wrap items-center gap-8 border-t border-[oklch(0.9_0.02_260_/_0.3)] pt-8">
              {[
                { icon: <Zap size={18} />, text: "SPEED 100/100" },
                { icon: <CheckCircle size={18} />, text: "LOCAL SEO MASTER" },
                { icon: <Cpu size={18} />, text: "FASTEST EDGE RENDERING" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-[10px] font-black tracking-[0.2em] text-[oklch(0.5_0.02_260)] uppercase italic transition-colors hover:text-[oklch(0.65_0.2_160)]"
                >
                  <span className="text-[oklch(0.65_0.2_160)]">
                    {item.icon}
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* [AUTHORITY NODE]: บัตรสร้างความเชื่อมั่นรายบุคคล */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden flex-1 lg:block"
          >
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-8 rounded-[4rem] bg-[oklch(0.65_0.2_160_/_0.05)] blur-[80px]" />

              <div className="depth-card relative overflow-hidden rounded-[3.5rem] bg-white p-12 shadow-2xl transition-all duration-700 hover:-translate-y-3 dark:bg-[oklch(0.15_0.02_260)]">
                <div className="space-y-10">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-3 rounded-xl bg-[oklch(0.2_0.02_260)] px-4 py-1.5">
                      <div className="h-2 w-2 animate-ping rounded-full bg-[oklch(0.65_0.2_160)]" />
                      <span className="text-[10px] font-black tracking-[0.25em] text-white uppercase italic">
                        Node Online
                      </span>
                    </div>
                    <Zap className="text-[oklch(0.65_0.2_160)]" size={32} />
                  </div>

                  <div className="space-y-4">
                    <blockquote className="text-4xl leading-[1.1] font-black text-[oklch(0.2_0.02_260)] italic dark:text-[oklch(0.95_0.01_260)]">
                      เราไม่ได้แค่ทำเว็บ
                      <br />
                      แต่เราสร้างเครื่องมือ
                      <br />
                      หาลูกค้าให้ธุรกิจคุณ
                    </blockquote>
                    <p className="text-lg font-bold text-[oklch(0.5_0.02_260)]">
                      โดย นายเอ็มซ่ามากส์
                    </p>
                  </div>

                  <div className="h-[2px] w-full bg-[oklch(0.95_0.02_260_/_0.5)]" />

                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.2_0.02_260)] text-white shadow-xl ring-4 shadow-[oklch(0.2_0.02_260_/_0.2)] ring-[oklch(0.98_0.01_260)]">
                      <span className="text-sm font-black italic">AEM</span>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg leading-none font-black text-[oklch(0.2_0.02_260)] uppercase italic dark:text-[oklch(0.95_0.01_260)]">
                        {siteConfig.expert.name}
                      </div>
                      <div className="mt-1 text-[9px] font-black tracking-widest text-[oklch(0.6_0.15_160)] uppercase italic">
                        Technical SEO Specialist
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
