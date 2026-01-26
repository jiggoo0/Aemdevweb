/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// ดึงการตั้งค่าพิกัดระบบและฟังก์ชันจัดการข้อมูล
import { siteConfig } from "@/constants/site-config"
import { constructMetadata } from "@/app/metadata"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import Hero from "@/components/landing/Hero"

import { getLatestBlogs } from "@/lib/blog"
import { getLatestCaseStudies } from "@/lib/case-studies"

/**
 * โหลดส่วนประกอบแบบแยกชิ้น (Dynamic Import)
 * เพื่อลดภาระการประมวลผลเริ่มต้น และรีดคะแนน LCP ให้ต่ำกว่ามาตรฐาน 1 วินาที
 */
const HomeClientSections = dynamic(
  () => import("@/components/landing/HomeClientSections"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[500px] w-full animate-pulse bg-slate-50/50" />
    ),
  }
)

const ValueProp = dynamic(() => import("@/components/landing/ValueProp"))
const ServiceCard = dynamic(() => import("@/components/shared/ServiceCard"))
const BlogCard = dynamic(() => import("@/components/shared/BlogCard"))
const CaseStudyCard = dynamic(() => import("@/components/shared/CaseStudyCard"))
const WorkProcess = dynamic(
  () => import("@/components/sales-engine/WorkProcess")
)
const CTASection = dynamic(() => import("@/components/landing/CTASection"))

/**
 * กำหนดพิกัดข้อมูลส่วนหัว (SEO Metadata)
 * ดึงค่าพิกัดมาจาก siteConfig โดยตรง
 */
export const metadata: Metadata = constructMetadata({
  title: siteConfig.project.title,
  description: siteConfig.project.description,
})

/**
 * HomePage - หน้าหลักของอาณาจักร AEMDEVWEB
 * ออกแบบโครงสร้างมาเพื่อการปิดการขายและรองรับบอทของ Search AI 2026
 */
export default async function HomePage() {
  // ดึงข้อมูลผ่านระบบจัดการไฟล์ระดับ Server (Server-side Data Fetching)
  const latestBlogs = await getLatestBlogs(3)
  const latestCaseStudies = await getLatestCaseStudies(3)

  // กรองเฉพาะงานระบบที่ต้องการเน้นเป็นพิเศษในหน้าแรก
  const featuredServices = services.filter((s) =>
    ["sme-speed-launch", "corporate-trust", "industrial-catalog"].includes(s.id)
  )

  return (
    <main className="relative min-h-screen bg-white text-left antialiased selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. วางพิกัดข้อมูลโครงสร้างเพื่อให้ระบบค้นหาเข้าใจบริบทธุรกิจ (WebSite Schema) */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
          author: {
            "@type": "Person",
            name: siteConfig.expert.name,
            url: siteConfig.project.url,
          },
        }}
      />

      {/* 2. Hero Section - ส่วนหัวที่เน้นความเร็วสูงสุด (LCP Critical Path) */}
      <Hero />

      {/* 3. ส่วนแสดงความน่าเชื่อถือ: ใช้ Suspense เพื่อไม่ให้ขวางเนื้อหาหลัก */}
      <Suspense
        fallback={<div className="h-96 w-full animate-pulse bg-slate-50/50" />}
      >
        <HomeClientSections />
      </Suspense>

      {/* 4. ส่วนจุดแข็งทางเทคนิค (Value Proposition) */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* 5. ส่วนรายการระบบงานสำหรับธุรกิจ (Service Showcase) */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 text-left">
            <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ระบบงาน <span className="text-emerald-500">สำหรับธุรกิจ</span>
            </h2>
            <p className="font-body max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              ยกระดับโครงสร้างสำหรับกลุ่มธุรกิจและโรงงานอุตสาหกรรม
              เน้นความเสถียรและพิกัดข้อมูลที่ถูกต้องตามมาตรฐานปี 2026
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.priceValue}
                slug={service.slug}
                features={service.features}
                isPopular={service.highlight}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. ส่วนแสดงพิกัดผลงานจริง (Case Studies) */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-left">
            <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ผลงาน <span className="text-emerald-500">ที่ใช้งานจริง</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestCaseStudies.map((item, idx) => {
              const fm = item.frontmatter

              // ดึงพิกัดผลลัพธ์มาแสดงผล: รองรับทั้งแบบ String และ Object
              const primaryResult =
                typeof fm.results?.[0] === "object"
                  ? fm.results[0].value
                  : fm.results?.[0] || "Performance 100"

              return (
                <CaseStudyCard
                  key={item.slug}
                  index={idx}
                  slug={item.slug}
                  title={fm.title}
                  description={fm.excerpt || fm.description}
                  image={fm.thumbnail}
                  industry={fm.industry}
                  result={primaryResult}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. ระบบขั้นตอนการทำงาน (Sales Engine) */}
      <WorkProcess />

      {/* 8. ส่วนคลังความรู้ (Technical Blog) */}
      <section className="relative bg-slate-50/50 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ความรู้ <span className="text-emerald-500">และแนวทางจัดการ</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.frontmatter.title}
                excerpt={
                  blog.frontmatter.excerpt ?? blog.frontmatter.description ?? ""
                }
                date={blog.frontmatter.date}
                thumbnail={blog.frontmatter.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9. ส่วนกระตุ้นการปิดยอดท้ายหน้า (Call to Action) */}
      <CTASection />

      {/* Footer ประจำหน้าโฮมเพจ */}
      <footer className="border-t border-slate-100 py-12 text-center opacity-40 select-none">
        <p className="font-heading text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          © {new Date().getFullYear()} {siteConfig.company.name} — TECHNICAL
          INFRASTRUCTURE BY {siteConfig.expert.name}
        </p>
      </footer>
    </main>
  )
}
