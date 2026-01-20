/** @format */

import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { Users, Target, Rocket, ArrowRight, Zap, Mail } from "lucide-react"

// 📂 Logic & Config
import { siteConfig } from "@/constants/site-config"

// 🧩 Components
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: `Join the Team | ${siteConfig.shortName}`,
  description:
    "ร่วมเป็นส่วนหนึ่งในการขับเคลื่อนธุรกิจ SME และโรงงานอุตสาหกรรมด้วยเทคโนโลยีเว็บไซต์ระดับ Specialist",
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 selection:bg-emerald-500/20">
      {/* 🔝 Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-fixed" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5">
              <Users className="h-4 w-4 text-emerald-500" />
              <span className="font-prompt text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">
                Future Collaboration
              </span>
            </div>

            <h1 className="font-prompt mb-8 text-5xl leading-none font-black tracking-tighter text-[#0F172A] uppercase italic md:text-7xl lg:text-8xl">
              Work with <br />
              <span className="text-emerald-500">Specialist.</span>
            </h1>

            <p className="font-anuphan max-w-2xl text-lg leading-relaxed font-medium text-slate-500 md:text-xl">
              เราไม่ได้มองหาแค่พนักงาน แต่เรามองหา "Partner" ที่มี Passion
              ในการสร้างระบบที่ช่วยให้ SME และโรงงานไทย ก้าวสู่มาตรฐานสากลด้วย
              Technical SEO และ Next.js สถาปัตยกรรมล่าสุด
            </p>
          </div>
        </div>
      </section>

      {/* 🏛️ Core Values Section */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard
              icon={<Target className="h-6 w-6 text-emerald-500" />}
              title="Precision First"
              description="ทุกบรรทัดของ Code และทุกการออกแบบ ต้องตอบโจทย์ผลลัพธ์ทางธุรกิจและความแม่นยำทางเทคนิค"
            />
            <ValueCard
              icon={<Zap className="h-6 w-6 text-emerald-500" />}
              title="High Performance"
              description="เว็บไซต์ต้องโหลดไว (PageSpeed 100) และมีเสถียรภาพสูงสุดเพื่อประสบการณ์ของผู้ใช้งาน"
            />
            <ValueCard
              icon={<Rocket className="h-6 w-6 text-emerald-500" />}
              title="Continuous Growth"
              description="เราอัปเกรด Tech Stack และกลยุทธ์ SEO เสมอเพื่อให้ลูกค้าและทีมงานนำหน้าคู่แข่งหนึ่งก้าว"
            />
          </div>
        </div>
      </section>

      {/* 🚫 Current Status (Maintenance/Closed Mode) */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[3rem] border-2 border-dashed border-slate-100 p-12 text-center md:p-24">
            <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 text-slate-300">
              <Users size={40} />
            </div>
            <h2 className="font-prompt mb-4 text-3xl font-black text-[#0F172A] italic md:text-5xl">
              Currently Not Hiring
            </h2>
            <p className="font-anuphan mx-auto mb-12 max-w-xl text-slate-500">
              ขณะนี้ นายเอ็มซ่ามากส์
              ยังไม่มีการเปิดรับสมัครตำแหน่งงานเพิ่มเติมในขณะนี้ อย่างไรก็ตาม
              เรายินดีเสมอที่จะทำความรู้จักกับคนที่มีความสามารถ
            </p>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Button
                variant="outline"
                className="font-prompt rounded-2xl px-10 py-6 text-xs font-black tracking-widest uppercase"
                asChild
              >
                <a href={`mailto:${siteConfig.email || "me@aemdevweb.com"}`}>
                  <Mail className="mr-2 h-4 w-4" /> Drop your Profile
                </a>
              </Button>
              <Link
                href="/contact"
                className="group font-prompt flex items-center gap-2 text-sm font-black tracking-widest text-[#0F172A] uppercase"
              >
                Let's stay in touch{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/**
 * 🧱 Internal Component: ValueCard
 */
function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-sm transition-all hover:shadow-xl hover:shadow-emerald-500/5">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/5">
        {icon}
      </div>
      <h3 className="font-prompt mb-4 text-2xl font-black text-[#0F172A] uppercase italic">
        {title}
      </h3>
      <p className="font-anuphan text-sm leading-relaxed font-medium text-slate-500">
        {description}
      </p>
    </div>
  )
}
