/** @format */
"use client"

import React from "react"
import Image from "next/image" // 🛡️ นำเข้า Next.js Image เพื่อลด Warning LCP
import styles from "./ConstructionStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface Props {
  data: any
}

export default function ConstructionTemplate({ data }: Props) {
  // 🛡️ Safe Access: ป้องกัน Error กรณีโครงสร้างข้อมูลผิดพลาด
  const { content } = data || {}
  const ArrowIcon = iconMap.ARROW_RIGHT

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🏗️ Hero Section: Infrastructure Vibe */}
      <section className={styles.hero}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <span className="mb-4 block font-mono font-black uppercase tracking-[0.5em] text-yellow-500">
            {"Established 2000 // ISO 9001 Certified"}
          </span>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className={styles.heroSubtitle}>{content.heroSubtitle}</p>

          <div className="flex flex-wrap gap-6">
            <button className="bg-yellow-500 px-12 py-5 font-black uppercase italic text-slate-900 shadow-[6px_6px_0px_0px_#fff] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Request_Proposal
            </button>
            <button className="border-2 border-white px-12 py-5 font-black uppercase italic text-white transition-all hover:bg-white hover:text-slate-900">
              Our_Credentials
            </button>
          </div>
        </div>
      </section>

      {/* 📊 Track Record: The Numbers of Trust */}
      <div className="px-4">
        <section className={styles.trackRecordBar}>
          {content.trackRecord?.map((item: any, idx: number) => (
            <div key={idx} className={styles.trackItem}>
              <div className={styles.trackValue}>{item.value}</div>
              <div className={styles.trackLabel}>{item.label}</div>
            </div>
          ))}
        </section>
      </div>

      {/* 🛡️ Expertise Grid: Business Professional Services */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="border-l-8 border-slate-900 pl-6">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">
              CORE_EXPERTISE
            </h2>
            <p className="mt-2 font-bold text-slate-400">
              ศักยภาพในการดำเนินโครงการหลากหลายรูปแบบ
            </p>
          </div>
          <div className="hidden font-mono text-sm font-bold text-slate-400 md:block">
            /INDUSTRIAL_CAPABILITIES
          </div>
        </div>

        <div className={styles.expertiseGrid}>
          {content.expertise?.map((item: any) => (
            <div key={item.id} className={styles.expertiseCard}>
              <h3 className="mb-4 text-2xl font-black uppercase italic text-slate-900">
                {item.label}
              </h3>
              <p className="mb-8 font-bold leading-relaxed text-slate-600">
                {item.detail}
              </p>
              <div className="group flex cursor-pointer items-center gap-2 font-black uppercase italic text-yellow-600">
                {"Project_Details "}
                {ArrowIcon && (
                  <ArrowIcon className="transition-transform group-hover:translate-x-2" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🏢 Public & Private Partnership Section */}
      <section className="bg-slate-100 px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
          <div className="md:w-1/2">
            <div className="relative border-8 border-slate-900 p-4 shadow-[16px_16px_0px_0px_#eab308]">
              {/* 🛡️ ใช้ Next.js Image เพื่อลด Warning และเพิ่ม Performance */}
              <Image
                src="/images/projects/construction.jpg"
                alt="Construction Site"
                width={800}
                height={600}
                className="object-cover contrast-125 grayscale"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-6 text-4xl font-black uppercase italic text-slate-900">
              PROVEN_RELIABILITY
            </h2>
            <p className="mb-8 text-lg font-bold leading-relaxed text-slate-600">
              {
                "เรามีความเชี่ยวชาญในการร่วมงานกับหน่วยงานราชการและบริษัทเอกชนชั้นนำ ด้วยระบบการจัดการโครงการที่เป็นสากล โปร่งใส และเสร็จสิ้นตามกำหนดเวลา (On-time Delivery)"
              }
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-4 border-slate-900 bg-white p-6">
                <p className="text-xl font-black italic">QA/QC</p>
                <p className="text-xs font-bold uppercase text-slate-400">
                  Quality Assurance
                </p>
              </div>
              <div className="border-4 border-slate-900 bg-white p-6">
                <p className="text-xl font-black italic">HSE</p>
                <p className="text-xs font-bold uppercase text-slate-400">
                  Health & Safety
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
