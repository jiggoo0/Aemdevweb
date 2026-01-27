/** @format */

import React from "react"
import { Metadata } from "next"
import { getAllTemplatesMetadata } from "@/lib/template"
import { TemplateGrid } from "@/components/marketplace/template/TemplateGrid"
import { siteConfig } from "@/constants/site-config"
import { Zap, ShieldCheck, Gauge } from "lucide-react"

/**
 * Metadata Engine
 * วางพิกัด SEO ให้หน้าคลังงานดูมีความเป็นมืออาชีพและน่าเชื่อถือ
 */
export const metadata: Metadata = {
  title: `คลังโครงสร้างเว็บไซต์เน้นประสิทธิภาพ | ${siteConfig.project.shortName}`,
  description:
    "รวบรวมชุดโครงสร้างเว็บไซต์ที่ผ่านการทดสอบความเร็วและมาตรฐานการจัดลำดับข้อมูล เพื่อผลลัพธ์ที่ดีที่สุดสำหรับธุรกิจที่ต้องการงานคุณภาพ",
  alternates: { canonical: `${siteConfig.project.url}/templates` },
}

/**
 * TemplateCatalogPage - หน้าคลังโครงสร้าง (Asset Registry)
 * แนวทาง: นำเสนอระบบงานที่พร้อมใช้งานทันที เน้นความเรียบง่ายแต่ได้ผลจริง
 */
export default function TemplateCatalogPage() {
  // ดึงพิกัดข้อมูลจากสารบบกลางเพื่อนำมาแสดงผล
  const allTemplates = getAllTemplatesMetadata()

  return (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <main>
        {/* [LAYER 1] - HERO: แสดงมาตรฐานความเร็วและคุณภาพงานระบบ */}
        <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-40">
          {/* ลายตารางพิกัดโครงสร้าง (System Grid) เพิ่มมิติงานให้ดูพรีเมียม */}
          <div
            className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-[0.03]"
            style={{
              backgroundImage: "url('/grid.svg')",
              backgroundSize: "40px 40px",
            }}
            aria-hidden="true"
          />

          <div className="relative container mx-auto px-6">
            <div className="max-w-5xl space-y-12 text-left">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 rounded-full bg-emerald-500" />
                <span className="font-prompt text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
                  Performance Optimized Registry v2026
                </span>
              </div>

              <h1 className="font-prompt text-6xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[10rem]">
                Live <br />
                <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-[20px]">
                  Structures.
                </span>
              </h1>

              <div className="grid grid-cols-1 gap-12 border-t border-slate-200 pt-12 md:grid-cols-2">
                <p className="font-anuphan text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                  ชุดโครงสร้างเว็บไซต์ที่ถูกออกแบบมาเพื่อความรวดเร็วและเป็นระเบียบ
                  เน้นการใช้งานที่ลื่นไหล
                  เพื่อสร้างรากฐานที่ยั่งยืนให้กับแบรนด์ของคุณ
                </p>

                <div className="flex flex-wrap items-start gap-4">
                  {[
                    { icon: <Gauge size={18} />, label: "Core Web Vitals" },
                    { icon: <Zap size={18} />, label: "Fast Rendering" },
                    { icon: <ShieldCheck size={18} />, label: "SEO Structure" },
                  ].map((item, i) => (
                    <div
                      key={`stat-node-${i}`}
                      className="font-prompt flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-[10px] font-black tracking-widest text-slate-950 uppercase shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-lg hover:ring-emerald-500"
                    >
                      <span className="text-emerald-500">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* [LAYER 2] - CATALOG: พื้นที่แสดงรายการเทมเพลตรายหมวดหมู่ */}
        <section className="py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b border-slate-100 pb-16 md:flex-row md:items-end">
              <div className="space-y-4 border-l-8 border-slate-950 pl-8 text-left">
                <h2 className="font-prompt text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
                  Available <span className="text-emerald-500">Models.</span>
                </h2>
                <p className="font-anuphan text-lg font-bold text-slate-400">
                  เลือกรูปแบบที่ตอบโจทย์ความต้องการธุรกิจ
                  เพื่อเปิดประสบการณ์ความเร็วระดับมาตรฐานสากล
                </p>
              </div>
              <div className="font-prompt rounded-2xl bg-slate-950 px-8 py-4 text-white shadow-2xl">
                <span className="text-[11px] font-black tracking-[0.2em] uppercase italic">
                  Active Units: {allTemplates.length}
                </span>
              </div>
            </div>

            {/* ส่วนเรนเดอร์รายการเทมเพลต: ดึงข้อมูล Metadata ไปแสดงผลเป็น Grid Card */}
            <TemplateGrid templates={allTemplates} />
          </div>
        </section>
      </main>

      {/* Footer Branding: ย้ำภาพลักษณ์มาตรฐานงานคุณภาพ */}
      <footer className="border-t border-slate-50 py-20 text-center opacity-20 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          High-Performance Asset Library • {siteConfig.project.name}
        </p>
      </footer>
    </div>
  )
}
