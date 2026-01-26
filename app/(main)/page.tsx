/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// ดึงการตั้งค่าและฟังก์ชันจัดการ Metadata ตามโครงสร้างใหม่
import { siteConfig } from "@/constants/site-config"
import { constructMetadata } from "@/app/metadata"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import Hero from "@/components/landing/Hero"

// ส่วนจัดการข้อมูลบทความและผลงาน
import { getLatestBlogs } from "@/lib/blog"
import { getLatestCaseStudies } from "@/lib/case-studies"

/**
 * โหลดส่วนประกอบแบบ Dynamic เพื่อลดขนาด Main Thread ของบราวเซอร์
 * ช่วยให้ค่าคะแนน Performance (LCP) ดีขึ้น
 */
const HomeClientSections = dynamic(
  () => import("@/components/landing/HomeClientSections"),
  {
    ssr: true,
    loading: () => (
      <div className="h-[500px] w-full animate-pulse bg-slate-50" />
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

// กำหนด Metadata โดยใช้พิกัดข้อมูลกลุ่ม project
export const metadata: Metadata = constructMetadata({
  title: siteConfig.project.title,
  description: siteConfig.project.description,
})

export default async function HomePage() {
  // ดึงข้อมูลผ่านระบบจัดการไฟล์ (Server-side)
  const latestBlogs = await getLatestBlogs(3)
  const latestCaseStudies = await getLatestCaseStudies(3)

  // กรองเฉพาะบริการที่ต้องการเน้นในหน้าแรก
  const featuredServices = services.filter((s) =>
    ["sme-speed-launch", "corporate-trust", "industrial-catalog"].includes(s.id)
  )

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/20">
      {/* ระบบข้อมูลโครงสร้างเพื่อให้ AI และบอทเก็บข้อมูลเข้าใจเนื้อหา */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
          author: { "@type": "Person", name: siteConfig.expert.name },
        }}
      />

      <Hero />

      {/* ส่วนแสดงความน่าเชื่อถือ: ใช้ Suspense เพื่อป้องกันการติดขัดตอนโหลดข้อมูลชุดใหญ่ */}
      <Suspense
        fallback={<div className="h-96 w-full animate-pulse bg-slate-50" />}
      >
        <HomeClientSections />
      </Suspense>

      <section className="relative overflow-hidden py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* รายการบริการรายธุรกิจ */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ระบบงาน <span className="text-emerald-500">สำหรับธุรกิจ</span>
            </h2>
            <p className="font-anuphan max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              ยกระดับโครงสร้างสำหรับกลุ่มธุรกิจและโรงงานอุตสาหกรรม
              เน้นความเสถียรและลำดับข้อมูลที่ถูกต้องตามมาตรฐานปี 2026
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

      {/* ส่วนแสดงตัวอย่างความสำเร็จ (Case Studies) */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ผลงาน <span className="text-emerald-500">ที่ใช้งานจริง</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestCaseStudies.map((item, idx) => {
              const fm = item.frontmatter

              /**
               * แก้ไขจุดเสี่ยง: จัดการประเภทข้อมูล Union Type (ShowcaseStats | string)
               * ป้องกัน Error TS2551 กรณีผลงานบางชิ้นระบุเป็นข้อความธรรมดา
               */
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
                  description={fm.excerpt}
                  image={fm.thumbnail}
                  industry={fm.industry}
                  result={primaryResult}
                />
              )
            })}
          </div>
        </div>
      </section>

      <WorkProcess />

      {/* ส่วนข้อมูลบทความและคลังความรู้ */}
      <section className="relative bg-slate-50/50 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
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

      <CTASection />

      <footer className="border-t border-slate-100 py-12 text-center opacity-40 select-none">
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          © {new Date().getFullYear()} {siteConfig.company.fullName} —
          จัดการระบบด้วยเทคนิค NEXT.JS 16
        </p>
      </footer>
    </main>
  )
}
