/** @format */
"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import { ArrowRight, Layout, Zap, Smartphone, ShieldCheck } from "lucide-react"

// 🟢 Import ข้อมูลและส่วนประกอบหลัก
import { blogData } from "@/data/blogData"
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"

// --- 🛠️ Optimized Dynamic Imports (โหลดเฉพาะเมื่อจำเป็น) ---
const Services = dynamic(() => import("@/components/Services"), { ssr: true })
const PriceTable = dynamic(() => import("@/components/PriceTable"), { ssr: true })
const BlogSection = dynamic(() => import("@/components/BlogSection"), { ssr: true })
const FAQSection = dynamic(() => import("@/components/FAQSection"), { ssr: true })
const CTA = dynamic(() => import("@/components/CTA"), { ssr: true })

export default function HomePage() {
  /**
   * ✅ การจัดการข้อมูล Blog ให้ตรงตาม Interface (Normalization)
   */
  const featuredPosts = blogData.slice(0, 4).map((post: any) => {
    const getString = (val: any) => {
      if (!val) return ""
      return typeof val === "string" ? val : val.th || val.en || ""
    }

    return {
      ...post,
      title: getString(post.title),
      excerpt: getString(post.excerpt || post.description),
      author: typeof post.author === "string" 
        ? { name: post.author, avatar: "/images/profile/default-avatar.webp", role: "Team Member" }
        : post.author || { name: "aemdevweb", avatar: "/images/profile/default-avatar.webp", role: "Admin" },
      readTime: post.readTime || "5 min read",
    }
  })

  return (
    <main className="flex w-full flex-col overflow-x-hidden bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ─── 1. HERO AREA ─── */}
      <Hero
        badgeText="Digital Architecture for Business"
        headline={
          <div className="leading-[0.9] tracking-tighter">
            BUILD <span className="italic text-blue-600">FASTER</span>,<br />
            <span className="text-slate-900">SELL BETTER.</span>
          </div>
        }
      />

      {/* ─── 2. SOCIAL PROOF (Floating Badge Style) ─── */}
      <div className="relative z-20 -mt-10 border-y-4 border-slate-900 bg-white shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]">
        <div className="container mx-auto py-8">
          <SocialProof />
        </div>
      </div>

      {/* ─── 3. CORE SERVICES (Why Us) ─── */}
      <section id="services" className="bg-slate-900 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-12 w-3 bg-blue-600" />
            <h2 className="text-4xl font-black uppercase italic tracking-tighter md:text-6xl">
              WHY <span className="text-blue-500">AEM DEV WEB?</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Zap />, title: "Ultra Fast", desc: "คะแนน Core Web Vitals เต็ม 100" },
              { icon: <Layout />, title: "Customizable", desc: "ปรับแต่งสีและเนื้อหาได้อิสระ" },
              { icon: <Smartphone />, title: "Mobile First", desc: "แสดงผลสวยงามทุกหน้าจอ" },
              { icon: <ShieldCheck />, title: "SEO Ready", desc: "โครงสร้างรองรับการทำอันดับ" },
            ].map((feature, i) => (
              <div key={i} className="group border-2 border-white/10 p-8 transition-all hover:border-blue-500 hover:bg-white/5">
                <div className="mb-4 text-blue-400 transition-transform group-hover:scale-110">{feature.icon}</div>
                <h3 className="mb-2 text-xl font-black uppercase tracking-tight">{feature.title}</h3>
                <p className="font-medium text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PRICE STRUCTURE ─── */}
      <section id="pricing" className="border-t-4 border-slate-900 bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 border-l-[10px] border-blue-600 pl-8">
            <h2 className="text-5xl font-black uppercase italic leading-none tracking-tighter text-slate-900 md:text-8xl">
              PRICE <span className="text-blue-600">STRUCTURE</span>
            </h2>
            <p className="mt-6 max-w-xl text-xl font-bold italic text-slate-500">
              ราคาที่ชัดเจน เพื่อการตัดสินใจที่ง่ายขึ้น
            </p>
          </div>
          <PriceTable />
        </div>
      </section>

      {/* ─── 5. BLOG & KNOWLEDGE ─── */}
      <section id="blog" className="border-t-4 border-slate-900 bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-6xl">
              Latest <span className="text-blue-600">Insights</span>
            </h2>
            <Link href="/blog" className="hidden font-black uppercase underline decoration-blue-600 underline-offset-8 md:block">
              View All Posts
            </Link>
          </div>
          <BlogSection posts={featuredPosts as any} />
        </div>
      </section>

      {/* ─── 6. FAQ ─── */}
      <section className="border-y-4 border-slate-900 bg-slate-50 py-24 md:py-32">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-slate-900 md:text-7xl">
              FAQ<span className="text-blue-600">S</span>
            </h2>
          </div>
          <FAQSection />
        </div>
      </section>

      {/* ─── 7. FINAL CTA ─── */}
      <section id="contact" className="container mx-auto px-6 py-32">
        <div className="border-4 border-slate-900 bg-white p-12 shadow-[12px_12px_0px_0px_rgba(37,99,235,1)]">
          <CTA
            title="พร้อมจะขยายธุรกิจของคุณ ไปพร้อมกับเราหรือยังครับ?"
            subtitle="คุยภาษาธุรกิจที่เข้าใจง่าย พร้อมจบงานตามกำหนด"
          />
        </div>
        <div className="mt-16 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            Aemdevweb Digital Architecture Ecosystem
          </p>
        </div>
      </section>
    </main>
  )
}
