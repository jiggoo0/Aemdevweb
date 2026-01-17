/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { ArrowRight, MessageSquare, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LineLeadForm } from "@/components/sales-engine/LineLeadForm"
import { siteConfig } from "@/constants/site-config"
import { TemplateItem } from "@/constants/templates-data"

interface SalesHookProps {
  data?: TemplateItem
  isTemplate?: boolean
  themeColor?: string // เพิ่มเพื่อรับค่าสีจากหน้า Page
}

// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Got: undefined
export function SalesHook({
  data,
  isTemplate = false,
  themeColor = "emerald",
}: SalesHookProps) {
  // 📝 Dynamic Copywriting
  const title =
    isTemplate && data
      ? `ถูกใจดีไซน์ "${data.title}" ไหมครับ?`
      : "พร้อมยกระดับธุรกิจของคุณให้เหนือกว่าคู่แข่ง?"

  const subtitle = isTemplate
    ? "อย่าปล่อยให้โอกาสหลุดมือ! สั่งทำเว็บด้วยโครงสร้างนี้ ปรับแต่งให้เข้ากับแบรนด์ของคุณ เสร็จไวใน 3-7 วัน"
    : "ลงทุนครั้งเดียว จบงานไว ได้เว็บคุณภาพสูงระดับ High-Performance ที่ออกแบบมาเพื่อปิดการขายโดยเฉพาะ"

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-900 shadow-2xl shadow-black/50">
        {/* 🎨 Background Gradients & Effects */}
        <div
          className={cn(
            "pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] translate-x-1/3 -translate-y-1/2 rounded-full opacity-20 blur-[100px]",
            `bg-${themeColor}-500/10`
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-[url('/grid.svg')] bg-[size:40px_40px] opacity-[0.03]" />

        <div className="relative z-10 flex flex-col items-center px-6 py-12 text-center md:px-16 md:py-20">
          {/* Badge */}
          <div
            className={cn(
              "mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md",
              `border-${themeColor}-500/30 bg-${themeColor}-500/10`
            )}
          >
            <span className="relative flex h-2 w-2">
              <span
                className={cn(
                  "absolute inline-flex h-full w-full animate-ping rounded-full opacity-75",
                  `bg-${themeColor}-400`
                )}
              ></span>
              <span
                className={cn(
                  "relative inline-flex h-2 w-2 rounded-full",
                  `bg-${themeColor}-500`
                )}
              ></span>
            </span>
            <span
              className={cn(
                "text-xs font-bold tracking-wider uppercase",
                `text-${themeColor}-300`
              )}
            >
              Limited Time Offer
            </span>
          </div>

          {/* Headline */}
          <h2 className="mb-6 max-w-4xl text-3xl leading-tight font-bold tracking-tight text-white md:text-5xl">
            {title}
          </h2>

          {/* Subheadline */}
          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-400">
            {subtitle}
          </p>

          {/* CTA Group */}
          <div className="flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row">
            {/* 1. Primary Action: Lead Form */}
            <LineLeadForm
              variant="button"
              label={isTemplate ? `สั่งทำเทมเพลตนี้` : "ขอใบเสนอราคาฟรี"}
              className={cn(
                "h-14 w-full px-8 text-lg font-bold shadow-lg transition-all hover:scale-[1.03] sm:w-auto",
                `bg-${themeColor}-600 hover:bg-${themeColor}-500 shadow-${themeColor}-900/20`
              )}
            />

            {/* 2. Secondary Action: Direct Line */}
            <Button
              asChild
              variant="outline"
              className="h-14 w-full border-slate-700 px-8 text-lg text-slate-300 transition-all hover:bg-slate-800 hover:text-white sm:w-auto"
            >
              <Link href={siteConfig.links.line} target="_blank">
                <MessageSquare className="mr-2 h-5 w-5" />
                คุยผ่านไลน์
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-500 md:gap-12">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-amber-500" />
              <span>เสร็จไวใน 7 วัน</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>รับประกันแก้ไขงานฟรี</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="h-4 w-4 text-blue-500" />
              <span>พร้อมสอนใช้งาน</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
