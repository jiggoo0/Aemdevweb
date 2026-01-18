/** @format */
"use client"

import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  CheckCircle2,
  Calculator,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/constants/site-config"
import { cn } from "@/lib/utils" // ตรวจสอบว่ามี utility นี้สำหรับจัดการ class

/**
 * 🍱 PriceEstimator: Luminous Interactive Engine (v.2026)
 * ระบบคำนวณราคาที่จูนมาเพื่อความลื่นไหลระดับ 100 PageSpeed
 * ✅ Optimized: ลด TBT ด้วยการจำกัดการเรียกใช้ Function ภายนอกใน Render Loop
 */

interface Feature {
  id: string
  label: string
  price: number
  fixed?: boolean
  desc: string
}

const features: Feature[] = [
  {
    id: "base",
    label: "Landing Page คุณภาพสูง",
    price: 15000,
    fixed: true,
    desc: "ดีไซน์ Modern High-Performance รองรับมือถือ 100%",
  },
  {
    id: "domain",
    label: "Domain & High-Speed Hosting",
    price: 1500,
    desc: "จดโดเมนใหม่พร้อมเซ็ตอัพ Server ที่เร็วที่สุดสำหรับคุณ",
  },
  {
    id: "seo",
    label: "SEO & Speed Optimization",
    price: 3500,
    desc: "ปรับโครงสร้างให้ Google รักและโหลดไวระดับปีศาจ",
  },
  {
    id: "notify",
    label: "Line Notify Automation",
    price: 1500,
    desc: "ระบบแจ้งเตือนลูกค้าทักผ่านไลน์ทันทีแบบ Real-time",
  },
  {
    id: "content",
    label: "Copywriting (เขียนคำขาย)",
    price: 2500,
    desc: "ออกแบบเนื้อหาและพาดหัวเพื่อปิดการขายโดยเฉพาะ",
  },
]

export function PriceEstimator() {
  const [selected, setSelected] = useState<string[]>(["base"])

  const toggleFeature = (id: string, isFixed: boolean) => {
    if (isFixed) return
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  // คำนวณราคารวมด้วย useMemo เพื่อลดภาระการประมวลผลเมื่อ State อื่นเปลี่ยน
  const totalPrice = useMemo(() => {
    return features
      .filter((f) => selected.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0)
  }, [selected])

  return (
    <div className="shadow-luminous mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl md:flex-row">
      {/* 🟢 Left Side: Options Engine */}
      <div className="relative flex-1 overflow-hidden p-8 md:p-12">
        <div className="aurora-bg pointer-events-none -top-20 -left-20 -z-10 h-64 w-64 opacity-10" />

        <div className="relative z-10 mb-10 flex items-center gap-4">
          <div className="bg-aurora-cyan/10 border-aurora-cyan/20 rounded-2xl border p-3">
            <Calculator className="text-aurora-cyan h-6 w-6" />
          </div>
          <div>
            <h3 className="font-prompt text-2xl font-black tracking-tight text-white uppercase italic">
              เลือกฟีเจอร์ที่ต้องการ
            </h3>
            <p className="font-anuphan mt-1 text-sm text-slate-500">
              ปรับแต่งความแรงให้ตรงโจทย์ธุรกิจคุณ
            </p>
          </div>
        </div>

        <div className="relative z-10 space-y-4">
          {features.map((f) => {
            const isSelected = selected.includes(f.id)
            return (
              <motion.div
                key={f.id}
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => toggleFeature(f.id, !!f.fixed)}
                className={cn(
                  "group flex cursor-pointer items-center justify-between rounded-2xl border p-5 transition-all duration-500",
                  isSelected
                    ? "border-aurora-cyan/40 shadow-aurora-glow bg-white/5"
                    : "border-white/5 bg-white/[0.02] hover:border-white/20 hover:bg-white/5"
                )}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={cn(
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500",
                      isSelected
                        ? "bg-aurora-cyan border-aurora-cyan"
                        : "group-hover:border-aurora-cyan border-slate-600 bg-transparent"
                    )}
                  >
                    {isSelected && (
                      <CheckCircle2 className="h-4 w-4 stroke-[3] text-slate-950" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p
                        className={cn(
                          "font-prompt text-base font-bold tracking-tight transition-colors md:text-lg",
                          isSelected
                            ? "text-white"
                            : "text-slate-400 group-hover:text-slate-200"
                        )}
                      >
                        {f.label}
                      </p>
                      {f.fixed && (
                        <span className="bg-aurora-cyan/20 text-aurora-cyan border-aurora-cyan/20 rounded-full border px-2 py-0.5 text-[9px] font-black tracking-[0.2em] uppercase">
                          Required
                        </span>
                      )}
                    </div>
                    <p className="font-anuphan mt-1 text-sm text-slate-500 transition-colors group-hover:text-slate-400">
                      {f.desc}
                    </p>
                  </div>
                </div>
                <span
                  className={cn(
                    "ml-4 text-base font-black whitespace-nowrap transition-colors duration-500",
                    isSelected ? "text-aurora-cyan" : "text-slate-500"
                  )}
                >
                  +{f.price.toLocaleString()}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* 🔵 Right Side: Summary Engine */}
      <div className="relative flex flex-col justify-between border-l border-white/5 bg-slate-900/40 p-10 backdrop-blur-md md:w-[420px] md:p-14">
        <div className="aurora-bg pointer-events-none -right-20 -bottom-40 -z-10 h-80 w-80 opacity-20" />

        <div className="relative z-10">
          <p className="font-prompt mb-4 text-[10px] font-black tracking-[0.3em] text-slate-500 uppercase">
            Estimated Budget
          </p>
          <div className="flex items-baseline gap-3">
            <span className="text-aurora-cyan text-2xl font-black md:text-3xl">
              ฿
            </span>
            <AnimatePresence mode="wait">
              <motion.div
                key={totalPrice}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="font-prompt text-6xl leading-none font-black tracking-tighter text-white md:text-8xl"
              >
                {totalPrice.toLocaleString()}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 space-y-5">
            <FeatureItem
              icon={ShieldCheck}
              text="ฟรี! ดูแล Server & SSL ปีแรก"
            />
            <FeatureItem icon={Zap} text="งานเสร็จไวใน 7-14 วันทำการ" />
            <FeatureItem icon={Sparkles} text="รับประกันแก้ไขงานจนกว่าจะพอใจ" />
          </div>
        </div>

        <div className="relative z-10 mt-16 text-center">
          <Button
            asChild
            className="btn-luminous shadow-luminous group h-16 w-full text-lg font-bold tracking-widest uppercase"
          >
            <a
              href={siteConfig.links.line}
              target="_blank"
              rel="noopener noreferrer"
            >
              Lock This Price{" "}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <p className="font-anuphan mt-6 text-[10px] leading-relaxed font-medium tracking-wider text-slate-500 uppercase">
            * ราคาประเมินเบื้องต้นเพื่อใช้ในการวางแผน <br />
            งบประมาณจริงอาจปรับตามสเกลงานของท่าน
          </p>
        </div>
      </div>
    </div>
  )
}

/** 🧩 Sub-component: Feature Points */
interface FeatureItemProps {
  icon: LucideIcon
  text: string
}

function FeatureItem({
  icon: Icon,
  text,
}: FeatureItemProps): React.JSX.Element {
  return (
    <div className="group flex items-center gap-4 text-sm text-slate-400 transition-colors hover:text-slate-200 md:text-base">
      <div className="group-hover:border-aurora-cyan/30 rounded-lg border border-white/10 bg-white/5 p-1.5 transition-all duration-300">
        <Icon className="text-aurora-emerald h-5 w-5 shrink-0" />
      </div>
      <span className="font-anuphan font-medium tracking-wide">{text}</span>
    </div>
  )
}
