/** @format */

import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import {
  MessageCircle,
  Mail,
  MapPin,
  ShieldCheck,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react"

// 📦 Data & Config
import { siteConfig, constructMetadata } from "@/constants/site-config"

// 🧩 Components & UI
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { Badge } from "@/components/ui/badge"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * 🔍 SEO Configuration
 */
export const metadata: Metadata = constructMetadata({
  title: "ติดต่อเรา - ปรึกษาฟรี ไม่มีกั๊ก",
  description:
    "ทักไลน์มาคุยสโคปงานฟรี นายเอ็มตอบเองทุกแชท! พร้อมประเมินราคาเบื้องต้น รับทำเว็บ Sale Page และระบบออนไลน์ครบวงจร",
})

/**
 * 📞 Contact Page: Luminous Edition (Server Component)
 * ยกระดับหน้าติดต่อด้วย CSS Animation (เบากว่า Framer Motion) เพื่อ SEO 100%
 */
export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      label: "Line Official",
      value: siteConfig.links.lineId || "@aemdevweb",
      href: siteConfig.links.line,
      glow: "hover:shadow-[0_0_20px_rgba(6,199,85,0.4)]",
      iconBg: "bg-[#06C755]",
      color: "text-[#06C755]",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email Support",
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      glow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      iconBg: "bg-blue-500",
      color: "text-blue-400",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Service Area",
      value: "Online Service (ทั่วประเทศ)",
      href: "#",
      glow: "hover:shadow-[0_0_20px_rgba(122,243,255,0.4)]",
      iconBg: "bg-slate-800",
      color: "text-slate-400",
    },
  ]

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-40 pb-24 text-slate-50 selection:bg-aurora-cyan/30">
      {/* 🛠️ SEO Schema */}
      <JsonLd
        type="ProfessionalService"
        data={{
          name: siteConfig.name,
          url: `${siteConfig.url}/contact`,
          contactPoint: {
            "@type": "ContactPoint",
            telephone: siteConfig.contact.tel,
            contactType: "customer service",
            areaServed: "TH",
            availableLanguage: "Thai",
          },
        }}
      />

      {/* 🌌 Background Decor */}
      <div className="aurora-bg top-0 left-1/4 h-[600px] w-[600px] opacity-[0.1] blur-[120px]" />
      <div className="aurora-bg bg-aurora-violet right-1/4 bottom-0 h-[500px] w-[500px] opacity-[0.05] blur-[150px]" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-24">
          {/* 🟢 Left Side: Content & Branding (Animated via CSS) */}
          <div className="relative animate-in fade-in slide-in-from-left-8 duration-1000 fill-mode-both">
            <Badge variant="luminous" className="mb-8 px-5 py-2">
              <Zap className="text-aurora-cyan mr-2 h-4 w-4 fill-current" />
              <span className="text-[10px] font-black tracking-widest uppercase">
                Ready to scale
              </span>
            </Badge>

            <h1 className="font-prompt mb-8 text-5xl leading-[1.1] font-black tracking-tighter text-white uppercase italic md:text-7xl">
              เริ่มสร้าง <br />
              <span className="text-aurora-cyan drop-shadow-luminous">
                เครื่องจักรปิดการขาย
              </span>{" "}
              ของคุณวันนี้
            </h1>

            <p className="font-anuphan mb-12 max-w-lg text-xl leading-relaxed font-medium text-slate-400">
              ยินดีให้คำปรึกษาฟรีครับ! ไม่ว่าพี่จะเพิ่งเริ่มขายออนไลน์
              หรืออยากอัปเกรดธุรกิจให้ดูพรีเมียม นายเอ็มพร้อมช่วยวางโครงสร้าง
              <span className="ml-1 text-white italic">
                ใจดี ไม่กดดัน คุยภาษาพี่น้องครับ
              </span>
            </p>

            {/* Contact Cards: Luminous Glass Style */}
            <div className="mb-12 space-y-4">
              {contactInfo.map((info, i) => (
                <Link
                  key={i}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : "_self"}
                  className={`group flex items-center gap-6 rounded-[2.5rem] border border-white/5 bg-white/[0.03] p-6 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/10 hover:bg-white/[0.08] ${info.glow}`}
                >
                  <div
                    className={`h-16 w-16 rounded-2xl ${info.iconBg} flex items-center justify-center text-white shadow-lg transition-all group-hover:scale-110 group-hover:rotate-3`}
                  >
                    {info.icon}
                  </div>
                  <div className="flex-grow">
                    <p className="font-prompt mb-1 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase">
                      {info.label}
                    </p>
                    <p className="font-prompt text-2xl font-black tracking-tight text-white transition-colors">
                      {info.value}
                    </p>
                  </div>
                  <ArrowRight
                    className={`h-6 w-6 transition-all group-hover:translate-x-2 ${info.color}`}
                  />
                </Link>
              ))}
            </div>

            {/* Trust Banner: Luminous Shield */}
            <div className="glass-card bg-aurora-cyan/5 relative flex items-start gap-6 overflow-hidden rounded-[3rem] border-white/5 p-8">
              <div className="bg-aurora-cyan/10 absolute top-0 right-0 h-32 w-32 rounded-full blur-3xl" />
              <div className="shadow-aurora-glow flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <ShieldCheck className="text-aurora-cyan h-8 w-8" />
              </div>
              <div>
                <h4 className="font-prompt mb-2 text-xl font-black tracking-tight text-white uppercase italic">
                  การันตีดูแลหลังการขาย 100%
                </h4>
                <p className="font-anuphan leading-relaxed font-medium text-slate-400">
                  นายเอ็มไม่ทิ้งงานแน่นอน มีคู่มือสอนใช้งานเบื้องต้นให้
                  และสอบถามได้ตลอดชีพ พัฒนาด้วยความจริงใจภาษาพี่น้องครับ
                </p>
              </div>
            </div>
          </div>

          {/* 🔵 Right Side: Form (Sticky on Desktop) */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both lg:sticky lg:top-40">
            <div className="relative">
              {/* Decorative Glow behind the form */}
              <div className="bg-aurora-cyan/20 absolute -inset-4 animate-pulse rounded-[4rem] opacity-30 blur-3xl" />

              <div className="shadow-luminous group relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-slate-900/50 p-4 backdrop-blur-2xl">
                {/* Visual Header for the form area */}
                <div className="px-8 pt-8 pb-4 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-aurora-cyan/10 border-aurora-cyan/20 flex h-12 w-12 items-center justify-center rounded-full border">
                      <Sparkles className="text-aurora-cyan h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-prompt mb-2 text-2xl font-black tracking-tight text-white uppercase italic">
                    ส่งข้อมูลให้คุณเอ็ม
                  </h3>
                  <p className="font-anuphan text-sm font-medium text-slate-400 italic">
                    นายเอ็มจะติดต่อกลับเพื่อประเมินแผนงานฟรีภายใน 24 ชม.
                  </p>
                </div>

                <div className="p-2">
                  <LineLeadForm />
                </div>
              </div>

              {/* Extra Info under form */}
              <p className="font-anuphan mt-8 text-center text-xs font-bold tracking-[0.3em] text-slate-500 uppercase opacity-60">
                🔒 ข้อมูลส่วนตัวของคุณจะถูกเก็บเป็นความลับสูงสุด
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
