/** @format */
import React from "react"
import { Metadata } from "next"
import { blogData } from "@/data/blog/allposts"
import { BlogPost } from "@/types/blog" // ✅ นำเข้า Type เพื่อความแม่นยำ
import BlogSection from "@/components/BlogSection"
import { BookOpen, Terminal, Activity, Hash } from "lucide-react"
import JsonLd from "@/components/shared/JsonLd"
import { siteConfig } from "@/config/siteConfig"

export const metadata: Metadata = {
  title: `Insights & Knowledge | ${siteConfig.name}`,
  description:
    "รวบรวมเทคนิคการสร้างเว็บไซต์และการวางโครงสร้าง Digital Architecture ฉบับเจาะลึก เน้นการนำไปใช้จริงเพื่อเพิ่ม Conversion ให้ธุรกิจ SME ไทย",
  openGraph: {
    title: `Insights - ${siteConfig.name}`,
    description: "Technical insights for modern business owners",
    images: [`${siteConfig.url}${siteConfig.ogImage}`], // ✅ ใช้จาก siteConfig โดยตรง
    type: "website",
  },
}

export default function BlogPage() {
  // คำนวณ Metadata สำหรับ System Status Display
  const totalArticles = blogData.length.toString().padStart(2, "0")

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="CollectionPage"
        data={{
          name: `${siteConfig.name} Knowledge Hub`,
          description: "Technical insights and digital strategy for Thai SME",
          url: `${siteConfig.url}/blog`,
        }}
      />

      {/* ─── 🛠️ TECHNICAL BACKGROUND DECOR ─── */}
      <div
        className="bg-grid-pattern absolute inset-0 -z-10 opacity-[0.03]"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-6 py-24 lg:py-40">
        {/* ─── 01. INDUSTRIAL HEADER ─── */}
        <header className="mb-20 border-b-[10px] border-[#0F172A] pb-16">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
            <div className="max-w-3xl space-y-8">
              {/* Technical Badge */}
              <div className="inline-flex items-center gap-3 border-2 border-[#0F172A] bg-[#0F172A] px-5 py-2 shadow-[4px_4px_0px_0px_#F97316]">
                <Terminal size={16} className="text-[#F97316]" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
                  KNOWLEDGE_DATABASE / LOG_V{siteConfig.version}
                </span>
              </div>

              <h1 className="font-heading text-7xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-9xl">
                Technical <br />
                <span className="text-[#1E3A8A] underline decoration-[#F97316] decoration-[12px] underline-offset-[12px]">
                  Insights.
                </span>
              </h1>

              <p className="max-w-xl text-lg font-bold leading-relaxed text-slate-500 md:text-xl">
                เจาะลึกเบื้องหลังการออกแบบโครงสร้างเว็บที่
                &quot;ขายได้จริง&quot; เปลี่ยน Technical Debt
                ให้เป็นกลยุทธ์ที่สร้างแต้มต่อให้ธุรกิจ
              </p>
            </div>

            {/* System Status Display (Desktop) */}
            <div className="hidden flex-col items-end gap-4 text-right md:flex">
              <div className="flex gap-2">
                <div className="flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-white shadow-[6px_6px_0px_0px_#0F172A]">
                  <BookOpen size={24} className="text-[#0F172A]" />
                </div>
                <div className="flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-[#1E3A8A] text-white shadow-[6px_6px_0px_0px_#0F172A]">
                  <Activity size={24} />
                </div>
              </div>
              <div className="font-mono text-[10px] font-black uppercase leading-tight text-[#0F172A]">
                <span className="text-[#F97316]">STATUS:</span> ACTIVE_SYNC{" "}
                <br />
                <span className="text-[#F97316]">TOTAL_ENTRIES:</span>{" "}
                {totalArticles} <br />
                <span className="text-[#F97316]">LAST_PUSH:</span> WEEKLY_SUBMIT
              </div>
            </div>
          </div>
        </header>

        {/* ─── 02. CONTENT GRID ─── */}
        <section className="relative min-h-[600px]">
          <div className="mb-12 flex items-center gap-4">
            <Hash className="text-[#F97316]" size={20} strokeWidth={3} />
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-[#0F172A]">
              Latest_Archives
            </h2>
            <div className="h-[2px] flex-1 bg-slate-200" />
          </div>

          {/* ✅ ส่งข้อมูลพร้อมระบุ Type ให้ชัดเจน */}
          <BlogSection posts={blogData as BlogPost[]} />
        </section>

        {/* ─── 03. FOOTER PROTOCOL ─── */}
        <footer className="mt-32 border-t-4 border-slate-900 bg-[#0F172A] p-10 text-white md:p-16">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6">
              <div className="inline-block border-b-2 border-[#F97316] pb-2">
                <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F97316]">
                  Subscription_Protocol
                </h3>
              </div>
              <p className="max-w-md text-xl font-bold leading-relaxed text-slate-300">
                ไม่พลาดทุก Technical Insight ส่งตรงถึงหน้ากระดานงานของคุณ
                เพื่อการตัดสินใจทางธุรกิจที่แม่นยำขึ้น
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 border-l-4 border-[#1E3A8A] pl-8 md:flex-row md:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F97316]/20">
                <div className="h-3 w-3 animate-pulse rounded-full bg-[#F97316]" />
              </div>
              <span className="font-mono text-xs font-bold tracking-widest text-slate-400">
                AI System is monitoring <br />
                industry trends in real-time.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
