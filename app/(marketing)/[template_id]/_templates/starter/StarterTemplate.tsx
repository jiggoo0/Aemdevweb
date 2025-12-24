/** @format */
"use client"

import React from "react"
import styles from "./StarterStyle.module.css"
import { iconMap } from "@/components/iconMap"

interface Props {
  data: any
}

export default function StarterTemplate({ data }: Props) {
  // 🛡️ Defensive Programming: ป้องกันกรณี data หรือ content ว่าง
  const { content } = data || {}
  const Check = iconMap.CHECK
  const Rocket = iconMap.STARTER

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🚀 Header: Flash Sale Vibe */}
      <section className={styles.hero}>
        <div className={styles.badge}>LIMITED_OFFER: FIRST_10_CUSTOMERS</div>
        <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
        <p className="max-w-xl text-xl font-bold italic text-slate-500">
          {content.heroSubtitle}
        </p>

        {/* Background Decor */}
        <div
          className="absolute left-10 top-10 hidden rotate-[-15deg] opacity-10 md:block"
          aria-hidden="true"
        >
          {Rocket && <Rocket size={150} />}
        </div>
      </section>

      {/* 🛒 The Promotion Cart: จุดขายสำคัญ */}
      <div className="relative z-50 px-4">
        <section className={styles.cartWidget}>
          <div className="mb-6 flex items-start justify-between">
            <div className="font-mono text-[10px] font-black uppercase text-slate-400">
              Item_Order: {content.cartItem?.name}
            </div>
            <span className="animate-pulse text-[10px] font-bold text-green-600">
              ● {content.cartItem?.status}
            </span>
          </div>

          <div className={styles.priceTag}>
            <span className={styles.currentPrice}>฿{content.promoPrice}</span>
            <span className={styles.oldPrice}>฿{content.originalPrice}</span>
            <span className="rounded bg-green-100 px-2 py-0.5 text-[10px] font-black text-green-600">
              SAVE {content.savePercent}
            </span>
          </div>

          <div className="space-y-2 border-t-2 border-dashed border-slate-200 pt-4">
            <p className="text-[10px] font-bold uppercase text-slate-400">
              Inclusions:
            </p>
            <div className="text-xs font-bold italic">
              + SSL Certificate Free
            </div>
            <div className="text-xs font-bold italic">
              + Mobile-First Engine
            </div>
          </div>

          <button className={styles.checkoutBtn} type="button">
            CLAIM_OFFER_NOW
          </button>

          <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-widest text-slate-400">
            * No Hidden Fees // One-time Payment
          </p>
        </section>
      </div>

      {/* 🛠️ Technical Highlights */}
      <section className="mx-auto max-w-7xl py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            WHY_CHOOSE_US?
          </h2>
          <div
            className="mx-auto mt-2 h-2 w-12 bg-slate-900"
            aria-hidden="true"
          ></div>
        </div>

        <div className={styles.featureList}>
          {content.features?.map((f: any) => (
            <div key={f.id} className={styles.featureItem}>
              {Check && <Check className="text-[#ff3e3e]" size={20} />}
              <span className="font-bold italic text-slate-700">{f.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ⚡ Performance Banner */}
      <section className="relative overflow-hidden bg-slate-900 px-8 py-16 text-white">
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-4 text-5xl font-black uppercase italic leading-none">
              ULTRA_FAST
              <br />
              LOADING.
            </h2>
            <p className="font-bold italic text-slate-400">
              เราใช้เทคโนโลยี Next.js 15 ล่าสุด
              เพื่อให้หน้าเว็บของคุณโหลดเร็วกว่าคู่แข่ง 3 เท่า
            </p>
          </div>
          <div className="flex justify-end md:w-1/2">
            <div className="border-4 border-[#ff3e3e] bg-white p-8 text-6xl font-black italic text-slate-900 shadow-[8px_8px_0px_0px_rgba(255,62,62,0.5)]">
              99/100
              <p className="text-xs uppercase tracking-tighter text-slate-400">
                PageSpeed Score
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Engineering Grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </section>
    </div>
  )
}
