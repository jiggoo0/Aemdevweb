/** @format */

import React from "react"
import type { Metadata } from "next"
import { ShieldCheck, Lock, Eye, FileText, UserCheck } from "lucide-react"

// 📂 ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🚀 Metadata — "ชัดเจน โปร่งใส ปลอดภัย 100%"
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.shortName}`,
  description:
    "นโยบายความเป็นส่วนตัวและการจัดการข้อมูลสำหรับลูกค้า SME และโรงงาน เพื่อความโปร่งใสและปลอดภัยสูงสุด โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/privacy` },
}

/**
 * 🧬 Privacy Policy Page
 * ผมออกแบบหน้านี้มาเพื่อให้คุณอุ่นใจว่า ข้อมูลธุรกิจของคุณ
 * จะถูกเก็บรักษาไว้อย่างดีที่สุดตามมาตรฐาน Specialist ครับ
 */
export default function PrivacyPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 บอก Google Search AI ถึงมาตรฐานการจัดการข้อมูลของผม */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.shortName}`,
          description: "Data protection and privacy standards for our clients.",
          publisher: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
          },
        }}
      />

      {/* 🔝 1. ส่วนหัวหน้าเว็บ (Hero Header) */}
      <section className="relative overflow-hidden bg-slate-50/30 pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-600 shadow-sm">
            <ShieldCheck className="h-8 w-8" />
          </div>
          <h1 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
            Privacy <span className="text-emerald-500">Policy.</span>
          </h1>
          <p className="font-anuphan mt-6 font-bold text-slate-400">
            อัปเดตล่าสุดเมื่อวันที่: {lastUpdated}
          </p>
        </div>
      </section>

      {/* 🏗️ 2. เนื้อหานโยบาย (Policy Content) */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl space-y-16">
          {/* ข้อที่ 1: การจัดเก็บข้อมูล */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-16">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-950 group-hover:text-emerald-400">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  1. การดูแลข้อมูลของคุณ
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมให้ความสำคัญกับความเป็นส่วนตัวของคุณมาก
                    ข้อมูลที่คุณกรอกผ่านแบบฟอร์ม เช่น ชื่อ, อีเมล
                    หรือรายละเอียดโปรเจกต์ จะถูกใช้เพื่อ{" "}
                    <b>
                      {" "}
                      "วัตถุประสงค์ในการสื่อสารและวางแผนงานร่วมกับผมเท่านั้น"{" "}
                    </b>
                    เพื่อให้งานออกมาตรงใจคุณที่สุดครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 2: มาตรฐานความปลอดภัย */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-16">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-950 group-hover:text-emerald-400">
                <Lock className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  2. ระบบความปลอดภัยระดับ Specialist
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมใช้เทคโนโลยีเว็บไซต์ที่ทันสมัยและปลอดภัยสูง
                    เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
                    คุณจึงมั่นใจได้ว่าข้อมูลทางธุรกิจของโรงงาน หรือ SME
                    ที่คุณเล่าให้ผมฟัง
                    จะถูกเก็บรักษาไว้อย่างปลอดภัยตามมาตรฐานวิชาชีพครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 3: จรรยาบรรณการรักษาความลับ */}
          <div className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/20 md:p-16">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-950 group-hover:text-emerald-400">
                <Eye className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  3. ไม่มีการส่งต่อข้อมูล
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    ผมไม่มีนโยบายขายหรือส่งต่อข้อมูลลูกค้าให้กับใครทั้งนั้น
                    ข้อมูลของคุณคือ "ความลับทางการค้า"
                    และผมจะรักษาไว้อย่างเข้มงวด
                    เพื่อสร้างความเชื่อใจในการร่วมงานกันในระยะยาวครับ
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ข้อที่ 4: สิทธิของลูกค้า */}
          <div className="group relative rounded-[2.5rem] border border-emerald-500/10 bg-emerald-50/30 p-10 md:p-16">
            <div className="flex items-start gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-sm">
                <UserCheck className="h-6 w-6" />
              </div>
              <div>
                <h2 className="font-prompt text-2xl font-black tracking-tight text-slate-900 uppercase italic">
                  สิทธิในการจัดการข้อมูล
                </h2>
                <div className="font-anuphan mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
                  <p>
                    หากคุณต้องการตรวจสอบ แก้ไข
                    หรือขอลบข้อมูลส่วนตัวออกจากระบบของผม
                    ทักมาบอกผมได้ทุกเมื่อทาง LINE:{" "}
                    <b>{siteConfig.links.lineId}</b>
                    ผมพร้อมจัดการให้ทันทีครับ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 ส่วนท้ายหน้า (Specialist Footer Hook) */}
      <footer className="mt-20 text-center opacity-40 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Build & Private Secure by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
