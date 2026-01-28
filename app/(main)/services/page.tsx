/** @format */

import React from "react"
import { Metadata } from "next"
import { Layout, Search, Clock, Zap, Target, Star } from "lucide-react"

// ข้อมูลการตั้งค่าและส่วนประกอบหลัก
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * Metadata Engine: ปรับจูน SEO ให้หน้าบริการถูกค้นพบได้ง่าย
 */
export const metadata: Metadata = {
  title: `บริการรับทำเว็บไซต์และ SEO ครบวงจร | นายเอ็มซ่ามากส์ ${siteConfig.project.shortName}`,
  description:
    "รวมบริการสร้างตัวตนบนโลกออนไลน์ที่ได้ผลจริง ตั้งแต่เว็บไซต์เช่ารายเดือน เว็บสำเร็จรูป ไปจนถึง Landing Page สำหรับ SME ที่เน้นความเร็วระดับปีศาจและติดหน้าแรก Google",
  alternates: { canonical: `${siteConfig.project.url}/services` },
}

/**
 * ServicesPage - หน้ารวมบริการของนายเอ็มซ่ามากส์
 * แนวทาง: เน้นความชัดเจน เข้าใจง่าย และแสดงผลลัพธ์ที่จับต้องได้
 * ดูแลโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. ข้อมูลโครงสร้าง: บอก AI ให้เข้าใจบริบทบริการของเรา */}
      <JsonLd
        type="Service"
        data={{
          serviceType: "Web Development and SEO",
          provider: {
            "@type": "Person",
            name: "Alongkorl Yomkerd",
            url: siteConfig.project.url,
          },
          areaServed: "Thailand",
          description: metadata.description as string,
        }}
      />

      {/* Hero Section: ส่วนพาดหัวที่เน้นตัวตนและความเป็นมืออาชีพ */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 flex items-center gap-3">
              <Target size={18} className="text-emerald-600" />
              <span className="font-heading text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                Business Growth Infrastructure
              </span>
            </div>

            <h1 className="font-heading text-5xl leading-[1] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Za-Maks <br />
              <span className="text-emerald-500">Services.</span>
            </h1>

            <p className="font-body mt-10 max-w-2xl text-xl leading-relaxed font-bold text-slate-600 md:text-2xl">
              เราเตรียมระบบเว็บไซต์ที่สมบูรณ์แบบสำหรับธุรกิจคุณ
              เน้นความเร็วที่หยุดลูกค้าได้จริง โครงสร้างที่แม่นยำ
              และการหาลูกค้าให้คุณอย่างเป็นธรรมชาติ
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Section: รายการบริการหลัก */}
      <section className="relative z-10 -mt-12 py-12 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-100" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
              Our Core Packages
            </span>
            <div className="h-px flex-1 bg-slate-100" />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* แสดงรายการบริการจากฐานข้อมูล */}
            {servicesData.map((service, index) => (
              <ServiceCard
                key={`service-item-${index}`}
                data={service}
                className="transition-all duration-500 hover:-translate-y-2"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section: ตอกย้ำมาตรฐานความเนี้ยบของ AEMDEVWEB */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="space-y-12">
              <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl">
                ทำไมต้องใช้ <br />
                <span className="text-emerald-500">ระบบงานของเรา?</span>
              </h2>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {[
                  {
                    icon: <Zap />,
                    title: "ความเร็วระดับปีศาจ",
                    desc: "หน้าเว็บโหลดไว ไม่เสียโอกาสการขายแม้แต่วินาทีเดียว",
                  },
                  {
                    icon: <Search />,
                    title: "โครงสร้าง SEO แม่นยำ",
                    desc: "วางระบบข้อมูลให้ Google รักและจัดอันดับได้ง่าย",
                  },
                  {
                    icon: <Layout />,
                    title: "ดีไซน์ปิดการขาย",
                    desc: "ออกแบบมาเพื่อ SME โดยเฉพาะ เน้นปุ่มกดง่ายและดูน่าเชื่อถือ",
                  },
                  {
                    icon: <Clock />,
                    title: "ดูแลจริงใจไม่ทิ้งงาน",
                    desc: "พร้อมช่วยเหลือและปรับจูนระบบให้ซิ่งตลอดอายุการใช้งาน",
                  },
                ].map((item, i) => (
                  <div key={`feature-${i}`} className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-emerald-600 shadow-sm ring-1 ring-slate-100">
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-lg font-black text-slate-950 uppercase italic">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ส่วนความเชื่อมั่น (Testimonial/Philosophy) */}
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-slate-50 p-12 lg:p-20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent" />
              <div className="relative space-y-8">
                <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/5 md:p-12">
                  <div className="mb-6 flex gap-1 text-emerald-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-heading mb-4 text-[10px] font-black tracking-[0.3em] text-emerald-500 uppercase italic">
                    Core Philosophy
                  </p>
                  <blockquote className="font-body text-2xl leading-tight font-black text-slate-950 italic">
                    &quot;เราไม่ได้แค่ทำเว็บไซต์
                    แต่เราสร้างเครื่องจักรหาลูกค้าที่ทำงานแทนคุณบนโลกออนไลน์ตลอด
                    24 ชั่วโมง&quot;
                  </blockquote>
                  <div className="mt-8 flex items-center gap-4 border-t border-slate-50 pt-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-[10px] font-black text-white italic shadow-sm ring-4 ring-white">
                      AEM
                    </div>
                    <div>
                      <p className="font-body text-sm font-black text-slate-950">
                        นายเอ็มซ่ามากส์
                      </p>
                      <p className="font-body text-[10px] font-bold tracking-widest text-slate-400 uppercase">
                        Technical Web Architect
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ข้อความปิดท้ายระบบ */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase italic">
          High-Performance Solution • AEMDEVWEB 2026
        </p>
      </footer>
    </main>
  )
}
