/** @format */

import React from "react"
import type { Metadata } from "next"
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Zap } from "lucide-react"

// ข้อมูลตัวตนและรากฐานระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ข้อมูลส่วนหัว: ปรับพิกัดจาก siteConfig.shortName เป็น siteConfig.project.shortName
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | ${siteConfig.project.shortName}`,
  description:
    "มาตรฐานการรักษาความลับและการจัดการข้อมูลลูกค้า เพื่อความโปร่งใสและปลอดภัยสูงสุด",
  alternates: { canonical: `${siteConfig.project.url}/privacy` },
}

export default function PrivacyPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* ปรับพิกัดข้อมูลใน JsonLd ให้สอดคล้องกับพิกัด Expert */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.project.shortName}`,
          description:
            "Professional data protection and privacy standards for SME and Industrial clients.",
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.name,
          },
          url: `${siteConfig.project.url}/privacy`,
        }}
      />

      {/* กราฟิกตารางพิกัดพื้นหลัง (Structure Grid) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 1. ส่วนหัวของหน้า (Hero Header) */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-6 text-center text-left">
          <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-slate-950 text-emerald-500 shadow-2xl shadow-emerald-500/10 transition-transform duration-500 hover:scale-105">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <h1 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
            Privacy <br />
            <span className="text-emerald-500">Policy.</span>
          </h1>
          <div className="mt-8 inline-block rounded-full border border-slate-100 bg-white px-6 py-2 shadow-sm">
            <p className="font-body text-xs font-black tracking-widest text-slate-400 uppercase">
              Last Updated:{" "}
              <span className="text-slate-900">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. รายละเอียดนโยบายแบบตารางข้อมูล */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <PolicyCard
            icon={<FileText />}
            title="1. การดูแลข้อมูลของคุณ"
            content="ผมให้ความสำคัญกับความเป็นส่วนตัวของคุณมาก ข้อมูลที่กรอกผ่านแบบฟอร์ม เช่น ชื่อ, อีเมล หรือรายละเอียดโปรเจกต์ จะถูกใช้เพื่อวัตถุประสงค์ในการสื่อสารและวางแผนงานร่วมกันเท่านั้น เพื่อให้ระบบงานออกมาตรงใจที่สุดครับ"
          />

          <PolicyCard
            icon={<Lock />}
            title="2. ระบบความปลอดภัยระดับผู้เชี่ยวชาญ"
            content="ผมใช้เทคนิคการพัฒนาที่ทันสมัยและปลอดภัยสูงสุด (Next.js 16) เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต มั่นใจได้ว่าความลับทางธุรกิจจะถูกเก็บรักษาไว้อย่างดีเยี่ยมในโครงสร้างระบบงานครับ"
          />

          <PolicyCard
            icon={<Eye />}
            title="3. จรรยาบรรณการรักษาความลับ"
            content="ผมไม่มีนโยบายส่งต่อข้อมูลลูกค้าให้กับบุคคลอื่น ข้อมูลของคุณคือความลับทางการค้า และผมจะรักษาไว้อย่างเข้มงวดเสมือนเป็นข้อมูลของผมเอง เพื่อสร้างความเชื่อใจในการร่วมงานกันระยะยาวครับ"
          />

          {/* ส่วนการจัดการสิทธิ์ข้อมูล (Action Card) */}
          <div className="group relative overflow-hidden rounded-[3.5rem] border-2 border-emerald-500/10 bg-emerald-50/30 p-10 transition-all duration-500 hover:border-emerald-500/30 md:p-20">
            <div className="absolute -top-10 -right-10 opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <Zap size={240} className="text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-emerald-500 text-white shadow-xl shadow-emerald-500/20">
                <UserCheck className="h-8 w-8" />
              </div>
              <div className="space-y-4 text-left">
                <h2 className="font-heading text-3xl leading-none font-black tracking-tighter text-slate-900 uppercase italic">
                  สิทธิในการจัดการข้อมูล
                </h2>
                <p className="font-body text-xl leading-relaxed font-bold text-slate-500">
                  หากคุณต้องการตรวจสอบ แก้ไข หรือขอลบข้อมูลส่วนตัวออกจากระบบ
                  สามารถติดต่อได้ทุกเมื่อทาง LINE ID:{" "}
                  <span className="text-emerald-600 underline underline-offset-8">
                    {siteConfig.contact?.lineId || "N/A"}
                  </span>{" "}
                  ผมพร้อมจัดการให้ทันทีภายใน 24 ชั่วโมงครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
          High-Security Standards by {siteConfig.expert.name} v2026
        </p>
      </footer>
    </main>
  )
}

/**
 * ส่วนประกอบย่อย: บัตรข้อมูลนโยบาย (ล้าง Warning 'any' เรียบร้อย)
 */
function PolicyCard({
  icon,
  title,
  content,
}: {
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>
  title: string
  content: string
}) {
  return (
    <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 md:p-16">
      <div className="flex flex-col items-start gap-8 text-left md:flex-row">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-slate-950 group-hover:text-emerald-500">
          {React.cloneElement(icon, {
            className: "h-7 w-7",
          })}
        </div>
        <div className="space-y-6">
          <h2 className="font-heading text-2xl leading-none font-black tracking-tighter text-slate-900 uppercase italic">
            {title}
          </h2>
          <p className="font-body text-lg leading-relaxed font-medium text-slate-600">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
