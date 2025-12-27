/** @format */
// ----------------------------------------------------
// 🚀 AI CONTEXT: WOOD BUSINESS FAQ SECTION (SUKHOTHAI)
// Identity: Expert Consultant (ผู้ช่วยแก้ไขข้อสงสัย)
// ----------------------------------------------------

"use client"

import React, { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

// ✅ แก้ไข TS2322: เพิ่ม Interface สำหรับ Props เพื่อรับ themeColor
interface FAQSectionProps {
  themeColor?: string
}

export default function FAQSection({
  themeColor = "#7B3F00",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs: FAQItem[] = [
    {
      question: "ทางโรงไม้มีบริการจัดส่งถึงหน้างานในอำเภอไหนบ้าง?",
      answer:
        "เรามีรถขนส่งส่วนตัวให้บริการครอบคลุมทั้ง 9 อำเภอในจังหวัดสุโขทัย (เมือง, กงไกรลาศ, สวรรคโลก, ศรีสำโรง, ศรีสัชนาลัย, คีรีมาศ, ทุ่งเสลี่ยม, บ้านด่านลานหอย, ศรีนคร) และจังหวัดใกล้เคียงอย่างพิษณุโลกหรือตากด้วยครับ",
    },
    {
      question: "ไม้แปรรูปของที่ร้านมีการอบแห้งและกันปลวกหรือไม่?",
      answer:
        "ไม้โครงและไม้แปรรูปเกรด A ของเราผ่านกระบวนการอบแห้ง (Kiln Dried) เพื่อลดการบิดงอ และมีการลงน้ำยากันปลวกมาตรฐานโรงงาน พร้อมสำหรับการนำไปใช้งานก่อสร้างหรือตกแต่งทันทีครับ",
    },
    {
      question: "ถ้าต้องการใช้ไม้จำนวนมากสำหรับงานโครงการ มีราคาส่งไหม?",
      answer:
        "มีครับ! เรามีราคาส่งพิเศษสำหรับผู้รับเหมาและงานโครงการที่สั่งซื้อจำนวนมาก พร้อมบริการออกใบเสนอราคาอย่างรวดเร็วและออกใบกำกับภาษีได้ถูกต้องครับ",
    },
    {
      question: "สามารถเข้าไปดูหน้าไม้จริงที่โรงงานได้วันไหนบ้าง?",
      answer:
        "ลูกค้าสามารถเข้ามาเลือกดูหน้าไม้จริงได้ที่โรงงานใน อ.กงไกรลาศ ได้ทุกวันจันทร์ - เสาร์ เวลา 08:00 - 17:00 น. แนะนำให้โทรนัดหมายก่อนเพื่อความสะดวกในการจัดเตรียมเจ้าหน้าที่พาชมครับ",
    },
  ]

  return (
    <section
      id="faq"
      className="overflow-hidden border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl border-x border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* 1. LEFT_SIDE: หัวข้อและคำโปรยเชิงวิชาการงานช่าง */}
          <div className="border-b border-slate-200 bg-slate-50/30 p-10 md:col-span-4 md:border-b-0 md:border-r md:p-20">
            <div
              className="mb-8 flex h-12 w-12 items-center justify-center border border-slate-200 bg-white shadow-sm"
              style={{ color: themeColor }}
            >
              <HelpCircle size={24} />
            </div>
            <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-slate-900 md:text-5xl">
              QUESTIONS <br />
              <span className="text-slate-400">& ANSWERS</span>
            </h2>
            <div className="space-y-4">
              <p
                className="text-sm font-black uppercase tracking-widest"
                style={{ color: themeColor }}
              >
                ไขข้อสงสัยงานไม้
              </p>
              <p className="text-base font-medium leading-relaxed text-slate-500">
                รวบรวมข้อมูลเทคนิคและการบริการที่ลูกค้าสอบถามบ่อยที่สุด
                เพื่อให้คุณมั่นใจในคุณภาพไม้จากสุโขทัยค้าไม้
              </p>
            </div>
          </div>

          {/* 2. RIGHT_SIDE: รายการคำถามแบบ Accordion ที่ดูสะอาดตา */}
          <div className="md:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={index}
                  className={`border-b border-slate-200 transition-colors duration-500 last:border-b-0 ${isOpen ? "bg-slate-50/80" : "bg-white"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="group flex w-full items-center justify-between p-8 text-left transition-all md:p-12"
                  >
                    <div className="flex items-center gap-6">
                      <span
                        className="hidden font-mono text-xs font-bold text-slate-300 transition-colors md:block"
                        style={isOpen ? { color: themeColor } : {}}
                      >
                        0{index + 1}
                      </span>
                      <span className="text-lg font-black tracking-tight text-slate-900 transition-transform group-hover:translate-x-1 md:text-xl">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-300 ${isOpen ? "rotate-180 text-white" : "border-slate-100 bg-white text-slate-400"}`}
                      style={
                        isOpen
                          ? {
                              backgroundColor: themeColor,
                              borderColor: themeColor,
                            }
                          : {}
                      }
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>

                  {/* 📝 ANSWER_PANEL: แสดงคำตอบพร้อมดีไซน์เน้นเนื้อหา */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-8 pb-12 pt-0 md:px-28">
                      <div
                        className="mb-6 h-[2px] w-16"
                        style={{ backgroundColor: themeColor }}
                      />
                      <p className="text-base font-bold leading-relaxed text-slate-600 md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
