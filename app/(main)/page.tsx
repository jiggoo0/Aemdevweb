/** @format */
"use client"

import React, { useMemo, useCallback } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Zap, ChevronRight, Database, ShieldCheck } from "lucide-react"

// ✅ Data Sources
import { servicesData } from "@/data/servicesData"
import { blogData } from "@/data/blog/allposts"

// ✅ Critical Components (โหลดทันทีเพื่อให้หน้าเว็บแสดงผลไวที่สุด)
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports (โหลดเมื่อเลื่อนมาถึงเพื่อประหยัดทรัพยากร) ---
const ServicesSection = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-[600px] animate-pulse bg-slate-50" />,
  ssr: true,
})
const BlogSection = dynamic(() => import("@/components/BlogSection"), {
  ssr: true,
})
// ปิด ssr สำหรับ FAQSection เพื่อลดปัญหา ID mismatch จาก Radix UI ใน Next.js 15
const FAQSection = dynamic(() => import("@/components/FAQSection"), {
  ssr: false,
  loading: () => <div className="h-[400px] animate-pulse bg-slate-50" />,
})
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true })

export default function HomePage() {
  /**
   * ✅ Blog Data Normalization: เตรียมข้อมูลบทความให้พร้อมแสดงผล
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
      readTime: post.readTime || "5 นาที",
    }
  }, [])

  const featuredPosts = useMemo(
    () => (blogData || []).slice(0, 4).map(normalizePost),
    [normalizePost]
  )

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white font-sans antialiased">
      {/* ─── 1. ส่วนต้อนรับ (HERO AREA) ─── */}
      <Hero
        badgeText="บริการรับทำเว็บไซต์สำหรับบริษัท และ หจก. ทั่วไทย"
        headline={
          <>
            สร้างเว็บ <br />
            <span className="text-[#F97316] underline decoration-slate-900/10 decoration-8 underline-offset-8">
              ที่ปิดการขาย
            </span>
            <br />
            <span className="text-[#1E3A8A]">ให้ธุรกิจของคุณ</span>
          </>
        }
        description="เปลี่ยนหน้าเว็บธรรมดา ให้เป็นพนักงานขายดิจิทัลที่ทำงาน 24 ชั่วโมง ช่วยให้ธุรกิจของคุณดูน่าเชื่อถือ โหลดไว และรองรับลูกค้าผ่านมือถือได้ดีเยี่ยม"
      />

      {/* ─── 2. ยืนยันความมั่นใจ (TRUST PROTOCOL) ─── */}
      <section className="relative z-20 -mt-10 overflow-hidden border-y-4 border-slate-900 bg-white shadow-xl">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="flex shrink-0 items-center gap-5 border-slate-900/10 lg:border-r lg:pr-12">
              <div className="flex h-12 w-12 items-center justify-center bg-slate-900 text-[#F97316] shadow-[4px_4px_0px_0px_#2563EB]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                  Business Trust
                </span>
                <span className="text-sm font-black uppercase tracking-widest text-slate-900">
                  มาตรฐานความปลอดภัย 2026
                </span>
              </div>
            </div>

            <div className="w-full flex-1 overflow-hidden">
              <SocialProof />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. บริการของเรา (OUR SERVICES) ─── */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] opacity-20 [background-size:20px_20px]" />
        <div className="relative z-10">
          <ServicesSection services={servicesData} />
        </div>
      </section>

      {/* ─── 4. คลังความรู้ธุรกิจ (KNOWLEDGE BASE) ─── */}
      <section
        id="blog"
        className="border-t-[6px] border-slate-900 bg-white py-24 lg:py-32"
      >
        <div className="container mx-auto px-6">
          <div className="mb-20 flex flex-col items-start justify-between gap-8 border-b-4 border-slate-900 pb-12 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-3 bg-[#1E3A8A] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                <Database size={12} />
                Knowledge Base v2.0
              </div>
              <h2 className="font-heading text-5xl font-black uppercase leading-none tracking-tighter text-slate-900 md:text-7xl">
                สาระน่ารู้ <br />
                <span className="text-[#1E3A8A]">เพื่อ SME.</span>
              </h2>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-4 border-4 border-slate-900 bg-white px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-slate-900 shadow-[6px_6px_0px_0px_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            >
              อ่านบทความทั้งหมด
              <ChevronRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <BlogSection posts={featuredPosts} />
        </div>
      </section>

      {/* ─── 5. คำถามที่พบบ่อย (FAQS) ─── */}
      <section className="relative border-y-[6px] border-slate-900 bg-slate-50 py-24 lg:py-32">
        <div className="container relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-20 text-center">
            <h2 className="font-heading text-5xl font-black uppercase tracking-tighter text-slate-900 md:text-7xl">
              คำถาม<span className="text-[#F97316]">ที่พบบ่อย</span>
            </h2>
            <div className="mx-auto mt-6 h-2 w-24 bg-[#1E3A8A]" />
            <p className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-400">
              ทุกข้อสงสัยเรื่องเว็บไซต์และการทำธุรกิจออนไลน์
            </p>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ─── 6. ส่วนปิดการขาย (FINAL CTA) ─── */}
      <section id="contact" className="container mx-auto px-6 py-24 lg:py-40">
        <div className="relative border-[8px] border-slate-900 bg-white p-8 shadow-[20px_20px_0px_0px_#1E3A8A] md:p-20">
          <div className="absolute -left-2 -top-2 h-12 w-12 border-l-[12px] border-t-[12px] border-[#F97316]" />
          <div className="absolute -bottom-2 -right-2 h-12 w-12 border-b-[12px] border-r-[12px] border-[#F97316]" />

          <div className="relative z-10">
            <CTA
              title="พร้อมเริ่มโปรเจกต์กับเราหรือยัง?"
              subtitle="ให้เราช่วยสร้างหน้าบ้านออนไลน์ที่มั่นคงและทรงพลัง เพื่อการเติบโตของธุรกิจคุณในระยะยาว"
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
                  ช่องทางปรึกษาด่วน
                </p>
                <h4 className="mt-2 text-3xl font-black text-slate-900">
                  @aemdevweb
                </h4>
                <p className="mt-4 max-w-xs text-sm font-bold leading-relaxed text-slate-500">
                  สแกนเพื่อคุยกับเราโดยตรง รับคำแนะนำเบื้องต้นและประเมินราคาฟรี
                  โดยทีมงานผู้เชี่ยวชาญ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
