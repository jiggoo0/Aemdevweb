/** @format */
import React, { memo } from "react"
import { Metadata } from "next"
import {
  Sparkles,
  MessageCircle,
  ArrowDownRight,
  ShieldCheck,
  Zap,
} from "lucide-react"

// Import Components
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import ContactMap from "./_components/ContactMap"

// ✅ ใช้ shared JsonLd
import JsonLd from "@/components/shared/JsonLd"

import { siteConfig } from "@/config/siteConfig"
import { cn } from "@/lib/utils"

/**
 * 🛠️ SEO Optimization: ดึงดูด SME ด้วย Keyword ที่ตรงจุด
 */
export const metadata: Metadata = {
  title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
  description:
    "เริ่มต้นเว็บไซต์ธุรกิจของคุณด้วยระบบวิศวกรรมที่แม่นยำ ปรึกษาฟรีสำหรับ SME และ หจก. คุยง่าย ตรงไปตรงมา งบไม่บานปลาย",
  openGraph: {
    title: `ติดต่อพาร์ทเนอร์โปรเจกต์ | ${siteConfig.name}`,
    description:
      "ยินดีให้คำปรึกษาฟรีเหมือนพาร์ทเนอร์สายเทคส่วนตัว เพื่อเว็บไซต์ที่ปิดการขายได้จริง",
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.name,
    locale: "th_TH",
    type: "website",
  },
}

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="LocalBusiness"
        data={{
          name: siteConfig.name,
          description: siteConfig.description,
          phone: siteConfig.contact.tel,
          address: siteConfig.contact.address,
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* ─── 1. HERO SECTION ─── */}
      <section className="relative overflow-hidden border-b-[6px] border-slate-900 bg-slate-50 py-24 md:py-40">
        {/* Blueprint Grid Background */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        {/* Cinematic Glow */}
        <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[100px]" />
        <div className="container mx-auto px-6">
          <div className="max-w-5xl space-y-12">
            <div className="group inline-flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-3 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] transition-all hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 md:text-xs">
                Available for New Projects v2025
              </span>
            </div>
            <h1 className="text-5xl font-black uppercase italic leading-[0.9] tracking-tighter text-slate-900 md:text-8xl lg:text-[100px]">
              เปลี่ยนไอเดียให้เป็น <br />
              <span className="text-blue-600 underline decoration-slate-900 decoration-8 underline-offset-[12px]">
                ผลลัพธ์ที่จับต้องได้
              </span>
            </h1>
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-2xl border-l-[10px] border-blue-600/20 pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ผมยินดีให้คำปรึกษาฟรีสำหรับ SME ไทยที่อยากมีเว็บไซต์คุณภาพสูง
                คุยง่าย ตรงไปตรงมา เหมือนมี{" "}
                <span className="text-slate-900">Chief Technology Partner</span>{" "}
                ดูแลด้วยตัวเองครับ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. MAIN CONTENT GRID ─── */}
      <section className="relative z-10 -mt-12 bg-white pb-24 md:pb-40">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-px overflow-hidden border-[6px] border-slate-900 bg-slate-900 shadow-2xl lg:grid-cols-12">
            {/* Left Side */}
            <div className="relative bg-slate-900 p-10 text-white md:p-16 lg:col-span-5">
              {/* Subtle Blueprint Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20" />
              <div className="relative z-10">
                <div className="mb-16 space-y-4">
                  <div className="inline-block border-b-4 border-blue-600 pb-3">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">
                      Technical Station
                    </h2>
                  </div>
                  <h3 className="text-5xl font-black uppercase italic tracking-tighter">
                    Contact <br />
                    Information
                  </h3>
                </div>
                <div className="space-y-12">
                  <ContactInfo />
                </div>
                <div className="mt-24 border-t border-white/10 pt-12">
                  <div className="flex items-start gap-5">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-blue-600/20 text-blue-500">
                      <ShieldCheck size={24} strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">
                        Support Protocol
                      </p>
                      <p className="mt-1 text-sm font-bold italic leading-relaxed text-slate-400">
                        จันทร์ - ศุกร์ (09:00 - 18:00) <br />
                        <span className="font-black not-italic text-white">
                          ฉุกเฉิน: ติดต่อผ่าน Line OA ได้ 24 ชม.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="bg-white p-10 md:p-16 lg:col-span-7">
              <div className="mb-14 flex items-start justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-blue-600">
                    <Zap size={18} fill="currentColor" />
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">
                      Direct Message Channel
                    </h2>
                  </div>
                  <h3 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900 md:text-5xl">
                    ส่งข้อมูลโปรเจกต์
                  </h3>
                  <p className="max-w-md text-lg font-bold leading-relaxed text-slate-500">
                    บอกเล่าไอเดียหรือปัญหาที่คุณเจอไว้
                    แล้วผมจะทำการวิเคราะห์เบื้องต้น
                    และติดต่อกลับพร้อมทางออกภายใน 24 ชม. ครับ
                  </p>
                </div>
                <div className="hidden h-20 w-20 items-center justify-center border-4 border-slate-900 bg-white text-slate-900 shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] sm:flex">
                  <MessageCircle size={36} strokeWidth={2.5} />
                </div>
              </div>
              <ContactForm templateId="main-contact-page" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. GOOGLE MAP ─── */}
      <section className="relative border-y-[6px] border-slate-900">
        <div className="relative aspect-[21/9] min-h-[400px] w-full grayscale-[0.8] transition-all duration-1000 hover:grayscale-0">
          <ContactMap />
          <div className="absolute bottom-12 left-12 z-10 hidden border-l-[12px] border-blue-600 bg-slate-900 px-10 py-6 text-white shadow-2xl md:block">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500">
                Satellite Geolocation
              </span>
              <span className="flex items-center gap-4 text-xl font-black uppercase italic tracking-widest">
                Our Workspace{" "}
                <ArrowDownRight size={24} className="text-blue-500" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(ContactPage)
