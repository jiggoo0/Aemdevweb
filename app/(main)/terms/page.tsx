/** @format */

import React from "react"
import type { Metadata } from "next"
import {
  Scale,
  FileCode2,
  Gavel,
  ShieldAlert,
  BadgeCheck,
  Zap,
} from "lucide-react"

// ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ข้อมูลส่วนหัว: ปรับพิกัดไปที่ siteConfig.project.shortName และ project.url
 */
export const metadata: Metadata = {
  title: `ข้อตกลงการใช้บริการ | ${siteConfig.project.shortName}`,
  description:
    "รายละเอียดข้อตกลงและเงื่อนไขการให้บริการพัฒนาระบบเว็บไซต์ Next.js สำหรับธุรกิจ SME และโรงงานอุตสาหกรรม โดย นายเอ็มซ่ามากส์",
  alternates: { canonical: `${siteConfig.project.url}/terms` },
}

/**
 * หน้าข้อตกลงการใช้บริการ: โปร่งใส ชัดเจน เน้นผลลัพธ์
 */
export default function TermsPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* แก้ไขจุดที่ 1: ปรับพิกัดข้อมูลใน JsonLd ให้ตรงกับ Interface ใหม่ */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Terms of Service | ${siteConfig.project.shortName}`,
          description: "Professional web development terms and conditions.",
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.name,
          },
          url: `${siteConfig.project.url}/terms`,
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 1. ส่วนหัวของหน้า (Hero Header) */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mb-10 inline-flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-slate-950 text-emerald-500 shadow-2xl shadow-emerald-500/10 transition-transform duration-500 hover:rotate-6">
            <Scale className="h-10 w-10" />
          </div>
          <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
            Terms of <br />
            <span className="text-emerald-500">Service.</span>
          </h1>
          <div className="mt-10 inline-block rounded-full border border-slate-100 bg-white px-6 py-2 shadow-sm">
            <p className="font-anuphan text-xs font-black tracking-widest text-slate-400 uppercase italic">
              Last Updated:{" "}
              <span className="text-slate-900">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. รายละเอียดข้อตกลงแบบตารางข้อมูล */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <TermCard
            icon={<FileCode2 />}
            title="1. ขอบเขตการให้บริการ"
            content="ผมให้บริการรับปรึกษาและพัฒนาระบบเว็บไซต์ประสิทธิภาพสูง โดยเน้นความเร็วและการวางโครงสร้างระบบตามมาตรฐานสากล ขอบเขตงานทั้งหมดจะเป็นไปตามที่ระบุในใบเสนอราคาที่ตกลงกันไว้"
          />

          <TermCard
            icon={<Gavel />}
            title="2. กรรมสิทธิ์และความเป็นเจ้าของ"
            content="เมื่อกระบวนการพัฒนาเสร็จสมบูรณ์และมีการชำระค่าบริการครบถ้วน สิทธิ์ในชุดคำสั่งและเนื้อหาที่สร้างขึ้นใหม่สำหรับโครงการของคุณจะเป็นของคุณโดยสมบูรณ์ เพื่อให้คุณสามารถนำไปต่อยอดธุรกิจได้อย่างอิสระ"
          />

          <TermCard
            icon={<ShieldAlert />}
            title="3. การจำกัดความรับผิดชอบ"
            content="ผมมุ่งมั่นสร้างระบบที่เสถียรที่สุด อย่างไรก็ตาม ผมไม่สามารถรับผิดชอบต่อความสูญเสียที่เกิดจากปัจจัยภายนอก อาทิ การล่มของระบบพื้นที่จัดเก็บข้อมูลที่ลูกค้าจัดหาเอง หรือการเปลี่ยนแปลงกลไกของแพลตฟอร์มภายนอก"
            isWarning
          />

          {/* การรับประกันและสิทธิพิเศษ */}
          <div className="group relative overflow-hidden rounded-[3.5rem] border-2 border-emerald-500/10 bg-emerald-50/30 p-10 transition-all duration-500 hover:border-emerald-500/30 md:p-20">
            <div className="absolute -top-12 -right-12 opacity-5 transition-opacity group-hover:opacity-10">
              <Zap size={280} className="text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-emerald-500 text-white shadow-xl shadow-emerald-500/20">
                <BadgeCheck className="h-8 w-8" />
              </div>
              <div className="space-y-6">
                <h2 className="font-prompt text-3xl leading-none font-black tracking-tighter text-slate-900 uppercase italic md:text-4xl">
                  การรับประกันและการดูแล
                </h2>
                <p className="font-anuphan text-xl leading-relaxed font-bold text-slate-600">
                  ผมรับประกันการแก้ไขจุดบกพร่องทางเทคนิคให้ฟรีตามระยะเวลาที่ระบุในสัญญาหลังส่งมอบงาน
                  และพร้อมให้คำปรึกษาต่อเนื่องเพื่อให้ระบบยังคงความเร็วและพร้อมสร้างผลกำไรให้ธุรกิจตลอดไป
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 แก้ไขจุดที่ 2: เปลี่ยนจาก siteConfig.expert เป็น siteConfig.expert.name */}
      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        <p className="font-prompt text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
          Professional Integrity by {siteConfig.expert.name} v2026
        </p>
      </footer>
    </main>
  )
}

/**
 * ส่วนประกอบย่อย: บัตรข้อมูลข้อตกลง
 */
function TermCard({
  icon,
  title,
  content,
  isWarning = false,
}: {
  icon: React.ReactElement
  title: string
  content: string
  isWarning?: boolean
}) {
  return (
    <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 md:p-16">
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${
            isWarning
              ? "bg-slate-50 text-slate-400 group-hover:bg-rose-500 group-hover:text-white"
              : "bg-slate-50 text-slate-400 group-hover:bg-slate-950 group-hover:text-emerald-500"
          }`}
        >
          {React.cloneElement(icon, {
            className: "h-7 w-7",
          } as any)}
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
