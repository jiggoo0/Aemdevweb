/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  Target,
  TrendingUp,
  Search,
  Code2,
} from "lucide-react"

/**
 * 🧩 ข้อมูลจุดเด่นที่ผมเน้นแก้ปัญหาให้เจ้าของธุรกิจ (SME & Industrial)
 * ผมเลือก 4 หัวใจหลักที่จะช่วยให้ธุรกิจของคุณเหนือกว่าคู่แข่งครับ
 */
const highlightFeatures = [
  {
    title: "เปิดเว็บไวทันใจ",
    description:
      "ผมปรับจูนเว็บให้โหลดไวที่สุด เพื่อไม่ให้ลูกค้าของคุณต้องรอนานจนหนีไปหาคู่แข่ง (คะแนนเขียว 100 เต็ม)",
    icon: Zap,
    color: "text-emerald-500",
    bg: "bg-emerald-500/5",
  },
  {
    title: "ดันอันดับ Google",
    description:
      "วางโครงสร้างเว็บตามมาตรฐานปี 2026 เพื่อให้ Google และ AI ค้นหาธุรกิจของคุณเจอได้ง่ายขึ้น",
    icon: Search,
    color: "text-blue-500",
    bg: "bg-blue-500/5",
  },
  {
    title: "เน้นปิดการขาย",
    description:
      "ออกแบบลำดับการอ่านและปุ่มติดต่อให้โดดเด่น เพื่อเปลี่ยนคนเข้าชมเว็บให้กลายเป็นลูกค้าจริงๆ",
    icon: Target,
    color: "text-rose-500",
    bg: "bg-rose-500/5",
  },
  {
    title: "ปลอดภัยและยั่งยืน",
    description:
      "ใช้ระบบที่เสถียรและปลอดภัยระดับสากล พร้อมรองรับการขยายตัวของธุรกิจคุณในอนาคตได้ทันที",
    icon: ShieldCheck,
    color: "text-indigo-500",
    bg: "bg-indigo-500/5",
  },
]

/**
 * 🚀 LandingContent — "ทำไมต้องจ้างผม?"
 * ส่วนนี้ผมสรุปเหตุผลที่เจ้าของธุรกิจ SME และโรงงานเลือกจ้างผมทำงานครับ
 */
const LandingContent = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-40">
      {/* 🧩 พื้นหลังลายตาราง (Industrial Grid Pattern) */}
      <div className="absolute inset-0 z-0 opacity-[0.02]" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/grid.svg')] [mask-image:linear-gradient(180deg,white,transparent,white)] bg-center" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col gap-24 lg:gap-32">
          {/* 1️⃣ ส่วนหัวข้อ: คุยกับเจ้าของธุรกิจด้วยความจริงใจ */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2"
            >
              <Code2 className="h-4 w-4 text-slate-600" />
              <span className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase">
                Expert Choice for Business v2026
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-prompt mb-10 text-4xl font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl lg:text-7xl"
            >
              ทำไมต้องทำเว็บกับ <br className="hidden md:block" />
              <span className="text-emerald-500 underline decoration-emerald-500/10 underline-offset-8">
                นายเอ็มซ่ามากส์?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-anuphan mx-auto max-w-3xl text-lg leading-relaxed font-bold text-slate-500 md:text-xl"
            >
              ผมไม่ได้แค่เขียนโค้ดแล้วจบไป แต่ผมสร้าง "หน้าร้านที่ช่วยคุณหาเงิน"
              ที่ทำงานแทนคุณตลอด 24 ชั่วโมง
              ด้วยงานที่เนี๊ยบและใส่ใจในทุกรายละเอียด เพื่อให้ธุรกิจ SME
              และโรงงานของคุณได้ผลลัพธ์ที่จับต้องได้จริงครับ
            </motion.p>
          </div>

          {/* 2️⃣ Features Grid: จุดแข็งที่ผมเตรียมไว้ให้ธุรกิจคุณ */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {highlightFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative rounded-[2.5rem] border border-slate-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/20 hover:shadow-2xl"
              >
                <div
                  className={`${feature.bg} ${feature.color} mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-500 group-hover:rotate-12`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>

                <h3 className="font-prompt mb-4 text-xl font-black text-slate-900 uppercase italic">
                  {feature.title}
                </h3>
                <p className="font-anuphan text-sm leading-relaxed font-bold text-slate-400 transition-colors group-hover:text-slate-500">
                  {feature.description}
                </p>

                {/* จุดตกแต่งเล็กๆ เพิ่มความเนี๊ยบ */}
                <div className="absolute top-10 right-10 h-2 w-2 rounded-full bg-slate-100 transition-all duration-500 group-hover:scale-[3] group-hover:bg-emerald-500/20" />
              </motion.div>
            ))}
          </div>

          {/* 3️⃣ ส่วนเน้นผลลัพธ์ (Marketing Hook) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[3.5rem] bg-slate-950 p-12 text-white shadow-2xl md:p-24"
          >
            {/* Background Glow */}
            <div
              className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-[80px]"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center gap-12 lg:flex-row lg:text-left">
              <div className="flex-1">
                <h3 className="font-prompt mb-8 text-3xl leading-none font-black tracking-tight uppercase italic md:text-5xl lg:text-6xl">
                  เปลี่ยน "เว็บจืดๆ" <br />
                  ให้เป็น{" "}
                  <span className="text-emerald-400">"อาวุธทำเงิน"</span>
                </h3>
                <p className="font-anuphan max-w-xl text-lg font-bold text-slate-400">
                  ผมออกแบบเว็บไซต์โดยเน้นการจัดลำดับข้อมูลที่จูงใจให้ลูกค้าตัดสินใจง่ายขึ้น
                  พร้อมความเร็วและการรองรับที่เหนือกว่าคู่แข่ง
                  เพื่อให้ธุรกิจของคุณเติบโตได้จริง
                </p>
              </div>

              <div className="flex flex-shrink-0 flex-col items-center gap-6 rounded-[2.5rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                  <TrendingUp className="h-10 w-10 text-slate-950" />
                </div>
                <div className="text-center">
                  <div className="font-prompt text-5xl font-black tracking-tighter text-white">
                    +300%
                  </div>
                  <div className="mt-2 text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase">
                    Conversion Boost
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LandingContent
