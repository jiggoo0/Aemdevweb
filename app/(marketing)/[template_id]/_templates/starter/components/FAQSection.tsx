/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: ELITE BUSINESS & THAI-USER EXPERIENCE
// Identity: Production Professional (Sharp Accordion System)
// Fix: Layout Stability & Thai Typography Optimized
// ----------------------------------------------------

"use client"

import React, { useState } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQSection() {
  // เริ่มต้นด้วยการเปิดคำถามแรกไว้เพื่อเป็น Guide ให้ผู้ใช้งาน
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "ต้องเตรียมข้อมูลอะไรบ้างในการเริ่มงาน?",
      a: "เตรียมเพียงข้อมูลพื้นฐานธุรกิจ รูปภาพสินค้า/บริการ และเบอร์โทรติดต่อครับ ทีมงานจะช่วยเรียบเรียงเนื้อหาให้เข้ากับโครงสร้างเว็บไซต์ที่โหลดไวที่สุดให้เอง",
    },
    {
      q: "เว็บไซต์รองรับการแสดงผลในมือถือหรือไม่?",
      a: "รองรับ 100% ครับ เราใช้ระบบ Responsive มาตรฐานสากล เว็บจะปรับขนาดให้สวยงามอัตโนมัติทั้งบน iPhone, Android และแท็บเล็ตทุกรุ่น",
    },
    {
      q: "มีค่าใช้จ่ายรายปีเพิ่มเติมไหม?",
      a: "ในปีแรกราคาแพ็กเกจรวมค่าจดชื่อเว็บและพื้นที่จัดเก็บแล้วครับ ปีถัดไปจะมีเพียงค่าต่ออายุชื่อโดเมนและเซิร์ฟเวอร์ตามจริง ซึ่งเราจะแจ้งเตือนล่วงหน้า 30 วัน",
    },
  ]

  return (
    <section id="faq" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl border-x border-slate-200 bg-white">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          {/* 1. SECTION_SIDEBAR: หัวข้อหลัก */}
          <div className="border-b border-slate-200 bg-white p-10 md:col-span-4 md:border-b-0 md:border-r md:p-16">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
              Common_Inquiries
            </span>
            <h2 className="text-4xl font-black uppercase leading-[1.1] tracking-tighter">
              คำถาม <br />
              ที่พบบ่อย
            </h2>
          </div>

          {/* 2. ACCORDION_LIST: รายการคำถามแบบโต้ตอบ */}
          <div className="flex flex-col bg-white md:col-span-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`cursor-pointer border-b border-slate-200 transition-all duration-300 last:border-b-0 ${
                  openIndex === idx ? "bg-slate-50/80" : "hover:bg-slate-50"
                }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {/* QUESTION_ROW */}
                <div className="flex items-center justify-between gap-4 p-8">
                  <h3
                    className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                      openIndex === idx ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {faq.q}
                  </h3>
                  <div
                    className={`flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : "rotate-0"}`}
                  >
                    {openIndex === idx ? (
                      <Minus size={20} className="text-blue-600" />
                    ) : (
                      <Plus size={20} className="text-slate-400" />
                    )}
                  </div>
                </div>

                {/* ANSWER_ROW: แอนิเมชันเปิด-ปิดที่นุ่มนวล */}
                {openIndex === idx && (
                  <div className="px-8 pb-8 font-medium leading-relaxed text-slate-500 duration-300 animate-in fade-in slide-in-from-top-2">
                    <p className="max-w-2xl text-base">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
