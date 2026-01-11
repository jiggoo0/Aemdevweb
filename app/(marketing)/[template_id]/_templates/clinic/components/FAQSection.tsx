/** @format */

"use client"

import React, { useState } from "react"
import { Plus, Minus, HelpCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "ต้องสำรองนัดหมายล่วงหน้าหรือไม่?",
    answer:
      "เพื่อความสะดวกและลดระยะเวลาการรอคอย แนะนำให้ท่านทำการนัดหมายล่วงหน้าอย่างน้อย 1-2 วัน ผ่านระบบออนไลน์หรือโทรติดต่อเจ้าหน้าที่โดยตรงครับ",
  },
  {
    question: "ทางคลินิกรับสิทธิประกันสุขภาพประเภทใดบ้าง?",
    answer:
      "เรายินดีรับสิทธิประกันสุขภาพกลุ่มและประกันชีวิตจากบริษัทชั้นนำเกือบทุกแห่ง รวมถึงสามารถออกใบรับรองแพทย์เพื่อใช้ประกอบการเบิกค่ารักษาตามจริงได้ครับ",
  },
  {
    question: "มีที่จอดรถให้บริการหรือไม่?",
    answer:
      "เรามีพื้นที่จอดรถกว้างขวางให้บริการฟรีสำหรับคนไข้ที่มาใช้บริการ บริเวณด้านหน้าและด้านข้างอาคารคลินิกครับ",
  },
  {
    question: "สามารถรับผลตรวจสุขภาพผ่านช่องทางออนไลน์ได้ไหม?",
    answer:
      "ได้ครับ หลังจากตรวจเสร็จสิ้น ท่านสามารถเลือกรับผลตรวจผ่านทาง E-mail หรือ Line Official Account ของคลินิกได้เพื่อความรวดเร็ว",
  },
]

export default function FAQSection() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setActiveIdx(activeIdx === index ? null : index)
  }

  return (
    <section className="bg-slate-50 py-24">
      <div className="container mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-bold text-sky-700">
            <HelpCircle size={18} />
            <span>Support & Help</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            คำถามที่พบบ่อย
          </h2>
          <p className="mt-4 text-slate-500">
            ไขข้อสงสัยเบื้องต้นเกี่ยวกับการรับบริการที่ AEM Medical Center
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIdx === idx
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-sky-200 bg-white shadow-xl shadow-sky-100/50"
                    : "border-slate-200 bg-white/50 hover:border-sky-200"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex w-full items-center justify-between p-6 text-left md:p-8"
                >
                  <span
                    className={`text-lg font-bold transition-colors ${isOpen ? "text-sky-600" : "text-slate-900"}`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "rotate-180 bg-sky-600 text-white" : "bg-slate-100 text-slate-500"}`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="border-t border-slate-100 p-6 pt-0 md:p-8 md:pt-0">
                        <p className="leading-relaxed text-slate-600">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-slate-500">
            หากท่านมีคำถามอื่นๆ เพิ่มเติม สามารถสอบถามเจ้าหน้าที่ได้ที่เบอร์
            <span className="ml-2 font-bold text-sky-600 underline">
              02-123-4567
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
