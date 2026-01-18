/** @format */

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Metadata } from "next"
import {
  CheckCircle2,
  Heart,
  ShieldCheck,
  Zap,
  MessageCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react"

// 📦 Data & Config
import { siteConfig, constructMetadata } from "@/constants/site-config"

// 🧩 Components & UI
import { Button } from "@/components/ui/button"
import { JsonLd } from "@/components/seo/JsonLd"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

/**
 * 🔍 SEO Configuration
 */
export const metadata: Metadata = constructMetadata({
  title: "เกี่ยวกับนายเอ็ม - เบื้องหลังความซ่า",
  description:
    "รู้จักตัวตนของนายเอ็มซ่ามากส์ โปรแกรมเมอร์ผู้เชื่อว่าเว็บไซต์ต้องขายได้จริง ไม่ใช่แค่สวย พร้อมทีมงานคุณภาพที่ไม่ทิ้งงาน",
})

/**
 * 👨‍💻 AboutPage: Luminous Edition (Server Component)
 * Optimized for PageSpeed 90+ using Server Components & CSS Animations
 */
export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-32 pb-20 text-slate-50 selection:bg-aurora-cyan/30">
      {/* 🛠️ SEO Schema: AboutPage Profile */}
      <JsonLd
        type="Website" // หรือ ProfilePage ถ้ามี
        data={{
          "@type": "AboutPage",
          name: "เกี่ยวกับนายเอ็ม AEMDEVWEB",
          description: siteConfig.description,
          mainEntity: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
            jobTitle: "Fullstack Developer & Consultant",
            image: `${siteConfig.url}/images/showcase/project-01.webp`,
          },
        }}
      />

      {/* 🌌 Background Decor: Aurora Ambient */}
      <div className="aurora-bg top-0 left-1/4 h-[500px] w-[500px] opacity-[0.1] blur-[120px]" />
      <div className="aurora-bg bg-aurora-violet right-1/4 bottom-0 h-[600px] w-[600px] opacity-[0.05] blur-[150px]" />

      {/* 🌤️ 1. Hero Section: The Identity */}
      <section className="relative container mx-auto mb-32 px-4 text-center">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5" /> About AEMDEVWEB
          </div>
          <h1 className="font-prompt mb-8 text-5xl font-black tracking-tighter text-white uppercase italic md:text-8xl">
            เบื้องหลัง <br className="md:hidden" />
            <span className="text-aurora-cyan drop-shadow-luminous">
              ความซ่า
            </span>
          </h1>
          <p className="font-anuphan mx-auto max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            นายเอ็มเริ่มจากความเข้าใจว่า SME ไทย{" "}
            <span className="text-white italic">
              &quot;ต้องการเว็บที่ขายได้จริง ไม่ใช่แค่เว็บสวย&quot;
            </span>{" "}
            ผมจึงสร้างระบบที่จะเป็นเครื่องยนต์ถล่มยอดขายให้คุณครับ
          </p>
        </div>
      </section>

      {/* 🚀 2. Our Mission: Luminous Bento Grid */}
      <section className="container mx-auto mb-40 px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 fill-mode-both">
          {/* Card: เร็วและแรง */}
          <div className="glass-card group hover:border-aurora-cyan/30 rounded-[2.5rem] border-white/5 p-10 transition-all duration-500">
            <div className="bg-aurora-cyan/10 border-aurora-cyan/20 shadow-aurora-glow mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border transition-transform group-hover:-translate-y-2">
              <Zap className="text-aurora-cyan h-8 w-8" />
            </div>
            <h3 className="font-prompt mb-4 text-2xl font-black tracking-tight text-white uppercase">
              เร็วและแรง
            </h3>
            <p className="font-anuphan leading-relaxed font-medium text-slate-400">
              งานไวมากส์! เว็บไซต์ต้องโหลดเร็วเพื่อไม่ให้พลาดทุกโอกาสปิดการขาย
              เราใช้เทคโนโลยี <span className="text-white">Next.js 15+</span>{" "}
              เพื่อความแรงระดับสูงสุด
            </p>
          </div>

          {/* Card: จริงใจ ไม่ทิ้งงาน (Center Highlight) */}
          <div className="glass-card border-aurora-cyan/40 bg-aurora-cyan/5 shadow-luminous relative overflow-hidden rounded-[2.5rem] p-10 md:-translate-y-12">
            <div className="aurora-bg -top-10 -right-10 h-32 w-32 opacity-20" />
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-white/20">
              <ShieldCheck className="h-8 w-8 text-slate-950" />
            </div>
            <h3 className="font-prompt mb-4 text-2xl font-black tracking-tight text-white uppercase">
              จริงใจ <span className="text-aurora-cyan">ไม่ทิ้งงาน</span>
            </h3>
            <p className="font-anuphan leading-relaxed font-medium text-slate-300">
              หัวใจหลักคือความรับผิดชอบ นายเอ็มคุยง่ายเป็นกันเองเหมือนพี่น้อง
              ดูแลหลังการขายแบบที่คุณไม่ต้องกังวลว่าผมจะหายไปไหน
            </p>
          </div>

          {/* Card: เน้นผลลัพธ์ */}
          <div className="glass-card group hover:border-aurora-emerald/30 rounded-[2.5rem] border-white/5 p-10 transition-all duration-500">
            <div className="bg-aurora-emerald/10 border-aurora-emerald/20 shadow-aurora-glow mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border transition-transform group-hover:-translate-y-2">
              <Heart className="text-aurora-emerald h-8 w-8" />
            </div>
            <h3 className="font-prompt mb-4 text-2xl font-black tracking-tight text-white uppercase">
              เน้นผลลัพธ์
            </h3>
            <p className="font-anuphan leading-relaxed font-medium text-slate-400">
              สวยอย่างเดียวไม่พอ ต้อง{" "}
              <span className="text-white">&quot;ปิดการขายได้&quot;</span>{" "}
              นายเอ็มใส่ใจเรื่อง UX และปุ่ม CTA
              ที่สว่างโดดเด่นช่วยให้ลูกค้าทักคุณง่ายที่สุด
            </p>
          </div>
        </div>
      </section>

      {/* 👨‍💻 3. The Story: Glass Showcase */}
      <section className="relative border-y border-white/5 bg-white/[0.02] py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-20 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <div className="bg-aurora-cyan/20 absolute -inset-4 rounded-[3rem] opacity-50 blur-3xl" />
              <div className="relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 shadow-2xl">
                <Image
                  src="/images/showcase/project-01.webp"
                  alt="นายเอ็มซ่ามากส์"
                  fill
                  priority // ✅ Priority LCP
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="font-prompt mb-8 text-4xl leading-tight font-black tracking-tighter text-white uppercase md:text-6xl">
                คุยง่าย <span className="text-aurora-cyan">งานจบ</span> <br />
                ไม่ปวดหัว
              </h2>
              <div className="font-anuphan space-y-6 text-lg leading-relaxed font-medium text-slate-400">
                <p>
                  &quot;ผมเห็นลูกค้าหลายคนไปจ้างทำเว็บแล้วปวดหัว บางคนงานดอง
                  บางคนคุยไม่รู้เรื่อง
                  หรือบางคนทำเสร็จแล้วใช้งานยากจนต้องปล่อยร้าง&quot;
                </p>
                <p>
                  นั่นคือเหตุผลที่{" "}
                  <span className="decoration-aurora-cyan font-bold text-white underline decoration-2 underline-offset-4">
                    AEMDEVWEB
                  </span>{" "}
                  เกิดขึ้นมา เพราะผมอยากให้การทำเว็บเป็นเรื่องสนุก
                  และได้ผลลัพธ์ที่จับต้องได้จริง ผมดูแลเองทุกขั้นตอนครับ
                </p>
                <ul className="space-y-4 pt-6">
                  {[
                    "ประสบการณ์ทำเว็บ SME หลากหลายอุตสาหกรรม",
                    "เชี่ยวชาญการทำ Conversion Optimization",
                    "บริการแบบครบจบ: จดโดเมน ยันดูแลหลังขาย",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="font-prompt flex items-center gap-4 text-sm font-bold tracking-wide text-slate-200 uppercase"
                    >
                      <div className="bg-aurora-cyan/20 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                        <CheckCircle2 className="text-aurora-cyan h-4 w-4" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📢 4. Final CTA: Luminous Power Card */}
      <section className="container mx-auto mt-40 px-4">
        <div className="shadow-luminous relative overflow-hidden rounded-[4rem] border border-white/10 p-12 text-center md:p-24">
          <div className="aurora-bg inset-0 opacity-10" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-prompt mb-10 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-7xl">
              เชื่อใจให้นายเอ็มดูแล <br />
              <span className="text-aurora-cyan">ธุรกิจของคุณวันนี้</span>
            </h2>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Button
                variant="premium"
                size="lg"
                className="shadow-aurora-glow group h-20 px-12 text-xl"
                asChild
              >
                <Link href="/services">
                  เริ่มโปรเจกต์ของคุณ{" "}
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:border-aurora-cyan h-20 border-white/10 px-12 text-xl transition-all"
                asChild
              >
                <Link href={siteConfig.links.line} target="_blank">
                  <MessageCircle className="text-aurora-cyan mr-3 h-6 w-6" />{" "}
                  ทักภาษาพี่น้อง
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}
