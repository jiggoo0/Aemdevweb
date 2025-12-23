/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ShieldCheck, Globe, Quote } from "lucide-react"
import { reviews } from "@/data/reviews" // 👈 ดึงข้อมูลจากไฟล์ data ของคุณ

const SocialProof = () => {
  // จำลอง Client Logos (ดึงมาจาก data อื่นๆ ได้ในอนาคต)
  const clients = [
    { name: "The Prime Estate", id: 1 },
    { name: "Care Dental Clinic", id: 2 },
    { name: "Steel Structure หจก.", id: 3 },
    { name: "Urban Cafe 24", id: 4 },
  ]

  return (
    <section
      className="relative overflow-hidden border-y-4 border-slate-900 bg-white py-20 md:py-28"
      id="social-proof"
    >
      <div className="absolute inset-0 -z-10 bg-industrial-grid opacity-[0.03]" />

      <div className="container relative z-20 mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* 1. STATUS LABEL */}
          <div className="mb-16 flex w-full items-center justify-center gap-6">
            <div className="hidden h-px flex-grow bg-slate-200 md:block" />
            <div className="flex items-center gap-3 border-2 border-slate-900 bg-white px-6 py-2 shadow-enterprise-sm">
              <ShieldCheck size={14} className="text-blue-600" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-900">
                Verified Client Testimonials
              </span>
            </div>
            <div className="hidden h-px flex-grow bg-slate-200 md:block" />
          </div>

          {/* 2. STATS & EXPERIENCE */}
          <div className="mb-16 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border-2 border-slate-900 bg-white p-8 shadow-enterprise-sm">
              <Globe size={24} className="mb-4 text-blue-600" />
              <p className="text-5xl font-black tracking-tighter text-slate-900">
                150+
              </p>
              <p className="mt-2 text-xs font-black uppercase tracking-widest text-slate-500">
                Successful Projects Launched
              </p>
            </div>
            <div className="flex flex-col justify-center border-2 border-slate-900 bg-slate-900 p-8 text-white shadow-enterprise-sm">
              <div className="mb-2 flex gap-1 text-blue-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-2xl font-black italic tracking-tight">
                "ความพึงพอใจ 4.9/5.0"
              </p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                จากผู้ประกอบการ SME ทั่วประเทศ
              </p>
            </div>
          </div>

          {/* 3. ANIMATED REVIEWS: INFINITE MARQUEE (ดึงข้อมูลจาก Data) */}
          <div className="relative flex w-full overflow-hidden py-10">
            <motion.div
              className="flex gap-6 whitespace-nowrap"
              animate={{ x: [0, -1000] }} // ปรับระยะตามจำนวนข้อมูล
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40, // ความเร็วในการเลื่อน (ยิ่งมากยิ่งช้า)
                  ease: "linear",
                },
              }}
            >
              {/* เรนเดอร์รีวิว 2 ชุดเพื่อให้เลื่อนต่อเนื่องแบบไร้รอยต่อ */}
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="relative w-[350px] flex-shrink-0 border-2 border-slate-900 bg-white p-8 shadow-enterprise-sm"
                >
                  <Quote className="absolute right-6 top-6 h-8 w-8 text-slate-50" />
                  <div className="mb-4 flex gap-0.5 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-6 whitespace-normal font-bold italic leading-relaxed text-slate-700">
                    "{review.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-10 w-10 border border-slate-900 bg-slate-100"
                    />
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                        {review.name}
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-tight text-blue-600">
                        {review.businessType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Fade Gradients สำหรับหัวและท้ายแถวเพื่อความ Cinematic */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />
          </div>

          <div className="mt-12 flex items-center gap-3 opacity-30">
            <span className="text-[8px] font-black uppercase tracking-[0.5em]">
              Active Ecosystem Monitoring v2.5
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
