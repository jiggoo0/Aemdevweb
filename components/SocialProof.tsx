/** @format */
"use client"

import React from "react"
import { motion } from "framer-motion"
import { Star, ShieldCheck, Globe, Quote, CheckCircle2 } from "lucide-react"
import { reviews } from "@/data/reviews"
// 1. นำเข้า Next Image
import Image from "next/image"

const SocialProof = () => {
  return (
    <section
      className="relative overflow-hidden border-y-[6px] border-slate-900 bg-white py-24 md:py-32"
      id="social-proof"
    >
      {/* ... (Blueprint Grid คงเดิม) ... */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="mx-auto max-w-[1440px] px-6">
        <div className="flex flex-col items-center">
          {/* ... (Status Label & Stats คงเดิม) ... */}

          {/* ─── 3. INFINITE MARQUEE REVIEWS ─── */}
          <div className="relative w-screen overflow-hidden py-10">
            <motion.div
              className="flex w-max gap-8 px-4 will-change-transform"
              animate={{ x: [0, "-50%"] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 50,
                  ease: "linear",
                },
              }}
            >
              {[...reviews, ...reviews, ...reviews].map((review, index) => (
                <div
                  key={`${review.id}-${index}`}
                  className="relative w-[380px] border-4 border-slate-900 bg-white p-10 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)]"
                >
                  <Quote className="absolute right-8 top-8 h-12 w-12 text-slate-50" />

                  <div className="mb-6 flex gap-1 text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  <p className="mb-10 min-h-[100px] text-base font-bold italic leading-relaxed text-slate-700">
                    "{review.comment}"
                  </p>

                  <div className="flex items-center gap-4 border-t-2 border-slate-100 pt-6">
                    {/* 2. ปรับปรุงส่วนรูปภาพ Avatar */}
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden border-2 border-slate-900">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                        // ถ้าดึงรูปจากเว็บอื่นโดยไม่ได้เซ็ต domains ใน config ให้ใส่ unoptimized
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black uppercase tracking-widest text-slate-900">
                        {review.name}
                      </span>
                      <span className="mt-1 self-start border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-tight text-blue-600">
                        {review.businessType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Cinematic Gradient Overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-white via-white/80 to-transparent" />
          </div>

          {/* Footer Detail */}
          <div className="mt-20 flex flex-col items-center gap-4 opacity-40">
            <div className="h-10 w-[2px] bg-slate-900" />
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">
              AEMDEVWEB / ECOSYSTEM_TRUST_PROTOCOL
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
