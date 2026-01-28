/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// [CRITICAL PATH]: โหลดทันทีเพื่อให้หน้าเว็บแสดงผลไวที่สุด (Above the Fold)
import Hero from "@/components/shared/Hero"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"
import SectionSkeleton from "@/components/shared/SectionSkeleton"

// [DYNAMIC LAYERS]: โหลดเมื่อจำเป็น (Lazy Loading) เพื่อลดขนาดไฟล์เริ่มต้น
// ช่วยให้เว็บโหลดไวขึ้นบนมือถือ และรองรับพฤติกรรมการเลื่อนดูข้อมูล
const WorkProcess = dynamic(
  () =>
    import("@/components/sales-engine/WorkProcess").then(
      (mod) => mod.WorkProcess
    ),
  { ssr: true, loading: () => <SectionSkeleton hasHeader={false} /> }
)

const PriceEstimator = dynamic(
  () => import("@/components/sales-engine/PriceEstimator"), // Default Export
  { ssr: true, loading: () => <SectionSkeleton hasHeader={false} /> }
)

const CaseStudyCard = dynamic(() =>
  import("@/components/shared/CaseStudyCard").then((mod) => mod.CaseStudyCard)
)

const TemplateListSection = dynamic(
  () => import("@/components/shared/TemplateListSection"),
  { ssr: true, loading: () => <SectionSkeleton /> }
)

const BlogCard = dynamic(() => import("@/components/shared/BlogCard"))

// ดึงข้อมูลจากระบบ
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getBlogPostsMetadata } from "@/lib/blog"

/**
 * [SEO STRATEGY]: ข้อมูล Metadata สำหรับปี 2026
 * เน้นคำที่ดึงดูดใจและตรงกลุ่มเป้าหมาย (Search Intent)
 */
export const metadata: Metadata = {
  title: `${siteConfig.project.title} | เว็บไซต์สำเร็จรูปและงานระบบคุณภาพสูง`,
  description: siteConfig.project.description,
  alternates: { canonical: siteConfig.project.url },
  openGraph: {
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    url: siteConfig.project.url,
    images: [{ url: siteConfig.project.ogImage }],
    type: "website",
  },
}

export default async function HomePage() {
  /**
   * [SERVER DATA]: ดึงข้อมูลเตรียมไว้ที่ฝั่ง Server
   * เพื่อความเร็วในการส่งข้อมูลไปหน้าบ้าน (Zero Client-Side Fetch)
   */
  const [allCaseStudies, latestPosts] = await Promise.all([
    getAllCaseStudies(),
    getBlogPostsMetadata(),
  ])

  const featuredServices = (servicesData || []).slice(0, 4)
  const featuredCases = (allCaseStudies || []).slice(0, 2)
  const featuredPosts = (latestPosts || []).slice(0, 4)

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/10">
      {/* 1. Structured Data: บอก Google ว่าเราคือตัวจริงเรื่อง Web Service */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
        }}
      />

      {/* [LAYER 1]: Hero Section - ส่วนต้อนรับที่เน้นความเร็วและความเชื่อมั่น */}
      <Hero />

      {/* [LAYER 2]: ตัวเลขยืนยัน - สถิติความสำเร็จที่จับต้องได้ */}
      <div className="relative z-10 border-b border-slate-50 bg-white">
        <ImpactStats />
      </div>

      {/* [LAYER 3]: บริการหลัก - ทางเลือกที่ใช่สำหรับธุรกิจคุณ */}
      <section id="services" className="relative py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
              Main <br />
              <span className="text-emerald-500">Services.</span>
            </h2>
            <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              เลือกแพ็กเกจที่เหมาะกับคุณ
              พร้อมออนไลน์ด้วยระบบที่ออกแบบมาเพื่อการขาย รองรับมาตรฐานใหม่ปี
              2026
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </section>

      {/* [DYNAMIC ZONE]: ส่วนที่เน้นการทำงานลื่นไหล (Lazy Loading) */}
      <Suspense fallback={<SectionSkeleton />}>
        {/* [LAYER 4]: ขั้นตอนการทำงาน - ชัดเจน ตรงไปตรงมา */}
        <section className="bg-slate-50 py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <WorkProcess />
          </div>
        </section>

        {/* [LAYER 5]: ประเมินงบประมาณ - โปร่งใส ไม่มีซ่อนเร้น */}
        <PriceEstimator />

        {/* [LAYER 6]: ผลงานที่ผ่านมา - พิสูจน์ด้วยผลลัพธ์จริงบน Google */}
        <section id="cases" className="bg-slate-950 py-24 text-white lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 max-w-2xl border-l-8 border-emerald-500 pl-8 md:pl-16">
              <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
                Success <br />
                <span className="text-emerald-500">Stories.</span>
              </h2>
              <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-300 md:text-2xl">
                ตัวอย่างธุรกิจที่เติบโตจริงจากการวางระบบเว็บที่ถูกต้อง
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {featuredCases.map((item) => (
                <CaseStudyCard
                  key={item.slug}
                  slug={item.slug}
                  title={item.frontmatter.title}
                  description={item.frontmatter.excerpt}
                  image={item.frontmatter.thumbnail}
                  industry={item.frontmatter.industry}
                  result={
                    typeof item.frontmatter.results?.[0] === "string"
                      ? item.frontmatter.results[0]
                      : item.frontmatter.results?.[0]?.value ||
                        "Success Optimized"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* [LAYER 7]: แบบเว็บไซต์ - เลือกดีไซน์ที่ชอบแล้วเริ่มเลย */}
        <section id="templates" className="bg-white py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <TemplateListSection />
          </div>
        </section>

        {/* [LAYER 8]: คลังความรู้ - เทคนิคและอัปเดตใหม่ๆ */}
        <section
          id="blog"
          className="border-t border-slate-100 bg-slate-50 py-24 lg:py-40"
        >
          <div className="container mx-auto px-6">
            <div className="mb-20 text-center">
              <h2 className="font-heading text-5xl font-black uppercase italic md:text-8xl">
                Knowledge <span className="text-emerald-500">Hub.</span>
              </h2>
              <p className="font-body mt-4 font-bold tracking-widest text-slate-400 uppercase italic">
                เจาะลึกเทคนิคทำเว็บและการตลาดออนไลน์
              </p>
            </div>
            <BlogCard posts={featuredPosts} />
          </div>
        </section>
      </Suspense>

      {/* พื้นหลังลายตาราง (Grid): เพิ่มความเนี้ยบแบบ Minimal */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />
    </main>
  )
}
