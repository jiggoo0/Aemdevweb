/** @format */

import React from "react"
import type { Metadata } from "next"
import { BarChart3, Target, Zap } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { getAllCaseStudies } from "@/lib/case-studies"
import { JsonLd } from "@/components/seo/JsonLd"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"

/**
 * [SEO STRATEGY]: การสร้างความเชื่อมั่นผ่านดัชนีชี้วัดความสำเร็จ (Strategic Trust)
 * นำเสนอผลลัพธ์เชิงประจักษ์เพื่อยืนยันมาตรฐานความเชี่ยวชาญระดับสากล 2026
 */
export const metadata: Metadata = {
  title: `Case Studies | บันทึกผลลัพธ์เชิงกลยุทธ์และดัชนีชี้วัดความสำเร็จโดย ${siteConfig.expert.name}`,
  description:
    "เจาะลึกเบื้องหลังการวางโครงสร้างระบบเว็บไซต์เชิงกลยุทธ์ที่ช่วยเพิ่มขีดความสามารถทางการแข่งขันให้ธุรกิจ SME ด้วยเทคโนโลยี Next.js 16",
  alternates: { canonical: `${siteConfig.project.url}/case-studies` },
}

/**
 * CaseStudiesPage - บันทึกผลลัพธ์เชิงกลยุทธ์ (Strategic Case Repository)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การนำเสนอความโปร่งใสผ่านตัวเลขประสิทธิภาพที่วัดผลได้จริง
 * มาตรฐาน: AEMDEVWEB High-Response Infrastructure
 */
export default async function CaseStudiesPage() {
  // [STRATEGIC DATA ENGINE]: ดึงข้อมูลผลลัพธ์โครงการผ่านระบบ Server-side
  const cases = await getAllCaseStudies()

  return (
    <main className="relative min-h-screen w-full bg-slate-950 pb-32 antialiased selection:bg-emerald-500/20">
      {/* 1. SCHEMA: การยืนยันความน่าเชื่อถือผ่านประวัติผลงานต่อระบบประมวลผล AI Search */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: "บันทึกเคสความสำเร็จการออกแบบระบบเว็บไซต์เชิงกลยุทธ์ - AEMDEVWEB",
          description: metadata.description as string,
          url: `${siteConfig.project.url}/case-studies`,
          publisher: {
            "@type": "Person",
            name: siteConfig.expert.realName,
          },
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบ (Systematic Grid) */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.05] invert"
        aria-hidden="true"
      />

      {/* [LAYER 1]: HERO SECTION - ส่วนนำเสนอวิสัยทัศน์และผลลัพธ์หลัก */}
      <section className="relative overflow-hidden border-b border-white/5 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-[120px]" />

        <div className="container mx-auto px-6">
          <div className="max-w-5xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[9px] font-black tracking-[0.4em] text-emerald-400 uppercase italic backdrop-blur-xl">
              <Zap size={12} className="fill-emerald-500" />
              Strategic Performance Index
            </div>

            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl lg:text-[10rem]">
              Case <br />
              <span className="text-emerald-500">Studies.</span>
            </h1>

            <p className="font-body mt-12 max-w-3xl text-xl leading-relaxed font-bold text-slate-400 md:text-3xl">
              "ขับเคลื่อนผลลัพธ์ผ่านดัชนีชี้วัดเชิงกลยุทธ์" <br />
              ถอดรหัสการเพิ่มสมรรถนะธุรกิจ SME สู่การเป็นผู้นำตลาดในระนาบดิจิทัล <br className="hidden md:block" />
              เปลี่ยนโครงสร้างเว็บไซต์ให้เป็นสินทรัพย์ดิจิทัลที่สร้างมูลค่าเพิ่มอย่างยั่งยืน
            </p>
          </div>
        </div>
      </section>

      {/* [LAYER 2]: METRIC MATRIX - สรุปภาพรวมความสำเร็จเชิงเทคนิคและธุรกิจ */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              label: "Performance Integrity",
              value: "98/100",
              icon: <Zap size={20} />,
            },
            {
              label: "Strategic Visibility",
              value: "+250%",
              icon: <BarChart3 size={20} />,
            },
            {
              label: "Search Connectivity",
              value: "100%",
              icon: <Target size={20} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-6 rounded-[2.5rem] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-emerald-500/20"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-slate-950">
                {stat.icon}
              </div>
              <div>
                <div className="font-heading text-xs font-black tracking-widest text-slate-500 uppercase italic">
                  {stat.label}
                </div>
                <div className="font-heading text-3xl font-black text-white italic">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* [LAYER 3]: STRATEGIC GRID - รายการโซลูชันความสำเร็จ (Staggered Grid) */}
      <section className="container mx-auto px-6 pt-12">
        {cases && cases.length > 0 ? (
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((item, index) => {
              // การจัดสรรข้อมูลผลลัพธ์ให้ถูกต้องตามโครงสร้างส่วนประกอบ Card
              const rawResult = item.frontmatter.results?.[0]
              const displayResult =
                typeof rawResult === "string"
                  ? rawResult
                  : rawResult?.value || ""

              return (
                <CaseStudyCard
                  key={item.slug}
                  index={index}
                  slug={item.slug}
                  title={item.frontmatter.title}
                  description={item.frontmatter.excerpt}
                  image={item.frontmatter.thumbnail}
                  industry={item.frontmatter.industry}
                  result={displayResult}
                />
              )
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[4rem] border-2 border-dashed border-white/5 bg-white/[0.01] py-48 text-center">
            <h3 className="font-heading text-3xl font-black text-slate-700 uppercase italic">
              Strategic Data Readiness...
            </h3>
          </div>
        )}
      </section>

      {/* ส่วนท้ายหน้ายืนยันมาตรฐานการดำเนินงาน */}
      <footer className="mt-40 text-center opacity-20 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.6em] text-slate-500 uppercase italic">
          Strategic Solution Delivery Standard • 2026
        </p>
      </footer>
    </main>
  )
}
