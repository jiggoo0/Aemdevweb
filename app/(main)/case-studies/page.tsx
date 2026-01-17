/** @format */

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

// ✅ Fixed: Removed unused imports (CheckCircle2, TrendingUp, Sparkles, Rocket)
import { Trophy, Zap, ArrowRight } from "lucide-react"

// ✅ Components & UI
// ✅ Fixed: Removed unused LineLeadForm import
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

/**
 * 🔍 SEO Metadata
 */
export const metadata: Metadata = {
  title: "เบื้องหลัง Unlink-TH | เว็บไซต์ที่โหลดเร็วที่สุดในปี 2026",
  description:
    "เจาะลึกเบื้องหลังการสร้างเว็บไซต์ www.unlink-th.com ด้วย Next.js 15 และเทคนิค Technical SEO ขั้นสูง",
  openGraph: {
    images: ["/images/showcase/unlink-th.webp"],
  },
}

/**
 * 🚀 Case Study Page: Unlink-TH Engine
 */
export default function UnlinkCaseStudyPage() {
  return (
    <main className="selection:bg-aurora-cyan/30 relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 🌌 1. HERO: Luminous Identity */}
      <section className="relative pt-40 pb-24 text-center">
        {/* Background Decor */}
        <div className="aurora-bg top-0 left-1/2 h-[700px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-aurora-cyan shadow-aurora-glow mb-8 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[10px] font-black tracking-[0.3em] uppercase backdrop-blur-xl">
            <Trophy className="h-4 w-4" />
            Flagship Project: Unlink-TH Engine
          </div>

          <h1 className="font-prompt mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl">
            เราทำเว็บให้ตัวเอง <br />
            <span className="text-aurora-cyan drop-shadow-luminous">
              เหมือนที่ทำให้ลูกค้า
            </span>
          </h1>

          <p className="font-anuphan mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            นี่ไม่ใช่แค่ Portfolio แต่คือบทพิสูจน์ว่าทำไม{" "}
            <span className="text-white italic">"ความเร็ว"</span> และ{" "}
            <span className="text-white italic">"โครงสร้างที่ถูกต้อง"</span>{" "}
            ถึงเป็นหัวใจสำคัญของการปิดการขายในปี 2026
          </p>

          <div className="flex justify-center">
            <Button
              variant="premium"
              size="lg"
              className="shadow-aurora-glow group h-20 px-12 text-xl"
              asChild
            >
              <Link href="/contact">
                อยากได้เว็บแรงๆ แบบนี้{" "}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 📊 2. STATS BAR: Luminous Impact */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16 backdrop-blur-xl">
        <ImpactStats />
      </section>

      {/* 🛠️ 3. PROBLEM & SOLUTION: Technical Power */}
      <section className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image Side: PageSpeed Score */}
          <div className="group relative">
            <div className="bg-aurora-cyan/20 absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl transition duration-1000 group-hover:opacity-60" />
            <div className="shadow-luminous relative aspect-square overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900">
              <Image
                src="/images/showcase/unlink-th.webp"
                alt="Unlink-TH Performance Score"
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
              <div className="glass-card border-aurora-emerald/40 shadow-aurora-glow absolute right-10 bottom-10 scale-110 rounded-[2rem] p-8 text-center">
                <div className="font-prompt mb-2 text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  Google PageSpeed
                </div>
                <div className="font-prompt text-aurora-emerald text-6xl leading-none font-black tracking-tighter italic">
                  100
                </div>
              </div>
            </div>
          </div>

          {/* Content Side: Technical Specs */}
          <div className="space-y-10">
            <div className="space-y-6">
              <Badge
                variant="luminous"
                className="px-4 py-1 tracking-widest uppercase"
              >
                Technical Excellence
              </Badge>
              <h2 className="font-prompt text-4xl leading-tight font-black tracking-tighter text-white uppercase md:text-5xl">
                ทำไมต้องเขียนใหม่ <br />
                ด้วย <span className="text-aurora-cyan">Next.js 15?</span>
              </h2>
              <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400 md:text-xl">
                เป้าหมายของเราคือการสร้างมาตรฐานใหม่{" "}
                <span className="text-white italic">"กดปุ๊บ มาปั๊บ"</span>{" "}
                เพื่อลดอัตราการกดออกของลูกค้าที่ใจร้อนขึ้นทุกวัน
              </p>
            </div>

            <div className="space-y-4">
              {[
                "ใช้ React Server Components (RSC) ลด JavaScript ฝั่ง Client",
                "ทำ Image Optimization อัตโนมัติด้วย Next/Image Engine",
                "โครงสร้าง Technical SEO 100% (JSON-LD, Semantic HTML)",
                "Global Edge Deploy: เร็วแรงทั่วโลกผ่าน Vercel Infrastructure",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="hover:border-aurora-cyan/30 group flex gap-5 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all"
                >
                  <div className="bg-aurora-cyan/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                    <Zap className="text-aurora-cyan h-5 w-5 transition-transform group-hover:scale-125" />
                  </div>
                  <span className="font-anuphan leading-relaxed font-bold text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 4. BUSINESS IMPACT: Result Cards */}
      <section className="relative border-t border-white/5 bg-white/[0.01] py-32">
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-prompt mb-20 text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
            ผลลัพธ์ทางธุรกิจ <br />
            <span className="text-aurora-cyan">ที่จับต้องได้</span>
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="glass-card hover:border-aurora-cyan/30 rounded-[2.5rem] border-white/5 p-12 transition-all duration-500">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                3X
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                จำนวน Leads เพิ่มขึ้นต่อวัน
              </div>
            </div>

            <div className="glass-card border-aurora-emerald/20 bg-aurora-emerald/5 shadow-luminous rounded-[2.5rem] p-12">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                0.8s
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                เวลาโหลดเฉลี่ย (LCP)
              </div>
            </div>

            <div className="glass-card hover:border-aurora-violet/30 rounded-[2.5rem] border-white/5 p-12 transition-all duration-500">
              <div className="font-prompt mb-4 text-6xl font-black tracking-tighter text-white">
                No.1
              </div>
              <div className="font-anuphan text-[10px] font-black tracking-widest text-slate-500 uppercase">
                Keyword หลักติดหน้าแรก
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📢 5. FINAL CTA */}
      <section className="relative z-10 container mx-auto px-4 py-40">
        <div className="shadow-luminous relative overflow-hidden rounded-[4rem] border border-white/10 p-12 text-center md:p-24">
          <div className="aurora-bg from-aurora-cyan to-aurora-violet inset-0 bg-gradient-to-br opacity-[0.1]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-prompt mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-8xl">
              ธุรกิจของคุณ <br />
              <span className="text-aurora-cyan">ก็ "แรง" แบบนี้ได้</span>
            </h2>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Button
                variant="premium"
                size="lg"
                className="shadow-aurora-glow group h-20 px-12 text-xl"
                asChild
              >
                <Link href="/contact">
                  ขอคำปรึกษาฟรี (ไม่ซื้อไม่ว่า){" "}
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
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
