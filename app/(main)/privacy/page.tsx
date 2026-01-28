/** @format */

import React from "react"
import type { Metadata } from "next"
import { ShieldCheck, Lock, Eye, FileText, UserCheck, Zap } from "lucide-react"

// ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * Metadata: ระบุความโปร่งใสของระบบงาน
 * เน้นการสร้างความเชื่อมั่นผ่านนโยบายการจัดการข้อมูลที่ชัดเจนและเป็นกันเอง
 */
export const metadata: Metadata = {
  title: `นโยบายความเป็นส่วนตัว | นายเอ็มซ่ามากส์ ${siteConfig.project.shortName}`,
  description:
    "มาตรฐานการคุ้มครองข้อมูลและแนวทางการจัดการความเป็นส่วนตัว เพื่อความโปร่งใสในการทำงานร่วมกัน",
  alternates: { canonical: `${siteConfig.project.url}/privacy` },
}

export default function PrivacyPage() {
  const lastUpdated = "20 มกราคม 2026"

  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/10">
      {/* 1. ข้อมูลโครงสร้างเพื่อแจ้ง Google ให้เข้าใจถึงเนื้อหานโยบายนี้ */}
      <JsonLd
        type="WebPage"
        data={{
          name: `Privacy Policy | ${siteConfig.project.shortName}`,
          description:
            "Professional data protection and privacy standards for our clients.",
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.name,
          },
          url: `${siteConfig.project.url}/privacy`,
        }}
      />

      {/* ลายตารางพื้นหลังแบบจางๆ เพิ่มความเนี้ยบในแบบ Minimal */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />

      {/* 2. ส่วนหัวของหน้า (Hero Header): เน้นความชัดเจนและดูน่าเชื่อถือ */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="mx-auto mb-10 flex h-20 w-20 items-center justify-center rounded-[2.5rem] bg-slate-950 text-emerald-500 shadow-2xl shadow-emerald-500/10 transition-transform duration-500 hover:scale-105">
            <ShieldCheck size={40} />
          </div>
          <h1 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
            Privacy <br />
            <span className="text-emerald-500">Policy.</span>
          </h1>
          <div className="mt-8 inline-block rounded-full border border-slate-100 bg-white px-6 py-2 shadow-sm">
            <p className="font-body text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">
              อัปเดตล่าสุดเมื่อ:{" "}
              <span className="text-slate-950">{lastUpdated}</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. รายละเอียดนโยบาย: จัดลำดับข้อมูลให้อ่านง่ายและตรงไปตรงมา */}
      <section className="container mx-auto px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-8">
          <PolicyCard
            icon={FileText}
            title="1. การดูแลข้อมูลของคุณ"
            content="ผมให้ความสำคัญกับความเป็นส่วนตัวของคุณเป็นอันดับแรก ข้อมูลที่ได้รับผ่านการติดต่อ เช่น ชื่อ เบอร์โทร หรือรายละเอียดโปรเจกต์ จะถูกใช้เพื่อการสื่อสารและออกแบบเว็บไซต์ร่วมกันเท่านั้น เพื่อให้ผลลัพธ์ออกมาตรงใจและช่วยให้ธุรกิจของคุณเติบโตได้จริงครับ"
          />

          <PolicyCard
            icon={Lock}
            title="2. มาตรฐานความปลอดภัย"
            content="ผมเลือกใช้เทคโนโลยีที่ทันสมัยและผ่านการตรวจสอบความปลอดภัยระดับสากล (Next.js 16) เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต มั่นใจได้ว่าข้อมูลความลับทางธุรกิจของคุณจะถูกเก็บรักษาไว้อย่างดีที่สุดในระบบที่ผมดูแลครับ"
          />

          <PolicyCard
            icon={Eye}
            title="3. การรักษาความลับ"
            content="ผมไม่มีนโยบายการขายหรือส่งต่อข้อมูลลูกค้าให้กับบุคคลอื่น ข้อมูลของคุณคือทรัพย์สินทางธุรกิจที่สำคัญ และผมจะรักษาไว้อย่างเข้มงวด เพื่อสร้างความเชื่อใจในการทำงานร่วมกันในระยะยาวครับ"
          />

          {/* ส่วนการจัดการสิทธิ์ข้อมูล (Action Card) */}
          <div className="group relative overflow-hidden rounded-[3.5rem] border-2 border-emerald-500/10 bg-emerald-50/30 p-10 transition-all duration-500 hover:border-emerald-500/30 md:p-20">
            <div className="absolute -top-10 -right-10 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12">
              <Zap size={240} className="text-emerald-500" />
            </div>
            <div className="relative z-10 flex flex-col items-start gap-10 md:flex-row">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-emerald-600 text-white shadow-xl shadow-emerald-600/20">
                <UserCheck size={32} />
              </div>
              <div className="space-y-4">
                <h2 className="font-heading text-3xl leading-none font-black tracking-tighter text-slate-950 uppercase italic">
                  สิทธิ์ในการจัดการข้อมูล
                </h2>
                <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:max-w-2xl">
                  หากคุณต้องการตรวจสอบ แก้ไข หรือขอลบข้อมูลส่วนตัวออกจากระบบ
                  สามารถทักมาบอกผมได้ทันทีผ่าน LINE OA ครับ
                  ผมพร้อมจัดการให้ทันใจเพื่อความสบายใจของคุณครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ข้อความกำกับส่วนท้ายหน้า */}
      <footer className="mt-20 border-t border-slate-50 py-16 text-center">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
          Data Protection Standards • {siteConfig.expert.name} 2026
        </p>
      </footer>
    </main>
  )
}

/**
 * PolicyCard: ส่วนประกอบย่อยสำหรับแสดงรายละเอียดนโยบาย
 * เน้นการจัดระเบียบข้อมูลให้อ่านง่าย (Scannable)
 */
function PolicyCard({
  icon: Icon,
  title,
  content,
}: {
  icon: React.ElementType
  title: string
  content: string
}) {
  return (
    <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl md:p-16">
      <div className="flex flex-col items-start gap-8 md:flex-row">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-slate-950 group-hover:text-emerald-500">
          <Icon size={28} strokeWidth={1.5} />
        </div>
        <div className="space-y-6">
          <h2 className="font-heading text-2xl leading-none font-black tracking-tighter text-slate-950 uppercase italic">
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
