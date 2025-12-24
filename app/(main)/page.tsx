/** @format */
"use client"

import React, { useMemo } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { ArrowRight } from "lucide-react"

// ✅ Import ข้อมูลบริการเพื่อส่งให้ ServicesSection
import { servicesData } from "@/data/servicesData"
// ✅ Path ข้อมูล Blog
import { blogData } from "@/data/blog/allposts"

import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports ---
// หมายเหตุ: ServicesSection ต้องการรับ props 'services' ตามที่นิยามไว้ใน components/Services.tsx
const ServicesSection = dynamic(() => import("@/components/Services"), {
  ssr: true,
})
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: true,
})
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: true,
})
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true })

export default function HomePage() {
  /**
   * ✅ Normalization Logic สำหรับ Blog
   * ดึงข้อมูลจาก allposts มากรองเฉพาะบทความล่าสุด
   */
  const featuredPosts = useMemo(() => {
    if (!blogData) return []

    return blogData.slice(0, 4).map((post: any) => {
      const getString = (val: any) => val?.th || val?.en || val || ""
      return {
        ...post,
        title: getString(post.title),
        excerpt: getString(post.excerpt || post.description),
        author:
          typeof post.author === "string"
            ? {
                name: post.author,
                avatar: "/images/profile/default-avatar.webp",
                role: "Team Member",
              }
            : post.author,
        readTime: post.readTime || "5 min read",
      }
    })
  }, [])

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white selection:bg-blue-600 selection:text-white">
      {/* ─── 1. HERO AREA ─── */}
      <Hero
        badgeText="Digital Architecture for Business"
        headline={
          <div className="leading-[0.85] tracking-tighter">
            BUILD{" "}
            <span className="italic text-blue-600 underline decoration-blue-600/20 underline-offset-8">
              FASTER
            </span>
            ,<br />
            <span className="text-slate-900">SELL BETTER.</span>
          </div>
        }
      />

      {/* ─── 2. SOCIAL PROOF ─── */}
      <div className="relative z-20 -mt-12 border-y-4 border-slate-900 bg-white shadow-[0px_10px_0px_0px_rgba(15,23,42,1)]">
        <div className="container mx-auto px-6 py-10">
          <SocialProof />
        </div>
      </div>

      {/* ─── 3. OUR SERVICES ─── */}
      {/* ✅ แก้ไข Error TS2769: ส่งข้อมูล services เข้าไปใน Component */}
      <ServicesSection services={servicesData} />

      {/* ─── 4. BLOG & KNOWLEDGE ─── */}
      <section id="blog" className="border-t-4 border-slate-900 bg-white py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16 flex items-end justify-between border-b-2 border-slate-100 pb-8">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 md:text-7xl">
              Latest <span className="italic text-blue-600">Insights</span>
            </h2>
            <Link
              href="/blog"
              className="group hidden items-center gap-3 font-black uppercase tracking-widest text-slate-900 transition-colors hover:text-blue-600 md:flex"
            >
              View All{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          <BlogSection posts={featuredPosts as any} />
        </div>
      </section>

      {/* ─── 5. FAQS ─── */}
      <section className="border-y-4 border-slate-900 bg-slate-50 py-24">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 md:text-7xl">
              FAQ<span className="text-blue-600">S</span>
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ─── 6. FINAL CTA ─── */}
      <section id="contact" className="container mx-auto px-6 py-32">
        <div className="relative border-4 border-slate-900 bg-white p-8 shadow-[20px_20px_0px_0px_rgba(37,99,235,1)] md:p-20">
          <CTA
            title="พร้อมจะขยายธุรกิจของคุณ ไปพร้อมกับเราหรือยังครับ?"
            subtitle="คุยภาษาธุรกิจที่เข้าใจง่าย พร้อมจบงานตามกำหนดการที่วางไว้"
          />
        </div>
      </section>
    </main>
  )
}
