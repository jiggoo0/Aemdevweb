/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { CheckCircle, Zap } from "lucide-react"
import { TemplateItem } from "@/constants/templates-data"
import { cn } from "@/lib/utils"

interface TemplateFeaturesProps {
  features?: string[]
  data?: TemplateItem
  themeColor?: string // เพิ่มเพื่อรับค่าสีจากหน้า Page
  className?: string
}

// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Error: Element type is invalid
export function TemplateFeatures({
  features,
  data,
  themeColor = "emerald",
  className,
}: TemplateFeaturesProps) {
  const items = features || data?.features || []

  if (items.length === 0) return null

  return (
    <div className={cn("w-full", className)}>
      {/* 🏷️ Header */}
      <div className="mb-10 flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors duration-500",
            `bg-${themeColor}-500/10 border-${themeColor}-500/20`
          )}
        >
          <Zap className={cn("h-6 w-6", `text-${themeColor}-500`)} />
        </div>
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            ฟีเจอร์เด่นใน{" "}
            <span className={cn(`text-${themeColor}-400`)}>เทมเพลตนี้</span>
          </h3>
          <p className="mt-1 text-slate-400">
            สิ่งที่คุณจะได้รับทันทีเพื่อขับเคลื่อนธุรกิจ
          </p>
        </div>
      </div>

      {/* 📦 Grid Features */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            className={cn(
              "group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition-all duration-300",
              `hover:border-${themeColor}-500/40 hover:bg-slate-900 hover:shadow-2xl hover:shadow-${themeColor}-900/10`
            )}
          >
            {/* Icon */}
            <div className="mt-1 shrink-0">
              <CheckCircle
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  `text-${themeColor}-500/50 group-hover:text-${themeColor}-400`
                )}
              />
            </div>

            {/* Text Content */}
            <div className="space-y-1">
              {/* รองรับรูปแบบ Title: Description */}
              <span className="block text-[15px] leading-snug font-semibold text-slate-200 transition-colors group-hover:text-white">
                {feature.includes(":") ? feature.split(":")[0] : feature}
              </span>
              {feature.includes(":") && (
                <p className="text-sm text-slate-500 transition-colors group-hover:text-slate-400">
                  {feature.split(":")[1]}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
