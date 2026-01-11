/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle2 } from "lucide-react"
import { reviews } from "@/data/reviews"
import Image from "next/image"

const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden border-y-[8px] border-slate-900 bg-white py-24 lg:py-32"
      id="social-proof"
    >
      {/* ─── BACKGROUND ARCHITECTURE (Blueprint Grid) ─── */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] opacity-30 [background-size:40px_40px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px]">
        {/* ─── 1. TRUST STATS HEADER ─── */}
        <div className="mb-16 px-6 text-center lg:mb-24">
          <div className="mb-6 inline-flex items-center gap-3 border-4 border-slate-900 bg-yellow-400 px-6 py-2 shadow-[6px_6px_0px_0px_rgba(15,23,42,1)]">
            <CheckCircle2 size={16} className="text-slate-900" />
            <span className="text-xs font-black uppercase tracking-[0.4em] text-slate-900">
              Trust_Protocol_Active
            </span>
          </div>

          <h2 className="font-heading text-4xl font-black uppercase tracking-tighter text-slate-900 md:text-7xl">
            ผลลัพธ์ที่พิสูจน์ได้ <br />
            <span className="text-[#1E3A8A]">โดยทีมวิศวกรและพาร์ทเนอร์</span>
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-12 border-y-2 border-dashed border-slate-200 py-10">
            {[
              { label: "Happy Clients", value: "50+", suffix: "" },
              { label: "Projects Delivered", value: "120+", suffix: "" },
              { label: "Customer Satisfaction", value: "99", suffix: "%" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black tracking-tighter text-slate-900 md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── 2. INFINITE MARQUEE REVIEWS ─── */}
        {/* ใช้การเลื่อนแบบไร้รอยต่อ (Seamless Loop) */}
        <div className="relative w-full overflow-hidden py-12">
          <motion.div
            className="flex w-max gap-8 px-4"
            animate={{ x: [0, "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50, // ปรับความเร็วให้พอดีกับการอ่าน
                ease: "linear",
              },
            }}
          >
            {/* วนลูป reviews 2 รอบเพื่อให้ Marquee ทำงานได้ต่อเนื่อง */}
            {[...reviews, ...reviews].map((review, index) => (
              <article
                key={`${review.id}-${index}`}
                className="group relative w-[380px] border-4 border-slate-900 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(30,58,138,1)] md:w-[420px]"
              >
                <Quote
                  className="absolute right-8 top-8 h-12 w-12 text-slate-50 transition-colors group-hover:text-blue-50/50"
                  aria-hidden="true"
                />

                <div className="mb-6 flex items-center justify-between">
                  <div className="flex gap-1 text-[#F97316]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill={i < review.rating ? "currentColor" : "none"}
                        stroke={i < review.rating ? "none" : "currentColor"}
                        strokeWidth={2}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[9px] font-black text-slate-300">
                    LOG_#{String(index + 1).padStart(3, "0")}
                  </span>
                </div>

                <blockquote className="mb-10 min-h-[120px] text-lg font-bold italic leading-relaxed text-slate-800">
                  "{review.comment}"
                </blockquote>

                <div className="flex items-center gap-4 border-t-4 border-slate-900 pt-8 transition-colors group-hover:border-[#1E3A8A]">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden border-2 border-slate-900 bg-slate-100 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)]">
                    <Image
                      src={review.avatar || "/images/avatar-placeholder.webp"}
                      alt={review.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover grayscale transition-all group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <cite className="text-sm font-black uppercase not-italic tracking-tighter text-slate-900">
                      {review.name}
                    </cite>
                    <span className="mt-1 self-start bg-slate-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white">
                      {review.businessType}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>

          {/* Cinematic Faders: ไล่สีพื้นหลังให้ Marquee ดูนุ่มนวลที่ขอบ */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white via-white/80 to-transparent md:w-64" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white via-white/80 to-transparent md:w-64" />
        </div>

        {/* ─── 3. FOOTER CTA ─── */}
        <div className="mt-20 flex flex-col items-center">
          <div className="h-16 w-[4px] bg-slate-100" />
          <p className="mt-8 font-mono text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">
            Verified_Experiences // End_Of_Stream
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
