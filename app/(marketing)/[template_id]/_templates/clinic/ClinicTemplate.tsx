/** @format */
"use client"

import React from "react"
import styles from "./ClinicStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface ClinicProps {
  data: any
}

export default function ClinicTemplate({ data }: ClinicProps) {
  // 🛡️ Safe Data Access: ป้องกันกรณีข้อมูลไม่มา หน้าเว็บจะไม่พัง
  const { content } = data || {}
  const CheckIcon = iconMap.CHECK

  // Guard Clause
  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏥 Hero Section: Premium Clean Look */}
      <section className={styles.hero}>
        <span className={styles.heroTag}>Trusted Medical Center</span>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>

        <div className="flex flex-wrap gap-4">
          <button className="bg-blue-600 px-10 py-4 font-black uppercase italic text-white shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            Book Appointment
          </button>
          <button className="border-4 border-slate-900 bg-white px-10 py-4 font-black uppercase italic text-slate-900 transition-colors hover:bg-slate-900 hover:text-white">
            Services
          </button>
        </div>

        {/* Decor: Medical Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#2563eb 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </section>

      {/* 📊 Stats Section: Trust Building */}
      <div className="px-8">
        <section className={styles.statsGrid}>
          {content.stats?.map((stat: any) => (
            <div key={stat.id} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </section>
      </div>

      {/* 🩺 Services: Clean Industrial Design */}
      <section className={styles.serviceSection}>
        <div className="mb-16 border-l-8 border-blue-600 pl-6">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            OUR SPECIALTIES
          </h2>
          <p className="mt-2 font-bold italic text-slate-400">
            บริการทางการแพทย์ที่เราเชี่ยวชาญ
          </p>
        </div>

        <div className={styles.serviceGrid}>
          {content.services?.map((service: any, idx: number) => (
            <div key={idx} className={styles.serviceCard}>
              <div className="mb-4 text-blue-600">
                {CheckIcon && <CheckIcon size={32} />}
              </div>
              <h3 className="mb-4 text-xl font-black uppercase italic text-slate-900">
                {service.title}
              </h3>
              <p className="text-sm font-bold leading-relaxed text-slate-500">
                {service.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 👨‍⚕️ Trust Banner: ดีไซน์แบบคลีนิกพรีเมียม */}
      <section className="flex flex-col items-center justify-between gap-10 bg-slate-900 px-8 py-20 text-white md:flex-row">
        <div className="md:w-1/2">
          <h2 className="mb-6 text-5xl font-black uppercase italic leading-tight tracking-tighter">
            Expert Hands.
            <br />
            Modern Mind.
          </h2>
          <p className="text-lg font-bold italic text-blue-200">
            เราให้ความสำคัญกับจริยธรรมทางการแพทย์และความเป็นส่วนตัวของคนไข้เป็นอันดับหนึ่ง
          </p>
        </div>
        <div className="border-4 border-blue-600 bg-white/5 p-8 shadow-[12px_12px_0px_0px_rgba(37,99,235,0.3)] backdrop-blur-lg md:w-1/3">
          {/* ✅ แก้ไขจุด Error: ใช้คอมเมนต์ JSX ที่ถูกต้อง */}
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-blue-400">
            CLINIC HOURS
          </p>
          <div className="space-y-4 font-bold italic">
            <div className="flex justify-between">
              <span className="text-slate-400">MON - FRI</span>
              <span className="text-white underline decoration-blue-500 underline-offset-4">
                09:00 - 20:00
              </span>
            </div>
            <div className="flex justify-between border-t border-white/10 pt-4">
              <span className="text-slate-400">SAT - SUN</span>
              <span className="text-white underline decoration-blue-500 underline-offset-4">
                10:00 - 18:00
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
