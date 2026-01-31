/** @format */

"use client";

import React from "react";
import {
  Zap,
  Target,
  MessageSquare,
  ArrowRight,
  Menu,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { FacebookAdsData } from "./schema";

/** * [ICON MAPPING PROTOCOL]
 * ผูกพิกัดไอคอนเข้ากับชุดข้อมูล Schema เพื่อการเรนเดอร์แบบ Dynamic
 */
const IconMap: Record<string, LucideIcon> = {
  Zap,
  Target,
  MessageSquare,
  TrendingUp,
};

/**
 * FacebookAdsExpertTemplate: ระบบแสดงผล Strategic Landing Page
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ยุทธศาสตร์: Strategic Stopping Power & ROAS Proof
 * ควบคุมสมรรถนะโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function FacebookAdsExpertTemplate({
  data,
}: {
  data: FacebookAdsData;
}) {
  // [SAFETY SHIELD]: ป้องกัน Runtime Error หาก Payload ข้อมูลไม่สมบูรณ์
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-[oklch(1_0_0)]">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[oklch(0.95_0.02_260)] border-t-brand-primary" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-[oklch(0.5_0.02_260)] uppercase italic">
          Optimizing Ad-Unit Data...
        </p>
      </div>
    );
  }

  return (
    <div className="bg-[oklch(1_0_0)] font-sans text-brand-depth antialiased selection:bg-brand-primary/10 dark:bg-[oklch(0.12_0.02_260)] dark:text-white">
      {/* 1. NAVIGATION NODE: พิกัดนำทางยุทธศาสตร์ */}
      <nav className="fixed top-0 z-50 w-full border-b border-[oklch(0.95_0.02_260)] bg-white/80 backdrop-blur-xl dark:border-white/5 dark:bg-[oklch(0.12_0.02_260)]/80">
        <div className="container-za flex h-20 items-center justify-between">
          <div className="flex items-center gap-2 text-xl font-black tracking-tighter text-brand-depth uppercase italic dark:text-white">
            <Zap size={22} className="fill-brand-primary text-brand-primary" />
            {data.navigation?.logo}
          </div>
          <div className="flex items-center gap-4">
            <a
              href={data.footer?.link}
              className="font-heading hidden rounded-2xl bg-brand-depth px-6 py-2.5 text-[10px] font-black tracking-widest text-brand-primary uppercase italic transition-all hover:bg-brand-primary hover:text-white md:block"
            >
              {data.navigation?.cta}
            </a>
            <button
              className="text-brand-depth dark:text-white md:hidden"
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION: พิกัดสร้าง Attention */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />
        <div className="container-za text-center">
          <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-brand-depth px-6 py-2 ring-1 ring-brand-primary/20 dark:bg-white/5 shadow-node">
            <Target size={16} className="text-brand-primary" />
            <span className="font-heading text-[10px] font-black tracking-widest text-white uppercase italic">
              {data.hero.badge}
            </span>
          </div>
          <h1 className="font-heading text-5xl leading-[0.95] font-black tracking-tighter text-brand-depth md:text-8xl lg:text-[11rem] dark:text-white">
            {data.hero.title} <br />
            <span className="text-brand-primary italic">
              {data.hero.highlight}
            </span>
          </h1>
          <p className="mx-auto mt-12 max-w-xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl dark:text-[oklch(0.7_0.02_260)]">
            {data.hero.description}
          </p>
          <div className="mt-16 flex justify-center">
            <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-brand-primary px-12 text-sm font-black tracking-[0.2em] text-brand-depth uppercase italic shadow-aurora transition-all hover:scale-105 active:scale-95">
              {data.hero.cta}
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </button>
          </div>
        </div>
      </section>

      {/* 3. STATS NODE: พิกัดยืนยันผลลัพธ์ */}
      <section className="border-y border-[oklch(0.95_0.02_260)] bg-white py-24 dark:border-white/5 dark:bg-[oklch(0.12_0.02_260)]">
        <div className="container-za">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
            {data.stats?.map((stat, i) => (
              <div key={i} className="group text-center md:text-left">
                <div className="font-heading text-6xl font-black tracking-tighter text-brand-depth transition-colors group-hover:text-brand-primary md:text-7xl dark:text-white">
                  {stat.value}
                </div>
                <div className="font-heading mt-3 text-[11px] font-black tracking-widest text-brand-primary uppercase italic">
                  // {stat.label}
                </div>
                <p className="mt-4 text-sm font-bold text-[oklch(0.5_0.02_260)]">
                  {stat.subValue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HIGHLIGHTS: พิกัดขยี้จุดแข็ง */}
      <section className="bg-[oklch(0.98_0.01_260)] py-32 dark:bg-[oklch(0.15_0.02_260)] lg:py-48">
        <div className="container-za">
          <div className="grid gap-10 md:grid-cols-3">
            {data.highlights?.items?.map((item, i) => {
              const Icon = IconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="depth-card group p-12 hover:border-brand-primary/40"
                >
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-[oklch(0.98_0.01_260)] text-brand-primary transition-all group-hover:bg-brand-depth group-hover:text-brand-primary dark:bg-white/5">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading mb-6 text-2xl font-black tracking-tight text-brand-depth uppercase italic dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. STRATEGY PROTOCOL */}
      <section className="bg-white py-32 dark:bg-[oklch(0.12_0.02_260)] lg:py-48">
        <div className="container-za">
          <div className="mb-24 max-w-2xl border-l-8 border-brand-primary pl-8">
            <h2 className="font-heading text-4xl font-black tracking-tighter text-brand-depth uppercase italic md:text-6xl dark:text-white">
              Strategic <span className="text-brand-primary">Protocol.</span>
            </h2>
            <p className="mt-6 text-xl font-bold text-[oklch(0.5_0.02_260)]">
              ลำดับพิกัดงานเชิงลึกเพื่อการ Scale ผลกำไรสูงสุด
            </p>
          </div>

          <div className="grid gap-12">
            {data.strategy?.map((step, i) => (
              <div
                key={i}
                className="group flex flex-col gap-6 border-l-2 border-[oklch(0.9_0.02_260)] pl-8 transition-colors hover:border-brand-primary md:flex-row md:items-center md:gap-16 dark:border-white/10"
              >
                <div className="font-heading text-5xl font-black text-[oklch(0.9_0.02_260)] transition-colors group-hover:text-brand-primary md:text-7xl dark:text-white/10">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-heading mb-3 text-2xl font-black text-brand-depth uppercase italic dark:text-white">
                    {step.title}
                  </h4>
                  <p className="max-w-xl text-lg font-bold text-[oklch(0.5_0.02_260)]">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER NODE: พิกัดแก้ไข (FIXED TS2339) */}
      <footer className="bg-brand-depth py-32 text-white dark:bg-[oklch(0.1_0.02_260)]">
        <div className="container-za text-center">
          <h2 className="font-heading mb-12 text-4xl font-black tracking-tighter uppercase italic md:text-6xl">
            {/* [FIXED]: ใช้ 'copy' แทน 'title' ตามพิกัด Schema จริง */}
            {data.footer?.copy || "Ready to Scale?"}
          </h2>
          <div className="flex justify-center">
            <a
              href={data.footer?.link}
              className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-brand-primary px-12 text-sm font-black tracking-[0.2em] text-brand-depth uppercase italic shadow-aurora transition-all hover:scale-105 active:scale-95"
            >
              {/* [FIXED]: ใช้ 'navigation.cta' หรือ Default String แทน 'footer.cta' ที่ไม่มีอยู่จริง */}
              {data.navigation?.cta || "GET STARTED"}
              <ArrowRight
                size={22}
                className="transition-transform group-hover:translate-x-2"
              />
            </a>
          </div>
          <p className="mt-24 text-[10px] font-black tracking-[0.5em] opacity-30 uppercase italic">
            Developed by {data.footer?.companyName || data.navigation?.logo} •
            Specialist Protocol 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
