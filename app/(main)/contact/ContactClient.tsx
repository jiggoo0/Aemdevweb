/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail, MapPin, ArrowRight, Clock } from "lucide-react"

import { siteConfig } from "@/constants/site-config"
import { JsonLd } from "@/components/seo/JsonLd"

/**
 * ContactClient: ส่วนแสดงผลยุทธศาสตร์ (Strategic View Node)
 * -------------------------------------------------------------------------
 * มาตรฐาน: Ultra-Deep Level 7 | Tailwind 4 OKLCH | Zero Warning
 * ควบคุมโดย: นายเอ็มซ่ามากส์ (AEMDEVWEB)
 */
export default function ContactClient() {
  const baseUrl = "https://www.aemdevweb.com"

  return (
    <main className="relative min-h-screen bg-[oklch(1_0_0)] pb-32 antialiased dark:bg-[oklch(0.12_0.02_260)]">
      {/* [1. SCHEMA]: ยืนยันพิกัดการสื่อสารต่อระบบ Search Intelligence */}
      <JsonLd
        type="ContactPage"
        data={{
          "@id": `${baseUrl}/contact/#webpage`,
          name: "ติดต่อสอบถามบริการพัฒนาเว็บไซต์และ SEO | AEMDEVWEB",
          description: "ปรึกษาแผนงานระบบและกลยุทธ์ SEO กับผู้เชี่ยวชาญโดยตรง",
          url: `${baseUrl}/contact`,
          about: { "@id": `${baseUrl}/#organization` },
          mainEntity: { "@id": "https://me.aemdevweb.com/#person" },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "technical support",
            email: siteConfig.company.email,
            url: siteConfig.links.line,
            availableLanguage: ["Thai", "English"],
          },
        }}
      />

      {/* Background Technical Grid */}
      <div className="absolute inset-0 -z-10 bg-[url('/grid.svg')] opacity-[0.03] dark:invert" />

      {/* [2. HERO SECTION]: พิกัดประกาศจุดประสงค์การสื่อสาร */}
      <section className="relative overflow-hidden bg-[oklch(0.98_0.01_260)] pt-32 pb-20 lg:pt-48 lg:pb-40 dark:bg-[oklch(0.15_0.02_260)]">
        <div className="container-za">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl space-y-10"
          >
            <div className="border-brand-primary/20 text-brand-primary inline-flex items-center gap-3 rounded-full border bg-white px-5 py-2 text-[10px] font-black tracking-[0.3em] uppercase italic shadow-sm dark:bg-white/5">
              <span className="relative flex h-2 w-2">
                <span className="bg-brand-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                <span className="bg-brand-primary relative inline-flex h-2 w-2 rounded-full"></span>
              </span>
              Strategic Connection Active: {siteConfig.expert.name}
            </div>

            <h1 className="font-heading text-brand-depth text-6xl leading-[0.9] font-black tracking-tighter uppercase italic md:text-8xl lg:text-9xl dark:text-white">
              Build Your <br />
              <span className="text-brand-primary">Digital Asset.</span>
            </h1>

            <p className="font-body max-w-2xl text-xl leading-relaxed font-bold text-[oklch(0.45_0.02_260)] md:text-2xl dark:text-[oklch(0.7_0.02_260)]">
              เริ่มต้นปรึกษาแผนงานระบบกับ{" "}
              <strong className="text-brand-primary">
                {siteConfig.expert.name}
              </strong>{" "}
              เพื่อยกระดับสมรรถนะธุรกิจของคุณสู่มาตรฐานสากล
            </p>
          </motion.div>
        </div>
      </section>

      {/* [3. CONTACT NODES]: พิกัดโหนดการเชื่อมต่อเชิงระบบ */}
      <section className="relative z-10 -mt-20">
        <div className="container-za">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Main Action Card (LINE Consultation) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="depth-card bg-brand-depth relative overflow-hidden p-12 text-white lg:col-span-8 lg:p-20 dark:bg-[oklch(0.2_0.02_260)]"
            >
              <div className="bg-brand-primary/10 absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full blur-[100px]" />

              <div className="relative z-10 flex h-full flex-col justify-between gap-16">
                <div className="space-y-8">
                  <div className="bg-brand-primary text-brand-depth shadow-aurora flex h-20 w-20 items-center justify-center rounded-[2rem]">
                    <MessageCircle size={40} fill="currentColor" />
                  </div>
                  <h3 className="font-heading text-4xl leading-tight font-black tracking-tight uppercase italic md:text-6xl">
                    Instant <br />
                    <span className="text-brand-primary underline decoration-white/10 underline-offset-8">
                      Consultation.
                    </span>
                  </h3>
                  <p className="font-body max-w-xl text-xl font-bold text-[oklch(0.8_0.02_260)]">
                    ช่องทางสื่อสารหลักเพื่อจองกำหนดการปรึกษาแผนงานเชิงเทคนิคและ SEO
                  </p>
                </div>

                <div className="flex flex-col gap-8 sm:flex-row sm:items-center">
                  <a
                    href={siteConfig.links.line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-brand-depth hover:bg-brand-primary relative inline-flex items-center gap-4 overflow-hidden rounded-3xl bg-white px-10 py-7 shadow-2xl transition-all hover:text-white active:scale-95"
                  >
                    <span className="font-heading text-lg font-black tracking-widest uppercase italic">
                      Contact via LINE
                    </span>
                    <ArrowRight
                      size={24}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </a>
                  <div className="text-brand-primary flex items-center gap-3 text-sm font-black tracking-widest uppercase italic">
                    <Clock size={18} className="animate-spin-slow" />
                    Response Time: ~10 Mins
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secondary Contact Nodes (Email & Location) */}
            <div className="grid gap-8 lg:col-span-4 lg:grid-rows-2">
              <div className="depth-card group hover:border-brand-primary/40 p-12">
                <div className="group-hover:bg-brand-depth flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.98_0.01_260)] text-[oklch(0.6_0.02_260)] transition-all group-hover:text-white dark:bg-white/5">
                  <Mail size={28} />
                </div>
                <div className="mt-8 space-y-2">
                  <h4 className="font-heading text-brand-depth text-xl font-black uppercase italic dark:text-white">
                    Official Mail
                  </h4>
                  <a
                    href={`mailto:${siteConfig.company.email}`}
                    className="font-heading text-brand-primary block text-xs font-black tracking-widest uppercase underline decoration-2 underline-offset-4"
                  >
                    {siteConfig.company.email}
                  </a>
                </div>
              </div>

              <div className="depth-card group hover:border-brand-primary/40 p-12">
                <div className="group-hover:bg-brand-depth flex h-14 w-14 items-center justify-center rounded-2xl bg-[oklch(0.98_0.01_260)] text-[oklch(0.6_0.02_260)] transition-all group-hover:text-white dark:bg-white/5">
                  <MapPin size={28} />
                </div>
                <div className="mt-8 space-y-2">
                  <h4 className="font-heading text-brand-depth text-xl font-black uppercase italic dark:text-white">
                    Operational Hub
                  </h4>
                  <p className="font-body text-sm font-bold text-[oklch(0.45_0.02_260)] dark:text-[oklch(0.7_0.02_260)]">
                    {siteConfig.company.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer Branding */}
      <footer className="mt-40 text-center opacity-30 select-none">
        <p className="font-heading text-brand-depth text-[11px] font-black tracking-[0.6em] uppercase italic dark:text-white">
          AEMDEVWEB • SYSTEM v2026 • DESIGNED BY {siteConfig.expert.realName}
        </p>
      </footer>
    </main>
  )
}
