/** @format */

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Trophy, Zap, ArrowRight, Gauge, ShieldCheck, Sparkles } from "lucide-react"

// 📦 Data & Utils
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils"

// 🧩 Components
import { LineStickyButton } from "@/components/shared/LineStickyButton"
import { ImpactStats } from "@/components/sales-engine/ImpactStats"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🔍 SEO Metadata: จูนมาเพื่อโชว์ศักยภาพแบรนด์โดยเฉพาะ
 */
export const metadata: Metadata = {
  title: `เบื้องหลัง ${siteConfig.companyName} | เว็บไซต์ที่เร็วที่สุดในปี 2026`,
  description: "เจาะลึกเทคโนโลยี AEMDEVWEB Engine ที่ทำให้เว็บไซต์ SME ไทยโหลดไวระดับ 0.8s และได้คะแนน PageSpeed 100 เต็ม",
  openGraph: {
    title: `AEMDEVWEB Engine: The Speed Demon of 2026`,
    description: "บทพิสูจน์ความแรงที่ไม่ได้มีดีแค่ตัวเลข แต่คือเครื่องมือปิดการขายที่มีประสิทธิภาพสูงสุด",
    images: ["/images/showcase/aemdevweb-hero.webp"], // แนะนำให้ใช้รูปโชว์ผลตรวจคะแนน 100
    url: `${siteConfig.url}/case-studies/aemdevweb`,
  },
}

/**
 * 🚀 Case Study: AEMDEVWEB Flagship Edition
 * สถาปัตยกรรม: SSG (Static Site Generation) เพื่อความเร็วสูงสุด
 */
export default function AemDevWebCaseStudyPage() {
  return (
    <main className="selection:bg-aurora-cyan/30 relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 🛠️ SEO Schema: จัดเต็มเพื่อให้สเปคตรงเป๊ะเวลาตรวจ */}
      <JsonLd
        type="Article"
        data={{
          headline: "AEMDEVWEB Engine: Next.js 15 Performance Mastery",
          description: "Technical case study of high-conversion and high-performance web architecture.",
          image: `${siteConfig.url}/images/showcase/aemdevweb-hero.webp`,
          author: {
            "@type": "Person",
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />

      {/* 🌌 1. HERO: The Pinnacle of Speed */}
      <section className="relative pt-40 pb-24 text-center">
        <div className="aurora-bg top-0 left-1/2 h-[700px] w-full -translate-x-1/2 opacity-[0.1] blur-[120px]" />
        
        <div className="relative z-10 container mx-auto px-4">
          <Badge variant="luminous" className="mb-8 px-6 py-2 tracking-[0.4em] uppercase">
            <Trophy className="mr-2 h-4 w-4" /> Flagship: AEMDEVWEB ENGINE
          </Badge>

          <h1 className="font-prompt mb-8 text-5xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-8xl">
            ไม่ได้แค่ทำเว็บ <br />
            <span className="text-aurora-cyan drop-shadow-luminous">แต่เราทำเครื่องผลิตเงิน</span>
          </h1>

          <p className="font-anuphan mx-auto mb-12 max-w-3xl text-xl leading-relaxed font-medium text-slate-400 md:text-2xl">
            นี่คือโครงสร้างที่จูนมาเพื่อ <span className="text-white italic">"ความไว"</span> ระดับปีศาจ 
            เพราะยอดขายไม่ได้รอคนที่เว็บโหลดช้า เราจึงสร้างมาตรฐานใหม่ให้ SME ไทย
          </p>

          <div className="flex justify-center gap-6">
            <Button variant="premium" size="lg" className="shadow-aurora-glow group h-20 px-12 text-xl" asChild>
              <Link href={siteConfig.links.line}>
                จองคิวทำเว็บกับนายเอ็ม <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 📊 2. STATS BAR: Real Impact */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] py-16 backdrop-blur-xl">
        <ImpactStats />
      </section>

      {/* 🛠️ 3. CORE TECHNOLOGY: The "Aem" Formula */}
      <section className="relative z-10 container mx-auto px-4 py-32">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Image Side: PageSpeed Focus */}
          <div className="group relative">
            <div className="bg-aurora-emerald/20 absolute -inset-4 rounded-[3rem] opacity-30 blur-3xl transition duration-1000 group-hover:opacity-50" />
            <div className="shadow-luminous relative aspect-video overflow-hidden rounded-[3rem] border border-white/10 bg-slate-900">
              <Image
                src="/images/showcase/unlink-th.webp" // ใช้รูปผลตรวจคะแนน 100 เขียวทั้งกระดาน
                alt="Google PageSpeed 100 Score"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="glass-card border-aurora-emerald/40 absolute top-6 left-6 rounded-2xl p-4 backdrop-blur-md">
                <Gauge className="text-aurora-emerald h-8 w-8" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-prompt text-4xl leading-tight font-black tracking-tighter text-white uppercase md:text-6xl">
                สูตรลับความเร็ว <br />
                <span className="text-aurora-emerald">100/100</span>
              </h2>
              <p className="font-anuphan text-lg leading-relaxed font-medium text-slate-400">
                เราใช้เทคโนโลยีที่ทันสมัยที่สุดในการขับเคลื่อนธุรกิจของคุณ 
                เพื่อให้มั่นใจว่าลูกค้าจะได้รับประสบการณ์ที่ดีที่สุดตั้งแต่วินาทีแรกที่กดเข้าชม
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <TechFeature icon={Zap} title="React 19" desc="ลด JavaScript Bundle เพื่อการโหลดที่ไวกว่า" />
              <TechFeature icon={ShieldCheck} title="Next 15" desc="ระบบ Server Components 100% เพื่อความปลอดภัย" />
              <TechFeature icon={Sparkles} title="Tailwind 4" desc="ดีไซน์พรีเมียมที่มาพร้อมกับประสิทธิภาพ" />
              <TechFeature icon={Gauge} title="Luminous Engine" desc="จูน Core Web Vitals ให้เขียวทุกช่อง" />
            </div>
          </div>
        </div>
      </section>

      {/* 📢 4. CALL TO ACTION: Direct to Line */}
      <section className="relative z-10 container mx-auto px-4 py-40">
        <div className="shadow-luminous relative overflow-hidden rounded-[4rem] border border-white/10 p-12 text-center md:p-24">
          <div className="aurora-bg from-aurora-cyan to-aurora-emerald absolute inset-0 bg-gradient-to-br opacity-[0.15]" />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="font-prompt mb-8 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-8xl">
              อยากได้เว็บ <br />
              <span className="text-aurora-emerald">"แรงและทำเงิน"</span> <br />
              แบบนี้ไหม?
            </h2>
            <Button variant="premium" size="lg" className="shadow-aurora-glow h-20 px-12 text-xl" asChild>
              <Link href={siteConfig.links.line}>
                ทักไลน์มาคุยกับพี่เอ็มเลย
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <LineStickyButton />
    </main>
  )
}

// --- 🧩 Sub-Component ---
function TechFeature({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="glass-card hover:border-aurora-cyan/30 rounded-2xl border-white/5 p-6 transition-all">
      <Icon className="text-aurora-cyan mb-4 h-8 w-8" />
      <h4 className="font-prompt mb-2 text-xl font-black text-white uppercase italic">{title}</h4>
      <p className="font-anuphan text-sm font-medium text-slate-500">{desc}</p>
    </div>
  )
}
