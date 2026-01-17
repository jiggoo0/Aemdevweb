/** @format */
"use client"

import React, { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone } from "lucide-react"
import { cn } from "@/lib/utils"

// ✅ Fixed: Removed unused Badge import to clear ESLint error
// import { Badge } from "@/components/ui/badge";

interface DevicePreviewProps {
  desktopSrc: string
  mobileSrc: string
  title?: string
  themeColor?:
    | "emerald"
    | "blue"
    | "indigo"
    | "rose"
    | "amber"
    | "slate"
    | "red"
}

/**
 * 🔑 DevicePreview Component
 * ใช้สำหรับจำลองการแสดงผลบน Desktop และ Mobile
 */
export function DevicePreview({
  desktopSrc,
  mobileSrc,
  title = "Responsive Preview",
  themeColor = "emerald",
}: DevicePreviewProps) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop")

  // 🎨 Safe Tailwind Class Mapping
  const themeClasses = {
    emerald: "bg-emerald-600 shadow-emerald-900/40 text-emerald-500",
    blue: "bg-blue-600 shadow-blue-900/40 text-blue-500",
    indigo: "bg-indigo-600 shadow-indigo-900/40 text-indigo-500",
    rose: "bg-rose-600 shadow-rose-900/40 text-rose-500",
    amber: "bg-amber-600 shadow-amber-900/40 text-amber-500",
    slate: "bg-slate-600 shadow-slate-900/40 text-slate-500",
    red: "bg-red-600 shadow-red-900/40 text-red-500",
  }

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 py-10">
      {/* 🎮 1. Controller */}
      <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 p-1.5 shadow-2xl backdrop-blur-xl">
        <button
          onClick={() => setDevice("desktop")}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold transition-all duration-300",
            device === "desktop"
              ? `${themeClasses[themeColor].split(" ")[0]} text-white shadow-lg ${themeClasses[themeColor].split(" ")[1]}`
              : "text-slate-500 hover:text-slate-200"
          )}
        >
          <Monitor className="h-4 w-4" />
          <span>Desktop</span>
        </button>

        <button
          onClick={() => setDevice("mobile")}
          className={cn(
            "flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold transition-all duration-300",
            device === "mobile"
              ? `${themeClasses[themeColor].split(" ")[0]} text-white shadow-lg ${themeClasses[themeColor].split(" ")[1]}`
              : "text-slate-500 hover:text-slate-200"
          )}
        >
          <Smartphone className="h-4 w-4" />
          <span>Mobile</span>
        </button>
      </div>

      {/* 🖥️📱 2. Screen Container */}
      <div className="relative flex w-full justify-center perspective-[1200px]">
        <motion.div
          layout
          initial={false}
          animate={{
            width: device === "desktop" ? "100%" : "320px",
            height: device === "desktop" ? "auto" : "640px",
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className={cn(
            "relative overflow-hidden border-slate-800 bg-slate-950 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all",
            device === "desktop"
              ? "rounded-xl border-[6px] border-b-[24px]"
              : "rounded-[3rem] border-[10px]"
          )}
        >
          {/* Top Bar / Notch */}
          <div
            className={cn(
              "absolute top-0 left-1/2 z-20 -translate-x-1/2 bg-slate-800 transition-all",
              device === "desktop"
                ? "flex h-7 w-full items-center gap-1.5 pl-4"
                : "h-6 w-32 rounded-b-2xl"
            )}
          >
            {device === "desktop" && (
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full border border-red-500/50 bg-red-500/30" />
                <div className="h-2.5 w-2.5 rounded-full border border-yellow-500/50 bg-yellow-500/30" />
                <div className="h-2.5 w-2.5 rounded-full border border-green-500/50 bg-green-500/30" />
              </div>
            )}
          </div>

          {/* Image Display */}
          <div className="group relative h-full w-full overflow-hidden bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={device}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="relative h-full w-full"
              >
                <Image
                  src={device === "desktop" ? desktopSrc : mobileSrc}
                  alt={`${title} - ${device} view`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 1200px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* MacBook Shadow */}
        {device === "desktop" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute -bottom-8 -z-10 h-8 w-[95%] bg-black/40 blur-3xl"
          />
        )}
      </div>

      <div className="flex items-center gap-2 text-xs font-medium tracking-widest text-slate-500 uppercase">
        <div
          className={cn(
            "h-1.5 w-1.5 animate-ping rounded-full",
            themeClasses[themeColor].split(" ")[2].replace("text-", "bg-")
          )}
        />
        Interactive Preview Mode
      </div>
    </div>
  )
}
