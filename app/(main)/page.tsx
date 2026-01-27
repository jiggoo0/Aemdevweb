/** @format */

import React from "react"
import { Metadata } from "next"

// คอมโพเนนต์เลเยอร์หลัก (Layer Components)
import Hero from "@/components/shared/Hero"
import ServiceCard from "@/components/shared/ServiceCard"
import { CaseStudyCard } from "@/components/shared/CaseStudyCard"
import BlogCard from "@/components/shared/BlogCard"
import TrustBadge from "@/components/shared/TrustBadge"
import TemplateListSection from "@/components/shared/TemplateListSection"

// ระบบงานและข้อมูลโครงสร้าง (Infrastructure & Data)
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { JsonLd } from "@/components/seo/JsonLd"
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"

/**
 * Metadata: กำหนดพิกัด SEO เพื่อสร้างความชัดเจนและแรงดึงดูดบน Search Engine
 * เน้นการใช้ข้อมูลจาก siteConfig เพื่อความเป็นระเบียบของระบบงาน
 */
export const metadata: Metadata = {
  title: `${siteConfig.project.title} | ${siteConfig.project.slogan}`,
  description: siteConfig.project.description,
  alternates: { canonical: siteConfig.project.url },
}

/**
 * HomePage: หน้าแรกของระบบ AEMDEVWEB
 * ออกแบบโครงสร้างให้รองรับการทำ Organic Search และเน้นความเป็นมิตรต่อผู้ใช้งาน
 */
export default async function HomePage() {
  /**
   * [STRATEGY] การจัดวางลำดับหน้าเว็บ:
   * 1. ดึง 4 บริการหลักเพื่อแสดงขอบเขตงานที่ชัดเจนแก่ SME
   * 2. ดึง 3 ผลงานจริงมาพิสูจน์มาตรฐานงานผ่านตัวเลขและผลลัพธ์
   */
  const featuredServices = services.slice(0, 4)
  const allCaseStudies = await getAllCaseStudies()
  const featuredCases = allCaseStudies.slice(0, 3)

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/10">
      {/* 1. SEO Structured Data: วางพิกัดข้อมูลให้ระบบค้นหาเข้าใจบทบาทของเว็บไซต์ */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
        }}
      />

      {/* [LAYER 1] - HERO: First Impression ที่เน้นความโปร่งใสและดูเป็นมืออาชีพ */}
      <Hero />

      {/* [LAYER 2] - TRUST & IMPACT: ยืนยันความเชื่อมั่นผ่านตัวเลขและสถิติงานระบบ */}
      <div className="relative z-10">
        <TrustBadge />
        <div className="border-b border-slate-50 bg-white py-2">
          <ImpactStats />
        </div>
      </div>

      {/* [LAYER 3] - SERVICES: หมวดหมู่โครงสร้างเว็บที่ออกแบบมาเพื่อธุรกิจ SME */}
      <section
        id="services"
        className="relative overflow-hidden py-24 lg:py-40"
      >
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-3xl border-l-8 border-emerald-500 pl-8">
            <h2 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
              Our <span className="text-emerald-500">Services.</span>
            </h2>
            <p className="font-anuphan mt-8 text-lg leading-relaxed font-bold text-slate-500 md:text-xl">
              วางระบบเว็บที่ตอบโจทย์คนทำงานจริง
              <br className="hidden md:block" />
              ช่วยธุรกิจเดินหน้าได้อย่างต่อเนื่องผ่านพิกัดงานที่ชัดเจนและแม่นยำ
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* [LAYER 4] - CASE STUDIES: พิสูจน์ด้วยผลลัพธ์การทำงานจริง */}
      <section id="cases" className="bg-slate-950 py-24 text-white lg:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <div className="max-w-2xl border-l-8 border-emerald-500 pl-8">
              <h2 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
                Success <span className="text-emerald-500">Stories.</span>
              </h2>
              <p className="font-anuphan mt-8 text-lg leading-relaxed font-bold text-slate-300 md:text-xl">
                เปลี่ยนโจทย์ที่ซับซ้อนให้เป็นผลงานความสำเร็จที่จับต้องได้จริง
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {featuredCases.map((item) => (
              <CaseStudyCard
                key={item.slug}
                // [FIXED]: ลบ index={idx} ออกเพื่อให้ตรงกับโครงสร้าง Component ที่ปรับปรุงใหม่
                slug={item.slug}
                title={item.frontmatter.title}
                description={item.frontmatter.excerpt}
                image={item.frontmatter.thumbnail}
                industry={item.frontmatter.industry}
                result={
                  typeof item.frontmatter.results?.[0] === "string"
                    ? item.frontmatter.results[0]
                    : item.frontmatter.results?.[0]?.value
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* [LAYER 5] - TEMPLATES: คลังโครงสร้างงานระบบที่พร้อมสำหรับการเติบโต */}
      <section id="templates" className="bg-white py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <TemplateListSection />
        </div>
      </section>

      {/* [LAYER 6] - KNOWLEDGE: ศูนย์รวมความรู้เพื่อการปรับตัวของธุรกิจ */}
      <section
        id="blog"
        className="border-t border-slate-100 bg-slate-50 py-24 lg:py-40"
      >
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <h2 className="font-prompt text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl">
              Knowledge <span className="text-emerald-500">Hub.</span>
            </h2>
            <p className="font-anuphan mt-8 max-w-xl text-lg leading-relaxed font-bold text-slate-500">
              อัปเดตแนวคิดการทำเว็บที่ใช้งานได้จริง
              เพื่อให้อยู่เหนือคู่แข่งในทุกจังหวะของธุรกิจ
            </p>
          </div>
          <BlogCard />
        </div>
      </section>

      {/* พิกัดพื้นหลังลายตาราง (Infrastructure Grid) เพื่อมิติเชิงเทคนิค */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />
    </main>
  )
}
