/** @format */
"use client"

import React from "react"
import Link from "next/link" // ✅ นำเข้า Link เพื่อแก้ Lint Error
import { Layers, Zap, Target, Search, ArrowDownRight } from "lucide-react"
import { catalogProjects } from "@/data/catalog.projects"
import { CatalogProjectsGrid } from "@/components/catalog/CatalogProjectsGrid"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/config/siteConfig"

// ─── 🏗️ TYPE DEFINITIONS ───
interface SectionHeaderProps {
  title: string
  subtitle: string
  icon: React.ReactNode
  light?: boolean
}

export default function CatalogPage() {
  // กรองโปรเจกต์แยกตามกลุ่มหลัก
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
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA 
          หมายเหตุ: ตรวจสอบให้แน่ใจว่าได้เพิ่ม "CollectionPage" ใน JsonLdProps interface แล้ว
      */}
      <JsonLd
        type="WebSite" // 🟢 เปลี่ยนชั่วคราวเป็น WebSite หรือแก้ Interface ใน JsonLd.tsx ให้รองรับ CollectionPage
        data={{
          name: `Solution Catalog | ${siteConfig.name}`,
          description:
            "แคตตาล็อกโครงสร้างเว็บไซต์ที่ออกแบบมาเพื่อธุรกิจเฉพาะทาง",
          url: `${siteConfig.url}/catalog`,
        }}
      />

      {/* ─── 01. CATALOG HERO ─── */}
      <section className="relative overflow-hidden border-b-[8px] border-[#0F172A] bg-slate-50 py-24 md:py-32">
        <div
          className="bg-grid-pattern absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 border-4 border-[#0F172A] bg-[#F97316] px-6 py-2 shadow-[6px_6px_0px_0px_#0F172A]">
              <Zap size={16} fill="white" className="text-white" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-white">
                Solution_Registry v2.5.0
              </span>
            </div>

            <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-8xl lg:text-9xl">
              Solutions <br />
              <span className="text-[#1E3A8A] underline decoration-[#F97316] decoration-[12px] underline-offset-[12px] md:decoration-[18px] md:underline-offset-[16px]">
                Catalog.
              </span>
            </h1>

            <p className="max-w-2xl border-l-[12px] border-[#1E3A8A] pl-8 text-xl font-bold leading-relaxed text-slate-600 md:text-2xl">
              สำรวจสถาปัตยกรรมเว็บไซต์ที่เราออกแบบมาเพื่อแก้ปัญหาธุรกิจโดยเฉพาะ{" "}
              <br />
              <span className="text-[#0F172A]">
                เลือกโครงสร้างที่ใช่สำหรับอุตสาหกรรมของคุณ
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── 02. SECTION: INDUSTRIAL & B2B ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Industrial & Infrastructure"
            subtitle="ระบบสำหรับงานก่อสร้าง, โรงงาน และธุรกิจค้าส่งที่เน้นความเชื่อมั่นสูงเป็นอันดับหนึ่ง"
            icon={<Target className="text-[#F97316]" size={32} />}
          />
          <CatalogProjectsGrid projects={industrialProjects} columns={3} />
        </div>
      </section>

      {/* ─── 03. SECTION: LIFESTYLE (Dark Inverse) ─── */}
      <section className="bg-[#0F172A] py-24 text-white md:py-40">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="Lifestyle & Modern Retail"
            subtitle="โซลูชันสำหรับคาเฟ่และร้านค้าปลีก ที่เน้นประสบการณ์ลูกค้าและการนำเสนอที่ทันสมัย"
            icon={<Layers className="text-[#1E3A8A]" size={32} />}
            light
          />
          <div className="mt-12">
            <CatalogProjectsGrid projects={lifestyleProjects} columns={3} />
          </div>
        </div>
      </section>

      {/* ─── 04. SECTION: PROFESSIONAL SERVICES ─── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader
            title="High-Value Services"
            subtitle="โครงสร้างสำหรับคลินิกและอสังหาฯ ที่ต้องการความน่าเชื่อถือสูงและระบบคัดกรองลูกค้าคุณภาพ"
            icon={<Search className="text-[#F97316]" size={32} />}
          />
          <CatalogProjectsGrid projects={professionalProjects} columns={3} />
        </div>
      </section>

      {/* ─── 05. FOOTER PROTOCOL ─── */}
      <section className="border-t-[8px] border-[#0F172A] bg-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h4 className="font-heading text-3xl font-black uppercase italic tracking-tighter text-[#0F172A] md:text-5xl">
            Don't see your <span className="text-[#1E3A8A]">Industry?</span>
          </h4>
          <p className="mx-auto mt-4 max-w-xl font-bold text-slate-500">
            เราสามารถออกแบบโครงสร้างใหม่ให้เหมาะสมกับ Business Logic
            เฉพาะของคุณได้
          </p>
          <div className="mt-10 flex justify-center">
            {/* ✅ แก้ไข <a> เป็น <Link> เพื่อให้ผ่าน Linting */}
            <Link
              href="/contact"
              className="group flex items-center gap-4 border-4 border-[#0F172A] bg-[#0F172A] px-10 py-5 text-white shadow-[8px_8px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              <span className="font-black uppercase tracking-widest">
                Request Custom Build
              </span>
              <ArrowDownRight className="transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function SectionHeader({
  title,
  subtitle,
  icon,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mb-20 space-y-6">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center border-4 ${light ? "border-white bg-[#1E3A8A]" : "border-[#0F172A] bg-white"} shadow-[4px_4px_0px_0px_currentcolor]`}
        >
          {icon}
        </div>
        <div className="h-[2px] w-20 bg-[#F97316]" />
        <span
          className={`font-mono text-[10px] font-black uppercase tracking-[0.4em] ${light ? "text-slate-400" : "text-slate-400"}`}
        >
          Category_Stream
        </span>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-4">
          <h3
            className={`font-heading text-5xl font-black uppercase italic leading-[0.8] tracking-tighter md:text-7xl ${light ? "text-white" : "text-[#0F172A]"}`}
          >
            {title}
          </h3>
          <p
            className={`text-lg font-bold leading-relaxed ${light ? "text-slate-400" : "text-slate-500"}`}
          >
            {subtitle}
          </p>
        </div>

        <div
          className={`hidden h-2 w-32 md:block ${light ? "bg-white" : "bg-[#0F172A]"}`}
        />
      </div>
    </div>
  )
}
