/** @format */

import React from "react"
import { Metadata } from "next"
import { getAllTemplatesMetadata } from "@/lib/template"
import { TemplateGrid } from "@/components/marketplace/template/TemplateGrid"
import { siteConfig } from "@/constants/site-config"
import { Zap, ShieldCheck, Gauge } from "lucide-react"

/**
 * Metadata Engine
 * จัดพิกัด SEO ให้หน้าคลังเทมเพลตดูน่าเชื่อถือและค้นหาง่าย
 */
export const metadata: Metadata = {
  title: `คลังโครงสร้างเว็บไซต์เน้นประสิทธิภาพ | ${siteConfig.project.shortName}`,
  description:
    "รวมชุดโครงสร้างเว็บไซต์ที่ผ่านการทดสอบความเร็วมาตรฐาน Technical SEO และ Performance Score 100 เพื่อผลลัพธ์ทางธุรกิจที่ดีที่สุดสำหรับ SME และโรงงาน",
  alternates: { canonical: `${siteConfig.project.url}/templates` },
}

/**
 * TemplateCatalogPage - หน้าคลังโครงสร้าง (Registry)
 * ออกแบบมาเพื่อแสดงศักยภาพของระบบงานและคัดกรองลูกค้าที่ต้องการงานคุณภาพสูง
 */
export default function TemplateCatalogPage() {
  // ดึงพิกัดข้อมูล Metadata ของเทมเพลตทั้งหมดมาเตรียมการแสดงผล
  const allTemplates = getAllTemplatesMetadata()

  return (
    <div className="min-h-screen bg-white antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <main>
        {/* 1. Header Section - สร้างความประทับใจแรกด้วยพิกัดข้อมูลเทคนิค */}
        <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-40">
          {/* ลายตารางพิกัดโครงสร้าง (Infrastructure Grid) */}
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
                <span className="h-px w-16 bg-emerald-500" />
                <span className="font-heading text-[10px] font-black tracking-[0.5em] text-emerald-600 uppercase italic">
                  Performance Optimized Registry v2026
                </span>
              </div>

              <h1 className="font-heading text-6xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[10rem]">
                Live <br />
                <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-[20px]">
                  Structures
                </span>
              </h1>

              <div className="grid grid-cols-1 gap-12 border-t border-slate-200 pt-12 md:grid-cols-2">
                <p className="font-body text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
                  ชุดโครงสร้างเว็บไซต์ที่ผ่านการประกอบจากหลักการ **Technical
                  SEO** และการรีดความเร็วในระดับวิศวกรรมซอฟต์แวร์
                  เพื่อสร้างโอกาสทางการขายที่วัดผลได้จริง
                </p>

                <div className="flex flex-wrap items-start gap-4">
                  {[
                    { icon: <Gauge size={18} />, label: "Score 100" },
                    { icon: <Zap size={18} />, label: "Fast Load" },
                    { icon: <ShieldCheck size={18} />, label: "SEO Ready" },
                  ].map((item, i) => (
                    <div
                      key={`stat-${i}`}
                      className="flex items-center gap-3 rounded-2xl bg-white px-6 py-3 text-[10px] font-black tracking-widest text-slate-900 uppercase shadow-sm ring-1 ring-slate-200 transition-all hover:ring-emerald-500"
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

        {/* 2. Main Catalog Section - แสดงรายการโครงการที่พร้อมปรับใช้ */}
        <section className="py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 flex flex-col items-start justify-between gap-10 border-b border-slate-100 pb-16 md:flex-row md:items-end">
              <div className="space-y-4 border-l-8 border-slate-950 pl-8 text-left">
                <h2 className="font-heading text-5xl font-black tracking-tighter text-slate-900 uppercase italic md:text-7xl">
                  Available <span className="text-emerald-500">Units</span>
                </h2>
                <p className="font-body text-lg font-bold text-slate-400">
                  เลือกโครงสร้างที่ตรงกับรูปแบบธุรกิจของคุณ
                  เพื่อเข้าดูข้อมูลเทคนิคเชิงลึก
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950 px-8 py-4 text-white shadow-2xl">
                <span className="font-heading text-[11px] font-black tracking-[0.2em] uppercase">
                  Registry Count: {allTemplates.length}
                </span>
              </div>
            </div>

            {/* ระบบแสดงผลการ์ดเทมเพลต: พิกัดการทำงานแบบ Dynamic Grid */}
            <TemplateGrid templates={allTemplates} />
          </div>
        </section>
      </main>

      {/* Footer ประจำหน้า Catalog: เน้นความคลีนเพื่อไม่ให้กวนสมาธิการเลือกเทมเพลต */}
      <footer className="py-20 text-center opacity-30 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          Infrastructure Library by {siteConfig.expert.name}
        </p>
      </footer>
    </div>
  )
}
