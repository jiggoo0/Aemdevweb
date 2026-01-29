/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// [CRITICAL PATH]: โหลดทันทีเพื่อประสิทธิภาพการแสดงผลสูงสุด (Above the Fold)
import Hero from "@/components/shared/Hero"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"
import SectionSkeleton from "@/components/shared/SectionSkeleton"

// [DYNAMIC LAYERS]: โหลดเมื่อมีการเรียกใช้งานเพื่อลดขนาดไฟล์เริ่มต้น (Performance Optimized)
const WorkProcess = dynamic(
  () =>
    import("@/components/sales-engine/WorkProcess").then(
      (mod) => mod.WorkProcess
    ),
  { ssr: true, loading: () => <SectionSkeleton hasHeader={false} /> }
)

const PriceEstimator = dynamic(
  () => import("@/components/sales-engine/PriceEstimator"),
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

// เชื่อมโยงข้อมูลระบบ
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getBlogPostsMetadata } from "@/lib/blog"

/**
 * [SEO STRATEGY]: ข้อมูล Metadata สำหรับปี 2026
 * มุ่งเน้นความน่าเชื่อถือและประสิทธิภาพเชิงเทคนิคระดับสากล
 */
export const metadata: Metadata = {
  title: `${siteConfig.project.title} | โซลูชันพัฒนาเว็บไซต์และ Technical SEO ประสิทธิภาพสูง`,
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
   * [SERVER DATA]: ดึงข้อมูลจากฝั่ง Server
   * เพื่อความรวดเร็วและรองรับมาตรฐานการค้นหา 100 เปอร์เซ็นต์
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
      {/* Structured Data: ข้อมูลระบุตัวตนธุรกิจมาตรฐานสากล */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
        }}
      />

      {/* Hero Section: ส่วนนำเสนอความรวดเร็วและเสถียรภาพ */}
      <Hero />

      {/* สถิติความสำเร็จ: บทพิสูจน์ผลลัพธ์เชิงตัวเลขที่ชัดเจน */}
      <div className="relative z-10 border-b border-slate-50 bg-white">
        <ImpactStats />
      </div>

      {/* บริการหลัก: โซลูชันที่ออกแบบมาเพื่อการเติบโตของธุรกิจอย่างยั่งยืน */}
      <section id="services" className="relative py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="mb-20 max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
              Main <br />
              <span className="text-emerald-500">Services.</span>
            </h2>
            <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              เลือกรูปแบบเว็บไซต์ที่ตอบโจทย์ความต้องการทางธุรกิจ
              พร้อมออนไลน์ด้วยระบบที่เน้นอัตรา Conversion ภายใต้มาตรฐานสากลปี
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

      {/* ส่วนการจัดการระบบที่ลื่นไหล (Lazy Loading Zone) */}
      <Suspense fallback={<SectionSkeleton />}>
        {/* กระบวนการทำงาน: ชัดเจน แม่นยำ และเป็นระบบ */}
        <section className="bg-slate-50 py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <WorkProcess />
          </div>
        </section>

        {/* ประเมินงบประมาณ: ความโปร่งใสเพื่อการตัดสินใจที่แม่นยำ */}
        <PriceEstimator />

        {/* ผลงานที่ผ่านมา: กรณีศึกษาความสำเร็จจากการยกระดับระบบเว็บไซต์ประสิทธิภาพสูง */}
        <section id="cases" className="bg-slate-950 py-24 text-white lg:py-40">
          <div className="container mx-auto px-6">
            <div className="mb-20 max-w-2xl border-l-8 border-emerald-500 pl-8 md:pl-16">
              <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
                Success <br />
                <span className="text-emerald-500">Stories.</span>
              </h2>
              <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-300 md:text-2xl">
                บทพิสูจน์ธุรกิจที่เติบโตจริงจากการวางรากฐานโครงสร้างเว็บไซต์ที่เปี่ยมประสิทธิภาพ
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
                        "Performance Optimized"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* รูปแบบเว็บไซต์: คัดเลือกดีไซน์พรีเมียมเพื่อการเริ่มต้นธุรกิจในทันที */}
        <section id="templates" className="bg-white py-24 lg:py-40">
          <div className="container mx-auto px-6">
            <TemplateListSection />
          </div>
        </section>

        {/* คลังข้อมูลเชิงลึก: กลยุทธ์และเทคโนโลยีเพื่อก้าวทันโลกดิจิทัล */}
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
                เจาะลึกเทคโนโลยีเว็บไซต์และกลยุทธ์การเพิ่มขีดความสามารถทางการแข่งขัน
              </p>
            </div>
            <BlogCard posts={featuredPosts} />
          </div>
        </section>
      </Suspense>

      {/* ลายเส้นโครงสร้างเชิงระบบ: เพิ่มความละเอียดและความเนี้ยบแบบ Minimalist */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />
    </main>
  )
}
