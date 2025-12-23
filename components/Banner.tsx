/** @format */
"use client"

import React, { useState, useEffect } from "react"
import { Megaphone, X, Sparkles } from "lucide-react"

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  // ตรวจสอบว่าเคยปิดไปหรือยัง (ป้องกันการโผล่ซ้ำเมื่อเปลี่ยนหน้า)
  useEffect(() => {
    const isBannerClosed = localStorage.getItem("launch-banner-closed")
    if (isBannerClosed === "true") {
      setIsVisible(false)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("launch-banner-closed", "true")
  }

  if (!isVisible) return null

  return (
    <div className="relative z-[110] w-full bg-slate-900 p-2 md:p-3">
      <div className="mx-auto max-w-7xl px-4">
        {/* ใช้สไตล์ Neobrutalism แต่ปรับให้กระชับขึ้นเพื่อไม่ให้กินพื้นที่ Content */}
        <div className="relative border-2 border-slate-900 bg-yellow-400 p-3 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] md:p-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div className="hidden rounded-none border-2 border-slate-900 bg-white p-1.5 md:block">
                <Megaphone className="h-5 w-5 text-slate-900" />
              </div>
              <div className="space-y-0.5">
                <h3 className="text-sm font-black uppercase italic tracking-tight text-slate-900 md:text-base">
                  Maintenance Mode / กำลังปรับปรุง
                </h3>
                <p className="text-xs font-bold leading-tight text-slate-800 md:text-sm">
                  เตรียมเปิดตัวเว็บไซต์เวอร์ชันใหม่เต็มรูปแบบ{" "}
                  <span className="bg-slate-900 px-1 text-[10px] text-white md:text-xs">
                    มกราคม 2026
                  </span>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="hidden items-center gap-2 border-2 border-slate-900 bg-white px-2 py-0.5 text-[10px] font-black uppercase italic lg:flex">
                <Sparkles size={12} />
                <span>By Dev Aem</span>
              </div>

              <button
                onClick={handleClose}
                className="group border-2 border-slate-900 bg-slate-900 p-1.5 text-white transition-all hover:bg-white hover:text-slate-900"
                aria-label="Close banner"
              >
                <X
                  size={16}
                  className="transition-transform group-hover:rotate-90"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
