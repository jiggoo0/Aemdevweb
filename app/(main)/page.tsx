/** @format */

import React, { Suspense } from "react"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// [CRITICAL PATH]: โหลดทันทีเพื่อสมรรถนะ LCP สูงสุด (Above the Fold)
import Hero from "@/components/shared/Hero"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { ServiceCard } from "@/components/shared/ServiceCard"
import { JsonLd } from "@/components/seo/JsonLd"
import SectionSkeleton from "@/components/shared/SectionSkeleton"

// [DYNAMIC NODES]: Code Splitting เพื่อลดขนาด Bundle ข้อมูลเริ่มต้น
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

// เชื่อมโยงพิกัดข้อมูล Master Data
import { siteConfig } from "@/constants/site-config"
import { servicesData } from "@/constants/services-data"
import { getAllCaseStudies } from "@/lib/case-studies"
import { getBlogPostsMetadata } from "@/lib/blog"

/**
 * [STRATEGIC METADATA]: พิกัดตัวตนเพื่อการครองอันดับปี 2026
 */
export const metadata: Metadata = {
  title: `${siteConfig.project.title} | Technical SEO & Web System Specialist`,
  description: siteConfig.project.description,
  metadataBase: new URL(siteConfig.project.url),
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.project.title,
    description: siteConfig.project.description,
    url: siteConfig.project.url,
    images: [{ url: siteConfig.project.ogImage }],
    type: "website",
    siteName: siteConfig.company.name,
  },
}

export default async function HomePage() {
  /**
   * [SERVER SIDE LOGIC]: ดึงข้อมูลจาก Data Layers พร้อมกัน (Parallel Fetching)
   */
  const [allCaseStudies, latestPosts] = await Promise.all([
    getAllCaseStudies(),
    getBlogPostsMetadata(),
  ])

  const featuredServices = (servicesData || []).slice(0, 4)
  const featuredCases = (allCaseStudies || []).slice(0, 2)
  const featuredPosts = (latestPosts || []).slice(0, 4)

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [SCHEMA DATA]: เชื่อมโยงพิกัดโหนดตัวตนเข้ากับระบบ AI Search */}
      <JsonLd
        type="Graph"
        data={{
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteConfig.project.url}/#website`,
              url: siteConfig.project.url,
              name: siteConfig.project.name,
              publisher: { "@id": "https://me.aemdevweb.com/#person" },
            },
            {
              "@type": "Organization",
              "@id": `${siteConfig.project.url}/#organization`,
              name: siteConfig.company.name,
              url: siteConfig.project.url,
              logo: {
                "@type": "ImageObject",
                url: `${siteConfig.project.url}/images/logo-circuit.png`,
              },
            },
          ],
        }}
      />

      {/* 1. Hero Node: พิกัดนำเสนอสูงสุด */}
      <Hero />

      {/* 2. Impact Protocol: ยืนยันผลลัพธ์เชิงตัวเลข */}
      <div className="relative z-10 border-b border-[oklch(0.95_0.02_260)] bg-white dark:border-white/5 dark:bg-[oklch(0.12_0.02_260)]">
        <ImpactStats />
      </div>

      {/* 3. Core Services: พิกัดแผนงานบริการหลัก */}
      <section id="services" className="relative py-24 lg:py-40">
        <div className="container-za">
          <div className="border-brand-primary mb-20 max-w-3xl border-l-8 pl-8 md:pl-16">
            <h2 className="font-heading text-brand-depth text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl dark:text-white">
              Core <br />
              <span className="text-brand-primary">Services.</span>
            </h2>
            <p className="font-body mt-8 text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl dark:text-[oklch(0.8_0.02_260)]">
              โครงสร้างระบบเว็บไซต์ที่ตอบโจทย์สมรรถนะสูงสุด
              ภายใต้มาตรฐานการควบคุมพิกัดของ นายเอ็มซ่ามากส์
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Smooth Loading Stream: โหลดโหนดข้อมูลตามลำดับความสำคัญ */}
      <Suspense fallback={<SectionSkeleton />}>
        {/* Work Protocol Node */}
        <section className="bg-[oklch(0.98_0.01_260)] py-12 shadow-inner lg:py-24 dark:bg-[oklch(0.15_0.02_260)]">
          <div className="container-za">
            <WorkProcess />
          </div>
        </section>

        {/* Dynamic Estimation Node */}
        <PriceEstimator />

        {/* Success Protocol: พิกัดยืนยันความสำเร็จ (Portfolio) */}
        <section
          id="cases"
          className="bg-brand-depth py-24 text-white shadow-2xl lg:py-40 dark:bg-[oklch(0.12_0.02_260)]"
        >
          <div className="container-za">
            <div className="border-brand-primary mb-20 max-w-2xl border-l-8 pl-8 md:pl-16">
              <h2 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl">
                Success <br />
                <span className="text-brand-primary">Protocol.</span>
              </h2>
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
                        "Performance Verified"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        {/* Model Templates: พิกัดโครงสร้างสำเร็จรูป */}
        <section
          id="templates"
          className="bg-white py-24 lg:py-40 dark:bg-[oklch(0.12_0.02_260)]"
        >
          <div className="container-za">
            <TemplateListSection />
          </div>
        </section>

        {/* Insight Hub: คลังข้อมูลทางเทคนิค */}
        <section
          id="blog"
          className="border-t border-[oklch(0.95_0.02_260)] bg-[oklch(0.98_0.01_260)] py-24 lg:py-40 dark:border-white/5 dark:bg-[oklch(0.15_0.02_260)]"
        >
          <div className="container-za">
            <div className="mb-20 text-center">
              <h2 className="font-heading text-brand-depth text-5xl font-black uppercase italic md:text-8xl dark:text-white">
                Insights <span className="text-brand-primary">Hub.</span>
              </h2>
            </div>
            <BlogCard posts={featuredPosts} />
          </div>
        </section>
      </Suspense>

      {/* [SYSTEM GRID]: ลายเส้นพิกัดโครงสร้างระบบระดับ 7 */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert"
        aria-hidden="true"
      />
    </main>
  )
}
