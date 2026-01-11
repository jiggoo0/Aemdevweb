/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import styles from "../CafeStyle.module.css"

interface HeroProps {
  title: string
  subtitle: string
  ctaText: string
}

export default function HeroSection({ title, subtitle, ctaText }: HeroProps) {
  const [mounted, setMounted] = useState(false)

  /**
   * ✅ แก้ไข ESLint Error: react-hooks/set-state-in-effect
   * จำเป็นต้องรอให้ Client mount ก่อนเรียกใช้ CSS Modules
   * เพื่อป้องกัน Hydration Mismatch ใน Next.js 15
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  return (
    <section className="relative flex h-[85vh] w-full items-center justify-center overflow-hidden bg-[#1a1512]">
      {/* 1. Background Image: ใช้ priority เพื่อค่า LCP ที่ดีที่สุด */}
      <Image
        src="/images/template/cafe/cafe-hero.webp"
        alt="Specialty Coffee Shop Interior"
        fill
        priority
        className="object-cover"
        quality={90}
      />

      {/* 2. Overlay: เพิ่ม Contrast ให้ข้อความอ่านง่าย */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* 3. Content Area */}
      <div className="container relative z-10 mx-auto px-6 text-center text-white">
        {/* ใช้เงื่อนไข mounted เพื่อควบคุมการแสดงผลของ CSS Module Classes */}
        <div className={mounted ? styles.heroContent : "opacity-0"}>
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.4em] text-[#D4AF37] opacity-90">
            Specialty Coffee Roasters
          </span>

          <h1 className="mb-6 text-4xl font-light leading-tight tracking-tight md:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-base font-light opacity-80 md:text-lg">
            {subtitle}
          </p>

          <div className="flex justify-center">
            <button
              className={
                mounted ? styles.ctaButton : "rounded-full px-8 py-4 opacity-0"
              }
            >
              {ctaText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
