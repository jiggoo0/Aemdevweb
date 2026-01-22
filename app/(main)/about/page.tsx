/** @format */

import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import {
  ShieldCheck,
  Zap,
  Target,
  Users,
  Building2,
  Factory,
  CheckCircle2,
} from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import CTASection from "@/components/landing/CTASection"

/**
 * 🚀 Metadata Strategy: เน้นการแก้ Pain Point ของลูกค้า
 */
export const metadata: Metadata = {
  title: `รู้จัก ${siteConfig.expert} | ที่ปรึกษาเว็บไซต์ Next.js และ Technical SEO`,
  description:
    "ผมชื่อเอ็มครับ ผมทำเว็บไซต์ที่เน้นผลลัพธ์ทางธุรกิจ ไม่ทิ้งงาน 100% ออกแบบโครงสร้างเพื่อ SME และโรงงานอุตสาหกรรมโดยเฉพาะ ด้วยมาตรฐาน Performance 100/100",
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased">
      <JsonLd
        type="AboutPage"
        data={{
          name: `รู้จัก ${siteConfig.expert} - AEMDEVWEB`,
          description: siteConfig.description,
          mainEntity: {
            "@type": "Person",
            name: siteConfig.expert,
            jobTitle: siteConfig.role,
            url: siteConfig.url,
          },
        }}
      />

      {/* 🔝 1. Hero Section: สร้างความน่าเชื่อถือทันทีที่เห็น */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(black,transparent_70%)] bg-center opacity-[0.02]" />

        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-in fade-in slide-in-from-bottom-2 mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-emerald-600 duration-700">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-prompt text-[10px] font-black tracking-[0.3em] uppercase">
                Direct Specialist • Expert Results
              </span>
            </div>
            <h1 className="font-prompt mb-8 text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl lg:text-9xl">
              ผมชื่อ <span className="text-emerald-500">เอ็ม.</span>
            </h1>
            <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              ผมไม่ใช่เอเจนซี่ที่เน้นปริมาณ <br className="hidden md:block" />
              แต่ผมคือ{" "}
              <span className="text-slate-900 underline decoration-emerald-500 underline-offset-8">
                คนทำงาน
              </span>{" "}
              ที่เน้นความสำเร็จของธุรกิจคุณ
            </p>
          </div>
        </div>
      </section>

      {/* 🛡️ 2. Mindset & Reliability Section */}
      <section className="bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="group relative aspect-square overflow-hidden rounded-[3.5rem] bg-slate-200 shadow-2xl">
              <Image
                src="/images/showcase/aemdevweb-hero.webp"
                alt="Working Process by AEMDEVWEB"
                fill
                priority
                className="object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="font-prompt text-4xl font-black tracking-tight text-slate-900 uppercase italic md:text-6xl">
                  เน้นผลลัพธ์ <br />
                  <span className="text-emerald-500">ไม่ใช่แค่ความสวย</span>
                </h2>
                <div className="font-anuphan space-y-6 text-lg leading-relaxed font-medium text-slate-600">
                  <p>
                    ประสบการณ์ที่ผ่านมาทำให้ผมรู้ว่า
                    เจ้าของกิจการไม่ได้ต้องการแค่เว็บที่ "ดูสวย"
                    แต่คุณต้องการเว็บที่{" "}
                    <span className="font-bold text-slate-900">
                      โหลดไว ลูกค้าทัก และติดอันดับ Google
                    </span>
                  </p>
                  <p>
                    ผมดูแลโปรเจกต์ด้วยตัวเองทุกขั้นตอน ตั้งแต่วางโครงสร้าง
                    Technical SEO ไปจนถึงการเขียน Code ที่สะอาดที่สุด
                    เพื่อให้เว็บคุณทำงานได้เสถียร 24 ชม.
                    โดยไม่ต้องกังวลเรื่องระบบล่มหรือคนทำเว็บทิ้งงาน
                  </p>
                </div>
              </div>

              {/* USP Icons */}
              <div className="grid grid-cols-2 gap-8 border-t border-slate-200 pt-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-500 shadow-lg">
                    <Zap size={24} fill="currentColor" />
                  </div>
                  <div>
                    <h4 className="font-prompt text-sm font-black tracking-widest text-slate-900 uppercase">
                      Performance
                    </h4>
                    <p className="text-xs text-slate-500">
                      โหลดไวระดับ 100/100
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-500 shadow-lg">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-prompt text-sm font-black tracking-widest text-slate-900 uppercase">
                      Conversion
                    </h4>
                    <p className="text-xs text-slate-500">
                      ออกแบบเพื่อปิดการขาย
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏭 3. Specialist Focus: SME & Industrial */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-20 space-y-4">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              กลุ่มธุรกิจที่ผม{" "}
              <span className="text-emerald-500">เชี่ยวชาญ</span>
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "SME & Startups",
                desc: "เน้นความไวในการเปิดตัว (Speed Launch) และการทำ Sale Page เพื่อปิดการขายจากโฆษณา",
              },
              {
                icon: Building2,
                title: "Corporate & B2B",
                desc: "เน้นภาพลักษณ์ความน่าเชื่อถือระดับสากล และระบบหลังบ้านที่จัดการข้อมูลได้ง่าย",
              },
              {
                icon: Factory,
                title: "Industrial & Factory",
                desc: "เน้นระบบ E-Catalog สินค้าอุตสาหกรรมที่โหลดหนักแค่ไหนก็ยังทำงานได้ลื่นไหล",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-[3rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl"
              >
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:bg-emerald-500 group-hover:text-white">
                  <item.icon size={32} />
                </div>
                <h3 className="font-prompt mb-4 text-xl font-black text-slate-900 uppercase">
                  {item.title}
                </h3>
                <p className="font-anuphan leading-relaxed font-medium text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏁 4. Final Hook & Guarantee */}
      <section className="px-6 pb-32">
        <div className="shadow-3xl relative mx-auto max-w-5xl overflow-hidden rounded-[3.5rem] bg-slate-950 p-12 text-center md:p-24">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <ShieldCheck size={200} className="text-emerald-500" />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-prompt text-3xl leading-tight font-black tracking-tighter text-emerald-400 uppercase italic md:text-5xl">
              จ้างผม... <br className="md:hidden" /> สบายใจกว่าจ้างบริษัท
            </h2>
            <div className="font-anuphan mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              ผมคุยตรง งานจบไว ไม่ผ่านเซลล์ ไม่ต้องรอคิวพนักงาน
              คุณจะได้ความเนี๊ยบระดับ Specialist ในราคาที่คุ้มค่า
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {["ไม่ทิ้งงาน 100%", "คุยภาษาธุรกิจ", "ดูแลหลังการขาย"].map(
                (text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm font-bold text-white/80"
                  >
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    {text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <footer className="py-12 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Build with Integrity by {siteConfig.expert} v2026
        </p>
      </footer>
    </main>
  )
}
