/** @format */
"use client"

import React from "react"
import Image from "next/image"
import styles from "./CafeStyle.module.css"
import { cn } from "@/lib/utils"

interface CafeProps {
  data: any
}

export default function CafeTemplate({ data }: CafeProps) {
  // 🛡️ ป้องกันกรณีข้อมูลไม่ถูกส่งมา
  const { content } = data || {}

  if (!content) return null

  return (
    <div className={styles.wrapper}>
      {/* 🟢 Hero Section: Starbucks Vibe */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{content.heroTitle}</h1>
          <p className="max-w-md text-xl font-bold italic opacity-80">
            {content.heroSubtitle}
          </p>
          <button className="mt-8 bg-white px-10 py-4 text-xl font-black uppercase italic text-[#1e3932] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
            {"Order_Now"}
          </button>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.circleBadge}></div>
        </div>

        {/* Decor: Background Typography */}
        <div className="pointer-events-none absolute right-0 top-0 select-none text-[20vw] font-black opacity-10">
          {"COFFEE"}
        </div>
      </section>

      {/* 📦 Feature Grid: Modern Industrial Layout */}
      <section className={styles.featureGrid}>
        {content.features?.map((item: any) => (
          <div key={item.id} className={styles.featureCard}>
            <span className={styles.featureLabel}>LOG_{item.id}</span>
            <h3 className={styles.featureTitle}>{item.label}</h3>
            <p className="font-bold italic text-slate-500">{item.detail}</p>
          </div>
        ))}
      </section>

      {/* 🥤 Signature Section */}
      <section className="flex flex-col items-center gap-16 bg-white px-8 py-24 md:flex-row">
        <div className="bg-[#d4e9e2] p-4 shadow-[12px_12px_0px_0px_rgba(30,57,50,1)] md:w-1/2">
          <Image
            src="/images/cafe/signature-brew.webp"
            alt="Coffee"
            width={800}
            height={600}
            className="h-auto w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
            priority // เพิ่ม priority สำหรับภาพที่อยู่ส่วนบนของหน้า
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="mb-6 text-4xl font-black uppercase italic underline decoration-[#1e3932] decoration-8">
            {"Crafted_By_Hand"}
          </h2>
          <p className="mb-8 text-lg font-bold italic leading-relaxed">
            {
              "เราพิถีพิถันในทุกกระบวนการ ตั้งแต่การคัดเมล็ด การคั่ว จนถึงการสกัดน้ำกาแฟ เพื่อให้มั่นใจว่าทุกแก้วที่ส่งถึงมือคุณคือความสมบูรณ์แบบ"
            }
          </p>
          <div className="border-l-8 border-[#1e3932] bg-slate-50 p-4 font-mono text-sm italic">
            {'"Better Code, Better Coffee." - Aemdevweb'}
          </div>
        </div>
      </section>

      {/* 🖼️ Menu Gallery */}
      <section className={styles.menuGallery}>
        <h2 className="mb-16 text-center text-5xl font-black uppercase italic underline decoration-[#1e3932] decoration-8">
          {"MENU_MATRIX"}
        </h2>
        <div className="mx-auto max-w-7xl">
          <div className={styles.menuGrid}>
            {content.menuItems?.map((item: any) => (
              <div key={item.id} className={styles.menuItemCard}>
                <Image
                  src={item.img || "/images/cafe/default-item.webp"}
                  alt={item.name}
                  width={400}
                  height={400}
                  className={styles.menuItemImage}
                />
                <div className={styles.menuItemBody}>
                  <h3 className={styles.menuItemName}>{item.name}</h3>
                  <p className={styles.menuItemPrice}>{item.price}</p>
                  <p className="text-sm font-bold italic text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💳 Member Card Section */}
      <section className={styles.memberSection}>
        <h2 className="mb-16 text-center text-5xl font-black uppercase italic underline decoration-[#d4e9e2] decoration-8">
          {"MEMBER_ACCESS"}
        </h2>
        <div className="mx-auto max-w-7xl px-4">
          <div className={styles.memberCard}>
            <div
              className={cn(styles.memberBgCircle, styles.memberBgCircle1)}
            />
            <div
              className={cn(styles.memberBgCircle, styles.memberBgCircle2)}
            />

            <div className={styles.memberText}>
              <h3 className={styles.memberTitle}>{"JOIN_THE_CLUB"}</h3>
              <ul className={styles.memberList}>
                {content.memberBenefits?.map(
                  (benefit: string, index: number) => (
                    <li key={index} className="font-bold italic">
                      {benefit}
                    </li>
                  )
                )}
              </ul>
              <button className="mt-8 bg-[#1e3932] px-8 py-3 font-bold uppercase text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none">
                {"REGISTER_NOW"}
              </button>
            </div>
            <div className={styles.memberImage}>
              <Image
                src="/images/cafe/qr-code.webp"
                alt="QR Code"
                width={150}
                height={150}
                className={styles.memberQrCode}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
