/** @format */

"use client"

import React, { useState, useEffect } from "react"
import styles from "./CafeStyle.module.css"
import { cafeConfig } from "./config"
import HeroSection from "./components/HeroSection"
import MenuPreview from "./components/MenuPreview"
import AmbienceGallery from "./components/AmbienceGallery"
import ReservationCTA from "./components/ReservationCTA"

export default function CafeTemplate() {
  const { content } = cafeConfig
  const [isMounted, setIsMounted] = useState(false)

  /**
   * ✅ แก้ไข ESLint Error: react-hooks/set-state-in-effect
   * เราจำเป็นต้องใช้แพทเทิร์นนี้เพื่อป้องกัน Hydration Mismatch
   * เนื่องจาก CSS Modules class names จะถูกสร้างขึ้นที่ฝั่ง Client
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  // แสดงผลเบื้องต้นให้สอดคล้องกับ Server-rendered HTML
  if (!isMounted) {
    return <article className="min-h-screen bg-white" />
  }

  return (
    <article className={styles.container} suppressHydrationWarning>
      {/* ─── 1. HERO SECTION ─── */}
      <HeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        ctaText={content.hero.cta}
      />

      {/* ─── 2. MENU PREVIEW ─── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-20 text-center">
            <span className={styles.sectionSubtitle}>Signature Selection</span>
            <h2 className={styles.sectionTitle}>Our Best Sellers</h2>
            <div className="mx-auto mt-6 h-[1px] w-24 bg-[#4A3428]/20" />
          </div>

          <MenuPreview
            items={[
              {
                title: "Caramel Macchiato",
                price: "125",
                description: "เอสเพรสโซ่เข้มข้นผสมนมสดและซอสคาราเมลหอมหวาน",
                image:
                  "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=400&h=500",
              },
              {
                title: "Dirty Coffee",
                price: "115",
                description: "นมเย็นจัดท็อปด้วยช็อตเอสเพรสโซ่ แยกชั้นสวยงาม",
                image:
                  "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=400&h=500",
              },
              {
                title: "Butter Croissant",
                price: "95",
                description: "ครัวซองต์เนยแท้จากฝรั่งเศส อบสดใหม่ทุกเช้า",
                image:
                  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400&h=500",
              },
            ]}
          />

          <div className="mt-16 text-center">
            <p className="text-sm italic text-[#4A3428]/60">
              * ราคาอาจมีการเปลี่ยนแปลงตามสาขาและโปรโมชั่น
            </p>
          </div>
        </div>
      </section>

      {/* ─── 3. AMBIENCE GALLERY ─── */}
      <AmbienceGallery />

      {/* ─── 4. RESERVATION & CONTACT ─── */}
      <section className="bg-white pb-24 lg:pb-40">
        <div className="container mx-auto px-6">
          <ReservationCTA
            hours={content.contact.openHours}
            address={content.contact.address}
            phoneNumber={content.contact.phone}
            lineId={content.contact.lineId}
          />
        </div>
      </section>

      {/* ─── 5. FOOTER ─── */}
      <footer className="border-t border-slate-100 py-10 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
          © {new Date().getFullYear()} {cafeConfig.name} — All Rights Reserved.
        </p>
      </footer>
    </article>
  )
}
