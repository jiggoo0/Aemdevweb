/** @format */

"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  PenTool,
  Code2,
  Rocket,
  ShieldCheck,
  MessagesSquare,
} from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * 🛤️ ขั้นตอนการทำงาน (My Working Process)
 * ผมแบ่งขั้นตอนให้ชัดเจน เพื่อให้คุณมั่นใจว่างานจะออกมาเนี๊ยบและตรงเวลาครับ
 */
const steps = [
  {
    title: "คุยกลยุทธ์ธุรกิจ",
    description:
      "ผมเริ่มจากการฟังโจทย์ของคุณ เพื่อวางแผนโครงสร้างเว็บที่ช่วยแก้ปัญหาธุรกิจและเน้นปิดการขายได้จริง",
    icon: MessagesSquare,
  },
  {
    title: "ออกแบบอย่างมีระดับ",
    description:
      "ดีไซน์หน้าเว็บให้ดูแพง ทันสมัย และต้องใช้งานง่ายทั้งบนคอมและมือถือ เพื่อภาพลักษณ์ที่ดีของแบรนด์คุณ",
    icon: PenTool,
  },
  {
    title: "ลงมือสร้างด้วยใจ",
    description:
      "ผมเขียนโค้ดด้วยเทคโนโลยีล่าสุด เพื่อให้เว็บคุณโหลดไวที่สุดและปลอดภัยที่สุด เหนือกว่าเว็บทั่วไปแน่นอน",
    icon: Code2,
  },
  {
    title: "ส่งมอบความสำเร็จ",
    description:
      "ตรวจสอบความเรียบร้อยทุกจุดก่อนออนไลน์ พร้อมสอนวิธีใช้งานเบื้องต้น เพื่อให้คุณเริ่มธุรกิจได้ทันที",
    icon: Rocket,
  },
]

/**
 * 🏗️ WorkProcess — "ทำงานกับผม ง่ายและเป็นระบบ"
 * ส่วนนี้ผมแสดงให้เห็นถึงความใส่ใจในทุกขั้นตอนการสร้างเว็บไซต์ครับ
 */
const WorkProcess = () => {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="relative z-10 container mx-auto px-4">
        {/* 📣 ส่วนหัวข้อ: บอกเล่าถึงความเป็นมืออาชีพ */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span className="font-prompt text-[10px] font-black tracking-[0.3em] text-emerald-400 uppercase">
              My Professional Workflow
            </span>
          </motion.div>

          <h2 className="font-prompt mb-6 text-4xl leading-none font-black tracking-tighter text-white uppercase italic md:text-6xl">
            ขั้นตอนการทำงาน <br className="hidden md:block" />
            <span className="text-emerald-500">ที่เนี๊ยบและวัดผลได้จริง</span>
          </h2>
        </div>

        {/* 🛤️ ส่วนไทม์ไลน์: ลำดับการทำงาน (Process Timeline) */}
        <div className="relative mx-auto max-w-5xl">
          {/* เส้นแกนกลาง (แสดงผลเฉพาะหน้าจอคอม) */}
          <div
            className="absolute top-0 left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald-500/50 via-white/10 to-transparent lg:block"
            aria-hidden="true"
          />

          <div className="space-y-16 lg:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={cn(
                  "relative flex flex-col items-center gap-8 lg:flex-row lg:gap-20",
                  index % 2 !== 0 && "lg:flex-row-reverse"
                )}
              >
                {/* 🛡️ ส่วนของไอคอนลำดับขั้นตอน */}
                <div className="relative z-10 flex h-24 w-24 shrink-0 items-center justify-center rounded-[2.5rem] bg-white text-slate-950 shadow-2xl ring-8 ring-white/5 transition-all duration-500 hover:scale-110 hover:rotate-6">
                  <step.icon className="h-10 w-10" />
                  <div className="font-prompt absolute -right-2 -bottom-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-950 bg-emerald-500 text-sm font-black text-slate-950 shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* 📝 การ์ดแสดงรายละเอียดเนื้อหา */}
                <div
                  className={cn(
                    "w-full rounded-[3rem] border border-white/10 bg-white/5 p-10 backdrop-blur-md transition-all duration-500 hover:border-emerald-500/30 hover:bg-white/10 md:p-14 lg:flex-1",
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  )}
                >
                  <h3 className="font-prompt mb-4 text-2xl font-black tracking-tight text-white uppercase italic md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="font-anuphan text-lg leading-relaxed font-bold text-slate-400">
                    {step.description}
                  </p>
                </div>

                {/* ช่องว่างเพื่อความสมดุลของ Layout (เฉพาะหน้าจอคอม) */}
                <div className="hidden lg:block lg:flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
