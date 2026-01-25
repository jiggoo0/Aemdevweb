/** @format */

import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import {
  ShieldCheck,
  Zap,
  Target,
  Users,
  Globe,
  Factory,
  CheckCircle2,
} from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import CTASection from "@/components/landing/CTASection"

/**
 * กลยุทธ์ข้อมูลส่วนหัว: เน้นการส่งมอบงานที่มีประสิทธิภาพสูงและครอบคลุมกลุ่มธุรกิจสากล
 */
export const metadata: Metadata = {
  title: `รู้จัก ${siteConfig.expert} | ผู้เชี่ยวชาญระบบ Next.js และงานเทคนิคด้านการค้นหา`,
  description:
    "ผมชื่อเอ็มครับ ผมพัฒนาเว็บไซต์ที่เน้นผลลัพธ์ทางธุรกิจและความรับผิดชอบสูงสุด ออกแบบโครงสร้างระบบเพื่อ SME และกลุ่มธุรกิจบริการ ธุรกิจท่องเที่ยว ส่งออก จนถึงกลุ่มบริษัทและโรงงานอุตสาหกรรมโดยเฉพาะ ด้วยมาตรฐานความเร็วของเว็บไซต์ระดับสากลนิยมปัจจุบัน",
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
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

      {/* 1. ส่วนหัวเว็บไซต์: การสร้างตัวตนและความน่าเชื่อถือในระดับ Specialist */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
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
              ผมคือ{" "}
              <span className="text-slate-900 underline decoration-emerald-500 underline-offset-8">
                คนทำงาน
              </span>{" "}
              ที่มุ่งเน้นการส่งมอบระบบงานที่ใช้งานได้จริงและยั่งยืน
            </p>
          </div>
        </div>
      </section>

      {/* 2. ส่วนแนวคิดและการบริหารจัดการโครงการเพื่อผลลัพธ์ทางธุรกิจ */}
      <section className="bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            <div className="group relative aspect-square overflow-hidden rounded-[3.5rem] bg-slate-200 shadow-2xl">
              <Image
                src="/images/showcase/aemdevweb-hero.webp"
                alt="ระบบการทำงานโดย AEMDEVWEB"
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
                  <span className="text-emerald-500">มาตรฐานสากล</span>
                </h2>
                <div className="font-anuphan space-y-6 text-lg leading-relaxed font-medium text-slate-600">
                  <p>
                    เป้าหมายหลักของผมคือการทำให้เจ้าของกิจการได้รับระบบที่มีประสิทธิภาพสูง
                    ไม่ใช่เพียงแค่หน้าเว็บที่ดูสวยงาม แต่ต้องเป็นระบบที่
                    <span className="font-bold text-slate-900">
                      {" "}
                      โหลดไว ตอบโจทย์ผู้ใช้งานสากล
                      และรองรับมาตรฐานการค้นหาล่าสุด
                    </span>
                  </p>
                  <p>
                    ผมควบคุมการพัฒนาด้วยตัวเองทุกขั้นตอน
                    ตั้งแต่การจัดวางโครงสร้างระบบ
                    ไปจนถึงการเขียนชุดคำสั่งที่สะอาดและจัดการได้ง่าย
                    เพื่อให้ธุรกิจของคุณดำเนินไปได้อย่างต่อเนื่องและมีความน่าเชื่อถือในระดับสูง
                  </p>
                </div>
              </div>

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
                      ความเร็วระดับสูงสุด
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
                      มุ่งเน้นเป้าหมายทางธุรกิจ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ความเชี่ยวชาญเฉพาะทางในกลุ่มธุรกิจบริการ ท่องเที่ยว และส่งออก */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-20 space-y-4">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              กลุ่มธุรกิจที่ผม{" "}
              <span className="text-emerald-500">พร้อมดูแล</span>
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "SME & Service",
                desc: "เน้นความรวดเร็วในการเปิดตัวและการทำระบบจองหรือแสดงข้อมูลที่ปิดการขายได้ทันที",
              },
              {
                icon: Globe,
                title: "Tourism & Export",
                desc: "เน้นภาพลักษณ์ความน่าเชื่อถือระดับสากล รองรับหลายภาษา และระบบที่เสถียรทั่วโลก",
              },
              {
                icon: Factory,
                title: "Industrial & Factory",
                desc: "เน้นระบบรายการสินค้าเชิงอุตสาหกรรมที่รองรับข้อมูลจำนวนมากและมีความมั่นคงสูง",
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

      {/* 4. ส่วนสรุปและการรับประกันงานเทคนิคโดย Specialist */}
      <section className="px-6 pb-32">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[3.5rem] bg-slate-950 p-12 text-center shadow-2xl md:p-24">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <ShieldCheck size={200} className="text-emerald-500" />
          </div>
          <div className="relative z-10 space-y-8">
            <h2 className="font-prompt text-3xl leading-tight font-black tracking-tighter text-emerald-400 uppercase italic md:text-5xl">
              ทำงานร่วมกับผม <br className="md:hidden" /> มั่นใจในคุณภาพสูงสุด
            </h2>
            <div className="font-anuphan mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
              ผมสื่อสารข้อมูลทางเทคนิคให้เข้าใจง่าย ดำเนินงานตรงตามกำหนดการ
              คุณจะได้รับการดูแลจากผู้เชี่ยวชาญโดยตรงเพื่อความคุ้มค่าสูงสุดของโครงการ
            </div>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              {[
                "รับผิดชอบงานเต็มร้อย",
                "เข้าใจบริบทธุรกิจ",
                "ดูแลหลังการส่งมอบ",
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm font-bold text-white/80"
                >
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  {text}
                </div>
              ))}
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
