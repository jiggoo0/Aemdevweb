/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Clock3,
  Search,
  LayoutTemplate,
} from "lucide-react"

/**
 * ข้อมูลจุดแข็งของระบบงาน (Value Props)
 * มุ่งเน้นไปที่ความไว การค้นหา และการเปลี่ยนผู้ชมเป็นลูกค้า
 */
const advantages = [
  {
    icon: Clock3,
    title: "ความไวระดับสูงสุด",
    description:
      "ระบบงานโหลดเสร็จทันทีโดยไม่ต้องรอ ลดโอกาสที่ลูกค้าจะปิดหน้าเว็บทิ้งเพราะความอืด",
    detail: "LCP ต่ำกว่า 1.0 วินาทีตามมาตรฐานปี 2026",
  },
  {
    icon: Search,
    title: "โครงสร้างรองรับการค้นหา",
    description:
      "วางระบบพิกัดข้อมูลให้ระบบค้นหาและ AI เข้าใจเนื้อหาธุรกิจได้แม่นยำตั้งแต่เลเยอร์แรก",
    detail: "เน้นการทำอันดับแบบ Organic โดยตรง",
  },
  {
    icon: LayoutTemplate,
    title: "เน้นผลลัพธ์การปิดยอด",
    description:
      "จัดวางองค์ประกอบให้ผู้ใช้งานตัดสินใจติดต่อสอบถามได้ง่ายที่สุด ผ่านช่องทางที่คุณกำหนด",
    detail: "Conversion Rate Focused Design",
  },
]

/**
 * ValueProp - ส่วนแสดงข้อเปรียบเทียบและคุณภาพงานเทคนิค
 * ออกแบบตามแนวทาง Industrial Minimalism ของ AEMDEVWEB
 */
const ValueProp = () => {
  return (
    <section className="container mx-auto px-6 py-24 lg:py-32">
      <div className="flex flex-col gap-20 lg:flex-row lg:items-center">
        {/* 1. ส่วนเนื้อหาและรายละเอียดจุดแข็ง */}
        <div className="flex-1 lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5"
          >
            <Zap className="h-4 w-4 text-emerald-600" />
            <span className="font-heading text-[10px] font-black tracking-[0.3em] text-emerald-700 uppercase">
              Technical Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading mb-8 text-4xl leading-[1.1] font-black tracking-tighter text-slate-900 uppercase italic md:text-6xl"
          >
            สร้างความต่างที่ <br />
            <span className="text-gradient-emerald">วัดผลได้จริง</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-body mb-16 text-lg leading-relaxed font-bold text-slate-500"
          >
            เราไม่ได้แค่ทำเว็บไซต์ให้เสร็จ
            แต่เราวางระบบที่ทรงพลังที่สุดให้ธุรกิจ SME และโรงงานอุตสาหกรรม
            ด้วยงานเทคนิคระดับสูงที่เน้นความเร็วและความเสถียรในระยะยาว
          </motion.p>

          <div className="grid gap-12 sm:grid-cols-1">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-6"
              >
                <div className="mt-1 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-500/20 group-hover:shadow-xl group-hover:shadow-emerald-500/5">
                  <item.icon className="h-8 w-8 text-slate-900 transition-colors group-hover:text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-heading mb-2 text-xl font-black text-slate-950 uppercase italic">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed font-bold text-slate-500">
                    {item.description}
                  </p>
                  <div className="mt-3 text-[10px] font-black tracking-[0.15em] text-emerald-600 uppercase">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. ส่วนแสดงกราฟเปรียบเทียบประสิทธิภาพ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex-1 lg:pl-10"
        >
          <div className="relative z-10 overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-12 shadow-2xl md:p-16">
            <div
              className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-center opacity-[0.03]"
              aria-hidden="true"
            />

            <div className="mb-12 flex items-center justify-between border-b border-slate-100 pb-8">
              <div className="font-heading text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
                Performance Check
              </div>
              <BarChart3 className="h-6 w-6 text-slate-400" />
            </div>

            {/* กราฟเปรียบเทียบ: AEM Engine vs General Web */}
            <div className="space-y-12">
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <span className="text-slate-950">AEM Engine v2026</span>
                  <span className="text-emerald-500">99.8%</span>
                </div>
                <div className="h-5 w-full overflow-hidden rounded-full border border-slate-100 bg-slate-50 p-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <span>เว็บสำเร็จรูปทั่วไป</span>
                  <span>42.3%</span>
                </div>
                <div className="h-5 w-full overflow-hidden rounded-full border border-slate-100 bg-slate-50 p-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "42.3%" }}
                    transition={{ duration: 1, ease: "circOut" }}
                    className="h-full rounded-full bg-slate-200"
                  />
                </div>
              </div>
            </div>

            {/* ยืนยันมาตรฐานความปลอดภัยและความเสถียร */}
            <div className="group relative mt-20 overflow-hidden rounded-[2.5rem] bg-slate-950 p-10 text-center shadow-2xl transition-transform hover:scale-[1.02]">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <ShieldCheck className="relative z-10 mx-auto mb-6 h-12 w-12 text-emerald-400" />
              <div className="font-heading relative z-10 text-xl font-black tracking-widest text-white uppercase italic">
                Technical Mastery
              </div>
              <div className="font-heading relative z-10 mt-3 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                มาตรฐานงานระดับพรีเมียม 100%
              </div>
            </div>
          </div>

          {/* เงาตกแต่งด้านหลัง */}
          <div className="absolute -right-8 -bottom-8 -z-10 h-full w-full rounded-[3.5rem] border border-slate-100 bg-slate-50/50" />
        </motion.div>
      </div>
    </section>
  )
}

export default ValueProp
