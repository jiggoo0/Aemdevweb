/** @format */

import React from "react"
import { FacebookAdsData } from "./schema"
import { BarChart3, Target, ArrowUpRight, CheckCircle2 } from "lucide-react"

interface FacebookAdsTemplateProps {
  data: FacebookAdsData
}

/**
 * Facebook Ads Expert Template
 * โครงสร้างเน้นการโชว์ผลลัพธ์ (Impact) และความน่าเชื่อถือ
 */
export const FacebookAdsTemplate: React.FC<FacebookAdsTemplateProps> = ({
  data,
}) => {
  // ดึงข้อมูลส่วน Visual Content มาใช้งาน
  const { hero, stats, services, strategy } = data

  return (
    <div className="fb-ads-template bg-slate-950 text-left font-sans text-slate-300 selection:bg-emerald-500/30">
      {/* 1. Hero Section: ส่วนพาดหัวหลัก */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1">
              <span className="text-[10px] font-black tracking-widest text-emerald-400 uppercase">
                Data-Driven Marketing
              </span>
            </div>
            <h1 className="font-prompt text-5xl leading-[1.1] font-black tracking-tighter text-white md:text-8xl">
              {hero.title}
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-light text-slate-400">
              {hero.description}
            </p>
            <div className="flex items-center gap-6">
              <button className="bg-emerald-500 px-10 py-5 text-[11px] font-black tracking-widest text-slate-950 uppercase shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all hover:scale-105 hover:bg-emerald-400">
                {hero.cta}
              </button>
            </div>
          </div>
        </div>
        {/* แสงฟุ้งตกแต่งพื้นหลัง */}
        <div className="absolute top-0 right-0 h-full w-1/2 translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
      </section>

      {/* 2. Impact Stats: ส่วนโชว์ตัวเลขความสำเร็จ */}
      <section className="border-y border-slate-900 bg-slate-950/50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="group space-y-2 border-l border-slate-800 pl-8 transition-colors hover:border-emerald-500"
              >
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase transition-colors group-hover:text-emerald-500/50">
                  {stat.label}
                </span>
                <p className="font-prompt text-5xl font-black text-white">
                  {stat.value}
                </p>
                <p className="text-xs tracking-wide text-emerald-500/80 uppercase">
                  {stat.subValue}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategy Steps: ส่วนอธิบายขั้นตอนการทำงาน */}
      <section className="bg-slate-950 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <header className="mb-20">
            <h2 className="font-prompt text-3xl font-black tracking-tighter text-white uppercase italic md:text-5xl">
              Our Working Method
            </h2>
          </header>
          <div className="grid gap-8 md:grid-cols-3">
            {strategy.map((item, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-10 transition-all hover:border-emerald-500/50"
              >
                <span className="text-4xl font-black text-slate-800 transition-colors group-hover:text-emerald-500/20">
                  {item.step}
                </span>
                <h3 className="font-prompt mt-6 mb-4 text-xl font-black text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed font-light text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Services: ส่วนรายละเอียดบริการหลัก */}
      <section className="bg-slate-900/30 py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group flex flex-col justify-between rounded-[3rem] border border-slate-800 bg-slate-950 p-12 transition-all hover:border-emerald-500/30 hover:bg-slate-900"
              >
                <div>
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    {i === 0 ? <BarChart3 size={28} /> : <Target size={28} />}
                  </div>
                  <h3 className="font-prompt mb-6 text-3xl font-black text-white">
                    {service.title}
                  </h3>
                  <p className="mb-10 text-lg font-light text-slate-400">
                    {service.description}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-4 text-sm text-slate-500"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-emerald-500"
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-12 flex items-center gap-3 text-[10px] font-black tracking-widest text-emerald-500 uppercase transition-all group-hover:gap-5">
                  Request Detail <ArrowUpRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
