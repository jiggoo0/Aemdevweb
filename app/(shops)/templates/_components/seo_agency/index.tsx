/** @format */

"use client";

import React from "react";
import {
  Code,
  FileText,
  Zap,
  Globe,
  ArrowRight,
  BarChart3,
  Search,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SeoAgencyData } from "./schema";

/** * IconMap - กำจัด 'any' ด้วยการระบุประเภท LucideIcon
 * เคลียร์พิกัด WARNING จากผลการ Audit
 */
const IconMap: Record<string, LucideIcon> = {
  Code,
  FileText,
  Zap,
  Globe,
};

export default function SeoAgencyTemplate({ data }: { data: SeoAgencyData }) {
  // [Safety Shield]: ส่วนป้องกันหน้าขาว
  if (!data || !data.hero) {
    return (
      <div className="flex h-[60vh] w-full flex-col items-center justify-center bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-100 border-t-emerald-500" />
        <p className="font-heading mt-4 text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
          Syncing Technology DNA...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-emerald-500/10 selection:text-emerald-900">
      {/* 1. ส่วนแถบนำทาง (Navbar) */}
      <nav className="fixed top-0 z-50 w-full border-b border-slate-50 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <TrendingUp size={20} className="text-emerald-500" />
            <span className="font-heading text-xl font-black tracking-tighter text-slate-950 uppercase italic">
              {data.navigation.logo}
            </span>
          </div>
          <button className="font-heading rounded-2xl bg-slate-950 px-6 py-2.5 text-[10px] font-black tracking-widest text-emerald-500 uppercase italic transition-all hover:bg-emerald-600 hover:text-white active:scale-95">
            {data.navigation.cta}
          </button>
        </div>
      </nav>

      {/* 2. ส่วนหัวเว็บไซต์ (Hero) */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-56 lg:pb-32">
        <div
          className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]"
          aria-hidden="true"
        />
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <div className="mb-10 inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-2 ring-1 ring-emerald-500/20">
              <Search size={14} className="text-emerald-500" />
              <span className="font-heading text-[10px] font-black tracking-widest text-white uppercase italic">
                {data.hero.badge}
              </span>
            </div>
            <h1 className="font-heading text-6xl leading-[0.95] font-black tracking-tighter text-slate-950 md:text-8xl lg:text-[10rem]">
              {data.hero.title} <br />
              <span className="text-emerald-500 italic">
                {data.hero.highlight}
              </span>
            </h1>
            <p className="mt-12 max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              {data.hero.description}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="mt-24 grid grid-cols-1 gap-12 border-t border-slate-100 pt-16 sm:grid-cols-3">
            {data.stats.map((stat, i) => (
              <div key={i} className="group cursor-default">
                <p className="font-heading text-7xl font-black tracking-tighter text-slate-950 italic transition-colors group-hover:text-emerald-500">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-3 text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase italic">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ส่วนรายการบริการ (Solutions) */}
      <section className="bg-slate-50 py-32 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="mb-24 flex items-end justify-between border-b border-slate-200 pb-12">
            <h2 className="font-heading max-w-xl text-5xl font-black tracking-tighter text-slate-950 uppercase italic md:text-7xl">
              {data.services.title}
            </h2>
            <BarChart3
              className="mb-4 hidden text-emerald-500 lg:block"
              size={64}
            />
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {data.services.items.map((item, i) => {
              const Icon = IconMap[item.icon] || Zap;
              return (
                <div
                  key={i}
                  className="group relative rounded-[3rem] border border-white bg-white p-12 shadow-sm transition-all hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5"
                >
                  <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading mb-6 text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed font-bold text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. ส่วนปิดการขาย (CTA) */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-center text-white shadow-2xl shadow-slate-900/40 md:p-32">
            <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]" />
            <h2 className="font-heading relative z-10 mx-auto max-w-4xl text-5xl leading-[1] font-black tracking-tighter uppercase italic md:text-8xl">
              {data.cta.title}
            </h2>
            <div className="relative z-10 mt-20 flex flex-col items-center gap-8">
              <button className="group font-heading flex h-20 items-center gap-6 rounded-3xl bg-emerald-500 px-12 text-xs font-black tracking-[0.2em] text-slate-950 uppercase italic transition-all hover:scale-105 hover:shadow-2xl active:scale-95">
                {data.cta.buttonText}
                <ArrowRight
                  size={22}
                  className="transition-transform group-hover:translate-x-2"
                />
              </button>
              <p className="font-heading text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase italic">
                {data.cta.subText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-20 text-center opacity-30 select-none">
        <p className="font-heading text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Performance Technology Partner • AEM Engine v2026
        </p>
      </footer>
    </div>
  );
}
