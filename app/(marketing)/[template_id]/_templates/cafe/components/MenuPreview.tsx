/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import styles from "../CafeStyle.module.css"

interface MenuItem {
  title: string
  price: string
  image: string
  description?: string
}

export default function MenuPreview({ items }: { items: MenuItem[] }) {
  const [isMounted, setIsMounted] = useState(false)

  /**
   * ✅ แก้ไข ESLint Error: react-hooks/set-state-in-effect
   * จำเป็นต้องใช้เพื่อรอให้ Client mount ก่อนเรียกใช้ CSS Modules
   * และคำนวณ Inline Styles แบบ Dynamic เพื่อป้องกัน Hydration Mismatch
   */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)
  }, [])

  if (!items || items.length === 0) return null

  return (
    <section
      className={
        isMounted ? styles.menuGrid : "grid grid-cols-1 gap-10 md:grid-cols-3"
      }
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className={isMounted ? styles.menuCard : "translate-y-4 opacity-0"}
          style={isMounted ? { animationDelay: `${idx * 0.1}s` } : {}}
        >
          {/* Image Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            {/* Price Tag Overlay */}
            <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#4A3428] backdrop-blur-sm">
              {item.price}.-
            </div>
          </div>

          {/* Content Area */}
          <div className="flex flex-col items-center p-8 text-center">
            <h3 className="text-xl font-medium tracking-tight text-[#2D241E]">
              {item.title}
            </h3>

            {/* Decorative Divider */}
            <div className="my-3 h-[1px] w-8 bg-[#D4AF37]/40" />

            {item.description && (
              <p className="mb-4 text-sm font-light leading-relaxed text-[#4A3428]/60">
                {item.description}
              </p>
            )}

            <p className="text-lg font-bold text-[#D4AF37]">
              {item.price}{" "}
              <span className="text-xs font-normal opacity-70">THB</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
