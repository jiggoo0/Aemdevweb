/** @format */
import React from "react"
import { Metadata } from "next"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog"
import BlogSection from "@/components/BlogSection"
import { BookOpen, Terminal, Activity, Hash, Zap } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: `Insights & Knowledge | ${siteConfig.name}`,
  description:
    "รวบรวมเทคนิคการสร้างเว็บไซต์และการวางโครงสร้าง Digital Architecture ฉบับเจาะลึก เน้นการนำไปใช้จริงเพื่อเพิ่ม Conversion ให้ธุรกิจ SME ไทย",
  openGraph: {
    title: `Insights - ${siteConfig.name}`,
    description: "Technical insights for modern business owners",
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
    type: "website",
  },
}

export default function BlogPage() {
  const totalArticles = blogData.length.toString().padStart(2, "0")

  return (
    <main className="relative min-h-screen overflow-hidden bg-white font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA - ใช้ WebSite ชั่วคราวจนกว่าจะแก้ Types ในคอมโพเนนต์ */}
      <JsonLd
        type="WebSite"
        data={{
          name: `${siteConfig.name} Knowledge Hub`,
          description: "Technical insights and digital strategy for Thai SME",
          url: `${siteConfig.url}/blog`,
        }}
      />

      {/* ─── 🛠️ TECHNICAL BACKGROUND ─── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#0F172A 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        <header className="mb-20 border-b-[10px] border-[#0F172A] pb-16">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
            <div className="max-w-4xl space-y-8">
              <div className="inline-flex items-center gap-3 border-4 border-[#0F172A] bg-[#0F172A] px-5 py-2 shadow-[6px_6px_0px_0px_#F97316]">
                <Terminal size={16} className="text-[#F97316]" />
                <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  KNOWLEDGE_DATABASE / SRC_V{siteConfig.version}
                </span>
              </div>

              <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-8xl lg:text-9xl">
                Technical <br />
                <span className="text-[#1E3A8A] underline decoration-[#F97316] decoration-[10px] underline-offset-[8px] md:decoration-[16px] md:underline-offset-[12px]">
                  Insights.
                </span>
              </h1>

              <p className="max-w-2xl text-lg font-bold leading-relaxed text-slate-600 md:text-xl">
                เจาะลึกเบื้องหลังการออกแบบโครงสร้างเว็บที่
                <span className="text-[#0F172A]"> "ขายได้จริง" </span>
                เปลี่ยนความซับซ้อนทางเทคนิคให้เป็นกลยุทธ์ที่สร้างแต้มต่อให้ธุรกิจ
              </p>
            </div>

            <div className="hidden flex-col items-end gap-5 text-right sm:flex">
              <div className="flex gap-3">
                <div className="flex h-16 w-16 items-center justify-center border-4 border-[#0F172A] bg-white shadow-[8px_8px_0px_0px_#0F172A] transition-transform hover:-translate-y-1">
                  <BookOpen size={28} className="text-[#0F172A]" />
                </div>
                <div className="flex h-16 w-16 items-center justify-center border-4 border-[#0F172A] bg-[#1E3A8A] text-white shadow-[8px_8px_0px_0px_#0F172A] transition-transform hover:-translate-y-1">
                  <Activity size={28} className="animate-pulse" />
                </div>
              </div>
              <div className="font-mono text-[11px] font-black uppercase leading-relaxed text-[#0F172A]">
                <div>
                  <span className="text-[#F97316]">STATUS:</span> ACTIVE_SYNC
                </div>
                <div>
                  <span className="text-[#F97316]">TOTAL_ENTRIES:</span>{" "}
                  {totalArticles}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="relative min-h-[600px]">
          <div className="mb-16 flex items-center gap-6">
            <div className="flex h-10 w-10 items-center justify-center bg-[#F97316] text-white">
              <Hash size={20} strokeWidth={4} />
            </div>
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-[#0F172A]">
              Latest_Archives
            </h2>
            <div className="h-[4px] flex-1 bg-[#0F172A]/5" />
          </div>
          <BlogSection posts={blogData as BlogPost[]} />
        </section>

        <footer className="mt-32 border-[6px] border-[#0F172A] bg-[#0F172A] p-10 text-white shadow-[20px_20px_0px_0px_rgba(30,58,138,0.1)] md:p-20">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-8">
              <div className="inline-flex items-center gap-3 bg-[#F97316] px-4 py-1 text-[10px] font-black uppercase tracking-[0.4em] text-[#0F172A]">
                <Zap size={12} fill="currentColor" />
                Stay_Updated
              </div>
              <h3 className="font-heading text-4xl font-black uppercase leading-tight tracking-tighter md:text-6xl">
                Subscribe To <br />
                <span className="text-[#1E3A8A] brightness-150">
                  Technical_Feed.
                </span>
              </h3>
            </div>

            <div className="flex flex-col gap-8 lg:w-1/3">
              <div className="group relative border-b-4 border-slate-700 pb-2 transition-colors focus-within:border-[#F97316]">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Access_Point
                </span>
                <input
                  type="email"
                  placeholder="ENTER_YOUR_EMAIL"
                  className="w-full bg-transparent py-4 font-mono text-xl font-bold uppercase outline-none placeholder:text-slate-800"
                />
                <button className="absolute bottom-4 right-0 text-[#F97316] transition-transform hover:translate-x-2">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}

function ArrowRight() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
