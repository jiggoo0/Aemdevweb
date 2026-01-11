/** @format */
"use client"

import React, { memo } from "react"
import {
  Sparkles,
  MessageCircle,
  ArrowDownRight,
  ShieldCheck,
  Zap,
  MapPin,
  Activity,
} from "lucide-react"

// Import Components
import ContactForm from "@/components/ContactForm"
import ContactInfo from "@/components/ContactInfo"
import JsonLd from "@/components/seo/JsonLd"
import { siteConfig } from "@/config/siteConfig"

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white font-sans antialiased selection:bg-[#1E3A8A] selection:text-white">
      {/* 🚀 SEO STRUCTURED DATA */}
      <JsonLd
        type="LocalBusiness"
        data={{
          name: siteConfig.name,
          description: siteConfig.description,
          telephone: siteConfig.contact.tel,
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.contact.address,
            addressLocality: "Bangkok",
            addressCountry: "TH",
          },
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* ─── 01. HERO SECTION: THE BRIDGE ─── */}
      <section className="relative overflow-hidden border-b-[8px] border-[#0F172A] bg-slate-50 py-24 md:py-40">
        <div
          className="absolute inset-0 z-0 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] opacity-30 [background-size:32px_32px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-5xl space-y-12">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 border-4 border-[#0F172A] bg-white px-6 py-3 shadow-[6px_6px_0px_0px_#0F172A] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              <Sparkles size={16} className="animate-pulse text-[#F97316]" />
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-[#0F172A] md:text-xs">
                Protocol: Open for Project v{siteConfig.version}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-6xl uppercase leading-[0.85] tracking-tighter text-[#0F172A] md:text-8xl lg:text-9xl">
              Turn Vision into <br />
              <span className="text-[#1E3A8A] underline decoration-[#F97316] decoration-[12px] underline-offset-[16px] md:decoration-[20px]">
                Reality.
              </span>
            </h1>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <p className="max-w-2xl border-l-[12px] border-[#F97316] pl-8 text-xl font-bold leading-relaxed text-slate-500 md:text-2xl">
                ปรึกษาฟรีสำหรับ SME ไทยที่ต้องการโครงสร้างเว็บที่แข็งแกร่ง
                คุยง่าย ตรงจุด เหมือนมี{" "}
                <span className="text-[#0F172A]">Technology Partner</span>{" "}
                ดูแลโปรเจกต์ด้วยตัวเอง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02. MAIN CONTENT GRID (FORM & INFO) ─── */}
      <section className="relative z-10 -mt-16 pb-24 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 overflow-hidden border-[6px] border-[#0F172A] bg-[#0F172A] shadow-[24px_24px_0px_0px_rgba(30,58,138,0.1)] lg:grid-cols-12">
            {/* 🟦 LEFT: TECHNICAL DATA CENTER */}
            <div className="relative bg-[#0F172A] p-10 text-white md:p-16 lg:col-span-5">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#fff_1.5px,transparent_1.5px),linear-gradient(90deg,#fff_1.5px,transparent_1.5px)] [background-size:40px_40px]" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-16 space-y-4">
                  <div className="inline-block border-b-4 border-[#F97316] pb-3">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#F97316]">
                      System_Inquiry
                    </h2>
                  </div>
                  <h3 className="font-heading text-6xl uppercase tracking-tighter">
                    Contact <br /> Hub.
                  </h3>
                </div>

                <div className="flex-grow">
                  <ContactInfo />
                </div>

                {/* Status Protocol Footer */}
                <div className="mt-24 border-t-2 border-white/10 pt-12">
                  <div className="flex items-start gap-6">
                    <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center border-2 border-[#1E3A8A]/50 bg-[#1E3A8A]/10 text-[#1E3A8A] shadow-[4px_4px_0_0_#1E3A8A]">
                      <ShieldCheck size={32} strokeWidth={2.5} />
                    </div>
                    <div className="space-y-2">
                      <p className="font-mono text-[10px] font-black uppercase leading-none tracking-[0.4em] text-[#1E3A8A]">
                        Operating_Status
                      </p>
                      <p className="text-sm font-bold italic leading-relaxed text-slate-400">
                        Available Mon-Sat (09:00 - 18:00) <br />
                        <span className="font-black not-italic text-white underline decoration-[#F97316]">
                          Emergency: Line OA Active 24/7
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ⬜ RIGHT: WORK ORDER FORM */}
            <div className="bg-white p-10 md:p-16 lg:col-span-7">
              <div className="mb-14 flex flex-col justify-between gap-8 sm:flex-row sm:items-start">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#F97316]">
                    <Zap size={20} fill="currentColor" />
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em]">
                      Direct_Message_Channel
                    </h2>
                  </div>
                  <h3 className="font-heading text-5xl uppercase tracking-tighter text-[#0F172A] md:text-6xl">
                    Project Brief.
                  </h3>
                  <p className="max-w-md text-lg font-bold leading-relaxed text-slate-500">
                    บอกเล่าเป้าหมายหรือปัญหาที่คุณเจอ
                    เราจะวิเคราะห์สถาปัตยกรรมเบื้องต้น
                    และติดต่อกลับโดยเร็วที่สุด
                  </p>
                </div>
                <div className="flex h-24 w-24 shrink-0 items-center justify-center border-[6px] border-[#0F172A] bg-white text-[#0F172A] shadow-[8px_8px_0px_0px_#0F172A]">
                  <MessageCircle size={40} strokeWidth={2.5} />
                </div>
              </div>

              <ContactForm templateId="main-contact-page" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 03. GEOLOCATION INTERFACE (MAP AREA) ─── */}
      <section className="container mx-auto px-6 pb-24 md:pb-40">
        <div className="relative overflow-hidden border-[6px] border-[#0F172A] bg-slate-200 shadow-[20px_20px_0px_0px_#cbd5e1]">
          {/* Header Bar for Map */}
          <div className="flex items-center justify-between border-b-[6px] border-[#0F172A] bg-white px-8 py-4">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-[#F97316]" />
              <span className="font-mono text-[11px] font-black uppercase tracking-widest text-[#0F172A]">
                Satellite_Tracker // Physical_Node
              </span>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-500" />
              <span className="font-mono text-[10px] font-black text-slate-400">
                SIGNAL_STRENGTH: 100%
              </span>
            </div>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            {/* Map Frame */}
            <div className="relative min-h-[500px] overflow-hidden bg-slate-300 lg:col-span-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68101724214!2d100.35473289453124!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sth!4v1700000000000!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) contrast(1.2) opacity(0.8)",
                }}
                allowFullScreen
                loading="lazy"
                title="AEMDEVWEB_LOCATION"
              />
              {/* Overlay Pattern */}
              <div className="pointer-events-none absolute inset-0 bg-[#1E3A8A]/5 mix-blend-multiply" />
            </div>

            {/* Map Info Sidebar */}
            <div className="flex flex-col justify-center border-l-[6px] border-[#0F172A] bg-white p-10 lg:col-span-4">
              <div className="space-y-10">
                <div className="space-y-4">
                  <div className="h-2 w-16 bg-[#F97316]" />
                  <h4 className="font-heading text-4xl uppercase tracking-tighter text-[#0F172A]">
                    Primary Node.
                  </h4>
                  <p className="text-lg font-bold leading-relaxed text-slate-500">
                    ตั้งอยู่ใจกลางกรุงเทพฯ พร้อมสนับสนุนการขยายตัวของ SME
                    ผ่านระบบ{" "}
                    <span className="text-[#1E3A8A]">
                      Remote Engineering Consulting
                    </span>{" "}
                    ทั่วประเทศ
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center border-4 border-[#0F172A] bg-slate-50 shadow-[6px_6px_0_0_#F97316] transition-all group-hover:shadow-none">
                      <MapPin size={28} className="text-[#0F172A]" />
                    </div>
                    <div>
                      <p className="font-mono text-[9px] font-black uppercase text-slate-400">
                        Base_Coordinate
                      </p>
                      <p className="font-black uppercase text-[#0F172A]">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  <a
                    href={siteConfig.contact.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-between border-4 border-[#0F172A] bg-[#0F172A] px-6 py-5 text-sm font-black uppercase tracking-widest text-white shadow-[8px_8px_0_0_#F97316] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    Initialize Chat
                    <ArrowDownRight size={20} className="text-[#F97316]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default memo(ContactPage)
