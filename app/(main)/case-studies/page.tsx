/** @format */

import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star, MousePointer2, Code2 } from "lucide-react"

// ✅ Components & UI: มั่นใจว่า Import ตัวที่ใช้จริงเท่านั้น
import { siteConfig, constructMetadata } from "@/constants/site-config"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"
import { LineStickyButton } from "@/components/shared/LineStickyButton"

/**
 * 🔍 SEO Metadata: Case Studies Hub
 * DNA: "ติดหน้าแรก Google" - เน้นผลลัพธ์ที่ SME ต้องการ
 */
export const metadata: Metadata = constructMetadata({
  title: "รวมเคสความสำเร็จ SME | ผลงานการสร้างเครื่องจักรผลิตเงิน",
  description: "ส่องผลงานและเคสการันตีความสำเร็จจากลูกค้าที่ใช้บริการ AEMDEVWEB เปลี่ยนเว็บอืดเป็นเว็บแรงที่ปิดการขายได้จริง",
})

/**
 * 🚀 Case Studies Hub Page: AEMDEVWEB Engine
 * โครงสร้าง: Hero > Featured (Unlink-TH) > Success Grid > Final CTA
 */
export default function CaseStudiesPage() {
  const canonicalUrl = `${siteConfig.url}/case-studies`

  return (
    <main className="selection:bg-aurora-cyan/30 relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* 🛠️ SEO Schema: CollectionPage */}
      <JsonLd 
        type="CollectionPage"
        data={{
          name: "AEMDEVWEB Success Stories",
          description: "A collection of high-performance web development case studies for Thai SMEs.",
          url: canonicalUrl,
        }}
      />

      {/* 🌌 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48">
        <div className="aurora-bg absolute top-0 left-1/2 h-[600px] w-full -translate-x-1/2 opacity-[0.08] blur-[120px]" />
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <Badge variant="luminous" className="mb-6 px-4 py-1.5 font-black uppercase tracking-widest">
            Success Stories
          </Badge>
          <h1 className="font-prompt mb-8 text-5xl font-black italic leading-none tracking-tighter text-white uppercase md:text-8xl">
            ผลงานที่ <span className="text-aurora-cyan text-luminous">เปลี่ยนชีวิต</span> <br />
            เจ้าของธุรกิจ
          </h1>
          <p className="font-anuphan mx-auto max-w-2xl text-lg font-medium leading-relaxed text-slate-400 md:text-xl">
            เราไม่ได้แค่ส่งมอบ Code แต่เราส่งมอบ <span className="text-white italic">"ผลลัพธ์ทางธุรกิจ"</span>
          </p>
        </div>
      </section>

      {/* 🏆 2. FEATURED CASE STUDY: Unlink-TH */}
      <section className="container mx-auto px-4 py-20">
        <Link href="/case-studies/unlink-th" className="group block">
          <div className="glass-card relative overflow-hidden border-white/10 p-1 transition-all duration-700 hover:border-aurora-cyan/40">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="relative aspect-video w-full overflow-hidden rounded-[1.8rem] lg:w-3/5">
                <Image 
                  src="/images/showcase/unlink-th.webp"
                  alt="Unlink-TH Case Study Performance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <Badge className="border-aurora-emerald/30 bg-aurora-emerald/20 font-black text-aurora-emerald">LCP 0.8s</Badge>
                  <Badge className="border-aurora-cyan/30 bg-aurora-cyan/20 font-black text-aurora-cyan">PageSpeed 100</Badge>
                </div>
              </div>

              <div className="flex-1 space-y-6 p-8 lg:p-12">
                <div className="flex items-center gap-2 text-aurora-cyan">
                  <Star className="h-5 w-5 fill-current" />
                  <span className="font-prompt text-sm font-black uppercase tracking-widest">Flagship Project</span>
                </div>
                <h2 className="font-prompt text-4xl font-black italic leading-none text-white uppercase transition-colors group-hover:text-aurora-cyan">
                  Unlink-TH Engine
                </h2>
                <p className="font-anuphan text-lg leading-relaxed text-slate-400">
                  สถาปัตยกรรม Next.js 15 ที่ทำให้ยอดขายโตขึ้น 300% ภายในเดือนแรก
                </p>
                <div className="flex items-center gap-2 font-bold text-white transition-all group-hover:gap-4">
                  Read Case Study <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* 📂 3. SUCCESS GRID */}
      <section className="container mx-auto px-4 py-12 pb-40">
        <div className="grid gap-8 md:grid-cols-2">
           <CaseLinkCard 
             href="/case-studies/aemdevweb"
             title="The Luminous Core"
             category="Internal Architecture"
             desc="เบื้องหลังการสร้างระบบปิดการขายอัตโนมัติของ AEMDEVWEB"
           />
           
           <div className="glass-card flex items-center justify-center border-dashed border-white/10 bg-transparent p-12">
             <p className="font-prompt text-2xl font-black italic uppercase tracking-tighter text-slate-600">
               Your Success is Next...
             </p>
           </div>
        </div>
      </section>

      {/* 📢 4. FINAL CTA */}
      <section className="container mx-auto px-4 pb-40">
        <div className="shadow-luminous group relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.02] p-12 text-center md:p-32">
          <div className="aurora-bg from-aurora-cyan to-aurora-violet absolute inset-0 opacity-[0.05]" />
          <h2 className="font-prompt relative z-10 mb-8 text-4xl font-black italic leading-none text-white uppercase md:text-7xl">
            อยากเป็นเคส <br />
            <span className="text-aurora-emerald">ต่อไปของเอ็มไหม?</span>
          </h2>
          <Button variant="premium" size="lg" className="shadow-aurora-glow group relative z-10 h-20 px-12 text-xl" asChild>
            <Link href={siteConfig.links.line}>
              จองคิววิเคราะห์เว็บฟรี <ArrowRight className="ml-2 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>
      </section>
      
      {/* ✅ Fixed: มั่นใจว่า LineStickyButton แสดงผลถูกต้อง */}
      <LineStickyButton />
    </main>
  )
}

/**
 * 🧩 Sub-Components: Fixed Types & Unused Vars
 */

interface CaseLinkCardProps {
  href: string
  title: string
  category: string
  desc: string
}

function CaseLinkCard({ href, title, category, desc }: CaseLinkCardProps) {
  return (
    <Link href={href} className="group">
      <div className="glass-card border-white/5 bg-white/[0.01] p-10 transition-all duration-500 hover:border-aurora-cyan/30 hover:bg-white/[0.03]">
        <div className="mb-8 flex items-center justify-between">
          <Badge className="border-white/10 bg-white/5 px-3 uppercase tracking-widest text-slate-400">{category}</Badge>
          <div className="text-aurora-cyan opacity-40 transition-opacity group-hover:opacity-100">
            <MousePointer2 className="h-6 w-6" />
          </div>
        </div>
        <div className="mb-6 flex items-center gap-4">
          <div className="bg-aurora-cyan/10 rounded-xl p-3 text-aurora-cyan">
             <Code2 className="h-6 w-6" />
          </div>
          <h3 className="font-prompt text-3xl font-black italic text-white uppercase transition-colors group-hover:text-aurora-cyan">{title}</h3>
        </div>
        <p className="font-anuphan mb-8 leading-relaxed text-slate-400">{desc}</p>
        <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white transition-all group-hover:gap-4">
          Explore Detail <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
