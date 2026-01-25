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
 * ข้อมูลความแตกต่างที่มอบให้ลูกค้า (Value Props)
 * เน้นผลลัพธ์เชิงประจักษ์: ความเร็ว, อันดับบนระบบค้นหา และยอดขาย
 */
const advantages = [
  {
    icon: Clock3,
    title: "เร็วแบบสั่งได้",
    description:
      "ระบบงานของพี่โหลดเสร็จในพริบตา ไม่ต้องรอจนลูกค้าหนี ช่วยเพิ่มโอกาสให้คนทักหาคุณมากขึ้น",
    detail: "ความไวระดับ LCP น้อยกว่า 1.0 วินาที",
  },
  {
    icon: Search,
    title: "ระบบค้นหาเจอได้ง่าย",
    description:
      "พี่วางโครงสร้างระบบให้ระบบค้นหาและ AI ยุคใหม่เข้าใจธุรกิจคุณทันที ไม่ต้องรอนานกว่าจะติดอันดับ",
    detail: "รองรับเทคโนโลยี Search AI 2026",
  },
  {
    icon: LayoutTemplate,
    title: "ออกแบบเพื่อปิดการขาย",
    description:
      "พี่ไม่ได้แค่จัดวางให้สวย แต่เน้นให้ลูกค้าตัดสินใจทัก LINE หรือโทรหาคุณให้ง่ายที่สุด",
    detail: "เน้นการเปลี่ยนผู้เข้าชมเป็นยอดขายจริง",
  },
]

/**
 * ValueProp - ส่วนแสดงความคุ้มค่าและประสิทธิภาพที่เหนือกว่า
 * ใช้เพื่อเปรียบเทียบระบบงานของ AEM กับเว็บไซต์ทั่วไปในตลาด
 */
const ValueProp = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
        {/* 1. ฝั่งเนื้อหา: การอธิบายคุณภาพและมาตรฐานงานเทคนิค */}
        <div className="flex-1 lg:max-w-xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5"
          >
            <Zap className="h-4 w-4 text-emerald-500" />
            <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-500 uppercase">
              The Edge of Excellence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-prompt mb-8 text-4xl leading-none font-black tracking-tighter text-slate-950 uppercase italic md:text-6xl"
          >
            เหนือกว่าด้วย <br />
            <span className="text-emerald-500 underline decoration-emerald-500/20 underline-offset-8">
              งานที่ประณีตกว่าใคร
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-anuphan mb-12 text-lg leading-relaxed font-bold text-slate-500"
          >
            พี่ไม่ได้แค่รับทำเว็บไซต์ไปวันๆ
            แต่สร้างหน้าร้านออนไลน์ที่ทรงพลังที่สุด ให้กับการดำเนินธุรกิจ SME
            และโรงงาน ด้วยงานคุณภาพสูงที่ตั้งใจทำให้ทุกโปรเจกต์ครับ
          </motion.p>

          <div className="space-y-10">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-6"
              >
                <div className="mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-emerald-500/30 group-hover:shadow-2xl">
                  <item.icon className="h-7 w-7 text-slate-900 transition-colors group-hover:text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-prompt mb-1 text-xl font-black text-slate-950 uppercase italic">
                    {item.title}
                  </h3>
                  <p className="font-anuphan text-sm leading-snug font-bold text-slate-500">
                    {item.description}
                  </p>
                  <div className="mt-2 text-[10px] font-black tracking-widest text-emerald-500/80 uppercase">
                    {item.detail}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. ฝั่งกราฟิก: ระบบเปรียบเทียบประสิทธิภาพการทำงาน (Performance Analytics) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex-1"
        >
          <div className="relative z-10 overflow-hidden rounded-[3.5rem] border border-slate-200 bg-white p-10 shadow-2xl md:p-16">
            <div
              className="absolute inset-0 -z-10 bg-[url('/grid.svg')] bg-fixed bg-center opacity-[0.03]"
              aria-hidden="true"
            />

            <div className="mb-12 flex items-center justify-between border-b border-slate-50 pb-6">
              <div className="font-prompt text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
                System Performance
              </div>
              <BarChart3 className="h-6 w-6 text-slate-300" />
            </div>

            {/* การแสดงผลกราฟเปรียบเทียบคะแนนความเร็ว */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <span className="text-slate-950">AEMDEVWEB Engine v2026</span>
                  <span className="text-emerald-500">99.8%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full border border-slate-100 bg-slate-50 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.8%" }}
                    transition={{ duration: 1.8, ease: "circOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-[11px] font-black tracking-[0.2em] text-slate-400 uppercase">
                  <span>เว็บสำเร็จรูปทั่วไป</span>
                  <span>42.3%</span>
                </div>
                <div className="h-4 w-full overflow-hidden rounded-full border border-slate-100 bg-slate-50 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "42.3%" }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className="h-full rounded-full bg-slate-200"
                  />
                </div>
              </div>
            </div>

            {/* ส่วนยืนยันมาตรฐานความเชื่อมั่น */}
            <div className="group relative mt-16 overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-center shadow-2xl">
              <div className="absolute inset-0 bg-emerald-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <ShieldCheck className="relative z-10 mx-auto mb-4 h-10 w-10 text-emerald-400" />
              <div className="font-prompt relative z-10 text-lg font-black tracking-widest text-white uppercase italic">
                Verified Technical Specialist
              </div>
              <div className="relative z-10 mt-2 text-[10px] font-black tracking-[0.4em] text-slate-500 uppercase">
                มาตรฐานงานระดับพรีเมียม 100%
              </div>
            </div>
          </div>

          <div className="absolute -right-6 -bottom-6 -z-10 h-full w-full rounded-[3.5rem] border border-slate-100 bg-slate-50/50 transition-transform group-hover:translate-x-2" />
        </motion.div>
      </div>
    </div>
  )
}

export default ValueProp
