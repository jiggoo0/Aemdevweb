/** @format */
"use client"

import React from "react"
import { Layers, Zap, Target, Search } from "lucide-react" // ✅ แก้ layers -> Layers และลบ LayoutDashboard
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"

// ─── 🏗️ TYPE DEFINITIONS ───
interface SectionHeaderProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  light?: boolean
}

export default function CatalogPage() {
  // กรองโปรเจกต์แยกตามกลุ่มหลักเพื่อจัด Section
  const industrialProjects = catalogProjects.filter(
    (p) =>
      ["construction", "wood-business"].includes(p.category) ||
      p.templateId === "wood-business"
  )
  const lifestyleProjects = catalogProjects.filter((p) =>
    ["cafe", "starter"].includes(p.category)
  )
  const professionalProjects = catalogProjects.filter((p) =>
    ["clinic", "real-estate"].includes(p.category)
  )

  return (
    <main className="min-h-screen bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* ─── 01. CATALOG HERO ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-[#0F172A] bg-white py-24 md:py-32">
        <div className="bg-grid-pattern absolute inset-0 opacity-10" />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 border-4 border-[#0F172A] bg-[#F97316] px-6 py-2 shadow-[6px_6px_0px_0px_#0F172A]">
              <Zap size={16} fill="white" className="text-white" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Project Registry v2.5.0
              </span>
            </div>

            <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-8xl lg:text-9xl">
              Solutions <br />
              <span className="text-[#1E3A8A] underline decoration-[#0F172A] decoration-[10px] underline-offset-[12px]">
                Catalog.
              </span>
            </h1>

            <p className="max-w-2xl border-l-[12px] border-[#1E3A8A] pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
              สำรวจสถาปัตยกรรมเว็บไซต์ที่เราออกแบบมาเพื่อแก้ปัญหาธุรกิจโดยเฉพาะ
              เลือกโครงสร้างที่ใช่สำหรับอุตสาหกรรมของคุณ
            </p>
          </div>
        </div>
      </section>

      {/* ─── 02. SECTION: INDUSTRIAL & B2B ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industrial & Infrastructure"
            subtitle="ระบบสำหรับงานก่อสร้าง, โรงงาน และธุรกิจค้าส่งที่เน้นความเชื่อมั่นสูง"
            icon={<Target className="text-[#F97316]" />}
          />
          <CatalogProjectsGrid projects={industrialProjects} columns={3} />
        </div>
      </section>

      {/* ─── 03. SECTION: LIFESTYLE & E-COMMERCE ─── */}
      <section className="bg-[#0F172A] py-24 text-white md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Lifestyle & Modern Retail"
            subtitle="โซลูชันสำหรับคาเฟ่และร้านค้าปลีก ที่เน้นประสบการณ์ลูกค้าและยอดขาย"
            icon={<Layers className="text-[#1E3A8A]" />} // ✅ เปลี่ยนจาก Zap เป็น Layers เพื่อความสวยงามและใช้ Icon ที่ถูกต้อง
            light
          />
          <CatalogProjectsGrid projects={lifestyleProjects} columns={3} />
        </div>
      </section>

      {/* ─── 04. SECTION: PROFESSIONAL SERVICES ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="High-Value Services"
            subtitle="โครงสร้างสำหรับคลินิกและอสังหาฯ ที่ต้องการระบบคัดกรองลูกค้าคุณภาพ"
            icon={<Search className="text-[#F97316]" />}
          />
          <CatalogProjectsGrid projects={professionalProjects} columns={3} />
        </div>
      </section>
    </main>
  )
}

/**
 * 🛠️ SUB-COMPONENT: SECTION HEADER
 * รีแฟกเตอร์ให้ใช้ Type แทน Any เพื่อความปลอดภัย
 */
function SectionHeader({
  title,
  subtitle,
  icon,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          {icon}
          <h2
            className={`text-[10px] font-black uppercase tracking-[0.5em] ${
              light ? "text-[#1E3A8A]" : "text-slate-400"
            }`}
          >
            Category_Stream
          </h2>
        </div>
        <h3
          className={`font-heading text-4xl uppercase tracking-tighter md:text-6xl ${
            light ? "text-white" : "text-[#0F172A]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`max-w-xl font-bold ${
            light ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      </div>
      <div
        className={`mx-12 hidden h-px flex-1 bg-current opacity-10 md:block ${
          light ? "text-white" : "text-[#0F172A]"
        }`}
      />
    </div>
  )
}
