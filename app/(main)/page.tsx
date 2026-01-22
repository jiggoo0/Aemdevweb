/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { siteConfig, constructMetadata } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"
import Hero from "@/components/landing/Hero"

// Dynamic Components Optimization: Prioritizing LCP and TTI
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
const WorkProcess = dynamic(
  () => import("@/components/sales-engine/WorkProcess")
)
const CTASection = dynamic(() => import("@/components/landing/CTASection"))

export const metadata: Metadata = constructMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
})

export default function HomePage() {
  // Filter featured services for landing page display
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

      {/* Social Proof and Performance Statistics */}
      <Suspense
        fallback={<div className="h-96 w-full animate-pulse bg-slate-50" />}
      >
        <HomeClientSections />
      </Suspense>

      {/* Brand Value Propositions */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* Professional Service Grid */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 space-y-4 text-center lg:text-left">
            <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
              โซลูชัน{" "}
              <span className="text-emerald-500">ที่ออกแบบมาเพื่อธุรกิจ</span>
            </h2>
            <p className="font-anuphan max-w-2xl text-lg leading-relaxed font-bold text-slate-500">
              ยกระดับรากฐานดิจิทัลสำหรับ SME และโรงงานอุตสาหกรรมโดยเฉพาะ
              เน้นความเสถียร ความปลอดภัย และประสิทธิภาพการปิดการขาย
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
                themeColor={service.themeColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Workflow */}
      <WorkProcess />

      {/* Insights and Strategic Content */}
      <section className="relative py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="font-prompt text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl">
                กลยุทธ์{" "}
                <span className="text-emerald-500">จากประสบการณ์ตรง</span>
              </h2>
              <p className="font-anuphan mt-4 text-lg font-bold text-slate-500">
                อัปเดตเทคนิคการทำเว็บไซต์และ Technical SEO มาตรฐานปี 2026
              </p>
            </div>
            <button className="text-sm font-bold text-emerald-600 hover:underline">
              ดูบทความทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Blog content mapping placeholder */}
            <BlogCard
              slug="seo-for-sme-2026"
              title="วิธีเพิ่มความได้เปรียบทางการแข่งขันด้วย SEO 2026"
              excerpt="เจาะลึกโครงสร้างเว็บไซต์ที่ช่วยให้ Google ค้นหาธุรกิจของคุณเจอเป็นเจ้าแรกในยุค AI Search..."
              date="2026-01-20"
              thumbnail="/images/blog/placeholder.webp"
            />
          </div>
        </div>
      </section>

      <CTASection />

      {/* Industrial Grade Footer Credits */}
      <footer className="py-12 text-center opacity-40">
        <p className="font-prompt text-[10px] font-black tracking-[0.5em] text-slate-400 uppercase">
          © {new Date().getFullYear()} {siteConfig.companyName} - Built with
          Next.js 16
        </p>
      </footer>
    </main>
  )
}
