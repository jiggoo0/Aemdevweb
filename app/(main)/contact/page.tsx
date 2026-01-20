/** @format */

import React from "react"
import type { Metadata } from "next"
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react"

// 📂 ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

// 🧩 ส่วนประกอบหน้าเว็บ (จัดการการนำเข้าให้เสถียร)
import TrustBadge from "@/components/shared/TrustBadge"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"

/**
 * 🚀 Metadata — เน้นความจริงใจและเข้าถึงง่าย
 */
export const metadata: Metadata = {
  title: `คุยงานกับ นายเอ็มซ่ามากส์ | ปรึกษาเรื่องเว็บ SME และโรงงาน`,
  description:
    "ทักมาคุยกับผมได้เลยครับ ไม่ว่าจะเป็นเจ้าของกิจการหรือเจ้าของโรงงาน ผมพร้อมช่วยวางแผนทำเว็บให้เปิดไวและช่วยคุณหาเงินได้จริง",
}

/**
 * 🧬 Contact Page — "คุยตรงกับคนทำงาน ไม่ต้องผ่านเซลล์"
 */
export default async function ContactPage() {
  return (
    <main className="font-anuphan relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 ข้อมูลโครงสร้างสำหรับ Google Search AI */}
      <JsonLd
        type="ContactPage"
        data={{
          name: `ติดต่อ นายเอ็มซ่ามากส์ - AEMDEVWEB`,
          description: "ช่องทางการติดต่อเพื่อปรึกษาการทำเว็บไซต์และ SEO",
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* 🔝 1. ส่วนหัวหน้าเว็บ (Hero Header) */}
      <section className="relative overflow-hidden bg-slate-50/30 pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl border-l-4 border-emerald-500 pl-8">
            <h1 className="font-prompt text-5xl leading-none font-black tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
              ทักมาคุย <br />
              <span className="text-emerald-500 italic">กับผม.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed font-bold text-slate-500">
              ไม่ว่าคุณจะเป็นเจ้าของกิจการหรือเจ้าของโรงงาน
              ทักมาปรึกษาผมได้โดยตรงครับ ผมสแตนด์บายรอช่วยคุณ
              วางโครงสร้างเว็บที่ "ใช้งานได้จริง" ในพื้นที่กรุงเทพฯ และทั่วไทย
            </p>
          </div>
        </div>
      </section>

      {/* 🏗️ 2. ส่วนข้อมูลการติดต่อหลัก */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* 📥 ฝั่งซ้าย: ฟอร์มส่งข้อมูลด่วน (LineLeadForm) */}
          <div className="rounded-[3rem] border border-slate-100 bg-white p-8 shadow-2xl shadow-slate-200/50 md:p-12">
            <h2 className="font-prompt mb-8 text-2xl font-black tracking-tight text-slate-900 uppercase italic">
              ทิ้งข้อมูลให้ผมติดต่อกลับ
            </h2>

            <LineLeadForm />

            <div className="mt-12 border-t border-slate-50 pt-10">
              <TrustBadge variant="grid" />
            </div>
          </div>

          {/* 📍 ฝั่งขวา: ข้อมูลช่องทางอื่นๆ และพิกัด */}
          <div className="lg:pt-12">
            <div className="space-y-12">
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="group rounded-3xl border border-slate-50 bg-slate-50/50 p-8 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <Mail className="mb-4 h-8 w-8 text-emerald-500" />
                  <h3 className="font-prompt text-sm font-black tracking-widest text-slate-400 uppercase">
                    อีเมล
                  </h3>
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {siteConfig.email}
                  </p>
                </div>

                <div className="group rounded-3xl border border-slate-50 bg-slate-50/50 p-8 transition-all hover:-translate-y-1 hover:bg-white hover:shadow-xl">
                  <MessageCircle className="mb-4 h-8 w-8 text-emerald-500" />
                  <h3 className="font-prompt text-sm font-black tracking-widest text-slate-400 uppercase">
                    LINE ID
                  </h3>
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {siteConfig.links.lineId}
                  </p>
                </div>
              </div>

              {/* ข้อมูลพิกัด (Location Context) */}
              <div className="space-y-6 rounded-3xl border border-slate-100 bg-white p-8 shadow-sm md:p-10">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-500">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-prompt text-sm font-black tracking-widest text-slate-400 uppercase">
                      พื้นที่ดูแล
                    </h3>
                    <p className="mt-2 text-lg leading-relaxed font-bold text-slate-600">
                      กรุงเทพมหานคร และ ทั่วประเทศ
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-400 italic">
                      ทำงานแบบออนไลน์ 100% งานเดินไว ไม่ต้องเสียเวลาเดินทาง
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 border-t border-slate-50 pt-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-prompt text-sm font-black tracking-widest text-slate-400 uppercase">
                      เวลาคุยงาน
                    </h3>
                    <p className="mt-2 text-lg font-bold text-slate-600">
                      จันทร์ - เสาร์: 09:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📍 ส่วนท้ายหน้า (Specialist Footer Hook) */}
      <footer className="mt-20 text-center opacity-40">
        <p className="font-prompt text-[9px] font-black tracking-[0.4em] text-slate-400 uppercase">
          Build & Care by นายเอ็มซ่ามากส์ v2026 — Bangkok Hub
        </p>
      </footer>
    </main>
  )
}
