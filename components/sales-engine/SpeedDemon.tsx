/** @format */

"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Zap, Gauge, MousePointerClick, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 🏎️ SpeedDemon — ระบบจำลองความเร็ว
 * ผมสร้างส่วนนี้มาเพื่อให้คุณเห็นภาพชัดๆ ว่าเว็บที่ผมทำให้นั้น
 * โหลดไวต่างจากเว็บทั่วไปขนาดไหน เพราะทุกวินาทีที่ช้าคือยอดขายที่หายไปครับ
 */
export const SpeedDemon = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [progressAEM, setProgressAEM] = useState(0)
  const [progressGeneral, setProgressGeneral] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  const runTest = () => {
    if (isRunning) return
    setIsRunning(true)
    setProgressAEM(0)
    setProgressGeneral(0)

    // 🚀 เว็บที่ผมทำ (AEM Engine) - โหลดพริบตาเดียวด้วยเทคนิคพิเศษ
    const timerAEM = setInterval(() => {
      setProgressAEM((prev) => {
        if (prev >= 100) {
          clearInterval(timerAEM)
          setIsRunning(false)
          return 100
        }
        return prev + 5
      })
    }, 30)

    // 🐢 เว็บทั่วไป - โหลดตามสภาพระบบเก่าที่โครงสร้างไม่ดี
    const timerGeneral = setInterval(() => {
      setProgressGeneral((prev) => {
        if (prev >= 100) {
          clearInterval(timerGeneral)
          return 100
        }
        return prev + 0.8
      })
    }, 50)
  }

  useEffect(() => {
    if (isInView && !isRunning && progressAEM === 0) {
      runTest()
    }
  }, [isInView])

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-40">
      {/* 🧩 พื้นหลังลายตารางจางๆ แบบ Industrial */}
      <div
        className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-[0.05]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-4" ref={ref}>
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* 1️⃣ ฝั่งเนื้อหา: บอกเล่าถึงความสำคัญของความเร็ว */}
          <div className="flex-1 lg:max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 shadow-lg"
            >
              <Zap className="h-4 w-4 text-emerald-400" />
              <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase">
                Speed is Revenue
              </span>
            </motion.div>

            <h2 className="font-prompt mb-8 text-4xl leading-[0.9] font-black tracking-tighter text-white uppercase italic md:text-6xl">
              ลูกค้าไม่รอ... <br />
              <span className="text-emerald-400">ถ้าเปิดช้าเขาหนีแน่</span>
            </h2>

            <p className="font-anuphan mb-10 text-lg leading-relaxed font-bold text-slate-400">
              เชื่อไหมครับ? หากเว็บโหลดช้าเกิน 3 วินาที ลูกค้ากว่า 40%
              จะกดปิดทันที ผมเลยเน้นย้ำเรื่องความเร็วมาเป็นอันดับหนึ่ง
              เพื่อให้ธุรกิจของคุณ
              <span className="text-xl font-bold text-white italic underline decoration-emerald-500/30">
                {" "}
                "ติดสปีด"{" "}
              </span>
              ตั้งแต่วินาทีแรกที่ลูกค้าคลิกเข้ามาครับ
            </p>

            <button
              onClick={runTest}
              disabled={isRunning}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-[11px] font-black tracking-widest text-white uppercase transition-all hover:bg-emerald-500 hover:text-slate-950 disabled:opacity-50"
            >
              <RefreshCw
                className={cn(
                  "h-4 w-4 transition-transform duration-700",
                  isRunning && "animate-spin"
                )}
              />
              {isRunning
                ? "กำลังทดสอบความเร็ว..."
                : "เริ่มการทดสอบใหม่อีกครั้ง"}
            </button>
          </div>

          {/* 2️⃣ ฝั่งภาพกราฟ: เปรียบเทียบให้เห็นกับตา */}
          <div className="w-full flex-1">
            <div className="rounded-[3rem] border border-white/5 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-xl md:p-14">
              <div className="space-y-16">
                {/* 🚀 เว็บที่ทำกับ นายเอ็มซ่ามากส์ */}
                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20">
                        <Zap className="h-5 w-5 fill-current" />
                      </div>
                      <span className="font-prompt text-sm font-black tracking-[0.2em] text-white uppercase italic">
                        เว็บสไตล์ AEMDEVWEB
                      </span>
                    </div>
                    <span className="font-prompt text-2xl font-black text-emerald-400 italic">
                      {progressAEM === 100
                        ? "0.8s"
                        : `${(progressAEM / 10).toFixed(1)}s`}
                    </span>
                  </div>
                  <div className="h-5 w-full overflow-hidden rounded-full bg-white/5 p-1">
                    <motion.div
                      animate={{ width: `${progressAEM}%` }}
                      transition={{ type: "spring", stiffness: 50 }}
                      className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] font-black tracking-widest text-emerald-500/80 uppercase">
                      Status: ลื่นปรื๊ด พร้อมรับยอดขาย
                    </p>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-1 w-3 animate-pulse rounded-full bg-emerald-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* 🐢 เว็บสำเร็จรูปทั่วไป */}
                <div className="space-y-5 opacity-40 grayscale-[0.5]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-slate-400">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700">
                        <Gauge className="h-5 w-5" />
                      </div>
                      <span className="font-prompt text-sm font-black tracking-[0.2em] uppercase italic">
                        เว็บสำเร็จรูปทั่วไป
                      </span>
                    </div>
                    <span className="font-prompt text-2xl font-black text-slate-400 italic">
                      {progressGeneral === 100
                        ? "7.2s"
                        : `${(progressGeneral / 10).toFixed(1)}s`}
                    </span>
                  </div>
                  <div className="h-5 w-full overflow-hidden rounded-full bg-white/5 p-1">
                    <motion.div
                      animate={{ width: `${progressGeneral}%` }}
                      className="h-full rounded-full bg-slate-600"
                    />
                  </div>
                  <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                    Status: โหลดนานไป ลูกค้าหนีหมดแล้ว
                  </p>
                </div>
              </div>

              {/* 💡 ส่วนอธิบายเทคนิคเล็กๆ น้อยๆ */}
              <div className="mt-14 flex items-center gap-5 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 p-8">
                <MousePointerClick className="h-10 w-10 shrink-0 text-emerald-400" />
                <p className="font-anuphan text-sm leading-relaxed text-slate-300">
                  <span className="mb-1 block font-bold text-white">
                    ความลับของผม:
                  </span>
                  ผมเลือกใช้เทคโนโลยีที่ดีที่สุดอย่าง Next.js 15 และ 16
                  เพื่อให้หน้าเว็บปรากฏทันทีที่กดคลิก
                  โดยไม่ต้องรอโหลดข้อมูลทั้งหน้าให้เสียเวลาครับ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
