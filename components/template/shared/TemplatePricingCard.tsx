/** @format */
"use client"

import React from "react"
import Link from "next/link"
import { Check, ArrowRight, ExternalLink, ShieldCheck, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/constants/site-config"

interface TemplatePricingCardProps {
  title: string
  price: number
  salePrice?: number
  features?: string[]
  demoUrl: string
  themeColor?: string // เพิ่มเพื่อรับค่าสีจากหน้า Page
  className?: string
}

// 🔑 เปลี่ยนเป็น Named Export เพื่อแก้ปัญหา Error: Element type is invalid
export function TemplatePricingCard({
  title,
  price,
  salePrice,
  features = [],
  demoUrl,
  themeColor = "emerald",
  className,
}: TemplatePricingCardProps) {
  // คำนวณเปอร์เซ็นต์ส่วนลด
  const discountPercent = salePrice
    ? Math.round(((price - salePrice) / price) * 100)
    : 0

  // ราคาที่ต้องจ่ายจริง
  const currentPrice = salePrice || price

  return (
    <div className={cn("group relative", className)}>
      {/* Dynamic Glow Effect Background */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl opacity-75 blur-md transition-opacity duration-500 group-hover:opacity-100",
          `bg-${themeColor}-500/20`
        )}
      />

      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-md">
        {/* 🏷️ Header & Price */}
        <div className="mb-6 border-b border-slate-800 pb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
              Standard License
            </span>
            {salePrice && (
              <Badge
                variant="secondary"
                className={cn(
                  "border transition-colors duration-500",
                  `bg-${themeColor}-500/10 text-${themeColor}-400 border-${themeColor}-500/20`
                )}
              >
                SAVE {discountPercent}%
              </Badge>
            )}
          </div>

          <div className="mb-2 flex items-end gap-3">
            <h3 className="text-4xl font-bold tracking-tight text-white">
              ฿{currentPrice.toLocaleString()}
            </h3>
            {salePrice && (
              <span className="mb-1 text-lg text-slate-500 line-through decoration-slate-600">
                ฿{price.toLocaleString()}
              </span>
            )}
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            จ่ายครั้งเดียว จบงานไว ใช้งานได้ตลอดชีพ พร้อมทีมซัพพอร์ต
          </p>
        </div>

        {/* 🛒 Action Buttons */}
        <div className="mb-8 space-y-3">
          {/* ปุ่มซื้อ -> ทัก LINE พร้อมข้อความอัตโนมัติ */}
          <Button
            asChild
            className={cn(
              "h-14 w-full text-lg font-bold shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]",
              `bg-${themeColor}-600 hover:bg-${themeColor}-500 shadow-${themeColor}-900/20`
            )}
          >
            <Link
              href={`${siteConfig.links.line}?text=สนใจเทมเพลต ${title} ราคา ${currentPrice.toLocaleString()} บาทครับ`}
              target="_blank"
            >
              สั่งซื้อเทมเพลตนี้ <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          {/* ปุ่มดู Demo */}
          <Button
            asChild
            variant="outline"
            className="h-12 w-full border-slate-700 bg-transparent text-slate-300 transition-all hover:bg-slate-800 hover:text-white"
          >
            <Link href={demoUrl} target="_blank">
              ดูเดโม่ตัวอย่างเว็บ <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* ✅ Features List */}
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-sm font-bold text-slate-200">
            <Zap className={cn("h-4 w-4", `text-${themeColor}-400`)} />
            สิ่งที่คุณจะได้รับ:
          </p>
          <ul className="space-y-3.5">
            {features.slice(0, 5).map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm leading-snug text-slate-400"
              >
                <Check
                  className={cn(
                    "mt-0.5 h-5 w-5 shrink-0",
                    `text-${themeColor}-500`
                  )}
                />
                <span>
                  {feature.includes(":") ? feature.split(":")[0] : feature}
                </span>
              </li>
            ))}
            {/* Standard Benefits */}
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <Check
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0",
                  `text-${themeColor}-500`
                )}
              />
              <span>Full Source Code (Next.js 15)</span>
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-400">
              <Check
                className={cn(
                  "mt-0.5 h-5 w-5 shrink-0",
                  `text-${themeColor}-500`
                )}
              />
              <span>คู่มือการใช้งานและการติดตั้ง</span>
            </li>
          </ul>
        </div>

        {/* 🛡️ Guarantee Footer */}
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-slate-800 pt-6">
          <div className="flex items-center gap-2 text-[10px] font-medium tracking-widest text-slate-500 uppercase">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>Verified Merchant</span>
          </div>
          <p className="text-center text-[10px] text-slate-600">
            * ราคานี้ไม่รวมค่าจดโดเมนและรายเดือน Server (ถ้ามี)
          </p>
        </div>
      </div>
    </div>
  )
}
