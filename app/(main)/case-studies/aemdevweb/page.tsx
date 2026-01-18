/** @format */

import { Metadata } from "next"
import Link from "next/link"
import {
  Trophy,
  Zap,
  ArrowRight,
  Code2,
  MousePointerClick,
  Rocket,
} from "lucide-react"
import { siteConfig, constructMetadata } from "@/constants/site-config"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"
import { cn } from "@/lib/utils"

/**
 * 🔍 SEO Metadata: AEMDEVWEB Showcase
 */
export const metadata: Metadata = constructMetadata({
  title: "เจาะลึกเบื้องหลังเครื่องจักรผลิตเงิน | AEMDEVWEB Technical Showcase",
  description:
    "ส่องสถาปัตยกรรมเบื้องหลังเว็บไซต์ AEMDEVWEB ที่ออกแบบมาเพื่อคะแนน PageSpeed 100 และการปิดการขายที่รวดเร็วระดับวินาที",
  image: siteConfig.ogImage,
})

/**
 * 🚀 Case Study Page: AEMDEVWEB (The Luminous Architecture)
 */
export default function AemCaseStudyPage() {
  const canonicalUrl = `${siteConfig.url}/case-studies/aemdevweb`

  return (
    <main className="selection:bg-aurora-cyan/30 relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 🛠️ SEO Schema: Article & ProfessionalService */}
      <JsonLd
        type="Article"
        data={{
          headline: `เบื้องหลังสถาปัตยกรรม High-Performance ของ ${siteConfig.shortName}`,
          description:
            "เจาะลึกการใช้ Next.js 15 และ Tailwind 4 ในการสร้างเว็บไซต์ที่เน้น Conversion สูง",
          image: siteConfig.ogImage,
          author: {
            "@type": "Person",
            name: "นายเอ็มซ่ามากส์",
            url: siteConfig.url,
          },
          publisher: {
            "@type": "Organization",
            name: siteConfig.companyName,
            logo: {
              "@type": "ImageObject",
              url: `${siteConfig.url}/favicon.ico`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": canonicalUrl,
          },
        }}
      />

      {/* 🌌 HERO SECTION: The Identity */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-36">
        <div className="aurora-bg absolute top-0 left-1/2 h-[700px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge
            variant="luminous"
            className="mb-8 px-5 py-2 font-black uppercase tracking-[0.3em]"
          >
            <Trophy className="mr-2 h-4 w-4 text-aurora-cyan" /> Tech Excellence
            2026
          </Badge>

          <h1 className="font-prompt mb-10 text-5xl font-black italic leading-[0.9] tracking-tighter text-white uppercase md:text-[7.5rem]">
            The{" "}
            <span className="text-aurora-cyan text-luminous drop-shadow-luminous">
              Luminous
            </span>{" "}
            <br />
            Blueprint
          </h1>

          <p className="font-anuphan mx-auto max-w-3xl text-xl font-medium leading-relaxed text-slate-400 md:text-2xl">
            นี่คือบทพิสูจน์ของการสร้าง{" "}
            <span className="text-white italic">
              "เครื่องจักรผลิตเงิน"
            </span>{" "}
            ที่รวมความแรงของ Unlink Engine เข้ากับดีไซน์ระดับพรีเมียม
          </p>
        </div>
      </section>

      {/* 📊 PERFORMANCE METRICS */}
      <section className="border-y border-white/5 bg-white/[0.02] py-16 backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatBox
              label="LCP (Speed)"
              value="0.4s"
              color="text-aurora-emerald"
            />
            <StatBox
              label="Blocking Time"
              value="0ms"
              color="text-aurora-cyan"
            />
            <StatBox
              label="SEO Score"
              value="100"
              color="text-aurora-emerald"
            />
            <StatBox
              label="User Experience"
              value="Elite"
              color="text-aurora-violet"
            />
          </div>
        </div>
      </section>

      {/* 🛠️ TECHNICAL CORE SECTION */}
      <section className="container mx-auto px-4 py-32">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="font-prompt text-4xl font-black italic tracking-tighter text-white uppercase md:text-6xl">
            Technical <span className="text-slate-500">Infrastructure</span>
          </h2>
          <p className="font-anuphan mx-auto max-w-xl text-slate-400">
            โครงสร้างที่เลือกใช้ เพราะความไวและประสิทธิภาพสูงสุด
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <TechCard
            icon={<Zap className="text-aurora-cyan" />}
            title="Next.js 15.5 (RSC)"
            desc="ลด JavaScript ฝั่ง Client ลง 80% ด้วยสถาปัตยกรรม Server Components"
          />
          <TechCard
            icon={<Code2 className="text-aurora-emerald" />}
            title="Tailwind CSS 4.0"
            desc="ใช้ระบบสี OKLCH เพื่อความแม่นยำของสี Luminous และ CSS ที่จิ๋วแต่ทรงพลัง"
          />
          <TechCard
            icon={<Rocket className="text-aurora-violet" />}
            title="Vercel Edge Ready"
            desc="กระจายข้อมูลผ่าน Edge Network ทั่วโลก เพื่อความแรงเท่ากันทุกพื้นที่"
          />
        </div>
      </section>

      {/* 🎯 CONVERSION STRATEGY SECTION */}
      <section className="relative overflow-hidden py-32">
        <div className="from-aurora-cyan/5 to-aurora-violet/5 absolute inset-0 -z-10 origin-top-left scale-110 -skew-y-3 transform bg-gradient-to-br opacity-40 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="glass-card flex flex-col items-center gap-12 p-10 md:flex-row md:p-24">
            <div className="flex-1 space-y-8">
              <Badge className="border-aurora-cyan/30 bg-aurora-cyan/20 px-4 py-1 text-aurora-cyan">
                Business Philosophy
              </Badge>
              <h3 className="font-prompt text-4xl font-black italic leading-tight text-white uppercase md:text-6xl">
                โค้ดที่เปลี่ยน <br />
                <span className="text-aurora-emerald">เป็นยอดโอน</span>
              </h3>
              <p className="font-anuphan text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
                เราออกแบบทุก Pixel ให้ทำงานร่วมกับจิตวิทยาการขาย (Conversion
                Optimization)
              </p>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <ListItem text="Line Automation Sync" />
                <ListItem text="Technical SEO 100%" />
                <ListItem text="Responsive Elite" />
                <ListItem text="Luminous UI Design" />
              </ul>
            </div>
            <div className="flex-1">
              <div className="shadow-aurora-glow relative aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50 backdrop-blur-3xl">
                <div className="flex h-full flex-col items-center justify-center p-12 text-center">
                  <MousePointerClick className="text-aurora-cyan absolute top-10 right-10 h-12 w-12 animate-bounce" />
                  <span className="font-prompt select-none text-6xl font-black italic text-white/5 md:text-8xl">
                    AEM <br /> DEV
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 📢 CALL TO ACTION */}
      <section className="container mx-auto px-4 pb-40">
        <div className="shadow-luminous group relative overflow-hidden rounded-[4rem] border border-white/10 bg-white/[0.02] p-12 text-center md:p-32">
          <div className="aurora-bg from-aurora-cyan to-aurora-violet absolute inset-0 opacity-[0.05] transition-opacity duration-700 group-hover:opacity-[0.1]" />

          <h2 className="font-prompt relative z-10 mb-12 text-4xl font-black italic leading-none text-white uppercase md:text-8xl">
            Scale Your <br />
            <span className="text-aurora-cyan">Web Profit</span>
          </h2>

          <div className="relative z-10 flex flex-col justify-center gap-6 sm:flex-row">
            <Button
              variant="premium"
              size="lg"
              className="shadow-aurora-glow group h-20 px-12 text-xl"
              asChild
            >
              <Link href={siteConfig.links.line}>
                ทักมาคุยงานกับเอ็ม{" "}
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: "AEMDEVWEB Technical Consultation",
          image: siteConfig.ogImage,
          url: canonicalUrl,
          priceRange: "฿2,590 - ฿12,900",
        }}
      />
    </main>
  )
}

/**
 * 🧩 Internal Sub-Components
 */

interface StatBoxProps {
  label: string
  value: string
  color: string
}

function StatBox({ label, value, color }: StatBoxProps) {
  return (
    <div className="text-center transition-transform duration-500 hover:scale-105">
      <div
        className={cn(
          "font-prompt mb-2 text-4xl font-black italic tracking-tighter md:text-6xl",
          color
        )}
      >
        {value}
      </div>
      <div className="font-anuphan text-[10px] font-black uppercase tracking-widest text-slate-500">
        {label}
      </div>
    </div>
  )
}

interface TechCardProps {
  icon: React.ReactNode
  title: string
  desc: string
}

function TechCard({ icon, title, desc }: TechCardProps) {
  return (
    <div className="glass-card group border-white/5 bg-white/[0.01] p-8 transition-all duration-500 hover:border-aurora-cyan/30 hover:bg-white/[0.05]">
      <div className="shadow-aurora-glow mb-6 inline-block rounded-2xl bg-white/5 p-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-aurora-cyan/10">
        {icon}
      </div>
      <h3 className="font-prompt mb-4 text-2xl font-black italic text-white uppercase">
        {title}
      </h3>
      <p className="font-anuphan leading-relaxed text-slate-400 opacity-80">
        {desc}
      </p>
    </div>
  )
}

function ListItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <div className="bg-aurora-emerald h-1.5 w-1.5 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      <span className="font-anuphan text-sm font-bold text-slate-300 md:text-base">
        {text}
      </span>
    </li>
  )
}
