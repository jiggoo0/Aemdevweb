/** @format */

import React from "react"
import type { Metadata } from "next"
// แก้ไขจุดเสี่ยง: นำเข้า Link เพื่อใช้งานในส่วนท้ายของหน้า
import Link from "next/link"

import {
  Users,
  Target,
  Rocket,
  ArrowRight,
  Zap,
  Mail,
  ShieldCheck,
} from "lucide-react"

// การจัดการข้อมูลและโครงสร้างระบบ
import { siteConfig } from "@/constants/site-config"
import { Button } from "@/components/ui/button"

/**
 * ข้อมูลส่วนหัว: ปรับการดึง shortName มาที่ระดับ project
 * เพื่อแก้ปัญหา Error TS2339
 */
export const metadata: Metadata = {
  title: `ร่วมงานกับทีมเฉพาะทาง | ${siteConfig.project.shortName}`,
  description:
    "ร่วมเป็นส่วนหนึ่งในการขับเคลื่อนธุรกิจ SME และกลุ่มอุตสาหกรรมด้วยเทคนิค Next.js และการวางลำดับข้อมูลที่แม่นยำ",
}

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.02]" />

      {/* 1. ส่วนหัวของหน้า (Hero Section) */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl">
            <div className="animate-in fade-in slide-in-from-bottom-2 mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-2 text-emerald-600 duration-700">
              <Users size={16} />
              <span className="font-prompt text-[10px] font-black tracking-[0.4em] text-emerald-600 uppercase italic">
                Collaboration & Talent Hub
              </span>
            </div>

            <h1 className="font-prompt mb-10 text-5xl leading-[0.9] font-black tracking-tighter text-slate-900 uppercase italic md:text-8xl lg:text-9xl">
              Work with <br />
              <span className="text-emerald-500">Specialist.</span>
            </h1>

            <p className="font-anuphan max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              เราไม่ได้มองหาแค่ทีมงาน
              แต่เรามองหาพาร์ทเนอร์ที่มีความใส่ใจในรายละเอียด
              เพื่อช่วยให้กลุ่มธุรกิจ SME
              นำหน้าคู่แข่งด้วยระบบที่เสถียรที่สุดในปัจจุบัน
            </p>
          </div>
        </div>
      </section>

      {/* 2. ส่วนค่านิยมหลัก (Core Values) */}
      <section className="bg-slate-50/80 py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-prompt border-l-4 border-emerald-500 pl-4 text-2xl font-black tracking-widest text-slate-900 uppercase italic">
              Our Core DNA
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard
              icon={<Target size={28} className="text-emerald-500" />}
              title="Precision Code"
              description="เราเชื่อในความแม่นยำ ทุกบรรทัดต้องมีที่มา และทุกจุดต้องตอบโจทย์ผู้ใช้งานจริง"
            />
            <ValueCard
              icon={
                <Zap
                  size={28}
                  className="text-emerald-500"
                  fill="currentColor"
                />
              }
              title="Ultra Speed"
              description="ความเร็วคือมาตรฐานสูงสุด ระบบที่เราสร้างต้องมีคะแนนประสิทธิภาพที่ยอดเยี่ยมเท่านั้น"
            />
            <ValueCard
              icon={<ShieldCheck size={28} className="text-emerald-500" />}
              title="Endless Trust"
              description="ความซื่อสัตย์คือหัวใจ เราส่งมอบงานที่ยอดเยี่ยมที่สุดเพื่อให้ธุรกิจเติบโตได้จริง"
            />
          </div>
        </div>
      </section>

      {/* 3. ส่วนสถานะการรับสมัคร */}
      <section className="px-6 py-32">
        <div className="container mx-auto">
          <div className="shadow-3xl relative mx-auto max-w-5xl overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-center md:p-24">
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <Rocket size={300} className="text-emerald-500" />
            </div>

            <div className="relative z-10 space-y-10">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/10 bg-white/5 text-emerald-500">
                <Users size={40} />
              </div>

              <div className="space-y-4">
                <h2 className="font-prompt text-4xl font-black tracking-tighter text-white uppercase italic md:text-6xl">
                  Currently <span className="text-emerald-500">Not Hiring</span>
                </h2>
                <p className="font-anuphan mx-auto max-w-2xl text-lg leading-relaxed font-medium text-slate-400">
                  ขณะนี้ยังไม่มีการเปิดรับสมัครทีมงานประจำ
                  แต่ผมยินดีอย่างยิ่งที่จะได้ทำความรู้จักกับผู้เชี่ยวชาญด้าน
                  <b>Design, Development หรือ SEO</b>
                  เพื่อร่วมโครงการพิเศษในอนาคตครับ
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-8 pt-6 sm:flex-row">
                {/* แก้ไขจุดพิกัด Email: ชี้ไปที่ company.email */}
                <Button
                  className="h-16 rounded-2xl bg-emerald-500 px-12 text-slate-950 transition-colors hover:bg-white"
                  asChild
                >
                  <a href={`mailto:${siteConfig.company.email}`}>
                    <Mail className="mr-3 h-5 w-5" /> Drop your Profile
                  </a>
                </Button>

                {/* แก้ไขจุดเสี่ยง: เรียกใช้ Link Component ที่นำเข้าอย่างถูกต้อง */}
                <Link
                  href="/contact"
                  className="group font-prompt flex items-center gap-3 text-xs font-black tracking-[0.3em] text-white uppercase transition-all hover:text-emerald-400"
                >
                  Stay in the loop{" "}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

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
    <div className="group rounded-[3rem] border border-slate-100 bg-white p-12 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl">
      <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-colors duration-500 group-hover:bg-emerald-500 group-hover:text-white">
        {icon}
      </div>
      <h3 className="font-prompt mb-4 text-2xl font-black tracking-tight text-slate-900 uppercase italic">
        {title}
      </h3>
      <p className="font-anuphan text-base leading-relaxed font-bold text-slate-500">
        {description}
      </p>
    </div>
  )
}
