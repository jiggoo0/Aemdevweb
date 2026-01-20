/** @format */

import React from "react"
import type { Metadata } from "next"
import { Scale, FileCode2, Gavel, ShieldAlert, BadgeCheck } from "lucide-react"

// 📂 ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🚀 Metadata — "ข้อตกลงที่โปร่งใส ไม่ซ่อนเงื่อนไข"
 */
export const metadata: Metadata = {
  title: `ข้อตกลงการใช้บริการ | ${siteConfig.shortName}`,
  description:
    "รายละเอียดข้อตกลงและเงื่อนไขการให้บริการทำเว็บไซต์ สำหรับลูกค้าธุรกิจและโรงงานอุตสาหกรรม โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/terms` },
}

/**
 * 🧬 Terms of Service Page
 * ผมออกแบบหน้านี้มาเพื่อให้เราเข้าใจตรงกันถึงขอบเขตงาน
 * เพื่อให้โปรเจกต์ของคุณดำเนินไปได้อย่างราบรื่นที่สุดครับ
 */
export default function TermsPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 บอก Google Search AI ถึงประเภทหน้าเว็บ */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Terms of Service | ${siteConfig.shortName}`,
          description: "Terms and conditions for web development services.",
          publisher: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
          },
        }}
      />

      {/* 🔝 1. ส่วนหัวหน้าเว็บ (Hero Header) */}
      <section className="relative overflow-hidden bg-slate-50/30 pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-emerald-400 shadow-xl">
            <Scale className="h-8 w-8" />
          </div>
          <h1 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
            Terms of <span className="text-emerald-500">Service.</span>
          </h1>
          <p className="font-anuphan mt-6 font-bold text-slate-400">
            อัปเดตล่าสุดเมื่อวันที่: {lastUpdated}
          </p>
        </div>
      </section>

      {/* 🏗️ 2. เนื้อหาข้อตกลง (Terms Content) */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {/* ข้อที่ 1: ขอบเขตงาน */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-14">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-emerald-400">
                <FileCode2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  1. สิ่งที่ผมจะทำให้คุณ
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมให้บริการรับปรึกษา ออกแบบ และพัฒนาเว็บไซต์
                    โดยเน้นที่ความเร็วสูง
                    และการวางโครงสร้างให้ธุรกิจของคุณปิดการขายได้ง่ายขึ้น
                    ซึ่งขอบเขตงานทั้งหมดจะเป็นไปตามรายละเอียดในใบเสนอราคาที่เราตกลงกันไว้ครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 2: ความเป็นเจ้าของ */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-14">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:bg-slate-950 group-hover:text-emerald-400">
                <Gavel className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  2. ใครเป็นเจ้าของเว็บไซต์?
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    เมื่อคุณชำระค่าบริการครบถ้วนตามสัญญาแล้ว
                    สิทธิ์ในโค้ดและเนื้อหาทั้งหมดที่ผมสร้างขึ้นสำหรับธุรกิจของคุณ
                    <b>จะเป็นของคุณโดยสมบูรณ์ 100%</b>
                    ยกเว้นเครื่องมือเสริมที่เป็นลิขสิทธิ์ของบุคคลที่สามตามมาตรฐานสากลครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 3: ขีดจำกัดความรับผิดชอบ */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-14">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:bg-rose-500 group-hover:text-white">
                <ShieldAlert className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  3. เรื่องที่ต้องเข้าใจตรงกัน
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมตั้งใจสร้างระบบที่เสถียรที่สุดให้คุณเสมอ อย่างไรก็ตาม
                    ผมไม่สามารถรับผิดชอบต่อความสูญเสียทางธุรกิจ
                    ที่เกิดจากปัจจัยภายนอกที่ควบคุมไม่ได้ เช่น
                    การล่มของระบบโฮสติ้งที่คุณเลือกใช้เอง หรือการเปลี่ยนกฎของ
                    Google/Facebook ที่ส่งผลต่ออันดับเว็บครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 4: การดูแลหลังส่งมอบ */}
          <div className="group relative rounded-[3rem] border border-emerald-500/10 bg-emerald-50/30 p-10 md:p-14">
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg">
                <BadgeCheck className="h-7 w-7" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-950 uppercase italic">
                  การรับประกันและดูแลหลังการขาย
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมมีการรับประกันแก้ไขจุดบกพร่อง (Bug Fix)
                    ให้ตามระยะเวลาที่กำหนดหลังจากส่งงาน
                    และหากคุณต้องการให้ผมดูแลต่อในระยะยาวเพื่อให้เว็บ "ซ่า"
                    และเปิดไวอยู่เสมอ เราสามารถคุยเรื่องแพ็กเกจ Maintenance
                    เพิ่มเติมได้ครับ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 ส่วนท้ายหน้า (Specialist Footer Hook) */}
      <footer className="mt-20 text-center opacity-40">
        <p className="font-prompt text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase">
          Build & Care by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
