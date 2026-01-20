/** @format */

import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import {
  ShieldCheck,
  Zap,
  Target,
  Users,
  Building2,
  Factory,
} from "lucide-react"

// 📂 Data & Components Architecture
import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"
import TrustBadge from "@/components/shared/TrustBadge"
import CTASection from "@/components/landing/CTASection"

/**
 * 🚀 Metadata — Specialist Keyword Strategy 2026
 * ปรับปรุงให้ครอบคลุมทั้ง Brand Search และ Intent Search ของกลุ่ม SME/Industrial
 */
export const metadata: Metadata = {
  title: `รู้จัก นายเอ็มซ่ามากส์ | คนทำเว็บที่เข้าใจเจ้าของธุรกิจและโรงงานจริง`,
  description:
    "ผมชื่อเอ็มครับ เป็นคนทำเว็บที่เน้นผลลัพธ์ธุรกิจ ไม่ขายฝัน งานเนี๊ยบ โหลดไว ไม่ทิ้งงาน 100% สำหรับ SME เจ้าของกิจการ บริษัท และโรงงานอุตสาหกรรมทั่วไทย",
  keywords: [
    // 🏷️ Brand & Identity
    "นายเอ็มซ่ามากส์",
    "AEMDEVWEB",
    "เอ็มซ่ามากส์",

    // 🏗️ Service Intent (กลุ่ม SME & บริษัท)
    "รับทำเว็บไซต์ SME",
    "รับทำเว็บไซต์บริษัท",
    "จ้างทำเว็บไซต์ หจก",
    "ทำเว็บ Sale Page ปิดการขาย",
    "รับพัฒนาเว็บไซต์ Corporate",

    // 🏭 Industrial Intent (กลุ่มโรงงาน)
    "รับทำเว็บไซต์โรงงานอุตสาหกรรม",
    "ทำเว็บแคตตาล็อกสินค้าอุตสาหกรรม",
    "Industrial Web Design Thailand",

    // ⚡ Performance & Trust (Pain Point Search)
    "รับทำเว็บไซต์โหลดไวที่สุด 2026",
    "คนทำเว็บไม่ทิ้งงาน",
    "Technical SEO Specialist ภาษาไทย",
    "รับแก้เว็บไซต์ช้า",
  ],
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white pb-24 antialiased selection:bg-emerald-500/20">
      {/* 🔎 JSON-LD Structured Data */}
      <JsonLd
        type="AboutPage"
        data={{
          name: "รู้จัก นายเอ็มซ่ามากส์ - ผู้เชี่ยวชาญเว็บไซต์ SME & Industrial",
          description:
            "เบื้องหลังการสร้างเว็บไซต์ประสิทธิภาพสูงสำหรับเจ้าของกิจการและโรงงาน",
        }}
      />

      {/* 🔝 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-emerald-600">
              <ShieldCheck className="h-4 w-4" />
              <span className="font-prompt text-[10px] font-black tracking-[0.3em] uppercase">
                Direct Expert • No Middleman
              </span>
            </div>
            <h1 className="font-prompt mb-8 text-5xl font-black tracking-tighter text-slate-900 md:text-7xl lg:text-8xl">
              ผมชื่อ <span className="text-emerald-500 italic">เอ็ม.</span>
            </h1>
            <p className="font-anuphan mx-auto max-w-3xl text-lg leading-relaxed font-semibold text-slate-600 md:text-xl">
              ผมไม่ใช่บริษัท ไม่ใช่เอเจนซี่ แต่ผมคือ "คนทำงาน"{" "}
              <br className="hidden md:block" />
              ที่เข้าใจว่าคนทำธุรกิจต้องการอะไรจากเว็บไซต์
            </p>
          </div>
        </div>
      </section>

      {/* 🛡️ 2. Mindset Section */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="group relative aspect-square overflow-hidden rounded-[3rem] shadow-2xl">
              <Image
                src="/images/showcase/aemdevweb-hero.webp"
                alt="การทำงานของนายเอ็มซ่ามากส์"
                fill
                priority
                className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-10">
              <h2 className="font-prompt text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                ผมทำเว็บให้{" "}
                <span className="text-emerald-500">ใช้งานได้จริง</span> <br />
                ไม่ใช่แค่ดูสวยไปวันๆ
              </h2>
              <div className="font-anuphan space-y-6 text-lg text-slate-600">
                <p>
                  ผมเห็นเจ้าของธุรกิจเจอปัญหาเดิมๆ ซ้ำแล้วซ้ำเล่า:{" "}
                  <b>
                    จ้างทำเว็บแล้วทิ้งงาน, คุยภาษาเทคนิคจนงง,
                    หรือได้เว็บที่โหลดช้าจนลูกค้าหนี
                  </b>
                </p>
                <p>
                  ผมเลยตั้งใจทำ <b>นายเอ็มซ่ามากส์</b> ขึ้นมาเพื่อจบปัญหาพวกนี้
                  ผมคุยภาษาเดียวกับคุณ เน้นความไว และเน้นความเนี๊ยบของงาน
                  เพราะผมรู้ว่าทุกวินาทีที่เว็บคุณช้า คือโอกาสที่เงินจะหายไป
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-500 shadow-sm">
                    <Target className="h-5 w-5" />
                  </div>
                  <span className="font-prompt text-[10px] font-black tracking-widest text-slate-900 uppercase">
                    เน้นยอดขาย
                  </span>
                </div>
                <div className="flex items-center gap-3 text-emerald-500">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    <Zap className="h-5 w-5" />
                  </div>
                  <span className="font-prompt text-[10px] font-black tracking-widest text-slate-900 uppercase">
                    เน้นความไว
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🏗️ 3. Client Focus */}
      <section className="py-24 lg:py-40">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-prompt mb-16 text-3xl font-black tracking-tighter text-slate-900 uppercase italic md:text-5xl">
            ผมถนัดช่วย <span className="text-emerald-500">คนกลุ่มนี้</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "เจ้าของกิจการ SME",
                desc: "คนที่อยากมีหน้าเว็บปิดการขายดีๆ เอาไว้รับแรงยิง Ads ให้คุ้มค่าเงินทุกบาท",
              },
              {
                icon: Building2,
                title: "บริษัท & หจก.",
                desc: "คนที่ต้องการความน่าเชื่อถือ มีหน้าโปรไฟล์บริษัทที่ดูแพงและเป็นมืออาชีพ",
              },
              {
                icon: Factory,
                title: "เจ้าของโรงงาน",
                desc: "คนที่อยากจัดระเบียบข้อมูลสินค้าหนักๆ ให้ดูง่าย และต้องการความปลอดภัยสูงสุด",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all hover:border-emerald-500/30 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-[1.2rem] bg-slate-50 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="font-prompt mb-4 text-xl font-black text-slate-900 uppercase">
                  {item.title}
                </h3>
                <p className="font-anuphan leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏆 4. Personal Guarantee */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-[3rem] bg-slate-950 p-12 text-center shadow-2xl lg:p-20">
            <h2 className="font-prompt mb-6 text-2xl font-black tracking-tighter text-emerald-400 uppercase italic md:text-4xl">
              จ้างผม... สบายใจกว่าจ้างบริษัท
            </h2>
            <p className="font-anuphan mb-12 text-slate-400">
              คุยตรงกับผมคนเดียว งานเดินไว
              ไม่ต้องรอผ่านเซลล์หรือแอดมินหลายขั้นตอน
            </p>
            <div className="flex justify-center">
              <TrustBadge variant="grid" />
            </div>
          </div>
        </div>
      </section>

      {/* 🏁 5. CTA Section */}
      <CTASection />

      {/* 📍 Footer Hook */}
      <footer className="mt-20 text-center opacity-30 select-none">
        <p className="font-prompt text-[9px] font-black tracking-[0.5em] text-slate-400 uppercase">
          Build & Care by นายเอ็มซ่ามากส์ v2026
        </p>
      </footer>
    </main>
  )
}
