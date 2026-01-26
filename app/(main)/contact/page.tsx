/** @format */

import React from "react"
import type { Metadata } from "next"
import {
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Zap,
} from "lucide-react"

// ข้อมูลตัวตนและรากฐานระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import TrustBadge from "@/components/shared/TrustBadge"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"

/**
 * ข้อมูลส่วนหัว: ปรับพิกัดการเรียกชื่อและ URL ให้ตรงตามกลุ่มข้อมูลใหม่
 */
export const metadata: Metadata = {
  title: `ติดต่อ ${siteConfig.expert.name} | ปรึกษาโปรเจกต์ Next.js และการวางลำดับข้อมูล SEO`,
  description:
    "ทักมาคุยกับผมได้โดยตรงครับ ไม่ว่าจะเป็นเจ้าของกิจการหรือกลุ่มอุตสาหกรรม ผมพร้อมช่วยวางแผนสร้างระบบเว็บไซต์ที่เน้นความเร็วและยอดขายจริง",
  alternates: { canonical: `${siteConfig.project.url}/contact` },
}

/**
 * หน้าติดต่อสอบถาม: การเข้าถึงผู้เชี่ยวชาญโดยตรงเพื่อผลลัพธ์ที่ดีที่สุด
 */
export default async function ContactPage() {
  return (
    <main className="font-anuphan relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* แก้ไขจุดที่ 1: เปลี่ยน type เป็น "WebPage" เพื่อให้ผ่าน Type Check 
          แล้วระบุประเภทจริงผ่าน @type ภายใน data แทน */}
      <JsonLd
        type="WebPage"
        data={{
          "@type": "ContactPage",
          name: `ติดต่อ ${siteConfig.expert.name} - ${siteConfig.project.name}`,
          description:
            "ช่องทางการติดต่อเพื่อปรึกษาการทำเว็บไซต์และระบบงาน SEO สำหรับ SME และกลุ่มอุตสาหกรรม",
          url: `${siteConfig.project.url}/contact`,
        }}
      />

      {/* ส่วนประกอบพื้นหลัง */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.02]" />

      {/* 1. ส่วนหัวเว็บไซต์: การสร้างตัวตนและความน่าเชื่อถือ */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-6 border-l-8 border-emerald-500 pl-8 md:pl-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-emerald-600">
              <ShieldCheck size={14} />
              <span className="font-prompt text-[10px] font-black tracking-[0.3em] uppercase italic">
                Specialist Support
              </span>
            </div>
            <h1 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
              ทักมาคุย <br />
              <span className="text-emerald-500">กับผม.</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              จบปัญหาเรื่องคุยกับคนทำเว็บไม่รู้เรื่อง ทักมาปรึกษาผมได้โดยตรง
              เราจะวางโครงสร้างระบบที่ใช้งานได้จริง
              และเติบโตไปพร้อมกับธุรกิจของท่านครับ
            </p>
          </div>
        </div>
      </section>

      {/* 2. พื้นที่การโต้ตอบหลัก */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">
          {/* ฝั่งซ้าย: แบบฟอร์มติดต่อกลับประสิทธิภาพสูง */}
          <div className="relative overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/40 md:p-16 lg:col-span-7">
            <div className="pointer-events-none absolute top-0 right-0 p-8 opacity-[0.03]">
              <Zap size={200} className="text-emerald-500" />
            </div>
            <div className="relative z-10">
              <h2 className="font-prompt mb-10 text-3xl font-black tracking-tighter text-slate-900 uppercase italic">
                ทิ้งข้อมูลให้ผม{" "}
                <span className="text-emerald-500">ติดต่อกลับ</span>
              </h2>

              <LineLeadForm />

              <div className="mt-16 flex flex-col items-center border-t border-slate-50 pt-12">
                <p className="font-prompt mb-8 text-[10px] font-black tracking-[0.4em] text-slate-300 uppercase italic">
                  Verified Specialist 2026
                </p>
                <TrustBadge variant="grid" />
              </div>
            </div>
          </div>

          {/* ฝั่งขวา: ศูนย์รวมการเชื่อมต่อช่องทางต่างๆ */}
          <div className="space-y-12 lg:col-span-5 lg:pt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {/* แก้ไขจุดที่ 2: ดึงอีเมลจากระดับ company */}
              <div className="group rounded-[2.5rem] border border-slate-50 bg-slate-50/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-500 shadow-sm transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-prompt text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
                    Direct Email
                  </h3>
                </div>
                <p className="text-xl font-black text-slate-900">
                  {siteConfig.company.email}
                </p>
              </div>

              {/* ข้อมูล LINE */}
              <div className="group rounded-[2.5rem] border border-slate-50 bg-slate-50/50 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-2xl">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-500 shadow-sm transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="font-prompt text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase italic">
                    LINE Specialist
                  </h3>
                </div>
                <p className="text-xl font-black text-slate-900">
                  {siteConfig.links.lineId}
                </p>
              </div>
            </div>

            {/* ข้อมูลการดำเนินงาน */}
            <div className="space-y-10 rounded-[3rem] border border-slate-100 bg-white p-10 shadow-sm">
              <div className="flex gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 font-black text-emerald-500 italic">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="font-prompt mb-2 text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
                    Service Area
                  </h3>
                  <p className="text-xl leading-none font-black text-slate-900">
                    กรุงเทพมหานคร และทั่วประเทศไทย
                  </p>
                  <p className="mt-3 text-sm leading-relaxed font-bold text-slate-400 italic">
                    ทำงานรูปแบบออนไลน์เต็มประสิทธิภาพ งานดำเนินได้รวดเร็ว
                    โดยไม่ต้องเสียเวลานัดหมายหลายขั้นตอน
                  </p>
                </div>
              </div>

              <div className="flex gap-6 border-t border-slate-50 pt-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-300">
                  <Clock size={28} />
                </div>
                <div>
                  <h3 className="font-prompt mb-2 text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase italic">
                    Operation Hours
                  </h3>
                  <p className="text-xl leading-none font-black text-slate-900">
                    จันทร์ - เสาร์: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* แก้ไขจุดที่ 3: แสดงชื่อผู้เชี่ยวชาญผ่าน property .name */}
      <footer className="mt-20 border-t border-slate-50 py-12 text-center">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-300 uppercase italic">
          Reliability Build by {siteConfig.expert.name} v2026 — Bangkok Hub
        </p>
      </footer>
    </main>
  )
}
