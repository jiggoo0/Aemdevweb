/** @format */

"use client"

import React, { useState } from "react"
import Image from "next/image"
import { Monitor, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

interface DevicePreviewProps {
  desktopSrc?: string | null
  mobileSrc?: string | null
  title?: string
}

export const DevicePreview = ({
  desktopSrc,
  mobileSrc,
  title = "Template Preview",
}: DevicePreviewProps) => {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")

  // 🛡️ Specialist Shield: ป้องกันการส่ง String ว่างเข้า src
  // หากไม่มีรูป ให้ใช้ Placeholder แทน เพื่อไม่ให้ Browser โหลดหน้าซ้ำ
  const placeholder = "/images/templates/project-01.webp" // ตรวจสอบว่ามีไฟล์นี้ใน public

  const currentSrc =
    device === "desktop"
      ? desktopSrc && desktopSrc !== ""
        ? desktopSrc
        : placeholder
      : mobileSrc && mobileSrc !== ""
        ? mobileSrc
        : desktopSrc || placeholder

  return (
    <section className="relative w-full py-10">
      {/* 📱 Device Switcher */}
      <div className="mb-8 flex justify-center gap-4">
        <button
          onClick={() => setDevice("desktop")}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold transition-all",
            device === "desktop"
              ? "bg-emerald-500 text-slate-950"
              : "bg-white/5 text-slate-400 hover:bg-white/10"
          )}
        >
          <Monitor className="h-4 w-4" />
          Desktop
        </button>
        <button
          onClick={() => setDevice("mobile")}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold transition-all",
            device === "mobile"
              ? "bg-emerald-500 text-slate-950"
              : "bg-white/5 text-slate-400 hover:bg-white/10"
          )}
        >
          <Smartphone className="h-4 w-4" />
          Mobile
        </button>
      </div>

      {/* 🖥️ Preview Window */}
      <div
        className={cn(
          "mx-auto overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl transition-all duration-700",
          device === "desktop"
            ? "aspect-video max-w-5xl"
            : "aspect-[9/19] max-w-[320px]"
        )}
      >
        <div className="relative h-full w-full">
          {/* ✅ ใช้ currentSrc ที่ผ่านการตรวจสอบแล้ว */}
          <Image
            src={currentSrc}
            alt={`${title} - ${device} view`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority={device === "desktop"}
          />
        </div>
      </div>
    </section>
  )
}
