/** @format */

"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "คุณวิภาวี รักสุขภาพ",
    role: "คนไข้ประจำแผนกทันตกรรม",
    content:
      "ประทับใจการบริการของคุณหมอและพี่ๆ พยาบาลมากค่ะ ให้คำปรึกษาดีมาก สถานที่สะอาด ทันสมัย เดินทางสะดวกจริงๆ ค่ะ",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "คุณธนพล ใจดี",
    role: "คนไข้โปรแกรมตรวจสุขภาพ",
    content:
      "มาตรวจสุขภาพประจำปีที่นี่ทุกปีครับ รวดเร็ว ไม่ต้องรอนาน ผลตรวจละเอียดและคุณหมออธิบายเข้าใจง่ายมากครับ",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "คุณสมศรี มีสุข",
    role: "คนไข้แผนกกายภาพบำบัด",
    content:
      "ทำกายภาพที่นี่แล้วอาการปวดหลังดีขึ้นมาก นักกายภาพเก่งและดูแลอย่างใกล้ชิด แนะนำเลยสำหรับคนที่มีปัญหาออฟฟิศซินโดรม",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&auto=format&fit=crop",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    /**
     * ✅ ปิดกฎ ESLint เฉพาะจุดสำหรับแพทเทิร์น Hydration Fix
     * การใช้ useEffect เพื่อเช็ค mounted state เป็นสิ่งที่จำเป็นใน Next.js
     * เพื่อป้องกัน Hydration Mismatch ระหว่าง Server และ Client
     */
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true)

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // แสดง Skeleton ระหว่างที่ Client ยังโหลดไม่เสร็จ เพื่อรักษา Layout Stability
  if (!isMounted) {
    return (
      <div className="h-[400px] w-full animate-pulse rounded-[3rem] bg-slate-50" />
    )
  }

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24"
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 md:text-5xl">
            ความประทับใจจากคนไข้
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-sky-500" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative rounded-[3rem] bg-slate-50 p-8 md:p-16"
            >
              <Quote
                className="absolute right-12 top-12 text-sky-200"
                size={80}
                strokeWidth={1}
              />

              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left lg:flex-row lg:gap-12">
                {/* ─── Image Section (Next.js Optimized) ─── */}
                <div className="mb-8 flex-shrink-0 lg:mb-0">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-32 md:w-32">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 96px, 128px"
                      priority={current === 0}
                    />
                  </div>
                </div>

                {/* ─── Content Section ─── */}
                <div className="flex-1">
                  <div className="mb-4 flex justify-center gap-1 text-orange-400 md:justify-start">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mb-8 text-xl font-medium italic leading-relaxed text-slate-700 md:text-2xl">
                    "{testimonials[current].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-sky-600">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ─── Navigation Controls ─── */}
          <div className="mt-12 flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-sky-600 hover:text-white hover:shadow-lg active:scale-95"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:bg-sky-600 hover:text-white hover:shadow-lg active:scale-95"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
