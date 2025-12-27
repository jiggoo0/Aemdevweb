/** @format */
"use client"

import React, { useMemo, useCallback } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Zap, ChevronRight, Database, ShieldCheck } from "lucide-react" // ✅ ลบ Layout ออกเพื่อแก้ Warning

// ✅ Data Sources
import { servicesData } from "@/data/servicesData"
import { blogData } from "@/data/blog/allposts"

// ✅ Critical Components (โหลดทันทีเพื่อ LCP)
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports (โหลดเมื่อจำเป็น) ---
const ServicesSection = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-[600px] animate-pulse bg-slate-50" />,
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
   * ✅ Blog Data Normalization: ปรับ Format ข้อมูลให้พร้อมใช้งาน
   */
  const normalizePost = useCallback((post: any) => {
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
              role: "Technical Partner",
            }
          : post.author,
      readTime: post.readTime || "5 MIN READ",
    }
  }, [])

  const featuredPosts = useMemo(
    () => (blogData || []).slice(0, 4).map(normalizePost),
    [normalizePost]
  )

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white font-sans antialiased">
      {/* ─── 1. HERO AREA ─── */}
      <Hero
        badgeText="Industrial Web Architecture for Business"
        headline={
          <>
            BUILD{" "}
            <span className="text-[#F97316] underline decoration-slate-900/10 decoration-8 underline-offset-8">
              SMART
            </span>
            , <br />
            RELIABLE <span className="text-[#1E3A8A]">SOLUTIONS.</span>
          </>
        }
        description="เปลี่ยนหน้าเว็บธรรมดาให้เป็นวิศวกรรมการขายที่ทำงาน 24 ชั่วโมง เสถียร แม่นยำ และรองรับการขยายตัวของธุรกิจไทยโดยเฉพาะ"
      />

      {/* ─── 2. TRUST PROTOCOL (Social Proof) ─── */}
      <section className="relative z-20 -mt-10 overflow-hidden border-y-4 border-slate-900 bg-white shadow-xl">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex shrink-0 items-center gap-5 border-slate-900/10 lg:border-r lg:pr-12">
              <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-[#F97316] shadow-[4px_4px_0px_0px_#2563EB]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  System Status
                </span>
                <span className="text-sm font-black uppercase tracking-widest text-slate-900">
                  Verified Protocol 2025
                </span>
              </div>
            </div>

            <div className="w-full flex-1 overflow-hidden">
              <SocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. OUR SERVICES ─── */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] opacity-20 [background-size:20px_20px]" />
        <div className="relative z-10">
          <ServicesSection services={servicesData} />
        </div>
      </section>

      {/* ─── 4. KNOWLEDGE DATABASE (Blog) ─── */}
      <section
        id="blog"
        className="border-t-[6px] border-slate-900 bg-white py-24 lg:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b-4 border-slate-900 pb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                <Database size={12} />
                Knowledge Base_v1.0
              </div>
              <h2 className="font-heading text-5xl font-black uppercase leading-none tracking-tighter text-slate-900 md:text-7xl">
                Technical <span className="text-[#1E3A8A]">Insights.</span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-4 border-4 border-slate-900 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-900 shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              Access Database
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <BlogSection posts={featuredPosts} />
        </div>
      </section>

      {/* ─── 5. FAQS ─── */}
      <section className="relative border-y-[6px] border-slate-900 bg-slate-50 py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center">
            <h2 className="font-heading text-5xl font-black uppercase tracking-tighter text-slate-900 md:text-7xl">
              FAQ<span className="text-[#F97316]">S</span>
            </h2>
            <div className="mx-auto mt-6 h-2 w-24 bg-[#1E3A8A]" />
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              Technical Clearances & Business Logic
            </p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ─── 6. FINAL ARCHITECTURE (CTA) ─── */}
      <section id="contact" className="container mx-auto px-6 py-24 lg:py-40">
        <div className="relative border-[8px] border-slate-900 bg-white p-8 shadow-[20px_20px_0px_0px_#1E3A8A] md:p-20">
          <div className="absolute -left-2 -top-2 h-12 w-12 border-l-[12px] border-t-[12px] border-[#F97316]" />
          <div className="absolute -bottom-2 -right-2 h-12 w-12 border-b-[12px] border-r-[12px] border-[#F97316]" />

          <div className="relative z-10">
            <CTA
              title="พร้อมวางรากฐานความสำเร็จให้ธุรกิจหรือยัง?"
              subtitle="เราไม่เพียงแค่ทำเว็บไซต์ แต่เราออกแบบเครื่องมือทำเงินที่ทรงพลังที่สุดให้คุณ"
            />

            <div className="mt-16 flex flex-col items-center justify-center gap-10 border-t-4 border-dashed border-slate-100 pt-16 lg:flex-row">
              <div className="group relative border-4 border-slate-900 bg-white p-3 transition-transform hover:-rotate-3">
                <Image
                  src="/images/line-qr.png"
                  alt="Line OA QR"
                  width={140}
                  height={140}
                  className="grayscale transition-all group-hover:grayscale-0"
                />
                <div className="absolute -right-4 -top-4 bg-[#F97316] p-2 text-white shadow-md">
                  <Zap size={16} fill="currentColor" />
                </div>
              </div>

              <div className="text-center lg:text-left">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                  Direct Line Support
                </p>
                <h4 className="mt-2 text-3xl font-black text-slate-900">
                  @aemdevweb
                </h4>
                <p className="mt-4 max-w-xs text-sm font-bold leading-relaxed text-slate-500">
                  สแกนเพื่อรับคำปรึกษาเบื้องต้นและประเมินงบประมาณโครงการโดยวิศวกรผู้เชี่ยวชาญ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
