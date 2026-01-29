/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, MapPin, ArrowRight, Clock } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ContactPage - ส่วนงานติดต่อและประสานงานโครงการ (The Strategic Contact Hub)
 * -------------------------------------------------------------------------
 * ยุทธศาสตร์: การสร้างจุดเชื่อมต่อที่ไร้รอยต่อเพื่อการเริ่มต้นโครงการที่แม่นยำ
 * มาตรฐาน: AEMDEVWEB Strategic Service
 */
export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white pb-32 antialiased selection:bg-emerald-500/10">
      {/* 1. SEO INFRASTRUCTURE: การระบุโครงสร้างข้อมูลเพื่อความน่าเชื่อถือระดับสากล */}
      <JsonLd
        type="ContactPage"
        data={{
          "@id": `${siteConfig.project.url}/contact/#webpage`,
          name: "ติดต่อสอบถามบริการพัฒนาเว็บไซต์และ SEO | AEMDEVWEB",
          description:
            "ปรึกษาแผนงานระบบและกลยุทธ์ SEO กับผู้เชี่ยวชาญโดยตรงเพื่อความเหนือระดับของธุรกิจ",
          url: `${siteConfig.project.url}/contact`,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "technical support",
            email: siteConfig.company.email,
            url: siteConfig.links.line,
          },
        }}
      />

      {/* รายละเอียดพื้นหลัง: ลายเส้นโครงสร้างเชิงระบบเพื่อความประณีต */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
        aria-hidden="true"
      />

      {/* 2. HERO SECTION: ส่วนนำเสนอความพร้อมในการให้บริการ */}
      <section className="relative overflow-hidden bg-slate-50/50 pt-32 pb-20 lg:pt-48 lg:pb-40">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-500/5 blur-[120px]" />

        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl space-y-10"
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-white px-5 py-2 text-[10px] font-black tracking-[0.3em] text-emerald-600 uppercase italic shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Strategic Connection Active
            </div>

            <h1 className="font-heading text-6xl leading-[0.9] font-black tracking-tighter text-slate-950 uppercase italic md:text-8xl lg:text-9xl">
              Build Your <br />
              <span className="text-emerald-500">Digital Asset.</span>
            </h1>

            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-slate-500 md:text-2xl">
              "AEMDEVWEB: รวดเร็ว แม่นยำ และเปี่ยมประสิทธิภาพ" <br />
              เริ่มต้นปรึกษาแผนงานระบบกับผู้เชี่ยวชาญเพื่อผลลัพธ์ทางธุรกิจที่วัดผลได้จริง
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CONTACT NODES: ช่องทางการติดต่อสื่อสารหลัก */}
      <section className="relative z-10 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Primary Action Card: LINE Official Account */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden rounded-[4rem] bg-slate-950 p-12 text-white shadow-2xl shadow-emerald-500/10 lg:col-span-8 lg:p-20"
            >
              <div className="absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[100px] transition-all group-hover:bg-emerald-500/20" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-16">
                <div className="space-y-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-emerald-500 text-slate-950 shadow-xl shadow-emerald-500/30">
                    <MessageCircle size={40} fill="currentColor" />
                  </div>
                  <h3 className="font-heading text-4xl leading-tight font-black tracking-tight uppercase italic md:text-6xl">
                    Instant <br />
                    <span className="text-emerald-400 underline decoration-white/10 underline-offset-8">
                      Consultation.
                    </span>
                  </h3>
                  <p className="font-body max-w-xl text-xl font-bold text-slate-400">
                    ช่องทางที่รวดเร็วที่สุดสำหรับการจองกำหนดการปรึกษาแผนงาน
                  </p>
                </div>

                <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                  <a
                    href={siteConfig.links.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn relative inline-flex items-center gap-4 overflow-hidden rounded-3xl bg-white px-10 py-7 text-slate-950 transition-all hover:bg-emerald-500 hover:text-white active:scale-95"
                  >
                    <span className="font-heading text-lg font-black tracking-widest uppercase italic">
                      Contact via LINE
                    </span>
                    <ArrowRight
                      size={24}
                      className="transition-transform group-hover/btn:translate-x-2"
                    />
                  </a>
                  <div className="flex items-center gap-3 text-sm font-black tracking-widest text-emerald-500 uppercase italic">
                    <Clock
                      size={18}
                      className="animate-spin"
                      style={{ animationDuration: "3s" }}
                    />
                    Response Time: ~10 Mins
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ส่วนข้อมูลการติดต่อรอง */}
            <div className="grid gap-8 lg:col-span-4 lg:grid-rows-2">
              {/* Email Connection */}
              <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-12 transition-all hover:border-emerald-500/20 hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                  <Mail size={28} />
                </div>
                <div className="mt-8 space-y-2">
                  <h4 className="font-heading text-xl font-black text-slate-950 uppercase italic">
                    Official Correspondence
                  </h4>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="font-heading block text-xs font-black tracking-widest text-emerald-600 uppercase underline decoration-2 underline-offset-4"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              {/* Operational Hub (Location) */}
              <div className="group relative rounded-[3rem] border border-slate-100 bg-white p-12 transition-all hover:border-emerald-500/20 hover:shadow-2xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-slate-950 group-hover:text-white">
                  <MapPin size={28} />
                </div>
                <div className="mt-8 space-y-2">
                  <h4 className="font-heading text-xl font-black text-slate-950 uppercase italic">
                    Operational Hub
                  </h4>
                  <p className="font-body text-sm font-bold text-slate-500">
                    {siteConfig.company.address}
                  </p>
                  <span className="font-heading inline-flex items-center gap-2 text-[10px] font-black tracking-widest text-slate-300 uppercase italic">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Global Support Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ส่วนสรุปข้อมูลและรุ่นของระบบ */}
      <footer className="mt-40 text-center opacity-30 select-none">
        <p className="font-heading text-[11px] font-black tracking-[0.6em] text-slate-400 uppercase italic">
          Developed by {siteConfig.expert.realName} • 2026
        </p>
      </footer>
    </main>
  )
}
