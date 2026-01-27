/** @format */

import React from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import LineLeadForm from "@/components/sales-engine/LineLeadForm"
import { ShieldCheck, Target, Sparkles, Globe, ArrowRight } from "lucide-react"

/**
 * Metadata: วางพิกัดตัวตนบนโลกออนไลน์
 * เน้นความชัดเจนในบทบาทที่ปรึกษาและผู้ดูแลระบบเทคนิค
 */
export const metadata: Metadata = {
  title: `รู้จัก ${siteConfig.expert.name} | ที่ปรึกษาระบบเว็บและ Technical SEO`,
  description:
    "เบื้องหลังการวางระบบเว็บไซต์ที่เน้นความเร็วและการทำอันดับบน Google พร้อมแผนงานที่วัดผลได้จริง",
  alternates: { canonical: `${siteConfig.project.url}/about` },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/10">
      <JsonLd
        type="AboutPage"
        data={{
          name: `รู้จัก ${siteConfig.expert.name}`,
          description: "Professional freelance marketing and web planner.",
          image: siteConfig.project.ogImage,
        }}
      />

      {/* Hero Layer: สุขุม เรียบง่าย แต่ทรงพลัง */}
      <section className="relative overflow-hidden bg-slate-50 pt-32 pb-24 lg:pt-48 lg:pb-40">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic shadow-sm ring-1 ring-slate-200">
              <Sparkles size={14} />
              Professional Freelance Partner
            </div>
            <h1 className="font-heading text-5xl leading-[0.9] font-black tracking-tighter text-slate-950 md:text-8xl">
              Building <br />
              <span className="text-emerald-600 italic">Growth Engine.</span>
            </h1>
            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-600 md:text-2xl">
              ผมไม่ได้แค่รับทำเว็บไซต์
              แต่ผมทำหน้าที่เป็นพาร์ทเนอร์ที่ช่วยวางระบบ
              เพื่อให้ธุรกิจของคุณเดินหน้าต่อได้อย่างมีทิศทาง
              ด้วยมาตรฐานงานระดับสากล
            </p>
          </div>
        </div>
      </section>

      {/* Core Values: พิกัดจุดแข็งที่วัดผลได้จริง */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-6">
          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            <AboutFeature
              icon={<ShieldCheck size={36} strokeWidth={1.5} />}
              title="Work Standard"
              description="ทุกขั้นตอนถูกจัดการอย่างมีระเบียบ ตั้งแต่การเขียนโค้ดจนถึงการส่งมอบงาน มั่นใจได้ในความเสถียรและความปลอดภัยของข้อมูล"
            />

            <AboutFeature
              icon={<Target size={36} strokeWidth={1.5} />}
              title="Business Impact"
              description="เป้าหมายสำคัญคือการเปลี่ยนผู้เข้าชมให้เป็นรายได้ ทุกพิกัดการจัดวางถูกคิดมาเพื่อตอบโจทย์พฤติกรรมลูกค้ากลุ่มเป้าหมาย"
            />

            <AboutFeature
              icon={<Globe size={36} strokeWidth={1.5} />}
              title="Technical Logic"
              description="วางรากฐานให้ Google เข้าใจธุรกิจของคุณได้ง่ายขึ้น ด้วยโครงสร้างข้อมูลที่ถูกต้องและประสิทธิภาพความเร็วที่เหนือกว่าทั่วไป"
            />
          </div>
        </div>
      </section>

      {/* Closing Section: ส่วนสร้างความเชื่อมั่นและช่องทางติดต่อ */}
      <section className="container mx-auto px-6">
        <div className="rounded-[3.5rem] bg-slate-950 p-12 text-white shadow-2xl shadow-slate-200 md:p-24">
          <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-emerald-400 uppercase italic">
                <span className="h-px w-8 bg-emerald-500" />
                Your Success is my mission
              </div>
              <h2 className="font-heading text-4xl leading-tight font-black tracking-tighter italic md:text-6xl">
                คุยยุทธศาสตร์ธุรกิจ <br /> กับผมโดยตรง
              </h2>
              <p className="font-body text-lg leading-relaxed font-medium text-slate-400 md:max-w-xl md:text-xl">
                หากคุณกำลังมองหาพาร์ทเนอร์ที่พร้อมจะลงรายละเอียดงานอย่างจริงจัง
                และเข้าใจเป้าหมายของธุรกิจอย่างแท้จริง
                ผมพร้อมร่วมวางแผนไปกับคุณครับ
              </p>

              <div className="flex flex-wrap gap-6 pt-4">
                <LineLeadForm
                  variant="button"
                  label="คุยรายละเอียดงาน"
                  className="h-16 px-12 text-lg font-black tracking-widest italic"
                />
                <Link
                  href="/case-studies"
                  className="group inline-flex items-center gap-3 text-sm font-black tracking-widest text-white uppercase transition-colors hover:text-emerald-400"
                >
                  ดูผลงานที่ผ่านมา
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-2"
                  />
                </Link>
              </div>
            </div>

            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/5 bg-slate-900">
              {/* พิกัดพื้นที่รูปถ่าย: อลงกรณ์ ยมเกิด */}
              <div className="m-4 flex h-full w-full flex-col items-center justify-center rounded-[2rem] border-4 border-dashed border-slate-800 p-12 text-center text-slate-700 italic">
                <p className="font-heading text-lg font-black tracking-widest uppercase opacity-30">
                  Expert Identity
                </p>
                <p className="mt-2 text-xs font-bold opacity-20">
                  Recommended: High-resolution profile photo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/**
 * AboutFeature Component: ส่วนแสดงจุดเด่นรายด้าน
 */
function AboutFeature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="group space-y-6 text-left transition-all">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-emerald-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
        {icon}
      </div>
      <div className="space-y-4">
        <h3 className="font-heading text-2xl font-black tracking-tight text-slate-950 uppercase italic transition-colors group-hover:text-emerald-600">
          {title}
        </h3>
        <p className="font-body text-base leading-relaxed font-medium text-slate-500">
          {description}
        </p>
      </div>
    </div>
  )
}
