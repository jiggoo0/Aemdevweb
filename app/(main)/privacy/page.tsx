/** @format */

import React from "react"
import type { Metadata } from "next"
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Zap } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🚀 Metadata — เน้นความโปร่งใสและจรรยาบรรณวิชาชีพ
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.shortName}`,
  description:
    "มาตรฐานการรักษาความลับทางการค้าและการจัดการข้อมูลลูกค้า เพื่อความโปร่งใสและปลอดภัยสูงสุด โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.url}/privacy` },
}

export default function PrivacyPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.shortName}`,
          description:
            "Professional data protection and privacy standards for SME and Industrial clients.",
          publisher: {
            "@type": "Person",
            name: siteConfig.expert,
          },
        }}
      />

      {/* 🌌 Background Decoration */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" aria-hidden="true" />

      {/* 🔝 1. Hero Header Section */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-slate-950 text-emerald-500 shadow-2xl shadow-emerald-500/10 transition-transform hover:scale-105 duration-500">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
            Privacy <br />
            <span className="text-emerald-500">Policy.</span>
          </h1>
          <div className="mt-8 inline-block rounded-full border border-slate-100 bg-white px-6 py-2">
            <p className="font-anuphan text-xs font-black tracking-widest text-slate-400 uppercase">
              Last Updated:{" "}
              <span className="text-slate-900">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. Policy Sections Grid */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <PolicyCard
            icon={<FileText />}
            title="1. การดูแลข้อมูลของคุณ"
            content="ผมให้ความสำคัญกับความเป็นส่วนตัวของคุณมาก ข้อมูลที่คุณกรอกผ่านแบบฟอร์ม เช่น ชื่อ, อีเมล หรือรายละเอียดโปรเจกต์ จะถูกใช้เพื่อ 'วัตถุประสงค์ในการสื่อสารและวางแผนงานร่วมกับผมเท่านั้น' เพื่อให้งานออกมาตรงใจคุณที่สุดครับ"
          />

          <PolicyCard
            icon={<Lock />}
            title="2. ระบบความปลอดภัยระดับ Specialist"
            content="ผมใช้เทคโนโลยีเว็บไซต์ที่ทันสมัยและปลอดภัยสูงสุด (Next.js 16 + Encrypted Communication) เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต คุณจึงมั่นใจได้ว่าความลับทางธุรกิจของคุณจะถูกเก็บรักษาไว้อย่างดีเยี่ยม"
          />

          <PolicyCard
            icon={<Eye />}
            title="3. จรรยาบรรณการรักษาความลับ"
            content="ผมไม่มีนโยบายขายหรือส่งต่อข้อมูลลูกค้าให้กับบุคคลที่สาม ข้อมูลของคุณคือ 'ความลับทางการค้า' และผมจะรักษาไว้อย่างเข้มงวดเสมือนเป็นข้อมูลของผมเอง เพื่อสร้างความเชื่อใจในการร่วมงานกันระยะยาว"
          />

          {/* Special Action Card */}
          <div className="group relative overflow-hidden rounded-[3.5rem] border-2 border-emerald-500/10 bg-emerald-50/30 p-10 transition-all duration-500 hover:border-emerald-500/30 md:p-20">
            <div className="absolute -top-10 -right-10 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <Zap size={240} className="text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-emerald-500 text-white shadow-xl shadow-emerald-500/20">
                <UserCheck className="h-8 w-8" />
              </div>
              <div className="space-y-4">
                <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-slate-900 uppercase italic">
                  สิทธิในการจัดการข้อมูล
                </h2>
                <p className="font-anuphan text-xl leading-relaxed font-bold text-slate-500">
                  หากคุณต้องการตรวจสอบ แก้ไข หรือขอลบข้อมูลส่วนตัวออกจากระบบของผม ทักมาบอกผมได้ทุกเมื่อทาง LINE ID:{" "}
                  <span className="text-emerald-600 underline underline-offset-8">
                    {siteConfig.links?.lineId || "N/A"}
                  </span>{" "}
                  ผมพร้อมจัดการให้คุณทันทีภายใน 24 ชม.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 Footer Hook */}
      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        <p className="font-prompt text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
          High-Security Standards by {siteConfig.expert} v2026
        </p>
      </footer>
    </main>
  )
}

/**
 * 🧱 Internal Component: PolicyCard
 * [FIXED]: จัดการ Type Casting สำหรับ cloneElement เพื่อแก้ปัญหา TS2769 ใน React 19
 */
function PolicyCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactElement
  title: string
  content: string
}) {
  return (
    <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 md:p-16">
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-slate-950 group-hover:text-emerald-500">
          {/* ✅ Type Casting เป็น ReactElement<any> เพื่อให้ยอมรับ className prop */}
          {React.cloneElement(icon as React.ReactElement<any>, {
            className: "h-7 w-7",
          })}
        </div>
        <div className="space-y-6">
          <h2 className="font-prompt text-2xl leading-none font-black tracking-tighter text-slate-900 uppercase italic">
            {title}
          </h2>
          <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-600">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
