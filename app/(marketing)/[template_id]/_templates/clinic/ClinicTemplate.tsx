/** @format */

"use client"

import React, { useState, useEffect } from "react"
import styles from "./ClinicStyle.module.css"
import { clinicConfig } from "./config"

// Layout & Core Components
import Header from "./components/Header"
import ClinicHero from "./components/ClinicHero"
import ServiceGrid from "./components/ServiceGrid"
import AppointmentForm from "./components/AppointmentForm"

// Enhanced Components
import TestimonialSlider from "./components/TestimonialSlider"
import FAQSection from "./components/FAQSection"
import LocationMap from "./components/LocationMap"

export default function ClinicTemplate() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    /**
     * ✅ ปิดกฎ ESLint เฉพาะจุดสำหรับแพทเทิร์น Hydration Fix
     * การตั้งค่า mounted state ใน useEffect เป็นมาตรฐานสำหรับ Next.js
     * เพื่อป้องกันความแตกต่างระหว่าง Server และ Client UI
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  // แสดง Placeholder ระหว่างรอนะบบ Hydration เพื่อรักษาประสิทธิภาพ LCP
  if (!isMounted) {
    return <div className="min-h-screen bg-slate-50" />
  }

  return (
    <article className={styles.container} suppressHydrationWarning>
      {/* ─── NAVIGATION ─── */}
      <Header />

      {/* ─── 1. HERO SECTION ─── */}
      <section id="home">
        <ClinicHero data={clinicConfig.content.hero} />
      </section>

      {/* ─── 2. SERVICES SECTION ─── */}
      <section id="services" className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <header className="mb-16 text-center">
            <span className="mb-4 block text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Our Medical Expertise
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 md:text-5xl">
              บริการทางการแพทย์
            </h2>
            <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-sky-500 to-emerald-400" />
          </header>
          <ServiceGrid items={clinicConfig.content.services} />
        </div>
      </section>

      {/* ─── 3. TESTIMONIALS SECTION ─── */}
      <section id="testimonials">
        <TestimonialSlider />
      </section>

      {/* ─── 4. APPOINTMENT SECTION ─── */}
      <section
        id="appointment"
        className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
      >
        <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 opacity-5">
          <div className="h-[600px] w-[600px] rounded-full border-[80px] border-sky-500" />
        </div>
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
            {/* Trust Content Section */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h3 className="text-3xl font-bold text-slate-900 md:text-5xl">
                เริ่มต้นการดูแลสุขภาพที่ดีกับเรา
              </h3>
              <p className="text-lg leading-relaxed text-slate-600">
                นัดหมายปรึกษาแพทย์ล่วงหน้า เพื่อความสะดวกรวดเร็ว
                และรับการดูแลที่เป็นส่วนตัวในระดับพรีเมียม
              </p>
              <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2">
                {[
                  "ปรึกษาเบื้องต้นไม่มีค่าใช้จ่าย",
                  "เครื่องมือแพทย์มาตรฐานสากล",
                  "รับสิทธิประกันสุขภาพชั้นนำ",
                  "นัดหมายออนไลน์ 24 ชม.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-sky-500" />
                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion Form */}
            <div className="w-full lg:w-[550px]">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. FAQ SECTION ─── */}
      <section id="faq">
        <FAQSection />
      </section>

      {/* ─── 6. LOCATION SECTION ─── */}
      <section id="location">
        <LocationMap />
      </section>

      {/* ─── 7. FOOTER SECTION ─── */}
      <footer className="bg-slate-950 py-20 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-16 border-b border-slate-800 pb-20 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tighter">
                {clinicConfig.name}
              </h3>
              <p className="text-slate-400">
                {clinicConfig.metadata.description}
              </p>
            </div>
            <div className="space-y-4 md:text-center">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-500">
                ติดต่อเรา
              </h4>
              <p className="text-slate-300">
                {clinicConfig.content.contact.address}
              </p>
              <p className="text-xl font-bold">
                {clinicConfig.content.contact.phone}
              </p>
            </div>
            <div className="space-y-4 md:text-right">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sky-500">
                เวลาเปิดทำการ
              </h4>
              <p className="text-lg font-semibold">
                {clinicConfig.content.contact.openHours}
              </p>
              <p className="text-sm italic text-slate-500">
                ดูแลคุณทุกวันไม่เว้นวันหยุด
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} {clinicConfig.name}. Medical
              Excellence & Care.
            </p>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-tighter text-slate-700">
              <a href="#" className="transition-colors hover:text-sky-500">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-sky-500">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </article>
  )
}
