/** @format */

import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import LineLeadForm from "@/components/sales-engine/LineLeadForm"
import {
  Zap,
  Terminal,
  Code2,
  Cpu,
  ArrowRight,
  Fingerprint,
} from "lucide-react"

/**
 * [STRATEGIC SEO]: การสร้างความเชื่อมั่นผ่านอัตลักษณ์ผู้เชี่ยวชาญ
 * เชื่อมโยงข้อมูลบุคคลเข้ากับโครงสร้างแบรนด์เพื่อรองรับระบบ AI Search 2026
 */
export const metadata: Metadata = {
  title: `เกี่ยวกับ ${siteConfig.expert.name} | Technical System Specialist`,
  description: `เบื้องหลังการวางโครงสร้างระบบประสิทธิภาพสูงของ AEMDEVWEB โดย ${siteConfig.expert.realName} ผู้เชี่ยวชาญด้านสถาปัตยกรรมเว็บไซต์และกลยุทธ์ SEO เชิงเทคนิค`,
  alternates: { canonical: `${siteConfig.project.url}/about` },
}

/**
 * AboutPage - ส่วนนำเสนอตัวตนผู้เชี่ยวชาญและปรัชญาการดำเนินงาน
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างความเชื่อมั่นผ่านความเชี่ยวชาญเชิงระบบที่วัดผลได้จริง
 */
export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. SCHEMA: การยืนยันข้อมูลบุคคลตามมาตรฐานการค้นหาสากล */}
      <JsonLd
        type="Person"
        data={{
          name: siteConfig.expert.realName,
          alternateName: siteConfig.expert.name,
          jobTitle: siteConfig.expert.role,
          url: siteConfig.links.personal,
          image: `${siteConfig.project.url}/og-image.png`,
          sameAs: [siteConfig.links.facebook, siteConfig.links.linkedin].filter(
            Boolean
          ),
          worksFor: {
            "@type": "Organization",
            name: siteConfig.company.name,
          },
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* [LAYER 1]: HERO SECTION - อัตลักษณ์และความมุ่งมั่นของผู้เชี่ยวชาญ */}
      <section className="relative overflow-hidden bg-slate-50/50 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="max-w-4xl flex-1 space-y-12">
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-white px-5 py-2 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic shadow-sm">
                <Fingerprint size={14} className="text-emerald-500" />
                Identity Verified
              </div>

              <h1 className="font-heading text-7xl leading-[0.85] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-[11rem]">
                The <br />
                <span className="text-emerald-500">Specialist.</span>
              </h1>

              <div className="max-w-2xl border-l-8 border-emerald-500 pl-8 md:pl-12">
                <p className="font-body text-2xl leading-relaxed font-black text-slate-900 md:text-3xl">
                  "เราสร้างระบบเพื่อให้ธุรกิจของคุณ
                  ขับเคลื่อนไปข้างหน้าด้วยประสิทธิภาพสูงสุด"
                </p>
                <p className="font-body mt-6 text-lg leading-relaxed font-bold text-slate-500">
                  ผมคือ **{siteConfig.expert.name}**
                  ผู้วางรากฐานและสถาปัตยกรรมระบบของ AEMDEVWEB 
                  ความมุ่งมั่นของผมคือการเปลี่ยนเว็บไซต์ทั่วไปให้เป็น **Strategic Digital Asset** ที่มีความเร็ว ความปลอดภัย และรองรับกลยุทธ์การค้นหาภายใต้มาตรฐานสากลปี 2026
                </p>
              </div>
            </div>

            {/* ส่วนแสดงภาพลักษณ์อัตลักษณ์ทางเทคนิค (Visual Identity) */}
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-6 rounded-[4rem] bg-emerald-500/10 blur-[60px]" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[3.5rem] border border-slate-100 bg-white p-2 shadow-2xl">
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[3rem] bg-slate-950 p-12 text-center">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <Zap
                    size={80}
                    fill="currentColor"
                    className="mb-10 text-emerald-500"
                  />
                  <h2 className="font-heading text-4xl font-black tracking-tighter text-white italic">
                    {siteConfig.expert.name}
                  </h2>
                  <p className="font-heading mt-2 text-[11px] font-black tracking-[0.5em] text-emerald-500 uppercase italic">
                    AEM STRATEGIC SYSTEM
                  </p>
                  <div className="mt-12 h-px w-20 bg-emerald-500/20" />
                  <p className="font-body mt-8 text-sm font-bold text-slate-400">
                    Technical System Specialist and Strategic Consultant
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: STRATEGIC PHILOSOPHY - หลักการบริหารจัดการระบบ */}
      <section className="py-24 lg:py-48">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 md:grid-cols-3">
            <AboutFeature
              icon={<Code2 size={32} />}
              title="Advanced Stack"
              description="ประยุกต์ใช้ Next.js 16 และ React 19 เพื่อความเสถียรและประสิทธิภาพการตอบสนองระดับสูงสุดของระบบธุรกิจ"
            />
            <AboutFeature
              icon={<Cpu size={32} />}
              title="Infrastructure"
              description="วางสถาปัตยกรรมแบบ Hybrid เพื่อคะแนน Core Web Vitals ที่ดีเยี่ยม โดยเฉพาะค่า LCP ที่ต่ำกว่า 0.8 วินาที"
            />
            <AboutFeature
              icon={<Terminal size={32} />}
              title="Search Strategy"
              description="บูรณาการระบบ Schema Markup และโครงสร้างข้อมูลเชิงลึกเพื่อให้ระบบ AI และ Search Engine ประมวลผลได้แม่นยำ"
            />
          </div>
        </div>
      </section>

      {/* [LAYER 3]: CONSULTATION - การประสานงานโครงการเชิงกลยุทธ์ */}
      <section className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-[4.5rem] bg-slate-950 p-12 text-white shadow-2xl shadow-emerald-500/10 md:p-24 lg:p-32">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[140px]" />

          <div className="relative z-10 flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl space-y-12">
              <div className="flex items-center gap-4">
                <div className="h-0.5 w-12 bg-emerald-500" />
                <span className="font-heading text-[11px] font-black tracking-[0.4em] text-emerald-400 uppercase italic">
                  Project Execution
                </span>
              </div>

              <h2 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter italic md:text-8xl lg:text-9xl">
                Scale <br />
                <span className="text-emerald-500">
                  Business<span className="text-white">.</span>
                </span>
              </h2>

              <p className="font-body text-xl leading-relaxed font-bold text-slate-400 md:text-2xl">
                ยกระดับประสิทธิภาพธุรกิจของคุณด้วยระบบงานมาตรฐานสากล
              </p>

              <div className="flex flex-wrap items-center gap-8 pt-6">
                <LineLeadForm
                  variant="button"
                  label="ปรึกษาแผนงานโครงการ"
                  className="h-20 rounded-3xl bg-emerald-600 px-12 text-xl font-black tracking-widest text-slate-950 italic shadow-2xl shadow-emerald-600/30 transition-all hover:bg-white active:scale-95"
                />
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-4 text-sm font-black tracking-widest text-white uppercase italic transition-colors hover:text-emerald-400"
                >
                  ดูรายละเอียดโซลูชัน
                  <ArrowRight
                    size={20}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ข้อมูลรุ่นระบบและลิขสิทธิ์ส่วนท้ายหน้า */}
      <footer className="mt-40 text-center opacity-30 select-none">
        <p className="font-heading text-[11px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          Designed by {siteConfig.expert.realName} • Standard v2026
        </p>
      </footer>
    </main>
  )
}

/**
 * AboutFeature - ส่วนประกอบแสดงความเชี่ยวชาญเฉพาะด้านเชิงระบบ
 */
function AboutFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group relative rounded-[3.5rem] border border-slate-100 bg-white p-12 transition-all duration-700 hover:border-emerald-500/30 hover:shadow-[0_50px_100px_-20px_rgba(16,185,129,0.1)]">
      <div className="mb-12 flex h-20 w-20 items-center justify-center rounded-[2rem] bg-slate-50 text-emerald-600 shadow-sm transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] group-hover:bg-slate-950 group-hover:text-emerald-400">
        {icon}
      </div>
      <div className="space-y-6">
        <h3 className="font-heading text-3xl font-black tracking-tighter text-slate-950 uppercase italic">
          {title}
        </h3>
        <p className="font-body text-lg leading-relaxed font-bold text-slate-500 transition-colors group-hover:text-slate-700">
          {description}
        </p>
      </div>
    </div>
  )
}
