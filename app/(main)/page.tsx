/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// [CRITICAL PATH PROTOCOL]: โหลดทันทีเพื่อความเร็วระดับ 0.8 วินาที (Above the Fold)
import Hero from "@/components/shared/Hero"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"
import SectionSkeleton from "@/components/shared/SectionSkeleton"

// [DYNAMIC NODES]: โหลดข้อมูลเมื่อจำเป็นเพื่อรักษาพิกัดประสิทธิภาพระบบ
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

// เชื่อมโยงพิกัดข้อมูลระบบส่วนกลาง
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getBlogPostsMetadata } from "@/lib/blog"

/**
 * [STRATEGIC METADATA]: การกำหนดชุดข้อมูลเพื่อพิกัดความเชื่อถือ 2026
 * ยุทธศาสตร์: ครองพิกัด Technical Search Authority
 */
export const metadata: Metadata = {
  title: `${siteConfig.project.title} | ระบบพัฒนาเว็บไซต์และพิกัดบริการ SEO ประสิทธิภาพสูง`,
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
   * [SERVER SIDE LOGIC]: ดึงข้อมูลจากพิกัดไฟล์ระบบฝั่ง Server พร้อมกัน
   * เพื่อความฉับไวและรองรับบอทการค้นหาได้สมบูรณ์ 100%
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
      {/* [SCHEMA DATA]: ข้อมูลยืนยันพิกัดธุรกิจต่อระบบ AI Search สากล */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.project.name,
          url: siteConfig.project.url,
          description: siteConfig.project.description,
        }}
      />

      {/* Hero Section: พิกัดนำเสนอความเร็วและเสถียรภาพสูงสุด */}
      <Hero />

      {/* Impact Nodes: ข้อมูลยืนยันผลลัพธ์ที่จับต้องได้จริงเชิงระบบ */}
      <div className="relative z-10 border-b border-slate-50 bg-white">
        <ImpactStats />
      </div>

      {/* Main Services: พิกัดแผนงานบริการเพื่อการเติบโตทางธุรกิจ */}
      <section id="services" className="relative py-24 lg:py-40">
        <div className="container-za">
          <div className="mb-20 max-w-3xl border-l-8 border-emerald-500 pl-8 md:pl-16">
            <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl">
              Core <br />
              <span className="text-emerald-500">Services.</span>
            </h2>
            <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              เลือกพิกัดเว็บไซต์ที่ตอบโจทย์ความต้องการเชิงพาณิชย์
              พร้อมออนไลน์ด้วยโครงสร้างระบบที่เน้นมาตรฐานสากลปี 2026
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </section>

      {/* ระบบโหลดข้อมูลแบบนุ่มนวล (Smooth Loading Protocol) */}
      <Suspense fallback={<SectionSkeleton />}>
        {/* Work Protocol: ขั้นตอนการจัดการระบบที่แม่นยำ */}
        <section className="bg-slate-50 py-12 lg:py-24 shadow-inner">
          <div className="container-za">
            <WorkProcess />
          </div>
        </section>

        {/* Estimation Node: ระบบประเมินงบประมาณเพื่อความโปร่งใส */}
        <PriceEstimator />

        {/* Success Protocol: กรณีศึกษาผลลัพธ์จริงจากการวางโครงสร้างระบบ */}
        <section id="cases" className="bg-slate-950 py-24 text-white lg:py-40 shadow-node">
          <div className="container-za">
            <div className="mb-20 max-w-2xl border-l-8 border-emerald-500 pl-8 md:pl-16">
              <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
                Success <br />
                <span className="text-emerald-500">Protocol.</span>
              </h2>
              <p className="font-body mt-8 text-xl leading-relaxed font-bold text-slate-300 md:text-2xl">
                บทพิสูจน์ธุรกิจที่เติบโตจากการวางรากฐานพิกัดข้อมูลที่เปี่ยมประสิทธิภาพ
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

        {/* Base Models: พิกัดรูปแบบระบบสำเร็จรูปพร้อมใช้งาน */}
        <section id="templates" className="bg-white py-24 lg:py-40">
          <div className="container-za">
            <TemplateListSection />
          </div>
        </section>

        {/* Insights Hub: คลังข้อมูลระดับรหัสและเทคโนโลยีปี 2026 */}
        <section
          id="blog"
          className="border-t border-slate-100 bg-slate-50 py-24 lg:py-40"
        >
          <div className="container-za">
            <div className="mb-20 text-center">
              <h2 className="font-heading text-5xl font-black uppercase italic md:text-8xl">
                Insights <span className="text-emerald-500">Hub.</span>
              </h2>
              <p className="font-body mt-4 font-bold tracking-widest text-slate-400 uppercase italic">
                เจาะลึกพิกัดเทคโนโลยีและกลยุทธ์การเพิ่มขีดความสามารถเชิงรหัส
              </p>
            </div>
            <BlogCard posts={featuredPosts} />
          </div>
        </section>
      </Suspense>

      {/* พิกัดลายเส้นโครงสร้าง: มิติความละเอียดระดับรหัสระดับ 7 */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]"
        aria-hidden="true"
      />
    </main>
  )
}
