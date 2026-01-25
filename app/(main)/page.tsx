/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// ข้อมูลพื้นฐานและรากฐานการตั้งค่าระบบงาน
import { siteConfig, constructMetadata } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import Hero from "@/components/landing/Hero"

// ชุดคำสั่งจัดการข้อมูลบทความและผลงานผ่านระบบไฟล์
import { getLatestBlogs } from "@/lib/blog"
import { getLatestCaseStudies } from "@/lib/case-studies"

/**
 * การโหลดส่วนประกอบแบบแยกชุด (Code Splitting)
 * เพื่อปรับปรุงความเร็วในการโหลดข้อมูลหน้าแรกให้มีประสิทธิภาพสูงสุด
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

export const metadata: Metadata = constructMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})

/**
 * โครงสร้างระบบหน้าหลัก (Main Entry Point)
 * ออกแบบมาเพื่อประสิทธิภาพงานค้นหาและความรวดเร็วในการแสดงผล
 */
export default async function HomePage() {
  // ดึงข้อมูลรายการล่าสุดเพื่อความรวดเร็วในการเรนเดอร์หน้าเว็บ
  const latestBlogs = await getLatestBlogs(3)
  const latestCaseStudies = await getLatestCaseStudies(3)

  // คัดกรองรายการบริการเด่นที่จะนำมาแสดงที่ส่วนหน้าของเว็บไซต์
  const featuredServices = services.filter((s) =>
    ["sme-speed-launch", "corporate-trust", "industrial-catalog"].includes(s.id)
  )

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/20">
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          author: { "@type": "Person", name: siteConfig.expert },
        }}
      />

      <Hero />

      {/* ส่วนแสดงความน่าเชื่อถือผ่านข้อมูลสถิติและโลโก้ผู้ใช้ */}
      <Suspense
        fallback={<div className="h-96 w-full animate-pulse bg-slate-50" />}
      >
        <HomeClientSections />
      </Suspense>

      {/* ส่วนแสดงแนวทางและคุณค่าทางเทคนิคของแบรนด์ */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* ส่วนแสดงบริการหลัก: เน้นระบบงานที่ออกแบบมาเฉพาะทาง */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ระบบงาน{" "}
              <span className="text-emerald-500">ที่ออกแบบมาเพื่อธุรกิจ</span>
            </h2>
            <p className="font-anuphan max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              ยกระดับโครงสร้างระบบสำหรับกลุ่มธุรกิจ SME และโรงงานอุตสาหกรรม 
              เน้นความเสถียรและความปลอดภัยของข้อมูลเป็นหัวใจสำคัญ
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

      {/* ส่วนแสดงผลงานและความสำเร็จ (Case Studies Showcase) */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              ผลงาน{" "}
              <span className="text-emerald-500">ที่สร้างการเติบโตจริง</span>
            </h2>
            <p className="font-anuphan mt-4 text-lg font-bold text-slate-500">
              ตัวอย่างระบบงานที่ช่วยเพิ่มประสิทธิภาพและผลลัพธ์ทางธุรกิจให้ลูกค้า
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestCaseStudies.map((item, idx) => {
              // ตรวจสอบพิกัดข้อมูลผลลัพธ์เพื่อความปลอดภัยของระบบงาน
              const fm = item.frontmatter
              const primaryResult = Array.isArray(fm.results) && fm.results.length > 0
                ? (typeof fm.results[0] === "object" ? (fm.results[0] as any).value : fm.results[0])
                : "Performance 100"

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

      {/* ส่วนอธิบายลำดับเทคนิคการทำงาน (Standard Workflow) */}
      <WorkProcess />

      {/* ส่วนบทความและแนวทางเทคนิค (Blog Insights) */}
      <section className="relative bg-slate-50/50 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                แนวทาง{" "}
                <span className="text-emerald-500">และความรู้ทางเทคนิค</span>
              </h2>
              <p className="font-anuphan mt-4 text-lg font-bold text-slate-500">
                อัปเดตระบบงานดิจิทัลและการจัดการข้อมูลมาตรฐานปี 2026
              </p>
            </div>
            <button className="font-prompt text-xs font-black tracking-widest text-emerald-600 uppercase transition-all hover:underline">
              ดูบทความทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {latestBlogs.map((blog) => (
              <BlogCard
                key={blog.slug}
                slug={blog.slug}
                title={blog.frontmatter.title}
                excerpt={blog.frontmatter.excerpt ?? blog.frontmatter.description ?? ""}
                date={blog.frontmatter.date}
                thumbnail={blog.frontmatter.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* ส่วนท้ายข้อมูลระบบและลิขสิทธิ์ประจำหน้าหลัก */}
      <footer className="py-12 text-center opacity-40 select-none">
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          © {new Date().getFullYear()} {siteConfig.companyName} — รากฐานดิจิทัลโดย Next.js 16
        </p>
      </footer>
    </main>
  )
}
