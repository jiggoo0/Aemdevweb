/** @format */

import React, { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

// 📂 ข้อมูลตัวตนและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { services } from "@/constants/services-data"
import { JsonLd } from "@/components/seo/JsonLd"

// 🧩 ส่วนประกอบหน้าเว็บที่เน้นความเร็ว (LCP Optimized)
import Hero from "@/components/landing/Hero"

/**
 * 🚀 ระบบโหลดคอมโพเนนต์แบบอัจฉริยะ (Dynamic Loading)
 * ช่วยให้หน้าเว็บเปิดไวขึ้นโดยโหลดส่วนที่จำเป็นก่อน
 */
const HomeClientSections = dynamic(
  () => import("@/components/landing/HomeClientSections"),
  {
    ssr: true,
    loading: () => <div className="h-40 w-full animate-pulse bg-slate-50" />,
  }
)

const ValueProp = dynamic(() => import("@/components/landing/ValueProp"))
const ServiceCard = dynamic(() => import("@/components/shared/ServiceCard"))
const BlogCard = dynamic(() => import("@/components/shared/BlogCard"))
const WorkProcess = dynamic(
  () => import("@/components/sales-engine/WorkProcess")
)
const CTASection = dynamic(() => import("@/components/landing/CTASection"))

/**
 * 🎯 การตั้งค่า SEO รายหน้า (Metadata)
 */
export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
}

/**
 * 🧬 HomePage — "เปลี่ยนเว็บให้เป็นพนักงานขายที่เก่งที่สุด"
 */
export default function HomePage() {
  // ดึงข้อมูลบริการเฉพาะกลุ่มที่ต้องการโชว์หน้าแรก
  const featuredServices = services.filter((s) =>
    ["sme-speed-launch", "corporate-pro", "industrial-enterprise"].includes(
      s.id
    )
  )

  return (
    <main className="relative min-h-screen bg-white antialiased selection:bg-emerald-500/20">
      {/* 🔎 บอก Google ว่าเว็บนี้คือใครและทำอะไร */}
      <JsonLd
        type="WebSite"
        data={{
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
          author: { "@type": "Person", name: "นายเอ็มซ่ามากส์" },
        }}
      />

      {/* 1️⃣ ส่วนหัวหน้าเว็บ (Hero): ความประทับใจแรกเมื่อลูกค้าคลิกเข้ามา */}
      <Hero />

      {/* 2️⃣ ความไว้วางใจ (Social Proof): โลโก้ลูกค้าและรีวิว */}
      <section className="relative border-y border-slate-50 bg-white">
        <Suspense
          fallback={<div className="h-40 w-full animate-pulse bg-slate-50" />}
        >
          <HomeClientSections />
        </Suspense>
      </section>

      {/* 3️⃣ จุดขาย (Value Prop): ทำไมต้องทำเว็บกับผม? */}
      <section className="relative py-24 lg:py-32">
        <ValueProp />
      </section>

      {/* 🛠️ 4️⃣ แพ็กเกจบริการ (Services): เลือกที่ใช่สำหรับธุรกิจคุณ */}
      <section className="relative bg-slate-50/50 py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="font-prompt text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
              บริการ <span className="text-emerald-500">ที่ผมเตรียมไว้ให้</span>
            </h2>
            <p className="font-anuphan mt-4 max-w-2xl text-lg font-bold text-slate-500">
              ไม่ว่าคุณจะเป็นเจ้าของกิจการ SME หรือเจ้าของโรงงาน
              ผมมีโซลูชันที่ช่วยให้ธุรกิจของคุณดูดีและหาเงินได้จริง
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.priceValue}
                slug={service.slug}
                features={service.features.slice(0, 3)} // โชว์แค่ 3 ฟีเจอร์หลัก
                isPopular={service.highlight}
                themeColor={service.themeColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ ขั้นตอนการทำงาน (Workflow): ทำงานกับผม ง่ายและไว */}
      <section className="relative bg-slate-950 py-24 lg:py-32">
        <WorkProcess />
      </section>

      {/* 📚 6️⃣ บทความน่ารู้ (Blog): แชร์เทคนิคการตลาดออนไลน์ */}
      <section className="relative py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="font-prompt text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
              เทคนิค <span className="text-emerald-500">จากประสบการณ์จริง</span>
            </h2>
            <p className="font-anuphan mt-4 text-lg font-bold text-slate-500">
              กลยุทธ์ทำเว็บและดันอันดับ Google
              ที่ผมสรุปมาให้เจ้าของธุรกิจโดยเฉพาะ
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <BlogCard
              slug="seo-for-sme-2026"
              title="วิธีดันอันดับ Google 2026 สำหรับธุรกิจ SME"
              excerpt="แค่มีเว็บยังไม่พอ ทำยังไงให้ลูกค้าค้นหาธุรกิจของคุณเจอเป็นเจ้าแรก..."
              date="2026-01-20"
              thumbnail="/images/blog/project-01.webp"
            />
            <BlogCard
              slug="facebook-ads-vs-website"
              title="ยิงแอด FB หรือทำเว็บดี? แบบไหนปิดการขายไวกว่ากัน"
              excerpt="เจาะลึกจากเคสจริงที่ผมดูแลลูกค้ามา กว่าจะรู้ตัวเงินก็หายไปเยอะแล้ว..."
              date="2026-01-18"
              thumbnail="/images/blog/project-01.webp"
            />
            <BlogCard
              slug="unlink-th-case-study"
              title="เบื้องหลังความสำเร็จของเว็บ Unlink TH"
              excerpt="จากเว็บโหลดช้าสู่เว็บที่ปิดการขายได้ทุกวัน เขาทำกันยังไง?"
              date="2026-01-15"
              thumbnail="/images/blog/project-01.webp"
            />
          </div>
        </div>
      </section>

      {/* 7️⃣ ส่วนปิดการขาย (CTA): ทักมาคุยกับผมได้เลย */}
      <section className="relative py-24 lg:py-40">
        <CTASection />
      </section>

      {/* 📍 ส่วนท้ายสุด (Specialist Branding) */}
      <footer className="container mx-auto px-4 pb-12 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Managed & Build by นายเอ็มซ่ามากส์ v2026 — Next.js 16 High-Performance
        </p>
      </footer>
    </main>
  )
}
